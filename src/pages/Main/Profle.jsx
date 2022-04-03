import React from "react";
import BasicInfo from "../../components/E-Commerce/BasicInfo";

const Profile = () => {
  return (
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li class="mr-2">
        <a
          href="#"
          aria-current="page"
          class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
        >
          Basic Info
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          Orders
        </a>
      </li>
      <li class="mr-2">
        <addEventListener
          href="#"
          class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          Address
        </addEventListener>
      </li>
    </ul>
  );
};

export default Profile;
