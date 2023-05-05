import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import styles from "./MyPopover.module.scss";
import clsx from "clsx";

export default function MyPopover() {
  return (
    <div id="mypopover" className="mx-0 my-auto">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center 
                rounded-md bg-transparent`}
            >
              <span>
                <i
                  aria-hidden="true"
                  className="fa fa-circle-info"
                  style={{ fontSize: "1.3rem", verticalAlign: "middle" }}
                />
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={clsx(
                  "absolute left-1/2 z-10 mt-4 w-screen max-w-max transform sm:px-0",
                  styles[`popover-panel`]
                )}
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-3">
                    <div className={styles.contacts}>
                      <div className={clsx("btn", "btn-light", styles.email)}>
                        <img src="/assets/icons/email.svg" alt="Email icon" />
                        <a href="mailto:Luna1lika@gmail.com">
                          Luna1Lika@gmail.com
                        </a>
                      </div>
                      <div className={clsx("btn", "btn-light", styles.phone)}>
                        <img src="/assets/icons/phone.png" alt="Phone icon" />
                        <a href="tel:+17124496163">
                          +1&nbsp;(712)&nbsp;449-6163
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
