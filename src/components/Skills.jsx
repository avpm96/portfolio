import { Tooltip } from "@material-tailwind/react";

export function Skills() {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-5">
      <div className="flex gap-4 flex-col justify-items-center">
        
        <Tooltip content="HTML" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center "
            src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="CSS" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="SASS" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10" >
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://cms.rootstack.com/sites/default/files/inline-images/sass2.png"
            alt="nature image"
          />
        </Tooltip>
      </div>
      <div className="flex gap-4 flex-col ...">
        <Tooltip content="React.js" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="Vue.js" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2019/08/feature-vuejs.png?ssl=1"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="Next.js" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://kyan-2015.s3.eu-west-1.amazonaws.com/production-2018/uploads/news_entry/image/255/medium_news_size_next-js-header.jpg"
            alt="nature image"
          />
        </Tooltip>
      </div>
      <div className="flex gap-4 flex-col ...">
        <Tooltip content="Javascript" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://www.seekpng.com/png/detail/80-803501_javascript-logo-logo-de-java-script-png.png"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="Typescript" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://www.typescripttutorial.net/wp-content/uploads/2020/04/favicon.png"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="DatoCms" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="img/datocms.png"
            alt="nature image"
          />
        </Tooltip>
      </div>
      <div className="flex gap-4 flex-col ...">
        <Tooltip content="Firebase" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61474.png"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="GIT" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="Graphql" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="img/graphql.png"
            alt="nature image"
          />
        </Tooltip>
      </div>
      <div className="flex gap-4 flex-col ...">
        <Tooltip content="Material-ui" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="Vuetify" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="nature image"
          />
        </Tooltip>
        <Tooltip content="Tailwind css" placement="right" className="text-black border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10">
          <img
            className="h-20 w-20 rounded-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UWKX8b4GymFONmP1VwggZHwnLOurs7r68BjvbYznJ7E30wp8p0yXilXm8RB6kGC1a9E&usqp=CAU"
            alt="nature image"
          />
        </Tooltip>
      </div>
    </div>
  );
}
