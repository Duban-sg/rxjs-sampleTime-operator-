import { sampleTime } from "rxjs/operators";
import { fullObserver, setUpDOM, stream } from "./utils";

const operator = "sampleTime";

setUpDOM(operator);

const a = stream("a", 250, 6);

// EXPLANATION
// a-0 goes into the first interval,,
// a-1 goes into the first interval and overrides a-0
// a-2 goes into the second interval,
// but discarded because the source observable completes before the interval ends
const pipedA = a.pipe(sampleTime(500));


pipedA.subscribe(fullObserver(operator));
