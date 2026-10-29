/**
 * Get in touch — the questions, the rules and the hand-off email.
 *
 * One module, imported by both the form (browser) and the submit route
 * (server), so the labels Sarah reads in the email, the options the client
 * picks from and the decline/hold rules can never drift apart. The spec is
 * Paul's "Get in Touch form: build spec" v1, 29 Oct 2026; labels and options
 * are copied from it exactly — Sarah files enquiries by them.
 *
 * Plans are NOT uploaded (Paul, 29 Oct 2026): clients email them to
 * PLANS_EMAIL instead, from a button on the final screen.
 */

export const PLANS_EMAIL = "sarah@paulmartynconstruction.com";

/**
 * Who gets the hand-off email: Sarah, with Paul in copy (Paul, 29 Oct 2026).
 * Overridable on the server with ENQUIRY_TO / ENQUIRY_CC.
 */
export const ENQUIRY_TO = PLANS_EMAIL;
export const ENQUIRY_CC = "paul@paulmartynconstruction.com";

export const YES_NO = ["Yes", "No"] as const;

export const FOUND_US = [
  "Planning application letter",
  "Instagram",
  "Google search",
  "Website",
  "Checkatrade",
  "Recommended by a friend or past client",
  "Architect or designer",
  "Other",
] as const;
/** `found_us` answers that reveal question 12a. */
export const FOUND_US_NEEDS_NAME = [
  "Recommended by a friend or past client",
  "Architect or designer",
];

export const PROJECT_TYPES = [
  "Extension",
  "Loft conversion",
  "Renovation",
  "Multiple room refurbishment",
  "New build",
  "External repair",
  "Landscaping or driveway",
] as const;
export const ROOMS = [
  "Kitchen",
  "Bathroom",
  "Ensuite",
  "Living areas",
  "Bedrooms",
  "Utility",
  "Other",
] as const;
export const PROPERTY_TYPES = ["House", "Flat", "Bungalow", "Other"] as const;
/** `property_type` answers that reveal question 16. */
export const PROPERTY_HAS_HOUSE_TYPE = ["House", "Bungalow"];
export const HOUSE_TYPES = [
  "Detached",
  "Semi-detached",
  "Terraced",
  "End of terrace",
] as const;
export const LISTED = [
  "Listed",
  "Conservation area",
  "Neither",
  "Don't know",
] as const;
export const OCCUPIED = ["Yes", "Partially", "No"] as const;
export const DRAWINGS = ["Yes, final", "Yes, outline", "No"] as const;
export const PLANNING = [
  "Granted",
  "Applied for",
  "Not needed",
  "Not yet applied",
  "Don't know",
] as const;
export const STRUCTURAL = [
  "Yes, and I have calcs",
  "Yes, no calcs yet",
  "No",
  "Don't know",
] as const;
export const BUDGETS = [
  "Under £50k",
  "£50k – £100k",
  "£100k – £250k",
  "£250k – £500k",
  "£500k – £1m",
  "£1m+",
  "Not decided yet",
] as const;
export const BUDGET_APPROACH = [
  "We want realistic guidance on the total cost from the start",
  "We have a fixed maximum and need to stay under it",
  "We'll decide what's possible once we see a price",
  "We want the best result and will spend what it takes",
] as const;
export const START_IDEAL = [
  "As soon as possible",
  "In 3 – 6 months",
  "In 6 – 9 months",
  "In 9 – 12 months",
  "12 months +",
  "Not sure yet",
] as const;
export const PRIORITIES = [
  "Realistic budget and cost guidance",
  "Reliability and communication",
  "Quality of workmanship",
  "Speed and keeping to programme",
  "Design help and ideas",
  "Minimal disruption while we live there",
] as const;
export const PRIORITY_COUNT = 3;
export const OTHER_BUILDERS = [
  "No, you're the first we've contacted",
  "Yes, one other",
  "Yes, two or more",
] as const;

export interface EnquiryAnswers {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  whatsapp_ok: string;
  address_1: string;
  address_2: string;
  town: string;
  postcode: string;
  offroad_parking: string;
  project_summary: string;
  found_us: string;
  recommended_by: string;
  project_type: string[];
  rooms: string[];
  property_type: string;
  house_type: string;
  listed_conservation: string;
  occupied_during: string;
  constraints: string;
  drawings: string;
  planning: string;
  structural: string;
  budget: string;
  budget_approach: string;
  start_ideal: string;
  start_latest: string;
  priorities: string[];
  other_builders: string;
  anything_else: string;
}

export type FieldKey = keyof EnquiryAnswers;

export const EMPTY_ANSWERS: EnquiryAnswers = {
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  whatsapp_ok: "",
  address_1: "",
  address_2: "",
  town: "",
  postcode: "",
  offroad_parking: "",
  project_summary: "",
  found_us: "",
  recommended_by: "",
  project_type: [],
  rooms: [],
  property_type: "",
  house_type: "",
  listed_conservation: "",
  occupied_during: "",
  constraints: "",
  drawings: "",
  planning: "",
  structural: "",
  budget: "",
  budget_approach: "",
  start_ideal: "",
  start_latest: "",
  priorities: [],
  other_builders: "",
  anything_else: "",
};

/** Labels exactly as section 3 of the spec. The email uses these verbatim. */
export const LABELS: Record<FieldKey, string> = {
  first_name: "First name",
  last_name: "Last name",
  email: "Email",
  mobile: "Mobile number",
  whatsapp_ok: "Can we contact you on WhatsApp?",
  address_1: "Property address, line 1",
  address_2: "Address line 2",
  town: "Town / city",
  postcode: "Postcode",
  offroad_parking: "Is there a driveway or off-road parking at the property?",
  project_summary: "Tell us briefly about your project",
  found_us: "How did you find us?",
  recommended_by: "Who recommended us?",
  project_type: "Which best describes your project?",
  rooms: "Which rooms are involved?",
  property_type: "Property type",
  house_type: "House type",
  listed_conservation: "Is the property listed or in a conservation area?",
  occupied_during: "Will the property be lived in during the work?",
  constraints: "Any known constraints?",
  drawings: "Do you have architect's drawings?",
  planning: "Planning permission",
  structural: "Is structural work needed?",
  budget: "What's your budget range (including VAT)?",
  budget_approach: "What best describes your approach to budget?",
  start_ideal: "When would you ideally like work to start?",
  start_latest:
    "If we can't start then, what's the latest start date that would work?",
  priorities: "What matters most to you? Pick three.",
  other_builders: "Are you getting prices from other builders?",
  anything_else: "Is there anything we should know before the call?",
};

export const STEP_1_FIELDS: FieldKey[] = [
  "first_name",
  "last_name",
  "email",
  "mobile",
  "whatsapp_ok",
  "address_1",
  "address_2",
  "town",
  "postcode",
  "offroad_parking",
  "project_summary",
  "found_us",
  "recommended_by",
];

export const STEP_2_FIELDS: FieldKey[] = [
  "project_type",
  "rooms",
  "property_type",
  "house_type",
  "listed_conservation",
  "occupied_during",
  "constraints",
  "drawings",
  "planning",
  "structural",
  "budget",
  "budget_approach",
  "start_ideal",
  "start_latest",
  "priorities",
  "other_builders",
  "anything_else",
];

/** Whether a conditional question is currently shown. */
export function isShown(key: FieldKey, a: EnquiryAnswers): boolean {
  if (key === "recommended_by") return FOUND_US_NEEDS_NAME.includes(a.found_us);
  if (key === "house_type")
    return PROPERTY_HAS_HOUSE_TYPE.includes(a.property_type);
  return true;
}

/* ---------------------------------------------------------------- validation */

/**
 * UK mobile: 07 + 9 digits, or the same with +44 / 44 in place of the 0.
 * Spaces, dashes, dots and brackets are ignored.
 */
export function normaliseMobile(raw: string): string | null {
  const digits = raw.replace(/[\s\-().]/g, "");
  const m = /^(?:\+?44|0)(7\d{9})$/.exec(digits);
  return m ? `0${m[1].slice(0, 4)} ${m[1].slice(4)}` : null;
}

/** UK postcode, uppercased with a single space before the inward code. */
export function normalisePostcode(raw: string): string | null {
  const compact = raw.replace(/\s+/g, "").toUpperCase();
  if (!/^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(compact)) return null;
  return `${compact.slice(0, -3)} ${compact.slice(-3)}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const OPTIONS: Partial<Record<FieldKey, readonly string[]>> = {
  whatsapp_ok: YES_NO,
  offroad_parking: YES_NO,
  found_us: FOUND_US,
  project_type: PROJECT_TYPES,
  rooms: ROOMS,
  property_type: PROPERTY_TYPES,
  house_type: HOUSE_TYPES,
  listed_conservation: LISTED,
  occupied_during: OCCUPIED,
  drawings: DRAWINGS,
  planning: PLANNING,
  structural: STRUCTURAL,
  budget: BUDGETS,
  budget_approach: BUDGET_APPROACH,
  start_ideal: START_IDEAL,
  priorities: PRIORITIES,
  other_builders: OTHER_BUILDERS,
};

const OPTIONAL: FieldKey[] = [
  "address_2",
  "rooms",
  "house_type",
  "constraints",
  "start_latest",
  "anything_else",
];

const LONG_TEXT: FieldKey[] = [
  "project_summary",
  "constraints",
  "anything_else",
];

export type Errors = Partial<Record<FieldKey, string>>;

/**
 * Validates one step's fields. Messages are what the client sees under the
 * field, so they are plain words, not codes.
 */
export function validate(keys: FieldKey[], a: EnquiryAnswers): Errors {
  const errors: Errors = {};
  for (const key of keys) {
    if (!isShown(key, a)) continue;
    const value = a[key];
    const options = OPTIONS[key];

    if (Array.isArray(value)) {
      if (options && value.some((v) => !options.includes(v))) {
        errors[key] = "Please choose from the options given.";
      } else if (key === "priorities" && value.length !== PRIORITY_COUNT) {
        errors[key] = `Please pick exactly ${PRIORITY_COUNT}. You have picked ${value.length}.`;
      } else if (key === "project_type" && value.length === 0) {
        errors[key] = "Please tick at least one.";
      }
      continue;
    }

    const v = value.trim();
    const max = LONG_TEXT.includes(key) ? 5000 : 200;
    if (!v) {
      if (!OPTIONAL.includes(key)) {
        errors[key] = options
          ? "Please choose an answer."
          : "Please fill this in.";
      }
      continue;
    }
    if (v.length > max) {
      errors[key] = `Please keep this under ${max} characters.`;
    } else if (options && !options.includes(v)) {
      errors[key] = "Please choose from the options given.";
    } else if (key === "email" && !EMAIL_RE.test(v)) {
      errors[key] = "Please enter a valid email address, like name@example.com.";
    } else if (key === "mobile" && !normaliseMobile(v)) {
      errors[key] = "Please enter a UK mobile number, like 07700 900123.";
    } else if (key === "postcode" && !normalisePostcode(v)) {
      errors[key] = "Please enter a full UK postcode, like GU6 7HH.";
    } else if (key === "start_latest" && !DATE_RE.test(v)) {
      errors[key] = "Please enter a date.";
    }
  }
  return errors;
}

/* --------------------------------------------------------------------- rules */

/**
 * The kitchen exception (spec change, 29 Oct 2026): an "Under £50k" budget is
 * declined unless Kitchen is ticked in `rooms`, in which case the budget is
 * ignored and the remaining rules apply as normal.
 */
export function kitchenException(a: EnquiryAnswers): boolean {
  return a.budget === "Under £50k" && a.rooms.includes("Kitchen");
}

export const KITCHEN_EXCEPTION_NOTE =
  "Note: Budget under £50k – kitchen project, accepted under the kitchen exception.";

export type EnquiryStatus =
  | "DECLINED – NO PARKING"
  | "DECLINED – UNDER £50K"
  | "HOLD – 12 MONTHS+"
  | "NO PLANS"
  | "BOOKING";

/**
 * Section 4 of the spec, in its order. Parking is decided after step 1 alone;
 * pass `afterStep: 1` there so the step 2 rules are not applied to blanks.
 */
export function statusFor(
  a: EnquiryAnswers,
  afterStep: 1 | 2,
): EnquiryStatus | null {
  if (a.offroad_parking === "No") return "DECLINED – NO PARKING";
  if (afterStep === 1) return null;
  if (a.budget === "Under £50k" && !kitchenException(a))
    return "DECLINED – UNDER £50K";
  if (a.start_ideal === "12 months +") return "HOLD – 12 MONTHS+";
  if (a.drawings === "No") return "NO PLANS";
  return "BOOKING";
}

/** What the client sees in place of the form. BOOKING goes to step 3 instead. */
export const STATUS_MESSAGES: Record<Exclude<EnquiryStatus, "BOOKING">, string> = {
  "DECLINED – NO PARKING":
    "Thank you for thinking of us. Our projects need a driveway or off-road parking for deliveries, skips and the team, so unfortunately we're not the right builder for this one. We wish you every success with it.",
  "DECLINED – UNDER £50K":
    "Thank you for telling us about your project. It's below the size of project we take on, so we're not the right fit this time. We wish you every success with it.",
  "HOLD – 12 MONTHS+":
    "Thank you. As your project is more than a year away, we'll be in touch nearer the time to arrange a call. If things move sooner, just reply to our email.",
  "NO PLANS":
    "Thank you. Once you have plans (PDF or photos are fine), send them over and you'll be able to book a call with Paul. We'll be in touch by email.",
};

/** mailto: for the "email your plans to Sarah" button. Address goes in the subject. */
export function plansMailto(a: EnquiryAnswers): string {
  const postcode = normalisePostcode(a.postcode) ?? a.postcode.trim();
  const subject = `Plans for ${a.address_1.trim()}, ${postcode}`;
  return `mailto:${PLANS_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/* ---------------------------------------------------------- hand-off email */

export interface EnquiryMeta {
  status: EnquiryStatus;
  submitted_at: string;
  source_page: string;
  utm: Record<string, string>;
}

const STEP_1_SECTIONS: { title: string; keys: FieldKey[] }[] = [
  {
    title: "Your details",
    keys: ["first_name", "last_name", "email", "mobile", "whatsapp_ok"],
  },
  {
    title: "Property",
    keys: ["address_1", "address_2", "town", "postcode", "offroad_parking"],
  },
  {
    title: "About the enquiry",
    keys: ["project_summary", "found_us", "recommended_by"],
  },
];

const STEP_2_SECTIONS: { title: string; keys: FieldKey[] }[] = [
  {
    title: "Your project",
    keys: [
      "project_type",
      "rooms",
      "property_type",
      "house_type",
      "listed_conservation",
      "occupied_during",
      "constraints",
      "drawings",
      "planning",
      "structural",
    ],
  },
  {
    title: "Budget and timing",
    keys: [
      "budget",
      "budget_approach",
      "start_ideal",
      "start_latest",
      "priorities",
      "other_builders",
      "anything_else",
    ],
  },
];

function answerText(key: FieldKey, a: EnquiryAnswers): string {
  if (!isShown(key, a)) return "—";
  const v = a[key];
  const text = Array.isArray(v) ? v.join(", ") : v.trim();
  if (!text) return "—";
  if (key === "postcode") return normalisePostcode(text) ?? text;
  if (key === "mobile") return normaliseMobile(text) ?? text;
  if (key === "start_latest" && DATE_RE.test(text)) {
    // "1 June 2027", not "2027-06-01": Sarah reads this, not a machine.
    return new Date(`${text}T12:00:00Z`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  }
  return text;
}

/** One-line header field: no line breaks can reach the subject. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export function emailSubject(a: EnquiryAnswers, status: EnquiryStatus) {
  return oneLine(
    `Website Enquiry – ${status} – ${a.address_1.trim()}, ${answerText("postcode", a)}`,
  );
}

/**
 * The hand-off email, as ordered sections of `Label: answer` lines.
 * A NO PARKING decline stops after step 1, so its step 2 sections are
 * left out rather than printed as a page of dashes.
 */
function emailSections(a: EnquiryAnswers, meta: EnquiryMeta) {
  const sections = [
    ...STEP_1_SECTIONS,
    ...(meta.status === "DECLINED – NO PARKING" ? [] : STEP_2_SECTIONS),
  ].map(({ title, keys }) => ({
    title,
    lines: keys.map((k) => [LABELS[k], answerText(k, a)] as const),
  }));

  const plans =
    meta.status !== "DECLINED – NO PARKING" &&
    (a.drawings === "Yes, final" || a.drawings === "Yes, outline")
      ? `Client asked to email plans to ${PLANS_EMAIL}`
      : "—";

  sections.push({
    title: "Admin",
    lines: [
      ["Status", meta.status],
      ["Plans", plans],
      ["Submitted at", meta.submitted_at],
      ["Source page", meta.source_page || "—"],
      ...Object.entries(meta.utm).map(([k, v]) => [k, v] as const),
    ],
  });
  return sections;
}

/** Shown above the answers, so Sarah and Paul spot it before anything else. */
function emailNote(a: EnquiryAnswers, meta: EnquiryMeta): string | null {
  return meta.status !== "DECLINED – NO PARKING" && kitchenException(a)
    ? KITCHEN_EXCEPTION_NOTE
    : null;
}

export function emailText(a: EnquiryAnswers, meta: EnquiryMeta): string {
  const note = emailNote(a, meta);
  return (note ? `${note}\n\n` : "") + emailSections(a, meta)
    .map(
      ({ title, lines }) =>
        `${title.toUpperCase()}\n${lines.map(([l, v]) => `${l}: ${v}`).join("\n")}`,
    )
    .join("\n\n");
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");

export function emailHtml(a: EnquiryAnswers, meta: EnquiryMeta): string {
  const note = emailNote(a, meta);
  const head = note
    ? `<p style="margin:0 0 12px;padding:8px 10px;background:#D8E7E7;"><strong>${escapeHtml(note)}</strong></p>`
    : "";
  const body = head + emailSections(a, meta)
    .map(
      ({ title, lines }) =>
        `<h3 style="margin:20px 0 6px;font-size:15px;color:#5E9790;">${escapeHtml(title)}</h3>` +
        lines
          .map(
            ([l, v]) =>
              `<p style="margin:0 0 4px;"><strong>${escapeHtml(l)}:</strong> ${escapeHtml(v)}</p>`,
          )
          .join(""),
    )
    .join("");
  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#222;">${body}</div>`;
}
