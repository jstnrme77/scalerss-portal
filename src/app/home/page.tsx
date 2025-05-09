'use client';

import {
  Package,
  CheckSquare,
  BarChart3,
  Clock
} from 'lucide-react';
import LinkButton from '@/components/ui/forms/LinkButton';

export default function Home() {
  // Current month for milestone tracking
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <>
      {/* Campaign Status Overview */}
      {/* <div className="mb-6">
        <p className="text-lg text-[#12131C] dark:text-gray-300 mb-4">
          Here&apos;s where your campaign stands this week
        </p> */}

        {/* Highlighted Reminders - Priority 1 */}
        {/* <div className="relative overflow-hidden rounded-3xl border-8 border-[#9EA8FB] bg-gradient-to-r from-[#9EA8FB]/10 to-white p-5 shadow-lg">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-md border border-amber-200 bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
              </span>
              <span className="font-bold">1</span> Action Required
            </span>
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <h2 className="mb-2 text-lg font-medium text-[#12131C]">Items Needing Your Attention</h2>
              <p className="text-sm text-[#4F515E]">3 deliverables need your review. 1 new report is available.</p>
            </div>
            <Link href="/approvals" className="btn-primary inline-flex items-center justify-center gap-2 text-base get-started-btn w-full">
              Go to Approvals
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
            <div className="absolute right-4 top-4 h-4 w-4 animate-pulse rounded-full bg-amber-500"></div>
          </div>
        </div>
      </div> */}

      {/* Main Content and Sidebar Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content Area - Mission Control Layout */}
        <div className="lg:w-2/3">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Deliverables Summary Card - Priority 2 */}
            <div className="rounded-3xl border-8 border-[#F5F5F9] bg-white p-6 shadow-sm flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9EA8FB]/20 mr-3">
                  <Package className="h-6 w-6 text-[#9EA8FB]" />
                </div>
                <h2 className="text-2xl font-bold text-[#12131C]">Content Workflow</h2>
              </div>
              <p className="text-base text-[#12131C] mb-4">Monitor your content and link building progress</p>

              <div className="grid gap-8 md:grid-cols-2 flex-grow">
                {/* Deliverables Status */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9EA8FB]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-check h-6 w-6 text-[#9EA8FB]">
                      <path d="M16 16h6"></path>
                      <path d="M19 10V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h12"></path>
                      <path d="m9 15 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Delivered</h3>
                  <p className="text-2xl font-bold">12</p>
                </div>

                {/* In Progress */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9EA8FB]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-6 w-6 text-[#9EA8FB]">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">In Progress</h3>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-[#9EA8FB]" style={{ width: '60%' }}></div>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span>Delivered</span>
                  <span>Pending</span>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <LinkButton href="/deliverables" variant="primary" className="text-base get-started-btn w-full">
                  View All Deliverables
                </LinkButton>
              </div>
            </div>

            {/* Client Actions Needed Card - Priority 3 */}
            <div className="rounded-3xl border-8 border-[#F5F5F9] bg-white p-6 shadow-sm flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9EA8FB]/20 mr-3">
                  <CheckSquare className="h-6 w-6 text-[#9EA8FB]" />
                </div>
                <h2 className="text-2xl font-bold text-[#12131C]">Your Action Items</h2>
              </div>
              <p className="text-base text-[#12131C] mb-4">Items waiting for your review or approval</p>

              <div className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 mt-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Content Brief Approval</p>
                      <p className="text-sm text-gray-600">Due in 2 days</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                    </div>
                    <div>
                      <p className="font-medium">Review Monthly Report</p>
                      <p className="text-sm text-gray-600">New report available</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <div>
                      <p className="font-medium">Feedback on Article Draft</p>
                      <p className="text-sm text-gray-600">Submitted yesterday</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <LinkButton href="/approvals" variant="primary" className="text-base get-started-btn w-full">
                  Review All Items
                </LinkButton>
              </div>
            </div>

            {/* Milestone Tracker Card - Priority 4 */}
            <div className="rounded-3xl border-8 border-[#F5F5F9] bg-white p-6 shadow-sm flex flex-col h-full md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9EA8FB]/20 mr-3">
                  <BarChart3 className="h-6 w-6 text-[#9EA8FB]" />
                </div>
                <h2 className="text-2xl font-bold text-[#12131C]">Campaign Progress</h2>
              </div>
              <p className="text-base text-[#12131C] mb-4">Track your monthly campaign milestones and goals</p>

              <div className="mb-6">
                <div className="flex items-center justify-between text-base mb-2">
                  <span className="font-medium">{currentMonth} Progress:</span>
                  <span>63% complete</span>
                </div>
                <div role="progressbar" aria-valuemin={0} aria-valuemax={100} className="relative w-full overflow-hidden rounded-full h-2 bg-gray-200">
                  <div className="h-full w-full flex-1 bg-[#9EA8FB] transition-all" style={{ width: '63%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 flex-grow">
                {/* Content */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-6 w-6 text-gray-600">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Content</h3>
                  <p className="text-base">6 of 12 briefs delivered</p>
                </div>

                {/* Links */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link2 h-6 w-6 text-gray-600">
                      <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                      <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                      <line x1="8" x2="16" y1="12" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Links</h3>
                  <p className="text-base">4 backlinks, 1 blog live</p>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <LinkButton href="/milestones" variant="primary" className="text-base get-started-btn w-full">
                  View Monthly Plan
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Activity Sidebar - Priority 5 */}
        <div className="lg:w-1/3">
          <div className="rounded-3xl border-8 border-[#F5F5F9] bg-white p-6 shadow-sm h-full">
            <div className="flex items-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9EA8FB]/20 mr-3">
                <Clock className="h-6 w-6 text-[#9EA8FB]" />
              </div>
              <h2 className="text-2xl font-bold text-[#12131C]">Latest Activity</h2>
            </div>
            <p className="text-base text-[#12131C] mb-4">Recent updates to your campaign</p>

            <div className="space-y-6">
              {/* Recent Briefs */}
              <div className="border-l-4 border-[#9EA8FB] pl-4">
                <h3 className="text-lg font-bold mb-2">Briefs Sent</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Product Comparison Guide</p>
                    <p className="text-sm text-gray-600">Sent 2 days ago</p>
                  </div>
                  <div>
                    <p className="font-medium">SEO Strategy Update</p>
                    <p className="text-sm text-gray-600">Sent 5 days ago</p>
                  </div>
                </div>
              </div>

              {/* Plans Approved */}
              <div className="border-l-4 border-[#9EA8FB] pl-4">
                <h3 className="text-lg font-bold mb-2">Plans Approved</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Q2 Content Calendar</p>
                    <p className="text-sm text-gray-600">Approved yesterday</p>
                  </div>
                  <div>
                    <p className="font-medium">Link Building Strategy</p>
                    <p className="text-sm text-gray-600">Approved last week</p>
                  </div>
                </div>
              </div>

              {/* Feedback Requested */}
              <div className="border-l-4 border-[#9EA8FB] pl-4">
                <h3 className="text-lg font-bold mb-2">Feedback Requested</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Competitor Analysis</p>
                    <p className="text-sm text-gray-600">Awaiting feedback</p>
                  </div>
                  <div>
                    <p className="font-medium">Homepage Copy Draft</p>
                    <p className="text-sm text-gray-600">Awaiting feedback</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <LinkButton href="/timeline" variant="primary" className="text-base get-started-btn w-full">
                View Full Timeline
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
