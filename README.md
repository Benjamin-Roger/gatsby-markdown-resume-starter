# Gatsby Markdown Resume Starter ###

Gatsby.js powered resume based on [gatsby-starter-resume](https://github.com/anubhavsrivastava/gatsby-starter-resume). This version has had some features added:
- Markdown file management for easier update
- SEO components 
- Extra portfolio section with categories and country location

It has also been heavily refactored to follow Atomic Design guidelines.

## Quickstart

Clone this repo and start it up

```bash 
git clone https://github.com/Benjamin-Roger/gatsby-markdown-starter-resume.git

cd gatsby-markdown-starter-resume

npm i

gatsby develop

```
And it is running !

## How to adapt
The content is located in a few files:
- config.js for most strings and values, to be reused throughout the website
- src/content/markdown to update the content of the website: bio, experiences, education, projects...

## Features
This is a fully equipped starter. It includes:
- several resume sections, including a filterable project section
- a SEO component ready to go once the information in the config file
- Google Analytics, robot.txt, sitemap plugins ready to work
