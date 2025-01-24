import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
  onSearchSubmit : (e: SyntheticEvent) => void;
    search : string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}:Props) : JSX.Element => {

  return (
    <>
         <section className="relative bg-gradient-to-b">
  <div className="max-w-4xl mx-auto p-4 space-y-6">
    <form
      className="form relative flex flex-col w-full p-8 bg-blue-900 shadow-lg rounded-xl md:flex-row md:space-y-0 md:space-x-4"
      onSubmit={onSearchSubmit}
    >
      <input
        className="flex-1 p-2 text-gray-800 border-2 border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        id="search-input"
        placeholder="Search companies..."
        value={search}
        onChange={handleSearchChange}
      />
      <button
        type="submit"
        className="px-6 py-3 text-white font-bold bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 transform hover:scale-105"
      >
        Search
      </button>
    </form>
  </div>
</section>

    </>
  )
}

export default Search