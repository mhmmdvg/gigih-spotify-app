import React from 'react';

type SearchFormType = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm(props: SearchFormType) {
  const { onSubmit, onChange } = props;

  return (
    <form className="form-search" onSubmit={onSubmit}>
      <input
        className="input-search"
        onChange={onChange}
        type="text"
        name="search"
        placeholder="Search for a song"
      />
      <input className="input-submit" type="submit" value="Search" />
    </form>
  );
}
