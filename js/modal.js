/* ==========================
   MODAL ELEMENTS
========================== */

const modal =
document.getElementById("modal");

const modalTitle =
document.getElementById("modalTitle");

const modalBody =
document.getElementById("modalBody");

const closeModalBtn =
document.getElementById("closeModal");


/* ==========================
   OPEN MODAL
========================== */

function openModal(section){

    modal.classList.add("active");

    modalTitle.innerHTML =
    `${section.icon} ${section.title}`;

    let html = "";


    /* LINKS */

    if(section.links.length){

        html += `
        <div class="modal-section">

            <h3>🔗 Links</h3>
        `;

        section.links.forEach(link=>{

            html += `
            <a
                class="modal-link"
                href="${link.url}"
                target="_blank"
            >
                ${link.name}
            </a>
            `;

        });

        html += `</div>`;
    }


    /* COMMANDS */

    if(section.commands.length){

        html += `
        <div class="modal-section">

            <h3>📋 Commands</h3>
        `;

        section.commands.forEach(command=>{

            html += `
            <div class="command-box">

                <code>${command}</code>

                <button
                    class="copy-btn"
                    onclick="copyCommand('${command.replace(/'/g,"\\'")}')"
                >
                    Copy
                </button>

            </div>
            `;
        });

        html += `</div>`;
    }


    /* NOTES */

    if(section.notes.length){

        html += `
        <div class="modal-section">

            <h3>📝 Notes</h3>
        `;

        section.notes.forEach(note=>{

            html += `
            <div class="modal-link">

                <strong>
                    ${note.title}
                </strong>

                <br><br>

                <pre>
${note.content}
                </pre>

            </div>
            `;
        });

        html += `</div>`;
    }

    modalBody.innerHTML = html;
}


/* ==========================
   CLOSE MODAL
========================== */

closeModalBtn.addEventListener(
    "click",
    ()=>{
        modal.classList.remove("active");
    }
);

modal.addEventListener(
    "click",
    (e)=>{

        if(e.target === modal){

            modal.classList.remove(
                "active"
            );
        }
    }
);


/* ==========================
   COPY COMMAND
========================== */

function copyCommand(command){

    navigator.clipboard.writeText(
        command
    );

}