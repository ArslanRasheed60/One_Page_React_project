import React from "react";
import circle_Check from "../../assets/circle-check-solid1.png";
import circle_Close from "../../assets/close-circle-svgrepo-com.png";

const TableBody = (props) => {
  return (
    <React.Fragment>
      <tbody>
        <tr className="border-separate m-3">
          <td className="text-start w-3/5">
            <div>
            <ul className="flex flex-col ">
                <li className="font-bold p-2">Features</li>
                <li className="p-2">Lessons on popular topics</li>
                <li className="p-2">Custom learning plan</li>
                <li className="p-2">Video lessons</li>
                <li className="p-2">Real-life conversations</li>
            </ul>
            </div>
          </td>
          <td className="font-bold">
            <div className="">
            <ul className="flex flex-col px-1">
                <li className="py-3">Limited</li>
                <li className="py-3">25</li>
                <li className="py-3 pl-1"><img className="w-8 pl-3 pt-1" src={circle_Close} alt="" /></li>
                <li className="py-3 pl-1"><img className="w-8 pl-3" src={circle_Close} alt="" /></li>
                <li className="py-3 pl-1"><img className="w-8 pl-3" src={circle_Close} alt="" /></li>
            </ul>
            </div>
          </td>
          <td className="font-bold">
            <div className="border-2 rounded-xl border-check">
                <ul className="flex flex-col ">
                    <li className="py-3">Pro</li>
                    <li className="py-3">1,600+</li>
                    <li className="py-3"><img className="w-8 pl-3 pt-2" src={circle_Check} alt="" /></li>
                    <li className="py-3"><img className="w-8 pl-3" src={circle_Check} alt="" /></li>
                    <li className="py-3"><img className="w-8 pl-3" src={circle_Check} alt="" /></li>
                </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default TableBody;
