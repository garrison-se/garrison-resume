# Garrison resume generator
This experimental eleventy thingie generates print ready resumes from JSON. The template features hacks like wrapping the whole page in a table (for the repeating header and footer).

Ideally, you would want the text to break right at the bottom of the page, but not leaving a single line or word on the next page (orphans). Unfortunately, this is not possible with the current browser support for [break-after](https://developer.mozilla.org/en-US/docs/Web/CSS/break-after) and [orphans](https://developer.mozilla.org/en-US/docs/Web/CSS/orphans). Because of this limitation, the rule is to not break pages in the middle of a list or project section. This means there may be gaps at the bottom of pages if there are long sections at inappropriate places. Also, it's currently not possible to add page numbers, sorry. Hopefully print support in CSS will improve in the future!

## Setup
Install Node if you haven't already. Clone the repo and install dependencies.
```
npm install
```

## Add fonts
```
src/assets/fonts/fonts/Stolzl-Book.woff2
src/assets/fonts/StolzlDisplay-Medium.woff2
```

## Watch and serve
Watch and serve on localhost:4000.
```
npm start
```

## Edit your resume
The resume consists of three files, `resume.json`, `resume.md` and `resume.jpg`. The JSON file is where you edit your data. The markdown file contains metadata and should be left alone (although you could override data with frontmatter). The profile summary needs some basic html formatting (paragraphs). If you are not comfortable with html you can override the JSON with markdown in `resume.md`. Replace `resume.jpg` with your photo (high res, cropped square).
```
/views/resume/resume.json
/views/resume/resume.md
/views/resume/resume.jpg
```

## Preview
The firstname-lastname part of the url is the name set in the profile of the resume. Name is slugified.
```
localhost:4000/firstname-lastname/resume/
```

## Print or save to PDF
Use Chrome to print or save your document to PDF. Remember to uncheck `Headers and footers` in the print dialog.

## Document
Document title can be overridden by adding title to the root:
```
{
  "title": "Custom document title",
  ...
}
```

## Properties
Properties heading can be overridden like this:
```
"properties": {
  "title": "Custom properties heading",
  ...
}
```

## Projects
Projects headings can be overridden like this:
```
"projects": {
  "title": "Custom projects heading",
  "sections": {
    "description": "Description heading",
    "role": "Role heading",
    "method": "Method heading",
    "result": "Result heading"
  },
  ...
}
```

You can add custom sections to a project like this:

```
"projects": {
  "items": [
    {
      "sections": [
        {
          "title": "Title of section",
          "body": "Body of section"
        },
        {
          "title": "Title of section",
          "body": "Body of section"
        }
      ]  
    }
  ]  
}
```

You can hide a list or a project by adding `"hidden": "true"`.

```
"projects": {
  "items": [
    {
      "hidden": "true",
      ...
    }
  ]
}
```

Project sections are escaped by default. Add `"raw": "true"` if you would like to output raw html. Note that this will affect all four sections.

```
"projects": {
  "raw": "true",
  ...
}
```
