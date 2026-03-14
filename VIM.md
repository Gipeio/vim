---

# Vim Cheat Sheet — Condensed & Exhaustive

## Table of Contents

1. [Vim Philosophy](#vim-philosophy)
2. [Modes](#modes)
3. [Navigation](#navigation)
4. [Motions & Text Objects](#motions--text-objects)
5. [Editing](#editing)
6. [Copy / Paste / Delete](#copy--paste--delete)
7. [Search & Replace](#search--replace)
8. [Files, Buffers & Tabs](#files-buffers--tabs)
9. [Splits & Windows](#splits--windows)
10. [Macros](#macros)
11. [Registers & Clipboard](#registers--clipboard)
12. [Marks & Jumps](#marks--jumps)
13. [Undo / Redo](#undo--redo)
14. [Useful Tricks & Tips](#useful-tricks--tips)

---

## Vim Philosophy

Vim works like a **sentence**:

```text
[action] + [object]
```

Examples:

```text
daw → delete a word
ci( → change inside parentheses
y}  → yank until next paragraph
```

---

## Modes

| Command  | Description          |
| -------- | -------------------- |
| `Esc`    | Normal mode          |
| `i`      | Insert before cursor |
| `a`      | Insert after cursor  |
| `o`      | New line below       |
| `O`      | New line above       |
| `v`      | Visual mode          |
| `V`      | Visual line mode     |
| `Ctrl-v` | Visual block mode    |

---

## Navigation

### Basic

| Command | Action |
| ------- | ------ |
| `h`     | Left   |
| `j`     | Down   |
| `k`     | Up     |
| `l`     | Right  |

### Words & Phrases

| Command | Action                         |
| ------- | ------------------------------ |
| `w`     | Next word                      |
| `W`     | Next word (ignore punctuation) |
| `e`     | End of word                    |
| `b`     | Previous word                  |
| `B`     | Previous word (large)          |
| `(`     | Previous sentence              |
| `)`     | Next sentence                  |
| `{`     | Previous paragraph             |
| `}`     | Next paragraph                 |

### Lines & File

| Command  | Action          |
| -------- | --------------- |
| `0`      | Start of line   |
| `^`      | First character |
| `$`      | End of line     |
| `gg`     | Start of file   |
| `G`      | End of file     |
| `Ctrl-d` | Half page down  |
| `Ctrl-u` | Half page up    |

### Code Navigation

| Command | Action                              |
| ------- | ----------------------------------- |
| `[[`    | Previous function                   |
| `]]`    | Next function                       |
| `%`     | Jump to matching bracket `() {} []` |

---

## Motions & Text Objects

| Object | Description |
| ------ | ----------- |
| `w`    | Word        |
| `s`    | Sentence    |
| `p`    | Paragraph   |
| `"`    | Quotes      |
| `'`    | Quotes      |
| `(`    | Parentheses |
| `{`    | Braces      |
| `<`    | Tags        |

**Examples:**

```text
ci" → change inside quotes
da( → delete parentheses and content
yi{ → yank block content
```

**i vs a:**

| Command | Effect                  |
| ------- | ----------------------- |
| `ci(`   | Change **inside ()**    |
| `ca(`   | Change **including ()** |

---

## Editing

| Command    | Action                      |
| ---------- | --------------------------- |
| `i`        | Insert                      |
| `a`        | Append                      |
| `o`        | New line below              |
| `O`        | New line above              |
| `r`        | Replace one character       |
| `R`        | Replace multiple characters |
| `J`        | Join lines                  |
| `>>`       | Indent line                 |
| `<<`       | Dedent line                 |
| `>ap`      | Indent paragraph            |
| `i<Enter>` | Split line                  |

---

## Copy / Paste / Delete

| Command | Action                |
| ------- | --------------------- |
| `x`     | Delete character      |
| `dd`    | Delete line           |
| `yy`    | Yank line             |
| `p`     | Paste after           |
| `P`     | Paste before          |
| `dw`    | Delete word           |
| `d$`    | Delete to end of line |
| `daw`   | Delete entire word    |
| `cw`    | Change word           |
| `c$`    | Change to end of line |
| `y}`    | Yank paragraph        |
| `yyp`   | Duplicate line        |
| `ddp`   | Move line             |

---

## Search & Replace

| Command             | Action                         |
| ------------------- | ------------------------------ |
| `/word`             | Search forward                 |
| `?word`             | Search backward                |
| `n`                 | Next match                     |
| `N`                 | Previous match                 |
| `*`                 | Search under cursor (forward)  |
| `#`                 | Search under cursor (backward) |
| `:%s/old/new/g`     | Replace all                    |
| `:%s/foo/bar/gc`    | Replace with confirmation      |
| `:'<,'>s/foo/bar/g` | Replace in selection           |

---

## Files, Buffers & Tabs

### Files

| Command     | Action            |
| ----------- | ----------------- |
| `:e file`   | Open file         |
| `:w`        | Save              |
| `:q`        | Quit              |
| `:wq`       | Save & quit       |
| `:!command` | Run shell command |
| `gg=G`      | Format file       |

### Buffers

| Command | Action          |
| ------- | --------------- |
| `:ls`   | List buffers    |
| `:b1`   | Go to buffer 1  |
| `:bn`   | Next buffer     |
| `:bp`   | Previous buffer |

### Tabs

| Command   | Action       |
| --------- | ------------ |
| `:tabnew` | New tab      |
| `gt`      | Next tab     |
| `gT`      | Previous tab |

---

## Splits & Windows

| Command     | Action           |           |
| ----------- | ---------------- | --------- |
| `:sp file`  | Horizontal split |           |
| `:vsp file` | Vertical split   |           |
| `Ctrl-w s`  | Horizontal split |           |
| `Ctrl-w v`  | Vertical split   |           |
| `Ctrl-w h`  | Move left        |           |
| `Ctrl-w j`  | Move down        |           |
| `Ctrl-w k`  | Move up          |           |
| `Ctrl-w l`  | Move right       |           |
| `Ctrl-w w`  | Next window      |           |
| `Ctrl-w q`  | Close window     |           |
| `Ctrl-w =`  | Equalize         |           |
| `Ctrl-w _`  | Max height       |           |
| `Ctrl-w     | `                | Max width |

---

## Macros

| Command | Action                 |
| ------- | ---------------------- |
| `qa`    | Start macro `a`        |
| `q`     | Stop macro             |
| `@a`    | Play macro `a`         |
| `@@`    | Repeat last macro      |
| `10@a`  | Execute macro 10 times |

---

## Registers & Clipboard

| Command | Action                      |
| ------- | --------------------------- |
| `:reg`  | View registers              |
| `"ap`   | Paste from register `a`     |
| `"ayy`  | Yank into register `a`      |
| `"+y`   | Copy to system clipboard    |
| `"+p`   | Paste from system clipboard |

---

## Marks & Jumps

| Command  | Action                           |
| -------- | -------------------------------- |
| `ma`     | Set mark `a`                     |
| `'a`     | Go to line of mark `a`           |
| `` `a `` | Go to exact position of mark `a` |
| `Ctrl-o` | Back                             |
| `Ctrl-i` | Forward                          |
| `:jumps` | Show jump list                   |

---

## Undo / Redo

| Command  | Action |
| -------- | ------ |
| `u`      | Undo   |
| `Ctrl-r` | Redo   |

---

## Useful Tricks & Tips

| Command               | Action                         |
| --------------------- | ------------------------------ |
| `.`                   | Repeat last action             |
| `Ctrl-v`              | Visual block (multi-line edit) |
| `:set number`         | Show line numbers              |
| `:set relativenumber` | Relative line numbers          |
| `:syntax on`          | Syntax highlighting            |
| `:set hlsearch`       | Highlight search               |

**Example: Comment multiple lines**

```text
Ctrl-v → select → I// → Esc
```

**Top frequently used commands:**

```text
ciw, ci", ci(, ci{, da(, di", yy, dd, p, J, ., %, *, Ctrl-o, Ctrl-i, >>, <<, @@
```

---
