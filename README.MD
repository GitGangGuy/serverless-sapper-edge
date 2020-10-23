# WARNING
This repository isn't being maintained anymore and the serverless.yml file is known to not work anymore. If you've fixed the issues yourself, consider publishing the changes in a fork for others to learn from! Thanks.
**The repo has been archived.**

------------------------------------------------------------------

# SapperEdge for the serverless framework
This is a template for your next sapper deployment on AWS.
There is literally nothing similar out there to host Sapper **at the Edge** on AWS,
so I officially wasted my time & money on this. Thank me later.

## Usage
Just clone this repo and you're good to go. 
Default Sapper commands (`dev`, `export`, `build` and `start`) are included
as well as `deploy` and `local` for testing and deploying over the serverless cli.
Make sure to download and initialize (`serverless init`) the serverless cli first.
If you're planning to launch multiple Sapper@Edge projects, you'll want to rename all `sapper` occourences
in the serverless.yml with something more descriptive.

## Saying thank you
This is the part where I'll say thanks to all people who've published similar projects I used as a foundation for my own.  
This is my first project with hosting sapper and serverless architecture coding, so obviously this took me longer than expected.
Thank you, 
 * [ivarvermeulen](https://github.com/ivarvermeulen/nuxt-serverless-at-edge) - Foundation for the serverless.yml
 * [alexdilley](https://github.com/alexdilley/sapper-serverless-template) - Figuring out what has to land in the S3 bucket and what stays local
 * [Eckhardt](https://dev.to/eckhardtd/how-to-host-a-sapper-js-ssr-app-on-firebase-hmb) - Exporting the sapper middleware and accessing it

## Enjoy ;)
If there are any problems related specifically with this template, go open an issue.
