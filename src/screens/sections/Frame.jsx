import React from "react";
import { Component } from "../../components/Component";
import { EmployeeSelector } from "../../components/EmployeeSelector";
import { InputField } from "../../components/InputField";
import { Note } from "../../components/Note";
import { TableCell } from "../../components/TableCell";
import { TaskCard } from "../../components/TaskCard";
import { WorkflowCard } from "../../components/WorkflowCard";

export const Frame = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-0 py-6 relative flex-1 self-stretch grow overflow-y-scroll">
      <div className="flex flex-col items-start gap-6 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit font-text-heading-h5 font-[number:var(--text-heading-h5-font-weight)] text-[#212121] text-[length:var(--text-heading-h5-font-size)] tracking-[var(--text-heading-h5-letter-spacing)] leading-[var(--text-heading-h5-line-height)] [font-style:var(--text-heading-h5-font-style)]">
            Good Evening ! Ajay
          </div>

          <button className="all-[unset] box-border inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] rounded-lg border border-solid border-[#ebebeb]">
            <div className="inline-flex h-8 items-center justify-center px-3.5 py-1.5 relative rounded-lg">
              <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative w-4 h-4"
                  alt="Dashboard"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/dashboard.svg"
                />

                <button className="all-[unset] box-border relative w-fit mt-[-1.00px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#212121] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                  Add Widget
                </button>
              </div>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-3 p-4 relative flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#ebebeb]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="https://c.animaapp.com/medy1fp6HOX7TE/img/frame-1410090830.svg"
              />

              <div className="relative w-fit font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                22 Ai Review
              </div>
            </div>

            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Manually Approve
                </div>

                <div className="flex flex-col w-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-[#fff0e5] rounded-full">
                  <div className="relative self-stretch mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-errorcontent text-[length:var(--text-small-regular-font-size)] text-center tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    2
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Completed
                </div>

                <div className="bg-successbg inline-flex flex-col items-center justify-center gap-2.5 px-[3px] py-0 relative flex-[0_0_auto] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-successcontent relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Rejected by Ai
                </div>

                <div className="bg-[#fff8e5] inline-flex flex-col items-center justify-center gap-2.5 px-[3px] py-0 relative flex-[0_0_auto] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-warningcontent relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-3 p-4 relative flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#ebebeb]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#d8e6fb] rounded-lg">
                <img
                  className="relative w-6 h-6"
                  alt="Task"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/task-14.svg"
                />
              </div>

              <div className="relative w-fit font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                22 Tasks
              </div>
            </div>

            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Ongoing
                </div>

                <div className="bg-[#fff8e5] inline-flex flex-col items-center justify-center gap-2.5 px-[3px] py-0 relative flex-[0_0_auto] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-warningcontent relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Overdue
                </div>

                <div className="flex flex-col w-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-[#fff0e5] rounded-full">
                  <div className="relative self-stretch mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-errorcontent text-[length:var(--text-small-regular-font-size)] text-center tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    2
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Completed
                </div>

                <div className="bg-successbg inline-flex flex-col items-center justify-center gap-2.5 px-[3px] py-0 relative flex-[0_0_auto] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-successcontent relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Scheduled
                </div>

                <div className="flex flex-col w-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-[#f7edff] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-[#7955a3] text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-3 p-4 relative flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#ebebeb]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-issuebg rounded-lg">
                <img
                  className="relative w-6 h-6"
                  alt="Alert circle"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/alert-circle-6.svg"
                />
              </div>

              <div className="relative w-fit font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                22 Issues
              </div>
            </div>

            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Ignored
                </div>

                <div className="flex flex-col w-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-[#fff0e5] rounded-full">
                  <div className="relative self-stretch mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-errorcontent text-[length:var(--text-small-regular-font-size)] text-center tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    2
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Resolved
                </div>

                <div className="bg-successbg inline-flex flex-col items-center justify-center gap-2.5 px-[3px] py-0 relative flex-[0_0_auto] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-successcontent relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Open
                </div>

                <div className="bg-[#fff8e5] inline-flex flex-col items-center justify-center gap-2.5 px-[3px] py-0 relative flex-[0_0_auto] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-warningcontent relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-3 p-4 relative flex-[0_0_auto] mr-[-291.00px] bg-white rounded-xl border border-solid border-[#ebebeb]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-scheduledbg rounded-lg">
                <img
                  className="relative w-6 h-6"
                  alt="Layout alt"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/layout-alt-02-9.svg"
                />
              </div>

              <div className="relative w-fit font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                20 Forms
              </div>
            </div>

            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Open Responses
                </div>

                <div className="flex flex-col w-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-[#f7edff] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-[#7955a3] text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    0
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Submitted Responses
                </div>

                <div className="bg-successbg inline-flex flex-col items-center justify-center gap-2.5 px-[3px] py-0 relative flex-[0_0_auto] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-successcontent relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                  Ongoing Tasks
                </div>

                <div className="bg-[#fff8e5] inline-flex flex-col items-center justify-center gap-2.5 px-[3px] py-0 relative flex-[0_0_auto] rounded-full">
                  <div className="self-stretch mt-[-1.00px] text-warningcontent relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 pt-0 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col h-[280px] items-start relative self-stretch w-full bg-white rounded-xl overflow-hidden border border-solid border-[#ebebeb]">
          <div className="flex items-start gap-3 pt-3 pb-0 px-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ebebeb]">
            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <div className="relative w-[510px] h-[22px] mt-[-1.00px] font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                Work Allocated
              </div>

              <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-center gap-1.5 pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-brandprimary text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      Tasks
                    </div>

                    <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-brandlight rounded-[999999px] overflow-hidden">
                      <div className="w-fit text-brandprimary text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        10
                      </div>
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-0.5 bg-brandprimary rounded-[4px_4px_0px_0px]" />
                </div>

                <div className="inline-flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      Issues
                    </div>

                    <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-neutralbg rounded-[999999px] overflow-hidden">
                      <div className="w-fit text-[#212121] text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        10
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      Forms
                    </div>

                    <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-neutralbg rounded-[999999px] overflow-hidden">
                      <div className="w-fit text-[#212121] text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <EmployeeSelector
              className="flex-[0_0_auto]"
              placeholder="Select Employee"
              onEmployeeChange={(employee) => console.log('Employee changed:', employee)}
            />
            <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
              <img
                className="relative w-5 h-5"
                alt="Dots horizontal"
                src="https://c.animaapp.com/medy1fp6HOX7TE/img/dots-horizontal-3.svg"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 p-4 relative flex-1 self-stretch w-full grow bg-white overflow-hidden overflow-y-scroll">
            <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <TaskCard
                  className="!flex-1 !grow !w-[unset]"
                  property1="default"
                  text="ID #3789"
                  text1="How to Manage Stock"
                  text2="14"
                  text3="22 June, 2024"
                />
                <TaskCard
                  className="!flex-1 !grow !w-[unset]"
                  property1="hover"
                  text="ID #3789"
                  text1="How to Manage Stock"
                  text2="14"
                  text3="3 April, 2025"
                />
                <TaskCard
                  className="!flex-1 !grow !w-[unset]"
                  property1="default"
                  text="ID #7182"
                  text1="Tracking Daily Earnings"
                  text2="18"
                  text3="12 October, 2024"
                />
              </div>

              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <TaskCard
                  className="!flex-1 !grow !w-[unset]"
                  property1="default"
                  text="ID #6047"
                  text1="Tool for Managing Reservations"
                  text2="17"
                  text3="5 September, 2025"
                />
                <TaskCard
                  className="!flex-1 !grow !w-[unset]"
                  property1="default"
                  text="ID #6047"
                  text1="Tool for Managing Reservations"
                  text2="17"
                  text3="5 September, 2025"
                />
                <TaskCard
                  className="!flex-1 !grow !w-[unset]"
                  property1="default"
                  text="ID #4820"
                  text1="Coordinating Employee Shifts"
                  text2="15"
                  text3="10 July, 2025"
                />
              </div>

              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <TaskCard
                  className="!flex-1 !grow !w-[unset]"
                  property1="default"
                  text="ID #5913"
                  text1="Reviewing Client Happiness"
                  text2="16"
                  text3="1 August, 2024"
                />
                <TaskCard
                  className="!flex-1 !grow !w-[unset]"
                  property1="default"
                  text="ID #2456"
                  text1="Ways to Prepare Meals"
                  text2="13"
                  text3="15 May, 2024"
                />
              </div>
            </div>

            <div className="absolute w-1.5 h-[60px] top-4 left-[1185px] bg-[#ebebeb] rounded-[99999px]" />
          </div>
        </div>

        <div className="flex flex-col h-[280px] items-start relative self-stretch w-full bg-white rounded-xl overflow-hidden border border-solid border-[#ebebeb]">
          <div className="flex items-start gap-3 pt-3 pb-0 px-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ebebeb]">
            <div className="flex flex-col items-start gap-1 relative flex-1 grow">
              <div className="relative w-[510px] h-[22px] mt-[-1.00px] font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                Employee wise progress
              </div>

              <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-center gap-1.5 pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-brandprimary text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      Tasks
                    </div>

                    <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-brandlight rounded-[999999px] overflow-hidden">
                      <div className="w-fit text-brandprimary text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        10
                      </div>
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-0.5 bg-brandprimary rounded-[4px_4px_0px_0px]" />
                </div>

                <div className="inline-flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      Issues
                    </div>

                    <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-neutralbg rounded-[999999px] overflow-hidden">
                      <div className="w-fit text-[#212121] text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        10
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      Workflows
                    </div>

                    <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-neutralbg rounded-[999999px] overflow-hidden">
                      <div className="w-fit text-[#212121] text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                        10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <EmployeeSelector
              className="flex-[0_0_auto]"
              placeholder="Select Employee"
              onEmployeeChange={(employee) => console.log('Employee changed:', employee)}
            />
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
                <img
                  className="relative w-5 h-5"
                  alt="Link external"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/link-external-02.svg"
                />
              </div>

              <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
                <img
                  className="relative w-5 h-5"
                  alt="Dots horizontal"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/dots-horizontal-3.svg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <TableCell
                className="!flex-1 !px-1 !py-0 !flex !grow"
                divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] !flex-1 ![font-style:var(--text-small-medium-font-style)] !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)] !w-[unset]"
                frameClassName="!flex-1 !flex !grow"
                frameClassNameOverride="!self-stretch !flex !w-full"
                hasDiv={false}
                hasRectangle={false}
                property1="header-hover"
                text="Name"
              />
              <TableCell
                className="!flex-1 ![justify-content:unset] !flex !grow"
                divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] ![font-style:var(--text-small-medium-font-style)] !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)]"
                frameClassName="!flex-1 !flex !grow"
                frameClassNameOverride="!self-stretch ![justify-content:unset] !flex !w-full"
                hasDiv={false}
                hasRectangle={false}
                property1="header-hover"
                text="Department"
              />
              <TableCell
                className="!flex-1 !flex !grow"
                divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] !flex-1 ![font-style:var(--text-small-medium-font-style)] !text-center !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)] !w-[unset]"
                frameClassName="!flex-1 !flex !grow"
                frameClassNameOverride="!self-stretch ![justify-content:unset] !flex !w-full"
                hasDiv={false}
                hasRectangle={false}
                property1="header-hover"
                text="Assigned"
              />
              <TableCell
                className="!flex-1 !flex !grow"
                divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] !flex-1 ![font-style:var(--text-small-medium-font-style)] !text-center !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)] !w-[unset]"
                frameClassName="!flex-1 !flex !grow"
                frameClassNameOverride="!self-stretch !flex !w-full"
                hasDiv={false}
                hasRectangle={false}
                property1="header-hover"
                text="Ongoing"
              />
              <TableCell
                className="!flex-1 ![justify-content:unset] !flex !grow"
                divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] !flex-1 ![font-style:var(--text-small-medium-font-style)] !text-center !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)] !w-[unset]"
                frameClassName="!flex-1 !flex !grow"
                frameClassNameOverride="!self-stretch !flex !w-full"
                hasDiv={false}
                hasRectangle={false}
                property1="header-hover"
                text="Overdue"
              />
              <TableCell
                className="!flex-1 ![justify-content:unset] !flex !grow"
                divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] !flex-1 ![font-style:var(--text-small-medium-font-style)] !text-center !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)] !w-[unset]"
                frameClassName="!flex-1 !flex !grow"
                frameClassNameOverride="!self-stretch !flex !w-full"
                hasDiv={false}
                hasRectangle={false}
                property1="header-hover"
                text="Completed"
              />
            </div>

            <div className="flex items-start relative flex-1 self-stretch w-full grow bg-white overflow-hidden overflow-y-scroll">
              <div className="flex flex-col items-start relative flex-1 grow">
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="Anita"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="Rahul"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="Priya"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="Vikram"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="Sita"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="Ravi"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="Kiran"
                />
              </div>

              <div className="flex flex-col items-start relative flex-1 grow bg-white">
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  hasDiv={false}
                  property1="default"
                  text="IT Services"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  hasDiv={false}
                  property1="default"
                  text="Human Resources"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  hasDiv={false}
                  property1="default"
                  text="Sales Division"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  hasDiv={false}
                  property1="default"
                  text="Research and Development"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  hasDiv={false}
                  property1="default"
                  text="Marketing Team"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  hasDiv={false}
                  property1="default"
                  text="Finance Department"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  hasDiv={false}
                  property1="default"
                  text="Customer Support"
                />
              </div>

              <div className="flex flex-col items-start relative flex-1 grow">
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="90"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="31"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="45"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="79"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="52"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="64"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="87"
                />
              </div>

              <div className="flex flex-col items-start relative flex-1 grow">
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="90"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="31"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="45"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="79"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="52"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="64"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="87"
                />
              </div>

              <div className="flex flex-col items-start relative flex-1 grow">
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="90"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="31"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="45"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="79"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="52"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="64"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="87"
                />
              </div>

              <div className="flex flex-col items-start relative flex-1 grow">
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="90%"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="31%"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="45%"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="79%"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="52%"
                />
                <TableCell
                  className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="64%"
                />
                <TableCell
                  className="!self-stretch !h-[45px] !flex !w-full"
                  divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !text-center !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                  frameClassName="!flex-1 !grow !w-[unset]"
                  frameClassNameOverride="!p-3"
                  hasDiv={false}
                  property1="default"
                  text="87%"
                />
              </div>
            </div>
          </div>

          <div className="top-[116px] left-[1185px] absolute w-1.5 h-[60px] bg-[#ebebeb] rounded-[99999px]" />
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col h-[280px] items-start relative flex-1 grow bg-white rounded-xl overflow-hidden border border-solid border-[#ebebeb]">
              <div className="flex items-center gap-3 p-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ebebeb]">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="relative w-[510px] h-[22px] mt-[-1.00px] mr-[-34.00px] font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                    Personal Notepad
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Link external"
                      src="https://c.animaapp.com/medy1fp6HOX7TE/img/link-external-02.svg"
                    />
                  </div>

                  <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Dots horizontal"
                      src="https://c.animaapp.com/medy1fp6HOX7TE/img/dots-horizontal-3.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 p-4 relative flex-1 self-stretch w-full grow">
                <Note
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  state="default"
                  text="Make shift &amp; assign"
                  text1="Assign individuals to specific shifts based on availability and role requirements"
                  initialChecked={false}
                />
                <Note
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  frameClassName="!flex-1 !flex !grow"
                  inputFieldClassName="!self-stretch !w-[unset]"
                  state="default"
                  text="Menu correction"
                  text1="Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options."
                  initialChecked={false}
                />
              </div>
            </div>

            <Component
              className="!flex-1 !grow !w-[unset]"
              imgClassName="!mb-[-1.00px]"
              lineClassName="!ml-[unset]"
              lineClassNameOverride="!mt-[unset]"
              property1="frame-1410090928"
            />
          </div>

          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col h-[280px] items-start relative flex-1 grow bg-white rounded-xl overflow-hidden border border-solid border-[#ebebeb]">
              <div className="flex items-center gap-3 p-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ebebeb]">
                <div className="flex items-start gap-2 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                    Overdue tasks
                  </div>

                  <div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-neutralbg rounded-[999999px] overflow-hidden">
                    <div className="w-fit text-[#212121] text-center relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
                      10
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Link external"
                      src="https://c.animaapp.com/medy1fp6HOX7TE/img/link-external-02.svg"
                    />
                  </div>

                  <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Dots horizontal"
                      src="https://c.animaapp.com/medy1fp6HOX7TE/img/dots-horizontal-3.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <TableCell
                    className="!px-1 !py-0 !flex !w-[180px]"
                    divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] !flex-1 ![font-style:var(--text-small-medium-font-style)] !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)] !w-[unset]"
                    frameClassName="!flex-1 !flex !grow"
                    frameClassNameOverride="!self-stretch !flex !w-full"
                    hasDiv={false}
                    hasRectangle={false}
                    property1="header-hover"
                    text="Task Name"
                  />
                  <TableCell
                    className="![justify-content:unset] !flex !w-[120px]"
                    divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] ![font-style:var(--text-small-medium-font-style)] !text-center !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)]"
                    frameClassName="!flex-1 !flex !grow"
                    frameClassNameOverride="!self-stretch ![justify-content:unset] !flex !w-full"
                    hasDiv={false}
                    hasRectangle={false}
                    property1="header-hover"
                    text="Assigned to"
                  />
                  <TableCell
                    className="!flex-1 ![justify-content:unset] !flex !grow"
                    divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] ![font-style:var(--text-small-medium-font-style)] !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)]"
                    frameClassName="!flex-1 !flex !grow"
                    frameClassNameOverride="!self-stretch ![justify-content:unset] !flex !w-full"
                    hasDiv={false}
                    hasRectangle={false}
                    property1="header-hover"
                    text="Status"
                  />
                  <TableCell
                    className="!flex-1 ![justify-content:unset] !flex !grow"
                    divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] !flex-1 ![font-style:var(--text-small-medium-font-style)] !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)] !w-[unset]"
                    frameClassName="!flex-[unset] !flex !w-[73px]"
                    frameClassNameOverride="!self-stretch !flex !w-full"
                    hasDiv={false}
                    hasRectangle={false}
                    property1="header-hover"
                    text="Due date"
                  />
                  <TableCell
                    className="!flex-[0_0_auto] ![justify-content:unset]"
                    divClassName="!tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] !flex-1 ![font-style:var(--text-small-medium-font-style)] !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)] !w-[unset]"
                    frameClassName="!flex-[unset] !flex !w-[73px]"
                    frameClassNameOverride="!self-stretch !flex !w-full"
                    hasDiv={false}
                    hasRectangle={false}
                    property1="header-hover"
                    text="Reassign"
                  />
                </div>

                <div className="flex items-start relative flex-1 self-stretch w-full grow bg-white overflow-hidden overflow-y-scroll">
                  <div className="flex flex-col w-[180px] items-start relative">
                    <TableCell
                      className="!self-stretch !h-[45px] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      frameClassNameOverride="!p-3"
                      hasDiv={false}
                      property1="default"
                      text="Menu Planning"
                    />
                    <TableCell
                      className="!self-stretch !h-[unset] !flex-[0_0_auto] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="![align-self:unset] !h-[47px] !flex-1 !grow !w-[unset]"
                      frameClassNameOverride="!p-3"
                      hasDiv={false}
                      property1="default"
                      text="Staff Scheduling"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      frameClassNameOverride="!p-3"
                      hasDiv={false}
                      property1="default"
                      text="Inventory management"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      frameClassNameOverride="!p-3"
                      hasDiv={false}
                      property1="default"
                      text="Customer Feedback Analysis"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      frameClassNameOverride="!p-3"
                      hasDiv={false}
                      property1="default"
                      text="Budget Forecasting"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      frameClassNameOverride="!p-3"
                      hasDiv={false}
                      property1="default"
                      text="Marketing Strategy Development"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      frameClassNameOverride="!p-3"
                      hasDiv={false}
                      property1="default"
                      text="Quality Assurance Testing"
                    />
                  </div>

                  <div className="flex flex-col w-[120px] items-start relative">
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="Ajay"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="Niraj"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="Vijay"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="Arvind"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="Priya"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="Suresh"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="Fatima"
                    />
                  </div>

                  <div className="flex flex-col items-start relative flex-1 grow">
                    <TableCell
                      className="!self-stretch !flex-[0_0_auto] !flex !w-full"
                      frameClassName="!flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !flex !w-full"
                      hasDiv={false}
                      property1="tag"
                      tagsState="overdue"
                      tagsStateOngoingClassName="!mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                    />
                    <TableCell
                      className="!self-stretch !flex-[0_0_auto] !flex !w-full"
                      frameClassName="!flex-1 !flex !grow"
                      hasDiv={false}
                      property1="tag"
                      tagsState="overdue"
                      tagsStateOngoingClassName="!mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                    />
                    <TableCell
                      className="!self-stretch !flex-[0_0_auto] !flex !w-full"
                      frameClassName="!flex-1 !flex !grow"
                      hasDiv={false}
                      property1="tag"
                      tagsState="overdue"
                      tagsStateOngoingClassName="!mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                    />
                    <TableCell
                      className="!self-stretch !flex-[0_0_auto] !flex !w-full"
                      frameClassName="!flex-1 !flex !grow"
                      hasDiv={false}
                      property1="tag"
                      tagsState="overdue"
                      tagsStateOngoingClassName="!mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                    />
                    <TableCell
                      className="!self-stretch !flex-[0_0_auto] !flex !w-full"
                      frameClassName="!flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !flex !w-full"
                      hasDiv={false}
                      property1="tag"
                      tagsState="overdue"
                      tagsStateOngoingClassName="!mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                    />
                    <TableCell
                      className="!self-stretch !flex-[0_0_auto] !flex !w-full"
                      frameClassName="!flex-1 !flex !grow"
                      hasDiv={false}
                      property1="tag"
                      tagsState="overdue"
                      tagsStateOngoingClassName="!mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                    />
                    <TableCell
                      className="!self-stretch !flex-[0_0_auto] !flex !w-full"
                      frameClassName="!flex-1 !flex !grow"
                      hasDiv={false}
                      property1="tag"
                      tagsState="overdue"
                      tagsStateOngoingClassName="!mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                    />
                  </div>

                  <div className="flex flex-col items-start relative flex-1 grow">
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="12-07-2024"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="01-08-2023"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="02-09-2022"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="11-06-2025"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="04-11-2020"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="10-05-2026"
                    />
                    <TableCell
                      className="!self-stretch !h-[45px] ![justify-content:unset] !flex !w-full"
                      divClassNameOverride="!tracking-[var(--text-small-regular-letter-spacing)] !text-[length:var(--text-small-regular-font-size)] ![font-style:var(--text-small-regular-font-style)] !font-[number:var(--text-small-regular-font-weight)] !font-text-small-regular !leading-[var(--text-small-regular-line-height)]"
                      frameClassName="!flex-1 !grow !w-[unset]"
                      hasDiv={false}
                      property1="default"
                      text="03-10-2021"
                    />
                  </div>

                  <div className="flex flex-col w-[73px] items-start relative">
                    <TableCell
                      className="!self-stretch !h-[unset] !flex-[0_0_auto] ![justify-content:unset] !flex !w-full"
                      frameClassName="![align-self:unset] !flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !justify-center !flex-[0_0_auto] !flex !grow-[unset] !w-full"
                      hasDiv={false}
                      hasRectangle1={false}
                      property1="actions"
                      propertyFrameWrapperDotsHorizontal="https://c.animaapp.com/medy1fp6HOX7TE/img/user-plus-02.svg"
                      visible={false}
                      visible1={false}
                    />
                    <TableCell
                      className="!self-stretch !h-[unset] !flex-[0_0_auto] ![justify-content:unset] !flex !w-full"
                      frameClassName="![align-self:unset] !flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !justify-center !flex-[0_0_auto] !flex !grow-[unset] !w-full"
                      hasDiv={false}
                      hasRectangle1={false}
                      property1="actions"
                      propertyFrameWrapperDotsHorizontal="https://c.animaapp.com/medy1fp6HOX7TE/img/user-plus-02.svg"
                      visible={false}
                      visible1={false}
                    />
                    <TableCell
                      className="!self-stretch !h-[unset] !flex-[0_0_auto] ![justify-content:unset] !flex !w-full"
                      frameClassName="![align-self:unset] !flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !justify-center !flex-[0_0_auto] !flex !grow-[unset] !w-full"
                      hasDiv={false}
                      hasRectangle1={false}
                      property1="actions"
                      propertyFrameWrapperDotsHorizontal="https://c.animaapp.com/medy1fp6HOX7TE/img/user-plus-02.svg"
                      visible={false}
                      visible1={false}
                    />
                    <TableCell
                      className="!self-stretch !h-[unset] !flex-[0_0_auto] ![justify-content:unset] !flex !w-full"
                      frameClassName="![align-self:unset] !flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !justify-center !flex-[0_0_auto] !flex !grow-[unset] !w-full"
                      hasDiv={false}
                      hasRectangle1={false}
                      property1="actions"
                      propertyFrameWrapperDotsHorizontal="https://c.animaapp.com/medy1fp6HOX7TE/img/user-plus-02.svg"
                      visible={false}
                      visible1={false}
                    />
                    <TableCell
                      className="!self-stretch !h-[unset] !flex-[0_0_auto] ![justify-content:unset] !flex !w-full"
                      frameClassName="![align-self:unset] !flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !justify-center !flex-[0_0_auto] !flex !grow-[unset] !w-full"
                      hasDiv={false}
                      hasRectangle1={false}
                      property1="actions"
                      propertyFrameWrapperDotsHorizontal="https://c.animaapp.com/medy1fp6HOX7TE/img/user-plus-02.svg"
                      visible={false}
                      visible1={false}
                    />
                    <TableCell
                      className="!self-stretch !h-[unset] !flex-[0_0_auto] ![justify-content:unset] !flex !w-full"
                      frameClassName="![align-self:unset] !flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !justify-center !flex-[0_0_auto] !flex !grow-[unset] !w-full"
                      hasDiv={false}
                      hasRectangle1={false}
                      property1="actions"
                      propertyFrameWrapperDotsHorizontal="https://c.animaapp.com/medy1fp6HOX7TE/img/user-plus-02.svg"
                      visible={false}
                      visible1={false}
                    />
                    <TableCell
                      className="!self-stretch !h-[unset] !flex-[0_0_auto] ![justify-content:unset] !flex !w-full"
                      frameClassName="![align-self:unset] !flex-1 !flex !grow"
                      frameClassNameOverride="!self-stretch !justify-center !flex-[0_0_auto] !flex !grow-[unset] !w-full"
                      hasDiv={false}
                      hasRectangle1={false}
                      property1="actions"
                      propertyFrameWrapperDotsHorizontal="https://c.animaapp.com/medy1fp6HOX7TE/img/user-plus-02.svg"
                      visible={false}
                      visible1={false}
                    />
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col h-[280px] items-start relative flex-1 grow bg-white rounded-xl overflow-hidden border border-solid border-[#ebebeb]">
              <div className="flex items-center gap-3 p-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ebebeb]">
                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <div className="relative w-[510px] h-[22px] mt-[-1.00px] mr-[-34.00px] font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] [font-style:var(--text-base-semibold-font-style)]">
                    Workflows
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Link external"
                      src="https://c.animaapp.com/medy1fp6HOX7TE/img/link-external-02.svg"
                    />
                  </div>

                  <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Dots horizontal"
                      src="https://c.animaapp.com/medy1fp6HOX7TE/img/dots-horizontal-3.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 p-4 relative flex-1 self-stretch w-full grow bg-white overflow-hidden overflow-y-scroll">
                <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <WorkflowCard
                      className="!flex-1 !grow !w-[unset]"
                      property1="default"
                      text="Stock Control Strategies"
                      text1="22"
                    />
                    <WorkflowCard
                      className="!flex-1 !grow !w-[unset]"
                      property1="default"
                      text="How to Handle Inventory"
                      text1="15"
                    />
                  </div>

                  <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <WorkflowCard
                      className="!flex-1 !grow !w-[unset]"
                      property1="default"
                      text="Inventory Management Tips"
                      text1="30"
                    />
                    <WorkflowCard
                      className="!flex-1 !grow !w-[unset]"
                      property1="default"
                      text="Managing Your Stock Effectively"
                      text1="5"
                    />
                  </div>

                  <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <WorkflowCard
                      className="!flex-1 !grow !w-[unset]"
                      property1="default"
                      text="Optimizing Your Inventory"
                      text1="12"
                    />
                    <WorkflowCard
                      className="!flex-1 !grow !w-[unset]"
                      property1="default"
                      text="Stock Management Techniques"
                      text1="8"
                    />
                  </div>
                </div>

                <div className="top-4 left-[577px] absolute w-1.5 h-[60px] bg-[#ebebeb] rounded-[99999px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
