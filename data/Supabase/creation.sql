-- Create the creator table
create table creators (
  creatorID bigint primary key generated always as identity,
  creatorname text not null,
  handle text not null, 
  instagram text not null,
  website text not null, 
  tiktok text not null, 
  fullyvegan bool, 
  speciality text not null
);

-- Create the recipes table
create table recipes (
  recipeID bigint primary key generated always as identity,
  creatorID bigint references creators not null,
  recipeName text not null,
  description text, 
  link text not null, 
  servingSize int
);
-- some policies of sorts

create policy "public can read creators"
on public.creators
for select to anon
using (true);


create policy "public can read recipes"
on public.recipes
for select to anon
using (true);

-- cascades???
-- data integrity??
-- idk idk idk