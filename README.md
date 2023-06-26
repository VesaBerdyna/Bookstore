Bookstore Application

This project is built using ABP.io, a powerful framework for developing enterprise web applications.
The Bookstore Application provides a virtual library experience where users can explore, discover, and manage books.

Features

- Book Management: Browse and manage a vast collection of books.
- Author Exploration: Discover new authors and explore their works.
- Category Classification: Dive into different book categories to find your preferred genres.
- Multitenancy Support: The application supports multiple tenants, allowing separate book collections for different organizations.
- Authentication: Users can securely access the application using authentication methods such as OAuth, JWT, and cookies.
- Scalability: The application is designed to handle a growing number of users and provide a seamless experience.

## Install dependencies

-   Download and install .net 7 sdk by clicking: `https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-7.0.302-macos-x64-installer`
-   Verify that you have installed dotnet successfully by running: `dotnet --version`. It should return value >= 7.0.xxx
-   Install dotnet abp package by running: `dotnet tool install -g Volo.Abp.Cli`
-   Install dotnet ef package by running: `dotnet tool install --global dotnet-ef`

## Create database

You must have postgresql or docker installed.

### Using postgresql

-   Create a new db named: `bookstore-db`.
-   Default credentials for the connection string are located: `aspnet-core/src/Acme.BookStore.HttpApi.Host/appsettings.json`.
-   Default credentials for DbMigrator connection string are located: `aspnet-core/src/Acme.BookStore.DbMigrator/appsettings.json`.
-   If your postgres credentials are different, update appsettings.json.
-   Connection string in that file is: `ConnectionStrings`

## Running backend

-   Change current directory to backend, by running: `cd aspnet-core`
-   Install the necessary dependencies, by running: `~/.dotnet/tools/abp install-libs`
-   Change current directory, by running: `cd src/Acme.BookStore.EntityFrameworkCore`
-   Apply database migrations, by running: `dotnet ef database update`
-   Change current directory, by running: `cd ../Acme.BookStore.DbMigrator`
-   Execute the project which will seed db, by running: `dotnet run`
-   Change directory to API Host, by running: `cd ../Acme.BookStore.HttpApi.Host`
-   Execute the project which will start the backend, by running: `dotnet run`
-   It will be accessible in the following url: `https://localhost:44397`

