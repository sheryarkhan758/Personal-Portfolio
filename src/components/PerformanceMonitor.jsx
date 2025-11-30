import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor loading performance
    const logPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const resources = performance.getEntriesByType('resource');
        
        console.log('🚀 Performance Metrics:');
        console.log(`📊 Page Load Time: ${Math.round(navigation.loadEventEnd - navigation.loadEventStart)}ms`);
        console.log(`🔄 DOM Content Loaded: ${Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)}ms`);
        
        // Find slow loading resources
        const slowResources = resources.filter(resource => resource.duration > 1000);
        if (slowResources.length > 0) {
          console.log('⚠️ Slow loading resources (>1s):');
          slowResources.forEach(resource => {
            console.log(`  - ${resource.name}: ${Math.round(resource.duration)}ms`);
          });
        }
        
        // Log largest images
        const images = resources.filter(r => r.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i));
        const largeImages = images.filter(img => img.transferSize > 500000); // >500KB
        if (largeImages.length > 0) {
          console.log('📸 Large images detected (>500KB):');
          largeImages.forEach(img => {
            const sizeKB = Math.round(img.transferSize / 1024);
            console.log(`  - ${img.name.split('/').pop()}: ${sizeKB}KB`);
          });
        }
      }
    };

    // Run after page load
    window.addEventListener('load', logPerformance);
    
    return () => window.removeEventListener('load', logPerformance);
  }, []);

  return null; // This is a monitoring component, no UI
};

export default PerformanceMonitor;