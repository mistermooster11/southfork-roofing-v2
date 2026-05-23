/**
 * color-mapper-appscript.js — QuickFlip Sites Color Mapper
 *
 * One-time setup in Google Sheets:
 *   Extensions → Apps Script → paste this entire file → Cmd+S
 *
 * What it does:
 *   When you type a hex code (e.g. #e63946) in column E (New Hex),
 *   column F (New Swatch) of the same row instantly fills with that color.
 *   If you clear the hex or type something invalid, the swatch clears too.
 */

function onEdit(e) {
  var range = e.range;
  var sheet = range.getSheet();

  // Only react to column E (New Hex), rows 4+ (data rows)
  if (range.getColumn() !== 5 || range.getRow() < 4) return;

  var hex = range.getValue().toString().trim().toLowerCase();
  var swatchCell = sheet.getRange(range.getRow(), 6); // column F

  if (/^#[0-9a-f]{6}$/.test(hex)) {
    swatchCell.setBackground(hex);
  } else {
    // Clear swatch and restore the light-green placeholder
    swatchCell.setBackground('#f0fff0');
  }
}
