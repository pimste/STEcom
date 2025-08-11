'use client';

import { useState, useEffect } from 'react';
import { SEOMetadata } from '../lib/seo/types';
import { SEOPerformanceController } from '../lib/seo/performance';

interface SEODashboardProps {
  currentUrl: string;
  metadata: SEOMetadata;
}

export default function SEODashboard({ currentUrl, metadata }: SEODashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [performanceReport, setPerformanceReport] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const performanceController = new SEOPerformanceController();

  useEffect(() => {
    loadPerformanceReport();
  }, []);

  const loadPerformanceReport = async () => {
    try {
      const response = await fetch(`/api/seo/performance?action=comprehensive_report&url=${encodeURIComponent(currentUrl)}&keywords=${metadata.keywords.join(',')}`);
      const data = await response.json();
      if (data.success) {
        setPerformanceReport(data.data.report);
      }
    } catch (error) {
      console.error('Error loading performance report:', error);
    }
  };



  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'performance', name: 'Performance', icon: '⚡' },
    { id: 'rankings', name: 'Rankings', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">SEO Dashboard</h1>
            <p className="text-gray-600">Comprehensive SEO management for {currentUrl}</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900">Current Page</h3>
                    <p className="text-blue-700">{currentUrl}</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900">Primary Keyword</h3>
                    <p className="text-green-700">{metadata.keywords[0] || 'Not set'}</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900">Performance Score</h3>
                    <p className="text-purple-700">Loading...</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Current Metadata</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Title:</strong> {metadata.title}</div>
                    <div><strong>Description:</strong> {metadata.description}</div>
                    <div><strong>Keywords:</strong> {metadata.keywords.join(', ')}</div>
                  </div>
                </div>
              </div>
            )}



            {activeTab === 'performance' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Performance Report</h3>
                
                {performanceReport ? (
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                      {performanceReport}
                    </pre>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No performance data available
                  </div>
                )}
              </div>
            )}

            {activeTab === 'rankings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Ranking Tracking</h3>
                <div className="text-center py-8 text-gray-500">
                  Ranking tracking data will be displayed here
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">SEO Settings</h3>
                <div className="text-center py-8 text-gray-500">
                  SEO configuration settings will be displayed here
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
