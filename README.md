# Insta Photos
## Node / Express plugin to get most recent Instagram Photos

Define a secrets.js file that looks like
```
    module.exports = {
        userId: XXX,
        accessToken: XXX
    };
```

[Figure out what your Instagram User ID is](https://stackoverflow.com/questions/11796349/instagram-how-to-get-my-user-id-from-username)

[get an Instragram API access token](https://www.instagram.com/developer/clients/manage/) by signing up as a developer and registering a new client.


insta-photos takes an options object that looks like

```
    {
        userId: XXX,
        accessToken: XXX
    };
```

and returns most recent photos for that user