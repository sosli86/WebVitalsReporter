<script type="module">
import {onCLS, onFID, onLCP} from 'https://unpkg.com/web-vitals@3/dist/web-vitals.attribution.js?module';
function sendToGoogleAnalytics({name, delta, id, attribution}) {
 let debug_target;

  switch (name) {
    case 'CLS':
     debug_target = attribution.largestShiftTarget;
      break;
    case 'FID':
     debug_target = attribution.eventTarget;
      break;
    case 'LCP':
     debug_target = attribution.element;
      break;
  }
  
  gtag('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    non_interaction: true,
	dimension1: debug_target  });
}

onCLS(sendToGoogleAnalytics);
onFID(sendToGoogleAnalytics);
onLCP(sendToGoogleAnalytics);
</script>
