# PR to lgu.bettergov.ph — Register Aringay, La Union

Follow **lgu.bettergov.ph/CONTRIBUTING** exact steps.

## Step 1 — Fork better-lgu-directory

```bash
# fork at https://github.com/jmacj/better-lgu-directory (click Fork)
git clone https://github.com/alvindemesadev/better-lgu-directory.git
cd better-lgu-directory
```

## Step 2 — Add row to README.md Directory table

Insert alphabetically by LGU name (after _Angeles City, Pampanga_ / before _Aparri_ — Aringay starts with A). Use exact format from CONTRIBUTING.md:

```markdown
| Aringay, La Union | [betteraringay.org](https://betteraringay.org) | [GitHub](https://github.com/alvindemesadev/betteraringay) | [Facebook](https://facebook.com/betteraringay) | 🟡 Work in Progress | [@alvindemesadev](https://github.com/alvindemesadev) |
```

- If domain not yet live when you open PR, you may keep domain as `-` and status `🔵 Planned`. Recommended: open as `🔵 Planned` first (Day 0), then update to `🟡 Work in Progress` once template is cloned (you are already here — so use 🟡).
- Socials field allows `-`, `[Facebook](...)`, or comma-separated multiple links.
- Use `—` not blank for missing cells.

**Full row example for copy-paste:**

```
| Aringay, La Union | [betteraringay.org](https://betteraringay.org) | [GitHub](https://github.com/alvindemesadev/betteraringay) | [Facebook](https://facebook.com/betteraringay) | 🟡 Work in Progress | [@alvindemesadev](https://github.com/alvindemesadev) |
```

If you keep local folder name `bettergov-aringay`, use that repo name consistently:

```
| Aringay, La Union | [betteraringay.org](https://betteraringay.org) | [GitHub](https://github.com/alvindemesadev/bettergov-aringay) | [Facebook](https://facebook.com/betteraringay) | 🟡 Work in Progress | [@alvindemesadev](https://github.com/alvindemesadev) |
```

## Step 3 — Open PR

Title format (strict):

```
Add Aringay, La Union to directory
```

Body: mention you followed GUIDE, link to this repo, note you checked directory and Aringay was not listed.

**Labels auto-applied:**

- `entry:new`
- `needs-verification` (links checked)
- Possible `needs-changes` if formatting off — fix and push.

**After merge:** `lgu.bettergov.ph` will list Aringay as `🟡 Work in Progress`.

## Step 4 — Update to 🟢 Active (after deploy)

Once **https://betteraringay.org** is live and actively maintained, open second PR:

```
Update Aringay, La Union — status change to Active
```

Change status cell to `🟢 Active` (no stale tags). That's it.

## Stale protection

- `🔵 Planned` with no directory activity >30 days → tagged `⚠️ Stale` + `🤝 Open for Adoption` by maintainers (manual review, not auto).
- Any update (status bump, repo link) clears tags. Adopting a stale entry: PR that updates Maintainer/s and removes both tags, status stays `🔵 Planned` until you start building.

## Quick validation checklist before PR

- [ ] Forked `jmacj/better-lgu-directory`
- [ ] Added row in alphabetical order
- [ ] Used `-` for missing fields, not blank
- [ ] Status is `🔵 Planned` or `🟡 Work in Progress` (not `🟢 Active` until live)
- [ ] PR title exactly `Add Aringay, La Union to directory`
- [ ] Did NOT edit `CHANGELOG.md` (maintainers do)
