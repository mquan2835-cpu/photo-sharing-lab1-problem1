// Model dates look like "2016-01-04 2:00:01" (note the one-digit hour), which
// not every browser parses with new Date(), so those are split up by hand.
const MODEL_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})$/;

const pad = (value) => String(value).padStart(2, "0");

/**
 * Turns a model date into a user-friendly string, e.g. "04/01/2016, 02:00:01".
 * Falls back to the original text if the value cannot be read as a date.
 *
 * @param {string} value - Date string from the model data.
 * @returns {string}
 */
function formatDateTime(value) {
  const match = MODEL_DATE_PATTERN.exec(value);
  const date = match
    ? new Date(
        Number(match[1]),
        Number(match[2]) - 1,
        Number(match[3]),
        Number(match[4]),
        Number(match[5]),
        Number(match[6])
      )
    : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  const day = `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
  const time = `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  return `${day}, ${time}`;
}

export default formatDateTime;
