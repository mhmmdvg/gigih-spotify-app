import React, { ChangeEvent, FormEvent } from 'react';

type SearchFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchForm(props: SearchFormProps) {
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
