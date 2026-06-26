# Adding Content

All articles and projects live as `.mdx` files in `content/`. To add new content, create a new `.mdx` file in the appropriate directory.

## Articles

Create `content/articles/<slug>.mdx`:

```mdx
---
title: 'Your Article Title'
excerpt: 'One-sentence summary shown on listing cards'
date: 'June 26, 2026'
readTime: '5 min read'
category: 'Research'
author: 'Your Name'
---

Introductory paragraph...

## Section Heading

Body text with **bold**, _italic_, `inline code`, or [links](/).

![Descriptive alt text](/images/your-image.jpg)

### Subsection

- List item one
- List item two
- List item three

1. Numbered item
2. Numbered item
```

**Frontmatter fields:**

| Field | Required | Description |
|---|---|---|
| `title` | yes | Article headline |
| `excerpt` | yes | Short summary (shown in listings) |
| `date` | yes | Display date, any format |
| `readTime` | yes | e.g. `'5 min read'` |
| `category` | yes | Grouping label: `Research`, `Technology`, `Innovation`, `Community` |
| `author` | yes | Author display name |

---

## Projects

Create `content/projects/<slug>.mdx`:

```mdx
---
title: 'Your Project Title'
description: 'One-sentence summary shown on listing cards'
category: 'Physics'
color: '#c8612a'
date: 'Ongoing'
status: 'Active'
year: '2026'
team:
  - 'Dr. Name'
  - 'Colleague Name'
publications:
  - 'Journal Name, 2026'
---

Introductory paragraph...

## Section Heading

- Feature one
- Feature two

More body text...
```

**Frontmatter fields:**

| Field | Required | Description |
|---|---|---|
| `title` | yes | Project headline |
| `description` | yes | Short summary (shown in listings) |
| `category` | yes | Label: `Physics`, `Fluid Dynamics`, `ML / AI`, `Computing`, `Economics` |
| `color` | yes | Hex color for category badge |
| `date` | yes | Timeline, e.g. `'Ongoing'` or `'2024-2026'` |
| `status` | yes | `'Active'` or `'In Review'` |
| `year` | yes | Sort year for listing order |
| `team` | no | List of team member names |
| `publications` | no | List of publication references |

---

## Images

Place images in `public/` and reference with a leading slash:

```mdx
![Simulation diagram](/images/articles/my-article/diagram.png)
```
