A blog app using markdown files as posts.

To add more blogs, create new md files under `src/blogs` directory. And category should be either `blog` or `project`.

To add a image, use markdown syntax `![alt text](image-url)`. The `image-url` should be relative to the `public/images` directory.

In layout under app, the google analytics script is added. To use it, replace the `gaId` of `GoogleAnalytics` with your own tracking id.
