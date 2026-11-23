import React from 'react';
import {
  Smartphone,
  LayoutDashboard,
  Cpu,
  ShoppingBag,
  Activity,
  Thermometer,
  Droplets,
  Calendar,
  UserCheck,
  Search,
  Star,
  CheckCircle,
  Clock,
  ShieldAlert
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'mobile' | 'dashboard' | 'iot';
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, title }) => {
  if (type === 'mobile') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#18090a] via-[#120708] to-[#0a0a0a] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-[#2b1214] group-hover:border-[#E21D2F]/50 transition-all duration-300">
        {/* Glow */}
        <div className="absolute inset-0 bg-radial from-[#E21D2F]/10 via-transparent to-transparent opacity-80" />
        
        {/* Dual Phone mockups */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-4 scale-95 sm:scale-100 transition-transform duration-300 group-hover:scale-105">
          
          {/* Phone 1: Food Menu */}
          <div className="w-28 sm:w-32 h-44 sm:h-52 bg-[#0d0d0d] rounded-2xl border-2 border-[#331518] shadow-2xl p-2 flex flex-col justify-between overflow-hidden relative">
            <div className="w-10 h-1 bg-[#252525] rounded-full mx-auto mb-1.5" />
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[8px] text-gray-400 font-mono">
                <span>FoodieFleet</span>
                <span className="text-[#E21D2F]">● Live</span>
              </div>
              <div className="h-12 rounded-lg bg-gradient-to-r from-[#E21D2F]/30 to-amber-500/20 p-1.5 flex flex-col justify-end">
                <span className="text-[8px] font-bold text-white leading-tight">Cheesy Smash Burger</span>
                <span className="text-[7px] text-amber-300 font-mono">₹ 189 • 4.8★</span>
              </div>
              <div className="h-10 rounded-lg bg-[#181818] p-1.5 flex flex-col justify-end">
                <span className="text-[8px] font-bold text-gray-200 leading-tight">Margherita Pizza</span>
                <span className="text-[7px] text-[#E21D2F] font-mono">₹ 249 • 4.9★</span>
              </div>
            </div>
            <div className="w-full py-1 bg-[#E21D2F] rounded-md text-[8px] font-bold text-white text-center">
              Add to Cart
            </div>
          </div>

          {/* Phone 2: Active Delivery Order */}
          <div className="w-28 sm:w-32 h-44 sm:h-52 bg-[#0a0a0a] rounded-2xl border-2 border-[#E21D2F]/60 shadow-2xl p-2 flex flex-col justify-between overflow-hidden relative transform translate-y-2">
            <div className="w-10 h-1 bg-[#252525] rounded-full mx-auto mb-1.5" />
            <div className="space-y-1.5">
              <div className="p-1 rounded bg-[#1f1012] border border-[#E21D2F]/40 text-center">
                <span className="text-[8px] font-bold text-[#E21D2F]">Order #FF-4892</span>
                <div className="text-[7px] text-gray-300 font-mono">Preparing in Kitchen</div>
              </div>
              <div className="p-1.5 rounded-lg bg-[#141414] border border-[#222222] space-y-1">
                <div className="flex justify-between text-[7px] text-gray-400">
                  <span>Estimated Time</span>
                  <span className="text-white font-bold">18 Mins</span>
                </div>
                <div className="w-full bg-[#202020] h-1 rounded-full overflow-hidden">
                  <div className="bg-[#E21D2F] h-full w-2/3" />
                </div>
              </div>
              <div className="text-[7px] text-gray-400 space-y-0.5">
                <div>📍 Destination: VPMP Campus</div>
                <div className="text-emerald-400">✓ Paid via UPI</div>
              </div>
            </div>
            <div className="w-full py-1 bg-[#1c1c1c] border border-[#333333] rounded-md text-[8px] font-semibold text-gray-300 text-center">
              Track Courier
            </div>
          </div>

        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#0a1118] via-[#080d14] to-[#050505] rounded-xl overflow-hidden p-3.5 flex flex-col justify-between border border-[#142838] group-hover:border-sky-500/50 transition-all duration-300">
        {/* Glow */}
        <div className="absolute inset-0 bg-radial from-sky-500/10 via-transparent to-transparent opacity-80" />

        {/* Dashboard Window Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#162736] relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="ml-1.5 text-[9px] font-mono text-sky-300 font-semibold">HealthCloud Pro EHR</span>
          </div>
          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            Clinic Online
          </span>
        </div>

        {/* Dashboard Panels */}
        <div className="grid grid-cols-3 gap-2 my-1 relative z-10">
          <div className="p-1.5 rounded-lg bg-[#0e1b26] border border-[#1b3449]">
            <div className="text-[8px] text-gray-400">Total Patients</div>
            <div className="text-xs font-bold text-white font-mono">1,248</div>
            <div className="text-[7px] text-emerald-400">+12% this wk</div>
          </div>
          <div className="p-1.5 rounded-lg bg-[#0e1b26] border border-[#1b3449]">
            <div className="text-[8px] text-gray-400">Today Visits</div>
            <div className="text-xs font-bold text-sky-400 font-mono">34 Appts</div>
            <div className="text-[7px] text-sky-300">0 Overlaps</div>
          </div>
          <div className="p-1.5 rounded-lg bg-[#0e1b26] border border-[#1b3449]">
            <div className="text-[8px] text-gray-400">EHR Synced</div>
            <div className="text-xs font-bold text-emerald-400 font-mono">100%</div>
            <div className="text-[7px] text-gray-400">AES-256</div>
          </div>
        </div>

        {/* Interactive Schedule Table Preview */}
        <div className="rounded-lg bg-[#09131d] border border-[#152737] p-2 space-y-1 relative z-10">
          <div className="flex items-center justify-between text-[8px] font-mono text-gray-400 pb-1 border-b border-[#182a3b]">
            <span>Patient Name</span>
            <span>Doctor</span>
            <span>Status</span>
          </div>
          <div className="flex items-center justify-between text-[8px] text-gray-200">
            <span className="font-semibold">Rahul Sharma (P-104)</span>
            <span className="text-gray-400">Dr. Mehta</span>
            <span className="text-emerald-400 font-mono">In-Consultation</span>
          </div>
          <div className="flex items-center justify-between text-[8px] text-gray-200">
            <span className="font-semibold">Pooja Patel (P-105)</span>
            <span className="text-gray-400">Dr. Trivedi</span>
            <span className="text-amber-400 font-mono">Waiting (10m)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[8px] font-mono text-[#5f7a93] flex justify-between items-center relative z-10 pt-1">
          <span>Python + MySQL Engine</span>
          <span>Role-Based Access Control</span>
        </div>
      </div>
    );
  }

  // IoT Weather System Mockup
  return (
    <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#0c1610] via-[#09110d] to-[#050505] rounded-xl overflow-hidden p-4 flex flex-col justify-between border border-[#163321] group-hover:border-emerald-500/50 transition-all duration-300">
      {/* Glow */}
      <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent opacity-80" />

      {/* Top Circuit Breadboard Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-wider">
            IoT Weather Station • Node 01
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[8px] font-mono text-emerald-400">DHT22 Active</span>
        </div>
      </div>

      {/* Centerpiece: Glowing Green 16x2 LCD Character Matrix Screen */}
      <div className="my-auto mx-auto w-full max-w-[280px] bg-[#1a381e] rounded-lg p-2.5 border-4 border-[#2b5932] shadow-2xl shadow-emerald-950/80 relative z-10">
        <div className="bg-[#598e34] text-[#0a1806] font-mono p-2.5 rounded text-xs sm:text-sm font-black tracking-widest leading-relaxed shadow-inner border border-[#6ea843]">
          <div className="flex justify-between items-center">
            <span>Temp: 26.6°C</span>
            <Thermometer className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <div className="flex justify-between items-center mt-1">
            <span>Humi: 65.0%</span>
            <Droplets className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>
      </div>

      {/* Bottom Sensor Telemetry Badges */}
      <div className="grid grid-cols-2 gap-2 relative z-10">
        <div className="p-1.5 rounded bg-[#102016] border border-[#1b3b27] flex items-center justify-between text-[8px] font-mono text-gray-300">
          <span>Bus: I2C (0x27)</span>
          <span className="text-emerald-400">Stable</span>
        </div>
        <div className="p-1.5 rounded bg-[#102016] border border-[#1b3b27] flex items-center justify-between text-[8px] font-mono text-gray-300">
          <span>Sampling: 2000ms</span>
          <span className="text-emerald-400">Moving Avg</span>
        </div>
      </div>
    </div>
  );
};
