/* ==========================
   SEARCH
========================== */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener(
    "input",
    handleSearch
);

function handleSearch(){

    const searchValue =
    searchInput.value
    .toLowerCase()
    .trim();

    if(searchValue === ""){

        renderCards(sections);

        return;
    }

    const filteredSections =
    sections.filter(section=>{

        const titleMatch =
        section.title
        .toLowerCase()
        .includes(searchValue);

        const linkMatch =
        section.links.some(link=>
            link.name
            .toLowerCase()
            .includes(searchValue)
        );

        const commandMatch =
        section.commands.some(command=>
            command
            .toLowerCase()
            .includes(searchValue)
        );

        const noteMatch =
        section.notes.some(note=>
            note.title
            .toLowerCase()
            .includes(searchValue)
        );

        return (
            titleMatch ||
            linkMatch ||
            commandMatch ||
            noteMatch
        );

    });

    renderCards(filteredSections);

}