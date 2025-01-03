import { Avatar,Typography } from "@material-tailwind/react";
export function Reserved() {
  return (
    <div class="container mx-auto p-4">
    <form>
        <div class="flex">
            <div class="flex-1">
                <label for="firstName" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="firstName" class="mt-1 block w-full px-3 py-2 border border-r-0 border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="flex-1">
                <label for="lastName" class="block text-sm font-medium text-gray-700">Apellido</label>
                <input type="text" id="lastName" class="mt-1 block w-full px-3 py-2 border border-l-0 border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
        </div>
    </form>
</div>
  );
}
