# Gatsby Markdown Resume Starter ###

Gatsby.js powered resume based on [gatsby-starter-resume](https://github.com/anubhavsrivastava/gatsby-starter-resume). 

This version has had some features added:
- Markdown file management for easier content updates
- SEO components 
- Extra portfolio section with categories, country location and filters

It has also been refactored to break down the site into more manageable components.

## Quickstart

Clone this repo and start it up

```bash 
git clone https://github.com/Benjamin-Roger/gatsby-markdown-starter-resume.git

cd gatsby-markdown-starter-resume

npm i

gatsby develop

```
And it is running !

## How to adapt the content
The content is located in 2 files:
- config.js for most strings and values, to be reused throughout the website
- src/content/markdown to update the content of the website: bio, experiences, education, projects...

Add a .md file with the proper attributes in the education, experiences or projects filter to add a new item.

## Features
This is a fully equipped starter. It includes:
- several resume sections, including a filterable project section
- Markdown management, their content fetched with a GraphQL query at the page level
- a SEO component ready to go once the information in the config file
- Google Analytics, robot.txt, sitemap plugins ready to work
