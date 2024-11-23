function Register() {
    return (
          <main className="w-screen h-screen bg-[#FAF5F1]">
              <section className="w-full h-full grid grid-cols-2">
                  <div className="w-full h-full flex justify-center items-center">
                      <form className="space-y-6 scale-125">
                          <h2 className="text-2xl font-bold text-center font-cabinet text-[#AD3520]">
                              Register
                          </h2>
  
                          <div className="space-y-2">
                              <label
                                  htmlFor="email"
                                  className="block text-sm text-[#AD3520] font-cabinet font-bold"
                              >
                                  Email
                              </label>
                              <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="w-full text-[#AD3520] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AD3520] focus:outline-none font-cabinet placeholder-[#AD3520]"
                                  placeholder="Enter your email"
                                  required
                              />
                          </div>
  
                          <div className="space-y-2">
                              <label
                                  htmlFor="password"
                                  className="block text-sm text-[#AD3520] font-cabinet font-bold"
                              >
                                  Password
                              </label>
                              <input
                                  type="password"
                                  id="password"
                                  name="password"
                                  className="w-full px-4 py-2 text-[#AD3520] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AD3520] focus:outline-none font-cabinet placeholder-[#AD3520]"
                                  placeholder="Enter your password"
                                  required
                              />
                          </div>
  
                          <div className="flex items-center justify-between">
                              <button
                                  type="submit"
                                  className="w-full py-2 bg-[#AD3520] text-white font-semibold rounded-lg hover:bg-[#AD3520]/90 transition-all font-cabinet"
                              >
                                  Register
                              </button>
                          </div>
  
                          <div className="text-center">
                              <a
                                  href="#"
                                  className="text-sm text-[#AD3520] hover:underline font-cabinet"
                              >
                                  Already have an account? Log in
                              </a>
                          </div>
                      </form>
                  </div>
                  <div className="absolute w-1/2 bg-black opacity-30 h-screen left-1/2"></div>
                  <img className="h-screen" src="login.png" alt="" />
              </section>
          </main>
      );
  }
  
  export default Register