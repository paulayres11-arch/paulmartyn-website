"""Word count of a page's real content.

Counts the text inside <main>, excluding scripts, anything marked data-nowc
(breadcrumbs, CTA blocks), and everything from the "Other services" band on.
Usage: python3 scripts/wordcount.py BASE_URL PATH [PATH ...]
"""
import re, subprocess, sys
from html.parser import HTMLParser

VOID = {"br","img","hr","input","meta","link","source","wbr","area","col","embed","param","track"}

class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.in_main=0; self.skip=0; self.stack=[]; self.out=[]; self.stop=False
    def handle_starttag(self, t, a):
        if t in VOID: return
        attrs=dict(a)
        skip = t in ("script","style","svg") or "data-nowc" in attrs
        self.stack.append((t, skip))
        if t=="main": self.in_main+=1
        if skip: self.skip+=1
    def handle_endtag(self, t):
        if t in VOID: return
        while self.stack:
            tag, skip = self.stack.pop()
            if skip: self.skip-=1
            if tag=="main": self.in_main-=1
            if tag==t: break
    def handle_data(self, d):
        if self.stop or not self.in_main or self.skip: return
        if d.strip()=="Other services": self.stop=True; return
        self.out.append(d)

base=sys.argv[1]
for path in sys.argv[2:]:
    html=subprocess.run(["curl","-s",base+path],capture_output=True,text=True).stdout
    p=P(); p.feed(html)
    words=re.findall(r"[A-Za-z0-9£][\w'’£,.–-]*", " ".join(p.out))
    print(f"{len(words):6d}  {path}")
