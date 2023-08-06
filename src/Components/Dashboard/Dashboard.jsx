
import Analytics from './Analytics/Analytics';
import OverviewSection from './OverviewSection/OverviewSection';
import Strategy from './Strategy/Strategy';
const Dashboard = () => {
  return (
    <div>
      {/* flex flex-row */}
        <div className="grid grid-cols-12 gap-4">
        {/* basis-3/12 */}
            
            <div className="col-span-12 md:col-span-4 md:ml-16 lg:col-span-3">
                <OverviewSection/>
            </div>
            {/* basis-6/12 */}
            <div className="col-span-12 md:col-span-5 lg:col-span-5">
              <Analytics/>
            </div>
            {/* basis-3/12 */}
            <div className="col-span-12 mb-10 md:col-span-3 lg:col-span-3">
              <Strategy/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard