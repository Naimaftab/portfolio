import React from 'react';

const SkillCard = ({ skill }) => (
  <div className="relative group flex-1">
    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity" 
         style={{background: `linear-gradient(135deg, ${skill.color.split(' ')[1]} 0%, ${skill.color.split(' ')[3]} 100%)`}}></div>
    <div className="bg-white relative p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all h-full">
      <div className="flex items-center gap-4 mb-6">
  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
    <skill.icon className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-xl font-bold text-gray-900 border-b-2 border-gray-300 pb-1">{skill.name}</h3>
</div>

      <div className="space-y-2">
        {skill.items.map((item, idx) => (
          <span key={idx} className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 mr-2 mb-2">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default SkillCard;