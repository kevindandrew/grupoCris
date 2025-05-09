export function Character(array) {
    array.forEach(element => {
        let divDad = document.createElement("div")
        divDad.classList.add(
            "flex", "flex-col", "h-15", "w-20", "p-2", "gap-1", "overflow-hidden"
        )


        let h2name = document.createElement("h2");
        h2name.textContent = element.name;
        h2name.classList.add(
            "font-bold", "text-2xl", "text-shadow-lg/30"
        );

        let p1Status = document.createElement("p");
        p1Status.textContent = element.status;
        p1Status.classList.add(
            "text-[32px]", "text-shadow-lg/30"
        )

        let p2Species = document.createElement("p")
        p2Species.textContent = element.species;
        p2Species.classList.add(
            "text-[32px]", "text-shadow-lg/30", "text-green"
        )

        let ptype = document.createElement("p");
        ptype.textContent = element.type
        ptype.classList.add(
            "text-[32px]", "text-shadow-lg/30", "text-red"
        )

        let pGender = document.createElement("p");
        pGender.textContent = element.gender
        pGender.classList.add(
            "text-[32px]", "text-shadow-lg/30"
        )

        let img = document.createElement("img");
        img.src = `${element.origin.url}`
        img.classList.add(
            "w-6", "h-6", "rounded-sm", "shadow-xl/30"
        )
    });
}