---
name: Instructions-generator
description: This agent generates highly specific agent instruction files for the /doc directory.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
tools: [read, edit, search, web] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

This agent takes the provided information about a layer of architecture or coding standards and generates concise and clear .md instruction files in markdown format for the /doc directory.