class Fs1{readFileSync(e,r=(e,r)=>{}){let t=null;const s=new XMLHttpRequest;return s.open("GET",e,!1),s.send(),200!=s.status&&304!=s.status||(t=s.responseText,r(null,t)),t}promises={readFile(e,u=(e,r)=>{}){return new Promise((r,t)=>{const s=new XMLHttpRequest;s.open("get",e,!0),s.onload=()=>{var e=s.status;200==e||304==e?(u(null,s.response),r(s.response)):(u({text:s.statusText,code:s.status},null),t(e))},s.send()})}};constructor(){for(var key in this.promises)eval("this."+key+' = this.promises["'+key+'"];')}}let requireroutes={"@node":{fs:new Fs1}};function webrequire(e){for(var r in requireroutes){var t=requireroutes[r].constructor==={}.constructor,s=e.split("/"),u=void 0===requireroutes[r].main,n=requireroutes.hasOwnProperty(s[0])&&requireroutes[s[0]].hasOwnProperty(s[1]);if(r===e&&!t)return requireroutes[r];if(t&&r===e&&u)return requireroutes[r];if(t&&r===e&&!u)return requireroutes[r].main;if(n)return requireroutes[s[0]][s[1]]}}const require=webrequire;window.require=webrequire;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZzLmpzIiwicmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJGczEiLCJyZWFkRmlsZVN5bmMiLCJuYW1lIiwiZnVuYyIsInN0YXQiLCJyZXMiLCJsZXQiLCJyZXN1bHQiLCJ4bWxodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2VuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInByb21pc2VzIiwicmVhZEZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIm9ubG9hZCIsInJlc3BvbnNlIiwidGV4dCIsInN0YXR1c1RleHQiLCJjb2RlIiwiY29uc3RydWN0b3IiLCJrZXkiLCJ0aGlzIiwiZXZhbCIsInJlcXVpcmVyb3V0ZXMiLCJAbm9kZSIsImZzIiwid2VicmVxdWlyZSIsImlzanNvbiIsInNsYXNoc3BsaXQiLCJzcGxpdCIsIm5vbWFpbiIsIm1haW4iLCJoYXNkYXQiLCJoYXNPd25Qcm9wZXJ0eSIsInJlcXVpcmUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJNQUFNQSxJQUNGQyxhQUFhQyxFQUFNQyxFQUFLLENBQUNDLEVBQU1DLFFBQzNCQyxJQUFJQyxFQUFTLEtBQ2IsTUFBTUMsRUFBVSxJQUFJQyxlQU9wQixPQU5BRCxFQUFRRSxLQUFLLE1BQU9SLEdBQUFBLEdBQ3BCTSxFQUFRRyxPQUNZLEtBQWhCSCxFQUFRSSxRQUErQixLQUFoQkosRUFBUUksU0FDakNMLEVBQVNDLEVBQVFLLGFBQ2pCVixFQUFLLEtBQU1JLElBRU5BLEVBRVhPLFNBQVcsQ0FDUEMsU0FBU2IsRUFBTUMsRUFBSyxDQUFDQyxFQUFNQyxRQUN2QixPQUFPLElBQUlXLFFBQVEsQ0FBQ0MsRUFBU0MsS0FDekIsTUFBTUMsRUFBTSxJQUFJVixlQUNoQlUsRUFBSVQsS0FBSyxNQUFPUixHQUFBQSxHQUNoQmlCLEVBQUlDLE9BQVMsS0FDVCxJQUFNUixFQUFTTyxFQUFJUCxPQUNMLEtBQVZBLEdBQTJCLEtBQVZBLEdBQ2pCVCxFQUFLLEtBQU1nQixFQUFJRSxVQUNmSixFQUFRRSxFQUFJRSxZQUVabEIsRUFBSyxDQUFDbUIsS0FBTUgsRUFBSUksV0FBWUMsS0FBTUwsRUFBSVAsUUFBUyxNQUMvQ00sRUFBT04sS0FHZk8sRUFBSVIsV0FJaEJjLGNBQ0ksSUFBS25CLElBQUlvQixPQUFPQyxLQUFLYixTQUNqQmMsS0FBSyxRQUFVRixJQUFNLHFCQUF1QkEsSUFBTSxRQy9COURwQixJQUFJdUIsY0FBZ0IsQ0FDaEJDLFFBQVMsQ0FDTEMsR0FBTSxJQUFJL0IsTUFJbEIsU0FBU2dDLFdBQVc5QixHQUNoQixJQUFLSSxJQUFJb0IsS0FBT0csY0FBZSxDQUMzQnZCLElBQUkyQixFQUFTSixjQUFjSCxHQUFLRCxjQUFnQixHQUFLQSxZQUNqRFMsRUFBYWhDLEVBQUtpQyxNQUFNLEtBQ3hCQyxPQUFBQSxJQUFTUCxjQUFjSCxHQUFXVyxLQUNsQ0MsRUFBU1QsY0FBY1UsZUFBZUwsRUFBVyxLQUFPTCxjQUFjSyxFQUFXLElBQUlLLGVBQWVMLEVBQVcsSUFDbkgsR0FBSVIsSUFBUXhCLElBQVMrQixFQUNqQixPQUFPSixjQUFjSCxHQUVwQixHQUFJTyxHQUFVUCxJQUFReEIsR0FBUWtDLEVBQy9CLE9BQU9QLGNBQWNILEdBRXBCLEdBQUlPLEdBQVVQLElBQVF4QixJQUFTa0MsRUFDaEMsT0FBT1AsY0FBY0gsR0FBV1csS0FFL0IsR0FBSUMsRUFDTCxPQUFPVCxjQUFjSyxFQUFXLElBQUlBLEVBQVcsS0FLM0QsTUFBTU0sUUFBVVIsV0FDaEJTLE9BQU9ELFFBQVVSIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRnMxIHtcclxuICAgIHJlYWRGaWxlU3luYyhuYW1lLCBmdW5jPShzdGF0LCByZXMpID0+IHt9KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbGh0dHAub3BlbihcIkdFVFwiLCBuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgeG1saHR0cC5zZW5kKCk7XHJcbiAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzPT0yMDAgfHwgeG1saHR0cC5zdGF0dXM9PTMwNCkge1xyXG4gICAgICAgICAgcmVzdWx0ID0geG1saHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICBmdW5jKG51bGwsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwcm9taXNlcyA9IHtcclxuICAgICAgICByZWFkRmlsZShuYW1lLCBmdW5jPShzdGF0LCByZXMpID0+IHt9KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ2dldCcsIG5hbWUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHhoci5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IDIwMCB8fCBzdGF0dXMgPT0gMzA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMobnVsbCwgeGhyLnJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jKHt0ZXh0OiB4aHIuc3RhdHVzVGV4dCwgY29kZTogeGhyLnN0YXR1c30sIG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChzdGF0dXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnByb21pc2VzKSB7XHJcbiAgICAgICAgICAgIGV2YWwoJ3RoaXMuJyArIGtleSArICcgPSB0aGlzLnByb21pc2VzW1wiJyArIGtleSArICdcIl07Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gaWYgd2Ugd2FudCBtb2R1bGVzIHRvIGFjdHVhbGx5IHdvcmssIHdlJ2xsIGhhdmUgdG8gaW1wb3J0IHRoZW0gaGVyZS5cclxuXHJcbmxldCByZXF1aXJlcm91dGVzID0ge1xyXG4gICAgXCJAbm9kZVwiOiB7XHJcbiAgICAgICAgXCJmc1wiOiBuZXcgRnMxKClcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHdlYnJlcXVpcmUobmFtZSkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHJlcXVpcmVyb3V0ZXMpIHtcclxuICAgICAgICBsZXQgaXNqc29uID0gcmVxdWlyZXJvdXRlc1trZXldLmNvbnN0cnVjdG9yID09PSAoe30pLmNvbnN0cnVjdG9yXHJcbiAgICAgICAgbGV0IHNsYXNoc3BsaXQgPSBuYW1lLnNwbGl0KCcvJylcclxuICAgICAgICBsZXQgbm9tYWluID0gcmVxdWlyZXJvdXRlc1trZXldWydtYWluJ10gPT09IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgaGFzZGF0ID0gcmVxdWlyZXJvdXRlcy5oYXNPd25Qcm9wZXJ0eShzbGFzaHNwbGl0WzBdKSAmJiByZXF1aXJlcm91dGVzW3NsYXNoc3BsaXRbMF1dLmhhc093blByb3BlcnR5KHNsYXNoc3BsaXRbMV0pO1xyXG4gICAgICAgIGlmIChrZXkgPT09IG5hbWUgJiYgIWlzanNvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZXJvdXRlc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc2pzb24gJiYga2V5ID09PSBuYW1lICYmIG5vbWFpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZXJvdXRlc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc2pzb24gJiYga2V5ID09PSBuYW1lICYmICFub21haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVyb3V0ZXNba2V5XVsnbWFpbiddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChoYXNkYXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVyb3V0ZXNbc2xhc2hzcGxpdFswXV1bc2xhc2hzcGxpdFsxXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZXF1aXJlID0gd2VicmVxdWlyZTtcclxud2luZG93LnJlcXVpcmUgPSB3ZWJyZXF1aXJlOyJdfQ==
