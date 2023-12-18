import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function NewHabit() {
    async function newHabit(formData: FormData) {
        "use server";

        const habit = formData.get("habit");
        await kv.hset("habits", { [habit as string]: {}});

        revalidatePath("/");
        redirect("/")
        
    }

    return(
        <main className="container relative flex flex-col gap-8 px-12 pt-16">
            <h1 className="text-4xl font-light text-center text-white font-display">
                Novo hábito
            </h1>

            <form  action={newHabit} className="flex flex-col gap-4 mt-4">
                <input 
                type="text" 
                name="habit"
                id="habit" 
                className="p-2 font-sans text-white rounded-md bg-neutral-800" 
                />
                
                <button type="submit" className="bg-[#fff] font-display text-neutral-900 font-regular
                  text-2xl p-2 rounded-md mt-8">
                    Cadastrar
                </button>

                <button className="bg-neutral-800 text-[#ff0077] 
                font-display font-regular text-2xl p-2 rounded-md">
                    Cancelar
                </button>
            </form>
        </main>

    )
}

export default NewHabit