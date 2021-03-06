import React, { ChangeEvent, FormEvent } from 'react';

type SearchFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm(props: SearchFormProps) {
  const { onSubmit, onChange } = props;

  return (
    <form className="mt-2" onSubmit={onSubmit}>
      <input
        className="bg-gray-200 p-2 w-72 rounded-l-md"
        onChange={onChange}
        type="text"
        name="search"
        placeholder="Search for a song"
      />
      <input
        className="py-2 px-1 bg-black text-white rounded-r-md cursor-pointer"
        type="submit"
        value="Search"
      />
    </form>
  );
}
