/* ==========================
   QUICK ACCESS
========================== */

const quickAccess = [

    {
        name: "GitHub Profile",
        url: "https://github.com/Divyanshu-crv"
    },

    {
        name: "CodePen",
        url: "https://codepen.io/pen"
    },

    {
        name: "Excalidraw",
        url: "https://excalidraw.com/"
    },

    {
        name: "Boilerplates",
        url: "https://divyanshu-crv.github.io/snippet/"
    }

];


/* ==========================
   MAIN SECTIONS
========================== */

const sections = [

    {
        title: "Git & GitHub",
        icon: "🚀",

        links: [
            {
                name: "GitHub Profile",
                url: "https://github.com/Divyanshu-crv"
            }
        ],

        commands: [
            "git init",
            "git add .",
            "git commit -m \"update\"",
            "git push origin main"
        ],

        notes: []
    },

    {
        title: "Code Sharing",
        icon: "🧩",

        links: [
            {
                name: "CodePen",
                url: "https://codepen.io/pen"
            },

            {
                name: "PasteCode",
                url: "https://pastecode.io/"
            },

            {
                name: "Excalidraw",
                url: "https://excalidraw.com/"
            }
        ],

        commands: [],

        notes: []
    },

    {
        title: "Tools & Resources",
        icon: "🛠️",

        links: [
            {
                name: "Emmet Cheat Sheet",
                url: "https://docs.emmet.io/cheat-sheet/"
            },

            {
                name: "Image Downloader",
                url: "https://www.toolsbug.com/images-downloader-online.php"
            }
        ],

        commands: [],

        notes: []
    },

    {
        title: "Documentation",
        icon: "📚",

        links: [
            {
                name: "Collection_02 Update Guide",
                url: "./assets/Collection_02update.pdf"
            },

            {
                name: "Collection_02 Update Guide",
                url: "./assets/Collection_02update.docx"
            },

            {
                name: "add multiple files",
                url: "./assets/add multiple files.docx"
            },

            {
                name: "add multiple files",
                url: "./assets/add multiple files.pdf"
            },

        ],

        commands: [],

        notes: [

            {
                title: "How To Update Collection_02",

                content: `
1. Open js/data.js

2. Add links inside links array

3. Save

4. git add .

5. git commit -m "update"

6. git push
            `
            }

        ]
    }
    // ,
    // {
    //     title:"Documentation",
    //     icon:"📚",

    //     links:[

    //         {
    //             name:"Collection_02 Update Guide PDF",
    //             url:"./assets/Collection_02update.pdf"
    //         }

    //     ],

    //     commands:[],

    //     notes:[]
    // }

];