#!/usr/bin/env bash
#MISE description="Deploy the project"

wrangler pages deploy .vitepress/dist --project-name glossia-docs --branch main
