import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Admin",
      email: "admin@admin.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Terttu",
      email: "terttu@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  items:[
    
      {
        "author": "Declan Lee",
        "title": "lectus pede",
        "text": "elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla",
        "isbn": 8340051276761
      },
      {
        "author": "Marah Warren",
        "title": "Phasellus",
        "text": "orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis",
        "isbn": 4522647598899
      },
      {
        "author": "Georgia Dorsey",
        "title": "Fusce aliquam,",
        "text": "eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit",
        "isbn": 1889389050872
      },
      {
        "author": "Nicole Lloyd",
        "title": "augue eu tellus.",
        "text": "sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas",
        "isbn": 1993870427391
      },
      {
        "author": "Philip Skinner",
        "title": "turpis. Nulla",
        "text": "lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra.",
        "isbn": 3077110431623
      }
    ]
  
};
export default data;