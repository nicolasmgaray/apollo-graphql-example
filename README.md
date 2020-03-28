# apollo-graphql-example

Little project to get to know and play with apollo.

This example includes 1 query and 1 subscription (using websockets) with authentication (sort of).

You need to add a token (you can add whatever string you want) on the "x-auth-token" http header.

The API only checks for the existance of the token.

You can access the schema at [https://apollo-graphql-example.glitch.me/](https://apollo-graphql-example.glitch.me/)