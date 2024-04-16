export default function CopyRight(){
    return(
       
            <div className="container flex justify-center w-full px-3 pt-6 mx-auto xl:text-base/relaxed md:px-0">
          <div className="text-center text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} <i>PFSERVICIOS</i>. Derechos reservados.</div>
          {/* <ul className="flex flex-row items-center gap-4">
            <li>
              <Link className="hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
                Terms
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
                Privacy
              </Link>
            </li>
          </ul> */}
        </div>
    )
}