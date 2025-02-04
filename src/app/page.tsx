import Image from "next/image"

export default function Login() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        // backgroundImage:
        //   "url('https://images.pexels.com/photos/5723883/pexels-photo-5723883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",

          backgroundImage:
          "url('https://images.pexels.com/photos/5723875/pexels-photo-5723875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="/BioNTech-Logo.wine.svg"
              width={400}
              height={400}
              alt="Instagram logo"
            />
            <h1 className="mb-2 text-2xl">Sistema integral de pacientes</h1>
            <span className="text-gray-300">Hecho a medida de su clinica</span>
          </div>
          <form>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-transparent px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md flex w-full items-center justify-center"
                type="email"
                name="email"
                placeholder="*******@email.com"
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-transparent px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md flex w-full items-center"
                type="password"
                name="password"
                placeholder="*********"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-emerald-300 bg-opacity-50 px-10 py-2 text-yellow-300 hover:text-emerald-600 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

