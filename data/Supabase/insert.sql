-- Insert some sample data into the table
insert into creators (
    creatorname,
    handle,
    instagram,
    website,
    tiktok,
    fullVegan, 
    speciality
    )
values 
  ('Canada'),
  ('United States'),
  ('Mexico');

alter table creators enable row level security;