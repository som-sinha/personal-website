---
title: "Tastefile"
description: "A portable description of a creative identity (look, voice and ethos) that you can share, fork and hand to an AI. In progress."
tech: ["Next.js", "React", "TypeScript", "Zod", "Tailwind CSS", "Vitest"]
featured: true
---

**In progress.** A Tastefile captures a creative identity in one portable
file: visual style, voice, ethos and the style of any generated media.
People build theirs on the Tastefile website, then share it, fork other
people's, and hand it to an AI so everything it generates has a consistent
look and voice.

The idea is that you never write the file by hand. You shape your taste in an
editor, and the site stores it as structured data, versioning each published
version of the style. It turns that into a page that styles itself, using its
own fonts, colours and spacing, so opening a Tastefile shows the look
straight away.

So far I've set up the app and built the shared schema that defines and
validates a Tastefile, with tests. Next up is the renderer, then the editor,
publishing, a public gallery and forking.
