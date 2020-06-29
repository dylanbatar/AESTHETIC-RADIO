// PORT
process.env.PORT = process.env.PORT || 4200;

// URI DB
process.env.URI_DB = process.env.URI_DB
  ? process.env.URI_DB
  : "mongodb://localhost:27017/radio";
