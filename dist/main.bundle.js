class Fs1{readFileSync(e,r=(e,r)=>{}){let t=null;const s=new XMLHttpRequest;return s.open("GET",e,!1),s.send(),200==s.status||304==s.status?(t=s.responseText,r(null,t)):(t=s.status,r(t,null)),t}promises={readFile(e,u=(e,r)=>{}){return new Promise((r,t)=>{const s=new XMLHttpRequest;s.open("get",e,!0),s.onload=()=>{var e=s.status;200==e||304==e?(u(null,s.response),r(s.response)):(u(s.status,null),t(e))},s.send()})}};constructor(){for(var key in this.promises)eval("this."+key+' = this.promises["'+key+'"];')}}let requireroutes={"@node":{fs:new Fs1}};function webrequire(e){for(var r in requireroutes){var t=requireroutes[r].constructor==={}.constructor,s=e.split("/"),u=void 0===requireroutes[r].main,n=requireroutes.hasOwnProperty(s[0])&&requireroutes[s[0]].hasOwnProperty(s[1]);if(r===e&&!t)return requireroutes[r];if(t&&r===e&&u)return requireroutes[r];if(t&&r===e&&!u)return requireroutes[r].main;if(n)return requireroutes[s[0]][s[1]]}}const require={get current(){return webrequire},set current2(e){webrequire=e}};window.require={get current(){return webrequire},set current2(e){webrequire=e}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZzLmpzIiwibW9kdWxlcy5qcyJdLCJuYW1lcyI6WyJGczEiLCJyZWFkRmlsZVN5bmMiLCJuYW1lIiwiZnVuYyIsInN0YXQiLCJyZXMiLCJsZXQiLCJyZXN1bHQiLCJ4bWxodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2VuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInByb21pc2VzIiwicmVhZEZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIm9ubG9hZCIsInJlc3BvbnNlIiwiY29uc3RydWN0b3IiLCJrZXkiLCJ0aGlzIiwiZXZhbCIsInJlcXVpcmVyb3V0ZXMiLCJAbm9kZSIsImZzIiwid2VicmVxdWlyZSIsImlzanNvbiIsInNsYXNoc3BsaXQiLCJzcGxpdCIsIm5vbWFpbiIsIm1haW4iLCJoYXNkYXQiLCJoYXNPd25Qcm9wZXJ0eSIsInJlcXVpcmUiLCJjdXJyZW50IiwiY3VycmVudDIiLCJ2YWwiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJNQUFNQSxJQUNGQyxhQUFhQyxFQUFNQyxFQUFLLENBQUNDLEVBQU1DLFFBQzNCQyxJQUFJQyxFQUFTLEtBQ2IsTUFBTUMsRUFBVSxJQUFJQyxlQVdwQixPQVZBRCxFQUFRRSxLQUFLLE1BQU9SLEdBQUFBLEdBQ3BCTSxFQUFRRyxPQUNZLEtBQWhCSCxFQUFRSSxRQUErQixLQUFoQkosRUFBUUksUUFDakNMLEVBQVNDLEVBQVFLLGFBQ2pCVixFQUFLLEtBQU1JLEtBR1RBLEVBQVNDLEVBQVFJLE9BQ2pCVCxFQUFLSSxFQUFRLE9BRVZBLEVBRVhPLFNBQVcsQ0FDUEMsU0FBU2IsRUFBTUMsRUFBSyxDQUFDQyxFQUFNQyxRQUN2QixPQUFPLElBQUlXLFFBQVEsQ0FBQ0MsRUFBU0MsS0FDekIsTUFBTUMsRUFBTSxJQUFJVixlQUNoQlUsRUFBSVQsS0FBSyxNQUFPUixHQUFBQSxHQUNoQmlCLEVBQUlDLE9BQVMsS0FDVCxJQUFNUixFQUFTTyxFQUFJUCxPQUNMLEtBQVZBLEdBQTJCLEtBQVZBLEdBQ2pCVCxFQUFLLEtBQU1nQixFQUFJRSxVQUNmSixFQUFRRSxFQUFJRSxZQUVabEIsRUFBS2dCLEVBQUlQLE9BQVEsTUFDakJNLEVBQU9OLEtBR2ZPLEVBQUlSLFdBSWhCVyxjQUNJLElBQUtoQixJQUFJaUIsT0FBT0MsS0FBS1YsU0FDakJXLEtBQUssUUFBVUYsSUFBTSxxQkFBdUJBLElBQU0sUUNuQzlEakIsSUFBSW9CLGNBQWdCLENBQ2hCQyxRQUFTLENBQ0xDLEdBQU0sSUFBSTVCLE1BSWxCLFNBQVM2QixXQUFXM0IsR0FDaEIsSUFBS0ksSUFBSWlCLEtBQU9HLGNBQWUsQ0FDM0JwQixJQUFJd0IsRUFBU0osY0FBY0gsR0FBS0QsY0FBZ0IsR0FBS0EsWUFDakRTLEVBQWE3QixFQUFLOEIsTUFBTSxLQUN4QkMsT0FBQUEsSUFBU1AsY0FBY0gsR0FBV1csS0FDbENDLEVBQVNULGNBQWNVLGVBQWVMLEVBQVcsS0FBT0wsY0FBY0ssRUFBVyxJQUFJSyxlQUFlTCxFQUFXLElBQ25ILEdBQUlSLElBQVFyQixJQUFTNEIsRUFDakIsT0FBT0osY0FBY0gsR0FFcEIsR0FBSU8sR0FBVVAsSUFBUXJCLEdBQVErQixFQUMvQixPQUFPUCxjQUFjSCxHQUVwQixHQUFJTyxHQUFVUCxJQUFRckIsSUFBUytCLEVBQ2hDLE9BQU9QLGNBQWNILEdBQVdXLEtBRS9CLEdBQUlDLEVBQ0wsT0FBT1QsY0FBY0ssRUFBVyxJQUFJQSxFQUFXLEtBSzNELE1BQU1NLFFBQVUsQ0FDWkMsY0FDSSxPQUFPVCxZQUVYVSxhQUFhQyxHQUNUWCxXQUFhVyxJQUdyQkMsT0FBT0osUUFBVSxDQUNiQyxjQUNJLE9BQU9ULFlBRVhVLGFBQWFDLEdBQ1RYLFdBQWFXIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRnMxIHtcclxuICAgIHJlYWRGaWxlU3luYyhuYW1lLCBmdW5jPShzdGF0LCByZXMpID0+IHt9KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbGh0dHAub3BlbihcIkdFVFwiLCBuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgeG1saHR0cC5zZW5kKCk7XHJcbiAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzPT0yMDAgfHwgeG1saHR0cC5zdGF0dXM9PTMwNCkge1xyXG4gICAgICAgICAgcmVzdWx0ID0geG1saHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICBmdW5jKG51bGwsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB4bWxodHRwLnN0YXR1cztcclxuICAgICAgICAgICAgZnVuYyhyZXN1bHQsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJvbWlzZXMgPSB7XHJcbiAgICAgICAgcmVhZEZpbGUobmFtZSwgZnVuYz0oc3RhdCwgcmVzKSA9PiB7fSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdnZXQnLCBuYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSB4aHIuc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAyMDAgfHwgc3RhdHVzID09IDMwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jKG51bGwsIHhoci5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYyh4aHIuc3RhdHVzLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5wcm9taXNlcykge1xyXG4gICAgICAgICAgICBldmFsKCd0aGlzLicgKyBrZXkgKyAnID0gdGhpcy5wcm9taXNlc1tcIicgKyBrZXkgKyAnXCJdOycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGlmIHdlIHdhbnQgbW9kdWxlcyB0byBhY3R1YWxseSB3b3JrLCB3ZSdsbCBoYXZlIHRvIGltcG9ydCB0aGVtIGhlcmUuXHJcblxyXG5sZXQgcmVxdWlyZXJvdXRlcyA9IHtcclxuICAgIFwiQG5vZGVcIjoge1xyXG4gICAgICAgIFwiZnNcIjogbmV3IEZzMSgpXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB3ZWJyZXF1aXJlKG5hbWUpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiByZXF1aXJlcm91dGVzKSB7XHJcbiAgICAgICAgbGV0IGlzanNvbiA9IHJlcXVpcmVyb3V0ZXNba2V5XS5jb25zdHJ1Y3RvciA9PT0gKHt9KS5jb25zdHJ1Y3RvclxyXG4gICAgICAgIGxldCBzbGFzaHNwbGl0ID0gbmFtZS5zcGxpdCgnLycpXHJcbiAgICAgICAgbGV0IG5vbWFpbiA9IHJlcXVpcmVyb3V0ZXNba2V5XVsnbWFpbiddID09PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IGhhc2RhdCA9IHJlcXVpcmVyb3V0ZXMuaGFzT3duUHJvcGVydHkoc2xhc2hzcGxpdFswXSkgJiYgcmVxdWlyZXJvdXRlc1tzbGFzaHNwbGl0WzBdXS5oYXNPd25Qcm9wZXJ0eShzbGFzaHNwbGl0WzFdKTtcclxuICAgICAgICBpZiAoa2V5ID09PSBuYW1lICYmICFpc2pzb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVyb3V0ZXNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNqc29uICYmIGtleSA9PT0gbmFtZSAmJiBub21haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVyb3V0ZXNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNqc29uICYmIGtleSA9PT0gbmFtZSAmJiAhbm9tYWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlcm91dGVzW2tleV1bJ21haW4nXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaGFzZGF0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlcm91dGVzW3NsYXNoc3BsaXRbMF1dW3NsYXNoc3BsaXRbMV1dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVxdWlyZSA9IHtcclxuICAgIGdldCBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB3ZWJyZXF1aXJlO1xyXG4gICAgfSxcclxuICAgIHNldCBjdXJyZW50Mih2YWwpIHtcclxuICAgICAgICB3ZWJyZXF1aXJlID0gdmFsO1xyXG4gICAgfVxyXG59O1xyXG53aW5kb3cucmVxdWlyZSA9IHtcclxuICAgIGdldCBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB3ZWJyZXF1aXJlO1xyXG4gICAgfSxcclxuICAgIHNldCBjdXJyZW50Mih2YWwpIHtcclxuICAgICAgICB3ZWJyZXF1aXJlID0gdmFsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gRE9FU04nVCBXT1JLXHJcbi8vIGNsYXNzIHJlcXVpcmVNb2R1bGUge1xyXG4vLyAgICAgaWQgPSBudWxsO1xyXG4vLyAgICAgZXhwb3J0cyA9IHtcclxuLy8gICAgICAgICBnZXQgY3VycmVudCgpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVyb3V0ZXNbdGhpcy5pZF07XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBzZXQgY3VycmVudDIodmFsdWUpIHtcclxuLy8gICAgICAgICAgICAgcmVxdWlyZXJvdXRlc1t0aGlzLmlkXSA9IHZhbHVlOyAvLyBKdXN0IHNuZWFraW5nIGludG8gdGhpcyBsaW5lIDopXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcHJlcGFyZWRNb2R1bGUobW9kLCBpZD0wKSB7XHJcbi8vICAgICBtb2QuaWQgPSBpZDtcclxuLy8gICAgIHJlcXVpcmVyb3V0ZXNbaWRdID0gbnVsbDtcclxuLy8gICAgIHJldHVybiBtb2Q7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG1vZHVsZSA9IHByZXBhcmVkTW9kdWxlKG5ldyByZXF1aXJlTW9kdWxlKCksIDApO1xyXG4vLyB3aW5kb3cubW9kdWxlID0ge1xyXG4vLyAgICAgZ2V0IGN1cnJlbnQoKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIG1vZHVsZTtcclxuLy8gICAgIH0sXHJcbi8vICAgICBzZXQgY3VycmVudDIodmFsKSB7XHJcbi8vICAgICAgICAgbW9kdWxlID0gdmFsO1xyXG4vLyAgICAgfVxyXG4vLyB9OyJdfQ==
