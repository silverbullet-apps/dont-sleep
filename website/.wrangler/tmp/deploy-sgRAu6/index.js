var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e4) => e4.name !== markName) : this._entries.filter((e4) => e4.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e4) => e4.name !== measureName) : this._entries.filter((e4) => e4.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e4) => e4.entryType !== "resource" || e4.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e4) => e4.name === name && (!type || e4.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e4) => e4.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn2) {
        return fn2;
      }
      runInAsyncScope(fn2, thisArg, ...args) {
        return fn2.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x3, y3, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/crypto/web.mjs
var subtle;
var init_web = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/crypto/web.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    subtle = globalThis.crypto?.subtle;
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/crypto/node.mjs
var webcrypto, createCipher, createDecipher, pseudoRandomBytes, Cipher, Decipher;
var init_node = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/crypto/node.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    webcrypto = new Proxy(globalThis.crypto, { get(_3, key) {
      if (key === "CryptoKey") {
        return globalThis.CryptoKey;
      }
      if (typeof globalThis.crypto[key] === "function") {
        return globalThis.crypto[key].bind(globalThis.crypto);
      }
      return globalThis.crypto[key];
    } });
    createCipher = /* @__PURE__ */ notImplemented("crypto.createCipher");
    createDecipher = /* @__PURE__ */ notImplemented("crypto.createDecipher");
    pseudoRandomBytes = /* @__PURE__ */ notImplemented("crypto.pseudoRandomBytes");
    Cipher = /* @__PURE__ */ notImplementedClass("crypto.Cipher");
    Decipher = /* @__PURE__ */ notImplementedClass("crypto.Decipher");
  }
});

// node_modules/wrangler/node_modules/unenv/dist/runtime/node/crypto.mjs
var init_crypto = __esm({
  "node_modules/wrangler/node_modules/unenv/dist/runtime/node/crypto.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_web();
    init_node();
  }
});

// node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/crypto.mjs
var workerdCrypto, Certificate, checkPrime, checkPrimeSync, constants, Cipheriv, createCipheriv, createDecipheriv, createDiffieHellman, createDiffieHellmanGroup, createECDH, createHash, createHmac, createPrivateKey, createPublicKey, createSecretKey, createSign, createVerify, Decipheriv, diffieHellman, DiffieHellman, DiffieHellmanGroup, ECDH, fips, generateKey, generateKeyPair, generateKeyPairSync, generateKeySync, generatePrime, generatePrimeSync, getCipherInfo, getCiphers, getCurves, getDiffieHellman, getFips, getHashes, getRandomValues, hash, Hash, hkdf, hkdfSync, Hmac, KeyObject, pbkdf2, pbkdf2Sync, privateDecrypt, privateEncrypt, publicDecrypt, publicEncrypt, randomBytes, randomFill, randomFillSync, randomInt, randomUUID, scrypt, scryptSync, secureHeapUsed, setEngine, setFips, sign, Sign, subtle2, timingSafeEqual, verify, Verify, X509Certificate, webcrypto2, crypto_default;
var init_crypto2 = __esm({
  "node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/crypto.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_crypto();
    workerdCrypto = process.getBuiltinModule("node:crypto");
    ({
      Certificate,
      checkPrime,
      checkPrimeSync,
      constants,
      Cipheriv: (
        // @ts-expect-error
        Cipheriv
      ),
      createCipheriv,
      createDecipheriv,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createECDH,
      createHash,
      createHmac,
      createPrivateKey,
      createPublicKey,
      createSecretKey,
      createSign,
      createVerify,
      Decipheriv: (
        // @ts-expect-error
        Decipheriv
      ),
      diffieHellman,
      DiffieHellman,
      DiffieHellmanGroup,
      ECDH,
      fips,
      generateKey,
      generateKeyPair,
      generateKeyPairSync,
      generateKeySync,
      generatePrime,
      generatePrimeSync,
      getCipherInfo,
      getCiphers,
      getCurves,
      getDiffieHellman,
      getFips,
      getHashes,
      getRandomValues,
      hash,
      Hash,
      hkdf,
      hkdfSync,
      Hmac,
      KeyObject,
      pbkdf2,
      pbkdf2Sync,
      privateDecrypt,
      privateEncrypt,
      publicDecrypt,
      publicEncrypt,
      randomBytes,
      randomFill,
      randomFillSync,
      randomInt,
      randomUUID,
      scrypt,
      scryptSync,
      secureHeapUsed,
      setEngine,
      setFips,
      sign,
      Sign,
      subtle: subtle2,
      timingSafeEqual,
      verify,
      Verify,
      X509Certificate
    } = workerdCrypto);
    webcrypto2 = {
      // @ts-expect-error
      CryptoKey: webcrypto.CryptoKey,
      getRandomValues,
      randomUUID,
      subtle: subtle2
    };
    crypto_default = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      Certificate,
      Cipher,
      Cipheriv,
      Decipher,
      Decipheriv,
      ECDH,
      Sign,
      Verify,
      X509Certificate,
      constants,
      createCipheriv,
      createDecipheriv,
      createECDH,
      createSign,
      createVerify,
      diffieHellman,
      getCipherInfo,
      hash,
      privateDecrypt,
      privateEncrypt,
      publicDecrypt,
      publicEncrypt,
      scrypt,
      scryptSync,
      sign,
      verify,
      // default-only export from unenv
      // @ts-expect-error unenv has unknown type
      createCipher,
      // @ts-expect-error unenv has unknown type
      createDecipher,
      // @ts-expect-error unenv has unknown type
      pseudoRandomBytes,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      DiffieHellman,
      DiffieHellmanGroup,
      Hash,
      Hmac,
      KeyObject,
      checkPrime,
      checkPrimeSync,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createHash,
      createHmac,
      createPrivateKey,
      createPublicKey,
      createSecretKey,
      generateKey,
      generateKeyPair,
      generateKeyPairSync,
      generateKeySync,
      generatePrime,
      generatePrimeSync,
      getCiphers,
      getCurves,
      getDiffieHellman,
      getFips,
      getHashes,
      getRandomValues,
      hkdf,
      hkdfSync,
      pbkdf2,
      pbkdf2Sync,
      randomBytes,
      randomFill,
      randomFillSync,
      randomInt,
      randomUUID,
      secureHeapUsed,
      setEngine,
      setFips,
      subtle: subtle2,
      timingSafeEqual,
      // default-only export from workerd
      fips,
      // special-cased deep merged symbols
      webcrypto: webcrypto2
    };
  }
});

// node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/async_hooks.mjs
var workerdAsyncHooks, AsyncLocalStorage2, AsyncResource;
var init_async_hooks = __esm({
  "node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/async_hooks.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    workerdAsyncHooks = process.getBuiltinModule("node:async_hooks");
    ({ AsyncLocalStorage: AsyncLocalStorage2, AsyncResource } = workerdAsyncHooks);
  }
});

// .output/server/chunks/_/fs.mjs
var fs_exports = {};
__export(fs_exports, {
  F_OK: () => u,
  R_OK: () => h,
  W_OK: () => W,
  X_OK: () => X,
  constants: () => A,
  promises: () => w
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
var e, s, O, I, t, r, S, o, F, i, R, f, n, E, N, l, m, a, d, C, p, L, c, T, U, D, V, K, P, Y, k, u, h, W, X, A, w;
var init_fs = __esm({
  ".output/server/chunks/_/fs.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_crypto2();
    e = notImplemented2("fs.access");
    s = notImplemented2("fs.copyFile");
    O = notImplemented2("fs.cp");
    I = notImplemented2("fs.open");
    t = notImplemented2("fs.opendir");
    r = notImplemented2("fs.rename");
    S = notImplemented2("fs.truncate");
    o = notImplemented2("fs.rm");
    F = notImplemented2("fs.rmdir");
    i = notImplemented2("fs.mkdir");
    R = notImplemented2("fs.readdir");
    f = notImplemented2("fs.readlink");
    n = notImplemented2("fs.symlink");
    E = notImplemented2("fs.lstat");
    N = notImplemented2("fs.stat");
    l = notImplemented2("fs.link");
    m = notImplemented2("fs.unlink");
    a = notImplemented2("fs.chmod");
    d = notImplemented2("fs.lchmod");
    C = notImplemented2("fs.lchown");
    p = notImplemented2("fs.chown");
    L = notImplemented2("fs.utimes");
    c = notImplemented2("fs.lutimes");
    T = notImplemented2("fs.realpath");
    U = notImplemented2("fs.mkdtemp");
    D = notImplemented2("fs.writeFile");
    V = notImplemented2("fs.appendFile");
    K = notImplemented2("fs.readFile");
    P = notImplemented2("fs.watch");
    Y = notImplemented2("fs.statfs");
    k = notImplemented2("fs.glob");
    u = 0;
    h = 4;
    W = 2;
    X = 1;
    A = Object.freeze(Object.defineProperty({ __proto__: null, COPYFILE_EXCL: 1, COPYFILE_FICLONE: 2, COPYFILE_FICLONE_FORCE: 4, EXTENSIONLESS_FORMAT_JAVASCRIPT: 0, EXTENSIONLESS_FORMAT_WASM: 1, F_OK: 0, O_APPEND: 1024, O_CREAT: 64, O_DIRECT: 16384, O_DIRECTORY: 65536, O_DSYNC: 4096, O_EXCL: 128, O_NOATIME: 262144, O_NOCTTY: 256, O_NOFOLLOW: 131072, O_NONBLOCK: 2048, O_RDONLY: 0, O_RDWR: 2, O_SYNC: 1052672, O_TRUNC: 512, O_WRONLY: 1, R_OK: 4, S_IFBLK: 24576, S_IFCHR: 8192, S_IFDIR: 16384, S_IFIFO: 4096, S_IFLNK: 40960, S_IFMT: 61440, S_IFREG: 32768, S_IFSOCK: 49152, S_IRGRP: 32, S_IROTH: 4, S_IRUSR: 256, S_IRWXG: 56, S_IRWXO: 7, S_IRWXU: 448, S_IWGRP: 16, S_IWOTH: 2, S_IWUSR: 128, S_IXGRP: 8, S_IXOTH: 1, S_IXUSR: 64, UV_DIRENT_BLOCK: 7, UV_DIRENT_CHAR: 6, UV_DIRENT_DIR: 2, UV_DIRENT_FIFO: 4, UV_DIRENT_FILE: 1, UV_DIRENT_LINK: 3, UV_DIRENT_SOCKET: 5, UV_DIRENT_UNKNOWN: 0, UV_FS_COPYFILE_EXCL: 1, UV_FS_COPYFILE_FICLONE: 2, UV_FS_COPYFILE_FICLONE_FORCE: 4, UV_FS_O_FILEMAP: 0, UV_FS_SYMLINK_DIR: 1, UV_FS_SYMLINK_JUNCTION: 2, W_OK: 2, X_OK: 1 }, Symbol.toStringTag, { value: "Module" }));
    w = { constants: A, access: e, appendFile: V, chmod: a, chown: p, copyFile: s, cp: O, glob: k, lchmod: d, lchown: C, link: l, lstat: E, lutimes: c, mkdir: i, mkdtemp: U, open: I, opendir: t, readFile: K, readdir: R, readlink: f, realpath: T, rename: r, rm: o, rmdir: F, stat: N, statfs: Y, symlink: n, truncate: S, unlink: m, utimes: L, watch: P, writeFile: D };
  }
});

// .output/server/chunks/_/_tanstack-start-manifest_v-B_OhsZmb.mjs
var tanstack_start_manifest_v_B_OhsZmb_exports = {};
__export(tanstack_start_manifest_v_B_OhsZmb_exports, {
  tsrStartManifest: () => tsrStartManifest
});
var tsrStartManifest;
var init_tanstack_start_manifest_v_B_OhsZmb = __esm({
  ".output/server/chunks/_/_tanstack-start-manifest_v-B_OhsZmb.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    tsrStartManifest = /* @__PURE__ */ __name(() => ({ routes: { __root__: { filePath: "/Users/denispovarov/Projects/DontSleep/website/src/routes/__root.tsx", children: ["/", "/stats"], preloads: ["/assets/main-CNZ_GIPH.js"], assets: [] }, "/": { filePath: "/Users/denispovarov/Projects/DontSleep/website/src/routes/index.tsx", assets: [], preloads: ["/assets/index-CiJnjDUS.js", "/assets/index-CQwExfST.js"] }, "/stats": { filePath: "/Users/denispovarov/Projects/DontSleep/website/src/routes/stats.tsx", assets: [], preloads: ["/assets/stats-C9cSQAnJ.js", "/assets/index-CQwExfST.js"] } }, clientEntry: "/assets/main-CNZ_GIPH.js" }), "tsrStartManifest");
  }
});

// .output/server/chunks/_/bindings-DuVipP_j.mjs
function getBindings() {
  return _.env;
}
var createServerRpc;
var init_bindings_DuVipP_j = __esm({
  ".output/server/chunks/_/bindings-DuVipP_j.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_ssr();
    createServerRpc = /* @__PURE__ */ __name((n2, s5, t3) => {
      invariant(t3);
      const i5 = `/${o5 = s5, o5.replace(/^\/|\/$/g, "")}/${n2}`;
      var o5;
      return Object.assign(t3, { url: i5, functionId: n2 });
    }, "createServerRpc");
    __name(getBindings, "getBindings");
  }
});

// .output/server/chunks/_/api.download-DquYX4II.mjs
var api_download_DquYX4II_exports = {};
__export(api_download_DquYX4II_exports, {
  trackDownload_createServerFn_handler: () => s2
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var a2, s2, d2;
var init_api_download_DquYX4II = __esm({
  ".output/server/chunks/_/api.download-DquYX4II.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_bindings_DuVipP_j();
    init_ssr();
    init_crypto2();
    init_async_hooks();
    a2 = "https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.2/DontSleep-Installer.dmg";
    s2 = createServerRpc("src_routes_api_download_ts--trackDownload_createServerFn_handler", "/_serverFn", (e4, r4) => d2.__executeServer(e4, r4));
    d2 = createServerFn({ method: "POST" }).validator((e4) => e4).handler(s2, async ({ data: r4 }) => {
      try {
        const s5 = getBindings();
        if (!s5.DB) return console.error("D1 database not available"), { success: false, error: "Database not available", downloadUrl: a2 };
        let d6 = "Unknown", i5 = "0.0.0.0", l5 = "", c4 = "";
        try {
          const e4 = $i();
          d6 = e4.headers.get("User-Agent") || "Unknown", i5 = e4.headers.get("CF-Connecting-IP") || "0.0.0.0", l5 = e4.headers.get("CF-IPCountry") || "", c4 = e4.headers.get("CF-IPCity") || "";
        } catch (e4) {
          console.warn("Could not access request context:", e4);
        }
        const p4 = r4.referrer || "", u3 = (o5 = i5, wo("sha256").update(o5 + "dontsleep-salt").digest("hex").substring(0, 16)), m4 = wo("sha256").update(Date.now() + Math.random().toString()).digest("hex").substring(0, 16);
        await s5.DB.prepare("\n        INSERT INTO downloads (ip_hash, user_agent, country, city, version, referrer, session_id)\n        VALUES (?, ?, ?, ?, ?, ?, ?)\n      ").bind(u3, d6, l5, c4, r4.version || "0.0.2", p4, m4).run();
        const w4 = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        return await s5.DB.prepare("\n        SELECT * FROM daily_stats WHERE date = ?\n      ").bind(w4).first() ? await s5.DB.prepare("\n          UPDATE daily_stats \n          SET total_downloads = total_downloads + 1,\n              updated_at = unixepoch()\n          WHERE date = ?\n        ").bind(w4).run() : await s5.DB.prepare("\n          INSERT INTO daily_stats (date, total_downloads, unique_ips)\n          VALUES (?, 1, 1)\n        ").bind(w4).run(), { success: true, downloadUrl: a2, sessionId: m4 };
      } catch (e4) {
        return console.error("Download tracking error:", e4), { success: false, error: "Tracking failed but download available", downloadUrl: a2 };
      }
      var o5;
    });
  }
});

// .output/server/chunks/_/api.stats-Cn6psl03.mjs
var api_stats_Cn6psl03_exports = {};
__export(api_stats_Cn6psl03_exports, {
  getStats_createServerFn_handler: () => e2
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var e2, a3;
var init_api_stats_Cn6psl03 = __esm({
  ".output/server/chunks/_/api.stats-Cn6psl03.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_bindings_DuVipP_j();
    init_ssr();
    init_nitro();
    init_crypto2();
    init_async_hooks();
    e2 = createServerRpc("src_routes_api_stats_ts--getStats_createServerFn_handler", "/_serverFn", (t3, o5) => a3.__executeServer(t3, o5));
    a3 = createServerFn({ method: "GET" }).validator(() => ({})).handler(e2, async () => {
      var t3, n2, e4;
      try {
        const a6 = getBindings();
        if (!a6.DB) return console.error("D1 database not available"), { success: false, error: "Database not available" };
        const r4 = await a6.DB.prepare("\n        SELECT COUNT(*) as total FROM downloads\n      ").first(), s5 = (null == r4 ? void 0 : r4.total) || 0, i5 = (/* @__PURE__ */ new Date()).toISOString().split("T")[0], d6 = await a6.DB.prepare("\n        SELECT COUNT(*) as today FROM downloads \n        WHERE date(timestamp, 'unixepoch') = ?\n      ").bind(i5).first(), l5 = (null == d6 ? void 0 : d6.today) || 0, u3 = await a6.DB.prepare("\n        SELECT COUNT(DISTINCT ip_hash) as unique_count FROM downloads\n      ").first(), c4 = (null == u3 ? void 0 : u3.unique_count) || 0, p4 = await a6.DB.prepare("\n        SELECT country, COUNT(*) as count \n        FROM downloads \n        WHERE country != '' \n        GROUP BY country \n        ORDER BY count DESC \n        LIMIT 10\n      ").all(), m4 = (null == (t3 = null == p4 ? void 0 : p4.results) ? void 0 : t3.map((t4) => ({ country: t4.country, count: t4.count }))) || [], E4 = await a6.DB.prepare("\n        SELECT timestamp, country, city, user_agent \n        FROM downloads \n        ORDER BY timestamp DESC \n        LIMIT 20\n      ").all(), w4 = (null == (n2 = null == E4 ? void 0 : E4.results) ? void 0 : n2.map((t4) => ({ timestamp: t4.timestamp, country: t4.country, city: t4.city, userAgent: t4.user_agent }))) || [], D4 = await a6.DB.prepare("\n        SELECT date(timestamp, 'unixepoch') as date, COUNT(*) as downloads \n        FROM downloads \n        WHERE timestamp >= unixepoch() - (30 * 24 * 60 * 60)\n        GROUP BY date(timestamp, 'unixepoch')\n        ORDER BY date ASC\n      ").all();
        return { success: true, totalDownloads: s5, todayDownloads: l5, uniqueDownloads: c4, topCountries: m4, recentDownloads: w4, dailyStats: (null == (e4 = null == D4 ? void 0 : D4.results) ? void 0 : e4.map((t4) => ({ date: t4.date, downloads: t4.downloads }))) || [] };
      } catch (t4) {
        return console.error("Stats fetch error:", t4), { success: false, error: `Failed to fetch statistics: ${t4 instanceof Error ? t4.message : "Unknown error"}` };
      }
    });
  }
});

// .output/server/chunks/_/_tanstack-start-server-fn-manifest_v-DSh1bMQ4.mjs
var tanstack_start_server_fn_manifest_v_DSh1bMQ4_exports = {};
__export(tanstack_start_server_fn_manifest_v_DSh1bMQ4_exports, {
  default: () => e3
});
var e3;
var init_tanstack_start_server_fn_manifest_v_DSh1bMQ4 = __esm({
  ".output/server/chunks/_/_tanstack-start-server-fn-manifest_v-DSh1bMQ4.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    e3 = { "src_routes_api_download_ts--trackDownload_createServerFn_handler": { functionName: "trackDownload_createServerFn_handler", importer: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_api_download_DquYX4II(), api_download_DquYX4II_exports)), "importer") }, "src_routes_api_stats_ts--getStats_createServerFn_handler": { functionName: "getStats_createServerFn_handler", importer: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_api_stats_Cn6psl03(), api_stats_Cn6psl03_exports)), "importer") } };
  }
});

// .output/server/chunks/_/stats-BdDa5Qir.mjs
var stats_BdDa5Qir_exports = {};
__export(stats_BdDa5Qir_exports, {
  component: () => SplitComponent
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var l2, r2, SplitComponent;
var init_stats_BdDa5Qir = __esm({
  ".output/server/chunks/_/stats-BdDa5Qir.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_bindings_DuVipP_j();
    init_nitro();
    init_crypto2();
    init_async_hooks();
    l2 = createServerRpc("src_routes_api_stats_ts--getStats_createServerFn_handler", "/_serverFn", (e4, s5) => r2.__executeServer(e4, s5));
    r2 = createServerFn({ method: "GET" }).validator(() => ({})).handler(l2, async () => {
      var e4, s5, t3;
      try {
        const a6 = getBindings();
        if (!a6.DB) return console.error("D1 database not available"), { success: false, error: "Database not available" };
        const l5 = await a6.DB.prepare("\n        SELECT COUNT(*) as total FROM downloads\n      ").first(), r4 = (null == l5 ? void 0 : l5.total) || 0, o5 = (/* @__PURE__ */ new Date()).toISOString().split("T")[0], i5 = await a6.DB.prepare("\n        SELECT COUNT(*) as today FROM downloads \n        WHERE date(timestamp, 'unixepoch') = ?\n      ").bind(o5).first(), d6 = (null == i5 ? void 0 : i5.today) || 0, c4 = await a6.DB.prepare("\n        SELECT COUNT(DISTINCT ip_hash) as unique_count FROM downloads\n      ").first(), m4 = (null == c4 ? void 0 : c4.unique_count) || 0, x3 = await a6.DB.prepare("\n        SELECT country, COUNT(*) as count \n        FROM downloads \n        WHERE country != '' \n        GROUP BY country \n        ORDER BY count DESC \n        LIMIT 10\n      ").all(), u3 = (null == (e4 = null == x3 ? void 0 : x3.results) ? void 0 : e4.map((e5) => ({ country: e5.country, count: e5.count }))) || [], h4 = await a6.DB.prepare("\n        SELECT timestamp, country, city, user_agent \n        FROM downloads \n        ORDER BY timestamp DESC \n        LIMIT 20\n      ").all(), p4 = (null == (s5 = null == h4 ? void 0 : h4.results) ? void 0 : s5.map((e5) => ({ timestamp: e5.timestamp, country: e5.country, city: e5.city, userAgent: e5.user_agent }))) || [], v3 = await a6.DB.prepare("\n        SELECT date(timestamp, 'unixepoch') as date, COUNT(*) as downloads \n        FROM downloads \n        WHERE timestamp >= unixepoch() - (30 * 24 * 60 * 60)\n        GROUP BY date(timestamp, 'unixepoch')\n        ORDER BY date ASC\n      ").all();
        return { success: true, totalDownloads: r4, todayDownloads: d6, uniqueDownloads: m4, topCountries: u3, recentDownloads: p4, dailyStats: (null == (t3 = null == v3 ? void 0 : v3.results) ? void 0 : t3.map((e5) => ({ date: e5.date, downloads: e5.downloads }))) || [] };
      } catch (e5) {
        return console.error("Stats fetch error:", e5), { success: false, error: `Failed to fetch statistics: ${e5 instanceof Error ? e5.message : "Unknown error"}` };
      }
    });
    SplitComponent = /* @__PURE__ */ __name(function() {
      var s5, a6, n2, l5;
      const [o5, i5] = Ce.useState(null), [d6, c4] = Ce.useState(true), [m4, x3] = Ce.useState(null);
      Ce.useEffect(() => {
        fetchStats();
      }, []);
      const fetchStats = /* @__PURE__ */ __name(async () => {
        try {
          c4(true);
          const e4 = await r2({ data: {} });
          if (!e4.success || !("totalDownloads" in e4)) throw new Error("error" in e4 ? e4.error : "Failed to fetch stats");
          i5(e4);
        } catch (e4) {
          x3(e4 instanceof Error ? e4.message : "Failed to load stats");
        } finally {
          c4(false);
        }
      }, "fetchStats");
      return d6 ? p2.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: p2.jsxs("div", { className: "text-center", children: [p2.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" }), p2.jsx("p", { className: "text-gray-600", children: "Loading download statistics..." })] }) }) : m4 ? p2.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: p2.jsxs("div", { className: "text-center", children: [p2.jsx("div", { className: "text-red-500 text-xl mb-4", children: "\u26A0\uFE0F Error" }), p2.jsx("p", { className: "text-gray-600", children: m4 }), p2.jsx("button", { onClick: fetchStats, className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600", children: "Try Again" })] }) }) : p2.jsx("div", { className: "min-h-screen bg-gray-50 py-8", children: p2.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [p2.jsxs("div", { className: "mb-8", children: [p2.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "DontSleep Download Statistics" }), p2.jsx("p", { className: "text-gray-600", children: "Anonymous download tracking and analytics" })] }), p2.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [p2.jsx("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: p2.jsxs("div", { className: "flex items-center", children: [p2.jsx("div", { className: "p-2 bg-blue-100 rounded-lg", children: p2.jsx("svg", { className: "w-6 h-6 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" }) }) }), p2.jsxs("div", { className: "ml-4", children: [p2.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Downloads" }), p2.jsx("p", { className: "text-2xl font-bold text-gray-900", children: (null == o5 ? void 0 : o5.totalDownloads) || 0 })] })] }) }), p2.jsx("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: p2.jsxs("div", { className: "flex items-center", children: [p2.jsx("div", { className: "p-2 bg-green-100 rounded-lg", children: p2.jsx("svg", { className: "w-6 h-6 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) }) }), p2.jsxs("div", { className: "ml-4", children: [p2.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Today" }), p2.jsx("p", { className: "text-2xl font-bold text-gray-900", children: (null == o5 ? void 0 : o5.todayDownloads) || 0 })] })] }) }), p2.jsx("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: p2.jsxs("div", { className: "flex items-center", children: [p2.jsx("div", { className: "p-2 bg-purple-100 rounded-lg", children: p2.jsx("svg", { className: "w-6 h-6 text-purple-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }) }), p2.jsxs("div", { className: "ml-4", children: [p2.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Unique IPs" }), p2.jsx("p", { className: "text-2xl font-bold text-gray-900", children: (null == o5 ? void 0 : o5.uniqueDownloads) || 0 })] })] }) }), p2.jsx("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: p2.jsxs("div", { className: "flex items-center", children: [p2.jsx("div", { className: "p-2 bg-orange-100 rounded-lg", children: p2.jsx("svg", { className: "w-6 h-6 text-orange-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) }) }), p2.jsxs("div", { className: "ml-4", children: [p2.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Countries" }), p2.jsx("p", { className: "text-2xl font-bold text-gray-900", children: (null == (s5 = null == o5 ? void 0 : o5.topCountries) ? void 0 : s5.length) || 0 })] })] }) })] }), p2.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [p2.jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: [p2.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Top Countries" }), p2.jsx("div", { className: "space-y-3", children: (null == (a6 = null == o5 ? void 0 : o5.topCountries) ? void 0 : a6.slice(0, 10).map((e4, s6) => p2.jsxs("div", { className: "flex items-center justify-between", children: [p2.jsxs("div", { className: "flex items-center", children: [p2.jsx("span", { className: "text-2xl mr-3", children: "US" === e4.country ? "\u{1F1FA}\u{1F1F8}" : "GB" === e4.country ? "\u{1F1EC}\u{1F1E7}" : "DE" === e4.country ? "\u{1F1E9}\u{1F1EA}" : "FR" === e4.country ? "\u{1F1EB}\u{1F1F7}" : "CA" === e4.country ? "\u{1F1E8}\u{1F1E6}" : "AU" === e4.country ? "\u{1F1E6}\u{1F1FA}" : "JP" === e4.country ? "\u{1F1EF}\u{1F1F5}" : "\u{1F30D}" }), p2.jsx("span", { className: "font-medium", children: e4.country || "Unknown" })] }), p2.jsxs("span", { className: "text-gray-600", children: [e4.count, " downloads"] })] }, e4.country))) || p2.jsx("p", { className: "text-gray-500 text-center py-4", children: "No data available" }) })] }), p2.jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: [p2.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Downloads" }), p2.jsx("div", { className: "space-y-3 max-h-64 overflow-y-auto", children: (null == (n2 = null == o5 ? void 0 : o5.recentDownloads) ? void 0 : n2.slice(0, 10).map((e4, s6) => {
        var a7;
        return p2.jsxs("div", { className: "flex items-center justify-between text-sm", children: [p2.jsxs("div", { children: [p2.jsxs("div", { className: "font-medium text-gray-900", children: [e4.country, " ", e4.city && `\u2022 ${e4.city}`] }), p2.jsx("div", { className: "text-gray-500 text-xs", children: new Date(1e3 * e4.timestamp).toLocaleString() })] }), p2.jsx("div", { className: "text-xs text-gray-400 max-w-32 truncate", children: (null == (a7 = e4.userAgent) ? void 0 : a7.split(" ")[0]) || "Unknown" })] }, s6);
      })) || p2.jsx("p", { className: "text-gray-500 text-center py-4", children: "No recent downloads" }) })] })] }), p2.jsxs("div", { className: "mt-8 bg-white rounded-lg p-6 shadow-sm", children: [p2.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Daily Downloads (Last 30 Days)" }), p2.jsx("div", { className: "h-64 flex items-end space-x-2", children: (null == (l5 = null == o5 ? void 0 : o5.dailyStats) ? void 0 : l5.slice(-30).map((e4, s6) => {
        var a7;
        return p2.jsxs("div", { className: "flex-1 flex flex-col items-center", children: [p2.jsx("div", { className: "bg-blue-500 rounded-t w-full min-h-1", style: { height: `${Math.max(4, e4.downloads / Math.max(...(null == (a7 = o5.dailyStats) ? void 0 : a7.map((e5) => e5.downloads)) || [1]) * 200)}px` }, title: `${e4.date}: ${e4.downloads} downloads` }), p2.jsx("div", { className: "text-xs text-gray-500 mt-1 transform -rotate-45 origin-left", children: new Date(e4.date).toLocaleDateString() })] }, e4.date);
      })) || p2.jsx("p", { className: "text-gray-500 text-center w-full py-8", children: "No daily data available" }) })] }), p2.jsxs("div", { className: "mt-8 text-center text-gray-500 text-sm", children: [p2.jsx("p", { children: "Statistics are collected anonymously. IP addresses are hashed for privacy." }), p2.jsx("button", { onClick: fetchStats, className: "mt-2 px-4 py-2 text-blue-600 hover:text-blue-800", children: "Refresh Data" })] })] }) });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/index-DinNccJ2.mjs
var index_DinNccJ2_exports = {};
__export(index_DinNccJ2_exports, {
  component: () => SplitComponent2
});
import "node:buffer";
import "node:stream";
import "node:stream/web";
import "cloudflare:workers";
import "node:events";
import "node:timers";
function DownloadButton({ className: t3, children: l5 }) {
  const [a6, r4] = Ce.useState(false);
  return p2.jsx("button", { onClick: /* @__PURE__ */ __name(async (e4) => {
    e4.preventDefault(), r4(true);
    try {
      const e5 = await async function(e6 = "0.0.2") {
        try {
          return (await d3({ data: { version: e6, referrer: document.referrer || "" } })).downloadUrl || "https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.2/DontSleep-Installer.dmg";
        } catch (e7) {
          return console.error("Download tracking failed:", e7), "https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.2/DontSleep-Installer.dmg";
        }
      }();
      window.open(e5, "_blank");
    } catch (e5) {
      console.error("Download failed:", e5), window.open("https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.2/DontSleep-Installer.dmg", "_blank");
    } finally {
      r4(false);
    }
  }, "onClick"), disabled: a6, className: t3, children: a6 ? "Starting Download..." : l5 });
}
var i2, o2, d3, SplitComponent2;
var init_index_DinNccJ2 = __esm({
  ".output/server/chunks/_/index-DinNccJ2.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_bindings_DuVipP_j();
    init_async_hooks();
    init_crypto2();
    i2 = "https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.2/DontSleep-Installer.dmg";
    o2 = createServerRpc("src_routes_api_download_ts--trackDownload_createServerFn_handler", "/_serverFn", (e4, s5) => d3.__executeServer(e4, s5));
    d3 = createServerFn({ method: "POST" }).validator((e4) => e4).handler(o2, async ({ data: e4 }) => {
      try {
        const t3 = getBindings();
        if (!t3.DB) return console.error("D1 database not available"), { success: false, error: "Database not available", downloadUrl: i2 };
        let r4 = "Unknown", o5 = "0.0.0.0", d6 = "", c4 = "";
        try {
          const e5 = $i();
          r4 = e5.headers.get("User-Agent") || "Unknown", o5 = e5.headers.get("CF-Connecting-IP") || "0.0.0.0", d6 = e5.headers.get("CF-IPCountry") || "", c4 = e5.headers.get("CF-IPCity") || "";
        } catch (e5) {
          console.warn("Could not access request context:", e5);
        }
        const x3 = e4.referrer || "", h4 = (s5 = o5, wo("sha256").update(s5 + "dontsleep-salt").digest("hex").substring(0, 16)), m4 = wo("sha256").update(Date.now() + Math.random().toString()).digest("hex").substring(0, 16);
        await t3.DB.prepare("\n        INSERT INTO downloads (ip_hash, user_agent, country, city, version, referrer, session_id)\n        VALUES (?, ?, ?, ?, ?, ?, ?)\n      ").bind(h4, r4, d6, c4, e4.version || "0.0.2", x3, m4).run();
        const p4 = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        return await t3.DB.prepare("\n        SELECT * FROM daily_stats WHERE date = ?\n      ").bind(p4).first() ? await t3.DB.prepare("\n          UPDATE daily_stats \n          SET total_downloads = total_downloads + 1,\n              updated_at = unixepoch()\n          WHERE date = ?\n        ").bind(p4).run() : await t3.DB.prepare("\n          INSERT INTO daily_stats (date, total_downloads, unique_ips)\n          VALUES (?, 1, 1)\n        ").bind(p4).run(), { success: true, downloadUrl: i2, sessionId: m4 };
      } catch (e5) {
        return console.error("Download tracking error:", e5), { success: false, error: "Tracking failed but download available", downloadUrl: i2 };
      }
      var s5;
    });
    __name(DownloadButton, "DownloadButton");
    SplitComponent2 = /* @__PURE__ */ __name(function() {
      return p2.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50", children: [p2.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16", children: [p2.jsxs("div", { className: "text-center", children: [p2.jsx("div", { className: "mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden", children: p2.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [p2.jsx("span", { className: "text-4xl moon-animation absolute", children: "\u{1F319}" }), p2.jsx("span", { className: "text-4xl sun-animation absolute", children: "\u2600\uFE0F" })] }) }), p2.jsx("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-6", children: p2.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "DontSleep" }) }), p2.jsx("p", { className: "text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto", children: "Keep your Mac awake when you need it. A simple, elegant menu bar app that prevents sleep." }), p2.jsx("div", { className: "flex justify-center mb-8", children: p2.jsx("div", { className: "bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold text-lg border border-green-200", children: "\u{1F4AF} 100% Free & Open Source" }) }), p2.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-8", children: [p2.jsx(DownloadButton, { className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed", children: "Download for macOS" }), p2.jsx("a", { href: "https://github.com/silverbullet-apps/dont-sleep", target: "_blank", rel: "noopener noreferrer", className: "text-gray-600 hover:text-gray-800 font-medium text-lg underline decoration-2 underline-offset-4", children: "View on GitHub" })] })] }), p2.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: [p2.jsxs("div", { className: "text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300", children: [p2.jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6", children: p2.jsx("svg", { className: "w-8 h-8 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) }) }), p2.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Always Green in Slack" }), p2.jsx("p", { className: "text-gray-600", children: "Stay active in Slack and Teams by preventing your Mac from sleeping. Never appear away when you're actually working." })] }), p2.jsxs("div", { className: "text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300", children: [p2.jsx("div", { className: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6", children: p2.jsx("svg", { className: "w-8 h-8 text-purple-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" }) }) }), p2.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Long Downloads" }), p2.jsx("p", { className: "text-gray-600", children: "Keep your Mac awake during large file transfers, backups, or system updates." })] }), p2.jsxs("div", { className: "text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300", children: [p2.jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6", children: p2.jsx("svg", { className: "w-8 h-8 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) }) }), p2.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Monitor Processes" }), p2.jsx("p", { className: "text-gray-600", children: "Keep an eye on system processes, builds, or any task that requires your attention." })] }), p2.jsxs("div", { className: "text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300", children: [p2.jsx("div", { className: "w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6", children: p2.jsx("svg", { className: "w-8 h-8 text-orange-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }) }) }), p2.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Vibe Coding" }), p2.jsx("p", { className: "text-gray-600", children: "Don't sleep while AI writes code for you. Perfect for long AI-assisted coding sessions." })] })] })] }), p2.jsx("div", { className: "bg-white py-20", children: p2.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [p2.jsxs("div", { className: "text-center mb-16", children: [p2.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Simple & Elegant" }), p2.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "DontSleep lives quietly in your menu bar, ready when you need it. One click to prevent sleep, another to allow it." })] }), p2.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [p2.jsxs("div", { className: "space-y-8", children: [p2.jsxs("div", { className: "flex items-start space-x-4", children: [p2.jsx("div", { className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0", children: p2.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }) }), p2.jsxs("div", { children: [p2.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Menu Bar Integration" }), p2.jsx("p", { className: "text-gray-600", children: "Lives quietly in your menu bar with clear visual indicators - moon when allowing sleep, sun when preventing it." })] })] }), p2.jsxs("div", { className: "flex items-start space-x-4", children: [p2.jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0", children: p2.jsx("svg", { className: "w-4 h-4 text-purple-600", fill: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }) }), p2.jsxs("div", { children: [p2.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Launch at Startup" }), p2.jsx("p", { className: "text-gray-600", children: "Optionally start with your Mac and begin with sleep prevention enabled for seamless workflow." })] })] }), p2.jsxs("div", { className: "flex items-start space-x-4", children: [p2.jsx("div", { className: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0", children: p2.jsx("svg", { className: "w-4 h-4 text-green-600", fill: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }) }), p2.jsxs("div", { children: [p2.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Lightweight & Fast" }), p2.jsx("p", { className: "text-gray-600", children: "Minimal resource usage with instant toggle. No bloat, no unnecessary features - just what you need." })] })] })] }), p2.jsx("div", { className: "text-center", children: p2.jsxs("div", { className: "inline-block bg-gray-900 rounded-2xl p-8 shadow-2xl", children: [p2.jsx("div", { className: "bg-gray-800 rounded-xl p-6 mb-6", children: p2.jsxs("div", { className: "flex items-center justify-center space-x-4", children: [p2.jsx("div", { className: "w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center", children: p2.jsx("svg", { className: "w-4 h-4 text-gray-900", fill: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" }) }) }), p2.jsx("span", { className: "text-white font-medium", children: "Sleep Prevention Active" })] }) }), p2.jsxs("div", { className: "space-y-3 text-sm text-gray-300", children: [p2.jsxs("div", { className: "flex justify-between", children: [p2.jsx("span", { children: "Prevent Sleep" }), p2.jsx("span", { className: "text-green-400", children: "\u2713 ON" })] }), p2.jsxs("div", { className: "flex justify-between", children: [p2.jsx("span", { children: "Launch at Startup" }), p2.jsx("span", { className: "text-green-400", children: "\u2713 ON" })] }), p2.jsxs("div", { className: "flex justify-between", children: [p2.jsx("span", { children: "Menu Bar Icon" }), p2.jsx("span", { className: "text-yellow-400", children: "\u2600\uFE0F Sun" })] })] })] }) })] })] }) }), p2.jsx("div", { id: "faq", className: "bg-gray-50 py-20", children: p2.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [p2.jsxs("div", { className: "text-center mb-16", children: [p2.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Frequently Asked Questions" }), p2.jsx("p", { className: "text-xl text-gray-600", children: "Everything you need to know about DontSleep" })] }), p2.jsxs("div", { className: "space-y-8", children: [p2.jsx("div", { className: "bg-white rounded-2xl p-8 shadow-lg", children: p2.jsxs("div", { className: "flex items-start space-x-4", children: [p2.jsx("div", { className: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0", children: p2.jsx("svg", { className: "w-4 h-4 text-green-600", fill: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }) }) }), p2.jsxs("div", { className: "flex-1", children: [p2.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "\u{1F510} Is DontSleep officially signed and notarized?" }), p2.jsxs("div", { className: "text-gray-600 space-y-4", children: [p2.jsxs("p", { children: [p2.jsx("strong", { children: "Yes!" }), " DontSleep is officially signed with an Apple Developer ID certificate and notarized by Apple. This means:"] }), p2.jsxs("ul", { className: "list-disc list-inside space-y-2 ml-4", children: [p2.jsxs("li", { children: [p2.jsx("strong", { children: "No security warnings:" }), " macOS recognizes DontSleep as a trusted application from an identified developer"] }), p2.jsxs("li", { children: [p2.jsx("strong", { children: "Verified by Apple:" }), " The app has been scanned and approved by Apple's automated security systems"] }), p2.jsxs("li", { children: [p2.jsx("strong", { children: "Safe to install:" }), " You can download and run DontSleep immediately without any workarounds"] })] }), p2.jsx("p", { className: "text-sm text-gray-500 mt-4", children: "DontSleep is 100% open source, so you can always review the code on GitHub to verify what it does." })] })] })] }) }), p2.jsx("div", { className: "bg-white rounded-2xl p-8 shadow-lg", children: p2.jsxs("div", { className: "flex items-start space-x-4", children: [p2.jsx("div", { className: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0", children: p2.jsx("svg", { className: "w-4 h-4 text-green-600", fill: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }) }), p2.jsxs("div", { className: "flex-1", children: [p2.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "\u{1F4B0} Is DontSleep really free?" }), p2.jsxs("div", { className: "text-gray-600 space-y-3", children: [p2.jsxs("p", { children: [p2.jsx("strong", { children: "Yes, 100% free forever!" }), " DontSleep is open source software with no hidden costs, subscriptions, or premium features. We believe essential Mac utilities should be free for everyone."] }), p2.jsx("p", { children: "The app is officially signed and notarized by Apple, giving you peace of mind while keeping it completely free for users like you." })] })] })] }) }), p2.jsx("div", { className: "bg-white rounded-2xl p-8 shadow-lg", children: p2.jsxs("div", { className: "flex items-start space-x-4", children: [p2.jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0", children: p2.jsx("svg", { className: "w-4 h-4 text-purple-600", fill: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }) }), p2.jsxs("div", { className: "flex-1", children: [p2.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "\u{1F319} How do I use DontSleep?" }), p2.jsxs("div", { className: "text-gray-600 space-y-3", children: [p2.jsx("p", { children: "After installation, look for the DontSleep icon in your menu bar (top-right of your screen). Click it to toggle sleep prevention on/off:" }), p2.jsxs("ul", { className: "list-disc list-inside space-y-1 ml-4", children: [p2.jsxs("li", { children: [p2.jsx("strong", { children: "\u{1F319} Moon icon:" }), " Sleep prevention is OFF (normal behavior)"] }), p2.jsxs("li", { children: [p2.jsx("strong", { children: "\u2600\uFE0F Sun icon:" }), " Sleep prevention is ON (Mac stays awake)"] })] }), p2.jsx("p", { children: 'You can also access settings by clicking the icon and selecting "Settings" to configure launch at startup and other preferences.' })] })] })] }) }), p2.jsx("div", { className: "bg-white rounded-2xl p-8 shadow-lg", children: p2.jsxs("div", { className: "flex items-start space-x-4", children: [p2.jsx("div", { className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0", children: p2.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 24 24", children: p2.jsx("path", { d: "M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 1z" }) }) }), p2.jsxs("div", { className: "flex-1", children: [p2.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "\u{1F512} Does DontSleep collect my data?" }), p2.jsxs("div", { className: "text-gray-600 space-y-3", children: [p2.jsxs("p", { children: [p2.jsx("strong", { children: "No, absolutely not!" }), " DontSleep is a local-only app that doesn't collect, store, or transmit any personal data. It only uses macOS system APIs to prevent sleep - nothing more, nothing less."] }), p2.jsx("p", { children: "Your privacy is important to us. The app works entirely offline and never connects to the internet." })] })] })] }) })] })] }) }), p2.jsx("div", { className: "bg-gray-900 text-white py-12", children: p2.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [p2.jsxs("div", { className: "mb-8", children: [p2.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Ready to keep your Mac awake?" }), p2.jsx("p", { className: "text-gray-400 mb-6", children: "Download DontSleep today and never worry about your Mac sleeping at the wrong time." }), p2.jsx(DownloadButton, { className: "bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed", children: "Download Now" })] }), p2.jsxs("div", { className: "border-t border-gray-800 pt-8", children: [p2.jsx("p", { className: "text-gray-400 mb-4", children: "\xA9 2025 DontSleep. Made with \u2764\uFE0F for Mac users." }), p2.jsx("div", { className: "bg-gray-800 rounded-lg p-4 mb-6", children: p2.jsxs("p", { className: "text-gray-300 text-sm", children: [p2.jsx("strong", { children: "\u{1F4AF} Always Free:" }), " DontSleep is 100% free and open source. Officially signed and notarized by Apple for your security and peace of mind."] }) }), p2.jsx("div", { className: "mt-4", children: p2.jsx("a", { href: "https://denpo.dev", target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-white transition-colors duration-200", children: "More apps by Denis" }) })] })] }) })] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/ssr.mjs
var ssr_exports = {};
__export(ssr_exports, {
  c: () => createServerFn,
  g: () => $i,
  i: () => invariant,
  j: () => p2,
  r: () => Ce,
  s: () => Hi
});
import { Buffer as o3 } from "node:buffer";
import { Readable as s3, PassThrough as a4 } from "node:stream";
import { ReadableStream as i3 } from "node:stream/web";
function getDefaultExportFromCjs(e4) {
  return e4 && e4.__esModule && Object.prototype.hasOwnProperty.call(e4, "default") ? e4.default : e4;
}
function jsxProd(e4, r4, n2) {
  var o5 = null;
  if (void 0 !== n2 && (o5 = "" + n2), void 0 !== r4.key && (o5 = "" + r4.key), "key" in r4) for (var s5 in n2 = {}, r4) "key" !== s5 && (n2[s5] = r4[s5]);
  else n2 = r4;
  return r4 = n2.ref, { $$typeof: c2, type: e4, key: o5, ref: void 0 !== r4 ? r4 : null, props: n2 };
}
function invariant(e4, r4) {
  if (!e4) throw new Error("Invariant failed");
}
function __flush_internals(e4) {
  const r4 = Array.from(e4).sort((e5, r5) => e5 instanceof Derived && e5.options.deps.includes(r5) ? 1 : r5 instanceof Derived && r5.options.deps.includes(e5) ? -1 : 0);
  for (const e5 of r4) {
    if (v.current.includes(e5)) continue;
    v.current.push(e5), e5.recompute();
    const r5 = b.get(e5);
    if (r5) for (const e6 of r5) {
      const r6 = y.get(e6);
      r6 && __flush_internals(r6);
    }
  }
}
function __notifyListeners(e4) {
  e4.listeners.forEach((r4) => r4({ prevVal: e4.prevState, currentVal: e4.state }));
}
function __notifyDerivedListeners(e4) {
  e4.listeners.forEach((r4) => r4({ prevVal: e4.prevState, currentVal: e4.state }));
}
function __flush(e4) {
  if (C2 > 0 && !R2.has(e4) && R2.set(e4, e4.prevState), P2.add(e4), !(C2 > 0 || k2)) try {
    for (k2 = true; P2.size > 0; ) {
      const e5 = Array.from(P2);
      P2.clear();
      for (const r4 of e5) {
        const e6 = R2.get(r4) ?? r4.prevState;
        r4.prevState = e6, __notifyListeners(r4);
      }
      for (const r4 of e5) {
        const e6 = y.get(r4);
        e6 && (v.current.push(r4), __flush_internals(e6));
      }
      for (const r4 of e5) {
        const e6 = y.get(r4);
        if (e6) for (const r5 of e6) __notifyDerivedListeners(r5);
      }
    }
  } finally {
    k2 = false, v.current = [], R2.clear();
  }
}
function batch(e4) {
  C2++;
  try {
    e4();
  } finally {
    if (C2--, 0 === C2) {
      const e5 = Array.from(P2)[0];
      e5 && __flush(e5);
    }
  }
}
function createHistory(e4) {
  let r4 = e4.getLocation();
  const n2 = /* @__PURE__ */ new Set(), notify = /* @__PURE__ */ __name((o5) => {
    r4 = e4.getLocation(), n2.forEach((e5) => e5({ location: r4, action: o5 }));
  }, "notify"), handleIndexChange = /* @__PURE__ */ __name((n3) => {
    e4.notifyOnIndexChange ?? 1 ? notify(n3) : r4 = e4.getLocation();
  }, "handleIndexChange"), tryNavigation = /* @__PURE__ */ __name(async ({ task: n3, navigateOpts: o5, ...s5 }) => {
    var a6, i5;
    if ((null == o5 ? void 0 : o5.ignoreBlocker) ?? false) return void n3();
    const l5 = (null == (a6 = e4.getBlockers) ? void 0 : a6.call(e4)) ?? [], u3 = "PUSH" === s5.type || "REPLACE" === s5.type;
    if ("undefined" != typeof document && l5.length && u3) for (const n4 of l5) {
      const o6 = parseHref(s5.path, s5.state);
      if (await n4.blockerFn({ currentLocation: r4, nextLocation: o6, action: s5.type })) return void (null == (i5 = e4.onBlocked) || i5.call(e4));
    }
    n3();
  }, "tryNavigation");
  return { get location() {
    return r4;
  }, get length() {
    return e4.getLength();
  }, subscribers: n2, subscribe: /* @__PURE__ */ __name((e5) => (n2.add(e5), () => {
    n2.delete(e5);
  }), "subscribe"), push: /* @__PURE__ */ __name((n3, o5, s5) => {
    const a6 = r4.state[T2];
    o5 = assignKeyAndIndex(a6 + 1, o5), tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e4.pushState(n3, o5), notify({ type: "PUSH" });
    }, "task"), navigateOpts: s5, type: "PUSH", path: n3, state: o5 });
  }, "push"), replace: /* @__PURE__ */ __name((n3, o5, s5) => {
    const a6 = r4.state[T2];
    o5 = assignKeyAndIndex(a6, o5), tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e4.replaceState(n3, o5), notify({ type: "REPLACE" });
    }, "task"), navigateOpts: s5, type: "REPLACE", path: n3, state: o5 });
  }, "replace"), go: /* @__PURE__ */ __name((r5, n3) => {
    tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e4.go(r5), handleIndexChange({ type: "GO", index: r5 });
    }, "task"), navigateOpts: n3, type: "GO" });
  }, "go"), back: /* @__PURE__ */ __name((r5) => {
    tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e4.back((null == r5 ? void 0 : r5.ignoreBlocker) ?? false), handleIndexChange({ type: "BACK" });
    }, "task"), navigateOpts: r5, type: "BACK" });
  }, "back"), forward: /* @__PURE__ */ __name((r5) => {
    tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e4.forward((null == r5 ? void 0 : r5.ignoreBlocker) ?? false), handleIndexChange({ type: "FORWARD" });
    }, "task"), navigateOpts: r5, type: "FORWARD" });
  }, "forward"), canGoBack: /* @__PURE__ */ __name(() => 0 !== r4.state[T2], "canGoBack"), createHref: /* @__PURE__ */ __name((r5) => e4.createHref(r5), "createHref"), block: /* @__PURE__ */ __name((r5) => {
    var n3;
    if (!e4.setBlockers) return () => {
    };
    const o5 = (null == (n3 = e4.getBlockers) ? void 0 : n3.call(e4)) ?? [];
    return e4.setBlockers([...o5, r5]), () => {
      var n4, o6;
      const s5 = (null == (n4 = e4.getBlockers) ? void 0 : n4.call(e4)) ?? [];
      null == (o6 = e4.setBlockers) || o6.call(e4, s5.filter((e5) => e5 !== r5));
    };
  }, "block"), flush: /* @__PURE__ */ __name(() => {
    var r5;
    return null == (r5 = e4.flush) ? void 0 : r5.call(e4);
  }, "flush"), destroy: /* @__PURE__ */ __name(() => {
    var r5;
    return null == (r5 = e4.destroy) ? void 0 : r5.call(e4);
  }, "destroy"), notify };
}
function assignKeyAndIndex(e4, r4) {
  r4 || (r4 = {});
  const n2 = createRandomKey();
  return { ...r4, key: n2, __TSR_key: n2, [T2]: e4 };
}
function createMemoryHistory(e4 = { initialEntries: ["/"] }) {
  const r4 = e4.initialEntries;
  let n2 = e4.initialIndex ? Math.min(Math.max(e4.initialIndex, 0), r4.length - 1) : r4.length - 1;
  const o5 = r4.map((e5, r5) => assignKeyAndIndex(r5, void 0));
  return createHistory({ getLocation: /* @__PURE__ */ __name(() => parseHref(r4[n2], o5[n2]), "getLocation"), getLength: /* @__PURE__ */ __name(() => r4.length, "getLength"), pushState: /* @__PURE__ */ __name((e5, s5) => {
    n2 < r4.length - 1 && (r4.splice(n2 + 1), o5.splice(n2 + 1)), o5.push(s5), r4.push(e5), n2 = Math.max(r4.length - 1, 0);
  }, "pushState"), replaceState: /* @__PURE__ */ __name((e5, s5) => {
    o5[n2] = s5, r4[n2] = e5;
  }, "replaceState"), back: /* @__PURE__ */ __name(() => {
    n2 = Math.max(n2 - 1, 0);
  }, "back"), forward: /* @__PURE__ */ __name(() => {
    n2 = Math.min(n2 + 1, r4.length - 1);
  }, "forward"), go: /* @__PURE__ */ __name((e5) => {
    n2 = Math.min(Math.max(n2 + e5, 0), r4.length - 1);
  }, "go"), createHref: /* @__PURE__ */ __name((e5) => e5, "createHref") });
}
function parseHref(e4, r4) {
  const n2 = e4.indexOf("#"), o5 = e4.indexOf("?"), s5 = createRandomKey();
  return { href: e4, pathname: e4.substring(0, n2 > 0 ? o5 > 0 ? Math.min(n2, o5) : n2 : o5 > 0 ? o5 : e4.length), hash: n2 > -1 ? e4.substring(n2) : "", search: o5 > -1 ? e4.slice(o5, -1 === n2 ? void 0 : n2) : "", state: r4 || { [T2]: 0, key: s5, __TSR_key: s5 } };
}
function createRandomKey() {
  return (Math.random() + 1).toString(36).substring(7);
}
function last(e4) {
  return e4[e4.length - 1];
}
function functionalUpdate(e4, r4) {
  return /* @__PURE__ */ function(e5) {
    return "function" == typeof e5;
  }(e4) ? e4(r4) : e4;
}
function pick(e4, r4) {
  return r4.reduce((r5, n2) => (r5[n2] = e4[n2], r5), {});
}
function replaceEqualDeep(e4, r4) {
  if (e4 === r4) return e4;
  const n2 = r4, o5 = isPlainArray(e4) && isPlainArray(n2);
  if (o5 || isSimplePlainObject(e4) && isSimplePlainObject(n2)) {
    const r5 = o5 ? e4 : Object.keys(e4).concat(Object.getOwnPropertySymbols(e4)), s5 = r5.length, a6 = o5 ? n2 : Object.keys(n2).concat(Object.getOwnPropertySymbols(n2)), i5 = a6.length, l5 = o5 ? [] : {};
    let u3 = 0;
    for (let s6 = 0; s6 < i5; s6++) {
      const i6 = o5 ? s6 : a6[s6];
      (!o5 && r5.includes(i6) || o5) && void 0 === e4[i6] && void 0 === n2[i6] ? (l5[i6] = void 0, u3++) : (l5[i6] = replaceEqualDeep(e4[i6], n2[i6]), l5[i6] === e4[i6] && void 0 !== e4[i6] && u3++);
    }
    return s5 === i5 && u3 === s5 ? e4 : l5;
  }
  return n2;
}
function isSimplePlainObject(e4) {
  return isPlainObject(e4) && Object.getOwnPropertyNames(e4).length === Object.keys(e4).length;
}
function isPlainObject(e4) {
  if (!hasObjectPrototype(e4)) return false;
  const r4 = e4.constructor;
  if (void 0 === r4) return true;
  const n2 = r4.prototype;
  return !!hasObjectPrototype(n2) && !!n2.hasOwnProperty("isPrototypeOf");
}
function hasObjectPrototype(e4) {
  return "[object Object]" === Object.prototype.toString.call(e4);
}
function isPlainArray(e4) {
  return Array.isArray(e4) && e4.length === Object.keys(e4).length;
}
function getObjectKeys(e4, r4) {
  let n2 = Object.keys(e4);
  return r4 && (n2 = n2.filter((r5) => void 0 !== e4[r5])), n2;
}
function deepEqual(e4, r4, n2) {
  if (e4 === r4) return true;
  if (typeof e4 != typeof r4) return false;
  if (isPlainObject(e4) && isPlainObject(r4)) {
    const o5 = (null == n2 ? void 0 : n2.ignoreUndefined) ?? true, s5 = getObjectKeys(e4, o5), a6 = getObjectKeys(r4, o5);
    return !(!(null == n2 ? void 0 : n2.partial) && s5.length !== a6.length) && a6.every((o6) => deepEqual(e4[o6], r4[o6], n2));
  }
  return !(!Array.isArray(e4) || !Array.isArray(r4)) && (e4.length === r4.length && !e4.some((e5, o5) => !deepEqual(e5, r4[o5], n2)));
}
function createControlledPromise(e4) {
  let r4, n2;
  const o5 = new Promise((e5, o6) => {
    r4 = e5, n2 = o6;
  });
  return o5.status = "pending", o5.resolve = (n3) => {
    o5.status = "resolved", o5.value = n3, r4(n3), null == e4 || e4(n3);
  }, o5.reject = (e5) => {
    o5.status = "rejected", n2(e5);
  }, o5;
}
function joinPaths(e4) {
  return cleanPath(e4.filter((e5) => void 0 !== e5).join("/"));
}
function cleanPath(e4) {
  return e4.replace(/\/{2,}/g, "/");
}
function trimPathLeft(e4) {
  return "/" === e4 ? e4 : e4.replace(/^\/{1,}/, "");
}
function trimPathRight(e4) {
  return "/" === e4 ? e4 : e4.replace(/\/{1,}$/, "");
}
function trimPath(e4) {
  return trimPathRight(trimPathLeft(e4));
}
function removeTrailingSlash(e4, r4) {
  return (null == e4 ? void 0 : e4.endsWith("/")) && "/" !== e4 && e4 !== `${r4}/` ? e4.slice(0, -1) : e4;
}
function parsePathname(e4) {
  if (!e4) return [];
  const r4 = [];
  if ("/" === (e4 = cleanPath(e4)).slice(0, 1) && (e4 = e4.substring(1), r4.push({ type: "pathname", value: "/" })), !e4) return r4;
  const n2 = e4.split("/").filter(Boolean);
  return r4.push(...n2.map((e5) => {
    const r5 = e5.match(O2);
    if (r5) {
      return { type: "wildcard", value: "$", prefixSegment: r5[1] || void 0, suffixSegment: r5[2] || void 0 };
    }
    const n3 = e5.match(I2);
    if (n3) {
      const e6 = n3[1];
      return { type: "param", value: "" + n3[2], prefixSegment: e6 || void 0, suffixSegment: n3[3] || void 0 };
    }
    if (F2.test(e5)) {
      return { type: "param", value: "$" + e5.substring(1), prefixSegment: void 0, suffixSegment: void 0 };
    }
    return A2.test(e5) ? { type: "wildcard", value: "$", prefixSegment: void 0, suffixSegment: void 0 } : { type: "pathname", value: e5.includes("%25") ? e5.split("%25").map((e6) => decodeURI(e6)).join("%25") : decodeURI(e5) };
  })), "/" === e4.slice(-1) && (e4 = e4.substring(1), r4.push({ type: "pathname", value: "/" })), r4;
}
function interpolatePath({ path: e4, params: r4, leaveWildcards: n2, leaveParams: o5, decodeCharMap: s5 }) {
  const a6 = parsePathname(e4);
  function encodeParam(e5) {
    const n3 = r4[e5], o6 = "string" == typeof n3;
    return ["*", "_splat"].includes(e5) ? o6 ? encodeURI(n3) : n3 : o6 ? function(e6, r5) {
      let n4 = encodeURIComponent(e6);
      if (r5) for (const [e7, o7] of r5) n4 = n4.replaceAll(e7, o7);
      return n4;
    }(n3, s5) : n3;
  }
  __name(encodeParam, "encodeParam");
  let i5 = false;
  const l5 = {}, u3 = joinPaths(a6.map((e5) => {
    if ("wildcard" === e5.type) {
      l5._splat = r4._splat;
      const o6 = e5.prefixSegment || "", s6 = e5.suffixSegment || "";
      if (!("_splat" in r4)) return i5 = true, n2 ? `${o6}${e5.value}${s6}` : o6 || s6 ? `${o6}${s6}` : void 0;
      const a7 = encodeParam("_splat");
      return n2 ? `${o6}${e5.value}${a7 ?? ""}${s6}` : `${o6}${a7}${s6}`;
    }
    if ("param" === e5.type) {
      const n3 = e5.value.substring(1);
      i5 || n3 in r4 || (i5 = true), l5[n3] = r4[n3];
      const s6 = e5.prefixSegment || "", a7 = e5.suffixSegment || "";
      if (o5) {
        const r5 = encodeParam(e5.value);
        return `${s6}${e5.value}${r5 ?? ""}${a7}`;
      }
      return `${s6}${encodeParam(n3) ?? "undefined"}${a7}`;
    }
    return e5.value;
  }));
  return { usedParams: l5, interpolatedPath: u3, isMissingParams: i5 };
}
function matchPathname(e4, r4, n2) {
  const o5 = function(e5, r5, n3) {
    if ("/" !== e5 && !r5.startsWith(e5)) return;
    r5 = removeBasepath(e5, r5, n3.caseSensitive);
    const o6 = removeBasepath(e5, `${n3.to ?? "$"}`, n3.caseSensitive), s5 = parsePathname(r5), a6 = parsePathname(o6);
    r5.startsWith("/") || s5.unshift({ type: "pathname", value: "/" });
    o6.startsWith("/") || a6.unshift({ type: "pathname", value: "/" });
    const i5 = {}, l5 = (() => {
      var e6;
      for (let r6 = 0; r6 < Math.max(s5.length, a6.length); r6++) {
        const o7 = s5[r6], l6 = a6[r6], u3 = r6 >= s5.length - 1, c4 = r6 >= a6.length - 1;
        if (l6) {
          if ("wildcard" === l6.type) {
            const n4 = s5.slice(r6);
            let a7;
            if (l6.prefixSegment || l6.suffixSegment) {
              if (!o7) return false;
              const r7 = l6.prefixSegment || "", i6 = l6.suffixSegment || "", u4 = o7.value;
              if ("prefixSegment" in l6 && !u4.startsWith(r7)) return false;
              if ("suffixSegment" in l6 && !(null == (e6 = s5[s5.length - 1]) ? void 0 : e6.value.endsWith(i6))) return false;
              let c5 = decodeURI(joinPaths(n4.map((e7) => e7.value)));
              r7 && c5.startsWith(r7) && (c5 = c5.slice(r7.length)), i6 && c5.endsWith(i6) && (c5 = c5.slice(0, c5.length - i6.length)), a7 = c5;
            } else a7 = decodeURI(joinPaths(n4.map((e7) => e7.value)));
            return i5["*"] = a7, i5._splat = a7, true;
          }
          if ("pathname" === l6.type) {
            if ("/" === l6.value && !(null == o7 ? void 0 : o7.value)) return true;
            if (o7) {
              if (n3.caseSensitive) {
                if (l6.value !== o7.value) return false;
              } else if (l6.value.toLowerCase() !== o7.value.toLowerCase()) return false;
            }
          }
          if (!o7) return false;
          if ("param" === l6.type) {
            if ("/" === o7.value) return false;
            let e7;
            if (l6.prefixSegment || l6.suffixSegment) {
              const r7 = l6.prefixSegment || "", n4 = l6.suffixSegment || "", s6 = o7.value;
              if (r7 && !s6.startsWith(r7)) return false;
              if (n4 && !s6.endsWith(n4)) return false;
              let a7 = s6;
              r7 && a7.startsWith(r7) && (a7 = a7.slice(r7.length)), n4 && a7.endsWith(n4) && (a7 = a7.slice(0, a7.length - n4.length)), e7 = decodeURIComponent(a7);
            } else e7 = decodeURIComponent(o7.value);
            i5[l6.value.substring(1)] = e7;
          }
        }
        if (!u3 && c4) return i5["**"] = joinPaths(s5.slice(r6 + 1).map((e7) => e7.value)), !!n3.fuzzy && "/" !== (null == l6 ? void 0 : l6.value);
      }
      return true;
    })();
    return l5 ? i5 : void 0;
  }(e4, r4, n2);
  if (!n2.to || o5) return o5 ?? {};
}
function removeBasepath(e4, r4, n2 = false) {
  const o5 = n2 ? e4 : e4.toLowerCase(), s5 = n2 ? r4 : r4.toLowerCase();
  switch (true) {
    case "/" === o5:
      return r4;
    case s5 === o5:
      return "";
    case r4.length < e4.length:
    case "/" !== s5[o5.length]:
      return r4;
    case s5.startsWith(o5):
      return r4.slice(e4.length);
    default:
      return r4;
  }
}
function isNotFound(e4) {
  return !!(null == e4 ? void 0 : e4.isNotFound);
}
function restoreScroll(e4, r4, n2, o5, s5) {
  var a6;
  let i5;
  try {
    i5 = JSON.parse(sessionStorage.getItem(e4) || "{}");
  } catch (e5) {
    return void console.error(e5);
  }
  const l5 = i5[r4 || (null == (a6 = window.history.state) ? void 0 : a6.key)];
  D2 = true, (() => {
    if (o5 && l5) {
      for (const e6 in l5) {
        const r5 = l5[e6];
        if ("window" === e6) window.scrollTo({ top: r5.scrollY, left: r5.scrollX, behavior: n2 });
        else if (e6) {
          const n3 = document.querySelector(e6);
          n3 && (n3.scrollLeft = r5.scrollX, n3.scrollTop = r5.scrollY);
        }
      }
      return;
    }
    const e5 = window.location.hash.split("#")[1];
    if (e5) {
      const r5 = (window.history.state || {}).__hashScrollIntoViewOptions ?? true;
      if (r5) {
        const n3 = document.getElementById(e5);
        n3 && n3.scrollIntoView(r5);
      }
      return;
    }
    ["window", ...(null == s5 ? void 0 : s5.filter((e6) => "window" !== e6)) ?? []].forEach((e6) => {
      const r5 = "window" === e6 ? window : "function" == typeof e6 ? e6() : document.querySelector(e6);
      r5 && r5.scrollTo({ top: 0, left: 0, behavior: n2 });
    });
  })(), D2 = false;
}
function setupScrollRestoration(e4, r4) {
  if (void 0 === B) return;
  if ((e4.options.scrollRestoration ?? false) && (e4.isScrollRestoring = true), "undefined" == typeof document || e4.isScrollRestorationSetup) return;
  e4.isScrollRestorationSetup = true, D2 = false;
  const n2 = e4.options.getScrollRestorationKey || defaultGetScrollRestorationKey;
  window.history.scrollRestoration = "manual";
  const onScroll = /* @__PURE__ */ __name((r5) => {
    if (D2 || !e4.isScrollRestoring) return;
    let o5 = "";
    if (r5.target === document || r5.target === window) o5 = "window";
    else {
      const e5 = r5.target.getAttribute("data-scroll-restoration-id");
      o5 = e5 ? `[data-scroll-restoration-id="${e5}"]` : function(e6) {
        const r6 = [];
        let n3;
        for (; n3 = e6.parentNode; ) r6.unshift(`${e6.tagName}:nth-child(${[].indexOf.call(n3.children, e6) + 1})`), e6 = n3;
        return `${r6.join(" > ")}`.toLowerCase();
      }(r5.target);
    }
    const s5 = n2(e4.state.location);
    B.set((e5) => {
      const r6 = e5[s5] = e5[s5] || {}, n3 = r6[o5] = r6[o5] || {};
      if ("window" === o5) n3.scrollX = window.scrollX || 0, n3.scrollY = window.scrollY || 0;
      else if (o5) {
        const e6 = document.querySelector(o5);
        e6 && (n3.scrollX = e6.scrollLeft || 0, n3.scrollY = e6.scrollTop || 0);
      }
      return e5;
    });
  }, "onScroll");
  "undefined" != typeof document && document.addEventListener("scroll", /* @__PURE__ */ ((e5, r5) => {
    let n3;
    return (...o5) => {
      n3 || (n3 = setTimeout(() => {
        e5(...o5), n3 = null;
      }, r5));
    };
  })(onScroll, 100), true), e4.subscribe("onRendered", (r5) => {
    const o5 = n2(r5.toLocation);
    e4.resetNextScroll ? (restoreScroll(N2, o5, e4.options.scrollRestorationBehavior || void 0, e4.isScrollRestoring || void 0, e4.options.scrollToTopSelectors || void 0), e4.isScrollRestoring && B.set((e5) => (e5[o5] = e5[o5] || {}, e5))) : e4.resetNextScroll = true;
  });
}
function toValue(e4) {
  return e4 ? "false" !== e4 && ("true" === e4 || (0 * +e4 == 0 && +e4 + "" === e4 ? +e4 : e4)) : "";
}
function isRedirect(e4) {
  return e4 instanceof Response && !!e4.options;
}
function getLocationChangeInfo(e4) {
  const r4 = e4.resolvedLocation, n2 = e4.location;
  return { fromLocation: r4, toLocation: n2, pathChanged: (null == r4 ? void 0 : r4.pathname) !== n2.pathname, hrefChanged: (null == r4 ? void 0 : r4.href) !== n2.href, hashChanged: (null == r4 ? void 0 : r4.hash) !== n2.hash };
}
function validateSearch(e4, r4) {
  if (null == e4) return {};
  if ("~standard" in e4) {
    const n2 = e4["~standard"].validate(r4);
    if (n2 instanceof Promise) throw new SearchParamError("Async validation not supported");
    if (n2.issues) throw new SearchParamError(JSON.stringify(n2.issues, void 0, 2), { cause: n2 });
    return n2.value;
  }
  return "parse" in e4 ? e4.parse(r4) : "function" == typeof e4 ? e4(r4) : {};
}
function routeNeedsPreload(e4) {
  var r4;
  for (const n2 of G) if (null == (r4 = e4.options[n2]) ? void 0 : r4.preload) return true;
  return false;
}
function processRouteTree({ routeTree: e4, initRoute: r4 }) {
  const n2 = {}, o5 = {}, recurseRoutes = /* @__PURE__ */ __name((e5) => {
    e5.forEach((e6, s6) => {
      null == r4 || r4(e6, s6);
      if (invariant(!n2[e6.id], String(e6.id)), n2[e6.id] = e6, !e6.isRoot && e6.path) {
        const r5 = trimPathRight(e6.fullPath);
        o5[r5] && !e6.fullPath.endsWith("/") || (o5[r5] = e6);
      }
      const a7 = e6.children;
      (null == a7 ? void 0 : a7.length) && recurseRoutes(a7);
    });
  }, "recurseRoutes");
  recurseRoutes([e4]);
  const s5 = [];
  Object.values(n2).forEach((e5, r5) => {
    var n3;
    if (e5.isRoot || !e5.path) return;
    const o6 = trimPathLeft(e5.fullPath), a7 = parsePathname(o6);
    for (; a7.length > 1 && "/" === (null == (n3 = a7[0]) ? void 0 : n3.value); ) a7.shift();
    const i5 = a7.map((e6) => "/" === e6.value ? 0.75 : "param" === e6.type && e6.prefixSegment && e6.suffixSegment ? 0.55 : "param" === e6.type && e6.prefixSegment ? 0.52 : "param" === e6.type && e6.suffixSegment ? 0.51 : "param" === e6.type ? 0.5 : "wildcard" === e6.type && e6.prefixSegment && e6.suffixSegment ? 0.3 : "wildcard" === e6.type && e6.prefixSegment ? 0.27 : "wildcard" === e6.type && e6.suffixSegment ? 0.26 : "wildcard" === e6.type ? 0.25 : 1);
    s5.push({ child: e5, trimmed: o6, parsed: a7, index: r5, scores: i5 });
  });
  const a6 = s5.sort((e5, r5) => {
    const n3 = Math.min(e5.scores.length, r5.scores.length);
    for (let o6 = 0; o6 < n3; o6++) if (e5.scores[o6] !== r5.scores[o6]) return r5.scores[o6] - e5.scores[o6];
    if (e5.scores.length !== r5.scores.length) return r5.scores.length - e5.scores.length;
    for (let o6 = 0; o6 < n3; o6++) if (e5.parsed[o6].value !== r5.parsed[o6].value) return e5.parsed[o6].value > r5.parsed[o6].value ? 1 : -1;
    return e5.index - r5.index;
  }).map((e5, r5) => (e5.child.rank = r5, e5.child));
  return { routesById: n2, routesByPath: o5, flatRoutes: a6 };
}
function getMatchedRoutes({ pathname: e4, routePathname: r4, basepath: n2, caseSensitive: o5, routesByPath: s5, routesById: a6, flatRoutes: i5 }) {
  let l5 = {};
  const u3 = trimPathRight(e4), getMatchedParams = /* @__PURE__ */ __name((e5) => {
    var r5;
    return matchPathname(n2, u3, { to: e5.fullPath, caseSensitive: (null == (r5 = e5.options) ? void 0 : r5.caseSensitive) ?? o5, fuzzy: true });
  }, "getMatchedParams");
  let c4 = void 0 !== r4 ? s5[r4] : void 0;
  c4 ? l5 = getMatchedParams(c4) : c4 = i5.find((e5) => {
    const r5 = getMatchedParams(e5);
    return !!r5 && (l5 = r5, true);
  });
  let h4 = c4 || a6[W2];
  const p4 = [h4];
  for (; h4.parentRoute; ) h4 = h4.parentRoute, p4.unshift(h4);
  return { matchedRoutes: p4, routeParams: l5, foundRoute: c4 };
}
function Component(e4, r4, n2) {
  this.props = e4, this.context = r4, this.refs = pe, this.updater = n2 || he;
}
function ComponentDummy() {
}
function PureComponent(e4, r4, n2) {
  this.props = e4, this.context = r4, this.refs = pe, this.updater = n2 || he;
}
function ReactElement(e4, r4, n2, o5, s5, a6) {
  return n2 = a6.ref, { $$typeof: Y2, type: e4, key: r4, ref: void 0 !== n2 ? n2 : null, props: a6 };
}
function isValidElement(e4) {
  return "object" == typeof e4 && null !== e4 && e4.$$typeof === Y2;
}
function getElementKey(e4, r4) {
  return "object" == typeof e4 && null !== e4 && null != e4.key ? (n2 = "" + e4.key, o5 = { "=": "=0", ":": "=2" }, "$" + n2.replace(/[=:]/g, function(e5) {
    return o5[e5];
  })) : r4.toString(36);
  var n2, o5;
}
function noop$1$2() {
}
function mapIntoArray(e4, r4, n2, o5, s5) {
  var a6 = typeof e4;
  "undefined" !== a6 && "boolean" !== a6 || (e4 = null);
  var i5, l5, u3 = false;
  if (null === e4) u3 = true;
  else switch (a6) {
    case "bigint":
    case "string":
    case "number":
      u3 = true;
      break;
    case "object":
      switch (e4.$$typeof) {
        case Y2:
        case Z:
          u3 = true;
          break;
        case ue:
          return mapIntoArray((u3 = e4._init)(e4._payload), r4, n2, o5, s5);
      }
  }
  if (u3) return s5 = s5(e4), u3 = "" === o5 ? "." + getElementKey(e4, 0) : o5, ye(s5) ? (n2 = "", null != u3 && (n2 = u3.replace(ke, "$&/") + "/"), mapIntoArray(s5, r4, n2, "", function(e5) {
    return e5;
  })) : null != s5 && (isValidElement(s5) && (i5 = s5, l5 = n2 + (null == s5.key || e4 && e4.key === s5.key ? "" : ("" + s5.key).replace(ke, "$&/") + "/") + u3, s5 = ReactElement(i5.type, l5, void 0, 0, 0, i5.props)), r4.push(s5)), 1;
  u3 = 0;
  var c4, h4 = "" === o5 ? "." : o5 + ":";
  if (ye(e4)) for (var p4 = 0; p4 < e4.length; p4++) u3 += mapIntoArray(o5 = e4[p4], r4, n2, a6 = h4 + getElementKey(o5, p4), s5);
  else if ("function" == typeof (p4 = null === (c4 = e4) || "object" != typeof c4 ? null : "function" == typeof (c4 = ce && c4[ce] || c4["@@iterator"]) ? c4 : null)) for (e4 = p4.call(e4), p4 = 0; !(o5 = e4.next()).done; ) u3 += mapIntoArray(o5 = o5.value, r4, n2, a6 = h4 + getElementKey(o5, p4++), s5);
  else if ("object" === a6) {
    if ("function" == typeof e4.then) return mapIntoArray(function(e5) {
      switch (e5.status) {
        case "fulfilled":
          return e5.value;
        case "rejected":
          throw e5.reason;
        default:
          switch ("string" == typeof e5.status ? e5.then(noop$1$2, noop$1$2) : (e5.status = "pending", e5.then(function(r5) {
            "pending" === e5.status && (e5.status = "fulfilled", e5.value = r5);
          }, function(r5) {
            "pending" === e5.status && (e5.status = "rejected", e5.reason = r5);
          })), e5.status) {
            case "fulfilled":
              return e5.value;
            case "rejected":
              throw e5.reason;
          }
      }
      throw e5;
    }(e4), r4, n2, o5, s5);
    throw r4 = String(e4), Error("Objects are not valid as a React child (found: " + ("[object Object]" === r4 ? "object with keys {" + Object.keys(e4).join(", ") + "}" : r4) + "). If you meant to render a collection of children, use an array instead.");
  }
  return u3;
}
function mapChildren(e4, r4, n2) {
  if (null == e4) return e4;
  var o5 = [], s5 = 0;
  return mapIntoArray(e4, o5, "", "", function(e5) {
    return r4.call(n2, e5, s5++);
  }), o5;
}
function lazyInitializer(e4) {
  if (-1 === e4._status) {
    var r4 = e4._result;
    (r4 = r4()).then(function(r5) {
      0 !== e4._status && -1 !== e4._status || (e4._status = 1, e4._result = r5);
    }, function(r5) {
      0 !== e4._status && -1 !== e4._status || (e4._status = 2, e4._result = r5);
    }), -1 === e4._status && (e4._status = 0, e4._result = r4);
  }
  if (1 === e4._status) return e4._result.default;
  throw e4._result;
}
function noop$5() {
}
function CatchBoundary(e4) {
  const r4 = e4.errorComponent ?? ErrorComponent;
  return p2.jsx(CatchBoundaryImpl, { getResetKey: e4.getResetKey, onCatch: e4.onCatch, children: /* @__PURE__ */ __name(({ error: n2, reset: o5 }) => n2 ? Ce.createElement(r4, { error: n2, reset: o5 }) : e4.children, "children") });
}
function ErrorComponent({ error: e4 }) {
  const [r4, n2] = Ce.useState(false);
  return p2.jsxs("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [p2.jsxs("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [p2.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }), p2.jsx("button", { style: { appearance: "none", fontSize: ".6em", border: "1px solid currentColor", padding: ".1rem .2rem", fontWeight: "bold", borderRadius: ".25rem" }, onClick: /* @__PURE__ */ __name(() => n2((e5) => !e5), "onClick"), children: r4 ? "Hide Error" : "Show Error" })] }), p2.jsx("div", { style: { height: ".25rem" } }), r4 ? p2.jsx("div", { children: p2.jsx("pre", { style: { fontSize: ".7em", border: "1px solid red", borderRadius: ".25rem", padding: ".3rem", color: "red", overflow: "auto" }, children: e4.message ? p2.jsx("code", { children: e4.message }) : null }) }) : null] });
}
function ClientOnly({ children: e4, fallback: r4 = null }) {
  return we.useSyncExternalStore(subscribe, () => true, () => false) ? p2.jsx(we.Fragment, { children: e4 }) : p2.jsx(we.Fragment, { children: r4 });
}
function subscribe() {
  return () => {
  };
}
function shallow(e4, r4) {
  if (Object.is(e4, r4)) return true;
  if ("object" != typeof e4 || null === e4 || "object" != typeof r4 || null === r4) return false;
  if (e4 instanceof Map && r4 instanceof Map) {
    if (e4.size !== r4.size) return false;
    for (const [n3, o5] of e4) if (!r4.has(n3) || !Object.is(o5, r4.get(n3))) return false;
    return true;
  }
  if (e4 instanceof Set && r4 instanceof Set) {
    if (e4.size !== r4.size) return false;
    for (const n3 of e4) if (!r4.has(n3)) return false;
    return true;
  }
  if (e4 instanceof Date && r4 instanceof Date) return e4.getTime() === r4.getTime();
  const n2 = Object.keys(e4);
  if (n2.length !== Object.keys(r4).length) return false;
  for (let o5 = 0; o5 < n2.length; o5++) if (!Object.prototype.hasOwnProperty.call(r4, n2[o5]) || !Object.is(e4[n2[o5]], r4[n2[o5]])) return false;
  return true;
}
function getRouterContext() {
  return "undefined" == typeof document ? ze : window.__TSR_ROUTER_CONTEXT__ ? window.__TSR_ROUTER_CONTEXT__ : (window.__TSR_ROUTER_CONTEXT__ = ze, ze);
}
function useRouter(e4) {
  const r4 = Ce.useContext(getRouterContext());
  return g(!(((null == e4 ? void 0 : e4.warn) ?? 1) && !r4), "useRouter must be used inside a <RouterProvider> component!"), r4;
}
function useRouterState(e4) {
  const r4 = useRouter({ warn: void 0 === (null == e4 ? void 0 : e4.router) }), n2 = (null == e4 ? void 0 : e4.router) || r4, o5 = Ce.useRef(void 0);
  return function(e5, r5 = (e6) => e6) {
    return De.useSyncExternalStoreWithSelector(e5.subscribe, () => e5.state, () => e5.state, r5, shallow);
  }(n2.__store, (r5) => {
    if (null == e4 ? void 0 : e4.select) {
      if (e4.structuralSharing ?? n2.options.defaultStructuralSharing) {
        const n3 = replaceEqualDeep(o5.current, e4.select(r5));
        return o5.current = n3, n3;
      }
      return e4.select(r5);
    }
    return r5;
  });
}
function useMatch(e4) {
  const r4 = Ce.useContext(e4.from ? Ve : He), n2 = useRouterState({ select: /* @__PURE__ */ __name((n3) => {
    const o5 = n3.matches.find((n4) => e4.from ? e4.from === n4.routeId : n4.id === r4);
    if (invariant(!((e4.shouldThrow ?? 1) && !o5), e4.from && e4.from), void 0 !== o5) return e4.select ? e4.select(o5) : o5;
  }, "select"), structuralSharing: e4.structuralSharing });
  return n2;
}
function useLoaderData(e4) {
  return useMatch({ from: e4.from, strict: e4.strict, structuralSharing: e4.structuralSharing, select: /* @__PURE__ */ __name((r4) => e4.select ? e4.select(r4.loaderData) : r4.loaderData, "select") });
}
function useLoaderDeps(e4) {
  const { select: r4, ...n2 } = e4;
  return useMatch({ ...n2, select: /* @__PURE__ */ __name((e5) => r4 ? r4(e5.loaderDeps) : e5.loaderDeps, "select") });
}
function useParams(e4) {
  return useMatch({ from: e4.from, strict: e4.strict, shouldThrow: e4.shouldThrow, structuralSharing: e4.structuralSharing, select: /* @__PURE__ */ __name((r4) => e4.select ? e4.select(r4.params) : r4.params, "select") });
}
function useSearch(e4) {
  return useMatch({ from: e4.from, strict: e4.strict, shouldThrow: e4.shouldThrow, structuralSharing: e4.structuralSharing, select: /* @__PURE__ */ __name((r4) => e4.select ? e4.select(r4.search) : r4.search, "select") });
}
function useNavigate(e4) {
  const { navigate: r4, state: n2 } = useRouter(), o5 = useMatch({ strict: false, select: /* @__PURE__ */ __name((e5) => e5.index, "select") });
  return Ce.useCallback((s5) => {
    const a6 = s5.from ?? (null == e4 ? void 0 : e4.from) ?? n2.matches[o5].fullPath;
    return r4({ ...s5, from: a6 });
  }, [null == e4 ? void 0 : e4.from, r4]);
}
function formatProdErrorMessage$1(e4) {
  var r4 = "https://react.dev/errors/" + e4;
  if (1 < arguments.length) {
    r4 += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n2 = 2; n2 < arguments.length; n2++) r4 += "&args[]=" + encodeURIComponent(arguments[n2]);
  }
  return "Minified React error #" + e4 + "; visit " + r4 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function noop$4() {
}
function getCrossOriginStringAs(e4, r4) {
  return "font" === e4 ? "" : "string" == typeof r4 ? "use-credentials" === r4 ? r4 : "" : void 0;
}
function usePrevious(e4) {
  const r4 = Ce.useRef({ value: e4, prev: null }), n2 = r4.current.value;
  return e4 !== n2 && (r4.current = { value: e4, prev: n2 }), r4.current.prev;
}
function useLinkProps(e4, r4) {
  const n2 = useRouter(), [o5, s5] = Ce.useState(false), a6 = Ce.useRef(false), i5 = function(e5) {
    const r5 = Ce.useRef(null);
    return Ce.useImperativeHandle(e5, () => r5.current, []), r5;
  }(r4), { activeProps: l5 = /* @__PURE__ */ __name(() => ({ className: "active" }), "l"), inactiveProps: u3 = /* @__PURE__ */ __name(() => ({}), "u"), activeOptions: c4, to: h4, preload: p4, preloadDelay: g3, hashScrollIntoView: y3, replace: b3, startTransition: v3, resetScroll: k4, viewTransition: C4, children: P4, target: R4, disabled: T4, style: $3, className: E4, onClick: F4, onFocus: I4, onMouseEnter: A4, onMouseLeave: O4, onTouchStart: N4, ignoreBlocker: B3, ...D4 } = e4, { params: H3, search: V4, hash: q3, state: W4, mask: G3, reloadDocument: X4, unsafeRelative: Q3, ...Y4 } = D4, Z3 = Ce.useMemo(() => {
    try {
      return new URL(`${h4}`), "external";
    } catch {
    }
    return "internal";
  }, [h4]), ee3 = useRouterState({ select: /* @__PURE__ */ __name((e5) => e5.location.search, "select"), structuralSharing: true }), te3 = useMatch({ strict: false, select: /* @__PURE__ */ __name((e5) => e5.fullPath, "select") }), re3 = e4.from ?? te3;
  e4 = { ...e4, from: re3 };
  const ne3 = Ce.useMemo(() => n2.buildLocation(e4), [n2, e4, ee3]), oe3 = Ce.useMemo(() => !e4.reloadDocument && (p4 ?? n2.options.defaultPreload), [n2.options.defaultPreload, p4, e4.reloadDocument]), ae3 = g3 ?? n2.options.defaultPreloadDelay ?? 0, ie3 = useRouterState({ select: /* @__PURE__ */ __name((e5) => {
    if (null == c4 ? void 0 : c4.exact) {
      if (!(r5 = e5.location.pathname, o6 = ne3.pathname, s6 = n2.basepath, removeTrailingSlash(r5, s6) === removeTrailingSlash(o6, s6))) return false;
    } else {
      const r6 = removeTrailingSlash(e5.location.pathname, n2.basepath).split("/"), o7 = removeTrailingSlash(ne3.pathname, n2.basepath).split("/").every((e6, n3) => e6 === r6[n3]);
      if (!o7) return false;
    }
    var r5, o6, s6;
    if ((null == c4 ? void 0 : c4.includeSearch) ?? 1) {
      if (!deepEqual(e5.location.search, ne3.search, { partial: !(null == c4 ? void 0 : c4.exact), ignoreUndefined: !(null == c4 ? void 0 : c4.explicitUndefined) })) return false;
    }
    return !(null == c4 ? void 0 : c4.includeHash) || e5.location.hash === ne3.hash;
  }, "select") }), le3 = Ce.useCallback(() => {
    n2.preloadRoute(e4).catch((e5) => {
      console.warn(e5), console.warn("Error preloading route! \u261D\uFE0F");
    });
  }, [e4, n2]);
  if (function(e5, r5, n3 = {}, o6 = {}) {
    const s6 = Ce.useRef("function" == typeof IntersectionObserver), a7 = Ce.useRef(null);
    Ce.useEffect(() => {
      if (e5.current && s6.current && !o6.disabled) return a7.current = new IntersectionObserver(([e6]) => {
        r5(e6);
      }, n3), a7.current.observe(e5.current), () => {
        var e6;
        null == (e6 = a7.current) || e6.disconnect();
      };
    }, [r5, n3, o6.disabled, e5]), a7.current;
  }(i5, Ce.useCallback((e5) => {
    (null == e5 ? void 0 : e5.isIntersecting) && le3();
  }, [le3]), { rootMargin: "100px" }, { disabled: !(!T4 && "viewport" === oe3) }), Qe(() => {
    a6.current || T4 || "render" !== oe3 || (le3(), a6.current = true);
  }, [T4, le3, oe3]), "external" === Z3) return { ...Y4, ref: i5, type: Z3, href: h4, ...P4 && { children: P4 }, ...R4 && { target: R4 }, ...T4 && { disabled: T4 }, ...$3 && { style: $3 }, ...E4 && { className: E4 }, ...F4 && { onClick: F4 }, ...I4 && { onFocus: I4 }, ...A4 && { onMouseEnter: A4 }, ...O4 && { onMouseLeave: O4 }, ...N4 && { onTouchStart: N4 } };
  const handleFocus = /* @__PURE__ */ __name((e5) => {
    T4 || oe3 && le3();
  }, "handleFocus"), ue3 = handleFocus, composeHandlers = /* @__PURE__ */ __name((e5) => (r5) => {
    var n3;
    null == (n3 = r5.persist) || n3.call(r5), e5.filter(Boolean).forEach((e6) => {
      r5.defaultPrevented || e6(r5);
    });
  }, "composeHandlers"), ce3 = ie3 ? functionalUpdate(l5, {}) ?? {} : {}, he3 = ie3 ? {} : functionalUpdate(u3, {}), de3 = [E4, ce3.className, he3.className].filter(Boolean).join(" "), pe3 = { ...$3, ...ce3.style, ...he3.style };
  return { ...Y4, ...ce3, ...he3, href: T4 ? void 0 : ne3.maskedLocation ? n2.history.createHref(ne3.maskedLocation.href) : n2.history.createHref(ne3.href), ref: i5, onClick: composeHandlers([F4, (r5) => {
    if (!(T4 || function(e5) {
      return !!(e5.metaKey || e5.altKey || e5.ctrlKey || e5.shiftKey);
    }(r5) || r5.defaultPrevented || R4 && "_self" !== R4 || 0 !== r5.button)) {
      r5.preventDefault(), Xe.flushSync(() => {
        s5(true);
      });
      const o6 = n2.subscribe("onResolved", () => {
        o6(), s5(false);
      });
      return n2.navigate({ ...e4, replace: b3, resetScroll: k4, hashScrollIntoView: y3, startTransition: v3, viewTransition: C4, ignoreBlocker: B3 });
    }
  }]), onFocus: composeHandlers([I4, handleFocus]), onMouseEnter: composeHandlers([A4, (e5) => {
    if (T4) return;
    const r5 = e5.target || {};
    if (oe3) {
      if (r5.preloadTimeout) return;
      ae3 ? r5.preloadTimeout = setTimeout(() => {
        r5.preloadTimeout = null, le3();
      }, ae3) : le3();
    }
  }]), onMouseLeave: composeHandlers([O4, (e5) => {
    if (T4) return;
    const r5 = e5.target || {};
    r5.preloadTimeout && (clearTimeout(r5.preloadTimeout), r5.preloadTimeout = null);
  }]), onTouchStart: composeHandlers([N4, ue3]), disabled: !!T4, target: R4, ...Object.keys(pe3).length && { style: pe3 }, ...de3 && { className: de3 }, ...T4 && { role: "link", "aria-disabled": true }, ...ie3 && { "data-status": "active", "aria-current": "page" }, ...o5 && { "data-transitioning": "transitioning" } };
}
function createFileRoute(e4) {
  return "object" == typeof e4 ? new FileRoute(e4, { silent: true }).createRoute(e4) : new FileRoute(e4, { silent: true }).createRoute;
}
function lazyRouteComponent(e4, r4) {
  let n2, o5, s5;
  const load = /* @__PURE__ */ __name(() => (n2 || (n2 = e4().then((e5) => {
    n2 = void 0, o5 = e5[r4];
  }).catch((e5) => {
    s5 = e5, function(e6) {
      "string" == typeof (null == e6 ? void 0 : e6.message) && (e6.message.startsWith("Failed to fetch dynamically imported module") || e6.message.startsWith("error loading dynamically imported module") || e6.message.startsWith("Importing a module script failed"));
    }(s5);
  })), n2), "load"), lazyComp = /* @__PURE__ */ __name(function(e5) {
    if (s5) throw s5;
    if (!o5) throw load();
    return Ce.createElement(o5, e5);
  }, "lazyComp");
  return lazyComp.preload = load, lazyComp;
}
function Transitioner() {
  const e4 = useRouter(), r4 = Ce.useRef({ router: e4, mounted: false }), n2 = useRouterState({ select: /* @__PURE__ */ __name(({ isLoading: e5 }) => e5, "select") }), [o5, s5] = Ce.useState(false), a6 = useRouterState({ select: /* @__PURE__ */ __name((e5) => e5.matches.some((e6) => "pending" === e6.status), "select"), structuralSharing: true }), i5 = usePrevious(n2), l5 = n2 || o5 || a6, u3 = usePrevious(l5), c4 = n2 || a6, h4 = usePrevious(c4);
  return e4.isServer || (e4.startTransition = (e5) => {
    s5(true), Ce.startTransition(() => {
      e5(), s5(false);
    });
  }), Ce.useEffect(() => {
    const r5 = e4.history.subscribe(e4.load), n3 = e4.buildLocation({ to: e4.latestLocation.pathname, search: true, params: true, hash: true, state: true, _includeValidateSearch: true });
    return trimPathRight(e4.latestLocation.href) !== trimPathRight(n3.href) && e4.commitLocation({ ...n3, replace: true }), () => {
      r5();
    };
  }, [e4, e4.history]), Qe(() => {
    if (r4.current.router === e4 && r4.current.mounted) return;
    r4.current = { router: e4, mounted: true };
    (async () => {
      try {
        await e4.load();
      } catch (e5) {
        console.error(e5);
      }
    })();
  }, [e4]), Qe(() => {
    i5 && !n2 && e4.emit({ type: "onLoad", ...getLocationChangeInfo(e4.state) });
  }, [i5, e4, n2]), Qe(() => {
    h4 && !c4 && e4.emit({ type: "onBeforeRouteMount", ...getLocationChangeInfo(e4.state) });
  }, [c4, h4, e4]), Qe(() => {
    u3 && !l5 && (e4.emit({ type: "onResolved", ...getLocationChangeInfo(e4.state) }), e4.__store.setState((e5) => ({ ...e5, status: "idle", resolvedLocation: e5.location })), function(e5) {
      if ("undefined" != typeof document && document.querySelector) {
        const r5 = e5.state.location.state.__hashScrollIntoViewOptions ?? true;
        if (r5 && "" !== e5.state.location.hash) {
          const n3 = document.getElementById(e5.state.location.hash);
          n3 && n3.scrollIntoView(r5);
        }
      }
    }(e4));
  }, [l5, u3, e4]), null;
}
function CatchNotFound(e4) {
  const r4 = useRouterState({ select: /* @__PURE__ */ __name((e5) => `not-found-${e5.location.pathname}-${e5.status}`, "select") });
  return p2.jsx(CatchBoundary, { getResetKey: /* @__PURE__ */ __name(() => r4, "getResetKey"), onCatch: /* @__PURE__ */ __name((r5, n2) => {
    var o5;
    if (!isNotFound(r5)) throw r5;
    null == (o5 = e4.onCatch) || o5.call(e4, r5, n2);
  }, "onCatch"), errorComponent: /* @__PURE__ */ __name(({ error: r5 }) => {
    var n2;
    if (isNotFound(r5)) return null == (n2 = e4.fallback) ? void 0 : n2.call(e4, r5);
    throw r5;
  }, "errorComponent"), children: e4.children });
}
function DefaultGlobalNotFound() {
  return p2.jsx("p", { children: "Not Found" });
}
function SafeFragment(e4) {
  return p2.jsx(p2.Fragment, { children: e4.children });
}
function renderRouteNotFound(e4, r4, n2) {
  return r4.options.notFoundComponent ? p2.jsx(r4.options.notFoundComponent, { data: n2 }) : e4.options.defaultNotFoundComponent ? p2.jsx(e4.options.defaultNotFoundComponent, { data: n2 }) : p2.jsx(DefaultGlobalNotFound, {});
}
function ScriptOnce({ children: e4, log: r4 }) {
  return "undefined" != typeof document ? null : p2.jsx("script", { className: "$tsr", dangerouslySetInnerHTML: { __html: [e4, "", 'if (typeof $_TSR !== "undefined") $_TSR.c()'].filter(Boolean).join("\n") } });
}
function ScrollRestoration() {
  const e4 = useRouter(), r4 = (e4.options.getScrollRestorationKey || defaultGetScrollRestorationKey)(e4.latestLocation), n2 = r4 !== defaultGetScrollRestorationKey(e4.latestLocation) ? r4 : null;
  return e4.isScrollRestoring && e4.isServer ? p2.jsx(ScriptOnce, { children: `(${restoreScroll.toString()})(${JSON.stringify(N2)},${JSON.stringify(n2)}, undefined, true)`, log: false }) : null;
}
function OnRendered() {
  const e4 = useRouter(), r4 = Ce.useRef(void 0);
  return p2.jsx("script", { suppressHydrationWarning: true, ref: /* @__PURE__ */ __name((n2) => {
    !n2 || void 0 !== r4.current && r4.current.href === e4.latestLocation.href || (e4.emit({ type: "onRendered", ...getLocationChangeInfo(e4.state) }), r4.current = e4.latestLocation);
  }, "ref") }, e4.latestLocation.state.__TSR_key);
}
function Matches() {
  const e4 = useRouter(), r4 = e4.options.defaultPendingComponent ? p2.jsx(e4.options.defaultPendingComponent, {}) : null, n2 = e4.isServer || "undefined" != typeof document && e4.ssr ? SafeFragment : Ce.Suspense, o5 = p2.jsxs(n2, { fallback: r4, children: [p2.jsx(Transitioner, {}), p2.jsx(MatchesInner, {})] });
  return e4.options.InnerWrap ? p2.jsx(e4.options.InnerWrap, { children: o5 }) : o5;
}
function MatchesInner() {
  const e4 = useRouterState({ select: /* @__PURE__ */ __name((e5) => {
    var r5;
    return null == (r5 = e5.matches[0]) ? void 0 : r5.id;
  }, "select") }), r4 = useRouterState({ select: /* @__PURE__ */ __name((e5) => e5.loadedAt, "select") });
  return p2.jsx(He.Provider, { value: e4, children: p2.jsx(CatchBoundary, { getResetKey: /* @__PURE__ */ __name(() => r4, "getResetKey"), errorComponent: ErrorComponent, onCatch: /* @__PURE__ */ __name((e5) => {
    g(false, "The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!"), g(false, e5.message || e5.toString());
  }, "onCatch"), children: e4 ? p2.jsx(tt, { matchId: e4 }) : null }) });
}
function RouterContextProvider({ router: e4, children: r4, ...n2 }) {
  Object.keys(n2).length > 0 && e4.update({ ...e4.options, ...n2, context: { ...e4.options.context, ...n2.context } });
  const o5 = getRouterContext(), s5 = p2.jsx(o5.Provider, { value: e4, children: r4 });
  return e4.options.Wrap ? p2.jsx(e4.options.Wrap, { children: s5 }) : s5;
}
function RouterProvider({ router: e4, ...r4 }) {
  return p2.jsx(RouterContextProvider, { router: e4, ...r4, children: p2.jsx(Matches, {}) });
}
function Asset({ tag: e4, attrs: r4, children: n2 }) {
  switch (e4) {
    case "title":
      return p2.jsx("title", { ...r4, suppressHydrationWarning: true, children: n2 });
    case "meta":
      return p2.jsx("meta", { ...r4, suppressHydrationWarning: true });
    case "link":
      return p2.jsx("link", { ...r4, suppressHydrationWarning: true });
    case "style":
      return p2.jsx("style", { ...r4, dangerouslySetInnerHTML: { __html: n2 } });
    case "script":
      return p2.jsx(Script, { attrs: r4, children: n2 });
    default:
      return null;
  }
}
function Script({ attrs: e4, children: r4 }) {
  return Ce.useEffect(() => {
    if (null == e4 ? void 0 : e4.src) {
      const r5 = document.createElement("script");
      for (const [n2, o5] of Object.entries(e4)) "suppressHydrationWarning" !== n2 && void 0 !== o5 && false !== o5 && r5.setAttribute(n2, "boolean" == typeof o5 ? "" : String(o5));
      return document.head.appendChild(r5), () => {
        r5.parentNode && r5.parentNode.removeChild(r5);
      };
    }
    if ("string" == typeof r4) {
      const n2 = document.createElement("script");
      if (n2.textContent = r4, e4) for (const [r5, o5] of Object.entries(e4)) "suppressHydrationWarning" !== r5 && void 0 !== o5 && false !== o5 && n2.setAttribute(r5, "boolean" == typeof o5 ? "" : String(o5));
      return document.head.appendChild(n2), () => {
        n2.parentNode && n2.parentNode.removeChild(n2);
      };
    }
  }, [e4, r4]), (null == e4 ? void 0 : e4.src) && "string" == typeof e4.src ? p2.jsx("script", { ...e4, suppressHydrationWarning: true }) : "string" == typeof r4 ? p2.jsx("script", { ...e4, dangerouslySetInnerHTML: { __html: r4 }, suppressHydrationWarning: true }) : null;
}
function HeadContent() {
  return useTags().map((e4) => Ce.createElement(Asset, { ...e4, key: `tsr-meta-${JSON.stringify(e4)}` }));
}
function splitSetCookieString(e4) {
  if (Array.isArray(e4)) return e4.flatMap((e5) => splitSetCookieString(e5));
  if ("string" != typeof e4) return [];
  const r4 = [];
  let n2, o5, s5, a6, i5, l5 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; l5 < e4.length && /\s/.test(e4.charAt(l5)); ) l5 += 1;
    return l5 < e4.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (o5 = e4.charAt(l5), "=" !== o5 && ";" !== o5 && "," !== o5), "notSpecialChar");
  for (; l5 < e4.length; ) {
    for (n2 = l5, i5 = false; skipWhitespace(); ) if (o5 = e4.charAt(l5), "," === o5) {
      for (s5 = l5, l5 += 1, skipWhitespace(), a6 = l5; l5 < e4.length && notSpecialChar(); ) l5 += 1;
      l5 < e4.length && "=" === e4.charAt(l5) ? (i5 = true, l5 = a6, r4.push(e4.slice(n2, s5)), n2 = l5) : l5 = s5 + 1;
    } else l5 += 1;
    (!i5 || l5 >= e4.length) && r4.push(e4.slice(n2, e4.length));
  }
  return r4;
}
function mergeHeaders(...e4) {
  return e4.reduce((e5, r4) => {
    const n2 = (o5 = r4) instanceof Headers || Array.isArray(o5) || "object" == typeof o5 ? new Headers(o5) : new Headers();
    var o5;
    for (const [r5, o6] of n2.entries()) if ("set-cookie" === r5) {
      splitSetCookieString(o6).forEach((r6) => e5.append("set-cookie", r6));
    } else e5.set(r5, o6);
    return e5;
  }, new Headers());
}
function json(e4, r4) {
  return new Response(JSON.stringify(e4), { ...r4, headers: mergeHeaders({ "content-type": "application/json" }, null == r4 ? void 0 : r4.headers) });
}
function Nr(e4) {
  switch (e4) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function d4(e4) {
  let r4, n2 = "", o5 = 0;
  for (let s5 = 0, a6 = e4.length; s5 < a6; s5++) r4 = Nr(e4[s5]), r4 && (n2 += e4.slice(o5, s5) + r4, o5 = s5 + 1);
  return 0 === o5 ? n2 = e4 : n2 += e4.slice(o5), n2;
}
function f2(e4, r4) {
  if (!e4) throw r4;
}
function je(e4) {
  return ut.has(e4);
}
function Hr(e4) {
  return e4;
}
function Ye(e4, r4) {
  for (let n2 = 0, o5 = r4.length; n2 < o5; n2++) {
    let o6 = r4[n2];
    e4.has(o6) || (e4.add(o6), o6.extends && Ye(e4, o6.extends));
  }
}
function m2(e4) {
  if (e4) {
    let r4 = /* @__PURE__ */ new Set();
    return Ye(r4, e4), [...r4];
  }
}
function u$1(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4, h4, p4) {
  return { t: e4, i: r4, s: n2, l: o5, c: s5, m: a6, p: i5, e: l5, a: u3, f: c4, b: h4, o: p4 };
}
function x(e4) {
  return u$1(2, mt, e4, mt, mt, mt, mt, mt, mt, mt, mt, mt);
}
function me(e4) {
  return e4 instanceof EvalError ? 1 : e4 instanceof RangeError ? 2 : e4 instanceof ReferenceError ? 3 : e4 instanceof SyntaxError ? 4 : e4 instanceof TypeError ? 5 : e4 instanceof URIError ? 6 : 0;
}
function j(e4, r4) {
  let n2 = function(e5) {
    let r5 = ft[me(e5)];
    return e5.name !== r5 ? { name: e5.name } : e5.constructor.name !== r5 ? { name: e5.constructor.name } : {};
  }(e4), o5 = Object.getOwnPropertyNames(e4);
  for (let s5, a6 = 0, i5 = o5.length; a6 < i5; a6++) s5 = o5[a6], "name" !== s5 && "message" !== s5 && ("stack" === s5 ? 4 & r4 && (n2 = n2 || {}, n2[s5] = e4[s5]) : (n2 = n2 || {}, n2[s5] = e4[s5]));
  return n2;
}
function fe(e4) {
  return Object.isFrozen(e4) ? 3 : Object.isSealed(e4) ? 2 : Object.isExtensible(e4) ? 0 : 1;
}
function w$1(e4) {
  return u$1(1, mt, d4(e4), mt, mt, mt, mt, mt, mt, mt, mt, mt);
}
function nr(e4, r4) {
  return u$1(18, e4, d4(function(e5) {
    return f2(je(e5), new It(e5)), ut.get(e5);
  }(r4)), mt, mt, mt, mt, mt, mt, mt, mt, mt);
}
function _2(e4, r4, n2) {
  return u$1(25, e4, n2, mt, d4(r4), mt, mt, mt, mt, mt, mt, mt);
}
function M(e4, r4) {
  return u$1(28, mt, mt, mt, mt, mt, mt, mt, [e4, r4], mt, mt, mt);
}
function U2(e4, r4) {
  return u$1(30, mt, mt, mt, mt, mt, mt, mt, [e4, r4], mt, mt, mt);
}
function L2(e4, r4, n2) {
  return u$1(31, e4, mt, mt, mt, mt, mt, mt, n2, r4, mt, mt);
}
function z(e4, r4, n2) {
  return 2 & e4 ? (1 === r4.length ? r4[0] : "(" + r4.join(",") + ")") + "=>" + (n2.startsWith("{") ? "(" + n2 + ")" : n2) : "function(" + r4.join(",") + "){return " + n2 + "}";
}
function S2(e4, r4, n2) {
  return 2 & e4 ? (1 === r4.length ? r4[0] : "(" + r4.join(",") + ")") + "=>{" + n2 + "}" : "function(" + r4.join(",") + "){" + n2 + "}";
}
function cr(e4, r4) {
  switch (r4) {
    case 0:
      return "[]";
    case 1:
      return function(e5) {
        return z(e5, ["r"], "(r.p=new Promise(" + S2(e5, ["s", "f"], "r.s=s,r.f=f") + "))");
      }(e4);
    case 2:
      return function(e5) {
        return S2(e5, ["r", "d"], "r.s(d),r.p.s=1,r.p.v=d");
      }(e4);
    case 3:
      return function(e5) {
        return S2(e5, ["r", "d"], "r.f(d),r.p.s=2,r.p.v=d");
      }(e4);
    case 4:
      return function(e5) {
        return z(e5, ["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + S2(e5, ["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + S2(e5, ["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + z(e5, ["o", "t"], "(a&&(l[t=p++]=o),n(o)," + S2(e5, [], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + z(e5, ["o"], "e(o)") + ",next:" + S2(e5, ["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + S2(e5, ["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + S2(e5, ["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
      }(e4);
    default:
      return "";
  }
}
function K2() {
  let e4 = /* @__PURE__ */ new Set(), r4 = [], n2 = true, o5 = true;
  return { __SEROVAL_STREAM__: true, on(s5) {
    n2 && e4.add(s5);
    for (let e5 = 0, a6 = r4.length; e5 < a6; e5++) {
      let i5 = r4[e5];
      e5 !== a6 - 1 || n2 ? s5.next(i5) : o5 ? s5.return(i5) : s5.throw(i5);
    }
    return () => {
      n2 && e4.delete(s5);
    };
  }, next(o6) {
    n2 && (r4.push(o6), function(r5) {
      for (let n3 of e4.keys()) n3.next(r5);
    }(o6));
  }, throw(s5) {
    n2 && (r4.push(s5), function(r5) {
      for (let n3 of e4.keys()) n3.throw(r5);
    }(s5), n2 = false, o5 = false, e4.clear());
  }, return(s5) {
    n2 && (r4.push(s5), function(r5) {
      for (let n3 of e4.keys()) n3.return(r5);
    }(s5), n2 = false, o5 = true, e4.clear());
  } };
}
function J(e4) {
  let r4 = [], n2 = -1, o5 = -1, s5 = e4[Symbol.iterator]();
  for (; ; ) try {
    let e5 = s5.next();
    if (r4.push(e5.value), e5.done) {
      o5 = r4.length - 1;
      break;
    }
  } catch (e5) {
    n2 = r4.length, r4.push(e5);
  }
  return { v: r4, t: n2, d: o5 };
}
function Le(e4) {
  let r4 = e4[0];
  return ("$" === r4 || "_" === r4 || r4 >= "A" && r4 <= "Z" || r4 >= "a" && r4 <= "z") && Nt.test(e4);
}
function se(e4) {
  switch (e4.t) {
    case 0:
      return e4.s + "=" + e4.v;
    case 2:
      return e4.s + ".set(" + e4.k + "," + e4.v + ")";
    case 1:
      return e4.s + ".add(" + e4.v + ")";
    case 3:
      return e4.s + ".delete(" + e4.k + ")";
  }
}
function fr(e4) {
  if (e4.length) {
    let r4 = "", n2 = function(e5) {
      let r5 = [], n3 = e5[0];
      for (let o5, s5 = 1, a6 = e5.length, i5 = n3; s5 < a6; s5++) o5 = e5[s5], 0 === o5.t && o5.v === i5.v ? n3 = { t: 0, s: o5.s, k: mt, v: se(n3) } : 2 === o5.t && o5.s === i5.s ? n3 = { t: 2, s: se(n3), k: o5.k, v: o5.v } : 1 === o5.t && o5.s === i5.s ? n3 = { t: 1, s: se(n3), k: mt, v: o5.v } : 3 === o5.t && o5.s === i5.s ? n3 = { t: 3, s: se(n3), k: o5.k, v: mt } : (r5.push(n3), n3 = o5), i5 = o5;
      return r5.push(n3), r5;
    }(e4);
    for (let e5 = 0, o5 = n2.length; e5 < o5; e5++) r4 += se(n2[e5]) + ",";
    return r4;
  }
  return mt;
}
function w2(e4) {
  let r4 = K2(), n2 = e4.getReader();
  return (/* @__PURE__ */ __name(async function t3() {
    try {
      let e5 = await n2.read();
      e5.done ? r4.return(e5.value) : (r4.next(e5.value), await t3());
    } catch (e5) {
      r4.throw(e5);
    }
  }, "t"))().catch(() => {
  }), r4;
}
function dehydrateMatch(e4) {
  const r4 = { i: e4.id, u: e4.updatedAt, s: e4.status }, n2 = [["__beforeLoadContext", "b"], ["loaderData", "l"], ["error", "e"], ["ssr", "ssr"]];
  for (const [o5, s5] of n2) void 0 !== e4[o5] && (r4[s5] = e4[o5]);
  return r4;
}
function attachRouterServerSsrUtils(e4, r4) {
  e4.ssr = { manifest: r4 };
  const n2 = /* @__PURE__ */ new Map();
  let o5 = false;
  const getInitialScript = /* @__PURE__ */ __name(() => {
    return o5 ? "" : (o5 = true, (null == (e5 = "tsr") ? `${lt}=${lt}||[]` : `(${lt}=${lt}||{})["${d4(e5)}"]=[]`) + ';self.$_TSR={c:()=>{document.querySelectorAll(".\\\\$tsr").forEach(e=>{e.remove()})}};\n;');
    var e5;
  }, "getInitialScript");
  let s5 = false;
  const a6 = [];
  e4.serverSsr = { injectedHtml: [], injectHtml: /* @__PURE__ */ __name((r5) => {
    const n3 = Promise.resolve().then(r5);
    return e4.serverSsr.injectedHtml.push(n3), e4.emit({ type: "onInjectedHtml", promise: n3 }), n3.then(() => {
    });
  }, "injectHtml"), injectScript: /* @__PURE__ */ __name((r5) => e4.serverSsr.injectHtml(async () => {
    const e5 = await r5();
    return `<script class='$tsr'>${getInitialScript()}${e5};if (typeof $_TSR !== 'undefined') $_TSR.c()<\/script>`;
  }), "injectScript"), dehydrate: /* @__PURE__ */ __name(async () => {
    var r5, o6, a7;
    invariant(!s5);
    const i5 = e4.state.matches.map(dehydrateMatch), l5 = { manifest: e4.ssr.manifest, matches: i5 }, u3 = null == (r5 = e4.state.matches[e4.state.matches.length - 1]) ? void 0 : r5.id;
    u3 && (l5.lastMatchId = u3), l5.dehydratedData = await (null == (a7 = (o6 = e4.options).dehydrate) ? void 0 : a7.call(o6)), s5 = true;
    const c4 = createControlledPromise();
    !function(e5, r6) {
      let n3 = m2(r6.plugins), o7 = new Vt({ plugins: n3, refs: r6.refs, disabledFeatures: r6.disabledFeatures, onParse(e6, s6) {
        let a8, i6 = new Dt({ plugins: n3, features: o7.features, scopeId: r6.scopeId, markedRefs: o7.marked });
        try {
          a8 = i6.serializeTop(e6);
        } catch (e7) {
          return void (r6.onError && r6.onError(e7));
        }
        r6.onSerialize(a8, s6);
      }, onError: r6.onError, onDone: r6.onDone });
      o7.start(e5), o7.destroy.bind(o7);
    }(l5, { refs: n2, plugins: [Ut, Kt], onSerialize: /* @__PURE__ */ __name((r6, n3) => {
      const o7 = n3 ? '$_TSR["router"]=' + r6 : r6;
      e4.serverSsr.injectScript(() => o7);
    }, "onSerialize"), scopeId: "tsr", onDone: /* @__PURE__ */ __name(() => c4.resolve(""), "onDone"), onError: /* @__PURE__ */ __name((e5) => c4.reject(e5), "onError") }), e4.serverSsr.injectHtml(() => c4);
  }, "dehydrate"), isDehydrated: /* @__PURE__ */ __name(() => s5, "isDehydrated"), onRenderFinished: /* @__PURE__ */ __name((e5) => a6.push(e5), "onRenderFinished"), setRenderFinished: /* @__PURE__ */ __name(() => {
    a6.forEach((e5) => e5());
  }, "setRenderFinished") };
}
function transformStreamWithRouter(e4, r4) {
  const n2 = function() {
    let e5;
    const r5 = new TextEncoder(), n3 = { stream: new i3({ start(r6) {
      e5 = r6;
    } }), write: /* @__PURE__ */ __name((n4) => {
      e5.enqueue(r5.encode(n4));
    }, "write"), end: /* @__PURE__ */ __name((o6) => {
      o6 && e5.enqueue(r5.encode(o6)), e5.close(), n3.destroyed = true;
    }, "end"), destroy: /* @__PURE__ */ __name((r6) => {
      e5.error(r6);
    }, "destroy"), destroyed: false };
    return n3;
  }();
  let o5 = true, s5 = "", a6 = "", l5 = false, u3 = false, c4 = "", h4 = "";
  function getBufferedRouterStream() {
    const e5 = s5;
    return s5 = "", e5;
  }
  __name(getBufferedRouterStream, "getBufferedRouterStream");
  const p4 = createControlledPromise();
  let g3 = 0;
  e4.serverSsr.injectedHtml.forEach((e5) => {
    handleInjectedHtml(e5);
  });
  const y3 = e4.subscribe("onInjectedHtml", (e5) => {
    handleInjectedHtml(e5.promise);
  });
  function handleInjectedHtml(e5) {
    g3++, e5.then((e6) => {
      l5 ? n2.write(e6) : s5 += e6;
    }).catch(p4.reject).finally(() => {
      g3--, o5 || 0 !== g3 || (y3(), p4.resolve());
    });
  }
  __name(handleInjectedHtml, "handleInjectedHtml");
  return p4.then(() => {
    const e5 = h4 + getBufferedRouterStream() + a6;
    n2.end(e5);
  }).catch((e5) => {
    console.error("Error reading routerStream:", e5), n2.destroy(e5);
  }), async function(e5, r5) {
    var n3, o6, s6;
    try {
      const s7 = e5.getReader();
      let a7;
      for (; !(a7 = await s7.read()).done; ) null == (n3 = r5.onData) || n3.call(r5, a7);
      null == (o6 = r5.onEnd) || o6.call(r5);
    } catch (e6) {
      null == (s6 = r5.onError) || s6.call(r5, e6);
    }
  }(r4, { onData: /* @__PURE__ */ __name((e5) => {
    const r5 = function(e6) {
      return e6 instanceof Uint8Array ? Zt.decode(e6) : String(e6);
    }(e5.value);
    let o6 = c4 + r5;
    const s6 = o6.match(Jt), i5 = o6.match(Xt);
    if (!l5) {
      o6.match(Gt) && (l5 = true);
    }
    if (!u3) {
      const e6 = o6.match(Qt);
      if (e6) {
        u3 = true;
        const r6 = e6.index, s7 = e6[0], a7 = o6.slice(r6 + s7.length);
        n2.write(o6.slice(0, r6) + s7 + getBufferedRouterStream()), o6 = a7;
      }
    }
    if (!l5) return n2.write(o6), void (c4 = "");
    if (s6 && i5 && s6.index < i5.index) {
      const e6 = s6.index;
      return a6 = o6.slice(e6), n2.write(o6.slice(0, e6) + getBufferedRouterStream()), void (c4 = "");
    }
    let p5, g4 = 0;
    for (; null !== (p5 = Yt.exec(o6)); ) g4 = p5.index + p5[0].length;
    if (g4 > 0) {
      const e6 = o6.slice(0, g4) + getBufferedRouterStream() + h4;
      n2.write(e6), c4 = o6.slice(g4);
    } else c4 = o6, h4 += getBufferedRouterStream();
  }, "onData"), onEnd: /* @__PURE__ */ __name(() => {
    o5 = false, e4.serverSsr.setRenderFinished(), 0 === g3 && p4.resolve();
  }, "onEnd"), onError: /* @__PURE__ */ __name((e5) => {
    console.error("Error reading appStream:", e5), n2.destroy(e5);
  }, "onError") }), n2.stream;
}
function hasProp(e4, r4) {
  try {
    return r4 in e4;
  } catch {
    return false;
  }
}
function assertMethod(e4, r4, n2) {
  if (!function(e5, r5) {
    if ("string" == typeof r5) {
      if (e5.method === r5) return true;
    } else if (r5.includes(e5.method)) return true;
    return false;
  }(e4, r4)) throw function(e5) {
    if ("string" == typeof e5) return new H3Error(e5);
    if (function(e6) {
      return true === e6?.constructor?.__h3_error__;
    }(e5)) return e5;
    const r5 = new H3Error(e5.message ?? e5.statusMessage ?? "", { cause: e5.cause || e5 });
    if (hasProp(e5, "stack")) try {
      Object.defineProperty(r5, "stack", { get: /* @__PURE__ */ __name(() => e5.stack, "get") });
    } catch {
      try {
        r5.stack = e5.stack;
      } catch {
      }
    }
    if (e5.data && (r5.data = e5.data), e5.statusCode ? r5.statusCode = sanitizeStatusCode(e5.statusCode, r5.statusCode) : e5.status && (r5.statusCode = sanitizeStatusCode(e5.status, r5.statusCode)), e5.statusMessage ? r5.statusMessage = e5.statusMessage : e5.statusText && (r5.statusMessage = e5.statusText), r5.statusMessage) {
      const e6 = r5.statusMessage;
      sanitizeStatusMessage(r5.statusMessage) !== e6 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
    return void 0 !== e5.fatal && (r5.fatal = e5.fatal), void 0 !== e5.unhandled && (r5.unhandled = e5.unhandled), r5;
  }({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
}
function toWebRequest(e4) {
  return e4.web?.request || new Request(function(e5, r4 = {}) {
    const n2 = function(e6, r5 = {}) {
      if (r5.xForwardedHost) {
        const r6 = e6.node.req.headers["x-forwarded-host"];
        if (r6) return r6;
      }
      return e6.node.req.headers.host || "localhost";
    }(e5, r4), o5 = function(e6, r5 = {}) {
      return false !== r5.xForwardedProto && "https" === e6.node.req.headers["x-forwarded-proto"] || e6.node.req.connection?.encrypted ? "https" : "http";
    }(e5, r4), s5 = (e5.node.req.originalUrl || e5.path).replace(/^[/\\]+/g, "/");
    return new URL(s5, `${o5}://${n2}`);
  }(e4), { duplex: "half", method: e4.method, headers: e4.headers, body: getRequestWebStream(e4) });
}
function getRequestWebStream(e4) {
  if (!rr.includes(e4.method)) return;
  const r4 = e4.web?.request?.body || e4._requestBody;
  if (r4) return r4;
  return tr in e4.node.req || "rawBody" in e4.node.req || "body" in e4.node.req || "__unenv__" in e4.node.req ? new ReadableStream({ async start(r5) {
    const n2 = await function(e5, r6 = "utf8") {
      assertMethod(e5, rr);
      const n3 = e5._requestBody || e5.web?.request?.body || e5.node.req[tr] || e5.node.req.rawBody || e5.node.req.body;
      if (n3) {
        const e6 = Promise.resolve(n3).then((e7) => o3.isBuffer(e7) ? e7 : "function" == typeof e7.pipeTo ? new Promise((r7, n4) => {
          const s6 = [];
          e7.pipeTo(new WritableStream({ write(e8) {
            s6.push(e8);
          }, close() {
            r7(o3.concat(s6));
          }, abort(e8) {
            n4(e8);
          } })).catch(n4);
        }) : "function" == typeof e7.pipe ? new Promise((r7, n4) => {
          const s6 = [];
          e7.on("data", (e8) => {
            s6.push(e8);
          }).on("end", () => {
            r7(o3.concat(s6));
          }).on("error", n4);
        }) : e7.constructor === Object ? o3.from(JSON.stringify(e7)) : e7 instanceof URLSearchParams ? o3.from(e7.toString()) : o3.from(e7));
        return r6 ? e6.then((e7) => e7.toString(r6)) : e6;
      }
      if (!Number.parseInt(e5.node.req.headers["content-length"] || "") && !String(e5.node.req.headers["transfer-encoding"] ?? "").split(",").map((e6) => e6.trim()).filter(Boolean).includes("chunked")) return Promise.resolve(void 0);
      const s5 = e5.node.req[tr] = new Promise((r7, n4) => {
        const s6 = [];
        e5.node.req.on("error", (e6) => {
          n4(e6);
        }).on("data", (e6) => {
          s6.push(e6);
        }).on("end", () => {
          r7(o3.concat(s6));
        });
      });
      return r6 ? s5.then((e6) => e6.toString(r6)) : s5;
    }(e4, false);
    n2 && r5.enqueue(n2), r5.close();
  } }) : new ReadableStream({ start: /* @__PURE__ */ __name((r5) => {
    e4.node.req.on("data", (e5) => {
      r5.enqueue(e5);
    }), e4.node.req.on("end", () => {
      r5.close();
    }), e4.node.req.on("error", (e5) => {
      r5.error(e5);
    });
  }, "start") });
}
function sanitizeStatusMessage(e4 = "") {
  return e4.replace(or, "");
}
function sanitizeStatusCode(e4, r4 = 200) {
  return e4 ? ("string" == typeof e4 && (e4 = Number.parseInt(e4, 10)), e4 < 100 || e4 > 999 ? r4 : e4) : r4;
}
function splitCookiesString(e4) {
  if (Array.isArray(e4)) return e4.flatMap((e5) => splitCookiesString(e5));
  if ("string" != typeof e4) return [];
  const r4 = [];
  let n2, o5, s5, a6, i5, l5 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; l5 < e4.length && /\s/.test(e4.charAt(l5)); ) l5 += 1;
    return l5 < e4.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (o5 = e4.charAt(l5), "=" !== o5 && ";" !== o5 && "," !== o5), "notSpecialChar");
  for (; l5 < e4.length; ) {
    for (n2 = l5, i5 = false; skipWhitespace(); ) if (o5 = e4.charAt(l5), "," === o5) {
      for (s5 = l5, l5 += 1, skipWhitespace(), a6 = l5; l5 < e4.length && notSpecialChar(); ) l5 += 1;
      l5 < e4.length && "=" === e4.charAt(l5) ? (i5 = true, l5 = a6, r4.push(e4.slice(n2, s5)), n2 = l5) : l5 = s5 + 1;
    } else l5 += 1;
    (!i5 || l5 >= e4.length) && r4.push(e4.slice(n2));
  }
  return r4;
}
function sendWebResponse(e4, r4) {
  for (const [n2, o5] of r4.headers) "set-cookie" === n2 ? e4.node.res.appendHeader(n2, splitCookiesString(o5)) : e4.node.res.setHeader(n2, o5);
  if (r4.status && (e4.node.res.statusCode = sanitizeStatusCode(r4.status, e4.node.res.statusCode)), r4.statusText && (e4.node.res.statusMessage = sanitizeStatusMessage(r4.statusText)), r4.redirected && e4.node.res.setHeader("location", r4.url), r4.body) return function(e5, r5) {
    if (!r5 || "object" != typeof r5) throw new Error("[h3] Invalid stream provided.");
    if (e5.node.res._data = r5, !e5.node.res.socket) return e5._handled = true, Promise.resolve();
    if (hasProp(r5, "pipeTo") && "function" == typeof r5.pipeTo) return r5.pipeTo(new WritableStream({ write(r6) {
      e5.node.res.write(r6);
    } })).then(() => {
      e5.node.res.end();
    });
    if (hasProp(r5, "pipe") && "function" == typeof r5.pipe) return new Promise((n2, o5) => {
      r5.pipe(e5.node.res), r5.on && (r5.on("end", () => {
        e5.node.res.end(), n2();
      }), r5.on("error", (e6) => {
        o5(e6);
      })), e5.node.res.on("close", () => {
        r5.abort && r5.abort();
      });
    });
    throw new Error("[h3] Invalid or incompatible stream provided.");
  }(e4, r4.body);
  e4.node.res.end();
}
function _normalizeArray(e4) {
  return e4 ? Array.isArray(e4) ? e4 : [e4] : void 0;
}
function murmurhash3_32_gc$1(e4, r4) {
  var n2 = 3 & e4.length, o5 = e4.length - n2, s5 = r4;
  for (r4 = 0; r4 < o5; ) {
    var a6 = 255 & e4.charCodeAt(r4) | (255 & e4.charCodeAt(++r4)) << 8 | (255 & e4.charCodeAt(++r4)) << 16 | (255 & e4.charCodeAt(++r4)) << 24;
    ++r4, s5 = 27492 + (65535 & (s5 = 5 * (65535 & (s5 = (s5 ^= a6 = 461845907 * (65535 & (a6 = (a6 = 3432918353 * (65535 & a6) + ((3432918353 * (a6 >>> 16) & 65535) << 16) & 4294967295) << 15 | a6 >>> 17)) + ((461845907 * (a6 >>> 16) & 65535) << 16) & 4294967295) << 13 | s5 >>> 19)) + ((5 * (s5 >>> 16) & 65535) << 16) & 4294967295)) + (((s5 >>> 16) + 58964 & 65535) << 16);
  }
  switch (a6 = 0, n2) {
    case 3:
      a6 ^= (255 & e4.charCodeAt(r4 + 2)) << 16;
    case 2:
      a6 ^= (255 & e4.charCodeAt(r4 + 1)) << 8;
    case 1:
      s5 ^= 461845907 * (65535 & (a6 = (a6 = 3432918353 * (65535 & (a6 ^= 255 & e4.charCodeAt(r4))) + ((3432918353 * (a6 >>> 16) & 65535) << 16) & 4294967295) << 15 | a6 >>> 17)) + ((461845907 * (a6 >>> 16) & 65535) << 16) & 4294967295;
  }
  return s5 ^= e4.length, s5 = 2246822507 * (65535 & (s5 ^= s5 >>> 16)) + ((2246822507 * (s5 >>> 16) & 65535) << 16) & 4294967295, ((s5 = 3266489909 * (65535 & (s5 ^= s5 >>> 13)) + ((3266489909 * (s5 >>> 16) & 65535) << 16) & 4294967295) ^ s5 >>> 16) >>> 0;
}
function handleErrorInNextTick(e4) {
  setTimeout(function() {
    throw e4;
  });
}
function writeChunk(e4, r4) {
  if (0 !== r4.byteLength) if (2048 < r4.byteLength) 0 < Or && (e4.enqueue(new Uint8Array(Mr.buffer, 0, Or)), Mr = new Uint8Array(2048), Or = 0), e4.enqueue(r4);
  else {
    var n2 = Mr.length - Or;
    n2 < r4.byteLength && (0 === n2 ? e4.enqueue(Mr) : (Mr.set(r4.subarray(0, n2), Or), e4.enqueue(Mr), r4 = r4.subarray(n2)), Mr = new Uint8Array(2048), Or = 0), Mr.set(r4, Or), Or += r4.byteLength;
  }
}
function writeChunkAndReturn(e4, r4) {
  return writeChunk(e4, r4), true;
}
function completeWriting(e4) {
  Mr && 0 < Or && (e4.enqueue(new Uint8Array(Mr.buffer, 0, Or)), Mr = null, Or = 0);
}
function stringToChunk(e4) {
  return Lr.encode(e4);
}
function stringToPrecomputedChunk(e4) {
  return Lr.encode(e4);
}
function closeWithError(e4, r4) {
  "function" == typeof e4.error ? e4.error(r4) : e4.close();
}
function isAttributeNameSafe$1(e4) {
  return !!jr.call(Vr, e4) || !jr.call(zr, e4) && (Dr.test(e4) ? Vr[e4] = true : (zr[e4] = true, false));
}
function escapeTextForBrowser$1(e4) {
  if ("boolean" == typeof e4 || "number" == typeof e4 || "bigint" == typeof e4) return "" + e4;
  e4 = "" + e4;
  var r4 = Ur.exec(e4);
  if (r4) {
    var n2, o5 = "", s5 = 0;
    for (n2 = r4.index; n2 < e4.length; n2++) {
      switch (e4.charCodeAt(n2)) {
        case 34:
          r4 = "&quot;";
          break;
        case 38:
          r4 = "&amp;";
          break;
        case 39:
          r4 = "&#x27;";
          break;
        case 60:
          r4 = "&lt;";
          break;
        case 62:
          r4 = "&gt;";
          break;
        default:
          continue;
      }
      s5 !== n2 && (o5 += e4.slice(s5, n2)), s5 = n2 + 1, o5 += r4;
    }
    e4 = s5 !== n2 ? o5 + e4.slice(s5, n2) : o5;
  }
  return e4;
}
function sanitizeURL$1(e4) {
  return Jr.test("" + e4) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e4;
}
function scriptReplacer$1(e4, r4, n2, o5) {
  return r4 + ("s" === n2 ? "\\u0073" : "\\u0053") + o5;
}
function createRenderState$1(e4, r4, n2, o5, s5, a6) {
  var i5 = void 0 === r4 ? tn : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser$1(r4) + '">'), l5 = e4.idPrefix;
  n2 = [];
  var u3 = e4.bootstrapScriptContent, c4 = e4.bootstrapScripts, h4 = e4.bootstrapModules;
  if (void 0 !== u3 && n2.push(i5, stringToChunk(("" + u3).replace(cn, scriptReplacer$1)), rn), u3 = [], void 0 !== o5 && (u3.push(hn), u3.push(stringToChunk(("" + JSON.stringify(o5)).replace(cn, scriptReplacer$1))), u3.push(dn)), o5 = s5 ? { preconnects: "", fontPreloads: "", highImagePreloads: "", remainingCapacity: 2 + ("number" == typeof a6 ? a6 : 2e3) } : null, s5 = { placeholderPrefix: stringToPrecomputedChunk(l5 + "P:"), segmentPrefix: stringToPrecomputedChunk(l5 + "S:"), boundaryPrefix: stringToPrecomputedChunk(l5 + "B:"), startInlineScript: i5, preamble: { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }, externalRuntimeScript: null, bootstrapChunks: n2, importMapChunks: u3, onHeaders: s5, headers: o5, resets: { font: {}, dns: {}, connect: { default: {}, anonymous: {}, credentials: {} }, image: {}, style: {} }, charsetChunks: [], viewportChunks: [], hoistableChunks: [], preconnects: /* @__PURE__ */ new Set(), fontPreloads: /* @__PURE__ */ new Set(), highImagePreloads: /* @__PURE__ */ new Set(), styles: /* @__PURE__ */ new Map(), bootstrapScripts: /* @__PURE__ */ new Set(), scripts: /* @__PURE__ */ new Set(), bulkPreloads: /* @__PURE__ */ new Set(), preloads: { images: /* @__PURE__ */ new Map(), stylesheets: /* @__PURE__ */ new Map(), scripts: /* @__PURE__ */ new Map(), moduleScripts: /* @__PURE__ */ new Map() }, nonce: r4, hoistableState: null, stylesToHoist: false }, void 0 !== c4) for (o5 = 0; o5 < c4.length; o5++) {
    var p4 = c4[o5];
    l5 = i5 = void 0, u3 = { rel: "preload", as: "script", fetchPriority: "low", nonce: r4 }, "string" == typeof p4 ? u3.href = a6 = p4 : (u3.href = a6 = p4.src, u3.integrity = l5 = "string" == typeof p4.integrity ? p4.integrity : void 0, u3.crossOrigin = i5 = "string" == typeof p4 || null == p4.crossOrigin ? void 0 : "use-credentials" === p4.crossOrigin ? "use-credentials" : "");
    var g3 = a6;
    (p4 = e4).scriptResources[g3] = null, p4.moduleScriptResources[g3] = null, pushLinkImpl$1(p4 = [], u3), s5.bootstrapScripts.add(p4), n2.push(nn, stringToChunk(escapeTextForBrowser$1(a6))), r4 && n2.push(sn, stringToChunk(escapeTextForBrowser$1(r4))), "string" == typeof l5 && n2.push(an, stringToChunk(escapeTextForBrowser$1(l5))), "string" == typeof i5 && n2.push(ln, stringToChunk(escapeTextForBrowser$1(i5))), n2.push(un);
  }
  if (void 0 !== h4) for (c4 = 0; c4 < h4.length; c4++) i5 = a6 = void 0, l5 = { rel: "modulepreload", fetchPriority: "low", nonce: r4 }, "string" == typeof (u3 = h4[c4]) ? l5.href = o5 = u3 : (l5.href = o5 = u3.src, l5.integrity = i5 = "string" == typeof u3.integrity ? u3.integrity : void 0, l5.crossOrigin = a6 = "string" == typeof u3 || null == u3.crossOrigin ? void 0 : "use-credentials" === u3.crossOrigin ? "use-credentials" : ""), p4 = o5, (u3 = e4).scriptResources[p4] = null, u3.moduleScriptResources[p4] = null, pushLinkImpl$1(u3 = [], l5), s5.bootstrapScripts.add(u3), n2.push(on2, stringToChunk(escapeTextForBrowser$1(o5))), r4 && n2.push(sn, stringToChunk(escapeTextForBrowser$1(r4))), "string" == typeof i5 && n2.push(an, stringToChunk(escapeTextForBrowser$1(i5))), "string" == typeof a6 && n2.push(ln, stringToChunk(escapeTextForBrowser$1(a6))), n2.push(un);
  return s5;
}
function createResumableState$1(e4, r4, n2, o5, s5) {
  return { idPrefix: void 0 === e4 ? "" : e4, nextFormID: 0, streamingFormat: 0, bootstrapScriptContent: n2, bootstrapScripts: o5, bootstrapModules: s5, instructions: 0, hasBody: false, hasHtml: false, unknownResources: {}, dnsResources: {}, connectResources: { default: {}, anonymous: {}, credentials: {} }, imageResources: {}, styleResources: {}, scriptResources: {}, moduleUnknownResources: {}, moduleScriptResources: {} };
}
function createPreambleState$1() {
  return { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 };
}
function createFormatContext$1(e4, r4, n2) {
  return { insertionMode: e4, selectedValue: r4, tagScope: n2 };
}
function createRootFormatContext(e4) {
  return createFormatContext$1("http://www.w3.org/2000/svg" === e4 ? 4 : "http://www.w3.org/1998/Math/MathML" === e4 ? 5 : 0, null, 0);
}
function getChildFormatContext$1(e4, r4, n2) {
  switch (r4) {
    case "noscript":
      return createFormatContext$1(2, null, 1 | e4.tagScope);
    case "select":
      return createFormatContext$1(2, null != n2.value ? n2.value : n2.defaultValue, e4.tagScope);
    case "svg":
      return createFormatContext$1(4, null, e4.tagScope);
    case "picture":
      return createFormatContext$1(2, null, 2 | e4.tagScope);
    case "math":
      return createFormatContext$1(5, null, e4.tagScope);
    case "foreignObject":
      return createFormatContext$1(2, null, e4.tagScope);
    case "table":
      return createFormatContext$1(6, null, e4.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return createFormatContext$1(7, null, e4.tagScope);
    case "colgroup":
      return createFormatContext$1(9, null, e4.tagScope);
    case "tr":
      return createFormatContext$1(8, null, e4.tagScope);
    case "head":
      if (2 > e4.insertionMode) return createFormatContext$1(3, null, e4.tagScope);
      break;
    case "html":
      if (0 === e4.insertionMode) return createFormatContext$1(1, null, e4.tagScope);
  }
  return 6 <= e4.insertionMode || 2 > e4.insertionMode ? createFormatContext$1(2, null, e4.tagScope) : e4;
}
function pushTextInstance$1(e4, r4, n2, o5) {
  return "" === r4 ? o5 : (o5 && e4.push(pn), e4.push(stringToChunk(escapeTextForBrowser$1(r4))), true);
}
function pushStyleAttribute$1(e4, r4) {
  if ("object" != typeof r4) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
  var n2, o5 = true;
  for (n2 in r4) if (jr.call(r4, n2)) {
    var s5 = r4[n2];
    if (null != s5 && "boolean" != typeof s5 && "" !== s5) {
      if (0 === n2.indexOf("--")) {
        var a6 = stringToChunk(escapeTextForBrowser$1(n2));
        s5 = stringToChunk(escapeTextForBrowser$1(("" + s5).trim()));
      } else void 0 === (a6 = fn.get(n2)) && (a6 = stringToPrecomputedChunk(escapeTextForBrowser$1(n2.replace(Kr, "-$1").toLowerCase().replace(Gr, "-ms-"))), fn.set(n2, a6)), s5 = "number" == typeof s5 ? 0 === s5 || qr.has(n2) ? stringToChunk("" + s5) : stringToChunk(s5 + "px") : stringToChunk(escapeTextForBrowser$1(("" + s5).trim()));
      o5 ? (o5 = false, e4.push(mn, a6, gn, s5)) : e4.push(yn, a6, gn, s5);
    }
  }
  o5 || e4.push(kn);
}
function pushBooleanAttribute$1(e4, r4, n2) {
  n2 && "function" != typeof n2 && "symbol" != typeof n2 && e4.push(bn, stringToChunk(r4), Sn);
}
function pushStringAttribute$1(e4, r4, n2) {
  "function" != typeof n2 && "symbol" != typeof n2 && "boolean" != typeof n2 && e4.push(bn, stringToChunk(r4), vn, stringToChunk(escapeTextForBrowser$1(n2)), kn);
}
function pushAdditionalFormField$1(e4, r4) {
  this.push(wn), validateAdditionalFormField$1(e4), pushStringAttribute$1(this, "name", r4), pushStringAttribute$1(this, "value", e4), this.push(xn);
}
function validateAdditionalFormField$1(e4) {
  if ("string" != typeof e4) throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
}
function getCustomFormFields$1(e4, r4) {
  if ("function" == typeof r4.$$FORM_ACTION) {
    var n2 = e4.nextFormID++;
    e4 = e4.idPrefix + n2;
    try {
      var o5 = r4.$$FORM_ACTION(e4);
      if (o5) {
        var s5 = o5.data;
        null != s5 && s5.forEach(validateAdditionalFormField$1);
      }
      return o5;
    } catch (e5) {
      if ("object" == typeof e5 && null !== e5 && "function" == typeof e5.then) throw e5;
    }
  }
  return null;
}
function pushFormActionAttribute$1(e4, r4, n2, o5, s5, a6, i5, l5) {
  var u3 = null;
  if ("function" == typeof o5) {
    var c4 = getCustomFormFields$1(r4, o5);
    null !== c4 ? (l5 = c4.name, o5 = c4.action || "", s5 = c4.encType, a6 = c4.method, i5 = c4.target, u3 = c4.data) : (e4.push(bn, stringToChunk("formAction"), vn, Cn, kn), i5 = a6 = s5 = o5 = l5 = null, injectFormReplayingRuntime$1(r4, n2));
  }
  return null != l5 && pushAttribute$1(e4, "name", l5), null != o5 && pushAttribute$1(e4, "formAction", o5), null != s5 && pushAttribute$1(e4, "formEncType", s5), null != a6 && pushAttribute$1(e4, "formMethod", a6), null != i5 && pushAttribute$1(e4, "formTarget", i5), u3;
}
function pushAttribute$1(e4, r4, n2) {
  switch (r4) {
    case "className":
      pushStringAttribute$1(e4, "class", n2);
      break;
    case "tabIndex":
      pushStringAttribute$1(e4, "tabindex", n2);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      pushStringAttribute$1(e4, r4, n2);
      break;
    case "style":
      pushStyleAttribute$1(e4, n2);
      break;
    case "src":
    case "href":
      if ("" === n2) break;
    case "action":
    case "formAction":
      if (null == n2 || "function" == typeof n2 || "symbol" == typeof n2 || "boolean" == typeof n2) break;
      n2 = sanitizeURL$1("" + n2), e4.push(bn, stringToChunk(r4), vn, stringToChunk(escapeTextForBrowser$1(n2)), kn);
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      pushBooleanAttribute$1(e4, r4.toLowerCase(), n2);
      break;
    case "xlinkHref":
      if ("function" == typeof n2 || "symbol" == typeof n2 || "boolean" == typeof n2) break;
      n2 = sanitizeURL$1("" + n2), e4.push(bn, stringToChunk("xlink:href"), vn, stringToChunk(escapeTextForBrowser$1(n2)), kn);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      "function" != typeof n2 && "symbol" != typeof n2 && e4.push(bn, stringToChunk(r4), vn, stringToChunk(escapeTextForBrowser$1(n2)), kn);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      n2 && "function" != typeof n2 && "symbol" != typeof n2 && e4.push(bn, stringToChunk(r4), Sn);
      break;
    case "capture":
    case "download":
      true === n2 ? e4.push(bn, stringToChunk(r4), Sn) : false !== n2 && "function" != typeof n2 && "symbol" != typeof n2 && e4.push(bn, stringToChunk(r4), vn, stringToChunk(escapeTextForBrowser$1(n2)), kn);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      "function" != typeof n2 && "symbol" != typeof n2 && !isNaN(n2) && 1 <= n2 && e4.push(bn, stringToChunk(r4), vn, stringToChunk(escapeTextForBrowser$1(n2)), kn);
      break;
    case "rowSpan":
    case "start":
      "function" == typeof n2 || "symbol" == typeof n2 || isNaN(n2) || e4.push(bn, stringToChunk(r4), vn, stringToChunk(escapeTextForBrowser$1(n2)), kn);
      break;
    case "xlinkActuate":
      pushStringAttribute$1(e4, "xlink:actuate", n2);
      break;
    case "xlinkArcrole":
      pushStringAttribute$1(e4, "xlink:arcrole", n2);
      break;
    case "xlinkRole":
      pushStringAttribute$1(e4, "xlink:role", n2);
      break;
    case "xlinkShow":
      pushStringAttribute$1(e4, "xlink:show", n2);
      break;
    case "xlinkTitle":
      pushStringAttribute$1(e4, "xlink:title", n2);
      break;
    case "xlinkType":
      pushStringAttribute$1(e4, "xlink:type", n2);
      break;
    case "xmlBase":
      pushStringAttribute$1(e4, "xml:base", n2);
      break;
    case "xmlLang":
      pushStringAttribute$1(e4, "xml:lang", n2);
      break;
    case "xmlSpace":
      pushStringAttribute$1(e4, "xml:space", n2);
      break;
    default:
      if ((!(2 < r4.length) || "o" !== r4[0] && "O" !== r4[0] || "n" !== r4[1] && "N" !== r4[1]) && isAttributeNameSafe$1(r4 = Wr.get(r4) || r4)) {
        switch (typeof n2) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var o5 = r4.toLowerCase().slice(0, 5);
            if ("data-" !== o5 && "aria-" !== o5) return;
        }
        e4.push(bn, stringToChunk(r4), vn, stringToChunk(escapeTextForBrowser$1(n2)), kn);
      }
  }
}
function pushInnerHTML$1(e4, r4, n2) {
  if (null != r4) {
    if (null != n2) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
    if ("object" != typeof r4 || !("__html" in r4)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
    null != (r4 = r4.__html) && e4.push(stringToChunk("" + r4));
  }
}
function injectFormReplayingRuntime$1(e4, r4) {
  !(16 & e4.instructions) && (e4.instructions |= 16, r4.bootstrapChunks.unshift(r4.startInlineScript, Tn, rn));
}
function pushLinkImpl$1(e4, r4) {
  for (var n2 in e4.push(startChunkForTag$1("link")), r4) if (jr.call(r4, n2)) {
    var o5 = r4[n2];
    if (null != o5) switch (n2) {
      case "children":
      case "dangerouslySetInnerHTML":
        throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      default:
        pushAttribute$1(e4, n2, o5);
    }
  }
  return e4.push(xn), null;
}
function styleReplacer$1(e4, r4, n2, o5) {
  return r4 + ("s" === n2 ? "\\73 " : "\\53 ") + o5;
}
function pushSelfClosing$1(e4, r4, n2) {
  for (var o5 in e4.push(startChunkForTag$1(n2)), r4) if (jr.call(r4, o5)) {
    var s5 = r4[o5];
    if (null != s5) switch (o5) {
      case "children":
      case "dangerouslySetInnerHTML":
        throw Error(n2 + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      default:
        pushAttribute$1(e4, o5, s5);
    }
  }
  return e4.push(xn), null;
}
function pushTitleImpl$1(e4, r4) {
  e4.push(startChunkForTag$1("title"));
  var n2, o5 = null, s5 = null;
  for (n2 in r4) if (jr.call(r4, n2)) {
    var a6 = r4[n2];
    if (null != a6) switch (n2) {
      case "children":
        o5 = a6;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a6;
        break;
      default:
        pushAttribute$1(e4, n2, a6);
    }
  }
  return e4.push(Pn), "function" != typeof (r4 = Array.isArray(o5) ? 2 > o5.length ? o5[0] : null : o5) && "symbol" != typeof r4 && null != r4 && e4.push(stringToChunk(escapeTextForBrowser$1("" + r4))), pushInnerHTML$1(e4, s5, o5), e4.push(endChunkForTag$1("title")), null;
}
function pushScriptImpl$1(e4, r4) {
  e4.push(startChunkForTag$1("script"));
  var n2, o5 = null, s5 = null;
  for (n2 in r4) if (jr.call(r4, n2)) {
    var a6 = r4[n2];
    if (null != a6) switch (n2) {
      case "children":
        o5 = a6;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a6;
        break;
      default:
        pushAttribute$1(e4, n2, a6);
    }
  }
  return e4.push(Pn), pushInnerHTML$1(e4, s5, o5), "string" == typeof o5 && e4.push(stringToChunk(("" + o5).replace(cn, scriptReplacer$1))), e4.push(endChunkForTag$1("script")), null;
}
function pushStartSingletonElement$1(e4, r4, n2) {
  e4.push(startChunkForTag$1(n2));
  var o5, s5 = n2 = null;
  for (o5 in r4) if (jr.call(r4, o5)) {
    var a6 = r4[o5];
    if (null != a6) switch (o5) {
      case "children":
        n2 = a6;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a6;
        break;
      default:
        pushAttribute$1(e4, o5, a6);
    }
  }
  return e4.push(Pn), pushInnerHTML$1(e4, s5, n2), n2;
}
function pushStartGenericElement$1(e4, r4, n2) {
  e4.push(startChunkForTag$1(n2));
  var o5, s5 = n2 = null;
  for (o5 in r4) if (jr.call(r4, o5)) {
    var a6 = r4[o5];
    if (null != a6) switch (o5) {
      case "children":
        n2 = a6;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a6;
        break;
      default:
        pushAttribute$1(e4, o5, a6);
    }
  }
  return e4.push(Pn), pushInnerHTML$1(e4, s5, n2), "string" == typeof n2 ? (e4.push(stringToChunk(escapeTextForBrowser$1(n2))), null) : n2;
}
function startChunkForTag$1(e4) {
  var r4 = An.get(e4);
  if (void 0 === r4) {
    if (!_n.test(e4)) throw Error("Invalid tag: " + e4);
    r4 = stringToPrecomputedChunk("<" + e4), An.set(e4, r4);
  }
  return r4;
}
function pushStartInstance$1(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4) {
  switch (r4) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "g":
    case "p":
    case "li":
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "a":
      e4.push(startChunkForTag$1("a"));
      var h4, p4 = null, g3 = null;
      for (h4 in n2) if (jr.call(n2, h4)) {
        var y3 = n2[h4];
        if (null != y3) switch (h4) {
          case "children":
            p4 = y3;
            break;
          case "dangerouslySetInnerHTML":
            g3 = y3;
            break;
          case "href":
            "" === y3 ? pushStringAttribute$1(e4, "href", "") : pushAttribute$1(e4, h4, y3);
            break;
          default:
            pushAttribute$1(e4, h4, y3);
        }
      }
      if (e4.push(Pn), pushInnerHTML$1(e4, g3, p4), "string" == typeof p4) {
        e4.push(stringToChunk(escapeTextForBrowser$1(p4)));
        var b3 = null;
      } else b3 = p4;
      return b3;
    case "select":
      e4.push(startChunkForTag$1("select"));
      var v3, k4 = null, C4 = null;
      for (v3 in n2) if (jr.call(n2, v3)) {
        var P4 = n2[v3];
        if (null != P4) switch (v3) {
          case "children":
            k4 = P4;
            break;
          case "dangerouslySetInnerHTML":
            C4 = P4;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            pushAttribute$1(e4, v3, P4);
        }
      }
      return e4.push(Pn), pushInnerHTML$1(e4, C4, k4), k4;
    case "option":
      var R4 = l5.selectedValue;
      e4.push(startChunkForTag$1("option"));
      var T4, $3 = null, E4 = null, F4 = null, I4 = null;
      for (T4 in n2) if (jr.call(n2, T4)) {
        var A4 = n2[T4];
        if (null != A4) switch (T4) {
          case "children":
            $3 = A4;
            break;
          case "selected":
            F4 = A4;
            break;
          case "dangerouslySetInnerHTML":
            I4 = A4;
            break;
          case "value":
            E4 = A4;
          default:
            pushAttribute$1(e4, T4, A4);
        }
      }
      if (null != R4) {
        var O4 = null !== E4 ? "" + E4 : function(e5) {
          var r5 = "";
          return lr.Children.forEach(e5, function(e6) {
            null != e6 && (r5 += e6);
          }), r5;
        }($3);
        if (Ir(R4)) {
          for (var N4 = 0; N4 < R4.length; N4++) if ("" + R4[N4] === O4) {
            e4.push(Rn);
            break;
          }
        } else "" + R4 === O4 && e4.push(Rn);
      } else F4 && e4.push(Rn);
      return e4.push(Pn), pushInnerHTML$1(e4, I4, $3), $3;
    case "textarea":
      e4.push(startChunkForTag$1("textarea"));
      var B3, D4 = null, H3 = null, V4 = null;
      for (B3 in n2) if (jr.call(n2, B3)) {
        var q3 = n2[B3];
        if (null != q3) switch (B3) {
          case "children":
            V4 = q3;
            break;
          case "value":
            D4 = q3;
            break;
          case "defaultValue":
            H3 = q3;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
          default:
            pushAttribute$1(e4, B3, q3);
        }
      }
      if (null === D4 && null !== H3 && (D4 = H3), e4.push(Pn), null != V4) {
        if (null != D4) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Ir(V4)) {
          if (1 < V4.length) throw Error("<textarea> can only have at most one child.");
          D4 = "" + V4[0];
        }
        D4 = "" + V4;
      }
      return "string" == typeof D4 && "\n" === D4[0] && e4.push(In), null !== D4 && e4.push(stringToChunk(escapeTextForBrowser$1("" + D4))), null;
    case "input":
      e4.push(startChunkForTag$1("input"));
      var W4, G3 = null, X4 = null, Q3 = null, Y4 = null, Z3 = null, ee3 = null, te3 = null, re3 = null, ne3 = null;
      for (W4 in n2) if (jr.call(n2, W4)) {
        var oe3 = n2[W4];
        if (null != oe3) switch (W4) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          case "name":
            G3 = oe3;
            break;
          case "formAction":
            X4 = oe3;
            break;
          case "formEncType":
            Q3 = oe3;
            break;
          case "formMethod":
            Y4 = oe3;
            break;
          case "formTarget":
            Z3 = oe3;
            break;
          case "defaultChecked":
            ne3 = oe3;
            break;
          case "defaultValue":
            te3 = oe3;
            break;
          case "checked":
            re3 = oe3;
            break;
          case "value":
            ee3 = oe3;
            break;
          default:
            pushAttribute$1(e4, W4, oe3);
        }
      }
      var ae3 = pushFormActionAttribute$1(e4, o5, s5, X4, Q3, Y4, Z3, G3);
      return null !== re3 ? pushBooleanAttribute$1(e4, "checked", re3) : null !== ne3 && pushBooleanAttribute$1(e4, "checked", ne3), null !== ee3 ? pushAttribute$1(e4, "value", ee3) : null !== te3 && pushAttribute$1(e4, "value", te3), e4.push(xn), null != ae3 && ae3.forEach(pushAdditionalFormField$1, e4), null;
    case "button":
      e4.push(startChunkForTag$1("button"));
      var ie3, le3 = null, ue3 = null, ce3 = null, he3 = null, de3 = null, pe3 = null, ge3 = null;
      for (ie3 in n2) if (jr.call(n2, ie3)) {
        var ye3 = n2[ie3];
        if (null != ye3) switch (ie3) {
          case "children":
            le3 = ye3;
            break;
          case "dangerouslySetInnerHTML":
            ue3 = ye3;
            break;
          case "name":
            ce3 = ye3;
            break;
          case "formAction":
            he3 = ye3;
            break;
          case "formEncType":
            de3 = ye3;
            break;
          case "formMethod":
            pe3 = ye3;
            break;
          case "formTarget":
            ge3 = ye3;
            break;
          default:
            pushAttribute$1(e4, ie3, ye3);
        }
      }
      var be3 = pushFormActionAttribute$1(e4, o5, s5, he3, de3, pe3, ge3, ce3);
      if (e4.push(Pn), null != be3 && be3.forEach(pushAdditionalFormField$1, e4), pushInnerHTML$1(e4, ue3, le3), "string" == typeof le3) {
        e4.push(stringToChunk(escapeTextForBrowser$1(le3)));
        var ve3 = null;
      } else ve3 = le3;
      return ve3;
    case "form":
      e4.push(startChunkForTag$1("form"));
      var ke3, Se3 = null, Ce3 = null, we3 = null, Pe3 = null, xe3 = null, Re3 = null;
      for (ke3 in n2) if (jr.call(n2, ke3)) {
        var Te3 = n2[ke3];
        if (null != Te3) switch (ke3) {
          case "children":
            Se3 = Te3;
            break;
          case "dangerouslySetInnerHTML":
            Ce3 = Te3;
            break;
          case "action":
            we3 = Te3;
            break;
          case "encType":
            Pe3 = Te3;
            break;
          case "method":
            xe3 = Te3;
            break;
          case "target":
            Re3 = Te3;
            break;
          default:
            pushAttribute$1(e4, ke3, Te3);
        }
      }
      var $e3 = null, Ee3 = null;
      if ("function" == typeof we3) {
        var Fe3 = getCustomFormFields$1(o5, we3);
        null !== Fe3 ? (we3 = Fe3.action || "", Pe3 = Fe3.encType, xe3 = Fe3.method, Re3 = Fe3.target, $e3 = Fe3.data, Ee3 = Fe3.name) : (e4.push(bn, stringToChunk("action"), vn, Cn, kn), Re3 = xe3 = Pe3 = we3 = null, injectFormReplayingRuntime$1(o5, s5));
      }
      if (null != we3 && pushAttribute$1(e4, "action", we3), null != Pe3 && pushAttribute$1(e4, "encType", Pe3), null != xe3 && pushAttribute$1(e4, "method", xe3), null != Re3 && pushAttribute$1(e4, "target", Re3), e4.push(Pn), null !== Ee3 && (e4.push(wn), pushStringAttribute$1(e4, "name", Ee3), e4.push(xn), null != $e3 && $e3.forEach(pushAdditionalFormField$1, e4)), pushInnerHTML$1(e4, Ce3, Se3), "string" == typeof Se3) {
        e4.push(stringToChunk(escapeTextForBrowser$1(Se3)));
        var Ie3 = null;
      } else Ie3 = Se3;
      return Ie3;
    case "menuitem":
      for (var _e3 in e4.push(startChunkForTag$1("menuitem")), n2) if (jr.call(n2, _e3)) {
        var Ae3 = n2[_e3];
        if (null != Ae3) switch (_e3) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
          default:
            pushAttribute$1(e4, _e3, Ae3);
        }
      }
      return e4.push(Pn), null;
    case "object":
      e4.push(startChunkForTag$1("object"));
      var Me3, Oe3 = null, Ne3 = null;
      for (Me3 in n2) if (jr.call(n2, Me3)) {
        var Be3 = n2[Me3];
        if (null != Be3) switch (Me3) {
          case "children":
            Oe3 = Be3;
            break;
          case "dangerouslySetInnerHTML":
            Ne3 = Be3;
            break;
          case "data":
            var De3 = sanitizeURL$1("" + Be3);
            if ("" === De3) break;
            e4.push(bn, stringToChunk("data"), vn, stringToChunk(escapeTextForBrowser$1(De3)), kn);
            break;
          default:
            pushAttribute$1(e4, Me3, Be3);
        }
      }
      if (e4.push(Pn), pushInnerHTML$1(e4, Ne3, Oe3), "string" == typeof Oe3) {
        e4.push(stringToChunk(escapeTextForBrowser$1(Oe3)));
        var ze3 = null;
      } else ze3 = Oe3;
      return ze3;
    case "title":
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp) var He3 = pushTitleImpl$1(e4, n2);
      else c4 ? He3 = null : (pushTitleImpl$1(s5.hoistableChunks, n2), He3 = void 0);
      return He3;
    case "link":
      var Ve3 = n2.rel, qe3 = n2.href, We3 = n2.precedence;
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp || "string" != typeof Ve3 || "string" != typeof qe3 || "" === qe3) {
        pushLinkImpl$1(e4, n2);
        var Ue3 = null;
      } else if ("stylesheet" === n2.rel) if ("string" != typeof We3 || null != n2.disabled || n2.onLoad || n2.onError) Ue3 = pushLinkImpl$1(e4, n2);
      else {
        var Ke3 = s5.styles.get(We3), Ge3 = o5.styleResources.hasOwnProperty(qe3) ? o5.styleResources[qe3] : void 0;
        if (null !== Ge3) {
          o5.styleResources[qe3] = null, Ke3 || (Ke3 = { precedence: stringToChunk(escapeTextForBrowser$1(We3)), rules: [], hrefs: [], sheets: /* @__PURE__ */ new Map() }, s5.styles.set(We3, Ke3));
          var Je3 = { state: 0, props: Br({}, n2, { "data-precedence": n2.precedence, precedence: null }) };
          if (Ge3) {
            2 === Ge3.length && adoptPreloadCredentials$1(Je3.props, Ge3);
            var Xe3 = s5.preloads.stylesheets.get(qe3);
            Xe3 && 0 < Xe3.length ? Xe3.length = 0 : Je3.state = 1;
          }
          Ke3.sheets.set(qe3, Je3), i5 && i5.stylesheets.add(Je3);
        } else if (Ke3) {
          var Qe3 = Ke3.sheets.get(qe3);
          Qe3 && i5 && i5.stylesheets.add(Qe3);
        }
        u3 && e4.push(pn), Ue3 = null;
      }
      else n2.onLoad || n2.onError ? Ue3 = pushLinkImpl$1(e4, n2) : (u3 && e4.push(pn), Ue3 = c4 ? null : pushLinkImpl$1(s5.hoistableChunks, n2));
      return Ue3;
    case "script":
      var Ze3 = n2.async;
      if ("string" != typeof n2.src || !n2.src || !Ze3 || "function" == typeof Ze3 || "symbol" == typeof Ze3 || n2.onLoad || n2.onError || 4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp) var et3 = pushScriptImpl$1(e4, n2);
      else {
        var tt3 = n2.src;
        if ("module" === n2.type) var rt3 = o5.moduleScriptResources, nt3 = s5.preloads.moduleScripts;
        else rt3 = o5.scriptResources, nt3 = s5.preloads.scripts;
        var ot3 = rt3.hasOwnProperty(tt3) ? rt3[tt3] : void 0;
        if (null !== ot3) {
          rt3[tt3] = null;
          var st3 = n2;
          if (ot3) {
            2 === ot3.length && adoptPreloadCredentials$1(st3 = Br({}, n2), ot3);
            var at3 = nt3.get(tt3);
            at3 && (at3.length = 0);
          }
          var it3 = [];
          s5.scripts.add(it3), pushScriptImpl$1(it3, st3);
        }
        u3 && e4.push(pn), et3 = null;
      }
      return et3;
    case "style":
      var lt3 = n2.precedence, ut3 = n2.href;
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp || "string" != typeof lt3 || "string" != typeof ut3 || "" === ut3) {
        e4.push(startChunkForTag$1("style"));
        var ct3, ht3 = null, dt3 = null;
        for (ct3 in n2) if (jr.call(n2, ct3)) {
          var pt3 = n2[ct3];
          if (null != pt3) switch (ct3) {
            case "children":
              ht3 = pt3;
              break;
            case "dangerouslySetInnerHTML":
              dt3 = pt3;
              break;
            default:
              pushAttribute$1(e4, ct3, pt3);
          }
        }
        e4.push(Pn);
        var ft3 = Array.isArray(ht3) ? 2 > ht3.length ? ht3[0] : null : ht3;
        "function" != typeof ft3 && "symbol" != typeof ft3 && null != ft3 && e4.push(stringToChunk(("" + ft3).replace(Fn, styleReplacer$1))), pushInnerHTML$1(e4, dt3, ht3), e4.push(endChunkForTag$1("style"));
        var mt3 = null;
      } else {
        var gt3 = s5.styles.get(lt3);
        if (null !== (o5.styleResources.hasOwnProperty(ut3) ? o5.styleResources[ut3] : void 0)) {
          o5.styleResources[ut3] = null, gt3 ? gt3.hrefs.push(stringToChunk(escapeTextForBrowser$1(ut3))) : (gt3 = { precedence: stringToChunk(escapeTextForBrowser$1(lt3)), rules: [], hrefs: [stringToChunk(escapeTextForBrowser$1(ut3))], sheets: /* @__PURE__ */ new Map() }, s5.styles.set(lt3, gt3));
          var yt3, bt3 = gt3.rules, vt3 = null, kt3 = null;
          for (yt3 in n2) if (jr.call(n2, yt3)) {
            var St3 = n2[yt3];
            if (null != St3) switch (yt3) {
              case "children":
                vt3 = St3;
                break;
              case "dangerouslySetInnerHTML":
                kt3 = St3;
            }
          }
          var Ct3 = Array.isArray(vt3) ? 2 > vt3.length ? vt3[0] : null : vt3;
          "function" != typeof Ct3 && "symbol" != typeof Ct3 && null != Ct3 && bt3.push(stringToChunk(("" + Ct3).replace(Fn, styleReplacer$1))), pushInnerHTML$1(bt3, kt3, vt3);
        }
        gt3 && i5 && i5.styles.add(gt3), u3 && e4.push(pn), mt3 = void 0;
      }
      return mt3;
    case "meta":
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp) var wt3 = pushSelfClosing$1(e4, n2, "meta");
      else u3 && e4.push(pn), wt3 = c4 ? null : "string" == typeof n2.charSet ? pushSelfClosing$1(s5.charsetChunks, n2, "meta") : "viewport" === n2.name ? pushSelfClosing$1(s5.viewportChunks, n2, "meta") : pushSelfClosing$1(s5.hoistableChunks, n2, "meta");
      return wt3;
    case "listing":
    case "pre":
      e4.push(startChunkForTag$1(r4));
      var Pt3, xt3 = null, Rt3 = null;
      for (Pt3 in n2) if (jr.call(n2, Pt3)) {
        var Tt3 = n2[Pt3];
        if (null != Tt3) switch (Pt3) {
          case "children":
            xt3 = Tt3;
            break;
          case "dangerouslySetInnerHTML":
            Rt3 = Tt3;
            break;
          default:
            pushAttribute$1(e4, Pt3, Tt3);
        }
      }
      if (e4.push(Pn), null != Rt3) {
        if (null != xt3) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" != typeof Rt3 || !("__html" in Rt3)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
        var $t3 = Rt3.__html;
        null != $t3 && ("string" == typeof $t3 && 0 < $t3.length && "\n" === $t3[0] ? e4.push(In, stringToChunk($t3)) : e4.push(stringToChunk("" + $t3)));
      }
      return "string" == typeof xt3 && "\n" === xt3[0] && e4.push(In), xt3;
    case "img":
      var Et3 = n2.src, Ft3 = n2.srcSet;
      if (!("lazy" === n2.loading || !Et3 && !Ft3 || "string" != typeof Et3 && null != Et3 || "string" != typeof Ft3 && null != Ft3) && "low" !== n2.fetchPriority && false == !!(3 & l5.tagScope) && ("string" != typeof Et3 || ":" !== Et3[4] || "d" !== Et3[0] && "D" !== Et3[0] || "a" !== Et3[1] && "A" !== Et3[1] || "t" !== Et3[2] && "T" !== Et3[2] || "a" !== Et3[3] && "A" !== Et3[3]) && ("string" != typeof Ft3 || ":" !== Ft3[4] || "d" !== Ft3[0] && "D" !== Ft3[0] || "a" !== Ft3[1] && "A" !== Ft3[1] || "t" !== Ft3[2] && "T" !== Ft3[2] || "a" !== Ft3[3] && "A" !== Ft3[3])) {
        var It3 = "string" == typeof n2.sizes ? n2.sizes : void 0, _t3 = Ft3 ? Ft3 + "\n" + (It3 || "") : Et3, At3 = s5.preloads.images, Mt3 = At3.get(_t3);
        if (Mt3) ("high" === n2.fetchPriority || 10 > s5.highImagePreloads.size) && (At3.delete(_t3), s5.highImagePreloads.add(Mt3));
        else if (!o5.imageResources.hasOwnProperty(_t3)) {
          o5.imageResources[_t3] = en;
          var Ot3, Lt3 = n2.crossOrigin, Nt3 = "string" == typeof Lt3 ? "use-credentials" === Lt3 ? Lt3 : "" : void 0, Bt3 = s5.headers;
          Bt3 && 0 < Bt3.remainingCapacity && "string" != typeof n2.srcSet && ("high" === n2.fetchPriority || 500 > Bt3.highImagePreloads.length) && (Ot3 = getPreloadAsHeader$1(Et3, "image", { imageSrcSet: n2.srcSet, imageSizes: n2.sizes, crossOrigin: Nt3, integrity: n2.integrity, nonce: n2.nonce, type: n2.type, fetchPriority: n2.fetchPriority, referrerPolicy: n2.refererPolicy }), 0 <= (Bt3.remainingCapacity -= Ot3.length + 2)) ? (s5.resets.image[_t3] = en, Bt3.highImagePreloads && (Bt3.highImagePreloads += ", "), Bt3.highImagePreloads += Ot3) : (pushLinkImpl$1(Mt3 = [], { rel: "preload", as: "image", href: Ft3 ? void 0 : Et3, imageSrcSet: Ft3, imageSizes: It3, crossOrigin: Nt3, integrity: n2.integrity, type: n2.type, fetchPriority: n2.fetchPriority, referrerPolicy: n2.referrerPolicy }), "high" === n2.fetchPriority || 10 > s5.highImagePreloads.size ? s5.highImagePreloads.add(Mt3) : (s5.bulkPreloads.add(Mt3), At3.set(_t3, Mt3)));
        }
      }
      return pushSelfClosing$1(e4, n2, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return pushSelfClosing$1(e4, n2, r4);
    case "head":
      if (2 > l5.insertionMode) {
        var jt3 = a6 || s5.preamble;
        if (jt3.headChunks) throw Error("The `<head>` tag may only be rendered once.");
        jt3.headChunks = [];
        var Dt3 = pushStartSingletonElement$1(jt3.headChunks, n2, "head");
      } else Dt3 = pushStartGenericElement$1(e4, n2, "head");
      return Dt3;
    case "body":
      if (2 > l5.insertionMode) {
        var zt3 = a6 || s5.preamble;
        if (zt3.bodyChunks) throw Error("The `<body>` tag may only be rendered once.");
        zt3.bodyChunks = [];
        var Ht3 = pushStartSingletonElement$1(zt3.bodyChunks, n2, "body");
      } else Ht3 = pushStartGenericElement$1(e4, n2, "body");
      return Ht3;
    case "html":
      if (0 === l5.insertionMode) {
        var Vt3 = a6 || s5.preamble;
        if (Vt3.htmlChunks) throw Error("The `<html>` tag may only be rendered once.");
        Vt3.htmlChunks = [Mn];
        var qt3 = pushStartSingletonElement$1(Vt3.htmlChunks, n2, "html");
      } else qt3 = pushStartGenericElement$1(e4, n2, "html");
      return qt3;
    default:
      if (-1 !== r4.indexOf("-")) {
        e4.push(startChunkForTag$1(r4));
        var Wt3, Ut3 = null, Kt3 = null;
        for (Wt3 in n2) if (jr.call(n2, Wt3)) {
          var Gt3 = n2[Wt3];
          if (null != Gt3) {
            var Jt3 = Wt3;
            switch (Wt3) {
              case "children":
                Ut3 = Gt3;
                break;
              case "dangerouslySetInnerHTML":
                Kt3 = Gt3;
                break;
              case "style":
                pushStyleAttribute$1(e4, Gt3);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "ref":
                break;
              case "className":
                Jt3 = "class";
              default:
                if (isAttributeNameSafe$1(Wt3) && "function" != typeof Gt3 && "symbol" != typeof Gt3 && false !== Gt3) {
                  if (true === Gt3) Gt3 = "";
                  else if ("object" == typeof Gt3) continue;
                  e4.push(bn, stringToChunk(Jt3), vn, stringToChunk(escapeTextForBrowser$1(Gt3)), kn);
                }
            }
          }
        }
        return e4.push(Pn), pushInnerHTML$1(e4, Kt3, Ut3), Ut3;
      }
  }
  return pushStartGenericElement$1(e4, n2, r4);
}
function endChunkForTag$1(e4) {
  var r4 = On.get(e4);
  return void 0 === r4 && (r4 = stringToPrecomputedChunk("</" + e4 + ">"), On.set(e4, r4)), r4;
}
function hoistPreambleState$1(e4, r4) {
  null === (e4 = e4.preamble).htmlChunks && r4.htmlChunks && (e4.htmlChunks = r4.htmlChunks, r4.contribution |= 1), null === e4.headChunks && r4.headChunks && (e4.headChunks = r4.headChunks, r4.contribution |= 4), null === e4.bodyChunks && r4.bodyChunks && (e4.bodyChunks = r4.bodyChunks, r4.contribution |= 2);
}
function writeBootstrap$1(e4, r4) {
  r4 = r4.bootstrapChunks;
  for (var n2 = 0; n2 < r4.length - 1; n2++) writeChunk(e4, r4[n2]);
  return !(n2 < r4.length) || (n2 = r4[n2], r4.length = 0, writeChunkAndReturn(e4, n2));
}
function writeStartPendingSuspenseBoundary$1(e4, r4, n2) {
  if (writeChunk(e4, jn), null === n2) throw Error("An ID must have been assigned before we can complete the boundary.");
  return writeChunk(e4, r4.boundaryPrefix), writeChunk(e4, stringToChunk(n2.toString(16))), writeChunkAndReturn(e4, Dn);
}
function writePreambleContribution$1(e4, r4) {
  0 !== (r4 = r4.contribution) && (writeChunk(e4, Kn), writeChunk(e4, stringToChunk("" + r4)), writeChunk(e4, Gn));
}
function escapeJSStringsForInstructionScripts$1(e4) {
  return JSON.stringify(e4).replace(Oo, function(e5) {
    switch (e5) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function escapeJSObjectForInstructionScripts$1(e4) {
  return JSON.stringify(e4).replace(Lo, function(e5) {
    switch (e5) {
      case "&":
        return "\\u0026";
      case ">":
        return "\\u003e";
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function flushStyleTagsLateForBoundary$1(e4) {
  var r4 = e4.rules, n2 = e4.hrefs, o5 = 0;
  if (n2.length) {
    for (writeChunk(this, No), writeChunk(this, e4.precedence), writeChunk(this, Bo); o5 < n2.length - 1; o5++) writeChunk(this, n2[o5]), writeChunk(this, Uo);
    for (writeChunk(this, n2[o5]), writeChunk(this, jo), o5 = 0; o5 < r4.length; o5++) writeChunk(this, r4[o5]);
    Ho = writeChunkAndReturn(this, Do), zo = true, r4.length = 0, n2.length = 0;
  }
}
function hasStylesToHoist$1(e4) {
  return 2 !== e4.state && (zo = true);
}
function writeHoistablesForBoundary$1(e4, r4, n2) {
  return zo = false, Ho = true, r4.styles.forEach(flushStyleTagsLateForBoundary$1, e4), r4.stylesheets.forEach(hasStylesToHoist$1), zo && (n2.stylesToHoist = true), Ho;
}
function flushResource$1(e4) {
  for (var r4 = 0; r4 < e4.length; r4++) writeChunk(this, e4[r4]);
  e4.length = 0;
}
function flushStyleInPreamble$1(e4) {
  pushLinkImpl$1(Vo, e4.props);
  for (var r4 = 0; r4 < Vo.length; r4++) writeChunk(this, Vo[r4]);
  Vo.length = 0, e4.state = 2;
}
function flushStylesInPreamble$1(e4) {
  var r4 = 0 < e4.sheets.size;
  e4.sheets.forEach(flushStyleInPreamble$1, this), e4.sheets.clear();
  var n2 = e4.rules, o5 = e4.hrefs;
  if (!r4 || o5.length) {
    if (writeChunk(this, qo), writeChunk(this, e4.precedence), e4 = 0, o5.length) {
      for (writeChunk(this, Wo); e4 < o5.length - 1; e4++) writeChunk(this, o5[e4]), writeChunk(this, Uo);
      writeChunk(this, o5[e4]);
    }
    for (writeChunk(this, Ko), e4 = 0; e4 < n2.length; e4++) writeChunk(this, n2[e4]);
    writeChunk(this, Go), n2.length = 0, o5.length = 0;
  }
}
function preloadLateStyle$1(e4) {
  if (0 === e4.state) {
    e4.state = 1;
    var r4 = e4.props;
    for (pushLinkImpl$1(Vo, { rel: "preload", as: "style", href: e4.props.href, crossOrigin: r4.crossOrigin, fetchPriority: r4.fetchPriority, integrity: r4.integrity, media: r4.media, hrefLang: r4.hrefLang, referrerPolicy: r4.referrerPolicy }), e4 = 0; e4 < Vo.length; e4++) writeChunk(this, Vo[e4]);
    Vo.length = 0;
  }
}
function preloadLateStyles$1(e4) {
  e4.sheets.forEach(preloadLateStyle$1, this), e4.sheets.clear();
}
function writeStyleResourceAttributeInJS$1(e4, r4, n2) {
  var o5 = r4.toLowerCase();
  switch (typeof n2) {
    case "function":
    case "symbol":
      return;
  }
  switch (r4) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      o5 = "class", r4 = "" + n2;
      break;
    case "hidden":
      if (false === n2) return;
      r4 = "";
      break;
    case "src":
    case "href":
      r4 = "" + (n2 = sanitizeURL$1(n2));
      break;
    default:
      if (2 < r4.length && ("o" === r4[0] || "O" === r4[0]) && ("n" === r4[1] || "N" === r4[1]) || !isAttributeNameSafe$1(r4)) return;
      r4 = "" + n2;
  }
  writeChunk(e4, Qo), writeChunk(e4, stringToChunk(escapeJSObjectForInstructionScripts$1(o5))), writeChunk(e4, Qo), writeChunk(e4, stringToChunk(escapeJSObjectForInstructionScripts$1(r4)));
}
function createHoistableState$1() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
}
function adoptPreloadCredentials$1(e4, r4) {
  null == e4.crossOrigin && (e4.crossOrigin = r4[0]), null == e4.integrity && (e4.integrity = r4[1]);
}
function getPreloadAsHeader$1(e4, r4, n2) {
  for (var o5 in r4 = "<" + (e4 = ("" + e4).replace(Zo, escapeHrefForLinkHeaderURLContextReplacer$1)) + '>; rel=preload; as="' + (r4 = ("" + r4).replace(es, escapeStringForLinkHeaderQuotedParamValueContextReplacer$1)) + '"', n2) jr.call(n2, o5) && ("string" == typeof (e4 = n2[o5]) && (r4 += "; " + o5.toLowerCase() + '="' + ("" + e4).replace(es, escapeStringForLinkHeaderQuotedParamValueContextReplacer$1) + '"'));
  return r4;
}
function escapeHrefForLinkHeaderURLContextReplacer$1(e4) {
  switch (e4) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case "\n":
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function escapeStringForLinkHeaderQuotedParamValueContextReplacer$1(e4) {
  switch (e4) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case "\n":
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function hoistStyleQueueDependency$1(e4) {
  this.styles.add(e4);
}
function hoistStylesheetDependency$1(e4) {
  this.stylesheets.add(e4);
}
function getComponentNameFromType$1(e4) {
  if (null == e4) return null;
  if ("function" == typeof e4) return e4.$$typeof === os ? null : e4.displayName || e4.name || null;
  if ("string" == typeof e4) return e4;
  switch (e4) {
    case pr:
      return "Fragment";
    case gr:
      return "Profiler";
    case mr:
      return "StrictMode";
    case Sr:
      return "Suspense";
    case Cr:
      return "SuspenseList";
    case Rr:
      return "Activity";
  }
  if ("object" == typeof e4) switch (e4.$$typeof) {
    case dr:
      return "Portal";
    case vr:
      return (e4.displayName || "Context") + ".Provider";
    case br:
      return (e4._context.displayName || "Context") + ".Consumer";
    case kr:
      var r4 = e4.render;
      return (e4 = e4.displayName) || (e4 = "" !== (e4 = r4.displayName || r4.name || "") ? "ForwardRef(" + e4 + ")" : "ForwardRef"), e4;
    case wr:
      return null !== (r4 = e4.displayName || null) ? r4 : getComponentNameFromType$1(e4.type) || "Memo";
    case Pr:
      r4 = e4._payload, e4 = e4._init;
      try {
        return getComponentNameFromType$1(e4(r4));
      } catch (e5) {
      }
  }
  return null;
}
function popToNearestCommonAncestor$1(e4, r4) {
  if (e4 !== r4) {
    e4.context._currentValue = e4.parentValue, e4 = e4.parent;
    var n2 = r4.parent;
    if (null === e4) {
      if (null !== n2) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
    } else {
      if (null === n2) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      popToNearestCommonAncestor$1(e4, n2);
    }
    r4.context._currentValue = r4.value;
  }
}
function popAllPrevious$1(e4) {
  e4.context._currentValue = e4.parentValue, null !== (e4 = e4.parent) && popAllPrevious$1(e4);
}
function pushAllNext$1(e4) {
  var r4 = e4.parent;
  null !== r4 && pushAllNext$1(r4), e4.context._currentValue = e4.value;
}
function popPreviousToCommonLevel$1(e4, r4) {
  if (e4.context._currentValue = e4.parentValue, null === (e4 = e4.parent)) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  e4.depth === r4.depth ? popToNearestCommonAncestor$1(e4, r4) : popPreviousToCommonLevel$1(e4, r4);
}
function popNextToCommonLevel$1(e4, r4) {
  var n2 = r4.parent;
  if (null === n2) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  e4.depth === n2.depth ? popToNearestCommonAncestor$1(e4, n2) : popNextToCommonLevel$1(e4, n2), r4.context._currentValue = r4.value;
}
function switchContext$1(e4) {
  var r4 = as;
  r4 !== e4 && (null === r4 ? pushAllNext$1(e4) : null === e4 ? popAllPrevious$1(r4) : r4.depth === e4.depth ? popToNearestCommonAncestor$1(r4, e4) : r4.depth > e4.depth ? popPreviousToCommonLevel$1(r4, e4) : popNextToCommonLevel$1(r4, e4), as = e4);
}
function pushTreeContext$1(e4, r4, n2) {
  var o5 = e4.id;
  e4 = e4.overflow;
  var s5 = 32 - us(o5) - 1;
  o5 &= ~(1 << s5), n2 += 1;
  var a6 = 32 - us(r4) + s5;
  if (30 < a6) {
    var i5 = s5 - s5 % 5;
    return a6 = (o5 & (1 << i5) - 1).toString(32), o5 >>= i5, s5 -= i5, { id: 1 << 32 - us(r4) + s5 | n2 << s5 | o5, overflow: a6 + e4 };
  }
  return { id: 1 << a6 | n2 << s5 | o5, overflow: e4 };
}
function noop$2$1() {
}
function getSuspendedThenable$1() {
  if (null === ps) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
  var e4 = ps;
  return ps = null, e4;
}
function resolveCurrentlyRenderingComponent$1() {
  if (null === ms) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
  return ms;
}
function createHook$1() {
  if (0 < Es) throw Error("Rendered more hooks than during the previous render");
  return { memoizedState: null, queue: null, next: null };
}
function createWorkInProgressHook$1() {
  return null === ks ? null === vs ? (Ss = false, vs = ks = createHook$1()) : (Ss = true, ks = vs) : null === ks.next ? (Ss = false, ks = ks.next = createHook$1()) : (Ss = true, ks = ks.next), ks;
}
function getThenableStateAfterSuspending$1() {
  var e4 = Ts;
  return Ts = null, e4;
}
function resetHooksState$1() {
  bs = ys = gs = ms = null, Cs = false, vs = null, Es = 0, ks = $s = null;
}
function basicStateReducer$1(e4, r4) {
  return "function" == typeof r4 ? r4(e4) : r4;
}
function useReducer$1(e4, r4, n2) {
  if (ms = resolveCurrentlyRenderingComponent$1(), ks = createWorkInProgressHook$1(), Ss) {
    var o5 = ks.queue;
    if (r4 = o5.dispatch, null !== $s && void 0 !== (n2 = $s.get(o5))) {
      $s.delete(o5), o5 = ks.memoizedState;
      do {
        o5 = e4(o5, n2.action), n2 = n2.next;
      } while (null !== n2);
      return ks.memoizedState = o5, [o5, r4];
    }
    return [ks.memoizedState, r4];
  }
  return e4 = e4 === basicStateReducer$1 ? "function" == typeof r4 ? r4() : r4 : void 0 !== n2 ? n2(r4) : r4, ks.memoizedState = e4, e4 = (e4 = ks.queue = { last: null, dispatch: null }).dispatch = dispatchAction$1.bind(null, ms, e4), [ks.memoizedState, e4];
}
function useMemo$1(e4, r4) {
  if (ms = resolveCurrentlyRenderingComponent$1(), r4 = void 0 === r4 ? null : r4, null !== (ks = createWorkInProgressHook$1())) {
    var n2 = ks.memoizedState;
    if (null !== n2 && null !== r4) {
      var o5 = n2[1];
      e: if (null === o5) o5 = false;
      else {
        for (var s5 = 0; s5 < o5.length && s5 < r4.length; s5++) if (!fs(r4[s5], o5[s5])) {
          o5 = false;
          break e;
        }
        o5 = true;
      }
      if (o5) return n2[0];
    }
  }
  return e4 = e4(), ks.memoizedState = [e4, r4], e4;
}
function dispatchAction$1(e4, r4, n2) {
  if (25 <= Es) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
  if (e4 === ms) if (Cs = true, e4 = { action: n2, next: null }, null === $s && ($s = /* @__PURE__ */ new Map()), void 0 === (n2 = $s.get(r4))) $s.set(r4, e4);
  else {
    for (r4 = n2; null !== r4.next; ) r4 = r4.next;
    r4.next = e4;
  }
}
function unsupportedStartTransition$1() {
  throw Error("startTransition cannot be called during server rendering.");
}
function unsupportedSetOptimisticState$1() {
  throw Error("Cannot update optimistic state while rendering.");
}
function useActionState$1(e4, r4, n2) {
  resolveCurrentlyRenderingComponent$1();
  var o5 = Ps++, s5 = ys;
  if ("function" == typeof e4.$$FORM_ACTION) {
    var a6 = null, i5 = bs;
    s5 = s5.formState;
    var l5 = e4.$$IS_SIGNATURE_EQUAL;
    if (null !== s5 && "function" == typeof l5) {
      var u3 = s5[1];
      l5.call(e4, s5[2], s5[3]) && (u3 === (a6 = void 0 !== n2 ? "p" + n2 : "k" + murmurhash3_32_gc$1(JSON.stringify([i5, null, o5]), 0)) && (xs = o5, r4 = s5[0]));
    }
    var c4 = e4.bind(null, r4);
    return e4 = /* @__PURE__ */ __name(function(e5) {
      c4(e5);
    }, "e"), "function" == typeof c4.$$FORM_ACTION && (e4.$$FORM_ACTION = function(e5) {
      e5 = c4.$$FORM_ACTION(e5), void 0 !== n2 && (n2 += "", e5.action = n2);
      var r5 = e5.data;
      return r5 && (null === a6 && (a6 = void 0 !== n2 ? "p" + n2 : "k" + murmurhash3_32_gc$1(JSON.stringify([i5, null, o5]), 0)), r5.append("$ACTION_KEY", a6)), e5;
    }), [r4, e4, false];
  }
  var h4 = e4.bind(null, r4);
  return [r4, function(e5) {
    h4(e5);
  }, false];
}
function unwrapThenable$1(e4) {
  var r4 = Rs;
  return Rs += 1, null === Ts && (Ts = []), function(e5, r5, n2) {
    switch (void 0 === (n2 = e5[n2]) ? e5.push(r5) : n2 !== r5 && (r5.then(noop$2$1, noop$2$1), r5 = n2), r5.status) {
      case "fulfilled":
        return r5.value;
      case "rejected":
        throw r5.reason;
      default:
        switch ("string" == typeof r5.status ? r5.then(noop$2$1, noop$2$1) : ((e5 = r5).status = "pending", e5.then(function(e6) {
          if ("pending" === r5.status) {
            var n3 = r5;
            n3.status = "fulfilled", n3.value = e6;
          }
        }, function(e6) {
          if ("pending" === r5.status) {
            var n3 = r5;
            n3.status = "rejected", n3.reason = e6;
          }
        })), r5.status) {
          case "fulfilled":
            return r5.value;
          case "rejected":
            throw r5.reason;
        }
        throw ps = r5, ds;
    }
  }(Ts, e4, r4);
}
function unsupportedRefresh$1() {
  throw Error("Cache cannot be refreshed during server rendering.");
}
function noop$1$1() {
}
function prepareStackTrace(e4, r4) {
  e4 = (e4.name || "Error") + ": " + (e4.message || "");
  for (var n2 = 0; n2 < r4.length; n2++) e4 += "\n    at " + r4[n2].toString();
  return e4;
}
function describeBuiltInComponentFrame$1(e4) {
  if (void 0 === Fs) try {
    throw Error();
  } catch (e5) {
    var r4 = e5.stack.trim().match(/\n( *(at )?)/);
    Fs = r4 && r4[1] || "", Is = -1 < e5.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e5.stack.indexOf("@") ? "@unknown:0:0" : "";
  }
  return "\n" + Fs + e4 + Is;
}
function describeNativeComponentFrame$1(e4, r4) {
  if (!e4 || Os) return "";
  Os = true;
  var n2 = Error.prepareStackTrace;
  Error.prepareStackTrace = prepareStackTrace;
  try {
    var o5 = { DetermineComponentFrameRoot: /* @__PURE__ */ __name(function() {
      try {
        if (r4) {
          var Fake = /* @__PURE__ */ __name(function() {
            throw Error();
          }, "Fake");
          if (Object.defineProperty(Fake.prototype, "props", { set: /* @__PURE__ */ __name(function() {
            throw Error();
          }, "set") }), "object" == typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (e5) {
              var n3 = e5;
            }
            Reflect.construct(e4, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (e5) {
              n3 = e5;
            }
            e4.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e5) {
            n3 = e5;
          }
          (Fake = e4()) && "function" == typeof Fake.catch && Fake.catch(function() {
          });
        }
      } catch (e5) {
        if (e5 && n3 && "string" == typeof e5.stack) return [e5.stack, n3.stack];
      }
      return [null, null];
    }, "DetermineComponentFrameRoot") };
    o5.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var s5 = Object.getOwnPropertyDescriptor(o5.DetermineComponentFrameRoot, "name");
    s5 && s5.configurable && Object.defineProperty(o5.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
    var a6 = o5.DetermineComponentFrameRoot(), i5 = a6[0], l5 = a6[1];
    if (i5 && l5) {
      var u3 = i5.split("\n"), c4 = l5.split("\n");
      for (s5 = o5 = 0; o5 < u3.length && !u3[o5].includes("DetermineComponentFrameRoot"); ) o5++;
      for (; s5 < c4.length && !c4[s5].includes("DetermineComponentFrameRoot"); ) s5++;
      if (o5 === u3.length || s5 === c4.length) for (o5 = u3.length - 1, s5 = c4.length - 1; 1 <= o5 && 0 <= s5 && u3[o5] !== c4[s5]; ) s5--;
      for (; 1 <= o5 && 0 <= s5; o5--, s5--) if (u3[o5] !== c4[s5]) {
        if (1 !== o5 || 1 !== s5) do {
          if (o5--, 0 > --s5 || u3[o5] !== c4[s5]) {
            var h4 = "\n" + u3[o5].replace(" at new ", " at ");
            return e4.displayName && h4.includes("<anonymous>") && (h4 = h4.replace("<anonymous>", e4.displayName)), h4;
          }
        } while (1 <= o5 && 0 <= s5);
        break;
      }
    }
  } finally {
    Os = false, Error.prepareStackTrace = n2;
  }
  return (n2 = e4 ? e4.displayName || e4.name : "") ? describeBuiltInComponentFrame$1(n2) : "";
}
function describeComponentStackByType$1(e4) {
  if ("string" == typeof e4) return describeBuiltInComponentFrame$1(e4);
  if ("function" == typeof e4) return e4.prototype && e4.prototype.isReactComponent ? describeNativeComponentFrame$1(e4, true) : describeNativeComponentFrame$1(e4, false);
  if ("object" == typeof e4 && null !== e4) {
    switch (e4.$$typeof) {
      case kr:
        return describeNativeComponentFrame$1(e4.render, false);
      case wr:
        return describeNativeComponentFrame$1(e4.type, false);
      case Pr:
        var r4 = e4, n2 = r4._payload;
        r4 = r4._init;
        try {
          e4 = r4(n2);
        } catch (e5) {
          return describeBuiltInComponentFrame$1("Lazy");
        }
        return describeComponentStackByType$1(e4);
    }
    if ("string" == typeof e4.name) return n2 = e4.env, describeBuiltInComponentFrame$1(e4.name + (n2 ? " [" + n2 + "]" : ""));
  }
  switch (e4) {
    case Cr:
      return describeBuiltInComponentFrame$1("SuspenseList");
    case Sr:
      return describeBuiltInComponentFrame$1("Suspense");
  }
  return "";
}
function defaultErrorHandler$1(e4) {
  if ("object" == typeof e4 && null !== e4 && "string" == typeof e4.environmentName) {
    var r4 = e4.environmentName;
    "string" == typeof (e4 = [e4].slice(0))[0] ? e4.splice(0, 1, "\x1B[0m\x1B[7m%c%s\x1B[0m%c " + e4[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + r4 + " ", "") : e4.splice(0, 0, "\x1B[0m\x1B[7m%c%s\x1B[0m%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + r4 + " ", ""), e4.unshift(console), (r4 = ts.apply(console.error, e4))();
  } else console.error(e4);
  return null;
}
function noop$3() {
}
function RequestInstance$1(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4, h4) {
  var p4 = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = false, this.resumableState = e4, this.renderState = r4, this.rootFormatContext = n2, this.progressiveChunkSize = void 0 === o5 ? 12800 : o5, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = p4, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === s5 ? defaultErrorHandler$1 : s5, this.onPostpone = void 0 === c4 ? noop$3 : c4, this.onAllReady = void 0 === a6 ? noop$3 : a6, this.onShellReady = void 0 === i5 ? noop$3 : i5, this.onShellError = void 0 === l5 ? noop$3 : l5, this.onFatalError = void 0 === u3 ? noop$3 : u3, this.formState = void 0 === h4 ? null : h4;
}
function createRequest$1(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4, h4, p4) {
  return (n2 = createPendingSegment$1(r4 = new RequestInstance$1(r4, n2, o5, s5, a6, i5, l5, u3, c4, h4, p4), 0, null, o5, false, false)).parentFlushed = true, pushComponentStack$1(e4 = createRenderTask$1(r4, null, e4, -1, null, n2, null, null, r4.abortableTasks, null, o5, null, ls, null, false)), r4.pingedTasks.push(e4), r4;
}
function resolveRequest() {
  if (Ls) return Ls;
  if (rs) {
    var e4 = ns.getStore();
    if (e4) return e4;
  }
  return null;
}
function pingTask$1(e4, r4) {
  e4.pingedTasks.push(r4), 1 === e4.pingedTasks.length && (e4.flushScheduled = null !== e4.destination, null !== e4.trackedPostpones || 10 === e4.status ? Ar(function() {
    return performWork$1(e4);
  }) : setTimeout(function() {
    return performWork$1(e4);
  }, 0));
}
function createSuspenseBoundary$1(e4, r4, n2, o5) {
  return { status: 0, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, completedSegments: [], byteSize: 0, fallbackAbortableTasks: r4, errorDigest: null, contentState: createHoistableState$1(), fallbackState: createHoistableState$1(), contentPreamble: n2, fallbackPreamble: o5, trackedContentKeyPath: null, trackedFallbackNode: null };
}
function createRenderTask$1(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4, h4, p4, g3, y3, b3) {
  e4.allPendingTasks++, null === s5 ? e4.pendingRootTasks++ : s5.pendingTasks++;
  var v3 = { replay: null, node: n2, childIndex: o5, ping: /* @__PURE__ */ __name(function() {
    return pingTask$1(e4, v3);
  }, "ping"), blockedBoundary: s5, blockedSegment: a6, blockedPreamble: i5, hoistableState: l5, abortSet: u3, keyPath: c4, formatContext: h4, context: p4, treeContext: g3, componentStack: y3, thenableState: r4, isFallback: b3 };
  return u3.add(v3), v3;
}
function createReplayTask$1(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4, h4, p4, g3, y3) {
  e4.allPendingTasks++, null === a6 ? e4.pendingRootTasks++ : a6.pendingTasks++, n2.pendingTasks++;
  var b3 = { replay: n2, node: o5, childIndex: s5, ping: /* @__PURE__ */ __name(function() {
    return pingTask$1(e4, b3);
  }, "ping"), blockedBoundary: a6, blockedSegment: null, blockedPreamble: null, hoistableState: i5, abortSet: l5, keyPath: u3, formatContext: c4, context: h4, treeContext: p4, componentStack: g3, thenableState: r4, isFallback: y3 };
  return l5.add(b3), b3;
}
function createPendingSegment$1(e4, r4, n2, o5, s5, a6) {
  return { status: 0, parentFlushed: false, id: -1, index: r4, chunks: [], children: [], preambleChildren: [], parentFormatContext: o5, boundary: n2, lastPushedText: s5, textEmbedded: a6 };
}
function pushComponentStack$1(e4) {
  var r4 = e4.node;
  if ("object" == typeof r4 && null !== r4 && r4.$$typeof === hr) e4.componentStack = { parent: e4.componentStack, type: r4.type };
}
function getThrownInfo$1(e4) {
  var r4 = {};
  return e4 && Object.defineProperty(r4, "componentStack", { configurable: true, enumerable: true, get: /* @__PURE__ */ __name(function() {
    try {
      var n2 = "", o5 = e4;
      do {
        n2 += describeComponentStackByType$1(o5.type), o5 = o5.parent;
      } while (o5);
      var s5 = n2;
    } catch (e5) {
      s5 = "\nError generating stack: " + e5.message + "\n" + e5.stack;
    }
    return Object.defineProperty(r4, "componentStack", { value: s5 }), s5;
  }, "get") }), r4;
}
function logRecoverableError$1(e4, r4, n2) {
  if (null == (r4 = (e4 = e4.onError)(r4, n2)) || "string" == typeof r4) return r4;
}
function fatalError$1(e4, r4) {
  var n2 = e4.onShellError, o5 = e4.onFatalError;
  n2(r4), o5(r4), null !== e4.destination ? (e4.status = 14, closeWithError(e4.destination, r4)) : (e4.status = 13, e4.fatalError = r4);
}
function renderWithHooks$1(e4, r4, n2, o5, s5, a6) {
  var i5 = r4.thenableState;
  for (r4.thenableState = null, ms = {}, gs = r4, ys = e4, bs = n2, Ps = ws = 0, xs = -1, Rs = 0, Ts = i5, e4 = o5(s5, a6); Cs; ) Cs = false, Ps = ws = 0, xs = -1, Rs = 0, Es += 1, ks = null, e4 = o5(s5, a6);
  return resetHooksState$1(), e4;
}
function finishFunctionComponent$1(e4, r4, n2, o5, s5, a6, i5) {
  var l5 = false;
  if (0 !== a6 && null !== e4.formState) {
    var u3 = r4.blockedSegment;
    if (null !== u3) {
      l5 = true, u3 = u3.chunks;
      for (var c4 = 0; c4 < a6; c4++) c4 === i5 ? u3.push($n) : u3.push(En);
    }
  }
  a6 = r4.keyPath, r4.keyPath = n2, s5 ? (n2 = r4.treeContext, r4.treeContext = pushTreeContext$1(n2, 1, 0), renderNode$1(e4, r4, o5, -1), r4.treeContext = n2) : l5 ? renderNode$1(e4, r4, o5, -1) : renderNodeDestructive$1(e4, r4, o5, -1), r4.keyPath = a6;
}
function renderElement$1(e4, r4, n2, o5, s5, a6) {
  if ("function" == typeof o5) if (o5.prototype && o5.prototype.isReactComponent) {
    var i5 = s5;
    if ("ref" in s5) for (var l5 in i5 = {}, s5) "ref" !== l5 && (i5[l5] = s5[l5]);
    var u3 = o5.defaultProps;
    if (u3) for (var c4 in i5 === s5 && (i5 = Br({}, i5, s5)), u3) void 0 === i5[c4] && (i5[c4] = u3[c4]);
    s5 = i5, i5 = ss, "object" == typeof (u3 = o5.contextType) && null !== u3 && (i5 = u3._currentValue);
    var h4 = void 0 !== (i5 = new o5(s5, i5)).state ? i5.state : null;
    if (i5.updater = is, i5.props = s5, i5.state = h4, u3 = { queue: [], replace: false }, i5._reactInternals = u3, a6 = o5.contextType, i5.context = "object" == typeof a6 && null !== a6 ? a6._currentValue : ss, "function" == typeof (a6 = o5.getDerivedStateFromProps) && (h4 = null == (a6 = a6(s5, h4)) ? h4 : Br({}, h4, a6), i5.state = h4), "function" != typeof o5.getDerivedStateFromProps && "function" != typeof i5.getSnapshotBeforeUpdate && ("function" == typeof i5.UNSAFE_componentWillMount || "function" == typeof i5.componentWillMount)) if (o5 = i5.state, "function" == typeof i5.componentWillMount && i5.componentWillMount(), "function" == typeof i5.UNSAFE_componentWillMount && i5.UNSAFE_componentWillMount(), o5 !== i5.state && is.enqueueReplaceState(i5, i5.state, null), null !== u3.queue && 0 < u3.queue.length) if (o5 = u3.queue, a6 = u3.replace, u3.queue = null, u3.replace = false, a6 && 1 === o5.length) i5.state = o5[0];
    else {
      for (u3 = a6 ? o5[0] : i5.state, h4 = true, a6 = a6 ? 1 : 0; a6 < o5.length; a6++) null != (c4 = "function" == typeof (c4 = o5[a6]) ? c4.call(i5, u3, s5, void 0) : c4) && (h4 ? (h4 = false, u3 = Br({}, u3, c4)) : Br(u3, c4));
      i5.state = u3;
    }
    else u3.queue = null;
    if (o5 = i5.render(), 12 === e4.status) throw null;
    s5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive$1(e4, r4, o5, -1), r4.keyPath = s5;
  } else {
    if (o5 = renderWithHooks$1(e4, r4, n2, o5, s5, void 0), 12 === e4.status) throw null;
    finishFunctionComponent$1(e4, r4, n2, o5, 0 !== ws, Ps, xs);
  }
  else {
    if ("string" != typeof o5) {
      switch (o5) {
        case Tr:
        case mr:
        case gr:
        case pr:
          return o5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive$1(e4, r4, s5.children, -1), void (r4.keyPath = o5);
        case Rr:
          return void ("hidden" !== s5.mode && (o5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive$1(e4, r4, s5.children, -1), r4.keyPath = o5));
        case Cr:
          return o5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive$1(e4, r4, s5.children, -1), void (r4.keyPath = o5);
        case Er:
        case xr:
          throw Error("ReactDOMServer does not yet support scope components.");
        case Sr:
          e: if (null !== r4.replay) {
            o5 = r4.keyPath, r4.keyPath = n2, n2 = s5.children;
            try {
              renderNode$1(e4, r4, n2, -1);
            } finally {
              r4.keyPath = o5;
            }
          } else {
            o5 = r4.keyPath;
            var p4 = r4.blockedBoundary;
            a6 = r4.blockedPreamble;
            var g3 = r4.hoistableState;
            c4 = r4.blockedSegment, l5 = s5.fallback, s5 = s5.children;
            var y3 = /* @__PURE__ */ new Set(), b3 = 2 > r4.formatContext.insertionMode ? createSuspenseBoundary$1(0, y3, { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }, { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }) : createSuspenseBoundary$1(0, y3, null, null);
            null !== e4.trackedPostpones && (b3.trackedContentKeyPath = n2);
            var v3 = createPendingSegment$1(0, c4.chunks.length, b3, r4.formatContext, false, false);
            c4.children.push(v3), c4.lastPushedText = false;
            var k4 = createPendingSegment$1(0, 0, null, r4.formatContext, false, false);
            if (k4.parentFlushed = true, null !== e4.trackedPostpones) {
              u3 = [(i5 = [n2[0], "Suspense Fallback", n2[2]])[1], i5[2], [], null], e4.trackedPostpones.workingMap.set(i5, u3), b3.trackedFallbackNode = u3, r4.blockedSegment = v3, r4.blockedPreamble = b3.fallbackPreamble, r4.keyPath = i5, v3.status = 6;
              try {
                renderNode$1(e4, r4, l5, -1), v3.lastPushedText && v3.textEmbedded && v3.chunks.push(pn), v3.status = 1;
              } catch (r5) {
                throw v3.status = 12 === e4.status ? 3 : 4, r5;
              } finally {
                r4.blockedSegment = c4, r4.blockedPreamble = a6, r4.keyPath = o5;
              }
              pushComponentStack$1(r4 = createRenderTask$1(e4, null, s5, -1, b3, k4, b3.contentPreamble, b3.contentState, r4.abortSet, n2, r4.formatContext, r4.context, r4.treeContext, r4.componentStack, r4.isFallback)), e4.pingedTasks.push(r4);
            } else {
              r4.blockedBoundary = b3, r4.blockedPreamble = b3.contentPreamble, r4.hoistableState = b3.contentState, r4.blockedSegment = k4, r4.keyPath = n2, k4.status = 6;
              try {
                if (renderNode$1(e4, r4, s5, -1), k4.lastPushedText && k4.textEmbedded && k4.chunks.push(pn), k4.status = 1, queueCompletedSegment$1(b3, k4), 0 === b3.pendingTasks && 0 === b3.status) {
                  b3.status = 1, 0 === e4.pendingRootTasks && r4.blockedPreamble && preparePreamble$1(e4);
                  break e;
                }
              } catch (n3) {
                b3.status = 4, 12 === e4.status ? (k4.status = 3, i5 = e4.fatalError) : (k4.status = 4, i5 = n3), h4 = logRecoverableError$1(e4, i5, u3 = getThrownInfo$1(r4.componentStack)), b3.errorDigest = h4, untrackBoundary$1(e4, b3);
              } finally {
                r4.blockedBoundary = p4, r4.blockedPreamble = a6, r4.hoistableState = g3, r4.blockedSegment = c4, r4.keyPath = o5;
              }
              pushComponentStack$1(r4 = createRenderTask$1(e4, null, l5, -1, p4, v3, b3.fallbackPreamble, b3.fallbackState, y3, [n2[0], "Suspense Fallback", n2[2]], r4.formatContext, r4.context, r4.treeContext, r4.componentStack, true)), e4.pingedTasks.push(r4);
            }
          }
          return;
      }
      if ("object" == typeof o5 && null !== o5) switch (o5.$$typeof) {
        case kr:
          if ("ref" in s5) for (b3 in i5 = {}, s5) "ref" !== b3 && (i5[b3] = s5[b3]);
          else i5 = s5;
          return void finishFunctionComponent$1(e4, r4, n2, o5 = renderWithHooks$1(e4, r4, n2, o5.render, i5, a6), 0 !== ws, Ps, xs);
        case wr:
          return void renderElement$1(e4, r4, n2, o5.type, s5, a6);
        case yr:
        case vr:
          if (u3 = s5.children, i5 = r4.keyPath, s5 = s5.value, h4 = o5._currentValue, o5._currentValue = s5, as = o5 = { parent: a6 = as, depth: null === a6 ? 0 : a6.depth + 1, context: o5, parentValue: h4, value: s5 }, r4.context = o5, r4.keyPath = n2, renderNodeDestructive$1(e4, r4, u3, -1), null === (e4 = as)) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          return e4.context._currentValue = e4.parentValue, e4 = as = e4.parent, r4.context = e4, void (r4.keyPath = i5);
        case br:
          return o5 = (s5 = s5.children)(o5._context._currentValue), s5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive$1(e4, r4, o5, -1), void (r4.keyPath = s5);
        case Pr:
          if (o5 = (i5 = o5._init)(o5._payload), 12 === e4.status) throw null;
          return void renderElement$1(e4, r4, n2, o5, s5, a6);
      }
      throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (null == o5 ? o5 : typeof o5) + ".");
    }
    if (null === (i5 = r4.blockedSegment)) i5 = s5.children, u3 = r4.formatContext, h4 = r4.keyPath, r4.formatContext = getChildFormatContext$1(u3, o5, s5), r4.keyPath = n2, renderNode$1(e4, r4, i5, -1), r4.formatContext = u3, r4.keyPath = h4;
    else {
      a6 = pushStartInstance$1(i5.chunks, o5, s5, e4.resumableState, e4.renderState, r4.blockedPreamble, r4.hoistableState, r4.formatContext, i5.lastPushedText, r4.isFallback), i5.lastPushedText = false, u3 = r4.formatContext, h4 = r4.keyPath, r4.keyPath = n2, 3 === (r4.formatContext = getChildFormatContext$1(u3, o5, s5)).insertionMode ? (n2 = createPendingSegment$1(0, 0, null, r4.formatContext, false, false), i5.preambleChildren.push(n2), pushComponentStack$1(n2 = createRenderTask$1(e4, null, a6, -1, r4.blockedBoundary, n2, r4.blockedPreamble, r4.hoistableState, e4.abortableTasks, r4.keyPath, r4.formatContext, r4.context, r4.treeContext, r4.componentStack, r4.isFallback)), e4.pingedTasks.push(n2)) : renderNode$1(e4, r4, a6, -1), r4.formatContext = u3, r4.keyPath = h4;
      e: {
        switch (r4 = i5.chunks, e4 = e4.resumableState, o5) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break e;
          case "body":
            if (1 >= u3.insertionMode) {
              e4.hasBody = true;
              break e;
            }
            break;
          case "html":
            if (0 === u3.insertionMode) {
              e4.hasHtml = true;
              break e;
            }
            break;
          case "head":
            if (1 >= u3.insertionMode) break e;
        }
        r4.push(endChunkForTag$1(o5));
      }
      i5.lastPushedText = false;
    }
  }
}
function resumeNode$1(e4, r4, n2, o5, s5) {
  var a6 = r4.replay, i5 = r4.blockedBoundary, l5 = createPendingSegment$1(0, 0, null, r4.formatContext, false, false);
  l5.id = n2, l5.parentFlushed = true;
  try {
    r4.replay = null, r4.blockedSegment = l5, renderNode$1(e4, r4, o5, s5), l5.status = 1, null === i5 ? e4.completedRootSegment = l5 : (queueCompletedSegment$1(i5, l5), i5.parentFlushed && e4.partialBoundaries.push(i5));
  } finally {
    r4.replay = a6, r4.blockedSegment = null;
  }
}
function renderNodeDestructive$1(e4, r4, n2, o5) {
  null !== r4.replay && "number" == typeof r4.replay.slots ? resumeNode$1(e4, r4, r4.replay.slots, n2, o5) : (r4.node = n2, r4.childIndex = o5, n2 = r4.componentStack, pushComponentStack$1(r4), retryNode$1(e4, r4), r4.componentStack = n2);
}
function retryNode$1(e4, r4) {
  var n2 = r4.node, o5 = r4.childIndex;
  if (null !== n2) {
    if ("object" == typeof n2) {
      switch (n2.$$typeof) {
        case hr:
          var s5 = n2.type, a6 = n2.key, i5 = n2.props, l5 = void 0 !== (n2 = i5.ref) ? n2 : null, u3 = getComponentNameFromType$1(s5), c4 = null == a6 ? -1 === o5 ? 0 : o5 : a6;
          if (a6 = [r4.keyPath, u3, c4], null !== r4.replay) e: {
            var h4 = r4.replay;
            for (o5 = h4.nodes, n2 = 0; n2 < o5.length; n2++) {
              var p4 = o5[n2];
              if (c4 === p4[1]) {
                if (4 === p4.length) {
                  if (null !== u3 && u3 !== p4[0]) throw Error("Expected the resume to render <" + p4[0] + "> in this slot but instead it rendered <" + u3 + ">. The tree doesn't match so React will fallback to client rendering.");
                  var g3 = p4[2];
                  u3 = p4[3], c4 = r4.node, r4.replay = { nodes: g3, slots: u3, pendingTasks: 1 };
                  try {
                    if (renderElement$1(e4, r4, a6, s5, i5, l5), 1 === r4.replay.pendingTasks && 0 < r4.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                    r4.replay.pendingTasks--;
                  } catch (n3) {
                    if ("object" == typeof n3 && null !== n3 && (n3 === ds || "function" == typeof n3.then)) throw r4.node === c4 && (r4.replay = h4), n3;
                    r4.replay.pendingTasks--, i5 = getThrownInfo$1(r4.componentStack), abortRemainingReplayNodes$1(e4, a6 = r4.blockedBoundary, g3, u3, s5 = n3, i5 = logRecoverableError$1(e4, s5, i5));
                  }
                  r4.replay = h4;
                } else {
                  if (s5 !== Sr) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType$1(s5) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                  t: {
                    h4 = void 0, s5 = p4[5], l5 = p4[2], u3 = p4[3], c4 = null === p4[4] ? [] : p4[4][2], p4 = null === p4[4] ? null : p4[4][3];
                    var y3 = r4.keyPath, b3 = r4.replay, v3 = r4.blockedBoundary, k4 = r4.hoistableState, C4 = i5.children, P4 = i5.fallback, R4 = /* @__PURE__ */ new Set();
                    (i5 = 2 > r4.formatContext.insertionMode ? createSuspenseBoundary$1(0, R4, createPreambleState$1(), createPreambleState$1()) : createSuspenseBoundary$1(0, R4, null, null)).parentFlushed = true, i5.rootSegmentID = s5, r4.blockedBoundary = i5, r4.hoistableState = i5.contentState, r4.keyPath = a6, r4.replay = { nodes: l5, slots: u3, pendingTasks: 1 };
                    try {
                      if (renderNode$1(e4, r4, C4, -1), 1 === r4.replay.pendingTasks && 0 < r4.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                      if (r4.replay.pendingTasks--, 0 === i5.pendingTasks && 0 === i5.status) {
                        i5.status = 1, e4.completedBoundaries.push(i5);
                        break t;
                      }
                    } catch (n3) {
                      i5.status = 4, h4 = logRecoverableError$1(e4, n3, g3 = getThrownInfo$1(r4.componentStack)), i5.errorDigest = h4, r4.replay.pendingTasks--, e4.clientRenderedBoundaries.push(i5);
                    } finally {
                      r4.blockedBoundary = v3, r4.hoistableState = k4, r4.replay = b3, r4.keyPath = y3;
                    }
                    pushComponentStack$1(r4 = createReplayTask$1(e4, null, { nodes: c4, slots: p4, pendingTasks: 0 }, P4, -1, v3, i5.fallbackState, R4, [a6[0], "Suspense Fallback", a6[2]], r4.formatContext, r4.context, r4.treeContext, r4.componentStack, true)), e4.pingedTasks.push(r4);
                  }
                }
                o5.splice(n2, 1);
                break e;
              }
            }
          }
          else renderElement$1(e4, r4, a6, s5, i5, l5);
          return;
        case dr:
          throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case Pr:
          if (n2 = (g3 = n2._init)(n2._payload), 12 === e4.status) throw null;
          return void renderNodeDestructive$1(e4, r4, n2, o5);
      }
      if (Ir(n2)) return void renderChildrenArray$1(e4, r4, n2, o5);
      if (null === n2 || "object" != typeof n2 ? g3 = null : g3 = "function" == typeof (g3 = Fr && n2[Fr] || n2["@@iterator"]) ? g3 : null, g3 && (g3 = g3.call(n2))) {
        if (!(n2 = g3.next()).done) {
          i5 = [];
          do {
            i5.push(n2.value), n2 = g3.next();
          } while (!n2.done);
          renderChildrenArray$1(e4, r4, i5, o5);
        }
        return;
      }
      if ("function" == typeof n2.then) return r4.thenableState = null, renderNodeDestructive$1(e4, r4, unwrapThenable$1(n2), o5);
      if (n2.$$typeof === vr) return renderNodeDestructive$1(e4, r4, n2._currentValue, o5);
      throw o5 = Object.prototype.toString.call(n2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === o5 ? "object with keys {" + Object.keys(n2).join(", ") + "}" : o5) + "). If you meant to render a collection of children, use an array instead.");
    }
    "string" == typeof n2 ? null !== (o5 = r4.blockedSegment) && (o5.lastPushedText = pushTextInstance$1(o5.chunks, n2, e4.renderState, o5.lastPushedText)) : "number" != typeof n2 && "bigint" != typeof n2 || null !== (o5 = r4.blockedSegment) && (o5.lastPushedText = pushTextInstance$1(o5.chunks, "" + n2, e4.renderState, o5.lastPushedText));
  }
}
function renderChildrenArray$1(e4, r4, n2, o5) {
  var s5 = r4.keyPath;
  if (-1 === o5 || (r4.keyPath = [r4.keyPath, "Fragment", o5], null === r4.replay)) {
    if (a6 = r4.treeContext, i5 = n2.length, null !== r4.replay && (null !== (l5 = r4.replay.slots) && "object" == typeof l5)) {
      for (o5 = 0; o5 < i5; o5++) u3 = n2[o5], r4.treeContext = pushTreeContext$1(a6, i5, o5), "number" == typeof (c4 = l5[o5]) ? (resumeNode$1(e4, r4, c4, u3, o5), delete l5[o5]) : renderNode$1(e4, r4, u3, o5);
      return r4.treeContext = a6, void (r4.keyPath = s5);
    }
    for (l5 = 0; l5 < i5; l5++) o5 = n2[l5], r4.treeContext = pushTreeContext$1(a6, i5, l5), renderNode$1(e4, r4, o5, l5);
    r4.treeContext = a6, r4.keyPath = s5;
  } else {
    for (var a6 = r4.replay, i5 = a6.nodes, l5 = 0; l5 < i5.length; l5++) {
      var u3 = i5[l5];
      if (u3[1] === o5) {
        o5 = u3[2], u3 = u3[3], r4.replay = { nodes: o5, slots: u3, pendingTasks: 1 };
        try {
          if (renderChildrenArray$1(e4, r4, n2, -1), 1 === r4.replay.pendingTasks && 0 < r4.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
          r4.replay.pendingTasks--;
        } catch (s6) {
          if ("object" == typeof s6 && null !== s6 && (s6 === ds || "function" == typeof s6.then)) throw s6;
          r4.replay.pendingTasks--, n2 = getThrownInfo$1(r4.componentStack);
          var c4 = r4.blockedBoundary;
          abortRemainingReplayNodes$1(e4, c4, o5, u3, s6, n2 = logRecoverableError$1(e4, s6, n2));
        }
        r4.replay = a6, i5.splice(l5, 1);
        break;
      }
    }
    r4.keyPath = s5;
  }
}
function untrackBoundary$1(e4, r4) {
  null !== (e4 = e4.trackedPostpones) && (null !== (r4 = r4.trackedContentKeyPath) && (void 0 !== (r4 = e4.workingMap.get(r4)) && (r4.length = 4, r4[2] = [], r4[3] = null)));
}
function spawnNewSuspendedReplayTask$1(e4, r4, n2) {
  return createReplayTask$1(e4, n2, r4.replay, r4.node, r4.childIndex, r4.blockedBoundary, r4.hoistableState, r4.abortSet, r4.keyPath, r4.formatContext, r4.context, r4.treeContext, r4.componentStack, r4.isFallback);
}
function spawnNewSuspendedRenderTask$1(e4, r4, n2) {
  var o5 = r4.blockedSegment, s5 = createPendingSegment$1(0, o5.chunks.length, null, r4.formatContext, o5.lastPushedText, true);
  return o5.children.push(s5), o5.lastPushedText = false, createRenderTask$1(e4, n2, r4.node, r4.childIndex, r4.blockedBoundary, s5, r4.blockedPreamble, r4.hoistableState, r4.abortSet, r4.keyPath, r4.formatContext, r4.context, r4.treeContext, r4.componentStack, r4.isFallback);
}
function renderNode$1(e4, r4, n2, o5) {
  var s5 = r4.formatContext, a6 = r4.context, i5 = r4.keyPath, l5 = r4.treeContext, u3 = r4.componentStack, c4 = r4.blockedSegment;
  if (null === c4) try {
    return renderNodeDestructive$1(e4, r4, n2, o5);
  } catch (c5) {
    if (resetHooksState$1(), "object" == typeof (n2 = c5 === ds ? getSuspendedThenable$1() : c5) && null !== n2) {
      if ("function" == typeof n2.then) return e4 = spawnNewSuspendedReplayTask$1(e4, r4, o5 = getThenableStateAfterSuspending$1()).ping, n2.then(e4, e4), r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, r4.componentStack = u3, void switchContext$1(a6);
      if ("Maximum call stack size exceeded" === n2.message) return n2 = spawnNewSuspendedReplayTask$1(e4, r4, n2 = getThenableStateAfterSuspending$1()), e4.pingedTasks.push(n2), r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, r4.componentStack = u3, void switchContext$1(a6);
    }
  }
  else {
    var h4 = c4.children.length, p4 = c4.chunks.length;
    try {
      return renderNodeDestructive$1(e4, r4, n2, o5);
    } catch (g3) {
      if (resetHooksState$1(), c4.children.length = h4, c4.chunks.length = p4, "object" == typeof (n2 = g3 === ds ? getSuspendedThenable$1() : g3) && null !== n2) {
        if ("function" == typeof n2.then) return e4 = spawnNewSuspendedRenderTask$1(e4, r4, o5 = getThenableStateAfterSuspending$1()).ping, n2.then(e4, e4), r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, r4.componentStack = u3, void switchContext$1(a6);
        if ("Maximum call stack size exceeded" === n2.message) return n2 = spawnNewSuspendedRenderTask$1(e4, r4, n2 = getThenableStateAfterSuspending$1()), e4.pingedTasks.push(n2), r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, r4.componentStack = u3, void switchContext$1(a6);
      }
    }
  }
  throw r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, switchContext$1(a6), n2;
}
function abortTaskSoft$1(e4) {
  var r4 = e4.blockedBoundary;
  null !== (e4 = e4.blockedSegment) && (e4.status = 3, finishedTask$1(this, r4, e4));
}
function abortRemainingReplayNodes$1(e4, r4, n2, o5, s5, a6) {
  for (var i5 = 0; i5 < n2.length; i5++) {
    var l5 = n2[i5];
    if (4 === l5.length) abortRemainingReplayNodes$1(e4, r4, l5[2], l5[3], s5, a6);
    else {
      l5 = l5[5];
      var u3 = e4, c4 = a6, h4 = createSuspenseBoundary$1(0, /* @__PURE__ */ new Set(), null, null);
      h4.parentFlushed = true, h4.rootSegmentID = l5, h4.status = 4, h4.errorDigest = c4, h4.parentFlushed && u3.clientRenderedBoundaries.push(h4);
    }
  }
  if (n2.length = 0, null !== o5) {
    if (null === r4) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
    if (4 !== r4.status && (r4.status = 4, r4.errorDigest = a6, r4.parentFlushed && e4.clientRenderedBoundaries.push(r4)), "object" == typeof o5) for (var p4 in o5) delete o5[p4];
  }
}
function abortTask$1(e4, r4, n2) {
  var o5 = e4.blockedBoundary, s5 = e4.blockedSegment;
  if (null !== s5) {
    if (6 === s5.status) return;
    s5.status = 3;
  }
  if (s5 = getThrownInfo$1(e4.componentStack), null === o5) {
    if (13 !== r4.status && 14 !== r4.status) {
      if (null === (o5 = e4.replay)) return logRecoverableError$1(r4, n2, s5), void fatalError$1(r4, n2);
      o5.pendingTasks--, 0 === o5.pendingTasks && 0 < o5.nodes.length && (e4 = logRecoverableError$1(r4, n2, s5), abortRemainingReplayNodes$1(r4, null, o5.nodes, o5.slots, n2, e4)), r4.pendingRootTasks--, 0 === r4.pendingRootTasks && completeShell$1(r4);
    }
  } else o5.pendingTasks--, 4 !== o5.status && (o5.status = 4, e4 = logRecoverableError$1(r4, n2, s5), o5.status = 4, o5.errorDigest = e4, untrackBoundary$1(r4, o5), o5.parentFlushed && r4.clientRenderedBoundaries.push(o5)), o5.fallbackAbortableTasks.forEach(function(e5) {
    return abortTask$1(e5, r4, n2);
  }), o5.fallbackAbortableTasks.clear();
  r4.allPendingTasks--, 0 === r4.allPendingTasks && completeAll$1(r4);
}
function safelyEmitEarlyPreloads$1(e4, r4) {
  try {
    var n2 = e4.renderState, o5 = n2.onHeaders;
    if (o5) {
      var s5 = n2.headers;
      if (s5) {
        n2.headers = null;
        var a6 = s5.preconnects;
        if (s5.fontPreloads && (a6 && (a6 += ", "), a6 += s5.fontPreloads), s5.highImagePreloads && (a6 && (a6 += ", "), a6 += s5.highImagePreloads), !r4) {
          var i5 = n2.styles.values(), l5 = i5.next();
          e: for (; 0 < s5.remainingCapacity && !l5.done; l5 = i5.next()) for (var u3 = l5.value.sheets.values(), c4 = u3.next(); 0 < s5.remainingCapacity && !c4.done; c4 = u3.next()) {
            var h4 = c4.value, p4 = h4.props, g3 = p4.href, y3 = h4.props, b3 = getPreloadAsHeader$1(y3.href, "style", { crossOrigin: y3.crossOrigin, integrity: y3.integrity, nonce: y3.nonce, type: y3.type, fetchPriority: y3.fetchPriority, referrerPolicy: y3.referrerPolicy, media: y3.media });
            if (!(0 <= (s5.remainingCapacity -= b3.length + 2))) break e;
            n2.resets.style[g3] = en, a6 && (a6 += ", "), a6 += b3, n2.resets.style[g3] = "string" == typeof p4.crossOrigin || "string" == typeof p4.integrity ? [p4.crossOrigin, p4.integrity] : en;
          }
        }
        o5(a6 ? { Link: a6 } : {});
      }
    }
  } catch (r5) {
    logRecoverableError$1(e4, r5, {});
  }
}
function completeShell$1(e4) {
  null === e4.trackedPostpones && safelyEmitEarlyPreloads$1(e4, true), null === e4.trackedPostpones && preparePreamble$1(e4), e4.onShellError = noop$3, (e4 = e4.onShellReady)();
}
function completeAll$1(e4) {
  safelyEmitEarlyPreloads$1(e4, null === e4.trackedPostpones || (null === e4.completedRootSegment || 5 !== e4.completedRootSegment.status)), preparePreamble$1(e4), (e4 = e4.onAllReady)();
}
function queueCompletedSegment$1(e4, r4) {
  if (0 === r4.chunks.length && 1 === r4.children.length && null === r4.children[0].boundary && -1 === r4.children[0].id) {
    var n2 = r4.children[0];
    n2.id = r4.id, n2.parentFlushed = true, 1 === n2.status && queueCompletedSegment$1(e4, n2);
  } else e4.completedSegments.push(r4);
}
function finishedTask$1(e4, r4, n2) {
  if (null === r4) {
    if (null !== n2 && n2.parentFlushed) {
      if (null !== e4.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
      e4.completedRootSegment = n2;
    }
    e4.pendingRootTasks--, 0 === e4.pendingRootTasks && completeShell$1(e4);
  } else r4.pendingTasks--, 4 !== r4.status && (0 === r4.pendingTasks ? (0 === r4.status && (r4.status = 1), null !== n2 && n2.parentFlushed && 1 === n2.status && queueCompletedSegment$1(r4, n2), r4.parentFlushed && e4.completedBoundaries.push(r4), 1 === r4.status && (r4.fallbackAbortableTasks.forEach(abortTaskSoft$1, e4), r4.fallbackAbortableTasks.clear(), 0 === e4.pendingRootTasks && null === e4.trackedPostpones && null !== r4.contentPreamble && preparePreamble$1(e4))) : null !== n2 && n2.parentFlushed && 1 === n2.status && (queueCompletedSegment$1(r4, n2), 1 === r4.completedSegments.length && r4.parentFlushed && e4.partialBoundaries.push(r4)));
  e4.allPendingTasks--, 0 === e4.allPendingTasks && completeAll$1(e4);
}
function performWork$1(e4) {
  if (14 !== e4.status && 13 !== e4.status) {
    var r4 = as, n2 = Xr.H;
    Xr.H = _s;
    var o5 = Xr.A;
    Xr.A = Ms;
    var s5 = Ls;
    Ls = e4;
    var a6 = As;
    As = e4.resumableState;
    try {
      var i5, l5 = e4.pingedTasks;
      for (i5 = 0; i5 < l5.length; i5++) {
        var u3 = l5[i5], c4 = e4, h4 = u3.blockedSegment;
        if (null === h4) {
          var p4 = c4;
          if (0 !== u3.replay.pendingTasks) {
            switchContext$1(u3.context);
            try {
              if ("number" == typeof u3.replay.slots ? resumeNode$1(p4, u3, u3.replay.slots, u3.node, u3.childIndex) : retryNode$1(p4, u3), 1 === u3.replay.pendingTasks && 0 < u3.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
              u3.replay.pendingTasks--, u3.abortSet.delete(u3), finishedTask$1(p4, u3.blockedBoundary, null);
            } catch (e5) {
              resetHooksState$1();
              var g3 = e5 === ds ? getSuspendedThenable$1() : e5;
              if ("object" == typeof g3 && null !== g3 && "function" == typeof g3.then) {
                var y3 = u3.ping;
                g3.then(y3, y3), u3.thenableState = getThenableStateAfterSuspending$1();
              } else {
                u3.replay.pendingTasks--, u3.abortSet.delete(u3);
                var b3 = getThrownInfo$1(u3.componentStack);
                c4 = void 0;
                var v3 = p4, k4 = u3.blockedBoundary, C4 = 12 === p4.status ? p4.fatalError : g3;
                abortRemainingReplayNodes$1(v3, k4, u3.replay.nodes, u3.replay.slots, C4, c4 = logRecoverableError$1(v3, C4, b3)), p4.pendingRootTasks--, 0 === p4.pendingRootTasks && completeShell$1(p4), p4.allPendingTasks--, 0 === p4.allPendingTasks && completeAll$1(p4);
              }
            }
          }
        } else if (p4 = void 0, 0 === (v3 = h4).status) {
          v3.status = 6, switchContext$1(u3.context);
          var P4 = v3.children.length, R4 = v3.chunks.length;
          try {
            retryNode$1(c4, u3), v3.lastPushedText && v3.textEmbedded && v3.chunks.push(pn), u3.abortSet.delete(u3), v3.status = 1, finishedTask$1(c4, u3.blockedBoundary, v3);
          } catch (e5) {
            resetHooksState$1(), v3.children.length = P4, v3.chunks.length = R4;
            var T4 = e5 === ds ? getSuspendedThenable$1() : 12 === c4.status ? c4.fatalError : e5;
            if ("object" == typeof T4 && null !== T4 && "function" == typeof T4.then) {
              v3.status = 0, u3.thenableState = getThenableStateAfterSuspending$1();
              var $3 = u3.ping;
              T4.then($3, $3);
            } else {
              var E4 = getThrownInfo$1(u3.componentStack);
              u3.abortSet.delete(u3), v3.status = 4;
              var F4 = u3.blockedBoundary;
              p4 = logRecoverableError$1(c4, T4, E4), null === F4 ? fatalError$1(c4, T4) : (F4.pendingTasks--, 4 !== F4.status && (F4.status = 4, F4.errorDigest = p4, untrackBoundary$1(c4, F4), F4.parentFlushed && c4.clientRenderedBoundaries.push(F4), 0 === c4.pendingRootTasks && null === c4.trackedPostpones && null !== F4.contentPreamble && preparePreamble$1(c4))), c4.allPendingTasks--, 0 === c4.allPendingTasks && completeAll$1(c4);
            }
          }
        }
      }
      l5.splice(0, i5), null !== e4.destination && flushCompletedQueues$1(e4, e4.destination);
    } catch (r5) {
      logRecoverableError$1(e4, r5, {}), fatalError$1(e4, r5);
    } finally {
      As = a6, Xr.H = n2, Xr.A = o5, n2 === _s && switchContext$1(r4), Ls = s5;
    }
  }
}
function preparePreambleFromSubtree$1(e4, r4, n2) {
  r4.preambleChildren.length && n2.push(r4.preambleChildren);
  for (var o5 = false, s5 = 0; s5 < r4.children.length; s5++) o5 = preparePreambleFromSegment$1(e4, r4.children[s5], n2) || o5;
  return o5;
}
function preparePreambleFromSegment$1(e4, r4, n2) {
  var o5 = r4.boundary;
  if (null === o5) return preparePreambleFromSubtree$1(e4, r4, n2);
  var s5 = o5.contentPreamble, a6 = o5.fallbackPreamble;
  if (null === s5 || null === a6) return false;
  switch (o5.status) {
    case 1:
      if (hoistPreambleState$1(e4.renderState, s5), !(r4 = o5.completedSegments[0])) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      return preparePreambleFromSubtree$1(e4, r4, n2);
    case 5:
      if (null !== e4.trackedPostpones) return true;
    case 4:
      if (1 === r4.status) return hoistPreambleState$1(e4.renderState, a6), preparePreambleFromSubtree$1(e4, r4, n2);
    default:
      return true;
  }
}
function preparePreamble$1(e4) {
  if (e4.completedRootSegment && null === e4.completedPreambleSegments) {
    var r4 = [], n2 = preparePreambleFromSegment$1(e4, e4.completedRootSegment, r4), o5 = e4.renderState.preamble;
    (false === n2 || o5.headChunks && o5.bodyChunks) && (e4.completedPreambleSegments = r4);
  }
}
function flushSubtree$1(e4, r4, n2, o5) {
  switch (n2.parentFlushed = true, n2.status) {
    case 0:
      n2.id = e4.nextSegmentId++;
    case 5:
      return o5 = n2.id, n2.lastPushedText = false, n2.textEmbedded = false, e4 = e4.renderState, writeChunk(r4, Ln), writeChunk(r4, e4.placeholderPrefix), writeChunk(r4, e4 = stringToChunk(o5.toString(16))), writeChunkAndReturn(r4, Nn);
    case 1:
      n2.status = 2;
      var s5 = true, a6 = n2.chunks, i5 = 0;
      n2 = n2.children;
      for (var l5 = 0; l5 < n2.length; l5++) {
        for (s5 = n2[l5]; i5 < s5.index; i5++) writeChunk(r4, a6[i5]);
        s5 = flushSegment$1(e4, r4, s5, o5);
      }
      for (; i5 < a6.length - 1; i5++) writeChunk(r4, a6[i5]);
      return i5 < a6.length && (s5 = writeChunkAndReturn(r4, a6[i5])), s5;
    default:
      throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
  }
}
function flushSegment$1(e4, r4, n2, o5) {
  var s5 = n2.boundary;
  if (null === s5) return flushSubtree$1(e4, r4, n2, o5);
  if (s5.parentFlushed = true, 4 === s5.status) {
    var a6 = s5.errorDigest;
    return writeChunkAndReturn(r4, zn), writeChunk(r4, Vn), a6 && (writeChunk(r4, Wn), writeChunk(r4, stringToChunk(escapeTextForBrowser$1(a6))), writeChunk(r4, qn)), writeChunkAndReturn(r4, Un), flushSubtree$1(e4, r4, n2, o5), (e4 = s5.fallbackPreamble) && writePreambleContribution$1(r4, e4), writeChunkAndReturn(r4, Hn);
  }
  if (1 !== s5.status) return 0 === s5.status && (s5.rootSegmentID = e4.nextSegmentId++), 0 < s5.completedSegments.length && e4.partialBoundaries.push(s5), writeStartPendingSuspenseBoundary$1(r4, e4.renderState, s5.rootSegmentID), o5 && ((s5 = s5.fallbackState).styles.forEach(hoistStyleQueueDependency$1, o5), s5.stylesheets.forEach(hoistStylesheetDependency$1, o5)), flushSubtree$1(e4, r4, n2, o5), writeChunkAndReturn(r4, Hn);
  if (s5.byteSize > e4.progressiveChunkSize) return s5.rootSegmentID = e4.nextSegmentId++, e4.completedBoundaries.push(s5), writeStartPendingSuspenseBoundary$1(r4, e4.renderState, s5.rootSegmentID), flushSubtree$1(e4, r4, n2, o5), writeChunkAndReturn(r4, Hn);
  if (o5 && ((n2 = s5.contentState).styles.forEach(hoistStyleQueueDependency$1, o5), n2.stylesheets.forEach(hoistStylesheetDependency$1, o5)), writeChunkAndReturn(r4, Bn), 1 !== (n2 = s5.completedSegments).length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
  return flushSegment$1(e4, r4, n2[0], o5), (e4 = s5.contentPreamble) && writePreambleContribution$1(r4, e4), writeChunkAndReturn(r4, Hn);
}
function flushSegmentContainer$1(e4, r4, n2, o5) {
  return function(e5, r5, n3, o6) {
    switch (n3.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return writeChunk(e5, Jn), writeChunk(e5, r5.segmentPrefix), writeChunk(e5, stringToChunk(o6.toString(16))), writeChunkAndReturn(e5, Xn);
      case 4:
        return writeChunk(e5, Yn), writeChunk(e5, r5.segmentPrefix), writeChunk(e5, stringToChunk(o6.toString(16))), writeChunkAndReturn(e5, Zn);
      case 5:
        return writeChunk(e5, to), writeChunk(e5, r5.segmentPrefix), writeChunk(e5, stringToChunk(o6.toString(16))), writeChunkAndReturn(e5, ro);
      case 6:
        return writeChunk(e5, oo), writeChunk(e5, r5.segmentPrefix), writeChunk(e5, stringToChunk(o6.toString(16))), writeChunkAndReturn(e5, so);
      case 7:
        return writeChunk(e5, io), writeChunk(e5, r5.segmentPrefix), writeChunk(e5, stringToChunk(o6.toString(16))), writeChunkAndReturn(e5, lo);
      case 8:
        return writeChunk(e5, co), writeChunk(e5, r5.segmentPrefix), writeChunk(e5, stringToChunk(o6.toString(16))), writeChunkAndReturn(e5, ho);
      case 9:
        return writeChunk(e5, fo), writeChunk(e5, r5.segmentPrefix), writeChunk(e5, stringToChunk(o6.toString(16))), writeChunkAndReturn(e5, mo);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }(r4, e4.renderState, n2.parentFormatContext, n2.id), flushSegment$1(e4, r4, n2, o5), function(e5, r5) {
    switch (r5.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return writeChunkAndReturn(e5, Qn);
      case 4:
        return writeChunkAndReturn(e5, eo);
      case 5:
        return writeChunkAndReturn(e5, no);
      case 6:
        return writeChunkAndReturn(e5, ao);
      case 7:
        return writeChunkAndReturn(e5, uo);
      case 8:
        return writeChunkAndReturn(e5, po);
      case 9:
        return writeChunkAndReturn(e5, go);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }(r4, n2.parentFormatContext);
}
function flushCompletedBoundary$1(e4, r4, n2) {
  for (var o5 = n2.completedSegments, s5 = 0; s5 < o5.length; s5++) flushPartiallyCompletedSegment$1(e4, r4, n2, o5[s5]);
  o5.length = 0, writeHoistablesForBoundary$1(r4, n2.contentState, e4.renderState), o5 = e4.resumableState, e4 = e4.renderState, s5 = n2.rootSegmentID, n2 = n2.contentState;
  var a6 = e4.stylesToHoist;
  return e4.stylesToHoist = false, writeChunk(r4, e4.startInlineScript), a6 ? 2 & o5.instructions ? 8 & o5.instructions ? writeChunk(r4, xo) : (o5.instructions |= 8, writeChunk(r4, Po)) : (o5.instructions |= 10, writeChunk(r4, wo2)) : 2 & o5.instructions ? writeChunk(r4, Co) : (o5.instructions |= 2, writeChunk(r4, So)), o5 = stringToChunk(s5.toString(16)), writeChunk(r4, e4.boundaryPrefix), writeChunk(r4, o5), writeChunk(r4, Ro), writeChunk(r4, e4.segmentPrefix), writeChunk(r4, o5), a6 ? (writeChunk(r4, To), function(e5, r5) {
    writeChunk(e5, Jo);
    var n3 = Jo;
    r5.stylesheets.forEach(function(r6) {
      if (2 !== r6.state) if (3 === r6.state) writeChunk(e5, n3), writeChunk(e5, stringToChunk(escapeJSObjectForInstructionScripts$1("" + r6.props.href))), writeChunk(e5, Yo), n3 = Xo;
      else {
        writeChunk(e5, n3);
        var o6 = r6.props["data-precedence"], s6 = r6.props, a7 = sanitizeURL$1("" + r6.props.href);
        for (var i5 in writeChunk(e5, stringToChunk(escapeJSObjectForInstructionScripts$1(a7))), o6 = "" + o6, writeChunk(e5, Qo), writeChunk(e5, stringToChunk(escapeJSObjectForInstructionScripts$1(o6))), s6) if (jr.call(s6, i5) && null != (o6 = s6[i5])) switch (i5) {
          case "href":
          case "rel":
          case "precedence":
          case "data-precedence":
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            writeStyleResourceAttributeInJS$1(e5, i5, o6);
        }
        writeChunk(e5, Yo), n3 = Xo, r6.state = 3;
      }
    }), writeChunk(e5, Yo);
  }(r4, n2)) : writeChunk(r4, $o), n2 = writeChunkAndReturn(r4, Eo), writeBootstrap$1(r4, e4) && n2;
}
function flushPartiallyCompletedSegment$1(e4, r4, n2, o5) {
  if (2 === o5.status) return true;
  var s5 = n2.contentState, a6 = o5.id;
  if (-1 === a6) {
    if (-1 === (o5.id = n2.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
    return flushSegmentContainer$1(e4, r4, o5, s5);
  }
  return a6 === n2.rootSegmentID ? flushSegmentContainer$1(e4, r4, o5, s5) : (flushSegmentContainer$1(e4, r4, o5, s5), n2 = e4.resumableState, writeChunk(r4, (e4 = e4.renderState).startInlineScript), 1 & n2.instructions ? writeChunk(r4, bo) : (n2.instructions |= 1, writeChunk(r4, yo)), writeChunk(r4, e4.segmentPrefix), writeChunk(r4, a6 = stringToChunk(a6.toString(16))), writeChunk(r4, vo), writeChunk(r4, e4.placeholderPrefix), writeChunk(r4, a6), r4 = writeChunkAndReturn(r4, ko));
}
function flushCompletedQueues$1(e4, r4) {
  Mr = new Uint8Array(2048), Or = 0;
  try {
    if (!(0 < e4.pendingRootTasks)) {
      var n2, o5 = e4.completedRootSegment;
      if (null !== o5) {
        if (5 === o5.status) return;
        var s5 = e4.completedPreambleSegments;
        if (null === s5) return;
        var a6, i5 = e4.renderState, l5 = i5.preamble, u3 = l5.htmlChunks, c4 = l5.headChunks;
        if (u3) {
          for (a6 = 0; a6 < u3.length; a6++) writeChunk(r4, u3[a6]);
          if (c4) for (a6 = 0; a6 < c4.length; a6++) writeChunk(r4, c4[a6]);
          else writeChunk(r4, startChunkForTag$1("head")), writeChunk(r4, Pn);
        } else if (c4) for (a6 = 0; a6 < c4.length; a6++) writeChunk(r4, c4[a6]);
        var h4 = i5.charsetChunks;
        for (a6 = 0; a6 < h4.length; a6++) writeChunk(r4, h4[a6]);
        h4.length = 0, i5.preconnects.forEach(flushResource$1, r4), i5.preconnects.clear();
        var p4 = i5.viewportChunks;
        for (a6 = 0; a6 < p4.length; a6++) writeChunk(r4, p4[a6]);
        p4.length = 0, i5.fontPreloads.forEach(flushResource$1, r4), i5.fontPreloads.clear(), i5.highImagePreloads.forEach(flushResource$1, r4), i5.highImagePreloads.clear(), i5.styles.forEach(flushStylesInPreamble$1, r4);
        var g3 = i5.importMapChunks;
        for (a6 = 0; a6 < g3.length; a6++) writeChunk(r4, g3[a6]);
        g3.length = 0, i5.bootstrapScripts.forEach(flushResource$1, r4), i5.scripts.forEach(flushResource$1, r4), i5.scripts.clear(), i5.bulkPreloads.forEach(flushResource$1, r4), i5.bulkPreloads.clear();
        var y3 = i5.hoistableChunks;
        for (a6 = 0; a6 < y3.length; a6++) writeChunk(r4, y3[a6]);
        for (i5 = y3.length = 0; i5 < s5.length; i5++) {
          var b3 = s5[i5];
          for (l5 = 0; l5 < b3.length; l5++) flushSegment$1(e4, r4, b3[l5], null);
        }
        var v3 = e4.renderState.preamble, k4 = v3.headChunks;
        (v3.htmlChunks || k4) && writeChunk(r4, endChunkForTag$1("head"));
        var C4 = v3.bodyChunks;
        if (C4) for (s5 = 0; s5 < C4.length; s5++) writeChunk(r4, C4[s5]);
        flushSegment$1(e4, r4, o5, null), e4.completedRootSegment = null, writeBootstrap$1(r4, e4.renderState);
      }
      var P4 = e4.renderState;
      o5 = 0;
      var R4 = P4.viewportChunks;
      for (o5 = 0; o5 < R4.length; o5++) writeChunk(r4, R4[o5]);
      R4.length = 0, P4.preconnects.forEach(flushResource$1, r4), P4.preconnects.clear(), P4.fontPreloads.forEach(flushResource$1, r4), P4.fontPreloads.clear(), P4.highImagePreloads.forEach(flushResource$1, r4), P4.highImagePreloads.clear(), P4.styles.forEach(preloadLateStyles$1, r4), P4.scripts.forEach(flushResource$1, r4), P4.scripts.clear(), P4.bulkPreloads.forEach(flushResource$1, r4), P4.bulkPreloads.clear();
      var T4 = P4.hoistableChunks;
      for (o5 = 0; o5 < T4.length; o5++) writeChunk(r4, T4[o5]);
      T4.length = 0;
      var $3 = e4.clientRenderedBoundaries;
      for (n2 = 0; n2 < $3.length; n2++) {
        var E4 = $3[n2];
        P4 = r4;
        var F4 = e4.resumableState, I4 = e4.renderState, A4 = E4.rootSegmentID, O4 = E4.errorDigest;
        writeChunk(P4, I4.startInlineScript), 4 & F4.instructions ? writeChunk(P4, Io) : (F4.instructions |= 4, writeChunk(P4, Fo)), writeChunk(P4, I4.boundaryPrefix), writeChunk(P4, stringToChunk(A4.toString(16))), writeChunk(P4, _o), O4 && (writeChunk(P4, Ao), writeChunk(P4, stringToChunk(escapeJSStringsForInstructionScripts$1(O4 || ""))));
        var N4 = writeChunkAndReturn(P4, Mo);
        if (!N4) return e4.destination = null, n2++, void $3.splice(0, n2);
      }
      $3.splice(0, n2);
      var B3 = e4.completedBoundaries;
      for (n2 = 0; n2 < B3.length; n2++) if (!flushCompletedBoundary$1(e4, r4, B3[n2])) return e4.destination = null, n2++, void B3.splice(0, n2);
      B3.splice(0, n2), completeWriting(r4), Mr = new Uint8Array(2048), Or = 0;
      var D4 = e4.partialBoundaries;
      for (n2 = 0; n2 < D4.length; n2++) {
        var H3 = D4[n2];
        e: {
          $3 = e4, E4 = r4;
          var V4 = H3.completedSegments;
          for (N4 = 0; N4 < V4.length; N4++) if (!flushPartiallyCompletedSegment$1($3, E4, H3, V4[N4])) {
            N4++, V4.splice(0, N4);
            var q3 = false;
            break e;
          }
          V4.splice(0, N4), q3 = writeHoistablesForBoundary$1(E4, H3.contentState, $3.renderState);
        }
        if (!q3) return e4.destination = null, n2++, void D4.splice(0, n2);
      }
      D4.splice(0, n2);
      var W4 = e4.completedBoundaries;
      for (n2 = 0; n2 < W4.length; n2++) if (!flushCompletedBoundary$1(e4, r4, W4[n2])) return e4.destination = null, n2++, void W4.splice(0, n2);
      W4.splice(0, n2);
    }
  } finally {
    0 === e4.allPendingTasks && 0 === e4.pingedTasks.length && 0 === e4.clientRenderedBoundaries.length && 0 === e4.completedBoundaries.length ? (e4.flushScheduled = false, (n2 = e4.resumableState).hasBody && writeChunk(r4, endChunkForTag$1("body")), n2.hasHtml && writeChunk(r4, endChunkForTag$1("html")), completeWriting(r4), e4.status = 14, r4.close(), e4.destination = null) : completeWriting(r4);
  }
}
function startWork(e4) {
  e4.flushScheduled = null !== e4.destination, Ar(rs ? function() {
    return ns.run(e4, performWork$1, e4);
  } : function() {
    return performWork$1(e4);
  }), setTimeout(function() {
    10 === e4.status && (e4.status = 11), null === e4.trackedPostpones && (rs ? ns.run(e4, enqueueEarlyPreloadsAfterInitialWork, e4) : enqueueEarlyPreloadsAfterInitialWork(e4));
  }, 0);
}
function enqueueEarlyPreloadsAfterInitialWork(e4) {
  safelyEmitEarlyPreloads$1(e4, 0 === e4.pendingRootTasks);
}
function enqueueFlush$1(e4) {
  false === e4.flushScheduled && 0 === e4.pingedTasks.length && null !== e4.destination && (e4.flushScheduled = true, setTimeout(function() {
    var r4 = e4.destination;
    r4 ? flushCompletedQueues$1(e4, r4) : e4.flushScheduled = false;
  }, 0));
}
function startFlowing$1(e4, r4) {
  if (13 === e4.status) e4.status = 14, closeWithError(r4, e4.fatalError);
  else if (14 !== e4.status && null === e4.destination) {
    e4.destination = r4;
    try {
      flushCompletedQueues$1(e4, r4);
    } catch (r5) {
      logRecoverableError$1(e4, r5, {}), fatalError$1(e4, r5);
    }
  }
}
function abort$1(e4, r4) {
  11 !== e4.status && 10 !== e4.status || (e4.status = 12);
  try {
    var n2 = e4.abortableTasks;
    if (0 < n2.size) {
      var o5 = void 0 === r4 ? Error("The render was aborted by the server without a reason.") : "object" == typeof r4 && null !== r4 && "function" == typeof r4.then ? Error("The render was aborted by the server with a promise.") : r4;
      e4.fatalError = o5, n2.forEach(function(r5) {
        return abortTask$1(r5, e4, o5);
      }), n2.clear();
    }
    null !== e4.destination && flushCompletedQueues$1(e4, e4.destination);
  } catch (r5) {
    logRecoverableError$1(e4, r5, {}), fatalError$1(e4, r5);
  }
}
function ensureCorrectIsomorphicReactVersion() {
  var e4 = lr.version;
  if ("19.1.0" !== e4) throw Error('Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:\n  - react:      ' + e4 + "\n  - react-dom:  19.1.0\nLearn more: https://react.dev/warnings/version-mismatch");
}
function formatProdErrorMessage(e4) {
  var r4 = "https://react.dev/errors/" + e4;
  if (1 < arguments.length) {
    r4 += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n2 = 2; n2 < arguments.length; n2++) r4 += "&args[]=" + encodeURIComponent(arguments[n2]);
  }
  return "Minified React error #" + e4 + "; visit " + r4 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function murmurhash3_32_gc(e4, r4) {
  var n2 = 3 & e4.length, o5 = e4.length - n2, s5 = r4;
  for (r4 = 0; r4 < o5; ) {
    var a6 = 255 & e4.charCodeAt(r4) | (255 & e4.charCodeAt(++r4)) << 8 | (255 & e4.charCodeAt(++r4)) << 16 | (255 & e4.charCodeAt(++r4)) << 24;
    ++r4, s5 = 27492 + (65535 & (s5 = 5 * (65535 & (s5 = (s5 ^= a6 = 461845907 * (65535 & (a6 = (a6 = 3432918353 * (65535 & a6) + ((3432918353 * (a6 >>> 16) & 65535) << 16) & 4294967295) << 15 | a6 >>> 17)) + ((461845907 * (a6 >>> 16) & 65535) << 16) & 4294967295) << 13 | s5 >>> 19)) + ((5 * (s5 >>> 16) & 65535) << 16) & 4294967295)) + (((s5 >>> 16) + 58964 & 65535) << 16);
  }
  switch (a6 = 0, n2) {
    case 3:
      a6 ^= (255 & e4.charCodeAt(r4 + 2)) << 16;
    case 2:
      a6 ^= (255 & e4.charCodeAt(r4 + 1)) << 8;
    case 1:
      s5 ^= 461845907 * (65535 & (a6 = (a6 = 3432918353 * (65535 & (a6 ^= 255 & e4.charCodeAt(r4))) + ((3432918353 * (a6 >>> 16) & 65535) << 16) & 4294967295) << 15 | a6 >>> 17)) + ((461845907 * (a6 >>> 16) & 65535) << 16) & 4294967295;
  }
  return s5 ^= e4.length, s5 = 2246822507 * (65535 & (s5 ^= s5 >>> 16)) + ((2246822507 * (s5 >>> 16) & 65535) << 16) & 4294967295, ((s5 = 3266489909 * (65535 & (s5 ^= s5 >>> 13)) + ((3266489909 * (s5 >>> 16) & 65535) << 16) & 4294967295) ^ s5 >>> 16) >>> 0;
}
function isAttributeNameSafe(e4) {
  return !!ia.call(ca, e4) || !ia.call(ua, e4) && (la.test(e4) ? ca[e4] = true : (ua[e4] = true, false));
}
function escapeTextForBrowser(e4) {
  if ("boolean" == typeof e4 || "number" == typeof e4 || "bigint" == typeof e4) return "" + e4;
  e4 = "" + e4;
  var r4 = pa.exec(e4);
  if (r4) {
    var n2, o5 = "", s5 = 0;
    for (n2 = r4.index; n2 < e4.length; n2++) {
      switch (e4.charCodeAt(n2)) {
        case 34:
          r4 = "&quot;";
          break;
        case 38:
          r4 = "&amp;";
          break;
        case 39:
          r4 = "&#x27;";
          break;
        case 60:
          r4 = "&lt;";
          break;
        case 62:
          r4 = "&gt;";
          break;
        default:
          continue;
      }
      s5 !== n2 && (o5 += e4.slice(s5, n2)), s5 = n2 + 1, o5 += r4;
    }
    e4 = s5 !== n2 ? o5 + e4.slice(s5, n2) : o5;
  }
  return e4;
}
function sanitizeURL(e4) {
  return ga.test("" + e4) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e4;
}
function scriptReplacer(e4, r4, n2, o5) {
  return r4 + ("s" === n2 ? "\\u0073" : "\\u0053") + o5;
}
function createPreambleState() {
  return { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 };
}
function createFormatContext(e4, r4, n2) {
  return { insertionMode: e4, selectedValue: r4, tagScope: n2 };
}
function getChildFormatContext(e4, r4, n2) {
  switch (r4) {
    case "noscript":
      return createFormatContext(2, null, 1 | e4.tagScope);
    case "select":
      return createFormatContext(2, null != n2.value ? n2.value : n2.defaultValue, e4.tagScope);
    case "svg":
      return createFormatContext(4, null, e4.tagScope);
    case "picture":
      return createFormatContext(2, null, 2 | e4.tagScope);
    case "math":
      return createFormatContext(5, null, e4.tagScope);
    case "foreignObject":
      return createFormatContext(2, null, e4.tagScope);
    case "table":
      return createFormatContext(6, null, e4.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return createFormatContext(7, null, e4.tagScope);
    case "colgroup":
      return createFormatContext(9, null, e4.tagScope);
    case "tr":
      return createFormatContext(8, null, e4.tagScope);
    case "head":
      if (2 > e4.insertionMode) return createFormatContext(3, null, e4.tagScope);
      break;
    case "html":
      if (0 === e4.insertionMode) return createFormatContext(1, null, e4.tagScope);
  }
  return 6 <= e4.insertionMode || 2 > e4.insertionMode ? createFormatContext(2, null, e4.tagScope) : e4;
}
function pushStyleAttribute(e4, r4) {
  if ("object" != typeof r4) throw Error(formatProdErrorMessage(62));
  var n2, o5 = true;
  for (n2 in r4) if (ia.call(r4, n2)) {
    var s5 = r4[n2];
    if (null != s5 && "boolean" != typeof s5 && "" !== s5) {
      if (0 === n2.indexOf("--")) {
        var a6 = escapeTextForBrowser(n2);
        s5 = escapeTextForBrowser(("" + s5).trim());
      } else void 0 === (a6 = wa.get(n2)) && (a6 = escapeTextForBrowser(n2.replace(fa, "-$1").toLowerCase().replace(ma, "-ms-")), wa.set(n2, a6)), s5 = "number" == typeof s5 ? 0 === s5 || ha.has(n2) ? "" + s5 : s5 + "px" : escapeTextForBrowser(("" + s5).trim());
      o5 ? (o5 = false, e4.push(' style="', a6, ":", s5)) : e4.push(";", a6, ":", s5);
    }
  }
  o5 || e4.push('"');
}
function pushBooleanAttribute(e4, r4, n2) {
  n2 && "function" != typeof n2 && "symbol" != typeof n2 && e4.push(" ", r4, '=""');
}
function pushStringAttribute(e4, r4, n2) {
  "function" != typeof n2 && "symbol" != typeof n2 && "boolean" != typeof n2 && e4.push(" ", r4, '="', escapeTextForBrowser(n2), '"');
}
function pushAdditionalFormField(e4, r4) {
  this.push('<input type="hidden"'), validateAdditionalFormField(e4), pushStringAttribute(this, "name", r4), pushStringAttribute(this, "value", e4), this.push("/>");
}
function validateAdditionalFormField(e4) {
  if ("string" != typeof e4) throw Error(formatProdErrorMessage(480));
}
function getCustomFormFields(e4, r4) {
  if ("function" == typeof r4.$$FORM_ACTION) {
    var n2 = e4.nextFormID++;
    e4 = e4.idPrefix + n2;
    try {
      var o5 = r4.$$FORM_ACTION(e4);
      if (o5) {
        var s5 = o5.data;
        null != s5 && s5.forEach(validateAdditionalFormField);
      }
      return o5;
    } catch (e5) {
      if ("object" == typeof e5 && null !== e5 && "function" == typeof e5.then) throw e5;
    }
  }
  return null;
}
function pushFormActionAttribute(e4, r4, n2, o5, s5, a6, i5, l5) {
  var u3 = null;
  if ("function" == typeof o5) {
    var c4 = getCustomFormFields(r4, o5);
    null !== c4 ? (l5 = c4.name, o5 = c4.action || "", s5 = c4.encType, a6 = c4.method, i5 = c4.target, u3 = c4.data) : (e4.push(" ", "formAction", '="', Pa, '"'), i5 = a6 = s5 = o5 = l5 = null, injectFormReplayingRuntime(r4, n2));
  }
  return null != l5 && pushAttribute(e4, "name", l5), null != o5 && pushAttribute(e4, "formAction", o5), null != s5 && pushAttribute(e4, "formEncType", s5), null != a6 && pushAttribute(e4, "formMethod", a6), null != i5 && pushAttribute(e4, "formTarget", i5), u3;
}
function pushAttribute(e4, r4, n2) {
  switch (r4) {
    case "className":
      pushStringAttribute(e4, "class", n2);
      break;
    case "tabIndex":
      pushStringAttribute(e4, "tabindex", n2);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      pushStringAttribute(e4, r4, n2);
      break;
    case "style":
      pushStyleAttribute(e4, n2);
      break;
    case "src":
    case "href":
      if ("" === n2) break;
    case "action":
    case "formAction":
      if (null == n2 || "function" == typeof n2 || "symbol" == typeof n2 || "boolean" == typeof n2) break;
      n2 = sanitizeURL("" + n2), e4.push(" ", r4, '="', escapeTextForBrowser(n2), '"');
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      pushBooleanAttribute(e4, r4.toLowerCase(), n2);
      break;
    case "xlinkHref":
      if ("function" == typeof n2 || "symbol" == typeof n2 || "boolean" == typeof n2) break;
      n2 = sanitizeURL("" + n2), e4.push(" ", "xlink:href", '="', escapeTextForBrowser(n2), '"');
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      "function" != typeof n2 && "symbol" != typeof n2 && e4.push(" ", r4, '="', escapeTextForBrowser(n2), '"');
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      n2 && "function" != typeof n2 && "symbol" != typeof n2 && e4.push(" ", r4, '=""');
      break;
    case "capture":
    case "download":
      true === n2 ? e4.push(" ", r4, '=""') : false !== n2 && "function" != typeof n2 && "symbol" != typeof n2 && e4.push(" ", r4, '="', escapeTextForBrowser(n2), '"');
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      "function" != typeof n2 && "symbol" != typeof n2 && !isNaN(n2) && 1 <= n2 && e4.push(" ", r4, '="', escapeTextForBrowser(n2), '"');
      break;
    case "rowSpan":
    case "start":
      "function" == typeof n2 || "symbol" == typeof n2 || isNaN(n2) || e4.push(" ", r4, '="', escapeTextForBrowser(n2), '"');
      break;
    case "xlinkActuate":
      pushStringAttribute(e4, "xlink:actuate", n2);
      break;
    case "xlinkArcrole":
      pushStringAttribute(e4, "xlink:arcrole", n2);
      break;
    case "xlinkRole":
      pushStringAttribute(e4, "xlink:role", n2);
      break;
    case "xlinkShow":
      pushStringAttribute(e4, "xlink:show", n2);
      break;
    case "xlinkTitle":
      pushStringAttribute(e4, "xlink:title", n2);
      break;
    case "xlinkType":
      pushStringAttribute(e4, "xlink:type", n2);
      break;
    case "xmlBase":
      pushStringAttribute(e4, "xml:base", n2);
      break;
    case "xmlLang":
      pushStringAttribute(e4, "xml:lang", n2);
      break;
    case "xmlSpace":
      pushStringAttribute(e4, "xml:space", n2);
      break;
    default:
      if ((!(2 < r4.length) || "o" !== r4[0] && "O" !== r4[0] || "n" !== r4[1] && "N" !== r4[1]) && isAttributeNameSafe(r4 = da.get(r4) || r4)) {
        switch (typeof n2) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var o5 = r4.toLowerCase().slice(0, 5);
            if ("data-" !== o5 && "aria-" !== o5) return;
        }
        e4.push(" ", r4, '="', escapeTextForBrowser(n2), '"');
      }
  }
}
function pushInnerHTML(e4, r4, n2) {
  if (null != r4) {
    if (null != n2) throw Error(formatProdErrorMessage(60));
    if ("object" != typeof r4 || !("__html" in r4)) throw Error(formatProdErrorMessage(61));
    null != (r4 = r4.__html) && e4.push("" + r4);
  }
}
function injectFormReplayingRuntime(e4, r4) {
  !(16 & e4.instructions) && (e4.instructions |= 16, r4.bootstrapChunks.unshift(r4.startInlineScript, `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`, "<\/script>"));
}
function pushLinkImpl(e4, r4) {
  for (var n2 in e4.push(startChunkForTag("link")), r4) if (ia.call(r4, n2)) {
    var o5 = r4[n2];
    if (null != o5) switch (n2) {
      case "children":
      case "dangerouslySetInnerHTML":
        throw Error(formatProdErrorMessage(399, "link"));
      default:
        pushAttribute(e4, n2, o5);
    }
  }
  return e4.push("/>"), null;
}
function styleReplacer(e4, r4, n2, o5) {
  return r4 + ("s" === n2 ? "\\73 " : "\\53 ") + o5;
}
function pushSelfClosing(e4, r4, n2) {
  for (var o5 in e4.push(startChunkForTag(n2)), r4) if (ia.call(r4, o5)) {
    var s5 = r4[o5];
    if (null != s5) switch (o5) {
      case "children":
      case "dangerouslySetInnerHTML":
        throw Error(formatProdErrorMessage(399, n2));
      default:
        pushAttribute(e4, o5, s5);
    }
  }
  return e4.push("/>"), null;
}
function pushTitleImpl(e4, r4) {
  e4.push(startChunkForTag("title"));
  var n2, o5 = null, s5 = null;
  for (n2 in r4) if (ia.call(r4, n2)) {
    var a6 = r4[n2];
    if (null != a6) switch (n2) {
      case "children":
        o5 = a6;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a6;
        break;
      default:
        pushAttribute(e4, n2, a6);
    }
  }
  return e4.push(">"), "function" != typeof (r4 = Array.isArray(o5) ? 2 > o5.length ? o5[0] : null : o5) && "symbol" != typeof r4 && null != r4 && e4.push(escapeTextForBrowser("" + r4)), pushInnerHTML(e4, s5, o5), e4.push(endChunkForTag("title")), null;
}
function pushScriptImpl(e4, r4) {
  e4.push(startChunkForTag("script"));
  var n2, o5 = null, s5 = null;
  for (n2 in r4) if (ia.call(r4, n2)) {
    var a6 = r4[n2];
    if (null != a6) switch (n2) {
      case "children":
        o5 = a6;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a6;
        break;
      default:
        pushAttribute(e4, n2, a6);
    }
  }
  return e4.push(">"), pushInnerHTML(e4, s5, o5), "string" == typeof o5 && e4.push(("" + o5).replace(Ca, scriptReplacer)), e4.push(endChunkForTag("script")), null;
}
function pushStartSingletonElement(e4, r4, n2) {
  e4.push(startChunkForTag(n2));
  var o5, s5 = n2 = null;
  for (o5 in r4) if (ia.call(r4, o5)) {
    var a6 = r4[o5];
    if (null != a6) switch (o5) {
      case "children":
        n2 = a6;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a6;
        break;
      default:
        pushAttribute(e4, o5, a6);
    }
  }
  return e4.push(">"), pushInnerHTML(e4, s5, n2), n2;
}
function pushStartGenericElement(e4, r4, n2) {
  e4.push(startChunkForTag(n2));
  var o5, s5 = n2 = null;
  for (o5 in r4) if (ia.call(r4, o5)) {
    var a6 = r4[o5];
    if (null != a6) switch (o5) {
      case "children":
        n2 = a6;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a6;
        break;
      default:
        pushAttribute(e4, o5, a6);
    }
  }
  return e4.push(">"), pushInnerHTML(e4, s5, n2), "string" == typeof n2 ? (e4.push(escapeTextForBrowser(n2)), null) : n2;
}
function startChunkForTag(e4) {
  var r4 = Ta.get(e4);
  if (void 0 === r4) {
    if (!Ra.test(e4)) throw Error(formatProdErrorMessage(65, e4));
    r4 = "<" + e4, Ta.set(e4, r4);
  }
  return r4;
}
function pushStartInstance(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4) {
  switch (r4) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "g":
    case "p":
    case "li":
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "a":
      e4.push(startChunkForTag("a"));
      var h4, p4 = null, g3 = null;
      for (h4 in n2) if (ia.call(n2, h4)) {
        var y3 = n2[h4];
        if (null != y3) switch (h4) {
          case "children":
            p4 = y3;
            break;
          case "dangerouslySetInnerHTML":
            g3 = y3;
            break;
          case "href":
            "" === y3 ? pushStringAttribute(e4, "href", "") : pushAttribute(e4, h4, y3);
            break;
          default:
            pushAttribute(e4, h4, y3);
        }
      }
      if (e4.push(">"), pushInnerHTML(e4, g3, p4), "string" == typeof p4) {
        e4.push(escapeTextForBrowser(p4));
        var b3 = null;
      } else b3 = p4;
      return b3;
    case "select":
      e4.push(startChunkForTag("select"));
      var v3, k4 = null, C4 = null;
      for (v3 in n2) if (ia.call(n2, v3)) {
        var P4 = n2[v3];
        if (null != P4) switch (v3) {
          case "children":
            k4 = P4;
            break;
          case "dangerouslySetInnerHTML":
            C4 = P4;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            pushAttribute(e4, v3, P4);
        }
      }
      return e4.push(">"), pushInnerHTML(e4, C4, k4), k4;
    case "option":
      var R4 = l5.selectedValue;
      e4.push(startChunkForTag("option"));
      var T4, $3 = null, E4 = null, F4 = null, I4 = null;
      for (T4 in n2) if (ia.call(n2, T4)) {
        var A4 = n2[T4];
        if (null != A4) switch (T4) {
          case "children":
            $3 = A4;
            break;
          case "selected":
            F4 = A4;
            break;
          case "dangerouslySetInnerHTML":
            I4 = A4;
            break;
          case "value":
            E4 = A4;
          default:
            pushAttribute(e4, T4, A4);
        }
      }
      if (null != R4) {
        var O4 = null !== E4 ? "" + E4 : function(e5) {
          var r5 = "";
          return Bs.Children.forEach(e5, function(e6) {
            null != e6 && (r5 += e6);
          }), r5;
        }($3);
        if (sa(R4)) {
          for (var N4 = 0; N4 < R4.length; N4++) if ("" + R4[N4] === O4) {
            e4.push(' selected=""');
            break;
          }
        } else "" + R4 === O4 && e4.push(' selected=""');
      } else F4 && e4.push(' selected=""');
      return e4.push(">"), pushInnerHTML(e4, I4, $3), $3;
    case "textarea":
      e4.push(startChunkForTag("textarea"));
      var B3, D4 = null, H3 = null, V4 = null;
      for (B3 in n2) if (ia.call(n2, B3)) {
        var q3 = n2[B3];
        if (null != q3) switch (B3) {
          case "children":
            V4 = q3;
            break;
          case "value":
            D4 = q3;
            break;
          case "defaultValue":
            H3 = q3;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(91));
          default:
            pushAttribute(e4, B3, q3);
        }
      }
      if (null === D4 && null !== H3 && (D4 = H3), e4.push(">"), null != V4) {
        if (null != D4) throw Error(formatProdErrorMessage(92));
        if (sa(V4)) {
          if (1 < V4.length) throw Error(formatProdErrorMessage(93));
          D4 = "" + V4[0];
        }
        D4 = "" + V4;
      }
      return "string" == typeof D4 && "\n" === D4[0] && e4.push("\n"), null !== D4 && e4.push(escapeTextForBrowser("" + D4)), null;
    case "input":
      e4.push(startChunkForTag("input"));
      var W4, G3 = null, X4 = null, Q3 = null, Y4 = null, Z3 = null, ee3 = null, te3 = null, re3 = null, ne3 = null;
      for (W4 in n2) if (ia.call(n2, W4)) {
        var oe3 = n2[W4];
        if (null != oe3) switch (W4) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(399, "input"));
          case "name":
            G3 = oe3;
            break;
          case "formAction":
            X4 = oe3;
            break;
          case "formEncType":
            Q3 = oe3;
            break;
          case "formMethod":
            Y4 = oe3;
            break;
          case "formTarget":
            Z3 = oe3;
            break;
          case "defaultChecked":
            ne3 = oe3;
            break;
          case "defaultValue":
            te3 = oe3;
            break;
          case "checked":
            re3 = oe3;
            break;
          case "value":
            ee3 = oe3;
            break;
          default:
            pushAttribute(e4, W4, oe3);
        }
      }
      var ae3 = pushFormActionAttribute(e4, o5, s5, X4, Q3, Y4, Z3, G3);
      return null !== re3 ? pushBooleanAttribute(e4, "checked", re3) : null !== ne3 && pushBooleanAttribute(e4, "checked", ne3), null !== ee3 ? pushAttribute(e4, "value", ee3) : null !== te3 && pushAttribute(e4, "value", te3), e4.push("/>"), null != ae3 && ae3.forEach(pushAdditionalFormField, e4), null;
    case "button":
      e4.push(startChunkForTag("button"));
      var ie3, le3 = null, ue3 = null, ce3 = null, he3 = null, de3 = null, pe3 = null, ge3 = null;
      for (ie3 in n2) if (ia.call(n2, ie3)) {
        var ye3 = n2[ie3];
        if (null != ye3) switch (ie3) {
          case "children":
            le3 = ye3;
            break;
          case "dangerouslySetInnerHTML":
            ue3 = ye3;
            break;
          case "name":
            ce3 = ye3;
            break;
          case "formAction":
            he3 = ye3;
            break;
          case "formEncType":
            de3 = ye3;
            break;
          case "formMethod":
            pe3 = ye3;
            break;
          case "formTarget":
            ge3 = ye3;
            break;
          default:
            pushAttribute(e4, ie3, ye3);
        }
      }
      var be3 = pushFormActionAttribute(e4, o5, s5, he3, de3, pe3, ge3, ce3);
      if (e4.push(">"), null != be3 && be3.forEach(pushAdditionalFormField, e4), pushInnerHTML(e4, ue3, le3), "string" == typeof le3) {
        e4.push(escapeTextForBrowser(le3));
        var ve3 = null;
      } else ve3 = le3;
      return ve3;
    case "form":
      e4.push(startChunkForTag("form"));
      var ke3, Se3 = null, Ce3 = null, we3 = null, Pe3 = null, xe3 = null, Re3 = null;
      for (ke3 in n2) if (ia.call(n2, ke3)) {
        var Te3 = n2[ke3];
        if (null != Te3) switch (ke3) {
          case "children":
            Se3 = Te3;
            break;
          case "dangerouslySetInnerHTML":
            Ce3 = Te3;
            break;
          case "action":
            we3 = Te3;
            break;
          case "encType":
            Pe3 = Te3;
            break;
          case "method":
            xe3 = Te3;
            break;
          case "target":
            Re3 = Te3;
            break;
          default:
            pushAttribute(e4, ke3, Te3);
        }
      }
      var $e3 = null, Ee3 = null;
      if ("function" == typeof we3) {
        var Fe3 = getCustomFormFields(o5, we3);
        null !== Fe3 ? (we3 = Fe3.action || "", Pe3 = Fe3.encType, xe3 = Fe3.method, Re3 = Fe3.target, $e3 = Fe3.data, Ee3 = Fe3.name) : (e4.push(" ", "action", '="', Pa, '"'), Re3 = xe3 = Pe3 = we3 = null, injectFormReplayingRuntime(o5, s5));
      }
      if (null != we3 && pushAttribute(e4, "action", we3), null != Pe3 && pushAttribute(e4, "encType", Pe3), null != xe3 && pushAttribute(e4, "method", xe3), null != Re3 && pushAttribute(e4, "target", Re3), e4.push(">"), null !== Ee3 && (e4.push('<input type="hidden"'), pushStringAttribute(e4, "name", Ee3), e4.push("/>"), null != $e3 && $e3.forEach(pushAdditionalFormField, e4)), pushInnerHTML(e4, Ce3, Se3), "string" == typeof Se3) {
        e4.push(escapeTextForBrowser(Se3));
        var Ie3 = null;
      } else Ie3 = Se3;
      return Ie3;
    case "menuitem":
      for (var _e3 in e4.push(startChunkForTag("menuitem")), n2) if (ia.call(n2, _e3)) {
        var Ae3 = n2[_e3];
        if (null != Ae3) switch (_e3) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(400));
          default:
            pushAttribute(e4, _e3, Ae3);
        }
      }
      return e4.push(">"), null;
    case "object":
      e4.push(startChunkForTag("object"));
      var Me3, Oe3 = null, Ne3 = null;
      for (Me3 in n2) if (ia.call(n2, Me3)) {
        var Be3 = n2[Me3];
        if (null != Be3) switch (Me3) {
          case "children":
            Oe3 = Be3;
            break;
          case "dangerouslySetInnerHTML":
            Ne3 = Be3;
            break;
          case "data":
            var De3 = sanitizeURL("" + Be3);
            if ("" === De3) break;
            e4.push(" ", "data", '="', escapeTextForBrowser(De3), '"');
            break;
          default:
            pushAttribute(e4, Me3, Be3);
        }
      }
      if (e4.push(">"), pushInnerHTML(e4, Ne3, Oe3), "string" == typeof Oe3) {
        e4.push(escapeTextForBrowser(Oe3));
        var ze3 = null;
      } else ze3 = Oe3;
      return ze3;
    case "title":
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp) var He3 = pushTitleImpl(e4, n2);
      else c4 ? He3 = null : (pushTitleImpl(s5.hoistableChunks, n2), He3 = void 0);
      return He3;
    case "link":
      var Ve3 = n2.rel, qe3 = n2.href, We3 = n2.precedence;
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp || "string" != typeof Ve3 || "string" != typeof qe3 || "" === qe3) {
        pushLinkImpl(e4, n2);
        var Ue3 = null;
      } else if ("stylesheet" === n2.rel) if ("string" != typeof We3 || null != n2.disabled || n2.onLoad || n2.onError) Ue3 = pushLinkImpl(e4, n2);
      else {
        var Ke3 = s5.styles.get(We3), Ge3 = o5.styleResources.hasOwnProperty(qe3) ? o5.styleResources[qe3] : void 0;
        if (null !== Ge3) {
          o5.styleResources[qe3] = null, Ke3 || (Ke3 = { precedence: escapeTextForBrowser(We3), rules: [], hrefs: [], sheets: /* @__PURE__ */ new Map() }, s5.styles.set(We3, Ke3));
          var Je3 = { state: 0, props: aa({}, n2, { "data-precedence": n2.precedence, precedence: null }) };
          if (Ge3) {
            2 === Ge3.length && adoptPreloadCredentials(Je3.props, Ge3);
            var Xe3 = s5.preloads.stylesheets.get(qe3);
            Xe3 && 0 < Xe3.length ? Xe3.length = 0 : Je3.state = 1;
          }
          Ke3.sheets.set(qe3, Je3), i5 && i5.stylesheets.add(Je3);
        } else if (Ke3) {
          var Qe3 = Ke3.sheets.get(qe3);
          Qe3 && i5 && i5.stylesheets.add(Qe3);
        }
        u3 && e4.push("<!-- -->"), Ue3 = null;
      }
      else n2.onLoad || n2.onError ? Ue3 = pushLinkImpl(e4, n2) : (u3 && e4.push("<!-- -->"), Ue3 = c4 ? null : pushLinkImpl(s5.hoistableChunks, n2));
      return Ue3;
    case "script":
      var Ze3 = n2.async;
      if ("string" != typeof n2.src || !n2.src || !Ze3 || "function" == typeof Ze3 || "symbol" == typeof Ze3 || n2.onLoad || n2.onError || 4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp) var et3 = pushScriptImpl(e4, n2);
      else {
        var tt3 = n2.src;
        if ("module" === n2.type) var rt3 = o5.moduleScriptResources, nt3 = s5.preloads.moduleScripts;
        else rt3 = o5.scriptResources, nt3 = s5.preloads.scripts;
        var ot3 = rt3.hasOwnProperty(tt3) ? rt3[tt3] : void 0;
        if (null !== ot3) {
          rt3[tt3] = null;
          var st3 = n2;
          if (ot3) {
            2 === ot3.length && adoptPreloadCredentials(st3 = aa({}, n2), ot3);
            var at3 = nt3.get(tt3);
            at3 && (at3.length = 0);
          }
          var it3 = [];
          s5.scripts.add(it3), pushScriptImpl(it3, st3);
        }
        u3 && e4.push("<!-- -->"), et3 = null;
      }
      return et3;
    case "style":
      var lt3 = n2.precedence, ut3 = n2.href;
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp || "string" != typeof lt3 || "string" != typeof ut3 || "" === ut3) {
        e4.push(startChunkForTag("style"));
        var ct3, ht3 = null, dt3 = null;
        for (ct3 in n2) if (ia.call(n2, ct3)) {
          var pt3 = n2[ct3];
          if (null != pt3) switch (ct3) {
            case "children":
              ht3 = pt3;
              break;
            case "dangerouslySetInnerHTML":
              dt3 = pt3;
              break;
            default:
              pushAttribute(e4, ct3, pt3);
          }
        }
        e4.push(">");
        var ft3 = Array.isArray(ht3) ? 2 > ht3.length ? ht3[0] : null : ht3;
        "function" != typeof ft3 && "symbol" != typeof ft3 && null != ft3 && e4.push(("" + ft3).replace(xa, styleReplacer)), pushInnerHTML(e4, dt3, ht3), e4.push(endChunkForTag("style"));
        var mt3 = null;
      } else {
        var gt3 = s5.styles.get(lt3);
        if (null !== (o5.styleResources.hasOwnProperty(ut3) ? o5.styleResources[ut3] : void 0)) {
          o5.styleResources[ut3] = null, gt3 ? gt3.hrefs.push(escapeTextForBrowser(ut3)) : (gt3 = { precedence: escapeTextForBrowser(lt3), rules: [], hrefs: [escapeTextForBrowser(ut3)], sheets: /* @__PURE__ */ new Map() }, s5.styles.set(lt3, gt3));
          var yt3, bt3 = gt3.rules, vt3 = null, kt3 = null;
          for (yt3 in n2) if (ia.call(n2, yt3)) {
            var St3 = n2[yt3];
            if (null != St3) switch (yt3) {
              case "children":
                vt3 = St3;
                break;
              case "dangerouslySetInnerHTML":
                kt3 = St3;
            }
          }
          var Ct3 = Array.isArray(vt3) ? 2 > vt3.length ? vt3[0] : null : vt3;
          "function" != typeof Ct3 && "symbol" != typeof Ct3 && null != Ct3 && bt3.push(("" + Ct3).replace(xa, styleReplacer)), pushInnerHTML(bt3, kt3, vt3);
        }
        gt3 && i5 && i5.styles.add(gt3), u3 && e4.push("<!-- -->"), mt3 = void 0;
      }
      return mt3;
    case "meta":
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n2.itemProp) var wt3 = pushSelfClosing(e4, n2, "meta");
      else u3 && e4.push("<!-- -->"), wt3 = c4 ? null : "string" == typeof n2.charSet ? pushSelfClosing(s5.charsetChunks, n2, "meta") : "viewport" === n2.name ? pushSelfClosing(s5.viewportChunks, n2, "meta") : pushSelfClosing(s5.hoistableChunks, n2, "meta");
      return wt3;
    case "listing":
    case "pre":
      e4.push(startChunkForTag(r4));
      var Pt3, xt3 = null, Rt3 = null;
      for (Pt3 in n2) if (ia.call(n2, Pt3)) {
        var Tt3 = n2[Pt3];
        if (null != Tt3) switch (Pt3) {
          case "children":
            xt3 = Tt3;
            break;
          case "dangerouslySetInnerHTML":
            Rt3 = Tt3;
            break;
          default:
            pushAttribute(e4, Pt3, Tt3);
        }
      }
      if (e4.push(">"), null != Rt3) {
        if (null != xt3) throw Error(formatProdErrorMessage(60));
        if ("object" != typeof Rt3 || !("__html" in Rt3)) throw Error(formatProdErrorMessage(61));
        var $t3 = Rt3.__html;
        null != $t3 && ("string" == typeof $t3 && 0 < $t3.length && "\n" === $t3[0] ? e4.push("\n", $t3) : e4.push("" + $t3));
      }
      return "string" == typeof xt3 && "\n" === xt3[0] && e4.push("\n"), xt3;
    case "img":
      var Et3 = n2.src, Ft3 = n2.srcSet;
      if (!("lazy" === n2.loading || !Et3 && !Ft3 || "string" != typeof Et3 && null != Et3 || "string" != typeof Ft3 && null != Ft3) && "low" !== n2.fetchPriority && false == !!(3 & l5.tagScope) && ("string" != typeof Et3 || ":" !== Et3[4] || "d" !== Et3[0] && "D" !== Et3[0] || "a" !== Et3[1] && "A" !== Et3[1] || "t" !== Et3[2] && "T" !== Et3[2] || "a" !== Et3[3] && "A" !== Et3[3]) && ("string" != typeof Ft3 || ":" !== Ft3[4] || "d" !== Ft3[0] && "D" !== Ft3[0] || "a" !== Ft3[1] && "A" !== Ft3[1] || "t" !== Ft3[2] && "T" !== Ft3[2] || "a" !== Ft3[3] && "A" !== Ft3[3])) {
        var It3 = "string" == typeof n2.sizes ? n2.sizes : void 0, _t3 = Ft3 ? Ft3 + "\n" + (It3 || "") : Et3, At3 = s5.preloads.images, Mt3 = At3.get(_t3);
        if (Mt3) ("high" === n2.fetchPriority || 10 > s5.highImagePreloads.size) && (At3.delete(_t3), s5.highImagePreloads.add(Mt3));
        else if (!o5.imageResources.hasOwnProperty(_t3)) {
          o5.imageResources[_t3] = Sa;
          var Ot3, Lt3 = n2.crossOrigin, Nt3 = "string" == typeof Lt3 ? "use-credentials" === Lt3 ? Lt3 : "" : void 0, Bt3 = s5.headers;
          Bt3 && 0 < Bt3.remainingCapacity && "string" != typeof n2.srcSet && ("high" === n2.fetchPriority || 500 > Bt3.highImagePreloads.length) && (Ot3 = getPreloadAsHeader(Et3, "image", { imageSrcSet: n2.srcSet, imageSizes: n2.sizes, crossOrigin: Nt3, integrity: n2.integrity, nonce: n2.nonce, type: n2.type, fetchPriority: n2.fetchPriority, referrerPolicy: n2.refererPolicy }), 0 <= (Bt3.remainingCapacity -= Ot3.length + 2)) ? (s5.resets.image[_t3] = Sa, Bt3.highImagePreloads && (Bt3.highImagePreloads += ", "), Bt3.highImagePreloads += Ot3) : (pushLinkImpl(Mt3 = [], { rel: "preload", as: "image", href: Ft3 ? void 0 : Et3, imageSrcSet: Ft3, imageSizes: It3, crossOrigin: Nt3, integrity: n2.integrity, type: n2.type, fetchPriority: n2.fetchPriority, referrerPolicy: n2.referrerPolicy }), "high" === n2.fetchPriority || 10 > s5.highImagePreloads.size ? s5.highImagePreloads.add(Mt3) : (s5.bulkPreloads.add(Mt3), At3.set(_t3, Mt3)));
        }
      }
      return pushSelfClosing(e4, n2, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return pushSelfClosing(e4, n2, r4);
    case "head":
      if (2 > l5.insertionMode) {
        var jt3 = a6 || s5.preamble;
        if (jt3.headChunks) throw Error(formatProdErrorMessage(545, "`<head>`"));
        jt3.headChunks = [];
        var Dt3 = pushStartSingletonElement(jt3.headChunks, n2, "head");
      } else Dt3 = pushStartGenericElement(e4, n2, "head");
      return Dt3;
    case "body":
      if (2 > l5.insertionMode) {
        var zt3 = a6 || s5.preamble;
        if (zt3.bodyChunks) throw Error(formatProdErrorMessage(545, "`<body>`"));
        zt3.bodyChunks = [];
        var Ht3 = pushStartSingletonElement(zt3.bodyChunks, n2, "body");
      } else Ht3 = pushStartGenericElement(e4, n2, "body");
      return Ht3;
    case "html":
      if (0 === l5.insertionMode) {
        var Vt3 = a6 || s5.preamble;
        if (Vt3.htmlChunks) throw Error(formatProdErrorMessage(545, "`<html>`"));
        Vt3.htmlChunks = [""];
        var qt3 = pushStartSingletonElement(Vt3.htmlChunks, n2, "html");
      } else qt3 = pushStartGenericElement(e4, n2, "html");
      return qt3;
    default:
      if (-1 !== r4.indexOf("-")) {
        e4.push(startChunkForTag(r4));
        var Wt3, Ut3 = null, Kt3 = null;
        for (Wt3 in n2) if (ia.call(n2, Wt3)) {
          var Gt3 = n2[Wt3];
          if (null != Gt3) {
            var Jt3 = Wt3;
            switch (Wt3) {
              case "children":
                Ut3 = Gt3;
                break;
              case "dangerouslySetInnerHTML":
                Kt3 = Gt3;
                break;
              case "style":
                pushStyleAttribute(e4, Gt3);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "ref":
                break;
              case "className":
                Jt3 = "class";
              default:
                if (isAttributeNameSafe(Wt3) && "function" != typeof Gt3 && "symbol" != typeof Gt3 && false !== Gt3) {
                  if (true === Gt3) Gt3 = "";
                  else if ("object" == typeof Gt3) continue;
                  e4.push(" ", Jt3, '="', escapeTextForBrowser(Gt3), '"');
                }
            }
          }
        }
        return e4.push(">"), pushInnerHTML(e4, Kt3, Ut3), Ut3;
      }
  }
  return pushStartGenericElement(e4, n2, r4);
}
function endChunkForTag(e4) {
  var r4 = $a.get(e4);
  return void 0 === r4 && (r4 = "</" + e4 + ">", $a.set(e4, r4)), r4;
}
function hoistPreambleState(e4, r4) {
  null === (e4 = e4.preamble).htmlChunks && r4.htmlChunks && (e4.htmlChunks = r4.htmlChunks, r4.contribution |= 1), null === e4.headChunks && r4.headChunks && (e4.headChunks = r4.headChunks, r4.contribution |= 4), null === e4.bodyChunks && r4.bodyChunks && (e4.bodyChunks = r4.bodyChunks, r4.contribution |= 2);
}
function writeBootstrap(e4, r4) {
  r4 = r4.bootstrapChunks;
  for (var n2 = 0; n2 < r4.length - 1; n2++) e4.push(r4[n2]);
  return !(n2 < r4.length) || (n2 = r4[n2], r4.length = 0, e4.push(n2));
}
function writeStartPendingSuspenseBoundary(e4, r4, n2) {
  if (e4.push('<!--$?--><template id="'), null === n2) throw Error(formatProdErrorMessage(395));
  return e4.push(r4.boundaryPrefix), r4 = n2.toString(16), e4.push(r4), e4.push('"></template>');
}
function writePreambleContribution(e4, r4) {
  0 !== (r4 = r4.contribution) && (e4.push("<!--"), e4.push("" + r4), e4.push("-->"));
}
function escapeJSStringsForInstructionScripts(e4) {
  return JSON.stringify(e4).replace(Ea, function(e5) {
    switch (e5) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function escapeJSObjectForInstructionScripts(e4) {
  return JSON.stringify(e4).replace(Fa, function(e5) {
    switch (e5) {
      case "&":
        return "\\u0026";
      case ">":
        return "\\u003e";
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function flushStyleTagsLateForBoundary(e4) {
  var r4 = e4.rules, n2 = e4.hrefs, o5 = 0;
  if (n2.length) {
    for (this.push('<style media="not all" data-precedence="'), this.push(e4.precedence), this.push('" data-href="'); o5 < n2.length - 1; o5++) this.push(n2[o5]), this.push(" ");
    for (this.push(n2[o5]), this.push('">'), o5 = 0; o5 < r4.length; o5++) this.push(r4[o5]);
    _a = this.push("</style>"), Ia = true, r4.length = 0, n2.length = 0;
  }
}
function hasStylesToHoist(e4) {
  return 2 !== e4.state && (Ia = true);
}
function writeHoistablesForBoundary(e4, r4, n2) {
  return Ia = false, _a = true, r4.styles.forEach(flushStyleTagsLateForBoundary, e4), r4.stylesheets.forEach(hasStylesToHoist), Ia && (n2.stylesToHoist = true), _a;
}
function flushResource(e4) {
  for (var r4 = 0; r4 < e4.length; r4++) this.push(e4[r4]);
  e4.length = 0;
}
function flushStyleInPreamble(e4) {
  pushLinkImpl(Aa, e4.props);
  for (var r4 = 0; r4 < Aa.length; r4++) this.push(Aa[r4]);
  Aa.length = 0, e4.state = 2;
}
function flushStylesInPreamble(e4) {
  var r4 = 0 < e4.sheets.size;
  e4.sheets.forEach(flushStyleInPreamble, this), e4.sheets.clear();
  var n2 = e4.rules, o5 = e4.hrefs;
  if (!r4 || o5.length) {
    if (this.push('<style data-precedence="'), this.push(e4.precedence), e4 = 0, o5.length) {
      for (this.push('" data-href="'); e4 < o5.length - 1; e4++) this.push(o5[e4]), this.push(" ");
      this.push(o5[e4]);
    }
    for (this.push('">'), e4 = 0; e4 < n2.length; e4++) this.push(n2[e4]);
    this.push("</style>"), n2.length = 0, o5.length = 0;
  }
}
function preloadLateStyle(e4) {
  if (0 === e4.state) {
    e4.state = 1;
    var r4 = e4.props;
    for (pushLinkImpl(Aa, { rel: "preload", as: "style", href: e4.props.href, crossOrigin: r4.crossOrigin, fetchPriority: r4.fetchPriority, integrity: r4.integrity, media: r4.media, hrefLang: r4.hrefLang, referrerPolicy: r4.referrerPolicy }), e4 = 0; e4 < Aa.length; e4++) this.push(Aa[e4]);
    Aa.length = 0;
  }
}
function preloadLateStyles(e4) {
  e4.sheets.forEach(preloadLateStyle, this), e4.sheets.clear();
}
function writeStyleResourceAttributeInJS(e4, r4, n2) {
  var o5 = r4.toLowerCase();
  switch (typeof n2) {
    case "function":
    case "symbol":
      return;
  }
  switch (r4) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      o5 = "class", r4 = "" + n2;
      break;
    case "hidden":
      if (false === n2) return;
      r4 = "";
      break;
    case "src":
    case "href":
      r4 = "" + (n2 = sanitizeURL(n2));
      break;
    default:
      if (2 < r4.length && ("o" === r4[0] || "O" === r4[0]) && ("n" === r4[1] || "N" === r4[1]) || !isAttributeNameSafe(r4)) return;
      r4 = "" + n2;
  }
  e4.push(","), o5 = escapeJSObjectForInstructionScripts(o5), e4.push(o5), e4.push(","), o5 = escapeJSObjectForInstructionScripts(r4), e4.push(o5);
}
function createHoistableState() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
}
function adoptPreloadCredentials(e4, r4) {
  null == e4.crossOrigin && (e4.crossOrigin = r4[0]), null == e4.integrity && (e4.integrity = r4[1]);
}
function getPreloadAsHeader(e4, r4, n2) {
  for (var o5 in r4 = "<" + (e4 = ("" + e4).replace(Ma, escapeHrefForLinkHeaderURLContextReplacer)) + '>; rel=preload; as="' + (r4 = ("" + r4).replace(Oa, escapeStringForLinkHeaderQuotedParamValueContextReplacer)) + '"', n2) ia.call(n2, o5) && ("string" == typeof (e4 = n2[o5]) && (r4 += "; " + o5.toLowerCase() + '="' + ("" + e4).replace(Oa, escapeStringForLinkHeaderQuotedParamValueContextReplacer) + '"'));
  return r4;
}
function escapeHrefForLinkHeaderURLContextReplacer(e4) {
  switch (e4) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case "\n":
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function escapeStringForLinkHeaderQuotedParamValueContextReplacer(e4) {
  switch (e4) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case "\n":
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function hoistStyleQueueDependency(e4) {
  this.styles.add(e4);
}
function hoistStylesheetDependency(e4) {
  this.stylesheets.add(e4);
}
function pushTextInstance(e4, r4, n2, o5) {
  return n2.generateStaticMarkup ? (e4.push(escapeTextForBrowser(r4)), false) : ("" === r4 ? e4 = o5 : (o5 && e4.push("<!-- -->"), e4.push(escapeTextForBrowser(r4)), e4 = true), e4);
}
function pushSegmentFinale(e4, r4, n2, o5) {
  r4.generateStaticMarkup || n2 && o5 && e4.push("<!-- -->");
}
function getComponentNameFromType(e4) {
  if (null == e4) return null;
  if ("function" == typeof e4) return e4.$$typeof === Na ? null : e4.displayName || e4.name || null;
  if ("string" == typeof e4) return e4;
  switch (e4) {
    case Hs:
      return "Fragment";
    case qs:
      return "Profiler";
    case Vs:
      return "StrictMode";
    case Js:
      return "Suspense";
    case Xs:
      return "SuspenseList";
    case ea:
      return "Activity";
  }
  if ("object" == typeof e4) switch (e4.$$typeof) {
    case zs:
      return "Portal";
    case Ks:
      return (e4.displayName || "Context") + ".Provider";
    case Us:
      return (e4._context.displayName || "Context") + ".Consumer";
    case Gs:
      var r4 = e4.render;
      return (e4 = e4.displayName) || (e4 = "" !== (e4 = r4.displayName || r4.name || "") ? "ForwardRef(" + e4 + ")" : "ForwardRef"), e4;
    case Qs:
      return null !== (r4 = e4.displayName || null) ? r4 : getComponentNameFromType(e4.type) || "Memo";
    case Ys:
      r4 = e4._payload, e4 = e4._init;
      try {
        return getComponentNameFromType(e4(r4));
      } catch (e5) {
      }
  }
  return null;
}
function popToNearestCommonAncestor(e4, r4) {
  if (e4 !== r4) {
    e4.context._currentValue2 = e4.parentValue, e4 = e4.parent;
    var n2 = r4.parent;
    if (null === e4) {
      if (null !== n2) throw Error(formatProdErrorMessage(401));
    } else {
      if (null === n2) throw Error(formatProdErrorMessage(401));
      popToNearestCommonAncestor(e4, n2);
    }
    r4.context._currentValue2 = r4.value;
  }
}
function popAllPrevious(e4) {
  e4.context._currentValue2 = e4.parentValue, null !== (e4 = e4.parent) && popAllPrevious(e4);
}
function pushAllNext(e4) {
  var r4 = e4.parent;
  null !== r4 && pushAllNext(r4), e4.context._currentValue2 = e4.value;
}
function popPreviousToCommonLevel(e4, r4) {
  if (e4.context._currentValue2 = e4.parentValue, null === (e4 = e4.parent)) throw Error(formatProdErrorMessage(402));
  e4.depth === r4.depth ? popToNearestCommonAncestor(e4, r4) : popPreviousToCommonLevel(e4, r4);
}
function popNextToCommonLevel(e4, r4) {
  var n2 = r4.parent;
  if (null === n2) throw Error(formatProdErrorMessage(402));
  e4.depth === n2.depth ? popToNearestCommonAncestor(e4, n2) : popNextToCommonLevel(e4, n2), r4.context._currentValue2 = r4.value;
}
function switchContext(e4) {
  var r4 = ja;
  r4 !== e4 && (null === r4 ? pushAllNext(e4) : null === e4 ? popAllPrevious(r4) : r4.depth === e4.depth ? popToNearestCommonAncestor(r4, e4) : r4.depth > e4.depth ? popPreviousToCommonLevel(r4, e4) : popNextToCommonLevel(r4, e4), ja = e4);
}
function pushTreeContext(e4, r4, n2) {
  var o5 = e4.id;
  e4 = e4.overflow;
  var s5 = 32 - Ha(o5) - 1;
  o5 &= ~(1 << s5), n2 += 1;
  var a6 = 32 - Ha(r4) + s5;
  if (30 < a6) {
    var i5 = s5 - s5 % 5;
    return a6 = (o5 & (1 << i5) - 1).toString(32), o5 >>= i5, s5 -= i5, { id: 1 << 32 - Ha(r4) + s5 | n2 << s5 | o5, overflow: a6 + e4 };
  }
  return { id: 1 << a6 | n2 << s5 | o5, overflow: e4 };
}
function noop$2() {
}
function getSuspendedThenable() {
  if (null === Ua) throw Error(formatProdErrorMessage(459));
  var e4 = Ua;
  return Ua = null, e4;
}
function resolveCurrentlyRenderingComponent() {
  if (null === Ga) throw Error(formatProdErrorMessage(321));
  return Ga;
}
function createHook() {
  if (0 < li) throw Error(formatProdErrorMessage(312));
  return { memoizedState: null, queue: null, next: null };
}
function createWorkInProgressHook() {
  return null === Za ? null === Ya ? (ei = false, Ya = Za = createHook()) : (ei = true, Za = Ya) : null === Za.next ? (ei = false, Za = Za.next = createHook()) : (ei = true, Za = Za.next), Za;
}
function getThenableStateAfterSuspending() {
  var e4 = ai;
  return ai = null, e4;
}
function resetHooksState() {
  Qa = Xa = Ja = Ga = null, ti = false, Ya = null, li = 0, Za = ii = null;
}
function basicStateReducer(e4, r4) {
  return "function" == typeof r4 ? r4(e4) : r4;
}
function useReducer(e4, r4, n2) {
  if (Ga = resolveCurrentlyRenderingComponent(), Za = createWorkInProgressHook(), ei) {
    var o5 = Za.queue;
    if (r4 = o5.dispatch, null !== ii && void 0 !== (n2 = ii.get(o5))) {
      ii.delete(o5), o5 = Za.memoizedState;
      do {
        o5 = e4(o5, n2.action), n2 = n2.next;
      } while (null !== n2);
      return Za.memoizedState = o5, [o5, r4];
    }
    return [Za.memoizedState, r4];
  }
  return e4 = e4 === basicStateReducer ? "function" == typeof r4 ? r4() : r4 : void 0 !== n2 ? n2(r4) : r4, Za.memoizedState = e4, e4 = (e4 = Za.queue = { last: null, dispatch: null }).dispatch = dispatchAction.bind(null, Ga, e4), [Za.memoizedState, e4];
}
function useMemo(e4, r4) {
  if (Ga = resolveCurrentlyRenderingComponent(), r4 = void 0 === r4 ? null : r4, null !== (Za = createWorkInProgressHook())) {
    var n2 = Za.memoizedState;
    if (null !== n2 && null !== r4) {
      var o5 = n2[1];
      e: if (null === o5) o5 = false;
      else {
        for (var s5 = 0; s5 < o5.length && s5 < r4.length; s5++) if (!Ka(r4[s5], o5[s5])) {
          o5 = false;
          break e;
        }
        o5 = true;
      }
      if (o5) return n2[0];
    }
  }
  return e4 = e4(), Za.memoizedState = [e4, r4], e4;
}
function dispatchAction(e4, r4, n2) {
  if (25 <= li) throw Error(formatProdErrorMessage(301));
  if (e4 === Ga) if (ti = true, e4 = { action: n2, next: null }, null === ii && (ii = /* @__PURE__ */ new Map()), void 0 === (n2 = ii.get(r4))) ii.set(r4, e4);
  else {
    for (r4 = n2; null !== r4.next; ) r4 = r4.next;
    r4.next = e4;
  }
}
function unsupportedStartTransition() {
  throw Error(formatProdErrorMessage(394));
}
function unsupportedSetOptimisticState() {
  throw Error(formatProdErrorMessage(479));
}
function useActionState(e4, r4, n2) {
  resolveCurrentlyRenderingComponent();
  var o5 = ni++, s5 = Xa;
  if ("function" == typeof e4.$$FORM_ACTION) {
    var a6 = null, i5 = Qa;
    s5 = s5.formState;
    var l5 = e4.$$IS_SIGNATURE_EQUAL;
    if (null !== s5 && "function" == typeof l5) {
      var u3 = s5[1];
      l5.call(e4, s5[2], s5[3]) && (u3 === (a6 = void 0 !== n2 ? "p" + n2 : "k" + murmurhash3_32_gc(JSON.stringify([i5, null, o5]), 0)) && (oi = o5, r4 = s5[0]));
    }
    var c4 = e4.bind(null, r4);
    return e4 = /* @__PURE__ */ __name(function(e5) {
      c4(e5);
    }, "e"), "function" == typeof c4.$$FORM_ACTION && (e4.$$FORM_ACTION = function(e5) {
      e5 = c4.$$FORM_ACTION(e5), void 0 !== n2 && (n2 += "", e5.action = n2);
      var r5 = e5.data;
      return r5 && (null === a6 && (a6 = void 0 !== n2 ? "p" + n2 : "k" + murmurhash3_32_gc(JSON.stringify([i5, null, o5]), 0)), r5.append("$ACTION_KEY", a6)), e5;
    }), [r4, e4, false];
  }
  var h4 = e4.bind(null, r4);
  return [r4, function(e5) {
    h4(e5);
  }, false];
}
function unwrapThenable(e4) {
  var r4 = si;
  return si += 1, null === ai && (ai = []), function(e5, r5, n2) {
    switch (void 0 === (n2 = e5[n2]) ? e5.push(r5) : n2 !== r5 && (r5.then(noop$2, noop$2), r5 = n2), r5.status) {
      case "fulfilled":
        return r5.value;
      case "rejected":
        throw r5.reason;
      default:
        switch ("string" == typeof r5.status ? r5.then(noop$2, noop$2) : ((e5 = r5).status = "pending", e5.then(function(e6) {
          if ("pending" === r5.status) {
            var n3 = r5;
            n3.status = "fulfilled", n3.value = e6;
          }
        }, function(e6) {
          if ("pending" === r5.status) {
            var n3 = r5;
            n3.status = "rejected", n3.reason = e6;
          }
        })), r5.status) {
          case "fulfilled":
            return r5.value;
          case "rejected":
            throw r5.reason;
        }
        throw Ua = r5, Wa;
    }
  }(ai, e4, r4);
}
function unsupportedRefresh() {
  throw Error(formatProdErrorMessage(393));
}
function noop$1() {
}
function describeBuiltInComponentFrame(e4) {
  if (void 0 === ui) try {
    throw Error();
  } catch (e5) {
    var r4 = e5.stack.trim().match(/\n( *(at )?)/);
    ui = r4 && r4[1] || "", ci = -1 < e5.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e5.stack.indexOf("@") ? "@unknown:0:0" : "";
  }
  return "\n" + ui + e4 + ci;
}
function describeNativeComponentFrame(e4, r4) {
  if (!e4 || fi) return "";
  fi = true;
  var n2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var o5 = { DetermineComponentFrameRoot: /* @__PURE__ */ __name(function() {
      try {
        if (r4) {
          var Fake = /* @__PURE__ */ __name(function() {
            throw Error();
          }, "Fake");
          if (Object.defineProperty(Fake.prototype, "props", { set: /* @__PURE__ */ __name(function() {
            throw Error();
          }, "set") }), "object" == typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (e5) {
              var n3 = e5;
            }
            Reflect.construct(e4, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (e5) {
              n3 = e5;
            }
            e4.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e5) {
            n3 = e5;
          }
          (Fake = e4()) && "function" == typeof Fake.catch && Fake.catch(function() {
          });
        }
      } catch (e5) {
        if (e5 && n3 && "string" == typeof e5.stack) return [e5.stack, n3.stack];
      }
      return [null, null];
    }, "DetermineComponentFrameRoot") };
    o5.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var s5 = Object.getOwnPropertyDescriptor(o5.DetermineComponentFrameRoot, "name");
    s5 && s5.configurable && Object.defineProperty(o5.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
    var a6 = o5.DetermineComponentFrameRoot(), i5 = a6[0], l5 = a6[1];
    if (i5 && l5) {
      var u3 = i5.split("\n"), c4 = l5.split("\n");
      for (s5 = o5 = 0; o5 < u3.length && !u3[o5].includes("DetermineComponentFrameRoot"); ) o5++;
      for (; s5 < c4.length && !c4[s5].includes("DetermineComponentFrameRoot"); ) s5++;
      if (o5 === u3.length || s5 === c4.length) for (o5 = u3.length - 1, s5 = c4.length - 1; 1 <= o5 && 0 <= s5 && u3[o5] !== c4[s5]; ) s5--;
      for (; 1 <= o5 && 0 <= s5; o5--, s5--) if (u3[o5] !== c4[s5]) {
        if (1 !== o5 || 1 !== s5) do {
          if (o5--, 0 > --s5 || u3[o5] !== c4[s5]) {
            var h4 = "\n" + u3[o5].replace(" at new ", " at ");
            return e4.displayName && h4.includes("<anonymous>") && (h4 = h4.replace("<anonymous>", e4.displayName)), h4;
          }
        } while (1 <= o5 && 0 <= s5);
        break;
      }
    }
  } finally {
    fi = false, Error.prepareStackTrace = n2;
  }
  return (n2 = e4 ? e4.displayName || e4.name : "") ? describeBuiltInComponentFrame(n2) : "";
}
function describeComponentStackByType(e4) {
  if ("string" == typeof e4) return describeBuiltInComponentFrame(e4);
  if ("function" == typeof e4) return e4.prototype && e4.prototype.isReactComponent ? describeNativeComponentFrame(e4, true) : describeNativeComponentFrame(e4, false);
  if ("object" == typeof e4 && null !== e4) {
    switch (e4.$$typeof) {
      case Gs:
        return describeNativeComponentFrame(e4.render, false);
      case Qs:
        return describeNativeComponentFrame(e4.type, false);
      case Ys:
        var r4 = e4, n2 = r4._payload;
        r4 = r4._init;
        try {
          e4 = r4(n2);
        } catch (e5) {
          return describeBuiltInComponentFrame("Lazy");
        }
        return describeComponentStackByType(e4);
    }
    if ("string" == typeof e4.name) return n2 = e4.env, describeBuiltInComponentFrame(e4.name + (n2 ? " [" + n2 + "]" : ""));
  }
  switch (e4) {
    case Xs:
      return describeBuiltInComponentFrame("SuspenseList");
    case Js:
      return describeBuiltInComponentFrame("Suspense");
  }
  return "";
}
function defaultErrorHandler(e4) {
  if ("object" == typeof e4 && null !== e4 && "string" == typeof e4.environmentName) {
    var r4 = e4.environmentName;
    "string" == typeof (e4 = [e4].slice(0))[0] ? e4.splice(0, 1, "[%s] " + e4[0], " " + r4 + " ") : e4.splice(0, 0, "[%s] ", " " + r4 + " "), e4.unshift(console), (r4 = La.apply(console.error, e4))();
  } else console.error(e4);
  return null;
}
function noop() {
}
function RequestInstance(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4, h4) {
  var p4 = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = false, this.resumableState = e4, this.renderState = r4, this.rootFormatContext = n2, this.progressiveChunkSize = void 0 === o5 ? 12800 : o5, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = p4, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === s5 ? defaultErrorHandler : s5, this.onPostpone = void 0 === c4 ? noop : c4, this.onAllReady = void 0 === a6 ? noop : a6, this.onShellReady = void 0 === i5 ? noop : i5, this.onShellError = void 0 === l5 ? noop : l5, this.onFatalError = void 0 === u3 ? noop : u3, this.formState = void 0 === h4 ? null : h4;
}
function pingTask(e4, r4) {
  e4.pingedTasks.push(r4), 1 === e4.pingedTasks.length && (e4.flushScheduled = null !== e4.destination, performWork(e4));
}
function createSuspenseBoundary(e4, r4, n2, o5) {
  return { status: 0, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, completedSegments: [], byteSize: 0, fallbackAbortableTasks: r4, errorDigest: null, contentState: createHoistableState(), fallbackState: createHoistableState(), contentPreamble: n2, fallbackPreamble: o5, trackedContentKeyPath: null, trackedFallbackNode: null };
}
function createRenderTask(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4, h4, p4, g3, y3, b3) {
  e4.allPendingTasks++, null === s5 ? e4.pendingRootTasks++ : s5.pendingTasks++;
  var v3 = { replay: null, node: n2, childIndex: o5, ping: /* @__PURE__ */ __name(function() {
    return pingTask(e4, v3);
  }, "ping"), blockedBoundary: s5, blockedSegment: a6, blockedPreamble: i5, hoistableState: l5, abortSet: u3, keyPath: c4, formatContext: h4, context: p4, treeContext: g3, componentStack: y3, thenableState: r4, isFallback: b3 };
  return u3.add(v3), v3;
}
function createReplayTask(e4, r4, n2, o5, s5, a6, i5, l5, u3, c4, h4, p4, g3, y3) {
  e4.allPendingTasks++, null === a6 ? e4.pendingRootTasks++ : a6.pendingTasks++, n2.pendingTasks++;
  var b3 = { replay: n2, node: o5, childIndex: s5, ping: /* @__PURE__ */ __name(function() {
    return pingTask(e4, b3);
  }, "ping"), blockedBoundary: a6, blockedSegment: null, blockedPreamble: null, hoistableState: i5, abortSet: l5, keyPath: u3, formatContext: c4, context: h4, treeContext: p4, componentStack: g3, thenableState: r4, isFallback: y3 };
  return l5.add(b3), b3;
}
function createPendingSegment(e4, r4, n2, o5, s5, a6) {
  return { status: 0, parentFlushed: false, id: -1, index: r4, chunks: [], children: [], preambleChildren: [], parentFormatContext: o5, boundary: n2, lastPushedText: s5, textEmbedded: a6 };
}
function pushComponentStack(e4) {
  var r4 = e4.node;
  if ("object" == typeof r4 && null !== r4 && r4.$$typeof === Ds) e4.componentStack = { parent: e4.componentStack, type: r4.type };
}
function getThrownInfo(e4) {
  var r4 = {};
  return e4 && Object.defineProperty(r4, "componentStack", { configurable: true, enumerable: true, get: /* @__PURE__ */ __name(function() {
    try {
      var n2 = "", o5 = e4;
      do {
        n2 += describeComponentStackByType(o5.type), o5 = o5.parent;
      } while (o5);
      var s5 = n2;
    } catch (e5) {
      s5 = "\nError generating stack: " + e5.message + "\n" + e5.stack;
    }
    return Object.defineProperty(r4, "componentStack", { value: s5 }), s5;
  }, "get") }), r4;
}
function logRecoverableError(e4, r4, n2) {
  if (null == (r4 = (e4 = e4.onError)(r4, n2)) || "string" == typeof r4) return r4;
}
function fatalError(e4, r4) {
  var n2 = e4.onShellError, o5 = e4.onFatalError;
  n2(r4), o5(r4), null !== e4.destination ? (e4.status = 14, e4.destination.destroy(r4)) : (e4.status = 13, e4.fatalError = r4);
}
function renderWithHooks(e4, r4, n2, o5, s5, a6) {
  var i5 = r4.thenableState;
  for (r4.thenableState = null, Ga = {}, Ja = r4, Xa = e4, Qa = n2, ni = ri = 0, oi = -1, si = 0, ai = i5, e4 = o5(s5, a6); ti; ) ti = false, ni = ri = 0, oi = -1, si = 0, li += 1, Za = null, e4 = o5(s5, a6);
  return resetHooksState(), e4;
}
function finishFunctionComponent(e4, r4, n2, o5, s5, a6, i5) {
  var l5 = false;
  if (0 !== a6 && null !== e4.formState) {
    var u3 = r4.blockedSegment;
    if (null !== u3) {
      l5 = true, u3 = u3.chunks;
      for (var c4 = 0; c4 < a6; c4++) c4 === i5 ? u3.push("<!--F!-->") : u3.push("<!--F-->");
    }
  }
  a6 = r4.keyPath, r4.keyPath = n2, s5 ? (n2 = r4.treeContext, r4.treeContext = pushTreeContext(n2, 1, 0), renderNode(e4, r4, o5, -1), r4.treeContext = n2) : l5 ? renderNode(e4, r4, o5, -1) : renderNodeDestructive(e4, r4, o5, -1), r4.keyPath = a6;
}
function renderElement(e4, r4, n2, o5, s5, a6) {
  if ("function" == typeof o5) if (o5.prototype && o5.prototype.isReactComponent) {
    var i5 = s5;
    if ("ref" in s5) for (var l5 in i5 = {}, s5) "ref" !== l5 && (i5[l5] = s5[l5]);
    var u3 = o5.defaultProps;
    if (u3) for (var c4 in i5 === s5 && (i5 = aa({}, i5, s5)), u3) void 0 === i5[c4] && (i5[c4] = u3[c4]);
    s5 = i5, i5 = Ba, "object" == typeof (u3 = o5.contextType) && null !== u3 && (i5 = u3._currentValue2);
    var h4 = void 0 !== (i5 = new o5(s5, i5)).state ? i5.state : null;
    if (i5.updater = Da, i5.props = s5, i5.state = h4, u3 = { queue: [], replace: false }, i5._reactInternals = u3, a6 = o5.contextType, i5.context = "object" == typeof a6 && null !== a6 ? a6._currentValue2 : Ba, "function" == typeof (a6 = o5.getDerivedStateFromProps) && (h4 = null == (a6 = a6(s5, h4)) ? h4 : aa({}, h4, a6), i5.state = h4), "function" != typeof o5.getDerivedStateFromProps && "function" != typeof i5.getSnapshotBeforeUpdate && ("function" == typeof i5.UNSAFE_componentWillMount || "function" == typeof i5.componentWillMount)) if (o5 = i5.state, "function" == typeof i5.componentWillMount && i5.componentWillMount(), "function" == typeof i5.UNSAFE_componentWillMount && i5.UNSAFE_componentWillMount(), o5 !== i5.state && Da.enqueueReplaceState(i5, i5.state, null), null !== u3.queue && 0 < u3.queue.length) if (o5 = u3.queue, a6 = u3.replace, u3.queue = null, u3.replace = false, a6 && 1 === o5.length) i5.state = o5[0];
    else {
      for (u3 = a6 ? o5[0] : i5.state, h4 = true, a6 = a6 ? 1 : 0; a6 < o5.length; a6++) null != (c4 = "function" == typeof (c4 = o5[a6]) ? c4.call(i5, u3, s5, void 0) : c4) && (h4 ? (h4 = false, u3 = aa({}, u3, c4)) : aa(u3, c4));
      i5.state = u3;
    }
    else u3.queue = null;
    if (o5 = i5.render(), 12 === e4.status) throw null;
    s5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive(e4, r4, o5, -1), r4.keyPath = s5;
  } else {
    if (o5 = renderWithHooks(e4, r4, n2, o5, s5, void 0), 12 === e4.status) throw null;
    finishFunctionComponent(e4, r4, n2, o5, 0 !== ri, ni, oi);
  }
  else {
    if ("string" != typeof o5) {
      switch (o5) {
        case ta:
        case Vs:
        case qs:
        case Hs:
          return o5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive(e4, r4, s5.children, -1), void (r4.keyPath = o5);
        case ea:
          return void ("hidden" !== s5.mode && (o5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive(e4, r4, s5.children, -1), r4.keyPath = o5));
        case Xs:
          return o5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive(e4, r4, s5.children, -1), void (r4.keyPath = o5);
        case na:
        case Zs:
          throw Error(formatProdErrorMessage(343));
        case Js:
          e: if (null !== r4.replay) {
            o5 = r4.keyPath, r4.keyPath = n2, n2 = s5.children;
            try {
              renderNode(e4, r4, n2, -1);
            } finally {
              r4.keyPath = o5;
            }
          } else {
            o5 = r4.keyPath;
            var p4 = r4.blockedBoundary;
            a6 = r4.blockedPreamble;
            var g3 = r4.hoistableState;
            c4 = r4.blockedSegment, l5 = s5.fallback, s5 = s5.children;
            var y3 = /* @__PURE__ */ new Set(), b3 = 2 > r4.formatContext.insertionMode ? createSuspenseBoundary(0, y3, { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }, { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }) : createSuspenseBoundary(0, y3, null, null);
            null !== e4.trackedPostpones && (b3.trackedContentKeyPath = n2);
            var v3 = createPendingSegment(0, c4.chunks.length, b3, r4.formatContext, false, false);
            c4.children.push(v3), c4.lastPushedText = false;
            var k4 = createPendingSegment(0, 0, null, r4.formatContext, false, false);
            if (k4.parentFlushed = true, null !== e4.trackedPostpones) {
              u3 = [(i5 = [n2[0], "Suspense Fallback", n2[2]])[1], i5[2], [], null], e4.trackedPostpones.workingMap.set(i5, u3), b3.trackedFallbackNode = u3, r4.blockedSegment = v3, r4.blockedPreamble = b3.fallbackPreamble, r4.keyPath = i5, v3.status = 6;
              try {
                renderNode(e4, r4, l5, -1), pushSegmentFinale(v3.chunks, e4.renderState, v3.lastPushedText, v3.textEmbedded), v3.status = 1;
              } catch (r5) {
                throw v3.status = 12 === e4.status ? 3 : 4, r5;
              } finally {
                r4.blockedSegment = c4, r4.blockedPreamble = a6, r4.keyPath = o5;
              }
              pushComponentStack(r4 = createRenderTask(e4, null, s5, -1, b3, k4, b3.contentPreamble, b3.contentState, r4.abortSet, n2, r4.formatContext, r4.context, r4.treeContext, r4.componentStack, r4.isFallback)), e4.pingedTasks.push(r4);
            } else {
              r4.blockedBoundary = b3, r4.blockedPreamble = b3.contentPreamble, r4.hoistableState = b3.contentState, r4.blockedSegment = k4, r4.keyPath = n2, k4.status = 6;
              try {
                if (renderNode(e4, r4, s5, -1), pushSegmentFinale(k4.chunks, e4.renderState, k4.lastPushedText, k4.textEmbedded), k4.status = 1, queueCompletedSegment(b3, k4), 0 === b3.pendingTasks && 0 === b3.status) {
                  b3.status = 1, 0 === e4.pendingRootTasks && r4.blockedPreamble && preparePreamble(e4);
                  break e;
                }
              } catch (n3) {
                b3.status = 4, 12 === e4.status ? (k4.status = 3, i5 = e4.fatalError) : (k4.status = 4, i5 = n3), h4 = logRecoverableError(e4, i5, u3 = getThrownInfo(r4.componentStack)), b3.errorDigest = h4, untrackBoundary(e4, b3);
              } finally {
                r4.blockedBoundary = p4, r4.blockedPreamble = a6, r4.hoistableState = g3, r4.blockedSegment = c4, r4.keyPath = o5;
              }
              pushComponentStack(r4 = createRenderTask(e4, null, l5, -1, p4, v3, b3.fallbackPreamble, b3.fallbackState, y3, [n2[0], "Suspense Fallback", n2[2]], r4.formatContext, r4.context, r4.treeContext, r4.componentStack, true)), e4.pingedTasks.push(r4);
            }
          }
          return;
      }
      if ("object" == typeof o5 && null !== o5) switch (o5.$$typeof) {
        case Gs:
          if ("ref" in s5) for (b3 in i5 = {}, s5) "ref" !== b3 && (i5[b3] = s5[b3]);
          else i5 = s5;
          return void finishFunctionComponent(e4, r4, n2, o5 = renderWithHooks(e4, r4, n2, o5.render, i5, a6), 0 !== ri, ni, oi);
        case Qs:
          return void renderElement(e4, r4, n2, o5.type, s5, a6);
        case Ws:
        case Ks:
          if (u3 = s5.children, i5 = r4.keyPath, s5 = s5.value, h4 = o5._currentValue2, o5._currentValue2 = s5, ja = o5 = { parent: a6 = ja, depth: null === a6 ? 0 : a6.depth + 1, context: o5, parentValue: h4, value: s5 }, r4.context = o5, r4.keyPath = n2, renderNodeDestructive(e4, r4, u3, -1), null === (e4 = ja)) throw Error(formatProdErrorMessage(403));
          return e4.context._currentValue2 = e4.parentValue, e4 = ja = e4.parent, r4.context = e4, void (r4.keyPath = i5);
        case Us:
          return o5 = (s5 = s5.children)(o5._context._currentValue2), s5 = r4.keyPath, r4.keyPath = n2, renderNodeDestructive(e4, r4, o5, -1), void (r4.keyPath = s5);
        case Ys:
          if (o5 = (i5 = o5._init)(o5._payload), 12 === e4.status) throw null;
          return void renderElement(e4, r4, n2, o5, s5, a6);
      }
      throw Error(formatProdErrorMessage(130, null == o5 ? o5 : typeof o5, ""));
    }
    if (null === (i5 = r4.blockedSegment)) i5 = s5.children, u3 = r4.formatContext, h4 = r4.keyPath, r4.formatContext = getChildFormatContext(u3, o5, s5), r4.keyPath = n2, renderNode(e4, r4, i5, -1), r4.formatContext = u3, r4.keyPath = h4;
    else {
      a6 = pushStartInstance(i5.chunks, o5, s5, e4.resumableState, e4.renderState, r4.blockedPreamble, r4.hoistableState, r4.formatContext, i5.lastPushedText, r4.isFallback), i5.lastPushedText = false, u3 = r4.formatContext, h4 = r4.keyPath, r4.keyPath = n2, 3 === (r4.formatContext = getChildFormatContext(u3, o5, s5)).insertionMode ? (n2 = createPendingSegment(0, 0, null, r4.formatContext, false, false), i5.preambleChildren.push(n2), pushComponentStack(n2 = createRenderTask(e4, null, a6, -1, r4.blockedBoundary, n2, r4.blockedPreamble, r4.hoistableState, e4.abortableTasks, r4.keyPath, r4.formatContext, r4.context, r4.treeContext, r4.componentStack, r4.isFallback)), e4.pingedTasks.push(n2)) : renderNode(e4, r4, a6, -1), r4.formatContext = u3, r4.keyPath = h4;
      e: {
        switch (r4 = i5.chunks, e4 = e4.resumableState, o5) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break e;
          case "body":
            if (1 >= u3.insertionMode) {
              e4.hasBody = true;
              break e;
            }
            break;
          case "html":
            if (0 === u3.insertionMode) {
              e4.hasHtml = true;
              break e;
            }
            break;
          case "head":
            if (1 >= u3.insertionMode) break e;
        }
        r4.push(endChunkForTag(o5));
      }
      i5.lastPushedText = false;
    }
  }
}
function resumeNode(e4, r4, n2, o5, s5) {
  var a6 = r4.replay, i5 = r4.blockedBoundary, l5 = createPendingSegment(0, 0, null, r4.formatContext, false, false);
  l5.id = n2, l5.parentFlushed = true;
  try {
    r4.replay = null, r4.blockedSegment = l5, renderNode(e4, r4, o5, s5), l5.status = 1, null === i5 ? e4.completedRootSegment = l5 : (queueCompletedSegment(i5, l5), i5.parentFlushed && e4.partialBoundaries.push(i5));
  } finally {
    r4.replay = a6, r4.blockedSegment = null;
  }
}
function renderNodeDestructive(e4, r4, n2, o5) {
  null !== r4.replay && "number" == typeof r4.replay.slots ? resumeNode(e4, r4, r4.replay.slots, n2, o5) : (r4.node = n2, r4.childIndex = o5, n2 = r4.componentStack, pushComponentStack(r4), retryNode(e4, r4), r4.componentStack = n2);
}
function retryNode(e4, r4) {
  var n2 = r4.node, o5 = r4.childIndex;
  if (null !== n2) {
    if ("object" == typeof n2) {
      switch (n2.$$typeof) {
        case Ds:
          var s5 = n2.type, a6 = n2.key, i5 = n2.props, l5 = void 0 !== (n2 = i5.ref) ? n2 : null, u3 = getComponentNameFromType(s5), c4 = null == a6 ? -1 === o5 ? 0 : o5 : a6;
          if (a6 = [r4.keyPath, u3, c4], null !== r4.replay) e: {
            var h4 = r4.replay;
            for (o5 = h4.nodes, n2 = 0; n2 < o5.length; n2++) {
              var p4 = o5[n2];
              if (c4 === p4[1]) {
                if (4 === p4.length) {
                  if (null !== u3 && u3 !== p4[0]) throw Error(formatProdErrorMessage(490, p4[0], u3));
                  var g3 = p4[2];
                  u3 = p4[3], c4 = r4.node, r4.replay = { nodes: g3, slots: u3, pendingTasks: 1 };
                  try {
                    if (renderElement(e4, r4, a6, s5, i5, l5), 1 === r4.replay.pendingTasks && 0 < r4.replay.nodes.length) throw Error(formatProdErrorMessage(488));
                    r4.replay.pendingTasks--;
                  } catch (n3) {
                    if ("object" == typeof n3 && null !== n3 && (n3 === Wa || "function" == typeof n3.then)) throw r4.node === c4 && (r4.replay = h4), n3;
                    r4.replay.pendingTasks--, i5 = getThrownInfo(r4.componentStack), abortRemainingReplayNodes(e4, a6 = r4.blockedBoundary, g3, u3, s5 = n3, i5 = logRecoverableError(e4, s5, i5));
                  }
                  r4.replay = h4;
                } else {
                  if (s5 !== Js) throw Error(formatProdErrorMessage(490, "Suspense", getComponentNameFromType(s5) || "Unknown"));
                  t: {
                    h4 = void 0, s5 = p4[5], l5 = p4[2], u3 = p4[3], c4 = null === p4[4] ? [] : p4[4][2], p4 = null === p4[4] ? null : p4[4][3];
                    var y3 = r4.keyPath, b3 = r4.replay, v3 = r4.blockedBoundary, k4 = r4.hoistableState, C4 = i5.children, P4 = i5.fallback, R4 = /* @__PURE__ */ new Set();
                    (i5 = 2 > r4.formatContext.insertionMode ? createSuspenseBoundary(0, R4, createPreambleState(), createPreambleState()) : createSuspenseBoundary(0, R4, null, null)).parentFlushed = true, i5.rootSegmentID = s5, r4.blockedBoundary = i5, r4.hoistableState = i5.contentState, r4.keyPath = a6, r4.replay = { nodes: l5, slots: u3, pendingTasks: 1 };
                    try {
                      if (renderNode(e4, r4, C4, -1), 1 === r4.replay.pendingTasks && 0 < r4.replay.nodes.length) throw Error(formatProdErrorMessage(488));
                      if (r4.replay.pendingTasks--, 0 === i5.pendingTasks && 0 === i5.status) {
                        i5.status = 1, e4.completedBoundaries.push(i5);
                        break t;
                      }
                    } catch (n3) {
                      i5.status = 4, h4 = logRecoverableError(e4, n3, g3 = getThrownInfo(r4.componentStack)), i5.errorDigest = h4, r4.replay.pendingTasks--, e4.clientRenderedBoundaries.push(i5);
                    } finally {
                      r4.blockedBoundary = v3, r4.hoistableState = k4, r4.replay = b3, r4.keyPath = y3;
                    }
                    pushComponentStack(r4 = createReplayTask(e4, null, { nodes: c4, slots: p4, pendingTasks: 0 }, P4, -1, v3, i5.fallbackState, R4, [a6[0], "Suspense Fallback", a6[2]], r4.formatContext, r4.context, r4.treeContext, r4.componentStack, true)), e4.pingedTasks.push(r4);
                  }
                }
                o5.splice(n2, 1);
                break e;
              }
            }
          }
          else renderElement(e4, r4, a6, s5, i5, l5);
          return;
        case zs:
          throw Error(formatProdErrorMessage(257));
        case Ys:
          if (n2 = (g3 = n2._init)(n2._payload), 12 === e4.status) throw null;
          return void renderNodeDestructive(e4, r4, n2, o5);
      }
      if (sa(n2)) return void renderChildrenArray(e4, r4, n2, o5);
      if (null === n2 || "object" != typeof n2 ? g3 = null : g3 = "function" == typeof (g3 = oa && n2[oa] || n2["@@iterator"]) ? g3 : null, g3 && (g3 = g3.call(n2))) {
        if (!(n2 = g3.next()).done) {
          i5 = [];
          do {
            i5.push(n2.value), n2 = g3.next();
          } while (!n2.done);
          renderChildrenArray(e4, r4, i5, o5);
        }
        return;
      }
      if ("function" == typeof n2.then) return r4.thenableState = null, renderNodeDestructive(e4, r4, unwrapThenable(n2), o5);
      if (n2.$$typeof === Ks) return renderNodeDestructive(e4, r4, n2._currentValue2, o5);
      throw o5 = Object.prototype.toString.call(n2), Error(formatProdErrorMessage(31, "[object Object]" === o5 ? "object with keys {" + Object.keys(n2).join(", ") + "}" : o5));
    }
    "string" == typeof n2 ? null !== (o5 = r4.blockedSegment) && (o5.lastPushedText = pushTextInstance(o5.chunks, n2, e4.renderState, o5.lastPushedText)) : "number" != typeof n2 && "bigint" != typeof n2 || null !== (o5 = r4.blockedSegment) && (o5.lastPushedText = pushTextInstance(o5.chunks, "" + n2, e4.renderState, o5.lastPushedText));
  }
}
function renderChildrenArray(e4, r4, n2, o5) {
  var s5 = r4.keyPath;
  if (-1 === o5 || (r4.keyPath = [r4.keyPath, "Fragment", o5], null === r4.replay)) {
    if (a6 = r4.treeContext, i5 = n2.length, null !== r4.replay && (null !== (l5 = r4.replay.slots) && "object" == typeof l5)) {
      for (o5 = 0; o5 < i5; o5++) u3 = n2[o5], r4.treeContext = pushTreeContext(a6, i5, o5), "number" == typeof (c4 = l5[o5]) ? (resumeNode(e4, r4, c4, u3, o5), delete l5[o5]) : renderNode(e4, r4, u3, o5);
      return r4.treeContext = a6, void (r4.keyPath = s5);
    }
    for (l5 = 0; l5 < i5; l5++) o5 = n2[l5], r4.treeContext = pushTreeContext(a6, i5, l5), renderNode(e4, r4, o5, l5);
    r4.treeContext = a6, r4.keyPath = s5;
  } else {
    for (var a6 = r4.replay, i5 = a6.nodes, l5 = 0; l5 < i5.length; l5++) {
      var u3 = i5[l5];
      if (u3[1] === o5) {
        o5 = u3[2], u3 = u3[3], r4.replay = { nodes: o5, slots: u3, pendingTasks: 1 };
        try {
          if (renderChildrenArray(e4, r4, n2, -1), 1 === r4.replay.pendingTasks && 0 < r4.replay.nodes.length) throw Error(formatProdErrorMessage(488));
          r4.replay.pendingTasks--;
        } catch (s6) {
          if ("object" == typeof s6 && null !== s6 && (s6 === Wa || "function" == typeof s6.then)) throw s6;
          r4.replay.pendingTasks--, n2 = getThrownInfo(r4.componentStack);
          var c4 = r4.blockedBoundary;
          abortRemainingReplayNodes(e4, c4, o5, u3, s6, n2 = logRecoverableError(e4, s6, n2));
        }
        r4.replay = a6, i5.splice(l5, 1);
        break;
      }
    }
    r4.keyPath = s5;
  }
}
function untrackBoundary(e4, r4) {
  null !== (e4 = e4.trackedPostpones) && (null !== (r4 = r4.trackedContentKeyPath) && (void 0 !== (r4 = e4.workingMap.get(r4)) && (r4.length = 4, r4[2] = [], r4[3] = null)));
}
function spawnNewSuspendedReplayTask(e4, r4, n2) {
  return createReplayTask(e4, n2, r4.replay, r4.node, r4.childIndex, r4.blockedBoundary, r4.hoistableState, r4.abortSet, r4.keyPath, r4.formatContext, r4.context, r4.treeContext, r4.componentStack, r4.isFallback);
}
function spawnNewSuspendedRenderTask(e4, r4, n2) {
  var o5 = r4.blockedSegment, s5 = createPendingSegment(0, o5.chunks.length, null, r4.formatContext, o5.lastPushedText, true);
  return o5.children.push(s5), o5.lastPushedText = false, createRenderTask(e4, n2, r4.node, r4.childIndex, r4.blockedBoundary, s5, r4.blockedPreamble, r4.hoistableState, r4.abortSet, r4.keyPath, r4.formatContext, r4.context, r4.treeContext, r4.componentStack, r4.isFallback);
}
function renderNode(e4, r4, n2, o5) {
  var s5 = r4.formatContext, a6 = r4.context, i5 = r4.keyPath, l5 = r4.treeContext, u3 = r4.componentStack, c4 = r4.blockedSegment;
  if (null === c4) try {
    return renderNodeDestructive(e4, r4, n2, o5);
  } catch (c5) {
    if (resetHooksState(), "object" == typeof (n2 = c5 === Wa ? getSuspendedThenable() : c5) && null !== n2) {
      if ("function" == typeof n2.then) return e4 = spawnNewSuspendedReplayTask(e4, r4, o5 = getThenableStateAfterSuspending()).ping, n2.then(e4, e4), r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, r4.componentStack = u3, void switchContext(a6);
      if ("Maximum call stack size exceeded" === n2.message) return n2 = spawnNewSuspendedReplayTask(e4, r4, n2 = getThenableStateAfterSuspending()), e4.pingedTasks.push(n2), r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, r4.componentStack = u3, void switchContext(a6);
    }
  }
  else {
    var h4 = c4.children.length, p4 = c4.chunks.length;
    try {
      return renderNodeDestructive(e4, r4, n2, o5);
    } catch (g3) {
      if (resetHooksState(), c4.children.length = h4, c4.chunks.length = p4, "object" == typeof (n2 = g3 === Wa ? getSuspendedThenable() : g3) && null !== n2) {
        if ("function" == typeof n2.then) return e4 = spawnNewSuspendedRenderTask(e4, r4, o5 = getThenableStateAfterSuspending()).ping, n2.then(e4, e4), r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, r4.componentStack = u3, void switchContext(a6);
        if ("Maximum call stack size exceeded" === n2.message) return n2 = spawnNewSuspendedRenderTask(e4, r4, n2 = getThenableStateAfterSuspending()), e4.pingedTasks.push(n2), r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, r4.componentStack = u3, void switchContext(a6);
      }
    }
  }
  throw r4.formatContext = s5, r4.context = a6, r4.keyPath = i5, r4.treeContext = l5, switchContext(a6), n2;
}
function abortTaskSoft(e4) {
  var r4 = e4.blockedBoundary;
  null !== (e4 = e4.blockedSegment) && (e4.status = 3, finishedTask(this, r4, e4));
}
function abortRemainingReplayNodes(e4, r4, n2, o5, s5, a6) {
  for (var i5 = 0; i5 < n2.length; i5++) {
    var l5 = n2[i5];
    if (4 === l5.length) abortRemainingReplayNodes(e4, r4, l5[2], l5[3], s5, a6);
    else {
      l5 = l5[5];
      var u3 = e4, c4 = a6, h4 = createSuspenseBoundary(0, /* @__PURE__ */ new Set(), null, null);
      h4.parentFlushed = true, h4.rootSegmentID = l5, h4.status = 4, h4.errorDigest = c4, h4.parentFlushed && u3.clientRenderedBoundaries.push(h4);
    }
  }
  if (n2.length = 0, null !== o5) {
    if (null === r4) throw Error(formatProdErrorMessage(487));
    if (4 !== r4.status && (r4.status = 4, r4.errorDigest = a6, r4.parentFlushed && e4.clientRenderedBoundaries.push(r4)), "object" == typeof o5) for (var p4 in o5) delete o5[p4];
  }
}
function abortTask(e4, r4, n2) {
  var o5 = e4.blockedBoundary, s5 = e4.blockedSegment;
  if (null !== s5) {
    if (6 === s5.status) return;
    s5.status = 3;
  }
  if (s5 = getThrownInfo(e4.componentStack), null === o5) {
    if (13 !== r4.status && 14 !== r4.status) {
      if (null === (o5 = e4.replay)) return logRecoverableError(r4, n2, s5), void fatalError(r4, n2);
      o5.pendingTasks--, 0 === o5.pendingTasks && 0 < o5.nodes.length && (e4 = logRecoverableError(r4, n2, s5), abortRemainingReplayNodes(r4, null, o5.nodes, o5.slots, n2, e4)), r4.pendingRootTasks--, 0 === r4.pendingRootTasks && completeShell(r4);
    }
  } else o5.pendingTasks--, 4 !== o5.status && (o5.status = 4, e4 = logRecoverableError(r4, n2, s5), o5.status = 4, o5.errorDigest = e4, untrackBoundary(r4, o5), o5.parentFlushed && r4.clientRenderedBoundaries.push(o5)), o5.fallbackAbortableTasks.forEach(function(e5) {
    return abortTask(e5, r4, n2);
  }), o5.fallbackAbortableTasks.clear();
  r4.allPendingTasks--, 0 === r4.allPendingTasks && completeAll(r4);
}
function safelyEmitEarlyPreloads(e4, r4) {
  try {
    var n2 = e4.renderState, o5 = n2.onHeaders;
    if (o5) {
      var s5 = n2.headers;
      if (s5) {
        n2.headers = null;
        var a6 = s5.preconnects;
        if (s5.fontPreloads && (a6 && (a6 += ", "), a6 += s5.fontPreloads), s5.highImagePreloads && (a6 && (a6 += ", "), a6 += s5.highImagePreloads), !r4) {
          var i5 = n2.styles.values(), l5 = i5.next();
          e: for (; 0 < s5.remainingCapacity && !l5.done; l5 = i5.next()) for (var u3 = l5.value.sheets.values(), c4 = u3.next(); 0 < s5.remainingCapacity && !c4.done; c4 = u3.next()) {
            var h4 = c4.value, p4 = h4.props, g3 = p4.href, y3 = h4.props, b3 = getPreloadAsHeader(y3.href, "style", { crossOrigin: y3.crossOrigin, integrity: y3.integrity, nonce: y3.nonce, type: y3.type, fetchPriority: y3.fetchPriority, referrerPolicy: y3.referrerPolicy, media: y3.media });
            if (!(0 <= (s5.remainingCapacity -= b3.length + 2))) break e;
            n2.resets.style[g3] = Sa, a6 && (a6 += ", "), a6 += b3, n2.resets.style[g3] = "string" == typeof p4.crossOrigin || "string" == typeof p4.integrity ? [p4.crossOrigin, p4.integrity] : Sa;
          }
        }
        o5(a6 ? { Link: a6 } : {});
      }
    }
  } catch (r5) {
    logRecoverableError(e4, r5, {});
  }
}
function completeShell(e4) {
  null === e4.trackedPostpones && safelyEmitEarlyPreloads(e4, true), null === e4.trackedPostpones && preparePreamble(e4), e4.onShellError = noop, (e4 = e4.onShellReady)();
}
function completeAll(e4) {
  safelyEmitEarlyPreloads(e4, null === e4.trackedPostpones || (null === e4.completedRootSegment || 5 !== e4.completedRootSegment.status)), preparePreamble(e4), (e4 = e4.onAllReady)();
}
function queueCompletedSegment(e4, r4) {
  if (0 === r4.chunks.length && 1 === r4.children.length && null === r4.children[0].boundary && -1 === r4.children[0].id) {
    var n2 = r4.children[0];
    n2.id = r4.id, n2.parentFlushed = true, 1 === n2.status && queueCompletedSegment(e4, n2);
  } else e4.completedSegments.push(r4);
}
function finishedTask(e4, r4, n2) {
  if (null === r4) {
    if (null !== n2 && n2.parentFlushed) {
      if (null !== e4.completedRootSegment) throw Error(formatProdErrorMessage(389));
      e4.completedRootSegment = n2;
    }
    e4.pendingRootTasks--, 0 === e4.pendingRootTasks && completeShell(e4);
  } else r4.pendingTasks--, 4 !== r4.status && (0 === r4.pendingTasks ? (0 === r4.status && (r4.status = 1), null !== n2 && n2.parentFlushed && 1 === n2.status && queueCompletedSegment(r4, n2), r4.parentFlushed && e4.completedBoundaries.push(r4), 1 === r4.status && (r4.fallbackAbortableTasks.forEach(abortTaskSoft, e4), r4.fallbackAbortableTasks.clear(), 0 === e4.pendingRootTasks && null === e4.trackedPostpones && null !== r4.contentPreamble && preparePreamble(e4))) : null !== n2 && n2.parentFlushed && 1 === n2.status && (queueCompletedSegment(r4, n2), 1 === r4.completedSegments.length && r4.parentFlushed && e4.partialBoundaries.push(r4)));
  e4.allPendingTasks--, 0 === e4.allPendingTasks && completeAll(e4);
}
function performWork(e4) {
  if (14 !== e4.status && 13 !== e4.status) {
    var r4 = ja, n2 = ya.H;
    ya.H = hi;
    var o5 = ya.A;
    ya.A = pi;
    var s5 = yi;
    yi = e4;
    var a6 = di;
    di = e4.resumableState;
    try {
      var i5, l5 = e4.pingedTasks;
      for (i5 = 0; i5 < l5.length; i5++) {
        var u3 = l5[i5], c4 = e4, h4 = u3.blockedSegment;
        if (null === h4) {
          var p4 = c4;
          if (0 !== u3.replay.pendingTasks) {
            switchContext(u3.context);
            try {
              if ("number" == typeof u3.replay.slots ? resumeNode(p4, u3, u3.replay.slots, u3.node, u3.childIndex) : retryNode(p4, u3), 1 === u3.replay.pendingTasks && 0 < u3.replay.nodes.length) throw Error(formatProdErrorMessage(488));
              u3.replay.pendingTasks--, u3.abortSet.delete(u3), finishedTask(p4, u3.blockedBoundary, null);
            } catch (e5) {
              resetHooksState();
              var g3 = e5 === Wa ? getSuspendedThenable() : e5;
              if ("object" == typeof g3 && null !== g3 && "function" == typeof g3.then) {
                var y3 = u3.ping;
                g3.then(y3, y3), u3.thenableState = getThenableStateAfterSuspending();
              } else {
                u3.replay.pendingTasks--, u3.abortSet.delete(u3);
                var b3 = getThrownInfo(u3.componentStack);
                c4 = void 0;
                var v3 = p4, k4 = u3.blockedBoundary, C4 = 12 === p4.status ? p4.fatalError : g3;
                abortRemainingReplayNodes(v3, k4, u3.replay.nodes, u3.replay.slots, C4, c4 = logRecoverableError(v3, C4, b3)), p4.pendingRootTasks--, 0 === p4.pendingRootTasks && completeShell(p4), p4.allPendingTasks--, 0 === p4.allPendingTasks && completeAll(p4);
              }
            }
          }
        } else if (p4 = void 0, 0 === (v3 = h4).status) {
          v3.status = 6, switchContext(u3.context);
          var P4 = v3.children.length, R4 = v3.chunks.length;
          try {
            retryNode(c4, u3), pushSegmentFinale(v3.chunks, c4.renderState, v3.lastPushedText, v3.textEmbedded), u3.abortSet.delete(u3), v3.status = 1, finishedTask(c4, u3.blockedBoundary, v3);
          } catch (e5) {
            resetHooksState(), v3.children.length = P4, v3.chunks.length = R4;
            var T4 = e5 === Wa ? getSuspendedThenable() : 12 === c4.status ? c4.fatalError : e5;
            if ("object" == typeof T4 && null !== T4 && "function" == typeof T4.then) {
              v3.status = 0, u3.thenableState = getThenableStateAfterSuspending();
              var $3 = u3.ping;
              T4.then($3, $3);
            } else {
              var E4 = getThrownInfo(u3.componentStack);
              u3.abortSet.delete(u3), v3.status = 4;
              var F4 = u3.blockedBoundary;
              p4 = logRecoverableError(c4, T4, E4), null === F4 ? fatalError(c4, T4) : (F4.pendingTasks--, 4 !== F4.status && (F4.status = 4, F4.errorDigest = p4, untrackBoundary(c4, F4), F4.parentFlushed && c4.clientRenderedBoundaries.push(F4), 0 === c4.pendingRootTasks && null === c4.trackedPostpones && null !== F4.contentPreamble && preparePreamble(c4))), c4.allPendingTasks--, 0 === c4.allPendingTasks && completeAll(c4);
            }
          }
        }
      }
      l5.splice(0, i5), null !== e4.destination && flushCompletedQueues(e4, e4.destination);
    } catch (r5) {
      logRecoverableError(e4, r5, {}), fatalError(e4, r5);
    } finally {
      di = a6, ya.H = n2, ya.A = o5, n2 === hi && switchContext(r4), yi = s5;
    }
  }
}
function preparePreambleFromSubtree(e4, r4, n2) {
  r4.preambleChildren.length && n2.push(r4.preambleChildren);
  for (var o5 = false, s5 = 0; s5 < r4.children.length; s5++) o5 = preparePreambleFromSegment(e4, r4.children[s5], n2) || o5;
  return o5;
}
function preparePreambleFromSegment(e4, r4, n2) {
  var o5 = r4.boundary;
  if (null === o5) return preparePreambleFromSubtree(e4, r4, n2);
  var s5 = o5.contentPreamble, a6 = o5.fallbackPreamble;
  if (null === s5 || null === a6) return false;
  switch (o5.status) {
    case 1:
      if (hoistPreambleState(e4.renderState, s5), !(r4 = o5.completedSegments[0])) throw Error(formatProdErrorMessage(391));
      return preparePreambleFromSubtree(e4, r4, n2);
    case 5:
      if (null !== e4.trackedPostpones) return true;
    case 4:
      if (1 === r4.status) return hoistPreambleState(e4.renderState, a6), preparePreambleFromSubtree(e4, r4, n2);
    default:
      return true;
  }
}
function preparePreamble(e4) {
  if (e4.completedRootSegment && null === e4.completedPreambleSegments) {
    var r4 = [], n2 = preparePreambleFromSegment(e4, e4.completedRootSegment, r4), o5 = e4.renderState.preamble;
    (false === n2 || o5.headChunks && o5.bodyChunks) && (e4.completedPreambleSegments = r4);
  }
}
function flushSubtree(e4, r4, n2, o5) {
  switch (n2.parentFlushed = true, n2.status) {
    case 0:
      n2.id = e4.nextSegmentId++;
    case 5:
      return o5 = n2.id, n2.lastPushedText = false, n2.textEmbedded = false, e4 = e4.renderState, r4.push('<template id="'), r4.push(e4.placeholderPrefix), e4 = o5.toString(16), r4.push(e4), r4.push('"></template>');
    case 1:
      n2.status = 2;
      var s5 = true, a6 = n2.chunks, i5 = 0;
      n2 = n2.children;
      for (var l5 = 0; l5 < n2.length; l5++) {
        for (s5 = n2[l5]; i5 < s5.index; i5++) r4.push(a6[i5]);
        s5 = flushSegment(e4, r4, s5, o5);
      }
      for (; i5 < a6.length - 1; i5++) r4.push(a6[i5]);
      return i5 < a6.length && (s5 = r4.push(a6[i5])), s5;
    default:
      throw Error(formatProdErrorMessage(390));
  }
}
function flushSegment(e4, r4, n2, o5) {
  var s5 = n2.boundary;
  if (null === s5) return flushSubtree(e4, r4, n2, o5);
  if (s5.parentFlushed = true, 4 === s5.status) {
    if (!e4.renderState.generateStaticMarkup) {
      var a6 = s5.errorDigest;
      r4.push("<!--$!-->"), r4.push("<template"), a6 && (r4.push(' data-dgst="'), a6 = escapeTextForBrowser(a6), r4.push(a6), r4.push('"')), r4.push("></template>");
    }
    return flushSubtree(e4, r4, n2, o5), e4.renderState.generateStaticMarkup ? r4 = true : ((e4 = s5.fallbackPreamble) && writePreambleContribution(r4, e4), r4 = r4.push("<!--/$-->")), r4;
  }
  if (1 !== s5.status) return 0 === s5.status && (s5.rootSegmentID = e4.nextSegmentId++), 0 < s5.completedSegments.length && e4.partialBoundaries.push(s5), writeStartPendingSuspenseBoundary(r4, e4.renderState, s5.rootSegmentID), o5 && ((s5 = s5.fallbackState).styles.forEach(hoistStyleQueueDependency, o5), s5.stylesheets.forEach(hoistStylesheetDependency, o5)), flushSubtree(e4, r4, n2, o5), r4.push("<!--/$-->");
  if (s5.byteSize > e4.progressiveChunkSize) return s5.rootSegmentID = e4.nextSegmentId++, e4.completedBoundaries.push(s5), writeStartPendingSuspenseBoundary(r4, e4.renderState, s5.rootSegmentID), flushSubtree(e4, r4, n2, o5), r4.push("<!--/$-->");
  if (o5 && ((n2 = s5.contentState).styles.forEach(hoistStyleQueueDependency, o5), n2.stylesheets.forEach(hoistStylesheetDependency, o5)), e4.renderState.generateStaticMarkup || r4.push("<!--$-->"), 1 !== (n2 = s5.completedSegments).length) throw Error(formatProdErrorMessage(391));
  return flushSegment(e4, r4, n2[0], o5), e4.renderState.generateStaticMarkup ? r4 = true : ((e4 = s5.contentPreamble) && writePreambleContribution(r4, e4), r4 = r4.push("<!--/$-->")), r4;
}
function flushSegmentContainer(e4, r4, n2, o5) {
  return function(e5, r5, n3, o6) {
    switch (n3.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return e5.push('<div hidden id="'), e5.push(r5.segmentPrefix), r5 = o6.toString(16), e5.push(r5), e5.push('">');
      case 4:
        return e5.push('<svg aria-hidden="true" style="display:none" id="'), e5.push(r5.segmentPrefix), r5 = o6.toString(16), e5.push(r5), e5.push('">');
      case 5:
        return e5.push('<math aria-hidden="true" style="display:none" id="'), e5.push(r5.segmentPrefix), r5 = o6.toString(16), e5.push(r5), e5.push('">');
      case 6:
        return e5.push('<table hidden id="'), e5.push(r5.segmentPrefix), r5 = o6.toString(16), e5.push(r5), e5.push('">');
      case 7:
        return e5.push('<table hidden><tbody id="'), e5.push(r5.segmentPrefix), r5 = o6.toString(16), e5.push(r5), e5.push('">');
      case 8:
        return e5.push('<table hidden><tr id="'), e5.push(r5.segmentPrefix), r5 = o6.toString(16), e5.push(r5), e5.push('">');
      case 9:
        return e5.push('<table hidden><colgroup id="'), e5.push(r5.segmentPrefix), r5 = o6.toString(16), e5.push(r5), e5.push('">');
      default:
        throw Error(formatProdErrorMessage(397));
    }
  }(r4, e4.renderState, n2.parentFormatContext, n2.id), flushSegment(e4, r4, n2, o5), function(e5, r5) {
    switch (r5.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return e5.push("</div>");
      case 4:
        return e5.push("</svg>");
      case 5:
        return e5.push("</math>");
      case 6:
        return e5.push("</table>");
      case 7:
        return e5.push("</tbody></table>");
      case 8:
        return e5.push("</tr></table>");
      case 9:
        return e5.push("</colgroup></table>");
      default:
        throw Error(formatProdErrorMessage(397));
    }
  }(r4, n2.parentFormatContext);
}
function flushCompletedBoundary(e4, r4, n2) {
  for (var o5 = n2.completedSegments, s5 = 0; s5 < o5.length; s5++) flushPartiallyCompletedSegment(e4, r4, n2, o5[s5]);
  o5.length = 0, writeHoistablesForBoundary(r4, n2.contentState, e4.renderState), o5 = e4.resumableState, e4 = e4.renderState, s5 = n2.rootSegmentID, n2 = n2.contentState;
  var a6 = e4.stylesToHoist;
  return e4.stylesToHoist = false, r4.push(e4.startInlineScript), a6 ? 2 & o5.instructions ? 8 & o5.instructions ? r4.push('$RR("') : (o5.instructions |= 8, r4.push('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("')) : (o5.instructions |= 10, r4.push('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("')) : 2 & o5.instructions ? r4.push('$RC("') : (o5.instructions |= 2, r4.push('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("')), o5 = s5.toString(16), r4.push(e4.boundaryPrefix), r4.push(o5), r4.push('","'), r4.push(e4.segmentPrefix), r4.push(o5), a6 ? (r4.push('",'), function(e5, r5) {
    e5.push("[");
    var n3 = "[";
    r5.stylesheets.forEach(function(r6) {
      if (2 !== r6.state) if (3 === r6.state) e5.push(n3), r6 = escapeJSObjectForInstructionScripts("" + r6.props.href), e5.push(r6), e5.push("]"), n3 = ",[";
      else {
        e5.push(n3);
        var o6 = r6.props["data-precedence"], s6 = r6.props, a7 = sanitizeURL("" + r6.props.href);
        for (var i5 in a7 = escapeJSObjectForInstructionScripts(a7), e5.push(a7), o6 = "" + o6, e5.push(","), o6 = escapeJSObjectForInstructionScripts(o6), e5.push(o6), s6) if (ia.call(s6, i5) && null != (o6 = s6[i5])) switch (i5) {
          case "href":
          case "rel":
          case "precedence":
          case "data-precedence":
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(399, "link"));
          default:
            writeStyleResourceAttributeInJS(e5, i5, o6);
        }
        e5.push("]"), n3 = ",[", r6.state = 3;
      }
    }), e5.push("]");
  }(r4, n2)) : r4.push('"'), n2 = r4.push(")<\/script>"), writeBootstrap(r4, e4) && n2;
}
function flushPartiallyCompletedSegment(e4, r4, n2, o5) {
  if (2 === o5.status) return true;
  var s5 = n2.contentState, a6 = o5.id;
  if (-1 === a6) {
    if (-1 === (o5.id = n2.rootSegmentID)) throw Error(formatProdErrorMessage(392));
    return flushSegmentContainer(e4, r4, o5, s5);
  }
  return a6 === n2.rootSegmentID ? flushSegmentContainer(e4, r4, o5, s5) : (flushSegmentContainer(e4, r4, o5, s5), n2 = e4.resumableState, e4 = e4.renderState, r4.push(e4.startInlineScript), 1 & n2.instructions ? r4.push('$RS("') : (n2.instructions |= 1, r4.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), r4.push(e4.segmentPrefix), a6 = a6.toString(16), r4.push(a6), r4.push('","'), r4.push(e4.placeholderPrefix), r4.push(a6), r4 = r4.push('")<\/script>'));
}
function flushCompletedQueues(e4, r4) {
  try {
    if (!(0 < e4.pendingRootTasks)) {
      var n2, o5 = e4.completedRootSegment;
      if (null !== o5) {
        if (5 === o5.status) return;
        var s5 = e4.completedPreambleSegments;
        if (null === s5) return;
        var a6, i5 = e4.renderState, l5 = i5.preamble, u3 = l5.htmlChunks, c4 = l5.headChunks;
        if (u3) {
          for (a6 = 0; a6 < u3.length; a6++) r4.push(u3[a6]);
          if (c4) for (a6 = 0; a6 < c4.length; a6++) r4.push(c4[a6]);
          else {
            var h4 = startChunkForTag("head");
            r4.push(h4), r4.push(">");
          }
        } else if (c4) for (a6 = 0; a6 < c4.length; a6++) r4.push(c4[a6]);
        var p4 = i5.charsetChunks;
        for (a6 = 0; a6 < p4.length; a6++) r4.push(p4[a6]);
        p4.length = 0, i5.preconnects.forEach(flushResource, r4), i5.preconnects.clear();
        var g3 = i5.viewportChunks;
        for (a6 = 0; a6 < g3.length; a6++) r4.push(g3[a6]);
        g3.length = 0, i5.fontPreloads.forEach(flushResource, r4), i5.fontPreloads.clear(), i5.highImagePreloads.forEach(flushResource, r4), i5.highImagePreloads.clear(), i5.styles.forEach(flushStylesInPreamble, r4);
        var y3 = i5.importMapChunks;
        for (a6 = 0; a6 < y3.length; a6++) r4.push(y3[a6]);
        y3.length = 0, i5.bootstrapScripts.forEach(flushResource, r4), i5.scripts.forEach(flushResource, r4), i5.scripts.clear(), i5.bulkPreloads.forEach(flushResource, r4), i5.bulkPreloads.clear();
        var b3 = i5.hoistableChunks;
        for (a6 = 0; a6 < b3.length; a6++) r4.push(b3[a6]);
        for (i5 = b3.length = 0; i5 < s5.length; i5++) {
          var v3 = s5[i5];
          for (l5 = 0; l5 < v3.length; l5++) flushSegment(e4, r4, v3[l5], null);
        }
        var k4 = e4.renderState.preamble, C4 = k4.headChunks;
        if (k4.htmlChunks || C4) {
          var P4 = endChunkForTag("head");
          r4.push(P4);
        }
        var R4 = k4.bodyChunks;
        if (R4) for (s5 = 0; s5 < R4.length; s5++) r4.push(R4[s5]);
        flushSegment(e4, r4, o5, null), e4.completedRootSegment = null, writeBootstrap(r4, e4.renderState);
      }
      var T4 = e4.renderState;
      o5 = 0;
      var $3 = T4.viewportChunks;
      for (o5 = 0; o5 < $3.length; o5++) r4.push($3[o5]);
      $3.length = 0, T4.preconnects.forEach(flushResource, r4), T4.preconnects.clear(), T4.fontPreloads.forEach(flushResource, r4), T4.fontPreloads.clear(), T4.highImagePreloads.forEach(flushResource, r4), T4.highImagePreloads.clear(), T4.styles.forEach(preloadLateStyles, r4), T4.scripts.forEach(flushResource, r4), T4.scripts.clear(), T4.bulkPreloads.forEach(flushResource, r4), T4.bulkPreloads.clear();
      var E4 = T4.hoistableChunks;
      for (o5 = 0; o5 < E4.length; o5++) r4.push(E4[o5]);
      E4.length = 0;
      var F4 = e4.clientRenderedBoundaries;
      for (n2 = 0; n2 < F4.length; n2++) {
        var I4 = F4[n2];
        T4 = r4;
        var A4 = e4.resumableState, O4 = e4.renderState, N4 = I4.rootSegmentID, B3 = I4.errorDigest;
        T4.push(O4.startInlineScript), 4 & A4.instructions ? T4.push('$RX("') : (A4.instructions |= 4, T4.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("')), T4.push(O4.boundaryPrefix);
        var D4 = N4.toString(16);
        if (T4.push(D4), T4.push('"'), B3) {
          T4.push(",");
          var H3 = escapeJSStringsForInstructionScripts(B3 || "");
          T4.push(H3);
        }
        var V4 = T4.push(")<\/script>");
        if (!V4) return e4.destination = null, n2++, void F4.splice(0, n2);
      }
      F4.splice(0, n2);
      var q3 = e4.completedBoundaries;
      for (n2 = 0; n2 < q3.length; n2++) if (!flushCompletedBoundary(e4, r4, q3[n2])) return e4.destination = null, n2++, void q3.splice(0, n2);
      q3.splice(0, n2);
      var W4 = e4.partialBoundaries;
      for (n2 = 0; n2 < W4.length; n2++) {
        var G3 = W4[n2];
        e: {
          F4 = e4, I4 = r4;
          var X4 = G3.completedSegments;
          for (V4 = 0; V4 < X4.length; V4++) if (!flushPartiallyCompletedSegment(F4, I4, G3, X4[V4])) {
            V4++, X4.splice(0, V4);
            var Q3 = false;
            break e;
          }
          X4.splice(0, V4), Q3 = writeHoistablesForBoundary(I4, G3.contentState, F4.renderState);
        }
        if (!Q3) return e4.destination = null, n2++, void W4.splice(0, n2);
      }
      W4.splice(0, n2);
      var Y4 = e4.completedBoundaries;
      for (n2 = 0; n2 < Y4.length; n2++) if (!flushCompletedBoundary(e4, r4, Y4[n2])) return e4.destination = null, n2++, void Y4.splice(0, n2);
      Y4.splice(0, n2);
    }
  } finally {
    0 === e4.allPendingTasks && 0 === e4.pingedTasks.length && 0 === e4.clientRenderedBoundaries.length && 0 === e4.completedBoundaries.length && (e4.flushScheduled = false, (n2 = e4.resumableState).hasBody && (W4 = endChunkForTag("body"), r4.push(W4)), n2.hasHtml && (n2 = endChunkForTag("html"), r4.push(n2)), e4.status = 14, r4.push(null), e4.destination = null);
  }
}
function enqueueFlush(e4) {
  if (false === e4.flushScheduled && 0 === e4.pingedTasks.length && null !== e4.destination) {
    e4.flushScheduled = true;
    var r4 = e4.destination;
    r4 ? flushCompletedQueues(e4, r4) : e4.flushScheduled = false;
  }
}
function startFlowing(e4, r4) {
  if (13 === e4.status) e4.status = 14, r4.destroy(e4.fatalError);
  else if (14 !== e4.status && null === e4.destination) {
    e4.destination = r4;
    try {
      flushCompletedQueues(e4, r4);
    } catch (r5) {
      logRecoverableError(e4, r5, {}), fatalError(e4, r5);
    }
  }
}
function abort2(e4, r4) {
  11 !== e4.status && 10 !== e4.status || (e4.status = 12);
  try {
    var n2 = e4.abortableTasks;
    if (0 < n2.size) {
      var o5 = void 0 === r4 ? Error(formatProdErrorMessage(432)) : "object" == typeof r4 && null !== r4 && "function" == typeof r4.then ? Error(formatProdErrorMessage(530)) : r4;
      e4.fatalError = o5, n2.forEach(function(r5) {
        return abortTask(r5, e4, o5);
      }), n2.clear();
    }
    null !== e4.destination && flushCompletedQueues(e4, e4.destination);
  } catch (r5) {
    logRecoverableError(e4, r5, {}), fatalError(e4, r5);
  }
}
function onError() {
}
function renderToStringImpl(e4, r4, n2, o5) {
  var s5, a6, i5, l5, u3 = false, c4 = null, h4 = "", p4 = false;
  if (e4 = function(e5, r5, n3, o6, s6, a7, i6, l6, u4, c5, h5, p5) {
    return (n3 = createPendingSegment(r5 = new RequestInstance(r5, n3, o6, s6, a7, i6, l6, u4, c5, h5, p5), 0, null, o6, false, false)).parentFlushed = true, pushComponentStack(e5 = createRenderTask(r5, null, e5, -1, null, n3, null, null, r5.abortableTasks, null, o6, null, za, null, false)), r5.pingedTasks.push(e5), r5;
  }(e4, r4 = { idPrefix: void 0 === (s5 = r4 ? r4.identifierPrefix : void 0) ? "" : s5, nextFormID: 0, streamingFormat: 0, bootstrapScriptContent: a6, bootstrapScripts: i5, bootstrapModules: l5, instructions: 0, hasBody: false, hasHtml: false, unknownResources: {}, dnsResources: {}, connectResources: { default: {}, anonymous: {}, credentials: {} }, imageResources: {}, styleResources: {}, scriptResources: {}, moduleUnknownResources: {}, moduleScriptResources: {} }, function(e5, r5) {
    var n3 = e5.idPrefix, o6 = [], s6 = e5.bootstrapScriptContent, a7 = e5.bootstrapScripts, i6 = e5.bootstrapModules;
    void 0 !== s6 && o6.push("<script>", ("" + s6).replace(Ca, scriptReplacer), "<\/script>"), s6 = n3 + "P:";
    var l6 = n3 + "S:";
    n3 += "B:";
    var u4 = { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }, c5 = /* @__PURE__ */ new Set(), h5 = /* @__PURE__ */ new Set(), p5 = /* @__PURE__ */ new Set(), g3 = /* @__PURE__ */ new Map(), y3 = /* @__PURE__ */ new Set(), b3 = /* @__PURE__ */ new Set(), v3 = /* @__PURE__ */ new Set(), k4 = { images: /* @__PURE__ */ new Map(), stylesheets: /* @__PURE__ */ new Map(), scripts: /* @__PURE__ */ new Map(), moduleScripts: /* @__PURE__ */ new Map() };
    if (void 0 !== a7) for (var C4 = 0; C4 < a7.length; C4++) {
      var P4, R4 = a7[C4], T4 = void 0, $3 = void 0, E4 = { rel: "preload", as: "script", fetchPriority: "low", nonce: void 0 };
      "string" == typeof R4 ? E4.href = P4 = R4 : (E4.href = P4 = R4.src, E4.integrity = $3 = "string" == typeof R4.integrity ? R4.integrity : void 0, E4.crossOrigin = T4 = "string" == typeof R4 || null == R4.crossOrigin ? void 0 : "use-credentials" === R4.crossOrigin ? "use-credentials" : "");
      var F4 = P4;
      (R4 = e5).scriptResources[F4] = null, R4.moduleScriptResources[F4] = null, pushLinkImpl(R4 = [], E4), y3.add(R4), o6.push('<script src="', escapeTextForBrowser(P4)), "string" == typeof $3 && o6.push('" integrity="', escapeTextForBrowser($3)), "string" == typeof T4 && o6.push('" crossorigin="', escapeTextForBrowser(T4)), o6.push('" async=""><\/script>');
    }
    if (void 0 !== i6) for (a7 = 0; a7 < i6.length; a7++) T4 = P4 = void 0, $3 = { rel: "modulepreload", fetchPriority: "low", nonce: void 0 }, "string" == typeof (E4 = i6[a7]) ? $3.href = C4 = E4 : ($3.href = C4 = E4.src, $3.integrity = T4 = "string" == typeof E4.integrity ? E4.integrity : void 0, $3.crossOrigin = P4 = "string" == typeof E4 || null == E4.crossOrigin ? void 0 : "use-credentials" === E4.crossOrigin ? "use-credentials" : ""), R4 = C4, (E4 = e5).scriptResources[R4] = null, E4.moduleScriptResources[R4] = null, pushLinkImpl(E4 = [], $3), y3.add(E4), o6.push('<script type="module" src="', escapeTextForBrowser(C4)), "string" == typeof T4 && o6.push('" integrity="', escapeTextForBrowser(T4)), "string" == typeof P4 && o6.push('" crossorigin="', escapeTextForBrowser(P4)), o6.push('" async=""><\/script>');
    return { placeholderPrefix: s6, segmentPrefix: l6, boundaryPrefix: n3, startInlineScript: "<script>", preamble: u4, externalRuntimeScript: null, bootstrapChunks: o6, importMapChunks: [], onHeaders: void 0, headers: null, resets: { font: {}, dns: {}, connect: { default: {}, anonymous: {}, credentials: {} }, image: {}, style: {} }, charsetChunks: [], viewportChunks: [], hoistableChunks: [], preconnects: c5, fontPreloads: h5, highImagePreloads: p5, styles: g3, bootstrapScripts: y3, scripts: b3, bulkPreloads: v3, preloads: k4, stylesToHoist: false, generateStaticMarkup: r5 };
  }(r4, n2), createFormatContext(0, null, 0), 1 / 0, onError, void 0, function() {
    p4 = true;
  }, void 0, void 0, void 0), e4.flushScheduled = null !== e4.destination, performWork(e4), 10 === e4.status && (e4.status = 11), null === e4.trackedPostpones && safelyEmitEarlyPreloads(e4, 0 === e4.pendingRootTasks), abort2(e4, o5), startFlowing(e4, { push: /* @__PURE__ */ __name(function(e5) {
    return null !== e5 && (h4 += e5), true;
  }, "push"), destroy: /* @__PURE__ */ __name(function(e5) {
    u3 = true, c4 = e5;
  }, "destroy") }), u3 && c4 !== o5) throw c4;
  if (!p4) throw Error(formatProdErrorMessage(426));
  return h4;
}
function isbot(e4) {
  return Boolean(e4) && function() {
    if (bi instanceof RegExp) return bi;
    try {
      bi = new RegExp(" daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|(?<!cam)scan|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|\\||^<|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d\\s[\\w\\.-]+$|^mozilla/\\d\\.\\d\\s\\(compatible;?(?:\\s\\w+\\/\\d+\\.\\d+)?\\)$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|grab|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|onetrust|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|retriever|rexx;|rigor|rss\\b|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|xtate/", "i");
    } catch (e5) {
      bi = vi;
    }
    return bi;
  }().test(e4);
}
function StartServer(e4) {
  return p2.jsx(RouterProvider, { router: e4.router });
}
function createServerFn(e4, r4) {
  const n2 = r4 || e4 || {};
  return void 0 === n2.method && (n2.method = "GET"), { options: n2, middleware: /* @__PURE__ */ __name((e5) => createServerFn(void 0, Object.assign(n2, { middleware: e5 })), "middleware"), validator: /* @__PURE__ */ __name((e5) => createServerFn(void 0, Object.assign(n2, { validator: e5 })), "validator"), type: /* @__PURE__ */ __name((e5) => createServerFn(void 0, Object.assign(n2, { type: e5 })), "type"), handler: /* @__PURE__ */ __name((...e5) => {
    const [r5, o5] = e5;
    Object.assign(n2, { ...r5, extractedFn: r5, serverFn: o5 });
    const s5 = [...n2.middleware || [], serverFnBaseToMiddleware(n2)];
    return Object.assign(async (e6) => executeMiddleware$1(s5, "client", { ...r5, ...n2, data: null == e6 ? void 0 : e6.data, headers: null == e6 ? void 0 : e6.headers, signal: null == e6 ? void 0 : e6.signal, context: {} }).then((e7) => {
      if ("full" === n2.response) return e7;
      if (e7.error) throw e7.error;
      return e7.result;
    }), { ...r5, __executeServer: /* @__PURE__ */ __name(async (e6, o6) => {
      const a6 = e6 instanceof FormData ? function(e7) {
        const r6 = e7.get("__TSR_CONTEXT");
        if (e7.delete("__TSR_CONTEXT"), "string" != typeof r6) return { context: {}, data: e7 };
        try {
          return { context: ki.parse(r6), data: e7 };
        } catch {
          return { data: e7 };
        }
      }(e6) : e6;
      a6.type = "function" == typeof n2.type ? n2.type(a6) : n2.type;
      const i5 = { ...r5, ...a6, signal: o6 }, run = /* @__PURE__ */ __name(() => executeMiddleware$1(s5, "server", i5).then((e7) => ({ result: e7.result, error: e7.error, context: e7.sendContext })), "run");
      if ("static" === i5.type) {
        let e7;
        if ((null == wi ? void 0 : wi.getItem) && (e7 = await wi.getItem(i5)), e7 || (e7 = await run().then((e8) => ({ ctx: e8, error: null })).catch((e8) => ({ ctx: void 0, error: e8 })), (null == wi ? void 0 : wi.setItem) && await wi.setItem(i5, e7)), invariant(e7), e7.error) throw e7.error;
        return e7.ctx;
      }
      return run();
    }, "__executeServer") });
  }, "handler") };
}
async function executeMiddleware$1(e4, r4, n2) {
  const o5 = flattenMiddlewares([...Ci, ...e4]), next = /* @__PURE__ */ __name(async (e5) => {
    const n3 = o5.shift();
    if (!n3) return e5;
    n3.options.validator && ("client" !== r4 || n3.options.validateClient) && (e5.data = await function(e6, r5) {
      if (null == e6) return {};
      if ("~standard" in e6) {
        const n4 = e6["~standard"].validate(r5);
        if (n4 instanceof Promise) throw new Error("Async validation not supported");
        if (n4.issues) throw new Error(JSON.stringify(n4.issues, void 0, 2));
        return n4.value;
      }
      if ("parse" in e6) return e6.parse(r5);
      if ("function" == typeof e6) return e6(r5);
      throw new Error("Invalid validator type!");
    }(n3.options.validator, e5.data));
    const s5 = "client" === r4 ? n3.options.client : n3.options.server;
    return s5 ? applyMiddleware(s5, e5, async (e6) => next(e6).catch((r5) => {
      if (isRedirect(r5) || isNotFound(r5)) return { ...e6, error: r5 };
      throw r5;
    })) : next(e5);
  }, "next");
  return next({ ...n2, headers: n2.headers || {}, sendContext: n2.sendContext || {}, context: n2.context || {} });
}
function flattenMiddlewares(e4) {
  const r4 = /* @__PURE__ */ new Set(), n2 = [], recurse = /* @__PURE__ */ __name((e5) => {
    e5.forEach((e6) => {
      e6.options.middleware && recurse(e6.options.middleware), r4.has(e6) || (r4.add(e6), n2.push(e6));
    });
  }, "recurse");
  return recurse(e4), n2;
}
function serverFnBaseToMiddleware(e4) {
  return { _types: void 0, options: { validator: e4.validator, validateClient: e4.validateClient, client: /* @__PURE__ */ __name(async ({ next: r4, sendContext: n2, ...o5 }) => {
    var s5;
    const a6 = { ...o5, context: n2, type: "function" == typeof o5.type ? o5.type(o5) : o5.type };
    if ("static" === o5.type && "undefined" != typeof document) {
      invariant(wi);
      const e5 = await wi.fetchItem(a6);
      if (e5) {
        if (e5.error) throw e5.error;
        return r4(e5.ctx);
      }
      g(e5, `No static cache item found for ${a6.functionId}__${JSON.stringify(a6.data)}, falling back to server function...`);
    }
    return r4(await (null == (s5 = e4.extractedFn) ? void 0 : s5.call(e4, a6)));
  }, "client"), server: /* @__PURE__ */ __name(async ({ next: r4, ...n2 }) => {
    var o5;
    const s5 = await (null == (o5 = e4.serverFn) ? void 0 : o5.call(e4, n2));
    return r4({ ...n2, result: s5 });
  }, "server") } };
}
function getEvent() {
  const e4 = Pi.getStore();
  if (!e4) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
  return e4;
}
function createWrapperFunction(e4) {
  return function(...r4) {
    const n2 = r4[0];
    var o5;
    return "object" == typeof (o5 = n2) && (o5 instanceof H3Event || (null == o5 ? void 0 : o5[xi]) instanceof H3Event || true === (null == o5 ? void 0 : o5.__is_event__)) ? r4[0] = n2 instanceof H3Event || n2.__is_event__ ? n2 : n2[xi] : r4.unshift(getEvent()), e4(...r4);
  };
}
async function loadVirtualModule(e4) {
  switch (e4) {
    case Ei:
      return await Promise.resolve().then(() => Bi);
    case Fi:
      return await Promise.resolve().then(() => (init_tanstack_start_manifest_v_B_OhsZmb(), tanstack_start_manifest_v_B_OhsZmb_exports));
    case Ii:
      return await Promise.resolve().then(() => (init_tanstack_start_server_fn_manifest_v_DSh1bMQ4(), tanstack_start_server_fn_manifest_v_DSh1bMQ4_exports));
    default:
      throw new Error(`Unknown virtual module: ${e4}`);
  }
}
function isNotFoundResponse(e4) {
  const { headers: r4, ...n2 } = e4;
  return new Response(JSON.stringify(n2), { status: 200, headers: { "Content-Type": "application/json", ...r4 || {} } });
}
function handlerToMiddleware(e4) {
  return async ({ next: r4, ...n2 }) => {
    const o5 = await e4(n2);
    return o5 ? { response: o5 } : r4(n2);
  };
}
function handleCtxResult(e4) {
  return isSpecialResponse(e4) ? { response: e4 } : e4;
}
function isSpecialResponse(e4) {
  return e4 instanceof Response || isRedirect(e4);
}
function DefaultCatchBoundary({ error: e4 }) {
  const r4 = useRouter(), n2 = useMatch({ strict: false, select: /* @__PURE__ */ __name((e5) => e5.id === W2, "select") });
  return console.error("DefaultCatchBoundary Error:", e4), p2.jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [p2.jsx(ErrorComponent, { error: e4 }), p2.jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [p2.jsx("button", { onClick: /* @__PURE__ */ __name(() => {
    r4.invalidate();
  }, "onClick"), className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", children: "Try Again" }), n2 ? p2.jsx(Ze, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", children: "Home" }) : p2.jsx(Ze, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", onClick: /* @__PURE__ */ __name((e5) => {
    e5.preventDefault(), window.history.back();
  }, "onClick"), children: "Go Back" })] })] });
}
function NotFound({ children: e4 }) {
  return p2.jsxs("div", { className: "space-y-2 p-2", children: [p2.jsx("div", { className: "text-gray-600 dark:text-gray-400", children: e4 || p2.jsx("p", { children: "The page you are looking for does not exist." }) }), p2.jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [p2.jsx("button", { onClick: /* @__PURE__ */ __name(() => window.history.back(), "onClick"), className: "bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm", children: "Go back" }), p2.jsx(Ze, { to: "/", className: "bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm", children: "Start Over" })] })] });
}
var l3, u2, c2, h2, p2, g, y, b, v, k2, C2, P2, R2, Store, Derived, T2, $, E2, F2, I2, A2, O2, N2, B, defaultGetScrollRestorationKey, D2, H, V2, q, W2, RouterCore, SearchParamError, PathParamError, G, BaseRoute, BaseRootRoute, X2, Q, Y2, Z, ee, te, re, ne, oe, ae, ie, le, ue, ce, he, de, pe, ge, ye, be, ve, ke, Se, Ce, we, CatchBoundaryImpl, Pe, xe, Re, Te, $e, shim$1, Ee, Fe, Ie, _e, Ae, Me, Oe, Ne, Be, De, ze, He, Ve, qe, We, Ue, Ke, Ge, Je, Xe, Qe, Ze, et, RootRoute, FileRoute, LazyRoute, tt, rt, nt, Router, useTags, Scripts, ot, st, at, it, lt, ut, ct, ht, dt, pt, ft, mt, gt, yt, bt, vt, kt, St, Ct, wt, Pt, xt, Rt, Tt, $t, Et, Ft, It, _t, At, Mt, Ot, Lt, Nt, Bt, jt, Dt, zt, Ht, Vt, qt, Wt, Ut, Kt, Gt, Jt, Xt, Qt, Yt, Zt, er, __publicField$2, H3Error, tr, rr, or, sr, __publicField, H3Event, ar, ir2, lr, ur, hr, dr, pr, mr, gr, yr, br, vr, kr, Sr, Cr, wr, Pr, xr, Rr, Tr, $r, Er, Fr, Ir, _r, Ar, Mr, Or, Lr, Br, jr, Dr, zr, Vr, qr, Wr, Ur, Kr, Gr, Jr, Xr, Qr, Yr, Zr, en, tn, rn, nn, on2, sn, an, ln, un, cn, hn, dn, pn, fn, mn, gn, yn, bn, vn, kn, Sn, Cn, wn, Pn, xn, Rn, Tn, $n, En, Fn, In, _n, An, Mn, On, Ln, Nn, Bn, jn, Dn, zn, Hn, Vn, qn, Wn, Un, Kn, Gn, Jn, Xn, Qn, Yn, Zn, eo, to, ro, no, oo, so, ao, io, lo, uo, co, ho, po, fo, mo, go, yo, bo, vo, ko, So, Co, wo2, Po, xo, Ro, To, $o, Eo, Fo, Io, _o, Ao, Mo, Oo, Lo, No, Bo, jo, Do, zo, Ho, Vo, qo, Wo, Uo, Ko, Go, Jo, Xo, Qo, Yo, Zo, es, ts, rs, ns, os, ss, as, is, ls, us, cs, hs, ds, ps, fs, ms, gs, ys, bs, vs, ks, Ss, Cs, ws, Ps, xs, Rs, Ts, $s, Es, Fs, Is, _s, As, Ms, Os, Ls, Ns, Bs, js, Ds, zs, Hs, Vs, qs, Ws, Us, Ks, Gs, Js, Xs, Qs, Ys, Zs, ea, ta, ra, na, oa, sa, aa, ia, la, ua, ca, ha, da, pa, fa, ma, ga, ya, ba, va, ka, Sa, Ca, wa, Pa, xa, Ra, Ta, $a, Ea, Fa, Ia, _a, Aa, Ma, Oa, La, Na, Ba, ja, Da, za, Ha, Va, qa, Wa, Ua, Ka, Ga, Ja, Xa, Qa, Ya, Za, ei, ti, ri, ni, oi, si, ai, ii, li, ui, ci, hi, di, pi, fi, mi, gi, yi, bi, vi, renderRouterToStream, defaultStreamHandler, ki, createSerializer, Si, Ci, wi, applyMiddleware, Pi, xi, Ri, Ti, $i, Ei, Fi, Ii, seo, _i, Ai, Mi, Oi, Li, Ni, Bi, ji, Di, zi, Hi;
var init_ssr = __esm({
  ".output/server/chunks/_/ssr.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_async_hooks();
    __name(getDefaultExportFromCjs, "getDefaultExportFromCjs");
    l3 = { exports: {} };
    u2 = {};
    c2 = Symbol.for("react.transitional.element");
    h2 = Symbol.for("react.fragment");
    __name(jsxProd, "jsxProd");
    u2.Fragment = h2, u2.jsx = jsxProd, u2.jsxs = jsxProd, l3.exports = u2;
    p2 = l3.exports;
    __name(invariant, "invariant");
    g = getDefaultExportFromCjs(function(e4, r4) {
    });
    y = /* @__PURE__ */ new WeakMap();
    b = /* @__PURE__ */ new WeakMap();
    v = { current: [] };
    k2 = false;
    C2 = 0;
    P2 = /* @__PURE__ */ new Set();
    R2 = /* @__PURE__ */ new Map();
    __name(__flush_internals, "__flush_internals");
    __name(__notifyListeners, "__notifyListeners");
    __name(__notifyDerivedListeners, "__notifyDerivedListeners");
    __name(__flush, "__flush");
    __name(batch, "batch");
    Store = class {
      static {
        __name(this, "Store");
      }
      constructor(e4, r4) {
        this.listeners = /* @__PURE__ */ new Set(), this.subscribe = (e5) => {
          var r5, n2;
          this.listeners.add(e5);
          const o5 = null == (n2 = null == (r5 = this.options) ? void 0 : r5.onSubscribe) ? void 0 : n2.call(r5, e5, this);
          return () => {
            this.listeners.delete(e5), null == o5 || o5();
          };
        }, this.prevState = e4, this.state = e4, this.options = r4;
      }
      setState(e4) {
        var r4, n2, o5;
        this.prevState = this.state, (null == (r4 = this.options) ? void 0 : r4.updateFn) ? this.state = this.options.updateFn(this.prevState)(e4) : !/* @__PURE__ */ function(e5) {
          return "function" == typeof e5;
        }(e4) ? this.state = e4 : this.state = e4(this.prevState), null == (o5 = null == (n2 = this.options) ? void 0 : n2.onUpdate) || o5.call(n2), __flush(this);
      }
    };
    Derived = class _Derived {
      static {
        __name(this, "Derived");
      }
      constructor(e4) {
        this.listeners = /* @__PURE__ */ new Set(), this._subscriptions = [], this.lastSeenDepValues = [], this.getDepVals = () => {
          const e5 = [], r4 = [];
          for (const n2 of this.options.deps) e5.push(n2.prevState), r4.push(n2.state);
          return this.lastSeenDepValues = r4, { prevDepVals: e5, currDepVals: r4, prevVal: this.prevState ?? void 0 };
        }, this.recompute = () => {
          var e5, r4;
          this.prevState = this.state;
          const { prevDepVals: n2, currDepVals: o5, prevVal: s5 } = this.getDepVals();
          this.state = this.options.fn({ prevDepVals: n2, currDepVals: o5, prevVal: s5 }), null == (r4 = (e5 = this.options).onUpdate) || r4.call(e5);
        }, this.checkIfRecalculationNeededDeeply = () => {
          for (const e6 of this.options.deps) e6 instanceof _Derived && e6.checkIfRecalculationNeededDeeply();
          let e5 = false;
          const r4 = this.lastSeenDepValues, { currDepVals: n2 } = this.getDepVals();
          for (let o5 = 0; o5 < n2.length; o5++) if (n2[o5] !== r4[o5]) {
            e5 = true;
            break;
          }
          e5 && this.recompute();
        }, this.mount = () => (this.registerOnGraph(), this.checkIfRecalculationNeededDeeply(), () => {
          this.unregisterFromGraph();
          for (const e5 of this._subscriptions) e5();
        }), this.subscribe = (e5) => {
          var r4, n2;
          this.listeners.add(e5);
          const o5 = null == (n2 = (r4 = this.options).onSubscribe) ? void 0 : n2.call(r4, e5, this);
          return () => {
            this.listeners.delete(e5), null == o5 || o5();
          };
        }, this.options = e4, this.state = e4.fn({ prevDepVals: void 0, prevVal: void 0, currDepVals: this.getDepVals().currDepVals });
      }
      registerOnGraph(e4 = this.options.deps) {
        for (const r4 of e4) if (r4 instanceof _Derived) r4.registerOnGraph(), this.registerOnGraph(r4.options.deps);
        else if (r4 instanceof Store) {
          let e5 = y.get(r4);
          e5 || (e5 = /* @__PURE__ */ new Set(), y.set(r4, e5)), e5.add(this);
          let n2 = b.get(this);
          n2 || (n2 = /* @__PURE__ */ new Set(), b.set(this, n2)), n2.add(r4);
        }
      }
      unregisterFromGraph(e4 = this.options.deps) {
        for (const r4 of e4) if (r4 instanceof _Derived) this.unregisterFromGraph(r4.options.deps);
        else if (r4 instanceof Store) {
          const e5 = y.get(r4);
          e5 && e5.delete(this);
          const n2 = b.get(this);
          n2 && n2.delete(r4);
        }
      }
    };
    T2 = "__TSR_index";
    $ = "popstate";
    E2 = "beforeunload";
    __name(createHistory, "createHistory");
    __name(assignKeyAndIndex, "assignKeyAndIndex");
    __name(createMemoryHistory, "createMemoryHistory");
    __name(parseHref, "parseHref");
    __name(createRandomKey, "createRandomKey");
    __name(last, "last");
    __name(functionalUpdate, "functionalUpdate");
    __name(pick, "pick");
    __name(replaceEqualDeep, "replaceEqualDeep");
    __name(isSimplePlainObject, "isSimplePlainObject");
    __name(isPlainObject, "isPlainObject");
    __name(hasObjectPrototype, "hasObjectPrototype");
    __name(isPlainArray, "isPlainArray");
    __name(getObjectKeys, "getObjectKeys");
    __name(deepEqual, "deepEqual");
    __name(createControlledPromise, "createControlledPromise");
    __name(joinPaths, "joinPaths");
    __name(cleanPath, "cleanPath");
    __name(trimPathLeft, "trimPathLeft");
    __name(trimPathRight, "trimPathRight");
    __name(trimPath, "trimPath");
    __name(removeTrailingSlash, "removeTrailingSlash");
    F2 = /^\$.{1,}$/;
    I2 = /^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/;
    A2 = /^\$$/;
    O2 = /^(.*?)\{\$\}(.*)$/;
    __name(parsePathname, "parsePathname");
    __name(interpolatePath, "interpolatePath");
    __name(matchPathname, "matchPathname");
    __name(removeBasepath, "removeBasepath");
    __name(isNotFound, "isNotFound");
    N2 = "tsr-scroll-restoration-v1_3";
    B = function() {
      const e4 = void 0;
      if (!e4) return;
      const r4 = e4.getItem(N2);
      let n2 = r4 ? JSON.parse(r4) : {};
      return { state: n2, set: /* @__PURE__ */ __name((r5) => (n2 = functionalUpdate(r5, n2) || n2, e4.setItem(N2, JSON.stringify(n2))), "set") };
    }();
    defaultGetScrollRestorationKey = /* @__PURE__ */ __name((e4) => e4.state.__TSR_key || e4.href, "defaultGetScrollRestorationKey");
    D2 = false;
    __name(restoreScroll, "restoreScroll");
    __name(setupScrollRestoration, "setupScrollRestoration");
    __name(toValue, "toValue");
    H = (V2 = JSON.parse, (e4) => {
      "?" === e4.substring(0, 1) && (e4 = e4.substring(1));
      const r4 = [...new URLSearchParams(e4).entries()].reduce((e5, [r5, n2]) => {
        const o5 = e5[r5];
        return e5[r5] = null == o5 ? toValue(n2) : Array.isArray(o5) ? [...o5, toValue(n2)] : [o5, toValue(n2)], e5;
      }, {});
      for (const e5 in r4) {
        const n2 = r4[e5];
        if ("string" == typeof n2) try {
          r4[e5] = V2(n2);
        } catch (e6) {
        }
      }
      return r4;
    });
    q = /* @__PURE__ */ function(e4, r4) {
      return (n2) => {
        n2 = { ...n2 }, Object.keys(n2).forEach((o6) => {
          const s5 = n2[o6];
          void 0 === s5 || void 0 === s5 ? delete n2[o6] : n2[o6] = function(n3) {
            if ("object" == typeof n3 && null !== n3) try {
              return e4(n3);
            } catch (e5) {
            }
            else if ("string" == typeof n3 && "function" == typeof r4) try {
              return r4(n3), e4(n3);
            } catch (e5) {
            }
            return n3;
          }(s5);
        });
        const o5 = function(e5) {
          const r5 = Object.entries(e5).flatMap(([e6, r6]) => Array.isArray(r6) ? r6.map((r7) => [e6, String(r7)]) : [[e6, String(r6)]]);
          return "" + new URLSearchParams(r5).toString();
        }(n2).toString();
        return o5 ? `?${o5}` : "";
      };
    }(JSON.stringify, JSON.parse);
    W2 = "__root__";
    __name(isRedirect, "isRedirect");
    __name(getLocationChangeInfo, "getLocationChangeInfo");
    RouterCore = class {
      static {
        __name(this, "RouterCore");
      }
      constructor(e4) {
        this.tempLocationKey = `${Math.round(1e7 * Math.random())}`, this.resetNextScroll = true, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = /* @__PURE__ */ new Set(), this.isScrollRestoring = false, this.isScrollRestorationSetup = false, this.startTransition = (e5) => e5(), this.isShell = false, this.update = (e5) => {
          e5.notFoundRoute && console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
          const r4 = this.options;
          this.options = { ...this.options, ...e5 }, this.isServer = this.options.isServer ?? "undefined" == typeof document, this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters ? new Map(this.options.pathParamsAllowedCharacters.map((e6) => [encodeURIComponent(e6), e6])) : void 0, (!this.basepath || e5.basepath && e5.basepath !== r4.basepath) && (void 0 === e5.basepath || "" === e5.basepath || "/" === e5.basepath ? this.basepath = "/" : this.basepath = `/${trimPath(e5.basepath)}`), (!this.history || this.options.history && this.options.history !== this.history) && (this.history = this.options.history ?? (this.isServer ? createMemoryHistory({ initialEntries: [this.basepath || "/"] }) : function() {
            var e6, r5;
            const n2 = "undefined" != typeof document ? window : void 0, o5 = n2.history.pushState, s5 = n2.history.replaceState;
            let a6 = [];
            const _getBlockers = /* @__PURE__ */ __name(() => a6, "_getBlockers"), parseLocation = /* @__PURE__ */ __name(() => parseHref(`${n2.location.pathname}${n2.location.search}${n2.location.hash}`, n2.history.state), "parseLocation");
            if (!(null == (e6 = n2.history.state) ? void 0 : e6.__TSR_key) && !(null == (r5 = n2.history.state) ? void 0 : r5.key)) {
              const e7 = createRandomKey();
              n2.history.replaceState({ [T2]: 0, key: e7, __TSR_key: e7 }, "");
            }
            let i5, l5, u3, c4 = parseLocation(), h4 = false, p4 = false, g3 = false, y3 = false;
            const flush = /* @__PURE__ */ __name(() => {
              l5 && (b3._ignoreSubscribers = true, (l5.isPush ? n2.history.pushState : n2.history.replaceState)(l5.state, "", l5.href), b3._ignoreSubscribers = false, l5 = void 0, u3 = void 0, i5 = void 0);
            }, "flush"), queueHistoryAction = /* @__PURE__ */ __name((e7, r6, n3) => {
              const o6 = r6;
              u3 || (i5 = c4), c4 = parseHref(r6, n3), l5 = { href: o6, state: n3, isPush: (null == l5 ? void 0 : l5.isPush) || "push" === e7 }, u3 || (u3 = Promise.resolve().then(() => flush()));
            }, "queueHistoryAction"), onPushPop = /* @__PURE__ */ __name((e7) => {
              c4 = parseLocation(), b3.notify({ type: e7 });
            }, "onPushPop"), onPushPopEvent = /* @__PURE__ */ __name(async () => {
              if (p4) return void (p4 = false);
              const e7 = parseLocation(), r6 = e7.state[T2] - c4.state[T2], o6 = -1 === r6, s6 = !(1 === r6) && !o6 || h4;
              h4 = false;
              const a7 = s6 ? "GO" : o6 ? "BACK" : "FORWARD", i6 = s6 ? { type: "GO", index: r6 } : { type: o6 ? "BACK" : "FORWARD" };
              if (g3) g3 = false;
              else {
                const r7 = _getBlockers();
                if ("undefined" != typeof document && r7.length) {
                  for (const o7 of r7) if (await o7.blockerFn({ currentLocation: c4, nextLocation: e7, action: a7 })) return p4 = true, n2.history.go(1), void b3.notify(i6);
                }
              }
              c4 = parseLocation(), b3.notify(i6);
            }, "onPushPopEvent"), onBeforeUnload = /* @__PURE__ */ __name((e7) => {
              if (y3) return void (y3 = false);
              let r6 = false;
              const n3 = _getBlockers();
              if ("undefined" != typeof document && n3.length) for (const e8 of n3) {
                const n4 = e8.enableBeforeUnload ?? true;
                if (true === n4) {
                  r6 = true;
                  break;
                }
                if ("function" == typeof n4 && true === n4()) {
                  r6 = true;
                  break;
                }
              }
              return r6 ? (e7.preventDefault(), e7.returnValue = "") : void 0;
            }, "onBeforeUnload"), b3 = createHistory({ getLocation: /* @__PURE__ */ __name(() => c4, "getLocation"), getLength: /* @__PURE__ */ __name(() => n2.history.length, "getLength"), pushState: /* @__PURE__ */ __name((e7, r6) => queueHistoryAction("push", e7, r6), "pushState"), replaceState: /* @__PURE__ */ __name((e7, r6) => queueHistoryAction("replace", e7, r6), "replaceState"), back: /* @__PURE__ */ __name((e7) => (e7 && (g3 = true), y3 = true, n2.history.back()), "back"), forward: /* @__PURE__ */ __name((e7) => {
              e7 && (g3 = true), y3 = true, n2.history.forward();
            }, "forward"), go: /* @__PURE__ */ __name((e7) => {
              h4 = true, n2.history.go(e7);
            }, "go"), createHref: /* @__PURE__ */ __name((e7) => e7, "createHref"), flush, destroy: /* @__PURE__ */ __name(() => {
              n2.history.pushState = o5, n2.history.replaceState = s5, n2.removeEventListener(E2, onBeforeUnload, { capture: true }), n2.removeEventListener($, onPushPopEvent);
            }, "destroy"), onBlocked: /* @__PURE__ */ __name(() => {
              i5 && c4 !== i5 && (c4 = i5);
            }, "onBlocked"), getBlockers: _getBlockers, setBlockers: /* @__PURE__ */ __name((e7) => a6 = e7, "setBlockers"), notifyOnIndexChange: false });
            return n2.addEventListener(E2, onBeforeUnload, { capture: true }), n2.addEventListener($, onPushPopEvent), n2.history.pushState = function(...e7) {
              const r6 = o5.apply(n2.history, e7);
              return b3._ignoreSubscribers || onPushPop("PUSH"), r6;
            }, n2.history.replaceState = function(...e7) {
              const r6 = s5.apply(n2.history, e7);
              return b3._ignoreSubscribers || onPushPop("REPLACE"), r6;
            }, b3;
          }()), this.latestLocation = this.parseLocation()), this.options.routeTree !== this.routeTree && (this.routeTree = this.options.routeTree, this.buildRouteTree()), this.__store || (this.__store = new Store({ loadedAt: 0, isLoading: false, isTransitioning: false, status: "idle", resolvedLocation: void 0, location: this.latestLocation, matches: [], pendingMatches: [], cachedMatches: [], statusCode: 200 }, { onUpdate: /* @__PURE__ */ __name(() => {
            this.__store.state = { ...this.state, cachedMatches: this.state.cachedMatches.filter((e6) => !["redirected"].includes(e6.status)) };
          }, "onUpdate") }), setupScrollRestoration(this)), this.latestLocation.search.__TSS_SHELL && (this.isShell = true);
        }, this.buildRouteTree = () => {
          const { routesById: e5, routesByPath: r4, flatRoutes: n2 } = processRouteTree({ routeTree: this.routeTree, initRoute: /* @__PURE__ */ __name((e6, r5) => {
            e6.init({ originalIndex: r5 });
          }, "initRoute") });
          this.routesById = e5, this.routesByPath = r4, this.flatRoutes = n2;
          const o5 = this.options.notFoundRoute;
          o5 && (o5.init({ originalIndex: 99999999999 }), this.routesById[o5.id] = o5);
        }, this.subscribe = (e5, r4) => {
          const n2 = { eventType: e5, fn: r4 };
          return this.subscribers.add(n2), () => {
            this.subscribers.delete(n2);
          };
        }, this.emit = (e5) => {
          this.subscribers.forEach((r4) => {
            r4.eventType === e5.type && r4.fn(e5);
          });
        }, this.parseLocation = (e5, r4) => {
          const parse = /* @__PURE__ */ __name(({ pathname: r5, search: n3, hash: o6, state: s6 }) => {
            const a6 = this.options.parseSearch(n3), i5 = this.options.stringifySearch(a6);
            return { pathname: r5, searchStr: i5, search: replaceEqualDeep(null == e5 ? void 0 : e5.search, a6), hash: o6.split("#").reverse()[0] ?? "", href: `${r5}${i5}${o6}`, state: replaceEqualDeep(null == e5 ? void 0 : e5.state, s6) };
          }, "parse"), n2 = parse(r4 ?? this.history.location), { __tempLocation: o5, __tempKey: s5 } = n2.state;
          if (o5 && (!s5 || s5 === this.tempLocationKey)) {
            const e6 = parse(o5);
            return e6.state.key = n2.state.key, e6.state.__TSR_key = n2.state.__TSR_key, delete e6.state.__tempLocation, { ...e6, maskedLocation: n2 };
          }
          return n2;
        }, this.resolvePathWithBase = (e5, r4) => function({ basepath: e6, base: r5, to: n2, trailingSlash: o5 = "never", caseSensitive: s5 }) {
          var a6, i5;
          r5 = removeBasepath(e6, r5, s5), n2 = removeBasepath(e6, n2, s5);
          let l5 = parsePathname(r5);
          const u3 = parsePathname(n2);
          return l5.length > 1 && "/" === (null == (a6 = last(l5)) ? void 0 : a6.value) && l5.pop(), u3.forEach((e7, r6) => {
            "/" === e7.value ? r6 ? r6 === u3.length - 1 && l5.push(e7) : l5 = [e7] : ".." === e7.value ? l5.pop() : "." === e7.value || l5.push(e7);
          }), l5.length > 1 && ("/" === (null == (i5 = last(l5)) ? void 0 : i5.value) ? "never" === o5 && l5.pop() : "always" === o5 && l5.push({ type: "pathname", value: "/" })), cleanPath(joinPaths([e6, ...l5.map((e7) => {
            if ("param" === e7.type) {
              const r6 = e7.value.substring(1);
              if (e7.prefixSegment && e7.suffixSegment) return `${e7.prefixSegment}{$${r6}}${e7.suffixSegment}`;
              if (e7.prefixSegment) return `${e7.prefixSegment}{$${r6}}`;
              if (e7.suffixSegment) return `{$${r6}}${e7.suffixSegment}`;
            }
            if ("wildcard" === e7.type) {
              if (e7.prefixSegment && e7.suffixSegment) return `${e7.prefixSegment}{$}${e7.suffixSegment}`;
              if (e7.prefixSegment) return `${e7.prefixSegment}{$}`;
              if (e7.suffixSegment) return `{$}${e7.suffixSegment}`;
            }
            return e7.value;
          })]));
        }({ basepath: this.basepath, base: e5, to: cleanPath(r4), trailingSlash: this.options.trailingSlash, caseSensitive: this.options.caseSensitive }), this.matchRoutes = (e5, r4, n2) => "string" == typeof e5 ? this.matchRoutesInternal({ pathname: e5, search: r4 }, n2) : this.matchRoutesInternal(e5, r4), this.getMatchedRoutes = (e5, r4) => getMatchedRoutes({ pathname: e5, routePathname: r4, basepath: this.basepath, caseSensitive: this.options.caseSensitive, routesByPath: this.routesByPath, routesById: this.routesById, flatRoutes: this.flatRoutes }), this.cancelMatch = (e5) => {
          const r4 = this.getMatch(e5);
          r4 && (r4.abortController.abort(), this.updateMatch(e5, (e6) => (clearTimeout(e6.pendingTimeout), { ...e6, pendingTimeout: void 0 })));
        }, this.cancelMatches = () => {
          var e5;
          null == (e5 = this.state.pendingMatches) || e5.forEach((e6) => {
            this.cancelMatch(e6.id);
          });
        }, this.buildLocation = (e5) => {
          const build = /* @__PURE__ */ __name((r4 = {}) => {
            var n2;
            const o5 = r4._fromLocation || this.latestLocation, s5 = last(this.matchRoutes(o5, { _buildLocation: true }));
            let a6 = s5.fullPath;
            const i5 = r4.to ? this.resolvePathWithBase(a6, `${r4.to}`) : this.resolvePathWithBase(a6, "."), l5 = !!r4.to && !this.comparePaths(r4.to.toString(), a6) && !this.comparePaths(i5, a6);
            "path" === r4.unsafeRelative ? a6 = o5.pathname : l5 && r4.from && (a6 = r4.from);
            const u3 = s5.search, c4 = { ...s5.params }, h4 = r4.to ? this.resolvePathWithBase(a6, `${r4.to}`) : this.resolvePathWithBase(a6, ".");
            let p4 = true === (r4.params ?? true) ? c4 : { ...c4, ...functionalUpdate(r4.params, c4) };
            const g3 = this.matchRoutes(h4, {}, { _buildLocation: true }).map((e6) => this.looseRoutesById[e6.routeId]);
            Object.keys(p4).length > 0 && g3.map((e6) => {
              var r5;
              return (null == (r5 = e6.options.params) ? void 0 : r5.stringify) ?? e6.options.stringifyParams;
            }).filter(Boolean).forEach((e6) => {
              p4 = { ...p4, ...e6(p4) };
            });
            const y3 = interpolatePath({ path: h4, params: p4 ?? {}, leaveWildcards: false, leaveParams: e5.leaveParams, decodeCharMap: this.pathParamsDecodeCharMap }).interpolatedPath;
            let b3 = u3;
            if (e5._includeValidateSearch && (null == (n2 = this.options.search) ? void 0 : n2.strict)) {
              let e6 = {};
              g3.forEach((r5) => {
                try {
                  r5.options.validateSearch && (e6 = { ...e6, ...validateSearch(r5.options.validateSearch, { ...e6, ...b3 }) ?? {} });
                } catch {
                }
              }), b3 = e6;
            }
            b3 = function({ search: e6, dest: r5, destRoutes: n3, _includeValidateSearch: o6 }) {
              const s6 = n3.reduce((e7, r6) => {
                var n4;
                const s7 = [];
                if ("search" in r6.options) (null == (n4 = r6.options.search) ? void 0 : n4.middlewares) && s7.push(...r6.options.search.middlewares);
                else if (r6.options.preSearchFilters || r6.options.postSearchFilters) {
                  const legacyMiddleware = /* @__PURE__ */ __name(({ search: e8, next: n5 }) => {
                    let o7 = e8;
                    "preSearchFilters" in r6.options && r6.options.preSearchFilters && (o7 = r6.options.preSearchFilters.reduce((e9, r7) => r7(e9), e8));
                    const s8 = n5(o7);
                    return "postSearchFilters" in r6.options && r6.options.postSearchFilters ? r6.options.postSearchFilters.reduce((e9, r7) => r7(e9), s8) : s8;
                  }, "legacyMiddleware");
                  s7.push(legacyMiddleware);
                }
                if (o6 && r6.options.validateSearch) {
                  const validate = /* @__PURE__ */ __name(({ search: e8, next: n5 }) => {
                    const o7 = n5(e8);
                    try {
                      return { ...o7, ...validateSearch(r6.options.validateSearch, o7) ?? {} };
                    } catch {
                      return o7;
                    }
                  }, "validate");
                  s7.push(validate);
                }
                return e7.concat(s7);
              }, []) ?? [], final = /* @__PURE__ */ __name(({ search: e7 }) => r5.search ? true === r5.search ? e7 : functionalUpdate(r5.search, e7) : {}, "final");
              s6.push(final);
              const applyNext = /* @__PURE__ */ __name((e7, r6) => {
                if (e7 >= s6.length) return r6;
                return (0, s6[e7])({ search: r6, next: /* @__PURE__ */ __name((r7) => applyNext(e7 + 1, r7), "next") });
              }, "applyNext");
              return applyNext(0, e6);
            }({ search: b3, dest: r4, destRoutes: g3, _includeValidateSearch: e5._includeValidateSearch }), b3 = replaceEqualDeep(u3, b3);
            const v3 = this.options.stringifySearch(b3), k4 = true === r4.hash ? o5.hash : r4.hash ? functionalUpdate(r4.hash, o5.hash) : void 0, C4 = k4 ? `#${k4}` : "";
            let P4 = true === r4.state ? o5.state : r4.state ? functionalUpdate(r4.state, o5.state) : {};
            return P4 = replaceEqualDeep(o5.state, P4), { pathname: y3, search: b3, searchStr: v3, state: P4, hash: k4 ?? "", href: `${y3}${v3}${C4}`, unmaskOnReload: r4.unmaskOnReload };
          }, "build"), buildWithMatches = /* @__PURE__ */ __name((r4 = {}, n2) => {
            var o5;
            const s5 = build(r4);
            let a6 = n2 ? build(n2) : void 0;
            if (!a6) {
              let r5 = {};
              const i5 = null == (o5 = this.options.routeMasks) ? void 0 : o5.find((e6) => {
                const n3 = matchPathname(this.basepath, s5.pathname, { to: e6.from, caseSensitive: false, fuzzy: false });
                return !!n3 && (r5 = n3, true);
              });
              if (i5) {
                const { from: o6, ...s6 } = i5;
                n2 = { ...pick(e5, ["from"]), ...s6, params: r5 }, a6 = build(n2);
              }
            }
            if (a6) {
              const e6 = build(n2);
              s5.maskedLocation = e6;
            }
            return s5;
          }, "buildWithMatches");
          return e5.mask ? buildWithMatches(e5, { ...pick(e5, ["from"]), ...e5.mask }) : buildWithMatches(e5);
        }, this.commitLocation = ({ viewTransition: e5, ignoreBlocker: r4, ...n2 }) => {
          const o5 = this.latestLocation.href === n2.href, s5 = this.commitLocationPromise;
          if (this.commitLocationPromise = createControlledPromise(() => {
            null == s5 || s5.resolve();
          }), o5 && (() => {
            const e6 = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
            e6.forEach((e7) => {
              n2.state[e7] = this.latestLocation.state[e7];
            });
            const r5 = deepEqual(n2.state, this.latestLocation.state);
            return e6.forEach((e7) => {
              delete n2.state[e7];
            }), r5;
          })()) this.load();
          else {
            let { maskedLocation: o6, hashScrollIntoView: s6, ...a6 } = n2;
            o6 && (a6 = { ...o6, state: { ...o6.state, __tempKey: void 0, __tempLocation: { ...a6, search: a6.searchStr, state: { ...a6.state, __tempKey: void 0, __tempLocation: void 0, __TSR_key: void 0, key: void 0 } } } }, (a6.unmaskOnReload ?? this.options.unmaskOnReload) && (a6.state.__tempKey = this.tempLocationKey)), a6.state.__hashScrollIntoViewOptions = s6 ?? this.options.defaultHashScrollIntoView ?? true, this.shouldViewTransition = e5, this.history[n2.replace ? "replace" : "push"](a6.href, a6.state, { ignoreBlocker: r4 });
          }
          return this.resetNextScroll = n2.resetScroll ?? true, this.history.subscribers.size || this.load(), this.commitLocationPromise;
        }, this.buildAndCommitLocation = ({ replace: e5, resetScroll: r4, hashScrollIntoView: n2, viewTransition: o5, ignoreBlocker: s5, href: a6, ...i5 } = {}) => {
          if (a6) {
            const r5 = this.history.location.state.__TSR_index, n3 = parseHref(a6, { __TSR_index: e5 ? r5 : r5 + 1 });
            i5.to = n3.pathname, i5.search = this.options.parseSearch(n3.search), i5.hash = n3.hash.slice(1);
          }
          const l5 = this.buildLocation({ ...i5, _includeValidateSearch: true });
          return this.commitLocation({ ...l5, viewTransition: o5, replace: e5, resetScroll: r4, hashScrollIntoView: n2, ignoreBlocker: s5 });
        }, this.navigate = ({ to: e5, reloadDocument: r4, href: n2, ...o5 }) => {
          if (!r4 && n2) try {
            new URL(`${n2}`), r4 = true;
          } catch {
          }
          if (!r4) return this.buildAndCommitLocation({ ...o5, href: n2, to: e5, _isNavigate: true });
          if (!n2) {
            const r5 = this.buildLocation({ to: e5, ...o5 });
            n2 = this.history.createHref(r5.href);
          }
          o5.replace ? window.location.replace(n2) : window.location.href = n2;
        }, this.beforeLoad = () => {
          if (this.cancelMatches(), this.latestLocation = this.parseLocation(this.latestLocation), this.isServer) {
            const e6 = this.buildLocation({ to: this.latestLocation.pathname, search: true, params: true, hash: true, state: true, _includeValidateSearch: true });
            if (trimPath(this.latestLocation.href) !== trimPath(e6.href)) throw function(e7) {
              if (e7.statusCode = e7.statusCode || e7.code || 307, !e7.reloadDocument) try {
                new URL(`${e7.href}`), e7.reloadDocument = true;
              } catch {
              }
              const r4 = new Headers(e7.headers || {});
              e7.href && null === r4.get("Location") && r4.set("Location", e7.href);
              const n2 = new Response(null, { status: e7.statusCode, headers: r4 });
              if (n2.options = e7, e7.throw) throw n2;
              return n2;
            }({ href: e6.href });
          }
          let e5 = this.matchRoutes(this.latestLocation);
          this.isShell && (e5 = e5.slice(0, 1)), this.__store.setState((r4) => ({ ...r4, status: "pending", isLoading: true, location: this.latestLocation, pendingMatches: e5, cachedMatches: r4.cachedMatches.filter((r5) => !e5.find((e6) => e6.id === r5.id)) }));
        }, this.load = async (e5) => {
          let r4, n2, o5;
          for (o5 = new Promise((s5) => {
            this.startTransition(async () => {
              var a6;
              try {
                this.beforeLoad();
                const r5 = this.latestLocation, n3 = this.state.resolvedLocation;
                this.state.redirect || this.emit({ type: "onBeforeNavigate", ...getLocationChangeInfo({ resolvedLocation: n3, location: r5 }) }), this.emit({ type: "onBeforeLoad", ...getLocationChangeInfo({ resolvedLocation: n3, location: r5 }) }), await this.loadMatches({ sync: null == e5 ? void 0 : e5.sync, matches: this.state.pendingMatches, location: r5, onReady: /* @__PURE__ */ __name(async () => {
                  this.startViewTransition(async () => {
                    let e6, r6, n4;
                    batch(() => {
                      this.__store.setState((o6) => {
                        const s6 = o6.matches, a7 = o6.pendingMatches || o6.matches;
                        return e6 = s6.filter((e7) => !a7.find((r7) => r7.id === e7.id)), r6 = a7.filter((e7) => !s6.find((r7) => r7.id === e7.id)), n4 = s6.filter((e7) => a7.find((r7) => r7.id === e7.id)), { ...o6, isLoading: false, loadedAt: Date.now(), matches: a7, pendingMatches: void 0, cachedMatches: [...o6.cachedMatches, ...e6.filter((e7) => "error" !== e7.status)] };
                      }), this.clearExpiredCache();
                    }), [[e6, "onLeave"], [r6, "onEnter"], [n4, "onStay"]].forEach(([e7, r7]) => {
                      e7.forEach((e8) => {
                        var n5, o6;
                        null == (o6 = (n5 = this.looseRoutesById[e8.routeId].options)[r7]) || o6.call(n5, e8);
                      });
                    });
                  });
                }, "onReady") });
              } catch (e6) {
                isRedirect(e6) ? (r4 = e6, this.isServer || this.navigate({ ...r4.options, replace: true, ignoreBlocker: true })) : isNotFound(e6) && (n2 = e6), this.__store.setState((e7) => ({ ...e7, statusCode: r4 ? r4.status : n2 ? 404 : e7.matches.some((e8) => "error" === e8.status) ? 500 : 200, redirect: r4 }));
              }
              this.latestLoadPromise === o5 && (null == (a6 = this.commitLocationPromise) || a6.resolve(), this.latestLoadPromise = void 0, this.commitLocationPromise = void 0), s5();
            });
          }), this.latestLoadPromise = o5, await o5; this.latestLoadPromise && o5 !== this.latestLoadPromise; ) await this.latestLoadPromise;
          this.hasNotFoundMatch() && this.__store.setState((e6) => ({ ...e6, statusCode: 404 }));
        }, this.startViewTransition = (e5) => {
          const r4 = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (delete this.shouldViewTransition, r4 && "undefined" != typeof document && "startViewTransition" in document && "function" == typeof document.startViewTransition) {
            let n2;
            if ("object" == typeof r4 && this.isViewTransitionTypesSupported) {
              const o5 = this.latestLocation, s5 = this.state.resolvedLocation;
              n2 = { update: e5, types: "function" == typeof r4.types ? r4.types(getLocationChangeInfo({ resolvedLocation: s5, location: o5 })) : r4.types };
            } else n2 = e5;
            document.startViewTransition(n2);
          } else e5();
        }, this.updateMatch = (e5, r4) => {
          var n2;
          let o5;
          const s5 = null == (n2 = this.state.pendingMatches) ? void 0 : n2.find((r5) => r5.id === e5), a6 = this.state.matches.find((r5) => r5.id === e5), i5 = this.state.cachedMatches.find((r5) => r5.id === e5), l5 = s5 ? "pendingMatches" : a6 ? "matches" : i5 ? "cachedMatches" : "";
          return l5 && this.__store.setState((n3) => {
            var s6;
            return { ...n3, [l5]: null == (s6 = n3[l5]) ? void 0 : s6.map((n4) => n4.id === e5 ? o5 = r4(n4) : n4) };
          }), o5;
        }, this.getMatch = (e5) => [...this.state.cachedMatches, ...this.state.pendingMatches ?? [], ...this.state.matches].find((r4) => r4.id === e5), this.loadMatches = async ({ location: e5, matches: r4, preload: n2, onReady: o5, updateMatch: s5 = this.updateMatch, sync: a6 }) => {
          let i5, l5 = false;
          const triggerOnReady = /* @__PURE__ */ __name(async () => {
            l5 || (l5 = true, n2 || this.isServer || r4.forEach((e6) => {
              const { id: r5, routeId: n3, _forcePending: o6, minPendingPromise: a7 } = e6, i6 = this.looseRoutesById[n3].options.pendingMinMs ?? this.options.defaultPendingMinMs;
              if (o6 && i6 && !a7) {
                const e7 = createControlledPromise();
                s5(r5, (r6) => ({ ...r6, minPendingPromise: e7 })), setTimeout(() => {
                  e7.resolve(), s5(r5, (e8) => ({ ...e8, minPendingPromise: void 0 }));
                }, i6);
              }
            }), await (null == o5 ? void 0 : o5()));
          }, "triggerOnReady"), resolvePreload = /* @__PURE__ */ __name((e6) => !(!n2 || this.state.matches.find((r5) => r5.id === e6)), "resolvePreload");
          !this.isServer && this.state.matches.find((e6) => e6._forcePending) && triggerOnReady();
          const handleRedirectAndNotFound = /* @__PURE__ */ __name((n3, o6) => {
            var a7, i6, u3;
            if (isRedirect(o6) || isNotFound(o6)) {
              if (isRedirect(o6) && o6.redirectHandled && !o6.options.reloadDocument) throw o6;
              if (null == (a7 = n3.beforeLoadPromise) || a7.resolve(), null == (i6 = n3.loaderPromise) || i6.resolve(), s5(n3.id, (e6) => ({ ...e6, status: isRedirect(o6) ? "redirected" : isNotFound(o6) ? "notFound" : "error", isFetching: false, error: o6, beforeLoadPromise: void 0, loaderPromise: void 0 })), o6.routeId || (o6.routeId = n3.routeId), null == (u3 = n3.loadPromise) || u3.resolve(), isRedirect(o6)) throw l5 = true, o6.options._fromLocation = e5, o6.redirectHandled = true, o6 = this.resolveRedirect(o6);
              if (isNotFound(o6)) throw this._handleNotFound(r4, o6, { updateMatch: s5 }), o6;
            }
          }, "handleRedirectAndNotFound"), shouldSkipLoader = /* @__PURE__ */ __name((e6) => {
            const r5 = this.getMatch(e6);
            return !(this.isServer || !r5._dehydrated) || !(!this.isServer || false !== r5.ssr);
          }, "shouldSkipLoader");
          try {
            await new Promise((n3, l6) => {
              (async () => {
                var u3, c4, h4, p4;
                try {
                  const handleSerialError = /* @__PURE__ */ __name((e6, n4, o6) => {
                    var a7, l8;
                    const { id: u4, routeId: c5 } = r4[e6], h5 = this.looseRoutesById[c5];
                    if (n4 instanceof Promise) throw n4;
                    n4.routerCode = o6, i5 = i5 ?? e6, handleRedirectAndNotFound(this.getMatch(u4), n4);
                    try {
                      null == (l8 = (a7 = h5.options).onError) || l8.call(a7, n4);
                    } catch (e7) {
                      n4 = e7, handleRedirectAndNotFound(this.getMatch(u4), n4);
                    }
                    s5(u4, (e7) => {
                      var r5, o7;
                      return null == (r5 = e7.beforeLoadPromise) || r5.resolve(), null == (o7 = e7.loadPromise) || o7.resolve(), { ...e7, error: n4, status: "error", isFetching: false, updatedAt: Date.now(), abortController: new AbortController(), beforeLoadPromise: void 0 };
                    });
                  }, "handleSerialError");
                  for (const [n4, { id: a7, routeId: i6 }] of r4.entries()) {
                    const l8 = this.getMatch(a7), g4 = null == (u3 = r4[n4 - 1]) ? void 0 : u3.id, y3 = g4 ? this.getMatch(g4) : void 0, b3 = this.looseRoutesById[i6], v3 = b3.options.pendingMs ?? this.options.defaultPendingMs;
                    if (this.isServer) {
                      const n5 = this.options.defaultSsr ?? true;
                      let o6;
                      if (false === (null == y3 ? void 0 : y3.ssr)) o6 = false;
                      else {
                        let s6;
                        if (void 0 === b3.options.ssr) s6 = n5;
                        else if ("function" == typeof b3.options.ssr) {
                          let makeMaybe = /* @__PURE__ */ __name(function(e6, r5) {
                            return r5 ? { status: "error", error: r5 } : { status: "success", value: e6 };
                          }, "makeMaybe");
                          const { search: o7, params: i7 } = this.getMatch(a7), u4 = { search: makeMaybe(o7, l8.searchError), params: makeMaybe(i7, l8.paramsError), location: e5, matches: r4.map((e6) => ({ index: e6.index, pathname: e6.pathname, fullPath: e6.fullPath, staticData: e6.staticData, id: e6.id, routeId: e6.routeId, search: makeMaybe(e6.search, e6.searchError), params: makeMaybe(e6.params, e6.paramsError), ssr: e6.ssr })) };
                          s6 = await b3.options.ssr(u4) ?? n5;
                        } else s6 = b3.options.ssr;
                        o6 = true === s6 && "data-only" === (null == y3 ? void 0 : y3.ssr) ? "data-only" : s6;
                      }
                      s5(a7, (e6) => ({ ...e6, ssr: o6 }));
                    }
                    if (shouldSkipLoader(a7)) continue;
                    const k4 = !(!o5 || this.isServer || resolvePreload(a7) || !(b3.options.loader || b3.options.beforeLoad || routeNeedsPreload(b3)) || "number" != typeof v3 || v3 === 1 / 0 || !(b3.options.pendingComponent ?? (null == (c4 = this.options) ? void 0 : c4.defaultPendingComponent)));
                    let C4 = true;
                    const setupPendingTimeout = /* @__PURE__ */ __name(() => {
                      if (k4 && void 0 === this.getMatch(a7).pendingTimeout) {
                        const e6 = setTimeout(() => {
                          try {
                            triggerOnReady();
                          } catch {
                          }
                        }, v3);
                        s5(a7, (r5) => ({ ...r5, pendingTimeout: e6 }));
                      }
                    }, "setupPendingTimeout");
                    if (l8.beforeLoadPromise || l8.loaderPromise) {
                      setupPendingTimeout(), await l8.beforeLoadPromise;
                      const e6 = this.getMatch(a7);
                      "error" === e6.status ? C4 = true : !e6.preload || "redirected" !== e6.status && "notFound" !== e6.status || handleRedirectAndNotFound(e6, e6.error);
                    }
                    if (C4) {
                      try {
                        s5(a7, (e6) => {
                          const r5 = e6.loadPromise;
                          return { ...e6, loadPromise: createControlledPromise(() => {
                            null == r5 || r5.resolve();
                          }), beforeLoadPromise: createControlledPromise() };
                        });
                        const { paramsError: o6, searchError: i7 } = this.getMatch(a7);
                        o6 && handleSerialError(n4, o6, "PARSE_PARAMS"), i7 && handleSerialError(n4, i7, "VALIDATE_SEARCH"), setupPendingTimeout();
                        const l9 = new AbortController(), u4 = (null == y3 ? void 0 : y3.context) ?? this.options.context ?? {};
                        s5(a7, (e6) => ({ ...e6, isFetching: "beforeLoad", fetchCount: e6.fetchCount + 1, abortController: l9, context: { ...u4, ...e6.__routeContext } }));
                        const { search: c5, params: g5, context: v4, cause: k5 } = this.getMatch(a7), C5 = resolvePreload(a7), P4 = { search: c5, abortController: l9, params: g5, preload: C5, context: v4, location: e5, navigate: /* @__PURE__ */ __name((r5) => this.navigate({ ...r5, _fromLocation: e5 }), "navigate"), buildLocation: this.buildLocation, cause: C5 ? "preload" : k5, matches: r4 }, R4 = await (null == (p4 = (h4 = b3.options).beforeLoad) ? void 0 : p4.call(h4, P4));
                        (isRedirect(R4) || isNotFound(R4)) && handleSerialError(n4, R4, "BEFORE_LOAD"), s5(a7, (e6) => ({ ...e6, __beforeLoadContext: R4, context: { ...u4, ...e6.__routeContext, ...R4 }, abortController: l9 }));
                      } catch (e6) {
                        handleSerialError(n4, e6, "BEFORE_LOAD");
                      }
                      s5(a7, (e6) => {
                        var r5;
                        return null == (r5 = e6.beforeLoadPromise) || r5.resolve(), { ...e6, beforeLoadPromise: void 0, isFetching: false };
                      });
                    }
                  }
                  const l7 = r4.slice(0, i5), g3 = [];
                  l7.forEach(({ id: n4, routeId: o6 }, i6) => {
                    g3.push((async () => {
                      let l8 = false, u4 = false;
                      const c5 = this.looseRoutesById[o6], executeHead = /* @__PURE__ */ __name(async () => {
                        var e6, o7, s6, a7, i7, l9;
                        const u5 = this.getMatch(n4);
                        if (!u5) return;
                        const h6 = { matches: r4, match: u5, params: u5.params, loaderData: u5.loaderData }, p5 = await (null == (o7 = (e6 = c5.options).head) ? void 0 : o7.call(e6, h6)), g4 = null == p5 ? void 0 : p5.meta, y3 = null == p5 ? void 0 : p5.links, b3 = null == p5 ? void 0 : p5.scripts, v3 = null == p5 ? void 0 : p5.styles, k4 = await (null == (a7 = (s6 = c5.options).scripts) ? void 0 : a7.call(s6, h6));
                        return { meta: g4, links: y3, headScripts: b3, headers: await (null == (l9 = (i7 = c5.options).headers) ? void 0 : l9.call(i7, h6)), scripts: k4, styles: v3 };
                      }, "executeHead"), potentialPendingMinPromise = /* @__PURE__ */ __name(async () => {
                        const e6 = this.getMatch(n4);
                        e6.minPendingPromise && await e6.minPendingPromise;
                      }, "potentialPendingMinPromise"), h5 = this.getMatch(n4);
                      if (shouldSkipLoader(n4)) {
                        if (this.isServer) {
                          const e6 = await executeHead();
                          return s5(n4, (r5) => ({ ...r5, ...e6 })), this.getMatch(n4);
                        }
                        await potentialPendingMinPromise();
                      } else if (h5.loaderPromise) {
                        if ("success" === h5.status && !a6 && !h5.preload) return this.getMatch(n4);
                        await h5.loaderPromise;
                        const e6 = this.getMatch(n4);
                        e6.error && handleRedirectAndNotFound(e6, e6.error);
                      } else {
                        const r5 = g3[i6 - 1], getLoaderContext = /* @__PURE__ */ __name(() => {
                          const { params: o8, loaderDeps: s6, abortController: a7, context: i7, cause: l9 } = this.getMatch(n4), u5 = resolvePreload(n4);
                          return { params: o8, deps: s6, preload: !!u5, parentMatchPromise: r5, abortController: a7, context: i7, location: e5, navigate: /* @__PURE__ */ __name((r6) => this.navigate({ ...r6, _fromLocation: e5 }), "navigate"), cause: u5 ? "preload" : l9, route: c5 };
                        }, "getLoaderContext"), o7 = Date.now() - this.getMatch(n4).updatedAt, h6 = resolvePreload(n4), p5 = h6 ? c5.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4 : c5.options.staleTime ?? this.options.defaultStaleTime ?? 0, y3 = c5.options.shouldReload, b3 = "function" == typeof y3 ? y3(getLoaderContext()) : y3;
                        s5(n4, (e6) => ({ ...e6, loaderPromise: createControlledPromise(), preload: !!h6 && !this.state.matches.find((e7) => e7.id === n4) }));
                        const runLoader = /* @__PURE__ */ __name(async () => {
                          var e6, r6, o8, a7;
                          try {
                            try {
                              (!this.isServer || this.isServer && true === this.getMatch(n4).ssr) && this.loadRouteChunk(c5), s5(n4, (e7) => ({ ...e7, isFetching: "loader" }));
                              const o9 = await (null == (r6 = (e6 = c5.options).loader) ? void 0 : r6.call(e6, getLoaderContext()));
                              handleRedirectAndNotFound(this.getMatch(n4), o9), s5(n4, (e7) => ({ ...e7, loaderData: o9 })), await c5._lazyPromise;
                              const a8 = await executeHead();
                              await potentialPendingMinPromise(), await c5._componentsPromise, s5(n4, (e7) => ({ ...e7, error: void 0, status: "success", isFetching: false, updatedAt: Date.now(), ...a8 }));
                            } catch (e7) {
                              let r7 = e7;
                              await potentialPendingMinPromise(), handleRedirectAndNotFound(this.getMatch(n4), e7);
                              try {
                                null == (a7 = (o8 = c5.options).onError) || a7.call(o8, e7);
                              } catch (e8) {
                                r7 = e8, handleRedirectAndNotFound(this.getMatch(n4), e8);
                              }
                              const i7 = await executeHead();
                              s5(n4, (e8) => ({ ...e8, error: r7, status: "error", isFetching: false, ...i7 }));
                            }
                          } catch (e7) {
                            const r7 = await executeHead();
                            s5(n4, (e8) => ({ ...e8, loaderPromise: void 0, ...r7 })), handleRedirectAndNotFound(this.getMatch(n4), e7);
                          }
                        }, "runLoader"), { status: v3, invalid: k4, _forcePending: C4 } = this.getMatch(n4);
                        if (l8 = "success" === v3 && (k4 || (b3 ?? o7 > p5)), h6 && false === c5.options.preload) ;
                        else if (!l8 || a6 || C4) if ("success" !== v3 || l8 && a6) await runLoader();
                        else {
                          C4 && await potentialPendingMinPromise();
                          const e6 = await executeHead();
                          s5(n4, (r6) => ({ ...r6, ...e6 }));
                        }
                        else u4 = true, (async () => {
                          try {
                            await runLoader();
                            const { loaderPromise: e6, loadPromise: r6 } = this.getMatch(n4);
                            null == e6 || e6.resolve(), null == r6 || r6.resolve(), s5(n4, (e7) => ({ ...e7, loaderPromise: void 0 }));
                          } catch (e6) {
                            isRedirect(e6) && await this.navigate(e6.options);
                          }
                        })();
                      }
                      if (!u4) {
                        const { loaderPromise: e6, loadPromise: r5 } = this.getMatch(n4);
                        null == e6 || e6.resolve(), null == r5 || r5.resolve();
                      }
                      return s5(n4, (e6) => (clearTimeout(e6.pendingTimeout), { ...e6, isFetching: !!u4 && e6.isFetching, loaderPromise: u4 ? e6.loaderPromise : void 0, invalid: false, pendingTimeout: void 0, _dehydrated: void 0, _forcePending: void 0 })), this.getMatch(n4);
                    })());
                  }), await Promise.all(g3), n3();
                } catch (e6) {
                  l6(e6);
                }
              })();
            }), await triggerOnReady();
          } catch (e6) {
            if (isRedirect(e6) || isNotFound(e6)) throw isNotFound(e6) && !n2 && await triggerOnReady(), e6;
          }
          return r4;
        }, this.invalidate = (e5) => {
          const invalidate = /* @__PURE__ */ __name((r4) => {
            var n2;
            return (null == (n2 = null == e5 ? void 0 : e5.filter) ? void 0 : n2.call(e5, r4)) ?? 1 ? { ...r4, invalid: true, ...(null == e5 ? void 0 : e5.forcePending) || "error" === r4.status ? { status: "pending", error: void 0 } : {} } : r4;
          }, "invalidate");
          return this.__store.setState((e6) => {
            var r4;
            return { ...e6, matches: e6.matches.map(invalidate), cachedMatches: e6.cachedMatches.map(invalidate), pendingMatches: null == (r4 = e6.pendingMatches) ? void 0 : r4.map(invalidate) };
          }), this.shouldViewTransition = false, this.load({ sync: null == e5 ? void 0 : e5.sync });
        }, this.resolveRedirect = (e5) => (e5.options.href || (e5.options.href = this.buildLocation(e5.options).href, e5.headers.set("Location", e5.options.href)), e5.headers.get("Location") || e5.headers.set("Location", e5.options.href), e5), this.clearCache = (e5) => {
          const r4 = null == e5 ? void 0 : e5.filter;
          void 0 !== r4 ? this.__store.setState((e6) => ({ ...e6, cachedMatches: e6.cachedMatches.filter((e7) => !r4(e7)) })) : this.__store.setState((e6) => ({ ...e6, cachedMatches: [] }));
        }, this.clearExpiredCache = () => {
          this.clearCache({ filter: /* @__PURE__ */ __name((e5) => {
            const r4 = this.looseRoutesById[e5.routeId];
            if (!r4.options.loader) return true;
            const n2 = (e5.preload ? r4.options.preloadGcTime ?? this.options.defaultPreloadGcTime : r4.options.gcTime ?? this.options.defaultGcTime) ?? 3e5;
            return !("error" !== e5.status && Date.now() - e5.updatedAt < n2);
          }, "filter") });
        }, this.loadRouteChunk = (e5) => (void 0 === e5._lazyPromise && (e5.lazyFn ? e5._lazyPromise = e5.lazyFn().then((r4) => {
          const { id: n2, ...o5 } = r4.options;
          Object.assign(e5.options, o5);
        }) : e5._lazyPromise = Promise.resolve()), void 0 === e5._componentsPromise && (e5._componentsPromise = e5._lazyPromise.then(() => Promise.all(G.map(async (r4) => {
          const n2 = e5.options[r4];
          (null == n2 ? void 0 : n2.preload) && await n2.preload();
        })))), e5._componentsPromise), this.preloadRoute = async (e5) => {
          const r4 = this.buildLocation(e5);
          let n2 = this.matchRoutes(r4, { throwOnError: true, preload: true, dest: e5 });
          const o5 = new Set([...this.state.matches, ...this.state.pendingMatches ?? []].map((e6) => e6.id)), s5 = /* @__PURE__ */ new Set([...o5, ...this.state.cachedMatches.map((e6) => e6.id)]);
          batch(() => {
            n2.forEach((e6) => {
              s5.has(e6.id) || this.__store.setState((r5) => ({ ...r5, cachedMatches: [...r5.cachedMatches, e6] }));
            });
          });
          try {
            return n2 = await this.loadMatches({ matches: n2, location: r4, preload: true, updateMatch: /* @__PURE__ */ __name((e6, r5) => {
              o5.has(e6) ? n2 = n2.map((n3) => n3.id === e6 ? r5(n3) : n3) : this.updateMatch(e6, r5);
            }, "updateMatch") }), n2;
          } catch (e6) {
            if (isRedirect(e6)) {
              if (e6.options.reloadDocument) return;
              return await this.preloadRoute({ ...e6.options, _fromLocation: r4 });
            }
            return void (isNotFound(e6) || console.error(e6));
          }
        }, this.matchRoute = (e5, r4) => {
          const n2 = { ...e5, to: e5.to ? this.resolvePathWithBase(e5.from || "", e5.to) : void 0, params: e5.params || {}, leaveParams: true }, o5 = this.buildLocation(n2);
          if ((null == r4 ? void 0 : r4.pending) && "pending" !== this.state.status) return false;
          const s5 = (void 0 === (null == r4 ? void 0 : r4.pending) ? !this.state.isLoading : r4.pending) ? this.latestLocation : this.state.resolvedLocation || this.state.location, a6 = matchPathname(this.basepath, s5.pathname, { ...r4, to: o5.pathname });
          return !!a6 && (!(e5.params && !deepEqual(a6, e5.params, { partial: true })) && (a6 && ((null == r4 ? void 0 : r4.includeSearch) ?? 1) ? !!deepEqual(s5.search, o5.search, { partial: true }) && a6 : a6));
        }, this._handleNotFound = (e5, r4, { updateMatch: n2 = this.updateMatch } = {}) => {
          var o5;
          const s5 = this.routesById[r4.routeId ?? ""] ?? this.routeTree, a6 = {};
          for (const r5 of e5) a6[r5.routeId] = r5;
          !s5.options.notFoundComponent && (null == (o5 = this.options) ? void 0 : o5.defaultNotFoundComponent) && (s5.options.notFoundComponent = this.options.defaultNotFoundComponent), invariant(s5.options.notFoundComponent);
          const i5 = a6[s5.id];
          invariant(i5, s5.id), n2(i5.id, (e6) => ({ ...e6, status: "notFound", error: r4, isFetching: false })), "BEFORE_LOAD" === r4.routerCode && s5.parentRoute && (r4.routeId = s5.parentRoute.id, this._handleNotFound(e5, r4, { updateMatch: n2 }));
        }, this.hasNotFoundMatch = () => this.__store.state.matches.some((e5) => "notFound" === e5.status || e5.globalNotFound), this.update({ defaultPreloadDelay: 50, defaultPendingMs: 1e3, defaultPendingMinMs: 500, context: void 0, ...e4, caseSensitive: e4.caseSensitive ?? false, notFoundMode: e4.notFoundMode ?? "fuzzy", stringifySearch: e4.stringifySearch ?? q, parseSearch: e4.parseSearch ?? H }), "undefined" != typeof document && (self.__TSR_ROUTER__ = this);
      }
      get state() {
        return this.__store.state;
      }
      get looseRoutesById() {
        return this.routesById;
      }
      matchRoutesInternal(e4, r4) {
        var n2;
        const { foundRoute: o5, matchedRoutes: s5, routeParams: a6 } = this.getMatchedRoutes(e4.pathname, null == (n2 = null == r4 ? void 0 : r4.dest) ? void 0 : n2.to);
        let i5 = false;
        (o5 ? "/" !== o5.path && a6["**"] : trimPathRight(e4.pathname)) && (this.options.notFoundRoute ? s5.push(this.options.notFoundRoute) : i5 = true);
        const l5 = (() => {
          if (i5) {
            if ("root" !== this.options.notFoundMode) for (let e5 = s5.length - 1; e5 >= 0; e5--) {
              const r5 = s5[e5];
              if (r5.children) return r5.id;
            }
            return W2;
          }
        })(), u3 = s5.map((e5) => {
          var n3;
          let o6;
          const s6 = (null == (n3 = e5.options.params) ? void 0 : n3.parse) ?? e5.options.parseParams;
          if (s6) try {
            const e6 = s6(a6);
            Object.assign(a6, e6);
          } catch (e6) {
            if (o6 = new PathParamError(e6.message, { cause: e6 }), null == r4 ? void 0 : r4.throwOnError) throw o6;
            return o6;
          }
        }), c4 = [], getParentContext = /* @__PURE__ */ __name((e5) => (null == e5 ? void 0 : e5.id) ? e5.context ?? this.options.context ?? {} : this.options.context ?? {}, "getParentContext");
        return s5.forEach((n3, o6) => {
          var s6, i6;
          const h4 = c4[o6 - 1], [p4, g3, y3] = (() => {
            const o7 = (null == h4 ? void 0 : h4.search) ?? e4.search, s7 = (null == h4 ? void 0 : h4._strictSearch) ?? {};
            try {
              const e5 = validateSearch(n3.options.validateSearch, { ...o7 }) ?? {};
              return [{ ...o7, ...e5 }, { ...s7, ...e5 }, void 0];
            } catch (e5) {
              let n4 = e5;
              if (e5 instanceof SearchParamError || (n4 = new SearchParamError(e5.message, { cause: e5 })), null == r4 ? void 0 : r4.throwOnError) throw n4;
              return [o7, {}, n4];
            }
          })(), b3 = (null == (i6 = (s6 = n3.options).loaderDeps) ? void 0 : i6.call(s6, { search: p4 })) ?? "", v3 = b3 ? JSON.stringify(b3) : "", { usedParams: k4, interpolatedPath: C4 } = interpolatePath({ path: n3.fullPath, params: a6, decodeCharMap: this.pathParamsDecodeCharMap }), P4 = interpolatePath({ path: n3.id, params: a6, leaveWildcards: true, decodeCharMap: this.pathParamsDecodeCharMap }).interpolatedPath + v3, R4 = this.getMatch(P4), T4 = this.state.matches.find((e5) => e5.routeId === n3.id), $3 = T4 ? "stay" : "enter";
          let E4;
          if (R4) E4 = { ...R4, cause: $3, params: T4 ? replaceEqualDeep(T4.params, a6) : a6, _strictParams: k4, search: replaceEqualDeep(T4 ? T4.search : R4.search, p4), _strictSearch: g3 };
          else {
            const e5 = n3.options.loader || n3.options.beforeLoad || n3.lazyFn || routeNeedsPreload(n3) ? "pending" : "success";
            E4 = { id: P4, index: o6, routeId: n3.id, params: T4 ? replaceEqualDeep(T4.params, a6) : a6, _strictParams: k4, pathname: joinPaths([this.basepath, C4]), updatedAt: Date.now(), search: T4 ? replaceEqualDeep(T4.search, p4) : p4, _strictSearch: g3, searchError: void 0, status: e5, isFetching: false, error: void 0, paramsError: u3[o6], __routeContext: {}, __beforeLoadContext: void 0, context: {}, abortController: new AbortController(), fetchCount: 0, cause: $3, loaderDeps: T4 ? replaceEqualDeep(T4.loaderDeps, b3) : b3, invalid: false, preload: false, links: void 0, scripts: void 0, headScripts: void 0, meta: void 0, staticData: n3.options.staticData || {}, loadPromise: createControlledPromise(), fullPath: n3.fullPath };
          }
          (null == r4 ? void 0 : r4.preload) || (E4.globalNotFound = l5 === n3.id), E4.searchError = y3;
          const F4 = getParentContext(h4);
          E4.context = { ...F4, ...E4.__routeContext, ...E4.__beforeLoadContext }, c4.push(E4);
        }), c4.forEach((n3, o6) => {
          var s6, a7;
          const i6 = this.looseRoutesById[n3.routeId];
          if (!this.getMatch(n3.id) && true !== (null == r4 ? void 0 : r4._buildLocation)) {
            const r5 = c4[o6 - 1], l6 = getParentContext(r5), u4 = { deps: n3.loaderDeps, params: n3.params, context: l6, location: e4, navigate: /* @__PURE__ */ __name((r6) => this.navigate({ ...r6, _fromLocation: e4 }), "navigate"), buildLocation: this.buildLocation, cause: n3.cause, abortController: n3.abortController, preload: !!n3.preload, matches: c4 };
            n3.__routeContext = (null == (a7 = (s6 = i6.options).context) ? void 0 : a7.call(s6, u4)) ?? {}, n3.context = { ...l6, ...n3.__routeContext, ...n3.__beforeLoadContext };
          }
        }), c4;
      }
      comparePaths(e4, r4) {
        return e4.replace(/(.+)\/$/, "$1") === r4.replace(/(.+)\/$/, "$1");
      }
    };
    SearchParamError = class extends Error {
      static {
        __name(this, "SearchParamError");
      }
    };
    PathParamError = class extends Error {
      static {
        __name(this, "PathParamError");
      }
    };
    __name(validateSearch, "validateSearch");
    G = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
    __name(routeNeedsPreload, "routeNeedsPreload");
    __name(processRouteTree, "processRouteTree");
    __name(getMatchedRoutes, "getMatchedRoutes");
    BaseRoute = class {
      static {
        __name(this, "BaseRoute");
      }
      constructor(e4) {
        if (this.init = (e5) => {
          var r4, n2;
          this.originalIndex = e5.originalIndex;
          const o5 = this.options, s5 = !(null == o5 ? void 0 : o5.path) && !(null == o5 ? void 0 : o5.id);
          this.parentRoute = null == (n2 = (r4 = this.options).getParentRoute) ? void 0 : n2.call(r4), s5 ? this._path = W2 : this.parentRoute || invariant(false);
          let a6 = s5 ? W2 : null == o5 ? void 0 : o5.path;
          a6 && "/" !== a6 && (a6 = trimPathLeft(a6));
          const i5 = (null == o5 ? void 0 : o5.id) || a6;
          let l5 = s5 ? W2 : joinPaths([this.parentRoute.id === W2 ? "" : this.parentRoute.id, i5]);
          a6 === W2 && (a6 = "/"), l5 !== W2 && (l5 = joinPaths(["/", l5]));
          const u3 = l5 === W2 ? "/" : joinPaths([this.parentRoute.fullPath, a6]);
          this._path = a6, this._id = l5, this._fullPath = u3, this._to = u3;
        }, this.clone = (e5) => {
          this._path = e5._path, this._id = e5._id, this._fullPath = e5._fullPath, this._to = e5._to, this.options.getParentRoute = e5.options.getParentRoute, this.children = e5.children;
        }, this.addChildren = (e5) => this._addFileChildren(e5), this._addFileChildren = (e5) => (Array.isArray(e5) && (this.children = e5), "object" == typeof e5 && null !== e5 && (this.children = Object.values(e5)), this), this._addFileTypes = () => this, this.updateLoader = (e5) => (Object.assign(this.options, e5), this), this.update = (e5) => (Object.assign(this.options, e5), this), this.lazy = (e5) => (this.lazyFn = e5, this), this.options = e4 || {}, this.isRoot = !(null == e4 ? void 0 : e4.getParentRoute), (null == e4 ? void 0 : e4.id) && (null == e4 ? void 0 : e4.path)) throw new Error("Route cannot have both an 'id' and a 'path' option.");
      }
      get to() {
        return this._to;
      }
      get id() {
        return this._id;
      }
      get path() {
        return this._path;
      }
      get fullPath() {
        return this._fullPath;
      }
    };
    BaseRootRoute = class extends BaseRoute {
      static {
        __name(this, "BaseRootRoute");
      }
      constructor(e4) {
        super(e4);
      }
    };
    X2 = { exports: {} };
    Q = {};
    Y2 = Symbol.for("react.transitional.element");
    Z = Symbol.for("react.portal");
    ee = Symbol.for("react.fragment");
    te = Symbol.for("react.strict_mode");
    re = Symbol.for("react.profiler");
    ne = Symbol.for("react.consumer");
    oe = Symbol.for("react.context");
    ae = Symbol.for("react.forward_ref");
    ie = Symbol.for("react.suspense");
    le = Symbol.for("react.memo");
    ue = Symbol.for("react.lazy");
    ce = Symbol.iterator;
    he = { isMounted: /* @__PURE__ */ __name(function() {
      return false;
    }, "isMounted"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
    }, "enqueueForceUpdate"), enqueueReplaceState: /* @__PURE__ */ __name(function() {
    }, "enqueueReplaceState"), enqueueSetState: /* @__PURE__ */ __name(function() {
    }, "enqueueSetState") };
    de = Object.assign;
    pe = {};
    __name(Component, "Component");
    __name(ComponentDummy, "ComponentDummy");
    __name(PureComponent, "PureComponent");
    Component.prototype.isReactComponent = {}, Component.prototype.setState = function(e4, r4) {
      if ("object" != typeof e4 && "function" != typeof e4 && null != e4) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e4, r4, "setState");
    }, Component.prototype.forceUpdate = function(e4) {
      this.updater.enqueueForceUpdate(this, e4, "forceUpdate");
    }, ComponentDummy.prototype = Component.prototype;
    ge = PureComponent.prototype = new ComponentDummy();
    ge.constructor = PureComponent, de(ge, Component.prototype), ge.isPureReactComponent = true;
    ye = Array.isArray;
    be = { H: null, A: null, T: null, S: null, V: null };
    ve = Object.prototype.hasOwnProperty;
    __name(ReactElement, "ReactElement");
    __name(isValidElement, "isValidElement");
    ke = /\/+/g;
    __name(getElementKey, "getElementKey");
    __name(noop$1$2, "noop$1$2");
    __name(mapIntoArray, "mapIntoArray");
    __name(mapChildren, "mapChildren");
    __name(lazyInitializer, "lazyInitializer");
    Se = "function" == typeof reportError ? reportError : function(r4) {
      "object" != typeof _ || "function" != typeof _.emit ? console.error(r4) : _.emit("uncaughtException", r4);
    };
    __name(noop$5, "noop$5");
    Q.Children = { map: mapChildren, forEach: /* @__PURE__ */ __name(function(e4, r4, n2) {
      mapChildren(e4, function() {
        r4.apply(this, arguments);
      }, n2);
    }, "forEach"), count: /* @__PURE__ */ __name(function(e4) {
      var r4 = 0;
      return mapChildren(e4, function() {
        r4++;
      }), r4;
    }, "count"), toArray: /* @__PURE__ */ __name(function(e4) {
      return mapChildren(e4, function(e5) {
        return e5;
      }) || [];
    }, "toArray"), only: /* @__PURE__ */ __name(function(e4) {
      if (!isValidElement(e4)) throw Error("React.Children.only expected to receive a single React element child.");
      return e4;
    }, "only") }, Q.Component = Component, Q.Fragment = ee, Q.Profiler = re, Q.PureComponent = PureComponent, Q.StrictMode = te, Q.Suspense = ie, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = be, Q.__COMPILER_RUNTIME = { __proto__: null, c: /* @__PURE__ */ __name(function(e4) {
      return be.H.useMemoCache(e4);
    }, "c") }, Q.cache = function(e4) {
      return function() {
        return e4.apply(null, arguments);
      };
    }, Q.cloneElement = function(e4, r4, n2) {
      if (null == e4) throw Error("The argument must be a React element, but you passed " + e4 + ".");
      var o5 = de({}, e4.props), s5 = e4.key;
      if (null != r4) for (a6 in void 0 !== r4.ref && void 0, void 0 !== r4.key && (s5 = "" + r4.key), r4) !ve.call(r4, a6) || "key" === a6 || "__self" === a6 || "__source" === a6 || "ref" === a6 && void 0 === r4.ref || (o5[a6] = r4[a6]);
      var a6 = arguments.length - 2;
      if (1 === a6) o5.children = n2;
      else if (1 < a6) {
        for (var i5 = Array(a6), l5 = 0; l5 < a6; l5++) i5[l5] = arguments[l5 + 2];
        o5.children = i5;
      }
      return ReactElement(e4.type, s5, void 0, 0, 0, o5);
    }, Q.createContext = function(e4) {
      return (e4 = { $$typeof: oe, _currentValue: e4, _currentValue2: e4, _threadCount: 0, Provider: null, Consumer: null }).Provider = e4, e4.Consumer = { $$typeof: ne, _context: e4 }, e4;
    }, Q.createElement = function(e4, r4, n2) {
      var o5, s5 = {}, a6 = null;
      if (null != r4) for (o5 in void 0 !== r4.key && (a6 = "" + r4.key), r4) ve.call(r4, o5) && "key" !== o5 && "__self" !== o5 && "__source" !== o5 && (s5[o5] = r4[o5]);
      var i5 = arguments.length - 2;
      if (1 === i5) s5.children = n2;
      else if (1 < i5) {
        for (var l5 = Array(i5), u3 = 0; u3 < i5; u3++) l5[u3] = arguments[u3 + 2];
        s5.children = l5;
      }
      if (e4 && e4.defaultProps) for (o5 in i5 = e4.defaultProps) void 0 === s5[o5] && (s5[o5] = i5[o5]);
      return ReactElement(e4, a6, void 0, 0, 0, s5);
    }, Q.createRef = function() {
      return { current: null };
    }, Q.forwardRef = function(e4) {
      return { $$typeof: ae, render: e4 };
    }, Q.isValidElement = isValidElement, Q.lazy = function(e4) {
      return { $$typeof: ue, _payload: { _status: -1, _result: e4 }, _init: lazyInitializer };
    }, Q.memo = function(e4, r4) {
      return { $$typeof: le, type: e4, compare: void 0 === r4 ? null : r4 };
    }, Q.startTransition = function(e4) {
      var r4 = be.T, n2 = {};
      be.T = n2;
      try {
        var o5 = e4(), s5 = be.S;
        null !== s5 && s5(n2, o5), "object" == typeof o5 && null !== o5 && "function" == typeof o5.then && o5.then(noop$5, Se);
      } catch (e5) {
        Se(e5);
      } finally {
        be.T = r4;
      }
    }, Q.unstable_useCacheRefresh = function() {
      return be.H.useCacheRefresh();
    }, Q.use = function(e4) {
      return be.H.use(e4);
    }, Q.useActionState = function(e4, r4, n2) {
      return be.H.useActionState(e4, r4, n2);
    }, Q.useCallback = function(e4, r4) {
      return be.H.useCallback(e4, r4);
    }, Q.useContext = function(e4) {
      return be.H.useContext(e4);
    }, Q.useDebugValue = function() {
    }, Q.useDeferredValue = function(e4, r4) {
      return be.H.useDeferredValue(e4, r4);
    }, Q.useEffect = function(e4, r4, n2) {
      var o5 = be.H;
      if ("function" == typeof n2) throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return o5.useEffect(e4, r4);
    }, Q.useId = function() {
      return be.H.useId();
    }, Q.useImperativeHandle = function(e4, r4, n2) {
      return be.H.useImperativeHandle(e4, r4, n2);
    }, Q.useInsertionEffect = function(e4, r4) {
      return be.H.useInsertionEffect(e4, r4);
    }, Q.useLayoutEffect = function(e4, r4) {
      return be.H.useLayoutEffect(e4, r4);
    }, Q.useMemo = function(e4, r4) {
      return be.H.useMemo(e4, r4);
    }, Q.useOptimistic = function(e4, r4) {
      return be.H.useOptimistic(e4, r4);
    }, Q.useReducer = function(e4, r4, n2) {
      return be.H.useReducer(e4, r4, n2);
    }, Q.useRef = function(e4) {
      return be.H.useRef(e4);
    }, Q.useState = function(e4) {
      return be.H.useState(e4);
    }, Q.useSyncExternalStore = function(e4, r4, n2) {
      return be.H.useSyncExternalStore(e4, r4, n2);
    }, Q.useTransition = function() {
      return be.H.useTransition();
    }, Q.version = "19.1.0", X2.exports = Q;
    Ce = X2.exports;
    we = getDefaultExportFromCjs(Ce);
    __name(CatchBoundary, "CatchBoundary");
    CatchBoundaryImpl = class extends Ce.Component {
      static {
        __name(this, "CatchBoundaryImpl");
      }
      constructor() {
        super(...arguments), this.state = { error: null };
      }
      static getDerivedStateFromProps(e4) {
        return { resetKey: e4.getResetKey() };
      }
      static getDerivedStateFromError(e4) {
        return { error: e4 };
      }
      reset() {
        this.setState({ error: null });
      }
      componentDidUpdate(e4, r4) {
        r4.error && r4.resetKey !== this.state.resetKey && this.reset();
      }
      componentDidCatch(e4, r4) {
        this.props.onCatch && this.props.onCatch(e4, r4);
      }
      render() {
        return this.props.children({ error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error, reset: /* @__PURE__ */ __name(() => {
          this.reset();
        }, "reset") });
      }
    };
    __name(ErrorComponent, "ErrorComponent");
    __name(ClientOnly, "ClientOnly");
    __name(subscribe, "subscribe");
    Pe = { exports: {} };
    xe = {};
    Re = { exports: {} };
    Te = {};
    $e = Ce;
    $e.useState, $e.useEffect, $e.useLayoutEffect, $e.useDebugValue;
    shim$1 = /* @__PURE__ */ __name(function(e4, r4) {
      return r4();
    }, "shim$1");
    Te.useSyncExternalStore = void 0 !== $e.useSyncExternalStore ? $e.useSyncExternalStore : shim$1, Re.exports = Te;
    Ee = Re.exports;
    Fe = Ce;
    Ie = Ee;
    _e = "function" == typeof Object.is ? Object.is : function(e4, r4) {
      return e4 === r4 && (0 !== e4 || 1 / e4 == 1 / r4) || e4 != e4 && r4 != r4;
    };
    Ae = Ie.useSyncExternalStore;
    Me = Fe.useRef;
    Oe = Fe.useEffect;
    Ne = Fe.useMemo;
    Be = Fe.useDebugValue;
    xe.useSyncExternalStoreWithSelector = function(e4, r4, n2, o5, s5) {
      var a6 = Me(null);
      if (null === a6.current) {
        var i5 = { hasValue: false, value: null };
        a6.current = i5;
      } else i5 = a6.current;
      a6 = Ne(function() {
        function memoizedSelector(r5) {
          if (!l6) {
            if (l6 = true, e5 = r5, r5 = o5(r5), void 0 !== s5 && i5.hasValue) {
              var n3 = i5.value;
              if (s5(n3, r5)) return a7 = n3;
            }
            return a7 = r5;
          }
          if (n3 = a7, _e(e5, r5)) return n3;
          var u4 = o5(r5);
          return void 0 !== s5 && s5(n3, u4) ? (e5 = r5, n3) : (e5 = r5, a7 = u4);
        }
        __name(memoizedSelector, "memoizedSelector");
        var e5, a7, l6 = false, u3 = void 0 === n2 ? null : n2;
        return [function() {
          return memoizedSelector(r4());
        }, null === u3 ? void 0 : function() {
          return memoizedSelector(u3());
        }];
      }, [r4, n2, o5, s5]);
      var l5 = Ae(e4, a6[0], a6[1]);
      return Oe(function() {
        i5.hasValue = true, i5.value = l5;
      }, [l5]), Be(l5), l5;
    }, Pe.exports = xe;
    De = Pe.exports;
    __name(shallow, "shallow");
    ze = Ce.createContext(null);
    __name(getRouterContext, "getRouterContext");
    __name(useRouter, "useRouter");
    __name(useRouterState, "useRouterState");
    He = Ce.createContext(void 0);
    Ve = Ce.createContext(void 0);
    __name(useMatch, "useMatch");
    __name(useLoaderData, "useLoaderData");
    __name(useLoaderDeps, "useLoaderDeps");
    __name(useParams, "useParams");
    __name(useSearch, "useSearch");
    __name(useNavigate, "useNavigate");
    qe = { exports: {} };
    We = {};
    Ue = Ce;
    __name(formatProdErrorMessage$1, "formatProdErrorMessage$1");
    __name(noop$4, "noop$4");
    Ke = { d: { f: noop$4, r: /* @__PURE__ */ __name(function() {
      throw Error(formatProdErrorMessage$1(522));
    }, "r"), D: noop$4, C: noop$4, L: noop$4, m: noop$4, X: noop$4, S: noop$4, M: noop$4 }, p: 0, findDOMNode: null };
    Ge = Symbol.for("react.portal");
    Je = Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    __name(getCrossOriginStringAs, "getCrossOriginStringAs");
    We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ke, We.createPortal = function(e4, r4) {
      var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!r4 || 1 !== r4.nodeType && 9 !== r4.nodeType && 11 !== r4.nodeType) throw Error(formatProdErrorMessage$1(299));
      return function(e5, r5, n3) {
        var o5 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: Ge, key: null == o5 ? null : "" + o5, children: e5, containerInfo: r5, implementation: n3 };
      }(e4, r4, null, n2);
    }, We.flushSync = function(e4) {
      var r4 = Je.T, n2 = Ke.p;
      try {
        if (Je.T = null, Ke.p = 2, e4) return e4();
      } finally {
        Je.T = r4, Ke.p = n2, Ke.d.f();
      }
    }, We.preconnect = function(e4, r4) {
      "string" == typeof e4 && (r4 ? r4 = "string" == typeof (r4 = r4.crossOrigin) ? "use-credentials" === r4 ? r4 : "" : void 0 : r4 = null, Ke.d.C(e4, r4));
    }, We.prefetchDNS = function(e4) {
      "string" == typeof e4 && Ke.d.D(e4);
    }, We.preinit = function(e4, r4) {
      if ("string" == typeof e4 && r4 && "string" == typeof r4.as) {
        var n2 = r4.as, o5 = getCrossOriginStringAs(n2, r4.crossOrigin), s5 = "string" == typeof r4.integrity ? r4.integrity : void 0, a6 = "string" == typeof r4.fetchPriority ? r4.fetchPriority : void 0;
        "style" === n2 ? Ke.d.S(e4, "string" == typeof r4.precedence ? r4.precedence : void 0, { crossOrigin: o5, integrity: s5, fetchPriority: a6 }) : "script" === n2 && Ke.d.X(e4, { crossOrigin: o5, integrity: s5, fetchPriority: a6, nonce: "string" == typeof r4.nonce ? r4.nonce : void 0 });
      }
    }, We.preinitModule = function(e4, r4) {
      if ("string" == typeof e4) if ("object" == typeof r4 && null !== r4) {
        if (null == r4.as || "script" === r4.as) {
          var n2 = getCrossOriginStringAs(r4.as, r4.crossOrigin);
          Ke.d.M(e4, { crossOrigin: n2, integrity: "string" == typeof r4.integrity ? r4.integrity : void 0, nonce: "string" == typeof r4.nonce ? r4.nonce : void 0 });
        }
      } else null == r4 && Ke.d.M(e4);
    }, We.preload = function(e4, r4) {
      if ("string" == typeof e4 && "object" == typeof r4 && null !== r4 && "string" == typeof r4.as) {
        var n2 = r4.as, o5 = getCrossOriginStringAs(n2, r4.crossOrigin);
        Ke.d.L(e4, n2, { crossOrigin: o5, integrity: "string" == typeof r4.integrity ? r4.integrity : void 0, nonce: "string" == typeof r4.nonce ? r4.nonce : void 0, type: "string" == typeof r4.type ? r4.type : void 0, fetchPriority: "string" == typeof r4.fetchPriority ? r4.fetchPriority : void 0, referrerPolicy: "string" == typeof r4.referrerPolicy ? r4.referrerPolicy : void 0, imageSrcSet: "string" == typeof r4.imageSrcSet ? r4.imageSrcSet : void 0, imageSizes: "string" == typeof r4.imageSizes ? r4.imageSizes : void 0, media: "string" == typeof r4.media ? r4.media : void 0 });
      }
    }, We.preloadModule = function(e4, r4) {
      if ("string" == typeof e4) if (r4) {
        var n2 = getCrossOriginStringAs(r4.as, r4.crossOrigin);
        Ke.d.m(e4, { as: "string" == typeof r4.as && "script" !== r4.as ? r4.as : void 0, crossOrigin: n2, integrity: "string" == typeof r4.integrity ? r4.integrity : void 0 });
      } else Ke.d.m(e4);
    }, We.requestFormReset = function(e4) {
      Ke.d.r(e4);
    }, We.unstable_batchedUpdates = function(e4, r4) {
      return e4(r4);
    }, We.useFormState = function(e4, r4, n2) {
      return Je.H.useFormState(e4, r4, n2);
    }, We.useFormStatus = function() {
      return Je.H.useHostTransitionStatus();
    }, We.version = "19.1.0", (/* @__PURE__ */ __name(function checkDCE() {
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (e4) {
        console.error(e4);
      }
    }, "checkDCE"))(), qe.exports = We;
    Xe = qe.exports;
    Qe = Ce.useEffect;
    __name(usePrevious, "usePrevious");
    __name(useLinkProps, "useLinkProps");
    Ze = Ce.forwardRef((e4, r4) => {
      const { _asChild: n2, ...o5 } = e4, { type: s5, ref: a6, ...i5 } = useLinkProps(o5, r4), l5 = "function" == typeof o5.children ? o5.children({ isActive: "active" === i5["data-status"] }) : o5.children;
      return void 0 === n2 && delete i5.disabled, Ce.createElement(n2 || "a", { ...i5, ref: a6 }, l5);
    });
    et = class extends BaseRoute {
      static {
        __name(this, "et");
      }
      constructor(e4) {
        super(e4), this.useMatch = (e5) => useMatch({ select: null == e5 ? void 0 : e5.select, from: this.id, structuralSharing: null == e5 ? void 0 : e5.structuralSharing }), this.useRouteContext = (e5) => useMatch({ ...e5, from: this.id, select: /* @__PURE__ */ __name((r4) => (null == e5 ? void 0 : e5.select) ? e5.select(r4.context) : r4.context, "select") }), this.useSearch = (e5) => useSearch({ select: null == e5 ? void 0 : e5.select, structuralSharing: null == e5 ? void 0 : e5.structuralSharing, from: this.id }), this.useParams = (e5) => useParams({ select: null == e5 ? void 0 : e5.select, structuralSharing: null == e5 ? void 0 : e5.structuralSharing, from: this.id }), this.useLoaderDeps = (e5) => useLoaderDeps({ ...e5, from: this.id }), this.useLoaderData = (e5) => useLoaderData({ ...e5, from: this.id }), this.useNavigate = () => useNavigate({ from: this.fullPath }), this.Link = we.forwardRef((e5, r4) => p2.jsx(Ze, { ref: r4, from: this.fullPath, ...e5 })), this.$$typeof = Symbol.for("react.memo");
      }
    };
    RootRoute = class extends BaseRootRoute {
      static {
        __name(this, "RootRoute");
      }
      constructor(e4) {
        super(e4), this.useMatch = (e5) => useMatch({ select: null == e5 ? void 0 : e5.select, from: this.id, structuralSharing: null == e5 ? void 0 : e5.structuralSharing }), this.useRouteContext = (e5) => useMatch({ ...e5, from: this.id, select: /* @__PURE__ */ __name((r4) => (null == e5 ? void 0 : e5.select) ? e5.select(r4.context) : r4.context, "select") }), this.useSearch = (e5) => useSearch({ select: null == e5 ? void 0 : e5.select, structuralSharing: null == e5 ? void 0 : e5.structuralSharing, from: this.id }), this.useParams = (e5) => useParams({ select: null == e5 ? void 0 : e5.select, structuralSharing: null == e5 ? void 0 : e5.structuralSharing, from: this.id }), this.useLoaderDeps = (e5) => useLoaderDeps({ ...e5, from: this.id }), this.useLoaderData = (e5) => useLoaderData({ ...e5, from: this.id }), this.useNavigate = () => useNavigate({ from: this.fullPath }), this.Link = we.forwardRef((e5, r4) => p2.jsx(Ze, { ref: r4, from: this.fullPath, ...e5 })), this.$$typeof = Symbol.for("react.memo");
      }
    };
    __name(createFileRoute, "createFileRoute");
    FileRoute = class {
      static {
        __name(this, "FileRoute");
      }
      constructor(e4, r4) {
        this.path = e4, this.createRoute = (e5) => {
          g(this.silent, "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead.");
          const r5 = function(e6) {
            return new et(e6);
          }(e5);
          return r5.isRoot = false, r5;
        }, this.silent = null == r4 ? void 0 : r4.silent;
      }
    };
    LazyRoute = class {
      static {
        __name(this, "LazyRoute");
      }
      constructor(e4) {
        this.useMatch = (e5) => useMatch({ select: null == e5 ? void 0 : e5.select, from: this.options.id, structuralSharing: null == e5 ? void 0 : e5.structuralSharing }), this.useRouteContext = (e5) => useMatch({ from: this.options.id, select: /* @__PURE__ */ __name((r4) => (null == e5 ? void 0 : e5.select) ? e5.select(r4.context) : r4.context, "select") }), this.useSearch = (e5) => useSearch({ select: null == e5 ? void 0 : e5.select, structuralSharing: null == e5 ? void 0 : e5.structuralSharing, from: this.options.id }), this.useParams = (e5) => useParams({ select: null == e5 ? void 0 : e5.select, structuralSharing: null == e5 ? void 0 : e5.structuralSharing, from: this.options.id }), this.useLoaderDeps = (e5) => useLoaderDeps({ ...e5, from: this.options.id }), this.useLoaderData = (e5) => useLoaderData({ ...e5, from: this.options.id }), this.useNavigate = () => useNavigate({ from: useRouter().routesById[this.options.id].fullPath }), this.options = e4, this.$$typeof = Symbol.for("react.memo");
      }
    };
    __name(lazyRouteComponent, "lazyRouteComponent");
    __name(Transitioner, "Transitioner");
    __name(CatchNotFound, "CatchNotFound");
    __name(DefaultGlobalNotFound, "DefaultGlobalNotFound");
    __name(SafeFragment, "SafeFragment");
    __name(renderRouteNotFound, "renderRouteNotFound");
    __name(ScriptOnce, "ScriptOnce");
    __name(ScrollRestoration, "ScrollRestoration");
    tt = Ce.memo(function({ matchId: e4 }) {
      var r4, n2;
      const o5 = useRouter(), s5 = useRouterState({ select: /* @__PURE__ */ __name((r5) => {
        const n3 = r5.matches.find((r6) => r6.id === e4);
        return invariant(n3), pick(n3, ["routeId", "ssr", "_displayPending"]);
      }, "select"), structuralSharing: true }), a6 = o5.routesById[s5.routeId], i5 = a6.options.pendingComponent ?? o5.options.defaultPendingComponent, l5 = i5 ? p2.jsx(i5, {}) : null, u3 = a6.options.errorComponent ?? o5.options.defaultErrorComponent, c4 = a6.options.onCatch ?? o5.options.defaultOnCatch, h4 = a6.isRoot ? a6.options.notFoundComponent ?? (null == (r4 = o5.options.notFoundRoute) ? void 0 : r4.options.component) : a6.options.notFoundComponent, y3 = false === s5.ssr || "data-only" === s5.ssr, b3 = (!a6.isRoot || a6.options.wrapInSuspense || y3) && (a6.options.wrapInSuspense ?? i5 ?? ((null == (n2 = a6.options.errorComponent) ? void 0 : n2.preload) || y3)) ? Ce.Suspense : SafeFragment, v3 = u3 ? CatchBoundary : SafeFragment, k4 = h4 ? CatchNotFound : SafeFragment, C4 = useRouterState({ select: /* @__PURE__ */ __name((e5) => e5.loadedAt, "select") }), P4 = useRouterState({ select: /* @__PURE__ */ __name((r5) => {
        var n3;
        const o6 = r5.matches.findIndex((r6) => r6.id === e4);
        return null == (n3 = r5.matches[o6 - 1]) ? void 0 : n3.routeId;
      }, "select") }), R4 = a6.isRoot ? a6.options.shellComponent ?? SafeFragment : SafeFragment;
      return p2.jsxs(R4, { children: [p2.jsx(He.Provider, { value: e4, children: p2.jsx(b3, { fallback: l5, children: p2.jsx(v3, { getResetKey: /* @__PURE__ */ __name(() => C4, "getResetKey"), errorComponent: u3 || ErrorComponent, onCatch: /* @__PURE__ */ __name((r5, n3) => {
        if (isNotFound(r5)) throw r5;
        g(false, `Error in route match: ${e4}`), null == c4 || c4(r5, n3);
      }, "onCatch"), children: p2.jsx(k4, { fallback: /* @__PURE__ */ __name((e5) => {
        if (!h4 || e5.routeId && e5.routeId !== s5.routeId || !e5.routeId && !a6.isRoot) throw e5;
        return Ce.createElement(h4, e5);
      }, "fallback"), children: y3 || o5.isShell || s5._displayPending ? p2.jsx(ClientOnly, { fallback: l5, children: p2.jsx(rt, { matchId: e4 }) }) : p2.jsx(rt, { matchId: e4 }) }) }) }) }), P4 === W2 && o5.options.scrollRestoration ? p2.jsxs(p2.Fragment, { children: [p2.jsx(OnRendered, {}), p2.jsx(ScrollRestoration, {})] }) : null] });
    });
    __name(OnRendered, "OnRendered");
    rt = Ce.memo(function({ matchId: e4 }) {
      var r4, n2, o5, s5;
      const a6 = useRouter(), { match: i5, key: l5, routeId: u3 } = useRouterState({ select: /* @__PURE__ */ __name((r5) => {
        const n3 = r5.matches.findIndex((r6) => r6.id === e4), o6 = r5.matches[n3], s6 = o6.routeId, i6 = a6.routesById[s6].options.remountDeps ?? a6.options.defaultRemountDeps, l6 = null == i6 ? void 0 : i6({ routeId: s6, loaderDeps: o6.loaderDeps, params: o6._strictParams, search: o6._strictSearch });
        return { key: l6 ? JSON.stringify(l6) : void 0, routeId: s6, match: pick(o6, ["id", "status", "error", "_forcePending", "_displayPending"]) };
      }, "select"), structuralSharing: true }), c4 = a6.routesById[u3], h4 = Ce.useMemo(() => {
        const e5 = c4.options.component ?? a6.options.defaultComponent;
        return e5 ? p2.jsx(e5, {}, l5) : p2.jsx(nt, {});
      }, [l5, c4.options.component, a6.options.defaultComponent]);
      if (i5._displayPending) throw null == (r4 = a6.getMatch(i5.id)) ? void 0 : r4.displayPendingPromise;
      if ("pending" === i5.status || i5._forcePending) {
        const e5 = c4.options.pendingMinMs ?? a6.options.defaultPendingMinMs;
        if (e5 && !(null == (n2 = a6.getMatch(i5.id)) ? void 0 : n2.minPendingPromise) && !a6.isServer) {
          const r5 = createControlledPromise();
          Promise.resolve().then(() => {
            a6.updateMatch(i5.id, (e6) => ({ ...e6, minPendingPromise: r5 }));
          }), setTimeout(() => {
            r5.resolve(), a6.updateMatch(i5.id, (e6) => ({ ...e6, minPendingPromise: void 0 }));
          }, e5);
        }
        throw null == (o5 = a6.getMatch(i5.id)) ? void 0 : o5.loadPromise;
      }
      if ("notFound" === i5.status) return invariant(isNotFound(i5.error)), renderRouteNotFound(a6, c4, i5.error);
      if ("redirected" === i5.status) throw invariant(isRedirect(i5.error)), null == (s5 = a6.getMatch(i5.id)) ? void 0 : s5.loadPromise;
      if ("error" === i5.status) {
        if (a6.isServer) {
          const e5 = (c4.options.errorComponent ?? a6.options.defaultErrorComponent) || ErrorComponent;
          return p2.jsx(e5, { error: i5.error, reset: void 0, info: { componentStack: "" } });
        }
        throw i5.error;
      }
      return h4;
    });
    nt = Ce.memo(function() {
      const e4 = useRouter(), r4 = Ce.useContext(He), n2 = useRouterState({ select: /* @__PURE__ */ __name((e5) => {
        var n3;
        return null == (n3 = e5.matches.find((e6) => e6.id === r4)) ? void 0 : n3.routeId;
      }, "select") }), o5 = e4.routesById[n2], s5 = useRouterState({ select: /* @__PURE__ */ __name((e5) => {
        const n3 = e5.matches.find((e6) => e6.id === r4);
        return invariant(n3), n3.globalNotFound;
      }, "select") }), a6 = useRouterState({ select: /* @__PURE__ */ __name((e5) => {
        var n3;
        const o6 = e5.matches, s6 = o6.findIndex((e6) => e6.id === r4);
        return null == (n3 = o6[s6 + 1]) ? void 0 : n3.id;
      }, "select") }), i5 = e4.options.defaultPendingComponent ? p2.jsx(e4.options.defaultPendingComponent, {}) : null;
      if (s5) return renderRouteNotFound(e4, o5, void 0);
      if (!a6) return null;
      const l5 = p2.jsx(tt, { matchId: a6 });
      return r4 === W2 ? p2.jsx(Ce.Suspense, { fallback: i5, children: l5 }) : l5;
    });
    __name(Matches, "Matches");
    __name(MatchesInner, "MatchesInner");
    Router = class extends RouterCore {
      static {
        __name(this, "Router");
      }
      constructor(e4) {
        super(e4);
      }
    };
    __name(RouterContextProvider, "RouterContextProvider");
    __name(RouterProvider, "RouterProvider");
    __name(Asset, "Asset");
    __name(Script, "Script");
    "undefined" != typeof globalThis && (globalThis.createFileRoute = createFileRoute, globalThis.createLazyFileRoute = function(e4) {
      return "object" == typeof e4 ? new LazyRoute(e4) : (r4) => new LazyRoute({ id: e4, ...r4 });
    });
    useTags = /* @__PURE__ */ __name(() => {
      const e4 = useRouter(), r4 = useRouterState({ select: /* @__PURE__ */ __name((e5) => e5.matches.map((e6) => e6.meta).filter(Boolean), "select") }), n2 = Ce.useMemo(() => {
        const e5 = [], n3 = {};
        let o6;
        return [...r4].reverse().forEach((r5) => {
          [...r5].reverse().forEach((r6) => {
            if (r6) if (r6.title) o6 || (o6 = { tag: "title", children: r6.title });
            else {
              const o7 = r6.name ?? r6.property;
              if (o7) {
                if (n3[o7]) return;
                n3[o7] = true;
              }
              e5.push({ tag: "meta", attrs: { ...r6 } });
            }
          });
        }), o6 && e5.push(o6), e5.reverse(), e5;
      }, [r4]), o5 = useRouterState({ select: /* @__PURE__ */ __name((r5) => {
        var n3;
        const o6 = r5.matches.map((e5) => e5.links).filter(Boolean).flat(1).map((e5) => ({ tag: "link", attrs: { ...e5 } })), s6 = null == (n3 = e4.ssr) ? void 0 : n3.manifest;
        return [...o6, ...r5.matches.map((e5) => {
          var r6;
          return (null == (r6 = null == s6 ? void 0 : s6.routes[e5.routeId]) ? void 0 : r6.assets) ?? [];
        }).filter(Boolean).flat(1).filter((e5) => "link" === e5.tag).map((e5) => ({ tag: "link", attrs: { ...e5.attrs, suppressHydrationWarning: true } }))];
      }, "select"), structuralSharing: true }), s5 = useRouterState({ select: /* @__PURE__ */ __name((r5) => {
        const n3 = [];
        return r5.matches.map((r6) => e4.looseRoutesById[r6.routeId]).forEach((r6) => {
          var o6, s6, a6, i5;
          return null == (i5 = null == (a6 = null == (s6 = null == (o6 = e4.ssr) ? void 0 : o6.manifest) ? void 0 : s6.routes[r6.id]) ? void 0 : a6.preloads) ? void 0 : i5.filter(Boolean).forEach((e5) => {
            n3.push({ tag: "link", attrs: { rel: "modulepreload", href: e5 } });
          });
        }), n3;
      }, "select"), structuralSharing: true });
      return function(e5, r5) {
        const n3 = /* @__PURE__ */ new Set();
        return e5.filter((e6) => {
          const o6 = r5(e6);
          return !n3.has(o6) && (n3.add(o6), true);
        });
      }([...n2, ...s5, ...o5, ...useRouterState({ select: /* @__PURE__ */ __name((e5) => e5.matches.map((e6) => e6.styles).flat(1).filter(Boolean).map(({ children: e6, ...r5 }) => ({ tag: "style", attrs: r5, children: e6 })), "select"), structuralSharing: true }), ...useRouterState({ select: /* @__PURE__ */ __name((e5) => e5.matches.map((e6) => e6.headScripts).flat(1).filter(Boolean).map(({ children: e6, ...r5 }) => ({ tag: "script", attrs: { ...r5 }, children: e6 })), "select"), structuralSharing: true })], (e5) => JSON.stringify(e5));
    }, "useTags");
    __name(HeadContent, "HeadContent");
    Scripts = /* @__PURE__ */ __name(() => {
      const e4 = useRouter(), r4 = useRouterState({ select: /* @__PURE__ */ __name((r5) => {
        var n3;
        const o6 = [], s5 = null == (n3 = e4.ssr) ? void 0 : n3.manifest;
        return s5 ? (r5.matches.map((r6) => e4.looseRoutesById[r6.routeId]).forEach((e5) => {
          var r6, n4;
          return null == (n4 = null == (r6 = s5.routes[e5.id]) ? void 0 : r6.assets) ? void 0 : n4.filter((e6) => "script" === e6.tag).forEach((e6) => {
            o6.push({ tag: "script", attrs: e6.attrs, children: e6.children });
          });
        }), o6) : [];
      }, "select"), structuralSharing: true }), { scripts: n2 } = useRouterState({ select: /* @__PURE__ */ __name((e5) => ({ scripts: e5.matches.map((e6) => e6.scripts).flat(1).filter(Boolean).map(({ children: e6, ...r5 }) => ({ tag: "script", attrs: { ...r5, suppressHydrationWarning: true }, children: e6 })) }), "select"), structuralSharing: true }), o5 = [...n2, ...r4];
      return p2.jsx(p2.Fragment, { children: o5.map((e5, r5) => Ce.createElement(Asset, { ...e5, key: `tsr-scripts-${e5.tag}-${r5}` })) });
    }, "Scripts");
    __name(splitSetCookieString, "splitSetCookieString");
    __name(mergeHeaders, "mergeHeaders");
    __name(json, "json");
    st = ((ot = st || {})[ot.AggregateError = 1] = "AggregateError", ot[ot.ArrowFunction = 2] = "ArrowFunction", ot[ot.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", ot[ot.ObjectAssign = 8] = "ObjectAssign", ot[ot.BigIntTypedArray = 16] = "BigIntTypedArray", ot);
    __name(Nr, "Nr");
    __name(d4, "d");
    at = "__SEROVAL_REFS__";
    it = "$R";
    lt = `self.${it}`;
    __name(f2, "f");
    ut = /* @__PURE__ */ new Map();
    ct = /* @__PURE__ */ new Map();
    __name(je, "je");
    __name(Hr, "Hr");
    __name(Ye, "Ye");
    __name(m2, "m");
    "undefined" != typeof globalThis ? Object.defineProperty(globalThis, at, { value: ct, configurable: true, writable: false, enumerable: false }) : "undefined" != typeof self ? Object.defineProperty(self, at, { value: ct, configurable: true, writable: false, enumerable: false }) : void 0 !== ir && Object.defineProperty(ir, at, { value: ct, configurable: true, writable: false, enumerable: false });
    ht = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
    dt = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
    pt = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
    ft = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
    mt = void 0;
    __name(u$1, "u$1");
    __name(x, "x");
    gt = x(2);
    yt = x(3);
    bt = x(1);
    vt = x(0);
    kt = x(4);
    St = x(5);
    Ct = x(6);
    wt = x(7);
    __name(me, "me");
    __name(j, "j");
    __name(fe, "fe");
    __name(w$1, "w$1");
    __name(nr, "nr");
    __name(_2, "_");
    __name(M, "M");
    __name(U2, "U");
    __name(L2, "L");
    ({ toString: Pt } = Object.prototype);
    xt = class extends Error {
      static {
        __name(this, "xt");
      }
      constructor(e4, r4) {
        var n2, o5;
        super((n2 = e4, (o5 = r4) instanceof Error ? `Seroval caught an error during the ${n2} process.
  
${o5.name}
${o5.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${n2} process.

"${Pt.call(o5)}"

For more information, please check the "cause" property of this error.`)), this.cause = r4;
      }
    };
    Rt = class extends xt {
      static {
        __name(this, "Rt");
      }
      constructor(e4) {
        super("parsing", e4);
      }
    };
    Tt = class extends xt {
      static {
        __name(this, "Tt");
      }
      constructor(e4) {
        super("serialization", e4);
      }
    };
    $t = class extends Error {
      static {
        __name(this, "$t");
      }
      constructor(e4) {
        super(`The value ${Pt.call(e4)} of type "${typeof e4}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = e4;
      }
    };
    Et = class extends Error {
      static {
        __name(this, "Et");
      }
      constructor(e4) {
        super('Unsupported node type "' + e4.t + '".');
      }
    };
    Ft = class extends Error {
      static {
        __name(this, "Ft");
      }
      constructor(e4) {
        super('Missing plugin for tag "' + e4 + '".');
      }
    };
    It = class extends Error {
      static {
        __name(this, "It");
      }
      constructor(e4) {
        super('Missing reference for the value "' + Pt.call(e4) + '" of type "' + typeof e4 + '"'), this.value = e4;
      }
    };
    _t = class {
      static {
        __name(this, "_t");
      }
      constructor(e4, r4) {
        this.value = e4, this.replacement = r4;
      }
    };
    __name(z, "z");
    __name(S2, "S");
    At = {};
    Mt = {};
    Ot = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
    __name(cr, "cr");
    __name(K2, "K");
    __name(J, "J");
    Lt = class {
      static {
        __name(this, "Lt");
      }
      constructor(e4) {
        this.marked = /* @__PURE__ */ new Set(), this.plugins = e4.plugins, this.features = 31 ^ (e4.disabledFeatures || 0), this.refs = e4.refs || /* @__PURE__ */ new Map();
      }
      markRef(e4) {
        this.marked.add(e4);
      }
      isMarked(e4) {
        return this.marked.has(e4);
      }
      createIndex(e4) {
        let r4 = this.refs.size;
        return this.refs.set(e4, r4), r4;
      }
      getIndexedValue(e4) {
        let r4 = this.refs.get(e4);
        return null != r4 ? (this.markRef(r4), { type: 1, value: (n2 = r4, u$1(4, n2, mt, mt, mt, mt, mt, mt, mt, mt, mt, mt)) }) : { type: 0, value: this.createIndex(e4) };
        var n2;
      }
      getReference(e4) {
        let r4 = this.getIndexedValue(e4);
        return 1 === r4.type ? r4 : je(e4) ? { type: 2, value: nr(r4.value, e4) } : r4;
      }
      parseWellKnownSymbol(e4) {
        let r4 = this.getReference(e4);
        return 0 !== r4.type ? r4.value : (f2(e4 in dt, new $t(e4)), function(e5, r5) {
          return u$1(17, e5, dt[r5], mt, mt, mt, mt, mt, mt, mt, mt, mt);
        }(r4.value, e4));
      }
      parseSpecialReference(e4) {
        let r4 = this.getIndexedValue(Ot[e4]);
        return 1 === r4.type ? r4.value : u$1(26, r4.value, e4, mt, mt, mt, mt, mt, mt, mt, mt, mt);
      }
      parseIteratorFactory() {
        let e4 = this.getIndexedValue(At);
        return 1 === e4.type ? e4.value : u$1(27, e4.value, mt, mt, mt, mt, mt, mt, mt, this.parseWellKnownSymbol(Symbol.iterator), mt, mt);
      }
      parseAsyncIteratorFactory() {
        let e4 = this.getIndexedValue(Mt);
        return 1 === e4.type ? e4.value : u$1(29, e4.value, mt, mt, mt, mt, mt, mt, [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], mt, mt, mt);
      }
      createObjectNode(e4, r4, n2, o5) {
        return u$1(n2 ? 11 : 10, e4, mt, mt, mt, mt, o5, mt, mt, mt, mt, fe(r4));
      }
      createMapNode(e4, r4, n2, o5) {
        return u$1(8, e4, mt, mt, mt, mt, mt, { k: r4, v: n2, s: o5 }, mt, this.parseSpecialReference(0), mt, mt);
      }
      createPromiseConstructorNode(e4, r4) {
        return u$1(22, e4, r4, mt, mt, mt, mt, mt, mt, this.parseSpecialReference(1), mt, mt);
      }
    };
    Nt = /^[$A-Z_][0-9A-Z_$]*$/i;
    __name(Le, "Le");
    __name(se, "se");
    __name(fr, "fr");
    Bt = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: mt };
    jt = class {
      static {
        __name(this, "jt");
      }
      constructor(e4) {
        this.stack = [], this.flags = [], this.assignments = [], this.plugins = e4.plugins, this.features = e4.features, this.marked = new Set(e4.markedRefs);
      }
      createFunction(e4, r4) {
        return z(this.features, e4, r4);
      }
      createEffectfulFunction(e4, r4) {
        return S2(this.features, e4, r4);
      }
      markRef(e4) {
        this.marked.add(e4);
      }
      isMarked(e4) {
        return this.marked.has(e4);
      }
      pushObjectFlag(e4, r4) {
        0 !== e4 && (this.markRef(r4), this.flags.push({ type: e4, value: this.getRefParam(r4) }));
      }
      resolveFlags() {
        let e4 = "";
        for (let r4 = 0, n2 = this.flags, o5 = n2.length; r4 < o5; r4++) {
          let o6 = n2[r4];
          e4 += Bt[o6.type] + "(" + o6.value + "),";
        }
        return e4;
      }
      resolvePatches() {
        let e4 = fr(this.assignments), r4 = this.resolveFlags();
        return e4 ? r4 ? e4 + r4 : e4 : r4;
      }
      createAssignment(e4, r4) {
        this.assignments.push({ t: 0, s: e4, k: mt, v: r4 });
      }
      createAddAssignment(e4, r4) {
        this.assignments.push({ t: 1, s: this.getRefParam(e4), k: mt, v: r4 });
      }
      createSetAssignment(e4, r4, n2) {
        this.assignments.push({ t: 2, s: this.getRefParam(e4), k: r4, v: n2 });
      }
      createDeleteAssignment(e4, r4) {
        this.assignments.push({ t: 3, s: this.getRefParam(e4), k: r4, v: mt });
      }
      createArrayAssign(e4, r4, n2) {
        this.createAssignment(this.getRefParam(e4) + "[" + r4 + "]", n2);
      }
      createObjectAssign(e4, r4, n2) {
        this.createAssignment(this.getRefParam(e4) + "." + r4, n2);
      }
      isIndexedValueInStack(e4) {
        return 4 === e4.t && this.stack.includes(e4.i);
      }
      serializeReference(e4) {
        return this.assignIndexedValue(e4.i, at + '.get("' + e4.s + '")');
      }
      serializeArrayItem(e4, r4, n2) {
        return r4 ? this.isIndexedValueInStack(r4) ? (this.markRef(e4), this.createArrayAssign(e4, n2, this.getRefParam(r4.i)), "") : this.serialize(r4) : "";
      }
      serializeArray(e4) {
        let r4 = e4.i;
        if (e4.l) {
          this.stack.push(r4);
          let n2 = e4.a, o5 = this.serializeArrayItem(r4, n2[0], 0), s5 = "" === o5;
          for (let a6, i5 = 1, l5 = e4.l; i5 < l5; i5++) a6 = this.serializeArrayItem(r4, n2[i5], i5), o5 += "," + a6, s5 = "" === a6;
          return this.stack.pop(), this.pushObjectFlag(e4.o, e4.i), this.assignIndexedValue(r4, "[" + o5 + (s5 ? ",]" : "]"));
        }
        return this.assignIndexedValue(r4, "[]");
      }
      serializeProperty(e4, r4, n2) {
        if ("string" == typeof r4) {
          let o5 = Number(r4), s5 = o5 >= 0 && o5.toString() === r4 || Le(r4);
          if (this.isIndexedValueInStack(n2)) {
            let a6 = this.getRefParam(n2.i);
            return this.markRef(e4.i), s5 && o5 != o5 ? this.createObjectAssign(e4.i, r4, a6) : this.createArrayAssign(e4.i, s5 ? r4 : '"' + r4 + '"', a6), "";
          }
          return (s5 ? r4 : '"' + r4 + '"') + ":" + this.serialize(n2);
        }
        return "[" + this.serialize(r4) + "]:" + this.serialize(n2);
      }
      serializeProperties(e4, r4) {
        let n2 = r4.s;
        if (n2) {
          let o5 = r4.k, s5 = r4.v;
          this.stack.push(e4.i);
          let a6 = this.serializeProperty(e4, o5[0], s5[0]);
          for (let r5 = 1, i5 = a6; r5 < n2; r5++) i5 = this.serializeProperty(e4, o5[r5], s5[r5]), a6 += (i5 && a6 && ",") + i5;
          return this.stack.pop(), "{" + a6 + "}";
        }
        return "{}";
      }
      serializeObject(e4) {
        return this.pushObjectFlag(e4.o, e4.i), this.assignIndexedValue(e4.i, this.serializeProperties(e4, e4.p));
      }
      serializeWithObjectAssign(e4, r4, n2) {
        let o5 = this.serializeProperties(e4, r4);
        return "{}" !== o5 ? "Object.assign(" + n2 + "," + o5 + ")" : n2;
      }
      serializeStringKeyAssignment(e4, r4, n2, o5) {
        let s5 = this.serialize(o5), a6 = Number(n2), i5 = a6 >= 0 && a6.toString() === n2 || Le(n2);
        if (this.isIndexedValueInStack(o5)) i5 && a6 != a6 ? this.createObjectAssign(e4.i, n2, s5) : this.createArrayAssign(e4.i, i5 ? n2 : '"' + n2 + '"', s5);
        else {
          let o6 = this.assignments;
          this.assignments = r4, i5 && a6 != a6 ? this.createObjectAssign(e4.i, n2, s5) : this.createArrayAssign(e4.i, i5 ? n2 : '"' + n2 + '"', s5), this.assignments = o6;
        }
      }
      serializeAssignment(e4, r4, n2, o5) {
        if ("string" == typeof n2) this.serializeStringKeyAssignment(e4, r4, n2, o5);
        else {
          let s5 = this.stack;
          this.stack = [];
          let a6 = this.serialize(o5);
          this.stack = s5;
          let i5 = this.assignments;
          this.assignments = r4, this.createArrayAssign(e4.i, this.serialize(n2), a6), this.assignments = i5;
        }
      }
      serializeAssignments(e4, r4) {
        let n2 = r4.s;
        if (n2) {
          let o5 = [], s5 = r4.k, a6 = r4.v;
          this.stack.push(e4.i);
          for (let r5 = 0; r5 < n2; r5++) this.serializeAssignment(e4, o5, s5[r5], a6[r5]);
          return this.stack.pop(), fr(o5);
        }
        return mt;
      }
      serializeDictionary(e4, r4) {
        if (e4.p) if (8 & this.features) r4 = this.serializeWithObjectAssign(e4, e4.p, r4);
        else {
          this.markRef(e4.i);
          let n2 = this.serializeAssignments(e4, e4.p);
          if (n2) return "(" + this.assignIndexedValue(e4.i, r4) + "," + n2 + this.getRefParam(e4.i) + ")";
        }
        return this.assignIndexedValue(e4.i, r4);
      }
      serializeNullConstructor(e4) {
        return this.pushObjectFlag(e4.o, e4.i), this.serializeDictionary(e4, "Object.create(null)");
      }
      serializeDate(e4) {
        return this.assignIndexedValue(e4.i, 'new Date("' + e4.s + '")');
      }
      serializeRegExp(e4) {
        return this.assignIndexedValue(e4.i, "/" + e4.c + "/" + e4.m);
      }
      serializeSetItem(e4, r4) {
        return this.isIndexedValueInStack(r4) ? (this.markRef(e4), this.createAddAssignment(e4, this.getRefParam(r4.i)), "") : this.serialize(r4);
      }
      serializeSet(e4) {
        let r4 = "new Set", n2 = e4.l, o5 = e4.i;
        if (n2) {
          let s5 = e4.a;
          this.stack.push(o5);
          let a6 = this.serializeSetItem(o5, s5[0]);
          for (let e5 = 1, r5 = a6; e5 < n2; e5++) r5 = this.serializeSetItem(o5, s5[e5]), a6 += (r5 && a6 && ",") + r5;
          this.stack.pop(), a6 && (r4 += "([" + a6 + "])");
        }
        return this.assignIndexedValue(o5, r4);
      }
      serializeMapEntry(e4, r4, n2, o5) {
        if (this.isIndexedValueInStack(r4)) {
          let s5 = this.getRefParam(r4.i);
          if (this.markRef(e4), this.isIndexedValueInStack(n2)) {
            let r5 = this.getRefParam(n2.i);
            return this.createSetAssignment(e4, s5, r5), "";
          }
          if (4 !== n2.t && null != n2.i && this.isMarked(n2.i)) {
            let r5 = "(" + this.serialize(n2) + ",[" + o5 + "," + o5 + "])";
            return this.createSetAssignment(e4, s5, this.getRefParam(n2.i)), this.createDeleteAssignment(e4, o5), r5;
          }
          let a6 = this.stack;
          return this.stack = [], this.createSetAssignment(e4, s5, this.serialize(n2)), this.stack = a6, "";
        }
        if (this.isIndexedValueInStack(n2)) {
          let s5 = this.getRefParam(n2.i);
          if (this.markRef(e4), 4 !== r4.t && null != r4.i && this.isMarked(r4.i)) {
            let n3 = "(" + this.serialize(r4) + ",[" + o5 + "," + o5 + "])";
            return this.createSetAssignment(e4, this.getRefParam(r4.i), s5), this.createDeleteAssignment(e4, o5), n3;
          }
          let a6 = this.stack;
          return this.stack = [], this.createSetAssignment(e4, this.serialize(r4), s5), this.stack = a6, "";
        }
        return "[" + this.serialize(r4) + "," + this.serialize(n2) + "]";
      }
      serializeMap(e4) {
        let r4 = "new Map", n2 = e4.e.s, o5 = e4.i, s5 = e4.f, a6 = this.getRefParam(s5.i);
        if (n2) {
          let s6 = e4.e.k, i5 = e4.e.v;
          this.stack.push(o5);
          let l5 = this.serializeMapEntry(o5, s6[0], i5[0], a6);
          for (let e5 = 1, r5 = l5; e5 < n2; e5++) r5 = this.serializeMapEntry(o5, s6[e5], i5[e5], a6), l5 += (r5 && l5 && ",") + r5;
          this.stack.pop(), l5 && (r4 += "([" + l5 + "])");
        }
        return 26 === s5.t && (this.markRef(s5.i), r4 = "(" + this.serialize(s5) + "," + r4 + ")"), this.assignIndexedValue(o5, r4);
      }
      serializeArrayBuffer(e4) {
        let r4 = "new Uint8Array(", n2 = e4.s, o5 = n2.length;
        if (o5) {
          r4 += "[" + n2[0];
          for (let e5 = 1; e5 < o5; e5++) r4 += "," + n2[e5];
          r4 += "]";
        }
        return this.assignIndexedValue(e4.i, r4 + ").buffer");
      }
      serializeTypedArray(e4) {
        return this.assignIndexedValue(e4.i, "new " + e4.c + "(" + this.serialize(e4.f) + "," + e4.b + "," + e4.l + ")");
      }
      serializeDataView(e4) {
        return this.assignIndexedValue(e4.i, "new DataView(" + this.serialize(e4.f) + "," + e4.b + "," + e4.l + ")");
      }
      serializeAggregateError(e4) {
        let r4 = e4.i;
        this.stack.push(r4);
        let n2 = this.serializeDictionary(e4, 'new AggregateError([],"' + e4.m + '")');
        return this.stack.pop(), n2;
      }
      serializeError(e4) {
        return this.serializeDictionary(e4, "new " + ft[e4.s] + '("' + e4.m + '")');
      }
      serializePromise(e4) {
        let r4, n2 = e4.f, o5 = e4.i, s5 = e4.s ? "Promise.resolve" : "Promise.reject";
        if (this.isIndexedValueInStack(n2)) {
          let o6 = this.getRefParam(n2.i);
          r4 = s5 + (e4.s ? "().then(" + this.createFunction([], o6) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + o6) + ")");
        } else {
          this.stack.push(o5);
          let e5 = this.serialize(n2);
          this.stack.pop(), r4 = s5 + "(" + e5 + ")";
        }
        return this.assignIndexedValue(o5, r4);
      }
      serializeWellKnownSymbol(e4) {
        return this.assignIndexedValue(e4.i, ht[e4.s]);
      }
      serializeBoxed(e4) {
        return this.assignIndexedValue(e4.i, "Object(" + this.serialize(e4.f) + ")");
      }
      serializePlugin(e4) {
        let r4 = this.plugins;
        if (r4) for (let n2 = 0, o5 = r4.length; n2 < o5; n2++) {
          let o6 = r4[n2];
          if (o6.tag === e4.c) return this.assignIndexedValue(e4.i, o6.serialize(e4.s, this, { id: e4.i }));
        }
        throw new Ft(e4.c);
      }
      getConstructor(e4) {
        let r4 = this.serialize(e4);
        return r4 === this.getRefParam(e4.i) ? r4 : "(" + r4 + ")";
      }
      serializePromiseConstructor(e4) {
        let r4 = this.assignIndexedValue(e4.s, "{p:0,s:0,f:0}");
        return this.assignIndexedValue(e4.i, this.getConstructor(e4.f) + "(" + r4 + ")");
      }
      serializePromiseResolve(e4) {
        return this.getConstructor(e4.a[0]) + "(" + this.getRefParam(e4.i) + "," + this.serialize(e4.a[1]) + ")";
      }
      serializePromiseReject(e4) {
        return this.getConstructor(e4.a[0]) + "(" + this.getRefParam(e4.i) + "," + this.serialize(e4.a[1]) + ")";
      }
      serializeSpecialReference(e4) {
        return this.assignIndexedValue(e4.i, cr(this.features, e4.s));
      }
      serializeIteratorFactory(e4) {
        let r4 = "", n2 = false;
        return 4 !== e4.f.t && (this.markRef(e4.f.i), r4 = "(" + this.serialize(e4.f) + ",", n2 = true), r4 += this.assignIndexedValue(e4.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e4.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), n2 && (r4 += ")"), r4;
      }
      serializeIteratorFactoryInstance(e4) {
        return this.getConstructor(e4.a[0]) + "(" + this.serialize(e4.a[1]) + ")";
      }
      serializeAsyncIteratorFactory(e4) {
        let r4 = e4.a[0], n2 = e4.a[1], o5 = "";
        4 !== r4.t && (this.markRef(r4.i), o5 += "(" + this.serialize(r4)), 4 !== n2.t && (this.markRef(n2.i), o5 += (o5 ? "," : "(") + this.serialize(n2)), o5 && (o5 += ",");
        let s5 = this.assignIndexedValue(e4.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(n2.i) + "]:" + this.createFunction([], "t.p") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(" + this.getRefParam(r4.i) + "(t={p:0,s:0,f:0}),p.push(t),t.p):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
        return o5 ? o5 + s5 + ")" : s5;
      }
      serializeAsyncIteratorFactoryInstance(e4) {
        return this.getConstructor(e4.a[0]) + "(" + this.serialize(e4.a[1]) + ")";
      }
      serializeStreamConstructor(e4) {
        let r4 = this.assignIndexedValue(e4.i, this.getConstructor(e4.f) + "()"), n2 = e4.a.length;
        if (n2) {
          let o5 = this.serialize(e4.a[0]);
          for (let r5 = 1; r5 < n2; r5++) o5 += "," + this.serialize(e4.a[r5]);
          return "(" + r4 + "," + o5 + "," + this.getRefParam(e4.i) + ")";
        }
        return r4;
      }
      serializeStreamNext(e4) {
        return this.getRefParam(e4.i) + ".next(" + this.serialize(e4.f) + ")";
      }
      serializeStreamThrow(e4) {
        return this.getRefParam(e4.i) + ".throw(" + this.serialize(e4.f) + ")";
      }
      serializeStreamReturn(e4) {
        return this.getRefParam(e4.i) + ".return(" + this.serialize(e4.f) + ")";
      }
      serialize(e4) {
        try {
          switch (e4.t) {
            case 2:
              return pt[e4.s];
            case 0:
              return "" + e4.s;
            case 1:
              return '"' + e4.s + '"';
            case 3:
              return e4.s + "n";
            case 4:
              return this.getRefParam(e4.i);
            case 18:
              return this.serializeReference(e4);
            case 9:
              return this.serializeArray(e4);
            case 10:
              return this.serializeObject(e4);
            case 11:
              return this.serializeNullConstructor(e4);
            case 5:
              return this.serializeDate(e4);
            case 6:
              return this.serializeRegExp(e4);
            case 7:
              return this.serializeSet(e4);
            case 8:
              return this.serializeMap(e4);
            case 19:
              return this.serializeArrayBuffer(e4);
            case 16:
            case 15:
              return this.serializeTypedArray(e4);
            case 20:
              return this.serializeDataView(e4);
            case 14:
              return this.serializeAggregateError(e4);
            case 13:
              return this.serializeError(e4);
            case 12:
              return this.serializePromise(e4);
            case 17:
              return this.serializeWellKnownSymbol(e4);
            case 21:
              return this.serializeBoxed(e4);
            case 22:
              return this.serializePromiseConstructor(e4);
            case 23:
              return this.serializePromiseResolve(e4);
            case 24:
              return this.serializePromiseReject(e4);
            case 25:
              return this.serializePlugin(e4);
            case 26:
              return this.serializeSpecialReference(e4);
            case 27:
              return this.serializeIteratorFactory(e4);
            case 28:
              return this.serializeIteratorFactoryInstance(e4);
            case 29:
              return this.serializeAsyncIteratorFactory(e4);
            case 30:
              return this.serializeAsyncIteratorFactoryInstance(e4);
            case 31:
              return this.serializeStreamConstructor(e4);
            case 32:
              return this.serializeStreamNext(e4);
            case 33:
              return this.serializeStreamThrow(e4);
            case 34:
              return this.serializeStreamReturn(e4);
            default:
              throw new Et(e4);
          }
        } catch (e5) {
          throw new Tt(e5);
        }
      }
    };
    Dt = class extends jt {
      static {
        __name(this, "Dt");
      }
      constructor(e4) {
        super(e4), this.mode = "cross", this.scopeId = e4.scopeId;
      }
      getRefParam(e4) {
        return "$R[" + e4 + "]";
      }
      assignIndexedValue(e4, r4) {
        return this.getRefParam(e4) + "=" + r4;
      }
      serializeTop(e4) {
        let r4 = this.serialize(e4), n2 = e4.i;
        if (null == n2) return r4;
        let o5 = this.resolvePatches(), s5 = this.getRefParam(n2), a6 = null == this.scopeId ? "" : it, i5 = o5 ? "(" + r4 + "," + o5 + s5 + ")" : r4;
        if ("" === a6) return 10 !== e4.t || o5 ? i5 : "(" + i5 + ")";
        let l5 = null == this.scopeId ? "()" : '($R["' + d4(this.scopeId) + '"])';
        return "(" + this.createFunction([a6], i5) + ")" + l5;
      }
    };
    zt = class extends Lt {
      static {
        __name(this, "zt");
      }
      parseItems(e4) {
        let r4 = [];
        for (let n2 = 0, o5 = e4.length; n2 < o5; n2++) n2 in e4 && (r4[n2] = this.parse(e4[n2]));
        return r4;
      }
      parseArray(e4, r4) {
        return function(e5, r5, n2) {
          return u$1(9, e5, mt, r5.length, mt, mt, mt, mt, n2, mt, mt, fe(r5));
        }(e4, r4, this.parseItems(r4));
      }
      parseProperties(e4) {
        let r4 = Object.entries(e4), n2 = [], o5 = [];
        for (let e5 = 0, s6 = r4.length; e5 < s6; e5++) n2.push(d4(r4[e5][0])), o5.push(this.parse(r4[e5][1]));
        let s5 = Symbol.iterator;
        return s5 in e4 && (n2.push(this.parseWellKnownSymbol(s5)), o5.push(M(this.parseIteratorFactory(), this.parse(J(e4))))), s5 = Symbol.asyncIterator, s5 in e4 && (n2.push(this.parseWellKnownSymbol(s5)), o5.push(U2(this.parseAsyncIteratorFactory(), this.parse(K2())))), s5 = Symbol.toStringTag, s5 in e4 && (n2.push(this.parseWellKnownSymbol(s5)), o5.push(w$1(e4[s5]))), s5 = Symbol.isConcatSpreadable, s5 in e4 && (n2.push(this.parseWellKnownSymbol(s5)), o5.push(e4[s5] ? gt : yt)), { k: n2, v: o5, s: n2.length };
      }
      parsePlainObject(e4, r4, n2) {
        return this.createObjectNode(e4, r4, n2, this.parseProperties(r4));
      }
      parseBoxed(e4, r4) {
        return function(e5, r5) {
          return u$1(21, e5, mt, mt, mt, mt, mt, mt, mt, r5, mt, mt);
        }(e4, this.parse(r4.valueOf()));
      }
      parseTypedArray(e4, r4) {
        return function(e5, r5, n2) {
          return u$1(15, e5, mt, r5.length, r5.constructor.name, mt, mt, mt, mt, n2, r5.byteOffset, mt);
        }(e4, r4, this.parse(r4.buffer));
      }
      parseBigIntTypedArray(e4, r4) {
        return function(e5, r5, n2) {
          return u$1(16, e5, mt, r5.length, r5.constructor.name, mt, mt, mt, mt, n2, r5.byteOffset, mt);
        }(e4, r4, this.parse(r4.buffer));
      }
      parseDataView(e4, r4) {
        return function(e5, r5, n2) {
          return u$1(20, e5, mt, r5.byteLength, mt, mt, mt, mt, mt, n2, r5.byteOffset, mt);
        }(e4, r4, this.parse(r4.buffer));
      }
      parseError(e4, r4) {
        let n2 = j(r4, this.features);
        return function(e5, r5, n3) {
          return u$1(13, e5, me(r5), mt, mt, d4(r5.message), n3, mt, mt, mt, mt, mt);
        }(e4, r4, n2 ? this.parseProperties(n2) : mt);
      }
      parseAggregateError(e4, r4) {
        let n2 = j(r4, this.features);
        return function(e5, r5, n3) {
          return u$1(14, e5, me(r5), mt, mt, d4(r5.message), n3, mt, mt, mt, mt, mt);
        }(e4, r4, n2 ? this.parseProperties(n2) : mt);
      }
      parseMap(e4, r4) {
        let n2 = [], o5 = [];
        for (let [e5, s5] of r4.entries()) n2.push(this.parse(e5)), o5.push(this.parse(s5));
        return this.createMapNode(e4, n2, o5, r4.size);
      }
      parseSet(e4, r4) {
        let n2 = [];
        for (let e5 of r4.keys()) n2.push(this.parse(e5));
        return function(e5, r5, n3) {
          return u$1(7, e5, mt, r5, mt, mt, mt, mt, n3, mt, mt, mt);
        }(e4, r4.size, n2);
      }
      parsePlugin(e4, r4) {
        let n2 = this.plugins;
        if (n2) for (let o5 = 0, s5 = n2.length; o5 < s5; o5++) {
          let s6 = n2[o5];
          if (s6.parse.sync && s6.test(r4)) return _2(e4, s6.tag, s6.parse.sync(r4, this, { id: e4 }));
        }
      }
      parseStream(e4, r4) {
        return L2(e4, this.parseSpecialReference(4), []);
      }
      parsePromise(e4, r4) {
        return this.createPromiseConstructorNode(e4, this.createIndex({}));
      }
      parseObject(e4, r4) {
        if (Array.isArray(r4)) return this.parseArray(e4, r4);
        if ("__SEROVAL_STREAM__" in r4) return this.parseStream(e4, r4);
        let n2 = r4.constructor;
        if (n2 === _t) return this.parse(r4.replacement);
        let o5 = this.parsePlugin(e4, r4);
        if (o5) return o5;
        switch (n2) {
          case Object:
            return this.parsePlainObject(e4, r4, false);
          case void 0:
            return this.parsePlainObject(e4, r4, true);
          case Date:
            return function(e5, r5) {
              let n3 = r5.valueOf();
              return u$1(5, e5, n3 != n3 ? "" : r5.toISOString(), mt, mt, mt, mt, mt, mt, mt, mt, mt);
            }(e4, r4);
          case RegExp:
            return function(e5, r5) {
              return u$1(6, e5, mt, mt, d4(r5.source), r5.flags, mt, mt, mt, mt, mt, mt);
            }(e4, r4);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(e4, r4);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(e4, r4);
          case ArrayBuffer:
            return function(e5, r5) {
              let n3 = new Uint8Array(r5), o6 = n3.length, s6 = new Array(o6);
              for (let e6 = 0; e6 < o6; e6++) s6[e6] = n3[e6];
              return u$1(19, e5, s6, mt, mt, mt, mt, mt, mt, mt, mt, mt);
            }(e4, r4);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(e4, r4);
          case DataView:
            return this.parseDataView(e4, r4);
          case Map:
            return this.parseMap(e4, r4);
          case Set:
            return this.parseSet(e4, r4);
        }
        if (n2 === Promise || r4 instanceof Promise) return this.parsePromise(e4, r4);
        let s5 = this.features;
        if (16 & s5) switch (n2) {
          case BigInt64Array:
          case BigUint64Array:
            return this.parseBigIntTypedArray(e4, r4);
        }
        if (1 & s5 && "undefined" != typeof AggregateError && (n2 === AggregateError || r4 instanceof AggregateError)) return this.parseAggregateError(e4, r4);
        if (r4 instanceof Error) return this.parseError(e4, r4);
        if (Symbol.iterator in r4 || Symbol.asyncIterator in r4) return this.parsePlainObject(e4, r4, !!n2);
        throw new $t(r4);
      }
      parseFunction(e4) {
        let r4 = this.getReference(e4);
        if (0 !== r4.type) return r4.value;
        let n2 = this.parsePlugin(r4.value, e4);
        if (n2) return n2;
        throw new $t(e4);
      }
      parse(e4) {
        switch (typeof e4) {
          case "boolean":
            return e4 ? gt : yt;
          case "undefined":
            return bt;
          case "string":
            return w$1(e4);
          case "number":
            return function(e5) {
              switch (e5) {
                case Number.POSITIVE_INFINITY:
                  return St;
                case Number.NEGATIVE_INFINITY:
                  return Ct;
              }
              return e5 != e5 ? wt : Object.is(e5, -0) ? kt : u$1(0, mt, e5, mt, mt, mt, mt, mt, mt, mt, mt, mt);
            }(e4);
          case "bigint":
            return u$1(3, mt, "" + e4, mt, mt, mt, mt, mt, mt, mt, mt, mt);
          case "object":
            if (e4) {
              let r4 = this.getReference(e4);
              return 0 === r4.type ? this.parseObject(r4.value, e4) : r4.value;
            }
            return vt;
          case "symbol":
            return this.parseWellKnownSymbol(e4);
          case "function":
            return this.parseFunction(e4);
          default:
            throw new $t(e4);
        }
      }
      parseTop(e4) {
        try {
          return this.parse(e4);
        } catch (e5) {
          throw e5 instanceof Rt ? e5 : new Rt(e5);
        }
      }
    };
    Ht = class extends zt {
      static {
        __name(this, "Ht");
      }
      constructor(e4) {
        super(e4), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = e4.onParse, this.onErrorCallback = e4.onError, this.onDoneCallback = e4.onDone;
      }
      onParseInternal(e4, r4) {
        try {
          this.onParseCallback(e4, r4);
        } catch (e5) {
          this.onError(e5);
        }
      }
      flush() {
        for (let e4 = 0, r4 = this.buffer.length; e4 < r4; e4++) this.onParseInternal(this.buffer[e4], false);
      }
      onParse(e4) {
        this.initial ? this.buffer.push(e4) : this.onParseInternal(e4, false);
      }
      onError(e4) {
        if (!this.onErrorCallback) throw e4;
        this.onErrorCallback(e4);
      }
      onDone() {
        this.onDoneCallback && this.onDoneCallback();
      }
      pushPendingState() {
        this.pending++;
      }
      popPendingState() {
        --this.pending <= 0 && this.onDone();
      }
      parseProperties(e4) {
        let r4 = Object.entries(e4), n2 = [], o5 = [];
        for (let e5 = 0, s6 = r4.length; e5 < s6; e5++) n2.push(d4(r4[e5][0])), o5.push(this.parse(r4[e5][1]));
        let s5 = Symbol.iterator;
        return s5 in e4 && (n2.push(this.parseWellKnownSymbol(s5)), o5.push(M(this.parseIteratorFactory(), this.parse(J(e4))))), s5 = Symbol.asyncIterator, s5 in e4 && (n2.push(this.parseWellKnownSymbol(s5)), o5.push(U2(this.parseAsyncIteratorFactory(), this.parse(function(e5) {
          let r5 = K2(), n3 = e5[Symbol.asyncIterator]();
          return (/* @__PURE__ */ __name(async function t3() {
            try {
              let e6 = await n3.next();
              e6.done ? r5.return(e6.value) : (r5.next(e6.value), await t3());
            } catch (e6) {
              r5.throw(e6);
            }
          }, "t"))().catch(() => {
          }), r5;
        }(e4))))), s5 = Symbol.toStringTag, s5 in e4 && (n2.push(this.parseWellKnownSymbol(s5)), o5.push(w$1(e4[s5]))), s5 = Symbol.isConcatSpreadable, s5 in e4 && (n2.push(this.parseWellKnownSymbol(s5)), o5.push(e4[s5] ? gt : yt)), { k: n2, v: o5, s: n2.length };
      }
      handlePromiseSuccess(e4, r4) {
        let n2 = this.parseWithError(r4);
        n2 && this.onParse(u$1(23, e4, mt, mt, mt, mt, mt, mt, [this.parseSpecialReference(2), n2], mt, mt, mt)), this.popPendingState();
      }
      handlePromiseFailure(e4, r4) {
        if (this.alive) {
          let n2 = this.parseWithError(r4);
          n2 && this.onParse(u$1(24, e4, mt, mt, mt, mt, mt, mt, [this.parseSpecialReference(3), n2], mt, mt, mt));
        }
        this.popPendingState();
      }
      parsePromise(e4, r4) {
        let n2 = this.createIndex({});
        return r4.then(this.handlePromiseSuccess.bind(this, n2), this.handlePromiseFailure.bind(this, n2)), this.pushPendingState(), this.createPromiseConstructorNode(e4, n2);
      }
      parsePlugin(e4, r4) {
        let n2 = this.plugins;
        if (n2) for (let o5 = 0, s5 = n2.length; o5 < s5; o5++) {
          let s6 = n2[o5];
          if (s6.parse.stream && s6.test(r4)) return _2(e4, s6.tag, s6.parse.stream(r4, this, { id: e4 }));
        }
        return mt;
      }
      parseStream(e4, r4) {
        let n2 = L2(e4, this.parseSpecialReference(4), []);
        return this.pushPendingState(), r4.on({ next: /* @__PURE__ */ __name((r5) => {
          if (this.alive) {
            let n3 = this.parseWithError(r5);
            n3 && this.onParse(u$1(32, e4, mt, mt, mt, mt, mt, mt, mt, n3, mt, mt));
          }
        }, "next"), throw: /* @__PURE__ */ __name((r5) => {
          if (this.alive) {
            let n3 = this.parseWithError(r5);
            n3 && this.onParse(u$1(33, e4, mt, mt, mt, mt, mt, mt, mt, n3, mt, mt));
          }
          this.popPendingState();
        }, "throw"), return: /* @__PURE__ */ __name((r5) => {
          if (this.alive) {
            let n3 = this.parseWithError(r5);
            n3 && this.onParse(u$1(34, e4, mt, mt, mt, mt, mt, mt, mt, n3, mt, mt));
          }
          this.popPendingState();
        }, "return") }), n2;
      }
      parseWithError(e4) {
        try {
          return this.parse(e4);
        } catch (e5) {
          return this.onError(e5), mt;
        }
      }
      start(e4) {
        let r4 = this.parseWithError(e4);
        r4 && (this.onParseInternal(r4, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
      }
      destroy() {
        this.alive && (this.onDone(), this.alive = false);
      }
      isAlive() {
        return this.alive;
      }
    };
    Vt = class extends Ht {
      static {
        __name(this, "Vt");
      }
      constructor() {
        super(...arguments), this.mode = "cross";
      }
    };
    qt = {};
    __name(w2, "w");
    Wt = { tag: "seroval/plugins/web/ReadableStream", extends: [{ tag: "seroval-plugins/web/ReadableStreamFactory", test: /* @__PURE__ */ __name((e4) => e4 === qt, "test"), parse: { sync() {
    }, async: /* @__PURE__ */ __name(async () => await Promise.resolve(void 0), "async"), stream() {
    } }, serialize: /* @__PURE__ */ __name((e4, r4) => r4.createFunction(["d"], "new ReadableStream({start:" + r4.createEffectfulFunction(["c"], "d.on({next:" + r4.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + r4.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + r4.createEffectfulFunction([], "c.close()") + "})") + "})"), "serialize"), deserialize: /* @__PURE__ */ __name(() => qt, "deserialize") }], test: /* @__PURE__ */ __name((e4) => "undefined" != typeof ReadableStream && e4 instanceof ReadableStream, "test"), parse: { sync: /* @__PURE__ */ __name((e4, r4) => ({ factory: r4.parse(qt), stream: r4.parse(K2()) }), "sync"), async: /* @__PURE__ */ __name(async (e4, r4) => ({ factory: await r4.parse(qt), stream: await r4.parse(w2(e4)) }), "async"), stream: /* @__PURE__ */ __name((e4, r4) => ({ factory: r4.parse(qt), stream: r4.parse(w2(e4)) }), "stream") }, serialize: /* @__PURE__ */ __name((e4, r4) => "(" + r4.serialize(e4.factory) + ")(" + r4.serialize(e4.stream) + ")", "serialize"), deserialize(e4, r4) {
      let n2 = r4.deserialize(e4.stream);
      return new ReadableStream({ start(e5) {
        n2.on({ next(r5) {
          e5.enqueue(r5);
        }, throw(r5) {
          e5.error(r5);
        }, return() {
          e5.close();
        } });
      } });
    } };
    Ut = Wt;
    Kt = Hr({ tag: "tanstack-start:seroval-plugins/Error", test: /* @__PURE__ */ __name((e4) => e4 instanceof Error, "test"), parse: { sync: /* @__PURE__ */ __name((e4, r4) => ({ message: r4.parse(e4.message) }), "sync"), async: /* @__PURE__ */ __name(async (e4, r4) => ({ message: await r4.parse(e4.message) }), "async"), stream: /* @__PURE__ */ __name((e4, r4) => ({ message: r4.parse(e4.message) }), "stream") }, serialize: /* @__PURE__ */ __name((e4, r4) => "new Error(" + r4.serialize(e4.message) + ")", "serialize"), deserialize: /* @__PURE__ */ __name((e4, r4) => new Error(r4.deserialize(e4.message)), "deserialize") });
    __name(dehydrateMatch, "dehydrateMatch");
    __name(attachRouterServerSsrUtils, "attachRouterServerSsrUtils");
    Gt = /(<body)/;
    Jt = /(<\/body>)/;
    Xt = /(<\/html>)/;
    Qt = /(<head.*?>)/;
    Yt = /(<\/[a-zA-Z][\w:.-]*?>)/g;
    Zt = new TextDecoder();
    __name(transformStreamWithRouter, "transformStreamWithRouter");
    __name(hasProp, "hasProp");
    er = Object.defineProperty;
    __publicField$2 = /* @__PURE__ */ __name((e4, r4, n2) => (((e5, r5, n3) => {
      r5 in e5 ? er(e5, r5, { enumerable: true, configurable: true, writable: true, value: n3 }) : e5[r5] = n3;
    })(e4, "symbol" != typeof r4 ? r4 + "" : r4, n2), n2), "__publicField$2");
    H3Error = class extends Error {
      static {
        __name(this, "H3Error");
      }
      constructor(e4, r4 = {}) {
        super(e4, r4), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), r4.cause && !this.cause && (this.cause = r4.cause);
      }
      toJSON() {
        const e4 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e4.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e4.data = this.data), e4;
      }
    };
    __name(assertMethod, "assertMethod");
    __name(toWebRequest, "toWebRequest");
    __publicField$2(H3Error, "__h3_error__", true);
    tr = Symbol.for("h3RawBody");
    rr = ["PATCH", "POST", "PUT", "DELETE"];
    __name(getRequestWebStream, "getRequestWebStream");
    or = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    __name(sendWebResponse, "sendWebResponse");
    sr = Object.defineProperty;
    __publicField = /* @__PURE__ */ __name((e4, r4, n2) => (((e5, r5, n3) => {
      r5 in e5 ? sr(e5, r5, { enumerable: true, configurable: true, writable: true, value: n3 }) : e5[r5] = n3;
    })(e4, "symbol" != typeof r4 ? r4 + "" : r4, n2), n2), "__publicField");
    H3Event = class {
      static {
        __name(this, "H3Event");
      }
      constructor(e4, r4) {
        __publicField(this, "__is_event__", true), __publicField(this, "node"), __publicField(this, "web"), __publicField(this, "context", {}), __publicField(this, "_method"), __publicField(this, "_path"), __publicField(this, "_headers"), __publicField(this, "_requestBody"), __publicField(this, "_handled", false), __publicField(this, "_onBeforeResponseCalled"), __publicField(this, "_onAfterResponseCalled"), this.node = { req: e4, res: r4 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e4) {
          const r4 = new Headers();
          for (const [n2, o5] of Object.entries(e4)) if (Array.isArray(o5)) for (const e5 of o5) r4.append(n2, e5);
          else o5 && r4.set(n2, o5);
          return r4;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e4) {
        return Promise.resolve(e4).then((e5) => sendWebResponse(this, e5));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(_normalizeArray, "_normalizeArray");
    ar = {};
    ir2 = {};
    lr = Ce;
    ur = Xe;
    hr = Symbol.for("react.transitional.element");
    dr = Symbol.for("react.portal");
    pr = Symbol.for("react.fragment");
    mr = Symbol.for("react.strict_mode");
    gr = Symbol.for("react.profiler");
    yr = Symbol.for("react.provider");
    br = Symbol.for("react.consumer");
    vr = Symbol.for("react.context");
    kr = Symbol.for("react.forward_ref");
    Sr = Symbol.for("react.suspense");
    Cr = Symbol.for("react.suspense_list");
    wr = Symbol.for("react.memo");
    Pr = Symbol.for("react.lazy");
    xr = Symbol.for("react.scope");
    Rr = Symbol.for("react.activity");
    Tr = Symbol.for("react.legacy_hidden");
    $r = Symbol.for("react.memo_cache_sentinel");
    Er = Symbol.for("react.view_transition");
    Fr = Symbol.iterator;
    Ir = Array.isArray;
    __name(murmurhash3_32_gc$1, "murmurhash3_32_gc$1");
    __name(handleErrorInNextTick, "handleErrorInNextTick");
    _r = Promise;
    Ar = "function" == typeof queueMicrotask ? queueMicrotask : function(e4) {
      _r.resolve(null).then(e4).catch(handleErrorInNextTick);
    };
    Mr = null;
    Or = 0;
    __name(writeChunk, "writeChunk");
    __name(writeChunkAndReturn, "writeChunkAndReturn");
    __name(completeWriting, "completeWriting");
    Lr = new TextEncoder();
    __name(stringToChunk, "stringToChunk");
    __name(stringToPrecomputedChunk, "stringToPrecomputedChunk");
    __name(closeWithError, "closeWithError");
    Br = Object.assign;
    jr = Object.prototype.hasOwnProperty;
    Dr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
    zr = {};
    Vr = {};
    __name(isAttributeNameSafe$1, "isAttributeNameSafe$1");
    qr = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    Wr = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]);
    Ur = /["'&<>]/;
    __name(escapeTextForBrowser$1, "escapeTextForBrowser$1");
    Kr = /([A-Z])/g;
    Gr = /^ms-/;
    Jr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    __name(sanitizeURL$1, "sanitizeURL$1");
    Xr = lr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Qr = ur.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Yr = { pending: false, data: null, method: null, action: null };
    Zr = Qr.d;
    Qr.d = { f: Zr.f, r: Zr.r, D: /* @__PURE__ */ __name(function(e4) {
      var r4 = resolveRequest();
      if (r4) {
        var n2 = r4.resumableState, o5 = r4.renderState;
        if ("string" == typeof e4 && e4) {
          var s5, a6;
          if (!n2.dnsResources.hasOwnProperty(e4)) n2.dnsResources[e4] = null, (a6 = (n2 = o5.headers) && 0 < n2.remainingCapacity) && (s5 = "<" + ("" + e4).replace(Zo, escapeHrefForLinkHeaderURLContextReplacer$1) + ">; rel=dns-prefetch", a6 = 0 <= (n2.remainingCapacity -= s5.length + 2)), a6 ? (o5.resets.dns[e4] = null, n2.preconnects && (n2.preconnects += ", "), n2.preconnects += s5) : (pushLinkImpl$1(s5 = [], { href: e4, rel: "dns-prefetch" }), o5.preconnects.add(s5));
          enqueueFlush$1(r4);
        }
      } else Zr.D(e4);
    }, "D"), C: /* @__PURE__ */ __name(function(e4, r4) {
      var n2 = resolveRequest();
      if (n2) {
        var o5 = n2.resumableState, s5 = n2.renderState;
        if ("string" == typeof e4 && e4) {
          var a6 = "use-credentials" === r4 ? "credentials" : "string" == typeof r4 ? "anonymous" : "default";
          if (!o5.connectResources[a6].hasOwnProperty(e4)) {
            var i5, l5;
            if (o5.connectResources[a6][e4] = null, l5 = (o5 = s5.headers) && 0 < o5.remainingCapacity) {
              if (l5 = "<" + ("" + e4).replace(Zo, escapeHrefForLinkHeaderURLContextReplacer$1) + ">; rel=preconnect", "string" == typeof r4) l5 += '; crossorigin="' + ("" + r4).replace(es, escapeStringForLinkHeaderQuotedParamValueContextReplacer$1) + '"';
              i5 = l5, l5 = 0 <= (o5.remainingCapacity -= i5.length + 2);
            }
            l5 ? (s5.resets.connect[a6][e4] = null, o5.preconnects && (o5.preconnects += ", "), o5.preconnects += i5) : (pushLinkImpl$1(a6 = [], { rel: "preconnect", href: e4, crossOrigin: r4 }), s5.preconnects.add(a6));
          }
          enqueueFlush$1(n2);
        }
      } else Zr.C(e4, r4);
    }, "C"), L: /* @__PURE__ */ __name(function(e4, r4, n2) {
      var o5 = resolveRequest();
      if (o5) {
        var s5 = o5.resumableState, a6 = o5.renderState;
        if (r4 && e4) {
          switch (r4) {
            case "image":
              if (n2) var i5 = n2.imageSrcSet, l5 = n2.imageSizes, u3 = n2.fetchPriority;
              var c4, h4 = i5 ? i5 + "\n" + (l5 || "") : e4;
              if (s5.imageResources.hasOwnProperty(h4)) return;
              s5.imageResources[h4] = en, (s5 = a6.headers) && 0 < s5.remainingCapacity && "string" != typeof i5 && "high" === u3 && (c4 = getPreloadAsHeader$1(e4, r4, n2), 0 <= (s5.remainingCapacity -= c4.length + 2)) ? (a6.resets.image[h4] = en, s5.highImagePreloads && (s5.highImagePreloads += ", "), s5.highImagePreloads += c4) : (pushLinkImpl$1(s5 = [], Br({ rel: "preload", href: i5 ? void 0 : e4, as: r4 }, n2)), "high" === u3 ? a6.highImagePreloads.add(s5) : (a6.bulkPreloads.add(s5), a6.preloads.images.set(h4, s5)));
              break;
            case "style":
              if (s5.styleResources.hasOwnProperty(e4)) return;
              pushLinkImpl$1(i5 = [], Br({ rel: "preload", href: e4, as: r4 }, n2)), s5.styleResources[e4] = !n2 || "string" != typeof n2.crossOrigin && "string" != typeof n2.integrity ? en : [n2.crossOrigin, n2.integrity], a6.preloads.stylesheets.set(e4, i5), a6.bulkPreloads.add(i5);
              break;
            case "script":
              if (s5.scriptResources.hasOwnProperty(e4)) return;
              i5 = [], a6.preloads.scripts.set(e4, i5), a6.bulkPreloads.add(i5), pushLinkImpl$1(i5, Br({ rel: "preload", href: e4, as: r4 }, n2)), s5.scriptResources[e4] = !n2 || "string" != typeof n2.crossOrigin && "string" != typeof n2.integrity ? en : [n2.crossOrigin, n2.integrity];
              break;
            default:
              if (s5.unknownResources.hasOwnProperty(r4)) {
                if ((i5 = s5.unknownResources[r4]).hasOwnProperty(e4)) return;
              } else i5 = {}, s5.unknownResources[r4] = i5;
              if (i5[e4] = en, (s5 = a6.headers) && 0 < s5.remainingCapacity && "font" === r4 && (h4 = getPreloadAsHeader$1(e4, r4, n2), 0 <= (s5.remainingCapacity -= h4.length + 2))) a6.resets.font[e4] = en, s5.fontPreloads && (s5.fontPreloads += ", "), s5.fontPreloads += h4;
              else if ("font" === (pushLinkImpl$1(s5 = [], e4 = Br({ rel: "preload", href: e4, as: r4 }, n2)), r4)) a6.fontPreloads.add(s5);
              else a6.bulkPreloads.add(s5);
          }
          enqueueFlush$1(o5);
        }
      } else Zr.L(e4, r4, n2);
    }, "L"), m: /* @__PURE__ */ __name(function(e4, r4) {
      var n2 = resolveRequest();
      if (n2) {
        var o5 = n2.resumableState, s5 = n2.renderState;
        if (e4) {
          var a6 = r4 && "string" == typeof r4.as ? r4.as : "script";
          if ("script" === a6) {
            if (o5.moduleScriptResources.hasOwnProperty(e4)) return;
            a6 = [], o5.moduleScriptResources[e4] = !r4 || "string" != typeof r4.crossOrigin && "string" != typeof r4.integrity ? en : [r4.crossOrigin, r4.integrity], s5.preloads.moduleScripts.set(e4, a6);
          } else {
            if (o5.moduleUnknownResources.hasOwnProperty(a6)) {
              var i5 = o5.unknownResources[a6];
              if (i5.hasOwnProperty(e4)) return;
            } else i5 = {}, o5.moduleUnknownResources[a6] = i5;
            a6 = [], i5[e4] = en;
          }
          pushLinkImpl$1(a6, Br({ rel: "modulepreload", href: e4 }, r4)), s5.bulkPreloads.add(a6), enqueueFlush$1(n2);
        }
      } else Zr.m(e4, r4);
    }, "m"), X: /* @__PURE__ */ __name(function(e4, r4) {
      var n2 = resolveRequest();
      if (n2) {
        var o5 = n2.resumableState, s5 = n2.renderState;
        if (e4) {
          var a6 = o5.scriptResources.hasOwnProperty(e4) ? o5.scriptResources[e4] : void 0;
          null !== a6 && (o5.scriptResources[e4] = null, r4 = Br({ src: e4, async: true }, r4), a6 && (2 === a6.length && adoptPreloadCredentials$1(r4, a6), e4 = s5.preloads.scripts.get(e4)) && (e4.length = 0), e4 = [], s5.scripts.add(e4), pushScriptImpl$1(e4, r4), enqueueFlush$1(n2));
        }
      } else Zr.X(e4, r4);
    }, "X"), S: /* @__PURE__ */ __name(function(e4, r4, n2) {
      var o5 = resolveRequest();
      if (o5) {
        var s5 = o5.resumableState, a6 = o5.renderState;
        if (e4) {
          r4 = r4 || "default";
          var i5 = a6.styles.get(r4), l5 = s5.styleResources.hasOwnProperty(e4) ? s5.styleResources[e4] : void 0;
          null !== l5 && (s5.styleResources[e4] = null, i5 || (i5 = { precedence: stringToChunk(escapeTextForBrowser$1(r4)), rules: [], hrefs: [], sheets: /* @__PURE__ */ new Map() }, a6.styles.set(r4, i5)), r4 = { state: 0, props: Br({ rel: "stylesheet", href: e4, "data-precedence": r4 }, n2) }, l5 && (2 === l5.length && adoptPreloadCredentials$1(r4.props, l5), (a6 = a6.preloads.stylesheets.get(e4)) && 0 < a6.length ? a6.length = 0 : r4.state = 1), i5.sheets.set(e4, r4), enqueueFlush$1(o5));
        }
      } else Zr.S(e4, r4, n2);
    }, "S"), M: /* @__PURE__ */ __name(function(e4, r4) {
      var n2 = resolveRequest();
      if (n2) {
        var o5 = n2.resumableState, s5 = n2.renderState;
        if (e4) {
          var a6 = o5.moduleScriptResources.hasOwnProperty(e4) ? o5.moduleScriptResources[e4] : void 0;
          null !== a6 && (o5.moduleScriptResources[e4] = null, r4 = Br({ src: e4, type: "module", async: true }, r4), a6 && (2 === a6.length && adoptPreloadCredentials$1(r4, a6), e4 = s5.preloads.moduleScripts.get(e4)) && (e4.length = 0), e4 = [], s5.scripts.add(e4), pushScriptImpl$1(e4, r4), enqueueFlush$1(n2));
        }
      } else Zr.M(e4, r4);
    }, "M") };
    en = [];
    stringToPrecomputedChunk('"></template>');
    tn = stringToPrecomputedChunk("<script>");
    rn = stringToPrecomputedChunk("<\/script>");
    nn = stringToPrecomputedChunk('<script src="');
    on2 = stringToPrecomputedChunk('<script type="module" src="');
    sn = stringToPrecomputedChunk('" nonce="');
    an = stringToPrecomputedChunk('" integrity="');
    ln = stringToPrecomputedChunk('" crossorigin="');
    un = stringToPrecomputedChunk('" async=""><\/script>');
    cn = /(<\/|<)(s)(cript)/gi;
    __name(scriptReplacer$1, "scriptReplacer$1");
    hn = stringToPrecomputedChunk('<script type="importmap">');
    dn = stringToPrecomputedChunk("<\/script>");
    __name(createRenderState$1, "createRenderState$1");
    __name(createResumableState$1, "createResumableState$1");
    __name(createPreambleState$1, "createPreambleState$1");
    __name(createFormatContext$1, "createFormatContext$1");
    __name(createRootFormatContext, "createRootFormatContext");
    __name(getChildFormatContext$1, "getChildFormatContext$1");
    pn = stringToPrecomputedChunk("<!-- -->");
    __name(pushTextInstance$1, "pushTextInstance$1");
    fn = /* @__PURE__ */ new Map();
    mn = stringToPrecomputedChunk(' style="');
    gn = stringToPrecomputedChunk(":");
    yn = stringToPrecomputedChunk(";");
    __name(pushStyleAttribute$1, "pushStyleAttribute$1");
    bn = stringToPrecomputedChunk(" ");
    vn = stringToPrecomputedChunk('="');
    kn = stringToPrecomputedChunk('"');
    Sn = stringToPrecomputedChunk('=""');
    __name(pushBooleanAttribute$1, "pushBooleanAttribute$1");
    __name(pushStringAttribute$1, "pushStringAttribute$1");
    Cn = stringToPrecomputedChunk(escapeTextForBrowser$1("javascript:throw new Error('React form unexpectedly submitted.')"));
    wn = stringToPrecomputedChunk('<input type="hidden"');
    __name(pushAdditionalFormField$1, "pushAdditionalFormField$1");
    __name(validateAdditionalFormField$1, "validateAdditionalFormField$1");
    __name(getCustomFormFields$1, "getCustomFormFields$1");
    __name(pushFormActionAttribute$1, "pushFormActionAttribute$1");
    __name(pushAttribute$1, "pushAttribute$1");
    Pn = stringToPrecomputedChunk(">");
    xn = stringToPrecomputedChunk("/>");
    __name(pushInnerHTML$1, "pushInnerHTML$1");
    Rn = stringToPrecomputedChunk(' selected=""');
    Tn = stringToPrecomputedChunk(`addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`);
    __name(injectFormReplayingRuntime$1, "injectFormReplayingRuntime$1");
    $n = stringToPrecomputedChunk("<!--F!-->");
    En = stringToPrecomputedChunk("<!--F-->");
    __name(pushLinkImpl$1, "pushLinkImpl$1");
    Fn = /(<\/|<)(s)(tyle)/gi;
    __name(styleReplacer$1, "styleReplacer$1");
    __name(pushSelfClosing$1, "pushSelfClosing$1");
    __name(pushTitleImpl$1, "pushTitleImpl$1");
    __name(pushScriptImpl$1, "pushScriptImpl$1");
    __name(pushStartSingletonElement$1, "pushStartSingletonElement$1");
    __name(pushStartGenericElement$1, "pushStartGenericElement$1");
    In = stringToPrecomputedChunk("\n");
    _n = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    An = /* @__PURE__ */ new Map();
    __name(startChunkForTag$1, "startChunkForTag$1");
    Mn = stringToPrecomputedChunk("<!DOCTYPE html>");
    __name(pushStartInstance$1, "pushStartInstance$1");
    On = /* @__PURE__ */ new Map();
    __name(endChunkForTag$1, "endChunkForTag$1");
    __name(hoistPreambleState$1, "hoistPreambleState$1");
    __name(writeBootstrap$1, "writeBootstrap$1");
    Ln = stringToPrecomputedChunk('<template id="');
    Nn = stringToPrecomputedChunk('"></template>');
    Bn = stringToPrecomputedChunk("<!--$-->");
    jn = stringToPrecomputedChunk('<!--$?--><template id="');
    Dn = stringToPrecomputedChunk('"></template>');
    zn = stringToPrecomputedChunk("<!--$!-->");
    Hn = stringToPrecomputedChunk("<!--/$-->");
    Vn = stringToPrecomputedChunk("<template");
    qn = stringToPrecomputedChunk('"');
    Wn = stringToPrecomputedChunk(' data-dgst="');
    stringToPrecomputedChunk(' data-msg="'), stringToPrecomputedChunk(' data-stck="'), stringToPrecomputedChunk(' data-cstck="');
    Un = stringToPrecomputedChunk("></template>");
    __name(writeStartPendingSuspenseBoundary$1, "writeStartPendingSuspenseBoundary$1");
    Kn = stringToPrecomputedChunk("<!--");
    Gn = stringToPrecomputedChunk("-->");
    __name(writePreambleContribution$1, "writePreambleContribution$1");
    Jn = stringToPrecomputedChunk('<div hidden id="');
    Xn = stringToPrecomputedChunk('">');
    Qn = stringToPrecomputedChunk("</div>");
    Yn = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
    Zn = stringToPrecomputedChunk('">');
    eo = stringToPrecomputedChunk("</svg>");
    to = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
    ro = stringToPrecomputedChunk('">');
    no = stringToPrecomputedChunk("</math>");
    oo = stringToPrecomputedChunk('<table hidden id="');
    so = stringToPrecomputedChunk('">');
    ao = stringToPrecomputedChunk("</table>");
    io = stringToPrecomputedChunk('<table hidden><tbody id="');
    lo = stringToPrecomputedChunk('">');
    uo = stringToPrecomputedChunk("</tbody></table>");
    co = stringToPrecomputedChunk('<table hidden><tr id="');
    ho = stringToPrecomputedChunk('">');
    po = stringToPrecomputedChunk("</tr></table>");
    fo = stringToPrecomputedChunk('<table hidden><colgroup id="');
    mo = stringToPrecomputedChunk('">');
    go = stringToPrecomputedChunk("</colgroup></table>");
    yo = stringToPrecomputedChunk('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    bo = stringToPrecomputedChunk('$RS("');
    vo = stringToPrecomputedChunk('","');
    ko = stringToPrecomputedChunk('")<\/script>');
    stringToPrecomputedChunk('<template data-rsi="" data-sid="'), stringToPrecomputedChunk('" data-pid="');
    So = stringToPrecomputedChunk('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("');
    Co = stringToPrecomputedChunk('$RC("');
    wo2 = stringToPrecomputedChunk('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("');
    Po = stringToPrecomputedChunk('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("');
    xo = stringToPrecomputedChunk('$RR("');
    Ro = stringToPrecomputedChunk('","');
    To = stringToPrecomputedChunk('",');
    $o = stringToPrecomputedChunk('"');
    Eo = stringToPrecomputedChunk(")<\/script>");
    stringToPrecomputedChunk('<template data-rci="" data-bid="'), stringToPrecomputedChunk('<template data-rri="" data-bid="'), stringToPrecomputedChunk('" data-sid="'), stringToPrecomputedChunk('" data-sty="');
    Fo = stringToPrecomputedChunk('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("');
    Io = stringToPrecomputedChunk('$RX("');
    _o = stringToPrecomputedChunk('"');
    Ao = stringToPrecomputedChunk(",");
    Mo = stringToPrecomputedChunk(")<\/script>");
    stringToPrecomputedChunk('<template data-rxi="" data-bid="'), stringToPrecomputedChunk('" data-dgst="'), stringToPrecomputedChunk('" data-msg="'), stringToPrecomputedChunk('" data-stck="'), stringToPrecomputedChunk('" data-cstck="');
    Oo = /[<\u2028\u2029]/g;
    __name(escapeJSStringsForInstructionScripts$1, "escapeJSStringsForInstructionScripts$1");
    Lo = /[&><\u2028\u2029]/g;
    __name(escapeJSObjectForInstructionScripts$1, "escapeJSObjectForInstructionScripts$1");
    No = stringToPrecomputedChunk('<style media="not all" data-precedence="');
    Bo = stringToPrecomputedChunk('" data-href="');
    jo = stringToPrecomputedChunk('">');
    Do = stringToPrecomputedChunk("</style>");
    zo = false;
    Ho = true;
    __name(flushStyleTagsLateForBoundary$1, "flushStyleTagsLateForBoundary$1");
    __name(hasStylesToHoist$1, "hasStylesToHoist$1");
    __name(writeHoistablesForBoundary$1, "writeHoistablesForBoundary$1");
    __name(flushResource$1, "flushResource$1");
    Vo = [];
    __name(flushStyleInPreamble$1, "flushStyleInPreamble$1");
    qo = stringToPrecomputedChunk('<style data-precedence="');
    Wo = stringToPrecomputedChunk('" data-href="');
    Uo = stringToPrecomputedChunk(" ");
    Ko = stringToPrecomputedChunk('">');
    Go = stringToPrecomputedChunk("</style>");
    __name(flushStylesInPreamble$1, "flushStylesInPreamble$1");
    __name(preloadLateStyle$1, "preloadLateStyle$1");
    __name(preloadLateStyles$1, "preloadLateStyles$1");
    Jo = stringToPrecomputedChunk("[");
    Xo = stringToPrecomputedChunk(",[");
    Qo = stringToPrecomputedChunk(",");
    Yo = stringToPrecomputedChunk("]");
    __name(writeStyleResourceAttributeInJS$1, "writeStyleResourceAttributeInJS$1");
    __name(createHoistableState$1, "createHoistableState$1");
    __name(adoptPreloadCredentials$1, "adoptPreloadCredentials$1");
    __name(getPreloadAsHeader$1, "getPreloadAsHeader$1");
    Zo = /[<>\r\n]/g;
    __name(escapeHrefForLinkHeaderURLContextReplacer$1, "escapeHrefForLinkHeaderURLContextReplacer$1");
    es = /["';,\r\n]/g;
    __name(escapeStringForLinkHeaderQuotedParamValueContextReplacer$1, "escapeStringForLinkHeaderQuotedParamValueContextReplacer$1");
    __name(hoistStyleQueueDependency$1, "hoistStyleQueueDependency$1");
    __name(hoistStylesheetDependency$1, "hoistStylesheetDependency$1");
    ts = Function.prototype.bind;
    rs = "function" == typeof AsyncLocalStorage;
    ns = rs ? new AsyncLocalStorage() : null;
    os = Symbol.for("react.client.reference");
    __name(getComponentNameFromType$1, "getComponentNameFromType$1");
    ss = {};
    as = null;
    __name(popToNearestCommonAncestor$1, "popToNearestCommonAncestor$1");
    __name(popAllPrevious$1, "popAllPrevious$1");
    __name(pushAllNext$1, "pushAllNext$1");
    __name(popPreviousToCommonLevel$1, "popPreviousToCommonLevel$1");
    __name(popNextToCommonLevel$1, "popNextToCommonLevel$1");
    __name(switchContext$1, "switchContext$1");
    is = { enqueueSetState: /* @__PURE__ */ __name(function(e4, r4) {
      null !== (e4 = e4._reactInternals).queue && e4.queue.push(r4);
    }, "enqueueSetState"), enqueueReplaceState: /* @__PURE__ */ __name(function(e4, r4) {
      (e4 = e4._reactInternals).replace = true, e4.queue = [r4];
    }, "enqueueReplaceState"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
    }, "enqueueForceUpdate") };
    ls = { id: 1, overflow: "" };
    __name(pushTreeContext$1, "pushTreeContext$1");
    us = Math.clz32 ? Math.clz32 : function(e4) {
      return e4 >>>= 0, 0 === e4 ? 32 : 31 - (cs(e4) / hs | 0) | 0;
    };
    cs = Math.log;
    hs = Math.LN2;
    ds = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
    __name(noop$2$1, "noop$2$1");
    ps = null;
    __name(getSuspendedThenable$1, "getSuspendedThenable$1");
    fs = "function" == typeof Object.is ? Object.is : function(e4, r4) {
      return e4 === r4 && (0 !== e4 || 1 / e4 == 1 / r4) || e4 != e4 && r4 != r4;
    };
    ms = null;
    gs = null;
    ys = null;
    bs = null;
    vs = null;
    ks = null;
    Ss = false;
    Cs = false;
    ws = 0;
    Ps = 0;
    xs = -1;
    Rs = 0;
    Ts = null;
    $s = null;
    Es = 0;
    __name(resolveCurrentlyRenderingComponent$1, "resolveCurrentlyRenderingComponent$1");
    __name(createHook$1, "createHook$1");
    __name(createWorkInProgressHook$1, "createWorkInProgressHook$1");
    __name(getThenableStateAfterSuspending$1, "getThenableStateAfterSuspending$1");
    __name(resetHooksState$1, "resetHooksState$1");
    __name(basicStateReducer$1, "basicStateReducer$1");
    __name(useReducer$1, "useReducer$1");
    __name(useMemo$1, "useMemo$1");
    __name(dispatchAction$1, "dispatchAction$1");
    __name(unsupportedStartTransition$1, "unsupportedStartTransition$1");
    __name(unsupportedSetOptimisticState$1, "unsupportedSetOptimisticState$1");
    __name(useActionState$1, "useActionState$1");
    __name(unwrapThenable$1, "unwrapThenable$1");
    __name(unsupportedRefresh$1, "unsupportedRefresh$1");
    __name(noop$1$1, "noop$1$1");
    _s = { readContext: /* @__PURE__ */ __name(function(e4) {
      return e4._currentValue;
    }, "readContext"), use: /* @__PURE__ */ __name(function(e4) {
      if (null !== e4 && "object" == typeof e4) {
        if ("function" == typeof e4.then) return unwrapThenable$1(e4);
        if (e4.$$typeof === vr) return e4._currentValue;
      }
      throw Error("An unsupported type was passed to use(): " + String(e4));
    }, "use"), useContext: /* @__PURE__ */ __name(function(e4) {
      return resolveCurrentlyRenderingComponent$1(), e4._currentValue;
    }, "useContext"), useMemo: useMemo$1, useReducer: useReducer$1, useRef: /* @__PURE__ */ __name(function(e4) {
      ms = resolveCurrentlyRenderingComponent$1();
      var r4 = (ks = createWorkInProgressHook$1()).memoizedState;
      return null === r4 ? (e4 = { current: e4 }, ks.memoizedState = e4) : r4;
    }, "useRef"), useState: /* @__PURE__ */ __name(function(e4) {
      return useReducer$1(basicStateReducer$1, e4);
    }, "useState"), useInsertionEffect: noop$1$1, useLayoutEffect: noop$1$1, useCallback: /* @__PURE__ */ __name(function(e4, r4) {
      return useMemo$1(function() {
        return e4;
      }, r4);
    }, "useCallback"), useImperativeHandle: noop$1$1, useEffect: noop$1$1, useDebugValue: noop$1$1, useDeferredValue: /* @__PURE__ */ __name(function(e4, r4) {
      return resolveCurrentlyRenderingComponent$1(), void 0 !== r4 ? r4 : e4;
    }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
      return resolveCurrentlyRenderingComponent$1(), [false, unsupportedStartTransition$1];
    }, "useTransition"), useId: /* @__PURE__ */ __name(function() {
      var e4 = gs.treeContext, r4 = e4.overflow;
      e4 = ((e4 = e4.id) & ~(1 << 32 - us(e4) - 1)).toString(32) + r4;
      var n2 = As;
      if (null === n2) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      return r4 = ws++, e4 = "\xAB" + n2.idPrefix + "R" + e4, 0 < r4 && (e4 += "H" + r4.toString(32)), e4 + "\xBB";
    }, "useId"), useSyncExternalStore: /* @__PURE__ */ __name(function(e4, r4, n2) {
      if (void 0 === n2) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n2();
    }, "useSyncExternalStore"), useOptimistic: /* @__PURE__ */ __name(function(e4) {
      return resolveCurrentlyRenderingComponent$1(), [e4, unsupportedSetOptimisticState$1];
    }, "useOptimistic"), useActionState: useActionState$1, useFormState: useActionState$1, useHostTransitionStatus: /* @__PURE__ */ __name(function() {
      return resolveCurrentlyRenderingComponent$1(), Yr;
    }, "useHostTransitionStatus"), useMemoCache: /* @__PURE__ */ __name(function(e4) {
      for (var r4 = Array(e4), n2 = 0; n2 < e4; n2++) r4[n2] = $r;
      return r4;
    }, "useMemoCache"), useCacheRefresh: /* @__PURE__ */ __name(function() {
      return unsupportedRefresh$1;
    }, "useCacheRefresh") };
    As = null;
    Ms = { getCacheForType: /* @__PURE__ */ __name(function() {
      throw Error("Not implemented.");
    }, "getCacheForType") };
    __name(prepareStackTrace, "prepareStackTrace");
    __name(describeBuiltInComponentFrame$1, "describeBuiltInComponentFrame$1");
    Os = false;
    __name(describeNativeComponentFrame$1, "describeNativeComponentFrame$1");
    __name(describeComponentStackByType$1, "describeComponentStackByType$1");
    __name(defaultErrorHandler$1, "defaultErrorHandler$1");
    __name(noop$3, "noop$3");
    __name(RequestInstance$1, "RequestInstance$1");
    __name(createRequest$1, "createRequest$1");
    Ls = null;
    __name(resolveRequest, "resolveRequest");
    __name(pingTask$1, "pingTask$1");
    __name(createSuspenseBoundary$1, "createSuspenseBoundary$1");
    __name(createRenderTask$1, "createRenderTask$1");
    __name(createReplayTask$1, "createReplayTask$1");
    __name(createPendingSegment$1, "createPendingSegment$1");
    __name(pushComponentStack$1, "pushComponentStack$1");
    __name(getThrownInfo$1, "getThrownInfo$1");
    __name(logRecoverableError$1, "logRecoverableError$1");
    __name(fatalError$1, "fatalError$1");
    __name(renderWithHooks$1, "renderWithHooks$1");
    __name(finishFunctionComponent$1, "finishFunctionComponent$1");
    __name(renderElement$1, "renderElement$1");
    __name(resumeNode$1, "resumeNode$1");
    __name(renderNodeDestructive$1, "renderNodeDestructive$1");
    __name(retryNode$1, "retryNode$1");
    __name(renderChildrenArray$1, "renderChildrenArray$1");
    __name(untrackBoundary$1, "untrackBoundary$1");
    __name(spawnNewSuspendedReplayTask$1, "spawnNewSuspendedReplayTask$1");
    __name(spawnNewSuspendedRenderTask$1, "spawnNewSuspendedRenderTask$1");
    __name(renderNode$1, "renderNode$1");
    __name(abortTaskSoft$1, "abortTaskSoft$1");
    __name(abortRemainingReplayNodes$1, "abortRemainingReplayNodes$1");
    __name(abortTask$1, "abortTask$1");
    __name(safelyEmitEarlyPreloads$1, "safelyEmitEarlyPreloads$1");
    __name(completeShell$1, "completeShell$1");
    __name(completeAll$1, "completeAll$1");
    __name(queueCompletedSegment$1, "queueCompletedSegment$1");
    __name(finishedTask$1, "finishedTask$1");
    __name(performWork$1, "performWork$1");
    __name(preparePreambleFromSubtree$1, "preparePreambleFromSubtree$1");
    __name(preparePreambleFromSegment$1, "preparePreambleFromSegment$1");
    __name(preparePreamble$1, "preparePreamble$1");
    __name(flushSubtree$1, "flushSubtree$1");
    __name(flushSegment$1, "flushSegment$1");
    __name(flushSegmentContainer$1, "flushSegmentContainer$1");
    __name(flushCompletedBoundary$1, "flushCompletedBoundary$1");
    __name(flushPartiallyCompletedSegment$1, "flushPartiallyCompletedSegment$1");
    __name(flushCompletedQueues$1, "flushCompletedQueues$1");
    __name(startWork, "startWork");
    __name(enqueueEarlyPreloadsAfterInitialWork, "enqueueEarlyPreloadsAfterInitialWork");
    __name(enqueueFlush$1, "enqueueFlush$1");
    __name(startFlowing$1, "startFlowing$1");
    __name(abort$1, "abort$1");
    __name(ensureCorrectIsomorphicReactVersion, "ensureCorrectIsomorphicReactVersion");
    ensureCorrectIsomorphicReactVersion(), ensureCorrectIsomorphicReactVersion(), ir2.prerender = function(e4, r4) {
      return new Promise(function(n2, o5) {
        var s5, a6 = r4 ? r4.onHeaders : void 0;
        a6 && (s5 = /* @__PURE__ */ __name(function(e5) {
          a6(new Headers(e5));
        }, "s"));
        var i5 = createResumableState$1(r4 ? r4.identifierPrefix : void 0, r4 && r4.unstable_externalRuntimeSrc, r4 ? r4.bootstrapScriptContent : void 0, r4 ? r4.bootstrapScripts : void 0, r4 ? r4.bootstrapModules : void 0), l5 = function(e5, r5, n3, o6, s6, a7, i6, l6, u4, c4, h4) {
          return (e5 = createRequest$1(e5, r5, n3, o6, s6, a7, i6, l6, u4, c4, h4, void 0)).trackedPostpones = { workingMap: /* @__PURE__ */ new Map(), rootNodes: [], rootSlots: null }, e5;
        }(e4, i5, createRenderState$1(i5, void 0, r4 ? r4.unstable_externalRuntimeSrc : void 0, r4 ? r4.importMap : void 0, s5, r4 ? r4.maxHeadersLength : void 0), createRootFormatContext(r4 ? r4.namespaceURI : void 0), r4 ? r4.progressiveChunkSize : void 0, r4 ? r4.onError : void 0, function() {
          var e5 = { prelude: new ReadableStream({ type: "bytes", pull: /* @__PURE__ */ __name(function(e6) {
            startFlowing$1(l5, e6);
          }, "pull"), cancel: /* @__PURE__ */ __name(function(e6) {
            l5.destination = null, abort$1(l5, e6);
          }, "cancel") }, { highWaterMark: 0 }) };
          n2(e5);
        }, void 0, void 0, o5, r4 ? r4.onPostpone : void 0);
        if (r4 && r4.signal) {
          var u3 = r4.signal;
          if (u3.aborted) abort$1(l5, u3.reason);
          else {
            var listener = /* @__PURE__ */ __name(function() {
              abort$1(l5, u3.reason), u3.removeEventListener("abort", listener);
            }, "listener");
            u3.addEventListener("abort", listener);
          }
        }
        startWork(l5);
      });
    }, ir2.renderToReadableStream = function(e4, r4) {
      return new Promise(function(n2, o5) {
        var s5, a6, i5, l5 = new Promise(function(e5, r5) {
          a6 = e5, s5 = r5;
        }), u3 = r4 ? r4.onHeaders : void 0;
        u3 && (i5 = /* @__PURE__ */ __name(function(e5) {
          u3(new Headers(e5));
        }, "i"));
        var c4 = createResumableState$1(r4 ? r4.identifierPrefix : void 0, r4 && r4.unstable_externalRuntimeSrc, r4 ? r4.bootstrapScriptContent : void 0, r4 ? r4.bootstrapScripts : void 0, r4 ? r4.bootstrapModules : void 0), h4 = createRequest$1(e4, c4, createRenderState$1(c4, r4 ? r4.nonce : void 0, r4 ? r4.unstable_externalRuntimeSrc : void 0, r4 ? r4.importMap : void 0, i5, r4 ? r4.maxHeadersLength : void 0), createRootFormatContext(r4 ? r4.namespaceURI : void 0), r4 ? r4.progressiveChunkSize : void 0, r4 ? r4.onError : void 0, a6, function() {
          var e5 = new ReadableStream({ type: "bytes", pull: /* @__PURE__ */ __name(function(e6) {
            startFlowing$1(h4, e6);
          }, "pull"), cancel: /* @__PURE__ */ __name(function(e6) {
            h4.destination = null, abort$1(h4, e6);
          }, "cancel") }, { highWaterMark: 0 });
          e5.allReady = l5, n2(e5);
        }, function(e5) {
          l5.catch(function() {
          }), o5(e5);
        }, s5, r4 ? r4.onPostpone : void 0, r4 ? r4.formState : void 0);
        if (r4 && r4.signal) {
          var p4 = r4.signal;
          if (p4.aborted) abort$1(h4, p4.reason);
          else {
            var listener = /* @__PURE__ */ __name(function() {
              abort$1(h4, p4.reason), p4.removeEventListener("abort", listener);
            }, "listener");
            p4.addEventListener("abort", listener);
          }
        }
        startWork(h4);
      });
    }, ir2.version = "19.1.0";
    Ns = {};
    Bs = Ce;
    js = Xe;
    __name(formatProdErrorMessage, "formatProdErrorMessage");
    Ds = Symbol.for("react.transitional.element");
    zs = Symbol.for("react.portal");
    Hs = Symbol.for("react.fragment");
    Vs = Symbol.for("react.strict_mode");
    qs = Symbol.for("react.profiler");
    Ws = Symbol.for("react.provider");
    Us = Symbol.for("react.consumer");
    Ks = Symbol.for("react.context");
    Gs = Symbol.for("react.forward_ref");
    Js = Symbol.for("react.suspense");
    Xs = Symbol.for("react.suspense_list");
    Qs = Symbol.for("react.memo");
    Ys = Symbol.for("react.lazy");
    Zs = Symbol.for("react.scope");
    ea = Symbol.for("react.activity");
    ta = Symbol.for("react.legacy_hidden");
    ra = Symbol.for("react.memo_cache_sentinel");
    na = Symbol.for("react.view_transition");
    oa = Symbol.iterator;
    sa = Array.isArray;
    __name(murmurhash3_32_gc, "murmurhash3_32_gc");
    aa = Object.assign;
    ia = Object.prototype.hasOwnProperty;
    la = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
    ua = {};
    ca = {};
    __name(isAttributeNameSafe, "isAttributeNameSafe");
    ha = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    da = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]);
    pa = /["'&<>]/;
    __name(escapeTextForBrowser, "escapeTextForBrowser");
    fa = /([A-Z])/g;
    ma = /^ms-/;
    ga = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    __name(sanitizeURL, "sanitizeURL");
    ya = Bs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    ba = js.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    va = { pending: false, data: null, method: null, action: null };
    ka = ba.d;
    ba.d = { f: ka.f, r: ka.r, D: /* @__PURE__ */ __name(function(e4) {
      var r4 = yi || null;
      if (r4) {
        var n2 = r4.resumableState, o5 = r4.renderState;
        if ("string" == typeof e4 && e4) {
          var s5, a6;
          if (!n2.dnsResources.hasOwnProperty(e4)) n2.dnsResources[e4] = null, (a6 = (n2 = o5.headers) && 0 < n2.remainingCapacity) && (s5 = "<" + ("" + e4).replace(Ma, escapeHrefForLinkHeaderURLContextReplacer) + ">; rel=dns-prefetch", a6 = 0 <= (n2.remainingCapacity -= s5.length + 2)), a6 ? (o5.resets.dns[e4] = null, n2.preconnects && (n2.preconnects += ", "), n2.preconnects += s5) : (pushLinkImpl(s5 = [], { href: e4, rel: "dns-prefetch" }), o5.preconnects.add(s5));
          enqueueFlush(r4);
        }
      } else ka.D(e4);
    }, "D"), C: /* @__PURE__ */ __name(function(e4, r4) {
      var n2 = yi || null;
      if (n2) {
        var o5 = n2.resumableState, s5 = n2.renderState;
        if ("string" == typeof e4 && e4) {
          var a6 = "use-credentials" === r4 ? "credentials" : "string" == typeof r4 ? "anonymous" : "default";
          if (!o5.connectResources[a6].hasOwnProperty(e4)) {
            var i5, l5;
            if (o5.connectResources[a6][e4] = null, l5 = (o5 = s5.headers) && 0 < o5.remainingCapacity) {
              if (l5 = "<" + ("" + e4).replace(Ma, escapeHrefForLinkHeaderURLContextReplacer) + ">; rel=preconnect", "string" == typeof r4) l5 += '; crossorigin="' + ("" + r4).replace(Oa, escapeStringForLinkHeaderQuotedParamValueContextReplacer) + '"';
              i5 = l5, l5 = 0 <= (o5.remainingCapacity -= i5.length + 2);
            }
            l5 ? (s5.resets.connect[a6][e4] = null, o5.preconnects && (o5.preconnects += ", "), o5.preconnects += i5) : (pushLinkImpl(a6 = [], { rel: "preconnect", href: e4, crossOrigin: r4 }), s5.preconnects.add(a6));
          }
          enqueueFlush(n2);
        }
      } else ka.C(e4, r4);
    }, "C"), L: /* @__PURE__ */ __name(function(e4, r4, n2) {
      var o5 = yi || null;
      if (o5) {
        var s5 = o5.resumableState, a6 = o5.renderState;
        if (r4 && e4) {
          switch (r4) {
            case "image":
              if (n2) var i5 = n2.imageSrcSet, l5 = n2.imageSizes, u3 = n2.fetchPriority;
              var c4, h4 = i5 ? i5 + "\n" + (l5 || "") : e4;
              if (s5.imageResources.hasOwnProperty(h4)) return;
              s5.imageResources[h4] = Sa, (s5 = a6.headers) && 0 < s5.remainingCapacity && "string" != typeof i5 && "high" === u3 && (c4 = getPreloadAsHeader(e4, r4, n2), 0 <= (s5.remainingCapacity -= c4.length + 2)) ? (a6.resets.image[h4] = Sa, s5.highImagePreloads && (s5.highImagePreloads += ", "), s5.highImagePreloads += c4) : (pushLinkImpl(s5 = [], aa({ rel: "preload", href: i5 ? void 0 : e4, as: r4 }, n2)), "high" === u3 ? a6.highImagePreloads.add(s5) : (a6.bulkPreloads.add(s5), a6.preloads.images.set(h4, s5)));
              break;
            case "style":
              if (s5.styleResources.hasOwnProperty(e4)) return;
              pushLinkImpl(i5 = [], aa({ rel: "preload", href: e4, as: r4 }, n2)), s5.styleResources[e4] = !n2 || "string" != typeof n2.crossOrigin && "string" != typeof n2.integrity ? Sa : [n2.crossOrigin, n2.integrity], a6.preloads.stylesheets.set(e4, i5), a6.bulkPreloads.add(i5);
              break;
            case "script":
              if (s5.scriptResources.hasOwnProperty(e4)) return;
              i5 = [], a6.preloads.scripts.set(e4, i5), a6.bulkPreloads.add(i5), pushLinkImpl(i5, aa({ rel: "preload", href: e4, as: r4 }, n2)), s5.scriptResources[e4] = !n2 || "string" != typeof n2.crossOrigin && "string" != typeof n2.integrity ? Sa : [n2.crossOrigin, n2.integrity];
              break;
            default:
              if (s5.unknownResources.hasOwnProperty(r4)) {
                if ((i5 = s5.unknownResources[r4]).hasOwnProperty(e4)) return;
              } else i5 = {}, s5.unknownResources[r4] = i5;
              if (i5[e4] = Sa, (s5 = a6.headers) && 0 < s5.remainingCapacity && "font" === r4 && (h4 = getPreloadAsHeader(e4, r4, n2), 0 <= (s5.remainingCapacity -= h4.length + 2))) a6.resets.font[e4] = Sa, s5.fontPreloads && (s5.fontPreloads += ", "), s5.fontPreloads += h4;
              else if ("font" === (pushLinkImpl(s5 = [], e4 = aa({ rel: "preload", href: e4, as: r4 }, n2)), r4)) a6.fontPreloads.add(s5);
              else a6.bulkPreloads.add(s5);
          }
          enqueueFlush(o5);
        }
      } else ka.L(e4, r4, n2);
    }, "L"), m: /* @__PURE__ */ __name(function(e4, r4) {
      var n2 = yi || null;
      if (n2) {
        var o5 = n2.resumableState, s5 = n2.renderState;
        if (e4) {
          var a6 = r4 && "string" == typeof r4.as ? r4.as : "script";
          if ("script" === a6) {
            if (o5.moduleScriptResources.hasOwnProperty(e4)) return;
            a6 = [], o5.moduleScriptResources[e4] = !r4 || "string" != typeof r4.crossOrigin && "string" != typeof r4.integrity ? Sa : [r4.crossOrigin, r4.integrity], s5.preloads.moduleScripts.set(e4, a6);
          } else {
            if (o5.moduleUnknownResources.hasOwnProperty(a6)) {
              var i5 = o5.unknownResources[a6];
              if (i5.hasOwnProperty(e4)) return;
            } else i5 = {}, o5.moduleUnknownResources[a6] = i5;
            a6 = [], i5[e4] = Sa;
          }
          pushLinkImpl(a6, aa({ rel: "modulepreload", href: e4 }, r4)), s5.bulkPreloads.add(a6), enqueueFlush(n2);
        }
      } else ka.m(e4, r4);
    }, "m"), X: /* @__PURE__ */ __name(function(e4, r4) {
      var n2 = yi || null;
      if (n2) {
        var o5 = n2.resumableState, s5 = n2.renderState;
        if (e4) {
          var a6 = o5.scriptResources.hasOwnProperty(e4) ? o5.scriptResources[e4] : void 0;
          null !== a6 && (o5.scriptResources[e4] = null, r4 = aa({ src: e4, async: true }, r4), a6 && (2 === a6.length && adoptPreloadCredentials(r4, a6), e4 = s5.preloads.scripts.get(e4)) && (e4.length = 0), e4 = [], s5.scripts.add(e4), pushScriptImpl(e4, r4), enqueueFlush(n2));
        }
      } else ka.X(e4, r4);
    }, "X"), S: /* @__PURE__ */ __name(function(e4, r4, n2) {
      var o5 = yi || null;
      if (o5) {
        var s5 = o5.resumableState, a6 = o5.renderState;
        if (e4) {
          r4 = r4 || "default";
          var i5 = a6.styles.get(r4), l5 = s5.styleResources.hasOwnProperty(e4) ? s5.styleResources[e4] : void 0;
          null !== l5 && (s5.styleResources[e4] = null, i5 || (i5 = { precedence: escapeTextForBrowser(r4), rules: [], hrefs: [], sheets: /* @__PURE__ */ new Map() }, a6.styles.set(r4, i5)), r4 = { state: 0, props: aa({ rel: "stylesheet", href: e4, "data-precedence": r4 }, n2) }, l5 && (2 === l5.length && adoptPreloadCredentials(r4.props, l5), (a6 = a6.preloads.stylesheets.get(e4)) && 0 < a6.length ? a6.length = 0 : r4.state = 1), i5.sheets.set(e4, r4), enqueueFlush(o5));
        }
      } else ka.S(e4, r4, n2);
    }, "S"), M: /* @__PURE__ */ __name(function(e4, r4) {
      var n2 = yi || null;
      if (n2) {
        var o5 = n2.resumableState, s5 = n2.renderState;
        if (e4) {
          var a6 = o5.moduleScriptResources.hasOwnProperty(e4) ? o5.moduleScriptResources[e4] : void 0;
          null !== a6 && (o5.moduleScriptResources[e4] = null, r4 = aa({ src: e4, type: "module", async: true }, r4), a6 && (2 === a6.length && adoptPreloadCredentials(r4, a6), e4 = s5.preloads.moduleScripts.get(e4)) && (e4.length = 0), e4 = [], s5.scripts.add(e4), pushScriptImpl(e4, r4), enqueueFlush(n2));
        }
      } else ka.M(e4, r4);
    }, "M") };
    Sa = [];
    Ca = /(<\/|<)(s)(cript)/gi;
    __name(scriptReplacer, "scriptReplacer");
    __name(createPreambleState, "createPreambleState");
    __name(createFormatContext, "createFormatContext");
    __name(getChildFormatContext, "getChildFormatContext");
    wa = /* @__PURE__ */ new Map();
    __name(pushStyleAttribute, "pushStyleAttribute");
    __name(pushBooleanAttribute, "pushBooleanAttribute");
    __name(pushStringAttribute, "pushStringAttribute");
    Pa = escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')");
    __name(pushAdditionalFormField, "pushAdditionalFormField");
    __name(validateAdditionalFormField, "validateAdditionalFormField");
    __name(getCustomFormFields, "getCustomFormFields");
    __name(pushFormActionAttribute, "pushFormActionAttribute");
    __name(pushAttribute, "pushAttribute");
    __name(pushInnerHTML, "pushInnerHTML");
    __name(injectFormReplayingRuntime, "injectFormReplayingRuntime");
    __name(pushLinkImpl, "pushLinkImpl");
    xa = /(<\/|<)(s)(tyle)/gi;
    __name(styleReplacer, "styleReplacer");
    __name(pushSelfClosing, "pushSelfClosing");
    __name(pushTitleImpl, "pushTitleImpl");
    __name(pushScriptImpl, "pushScriptImpl");
    __name(pushStartSingletonElement, "pushStartSingletonElement");
    __name(pushStartGenericElement, "pushStartGenericElement");
    Ra = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    Ta = /* @__PURE__ */ new Map();
    __name(startChunkForTag, "startChunkForTag");
    __name(pushStartInstance, "pushStartInstance");
    $a = /* @__PURE__ */ new Map();
    __name(endChunkForTag, "endChunkForTag");
    __name(hoistPreambleState, "hoistPreambleState");
    __name(writeBootstrap, "writeBootstrap");
    __name(writeStartPendingSuspenseBoundary, "writeStartPendingSuspenseBoundary");
    __name(writePreambleContribution, "writePreambleContribution");
    Ea = /[<\u2028\u2029]/g;
    __name(escapeJSStringsForInstructionScripts, "escapeJSStringsForInstructionScripts");
    Fa = /[&><\u2028\u2029]/g;
    __name(escapeJSObjectForInstructionScripts, "escapeJSObjectForInstructionScripts");
    Ia = false;
    _a = true;
    __name(flushStyleTagsLateForBoundary, "flushStyleTagsLateForBoundary");
    __name(hasStylesToHoist, "hasStylesToHoist");
    __name(writeHoistablesForBoundary, "writeHoistablesForBoundary");
    __name(flushResource, "flushResource");
    Aa = [];
    __name(flushStyleInPreamble, "flushStyleInPreamble");
    __name(flushStylesInPreamble, "flushStylesInPreamble");
    __name(preloadLateStyle, "preloadLateStyle");
    __name(preloadLateStyles, "preloadLateStyles");
    __name(writeStyleResourceAttributeInJS, "writeStyleResourceAttributeInJS");
    __name(createHoistableState, "createHoistableState");
    __name(adoptPreloadCredentials, "adoptPreloadCredentials");
    __name(getPreloadAsHeader, "getPreloadAsHeader");
    Ma = /[<>\r\n]/g;
    __name(escapeHrefForLinkHeaderURLContextReplacer, "escapeHrefForLinkHeaderURLContextReplacer");
    Oa = /["';,\r\n]/g;
    __name(escapeStringForLinkHeaderQuotedParamValueContextReplacer, "escapeStringForLinkHeaderQuotedParamValueContextReplacer");
    __name(hoistStyleQueueDependency, "hoistStyleQueueDependency");
    __name(hoistStylesheetDependency, "hoistStylesheetDependency");
    __name(pushTextInstance, "pushTextInstance");
    __name(pushSegmentFinale, "pushSegmentFinale");
    La = Function.prototype.bind;
    Na = Symbol.for("react.client.reference");
    __name(getComponentNameFromType, "getComponentNameFromType");
    Ba = {};
    ja = null;
    __name(popToNearestCommonAncestor, "popToNearestCommonAncestor");
    __name(popAllPrevious, "popAllPrevious");
    __name(pushAllNext, "pushAllNext");
    __name(popPreviousToCommonLevel, "popPreviousToCommonLevel");
    __name(popNextToCommonLevel, "popNextToCommonLevel");
    __name(switchContext, "switchContext");
    Da = { enqueueSetState: /* @__PURE__ */ __name(function(e4, r4) {
      null !== (e4 = e4._reactInternals).queue && e4.queue.push(r4);
    }, "enqueueSetState"), enqueueReplaceState: /* @__PURE__ */ __name(function(e4, r4) {
      (e4 = e4._reactInternals).replace = true, e4.queue = [r4];
    }, "enqueueReplaceState"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
    }, "enqueueForceUpdate") };
    za = { id: 1, overflow: "" };
    __name(pushTreeContext, "pushTreeContext");
    Ha = Math.clz32 ? Math.clz32 : function(e4) {
      return e4 >>>= 0, 0 === e4 ? 32 : 31 - (Va(e4) / qa | 0) | 0;
    };
    Va = Math.log;
    qa = Math.LN2;
    Wa = Error(formatProdErrorMessage(460));
    __name(noop$2, "noop$2");
    Ua = null;
    __name(getSuspendedThenable, "getSuspendedThenable");
    Ka = "function" == typeof Object.is ? Object.is : function(e4, r4) {
      return e4 === r4 && (0 !== e4 || 1 / e4 == 1 / r4) || e4 != e4 && r4 != r4;
    };
    Ga = null;
    Ja = null;
    Xa = null;
    Qa = null;
    Ya = null;
    Za = null;
    ei = false;
    ti = false;
    ri = 0;
    ni = 0;
    oi = -1;
    si = 0;
    ai = null;
    ii = null;
    li = 0;
    __name(resolveCurrentlyRenderingComponent, "resolveCurrentlyRenderingComponent");
    __name(createHook, "createHook");
    __name(createWorkInProgressHook, "createWorkInProgressHook");
    __name(getThenableStateAfterSuspending, "getThenableStateAfterSuspending");
    __name(resetHooksState, "resetHooksState");
    __name(basicStateReducer, "basicStateReducer");
    __name(useReducer, "useReducer");
    __name(useMemo, "useMemo");
    __name(dispatchAction, "dispatchAction");
    __name(unsupportedStartTransition, "unsupportedStartTransition");
    __name(unsupportedSetOptimisticState, "unsupportedSetOptimisticState");
    __name(useActionState, "useActionState");
    __name(unwrapThenable, "unwrapThenable");
    __name(unsupportedRefresh, "unsupportedRefresh");
    __name(noop$1, "noop$1");
    hi = { readContext: /* @__PURE__ */ __name(function(e4) {
      return e4._currentValue2;
    }, "readContext"), use: /* @__PURE__ */ __name(function(e4) {
      if (null !== e4 && "object" == typeof e4) {
        if ("function" == typeof e4.then) return unwrapThenable(e4);
        if (e4.$$typeof === Ks) return e4._currentValue2;
      }
      throw Error(formatProdErrorMessage(438, String(e4)));
    }, "use"), useContext: /* @__PURE__ */ __name(function(e4) {
      return resolveCurrentlyRenderingComponent(), e4._currentValue2;
    }, "useContext"), useMemo, useReducer, useRef: /* @__PURE__ */ __name(function(e4) {
      Ga = resolveCurrentlyRenderingComponent();
      var r4 = (Za = createWorkInProgressHook()).memoizedState;
      return null === r4 ? (e4 = { current: e4 }, Za.memoizedState = e4) : r4;
    }, "useRef"), useState: /* @__PURE__ */ __name(function(e4) {
      return useReducer(basicStateReducer, e4);
    }, "useState"), useInsertionEffect: noop$1, useLayoutEffect: noop$1, useCallback: /* @__PURE__ */ __name(function(e4, r4) {
      return useMemo(function() {
        return e4;
      }, r4);
    }, "useCallback"), useImperativeHandle: noop$1, useEffect: noop$1, useDebugValue: noop$1, useDeferredValue: /* @__PURE__ */ __name(function(e4, r4) {
      return resolveCurrentlyRenderingComponent(), void 0 !== r4 ? r4 : e4;
    }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
      return resolveCurrentlyRenderingComponent(), [false, unsupportedStartTransition];
    }, "useTransition"), useId: /* @__PURE__ */ __name(function() {
      var e4 = Ja.treeContext, r4 = e4.overflow;
      e4 = ((e4 = e4.id) & ~(1 << 32 - Ha(e4) - 1)).toString(32) + r4;
      var n2 = di;
      if (null === n2) throw Error(formatProdErrorMessage(404));
      return r4 = ri++, e4 = "\xAB" + n2.idPrefix + "R" + e4, 0 < r4 && (e4 += "H" + r4.toString(32)), e4 + "\xBB";
    }, "useId"), useSyncExternalStore: /* @__PURE__ */ __name(function(e4, r4, n2) {
      if (void 0 === n2) throw Error(formatProdErrorMessage(407));
      return n2();
    }, "useSyncExternalStore"), useOptimistic: /* @__PURE__ */ __name(function(e4) {
      return resolveCurrentlyRenderingComponent(), [e4, unsupportedSetOptimisticState];
    }, "useOptimistic"), useActionState, useFormState: useActionState, useHostTransitionStatus: /* @__PURE__ */ __name(function() {
      return resolveCurrentlyRenderingComponent(), va;
    }, "useHostTransitionStatus"), useMemoCache: /* @__PURE__ */ __name(function(e4) {
      for (var r4 = Array(e4), n2 = 0; n2 < e4; n2++) r4[n2] = ra;
      return r4;
    }, "useMemoCache"), useCacheRefresh: /* @__PURE__ */ __name(function() {
      return unsupportedRefresh;
    }, "useCacheRefresh") };
    di = null;
    pi = { getCacheForType: /* @__PURE__ */ __name(function() {
      throw Error(formatProdErrorMessage(248));
    }, "getCacheForType") };
    __name(describeBuiltInComponentFrame, "describeBuiltInComponentFrame");
    fi = false;
    __name(describeNativeComponentFrame, "describeNativeComponentFrame");
    __name(describeComponentStackByType, "describeComponentStackByType");
    __name(defaultErrorHandler, "defaultErrorHandler");
    __name(noop, "noop");
    __name(RequestInstance, "RequestInstance");
    yi = null;
    __name(pingTask, "pingTask");
    __name(createSuspenseBoundary, "createSuspenseBoundary");
    __name(createRenderTask, "createRenderTask");
    __name(createReplayTask, "createReplayTask");
    __name(createPendingSegment, "createPendingSegment");
    __name(pushComponentStack, "pushComponentStack");
    __name(getThrownInfo, "getThrownInfo");
    __name(logRecoverableError, "logRecoverableError");
    __name(fatalError, "fatalError");
    __name(renderWithHooks, "renderWithHooks");
    __name(finishFunctionComponent, "finishFunctionComponent");
    __name(renderElement, "renderElement");
    __name(resumeNode, "resumeNode");
    __name(renderNodeDestructive, "renderNodeDestructive");
    __name(retryNode, "retryNode");
    __name(renderChildrenArray, "renderChildrenArray");
    __name(untrackBoundary, "untrackBoundary");
    __name(spawnNewSuspendedReplayTask, "spawnNewSuspendedReplayTask");
    __name(spawnNewSuspendedRenderTask, "spawnNewSuspendedRenderTask");
    __name(renderNode, "renderNode");
    __name(abortTaskSoft, "abortTaskSoft");
    __name(abortRemainingReplayNodes, "abortRemainingReplayNodes");
    __name(abortTask, "abortTask");
    __name(safelyEmitEarlyPreloads, "safelyEmitEarlyPreloads");
    __name(completeShell, "completeShell");
    __name(completeAll, "completeAll");
    __name(queueCompletedSegment, "queueCompletedSegment");
    __name(finishedTask, "finishedTask");
    __name(performWork, "performWork");
    __name(preparePreambleFromSubtree, "preparePreambleFromSubtree");
    __name(preparePreambleFromSegment, "preparePreambleFromSegment");
    __name(preparePreamble, "preparePreamble");
    __name(flushSubtree, "flushSubtree");
    __name(flushSegment, "flushSegment");
    __name(flushSegmentContainer, "flushSegmentContainer");
    __name(flushCompletedBoundary, "flushCompletedBoundary");
    __name(flushPartiallyCompletedSegment, "flushPartiallyCompletedSegment");
    __name(flushCompletedQueues, "flushCompletedQueues");
    __name(enqueueFlush, "enqueueFlush");
    __name(startFlowing, "startFlowing");
    __name(abort2, "abort");
    __name(onError, "onError");
    __name(renderToStringImpl, "renderToStringImpl");
    Ns.renderToStaticMarkup = function(e4, r4) {
      return renderToStringImpl(e4, r4, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }, Ns.renderToString = function(e4, r4) {
      return renderToStringImpl(e4, r4, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }, Ns.version = "19.1.0", mi = ir2, gi = Ns, ar.version = mi.version, ar.renderToReadableStream = mi.renderToReadableStream, ar.renderToString = gi.renderToString, ar.renderToStaticMarkup = gi.renderToStaticMarkup, mi.resume && (ar.resume = mi.resume);
    vi = /bot|crawl|http|lighthouse|scan|search|spider/i;
    __name(isbot, "isbot");
    renderRouterToStream = /* @__PURE__ */ __name(async ({ request: e4, router: r4, responseHeaders: n2, children: o5 }) => {
      if ("function" == typeof ar.renderToReadableStream) {
        const s5 = await ar.renderToReadableStream(o5, { signal: e4.signal });
        isbot(e4.headers.get("User-Agent")) && await s5.allReady;
        const a6 = function(e5, r5) {
          return transformStreamWithRouter(e5, r5);
        }(r4, s5);
        return new Response(a6, { status: r4.state.statusCode, headers: n2 });
      }
      if ("function" == typeof ar.renderToPipeableStream) {
        const i5 = new a4();
        try {
          const r5 = ar.renderToPipeableStream(o5, { ...isbot(e4.headers.get("User-Agent")) ? { onAllReady() {
            r5.pipe(i5);
          } } : { onShellReady() {
            r5.pipe(i5);
          } }, onError: /* @__PURE__ */ __name((e5, r6) => {
            console.error("Error in renderToPipeableStream:", e5, r6);
          }, "onError") });
        } catch (e5) {
          console.error("Error in renderToPipeableStream:", e5);
        }
        const l5 = function(e5, r5) {
          return s3.fromWeb(transformStreamWithRouter(e5, s3.toWeb(r5)));
        }(r4, i5);
        return new Response(l5, { status: r4.state.statusCode, headers: n2 });
      }
      throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.");
    }, "renderRouterToStream");
    __name(StartServer, "StartServer");
    defaultStreamHandler = /* @__PURE__ */ __name(({ request: e4, router: r4, responseHeaders: n2 }) => renderRouterToStream({ request: e4, router: r4, responseHeaders: n2, children: p2.jsx(StartServer, { router: r4 }) }), "defaultStreamHandler");
    ki = { stringify: /* @__PURE__ */ __name((e4) => JSON.stringify(e4, function(e5, r4) {
      const n2 = this[e5], o5 = Si.find((e6) => e6.stringifyCondition(n2));
      return o5 ? o5.stringify(n2) : r4;
    }), "stringify"), parse: /* @__PURE__ */ __name((e4) => JSON.parse(e4, function(e5, r4) {
      const n2 = this[e5];
      if (isPlainObject(n2)) {
        const e6 = Si.find((e7) => e7.parseCondition(n2));
        if (e6) return e6.parse(n2);
      }
      return r4;
    }), "parse"), encode: /* @__PURE__ */ __name((e4) => {
      if (Array.isArray(e4)) return e4.map((e5) => ki.encode(e5));
      if (isPlainObject(e4)) return Object.fromEntries(Object.entries(e4).map(([e5, r5]) => [e5, ki.encode(r5)]));
      const r4 = Si.find((r5) => r5.stringifyCondition(e4));
      return r4 ? r4.stringify(e4) : e4;
    }, "encode"), decode: /* @__PURE__ */ __name((e4) => {
      if (isPlainObject(e4)) {
        const r4 = Si.find((r5) => r5.parseCondition(e4));
        if (r4) return r4.parse(e4);
      }
      return Array.isArray(e4) ? e4.map((e5) => ki.decode(e5)) : isPlainObject(e4) ? Object.fromEntries(Object.entries(e4).map(([e5, r4]) => [e5, ki.decode(r4)])) : e4;
    }, "decode") };
    createSerializer = /* @__PURE__ */ __name((e4, r4, n2, o5) => ({ key: e4, stringifyCondition: r4, stringify: /* @__PURE__ */ __name((r5) => ({ [`$${e4}`]: n2(r5) }), "stringify"), parseCondition: /* @__PURE__ */ __name((r5) => Object.hasOwn(r5, `$${e4}`), "parseCondition"), parse: /* @__PURE__ */ __name((r5) => o5(r5[`$${e4}`]), "parse") }), "createSerializer");
    Si = [createSerializer("undefined", (e4) => void 0 === e4, () => 0, () => {
    }), createSerializer("date", (e4) => e4 instanceof Date, (e4) => e4.toISOString(), (e4) => new Date(e4)), createSerializer("error", (e4) => e4 instanceof Error, (e4) => ({ ...e4, message: e4.message, stack: void 0, cause: e4.cause }), (e4) => Object.assign(new Error(e4.message), e4)), createSerializer("formData", (e4) => e4 instanceof FormData, (e4) => {
      const r4 = {};
      return e4.forEach((e5, n2) => {
        const o5 = r4[n2];
        void 0 !== o5 ? Array.isArray(o5) ? o5.push(e5) : r4[n2] = [o5, e5] : r4[n2] = e5;
      }), r4;
    }, (e4) => {
      const r4 = new FormData();
      return Object.entries(e4).forEach(([e5, n2]) => {
        Array.isArray(n2) ? n2.forEach((n3) => r4.append(e5, n3)) : r4.append(e5, n2);
      }), r4;
    }), createSerializer("bigint", (e4) => "bigint" == typeof e4, (e4) => e4.toString(), (e4) => BigInt(e4))];
    Ci = [];
    __name(createServerFn, "createServerFn");
    __name(executeMiddleware$1, "executeMiddleware$1");
    __name(flattenMiddlewares, "flattenMiddlewares");
    !function(e4) {
      const r4 = wi;
      wi = "function" == typeof e4 ? e4() : e4;
    }(() => {
      const getStaticCacheUrl = /* @__PURE__ */ __name(async (e5, r4) => {
        const n2 = await async function(e6) {
          const r5 = new TextEncoder().encode(e6), n3 = await crypto.subtle.digest("SHA-1", r5), o5 = Array.from(new Uint8Array(n3)).map((e7) => e7.toString(16).padStart(2, "0")).join("");
          return o5;
        }(`${e5.functionId}__${r4}`);
        return `/__tsr/staticServerFnCache/${n2}.json`;
      }, "getStaticCacheUrl"), jsonToFilenameSafeString = /* @__PURE__ */ __name((e5) => JSON.stringify(e5 ?? "", (e6, r4) => r4 && "object" == typeof r4 && !Array.isArray(r4) ? Object.keys(r4).sort().reduce((e7, n2) => (e7[n2] = r4[n2], e7), {}) : r4).replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_"), "jsonToFilenameSafeString"), e4 = "undefined" != typeof document ? /* @__PURE__ */ new Map() : null;
      return { getItem: /* @__PURE__ */ __name(async (e5) => {
        if ("undefined" == typeof document) {
          const r4 = jsonToFilenameSafeString(e5.data), n2 = await getStaticCacheUrl(e5, r4), o5 = "/Users/denispovarov/Projects/DontSleep/website/.output/public", { promises: s5 } = await Promise.resolve().then(() => (init_fs(), fs_exports)), a6 = (await import("node:path")).join(o5, n2), [i5, l5] = await s5.readFile(a6, "utf-8").then((e6) => [ki.parse(e6), null]).catch((e6) => [null, e6]);
          if (l5 && "ENOENT" !== l5.code) throw l5;
          return i5;
        }
      }, "getItem"), setItem: /* @__PURE__ */ __name(async (e5, r4) => {
        const { promises: n2 } = await Promise.resolve().then(() => (init_fs(), fs_exports)), o5 = await import("node:path"), s5 = jsonToFilenameSafeString(e5.data), a6 = await getStaticCacheUrl(e5, s5), i5 = o5.join("/Users/denispovarov/Projects/DontSleep/website/.output/public", a6);
        await n2.mkdir(o5.dirname(i5), { recursive: true }), await n2.writeFile(i5, ki.stringify(r4));
      }, "setItem"), fetchItem: /* @__PURE__ */ __name(async (r4) => {
        const n2 = jsonToFilenameSafeString(r4.data), o5 = await getStaticCacheUrl(r4, n2);
        let s5 = null == e4 ? void 0 : e4.get(o5);
        return s5 || (s5 = await fetch(o5, { method: "GET" }).then((e5) => e5.text()).then((e5) => ki.parse(e5)), null == e4 || e4.set(o5, s5)), s5;
      }, "fetchItem") };
    });
    applyMiddleware = /* @__PURE__ */ __name(async (e4, r4, n2) => e4({ ...r4, next: /* @__PURE__ */ __name(async (e5 = {}) => n2({ ...r4, ...e5, context: { ...r4.context, ...e5.context }, sendContext: { ...r4.sendContext, ...e5.sendContext ?? {} }, headers: mergeHeaders(r4.headers, e5.headers), result: void 0 !== e5.result ? e5.result : "raw" === r4.response ? e5 : r4.result, error: e5.error ?? r4.error }), "next") }), "applyMiddleware");
    __name(serverFnBaseToMiddleware, "serverFnBaseToMiddleware");
    Pi = new AsyncLocalStorage2();
    __name(getEvent, "getEvent");
    xi = Symbol("$HTTPEvent");
    __name(createWrapperFunction, "createWrapperFunction");
    Ri = createWrapperFunction(function(e4) {
      return e4.node.res.statusCode;
    });
    Ti = createWrapperFunction(function(e4) {
      return e4.node.res.getHeaders();
    });
    $i = createWrapperFunction(toWebRequest);
    Ei = "tanstack-start-route-tree:v";
    Fi = "tanstack-start-manifest:v";
    Ii = "tanstack-start-server-fn-manifest:v";
    __name(loadVirtualModule, "loadVirtualModule");
    __name(isNotFoundResponse, "isNotFoundResponse");
    __name(handlerToMiddleware, "handlerToMiddleware");
    __name(handleCtxResult, "handleCtxResult");
    __name(isSpecialResponse, "isSpecialResponse");
    __name(DefaultCatchBoundary, "DefaultCatchBoundary");
    __name(NotFound, "NotFound");
    seo = /* @__PURE__ */ __name(({ title: e4, description: r4, keywords: n2, image: o5 }) => [{ title: e4 }, { name: "description", content: r4 }, { name: "keywords", content: n2 }, { name: "og:type", content: "website" }, { name: "og:title", content: e4 }, { name: "og:description", content: r4 }, ...o5 ? [{ name: "twitter:image", content: o5 }, { name: "twitter:card", content: "summary_large_image" }, { name: "og:image", content: o5 }] : []], "seo");
    _i = new RootRoute({ head: /* @__PURE__ */ __name(() => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, ...seo({ title: "DontSleep - Keep your Mac awake when you need it", description: "A simple, elegant macOS menu bar app that prevents your Mac from going to sleep. Perfect for watching videos, long downloads, and monitoring processes." })], links: [{ rel: "stylesheet", href: "/assets/app-CfGvBdFD.css" }, { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }, { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }, { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }, { rel: "manifest", href: "/site.webmanifest", color: "#3b82f6" }, { rel: "icon", href: "/favicon.ico" }] }), "head"), errorComponent: DefaultCatchBoundary, notFoundComponent: /* @__PURE__ */ __name(() => p2.jsx(NotFound, {}), "notFoundComponent"), shellComponent: /* @__PURE__ */ __name(function({ children: e4 }) {
      return p2.jsxs("html", { children: [p2.jsx("head", { children: p2.jsx(HeadContent, {}) }), p2.jsxs("body", { children: [e4, p2.jsx(Scripts, {})] })] });
    }, "shellComponent") });
    Ai = createFileRoute("/stats")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_stats_BdDa5Qir(), stats_BdDa5Qir_exports)), "component") });
    Mi = createFileRoute("/")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_index_DinNccJ2(), index_DinNccJ2_exports)), "component") });
    Oi = Ai.update({ id: "/stats", path: "/stats", getParentRoute: /* @__PURE__ */ __name(() => _i, "getParentRoute") });
    Li = { IndexRoute: Mi.update({ id: "/", path: "/", getParentRoute: /* @__PURE__ */ __name(() => _i, "getParentRoute") }), StatsRoute: Oi };
    Ni = _i._addFileChildren(Li)._addFileTypes();
    Bi = Object.freeze(Object.defineProperty({ __proto__: null, routeTree: Ni }, Symbol.toStringTag, { value: "Module" }));
    ji = function({ createRouter: e4 }) {
      let r4, n2 = null, o5 = null;
      return (s5) => {
        const a6 = globalThis.fetch, startRequestResolver = /* @__PURE__ */ __name(async ({ request: i5 }) => {
          globalThis.fetch = async function(e5, r5) {
            function resolve(e6, r6) {
              const n3 = new Request(e6, r6);
              return startRequestResolver({ request: n3 });
            }
            __name(resolve, "resolve");
            function getOrigin() {
              return i5.headers.get("Origin") || i5.headers.get("Referer") || "http://localhost";
            }
            __name(getOrigin, "getOrigin");
            if ("string" == typeof e5 && e5.startsWith("/")) {
              return resolve(new URL(e5, getOrigin()), r5);
            }
            if ("object" == typeof e5 && "url" in e5 && "string" == typeof e5.url && e5.url.startsWith("/")) {
              return resolve(new URL(e5.url, getOrigin()), r5);
            }
            return a6(e5, r5);
          };
          const l5 = new URL(i5.url), u3 = decodeURIComponent(l5.href.replace(l5.origin, "")), c4 = e4(), h4 = createMemoryHistory({ initialEntries: [u3] });
          c4.update({ history: h4 });
          const p4 = await (async () => {
            try {
              0;
              const e5 = joinPaths(["/", trimPath("/_serverFn"), "/"]);
              if (u3.startsWith(e5)) return await (async ({ request: e6 }) => {
                const r5 = new AbortController(), n3 = r5.signal, abort3 = /* @__PURE__ */ __name(() => r5.abort(), "abort");
                e6.signal.addEventListener("abort", abort3);
                const o6 = e6.method, s6 = new URL(e6.url, "http://localhost:3000"), a7 = new RegExp(`${i6 = "/_serverFn", i6.replace(/^\/|\/$/g, "")}/([^/?#]+)`);
                var i6;
                const l6 = s6.pathname.match(a7), u4 = l6 ? l6[1] : null, c5 = Object.fromEntries(s6.searchParams.entries()), h5 = "createServerFn" in c5;
                if ("string" != typeof u4) throw new Error("Invalid server action param for serverFnId: " + u4);
                const { default: p5 } = await loadVirtualModule(Ii), g4 = p5[u4];
                if (!g4) throw console.info("serverFnManifest", p5), new Error("Server function info not found for " + u4);
                const y3 = await g4.importer();
                if (!y3) throw console.info("serverFnInfo", g4), new Error("Server function module not resolved for " + u4);
                const b3 = y3[g4.functionName];
                if (!b3) throw console.info("serverFnInfo", g4), console.info("fnModule", y3), new Error(`Server function module export not resolved for serverFn ID: ${u4}`);
                const v3 = ["multipart/form-data", "application/x-www-form-urlencoded"], k4 = await (async () => {
                  try {
                    let r6 = await (async () => {
                      if (e6.headers.get("Content-Type") && v3.some((r8) => {
                        var n4;
                        return null == (n4 = e6.headers.get("Content-Type")) ? void 0 : n4.includes(r8);
                      })) return invariant("get" !== o6.toLowerCase()), await b3(await e6.formData(), n3);
                      if ("get" === o6.toLowerCase()) {
                        let e7 = c5;
                        return h5 && (e7 = c5.payload), e7 = e7 ? ki.parse(e7) : e7, await b3(e7, n3);
                      }
                      const r7 = await e6.text(), s7 = ki.parse(r7);
                      return h5 ? await b3(s7, n3) : await b3(...s7, n3);
                    })();
                    return r6.result instanceof Response ? r6.result : !h5 && (r6 = r6.result, r6 instanceof Response) ? r6 : isNotFound(r6) ? isNotFoundResponse(r6) : new Response(void 0 !== r6 ? ki.stringify(r6) : void 0, { status: Ri(getEvent()), headers: { "Content-Type": "application/json" } });
                  } catch (e7) {
                    return e7 instanceof Response ? e7 : isNotFound(e7) ? isNotFoundResponse(e7) : (console.info(), console.info("Server Fn Error!"), console.info(), console.error(e7), console.info(), new Response(ki.stringify(e7), { status: 500, headers: { "Content-Type": "application/json" } }));
                  }
                })();
                return e6.signal.removeEventListener("abort", abort3), k4;
              })({ request: i5 });
              if (null === n2) try {
                n2 = await loadVirtualModule(Ei), n2.serverRouteTree && (r4 = processRouteTree({ routeTree: n2.serverRouteTree, initRoute: /* @__PURE__ */ __name((e6, r5) => {
                  e6.init({ originalIndex: r5 });
                }, "initRoute") }));
              } catch (a7) {
                console.log(a7);
              }
              async function executeRouter() {
                const e6 = (i5.headers.get("Accept") || "*/*").split(",");
                if (!["*/*", "text/html"].some((r6) => e6.some((e7) => e7.trim().startsWith(r6)))) return json({ error: "Only HTML requests are supported here" }, { status: 500 });
                if (null === o5 && (o5 = await async function() {
                  const { tsrStartManifest: e7 } = await loadVirtualModule(Fi), r6 = e7(), n4 = r6.routes[W2] = r6.routes[W2] || {};
                  n4.assets = n4.assets || [];
                  let o6 = `import('${r6.clientEntry}')`;
                  n4.assets.push({ tag: "script", attrs: { type: "module", suppressHydrationWarning: true, async: true }, children: o6 });
                  const s6 = { ...r6, routes: Object.fromEntries(Object.entries(r6.routes).map(([e8, r7]) => {
                    const { preloads: n5, assets: o7 } = r7;
                    return [e8, { preloads: n5, assets: o7 }];
                  })) };
                  return s6;
                }()), attachRouterServerSsrUtils(c4, o5), await c4.load(), c4.state.redirect) return c4.state.redirect;
                await c4.serverSsr.dehydrate();
                const r5 = (n3 = { router: c4 }, mergeHeaders(Ti(), { "Content-Type": "text/html; charset=UTF-8" }, ...n3.router.state.matches.map((e7) => e7.headers)));
                var n3;
                return await s5({ request: i5, router: c4, responseHeaders: r5 });
              }
              __name(executeRouter, "executeRouter");
              if (r4) {
                const [l6, h5] = await async function(e6) {
                  var r5, n3;
                  const o6 = new URL(e6.request.url), s6 = o6.pathname, a7 = getMatchedRoutes({ pathname: s6, basepath: e6.basePath, caseSensitive: true, routesByPath: e6.processedServerRouteTree.routesByPath, routesById: e6.processedServerRouteTree.routesById, flatRoutes: e6.processedServerRouteTree.flatRoutes }), i6 = e6.router.getMatchedRoutes(s6, void 0);
                  let l7, u4 = [];
                  if (u4 = a7.matchedRoutes, i6.foundRoute && a7.matchedRoutes.length < i6.matchedRoutes.length) {
                    const n4 = [...i6.matchedRoutes].reverse().find((r6) => void 0 !== e6.processedServerRouteTree.routesById[r6.id]);
                    if (n4) {
                      let o7 = n4.id;
                      u4 = [];
                      do {
                        const n5 = e6.processedServerRouteTree.routesById[o7];
                        if (!n5) break;
                        u4.push(n5), o7 = null == (r5 = n5.parentRoute) ? void 0 : r5.id;
                      } while (o7);
                      u4.reverse();
                    }
                  }
                  if (u4.length) {
                    const r6 = flattenMiddlewares(u4.flatMap((e7) => e7.options.middleware).filter(Boolean)).map((e7) => e7.options.server);
                    if (null == (n3 = a7.foundRoute) ? void 0 : n3.options.methods) {
                      const n4 = Object.keys(a7.foundRoute.options.methods).find((r7) => r7.toLowerCase() === e6.request.method.toLowerCase());
                      if (n4) {
                        const e7 = a7.foundRoute.options.methods[n4];
                        e7 && ("function" == typeof e7 ? r6.push(handlerToMiddleware(e7)) : (e7._options.middlewares && e7._options.middlewares.length && r6.push(...flattenMiddlewares(e7._options.middlewares).map((e8) => e8.options.server)), e7._options.handler && r6.push(handlerToMiddleware(e7._options.handler))));
                      }
                    }
                    r6.push(handlerToMiddleware(e6.executeRouter));
                    const o7 = await function(e7, r7) {
                      let n4 = -1;
                      const next = /* @__PURE__ */ __name(async (r8) => {
                        n4++;
                        const o8 = e7[n4];
                        if (!o8) return r8;
                        const s7 = await o8({ ...r8, next: /* @__PURE__ */ __name(async (e8) => {
                          const n5 = await next({ ...r8, ...e8 });
                          return Object.assign(r8, handleCtxResult(n5));
                        }, "next") }).catch((e8) => {
                          if (isSpecialResponse(e8)) return { response: e8 };
                          throw e8;
                        });
                        return Object.assign(r8, handleCtxResult(s7));
                      }, "next");
                      return handleCtxResult(next(r7));
                    }(r6, { request: e6.request, context: {}, params: a7.routeParams, pathname: s6 });
                    l7 = o7.response;
                  }
                  return [u4, l7];
                }({ processedServerRouteTree: r4, router: c4, request: i5, basePath: "/", executeRouter });
                if (h5) return h5;
              }
              return await executeRouter();
            } catch (p5) {
              if (p5 instanceof Response) return p5;
              throw p5;
            }
          })();
          if (isRedirect(p4)) {
            if (isRedirect(g3 = p4) && g3.options.href) return "manual" === i5.headers.get("x-tsr-redirect") ? json({ ...p4.options, isSerializedRedirect: true }, { headers: p4.headers }) : p4;
            if (p4.options.to && "string" == typeof p4.options.to && !p4.options.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. Received: ${JSON.stringify(p4.options)}`);
            if (["params", "search", "hash"].some((e6) => "function" == typeof p4.options[e6])) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(p4.options).filter((e6) => "function" == typeof p4.options[e6]).map((e6) => `"${e6}"`).join(", ")}`);
            const e5 = c4.resolveRedirect(p4);
            return "manual" === i5.headers.get("x-tsr-redirect") ? json({ ...p4.options, isSerializedRedirect: true }, { headers: p4.headers }) : e5;
          }
          var g3;
          return p4;
        }, "startRequestResolver");
        return startRequestResolver;
      };
    }({ createRouter: /* @__PURE__ */ __name(function() {
      const e4 = ((e5) => new Router(e5))({ routeTree: Ni, defaultPreload: "intent", defaultErrorComponent: DefaultCatchBoundary, defaultNotFoundComponent: /* @__PURE__ */ __name(() => p2.jsx(NotFound, {}), "defaultNotFoundComponent"), scrollRestoration: true });
      return e4;
    }, "createRouter") })(defaultStreamHandler);
    Di = (zi = /* @__PURE__ */ __name(function(e4) {
      const r4 = toWebRequest(e4);
      return ji({ request: r4 });
    }, "zi"), function(e4) {
      if ("function" == typeof e4) return e4.__is_handler__ = true, e4;
      const r4 = { onRequest: _normalizeArray(e4.onRequest), onBeforeResponse: _normalizeArray(e4.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((n2) => async function(e5, r5, n3) {
        if (n3.onRequest) {
          for (const r6 of n3.onRequest) if (await r6(e5), e5.handled) return;
        }
        const o5 = { body: await r5(e5) };
        if (n3.onBeforeResponse) for (const r6 of n3.onBeforeResponse) await r6(e5, o5);
        return o5.body;
      }(n2, e4.handler, r4), "_handler");
      return _handler.__is_handler__ = true, _handler.__resolve__ = e4.handler.__resolve__, _handler.__websocket__ = e4.websocket, _handler;
    }((e4) => async function(e5, r4) {
      return Pi.run(e5, r4);
    }(e4, () => zi(e4))));
    Hi = Object.freeze(Object.defineProperty({ __proto__: null, c: createServerFn, default: Di, g: $i }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/nitro/nitro.mjs
import { env as t2 } from "cloudflare:workers";
import { EventEmitter as r3 } from "node:events";
import { Buffer as s4 } from "node:buffer";
import { setImmediate as a5, clearImmediate as c3 } from "node:timers";
function createNotImplementedError2(e4) {
  return new Error(`[unenv] ${e4} is not implemented yet!`);
}
function notImplemented2(e4) {
  return Object.assign(() => {
    throw createNotImplementedError2(e4);
  }, { __unenv__: true });
}
function jsonParseTransform(e4, t3) {
  if (!("__proto__" === e4 || "constructor" === e4 && t3 && "object" == typeof t3 && "prototype" in t3)) return t3;
  !function(e5) {
    console.warn(`[destr] Dropping "${e5}" key to prevent prototype pollution.`);
  }(e4);
}
function destr(e4, t3 = {}) {
  if ("string" != typeof e4) return e4;
  if ('"' === e4[0] && '"' === e4[e4.length - 1] && -1 === e4.indexOf("\\")) return e4.slice(1, -1);
  const r4 = e4.trim();
  if (r4.length <= 9) switch (r4.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!Rt2.test(e4)) {
    if (t3.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e4;
  }
  try {
    if (xt2.test(e4) || kt2.test(e4)) {
      if (t3.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e4, jsonParseTransform);
    }
    return JSON.parse(e4);
  } catch (r5) {
    if (t3.strict) throw r5;
    return e4;
  }
}
function encodeQueryValue(e4) {
  return (t3 = "string" == typeof e4 ? e4 : JSON.stringify(e4), encodeURI("" + t3).replace(Pt2, "|")).replace(At2, "%2B").replace(It2, "+").replace(Et2, "%23").replace(Ct2, "%26").replace(jt2, "`").replace(Ht2, "^").replace(St2, "%2F");
  var t3;
}
function encodeQueryKey(e4) {
  return encodeQueryValue(e4).replace(Tt2, "%3D");
}
function decode(e4 = "") {
  try {
    return decodeURIComponent("" + e4);
  } catch {
    return "" + e4;
  }
}
function decodeQueryKey(e4) {
  return decode(e4.replace(At2, " "));
}
function decodeQueryValue(e4) {
  return decode(e4.replace(At2, " "));
}
function parseQuery(e4 = "") {
  const t3 = /* @__PURE__ */ Object.create(null);
  "?" === e4[0] && (e4 = e4.slice(1));
  for (const r4 of e4.split("&")) {
    const e5 = r4.match(/([^=]+)=?(.*)/) || [];
    if (e5.length < 2) continue;
    const s5 = decodeQueryKey(e5[1]);
    if ("__proto__" === s5 || "constructor" === s5) continue;
    const a6 = decodeQueryValue(e5[2] || "");
    void 0 === t3[s5] ? t3[s5] = a6 : Array.isArray(t3[s5]) ? t3[s5].push(a6) : t3[s5] = [t3[s5], a6];
  }
  return t3;
}
function stringifyQuery(e4) {
  return Object.keys(e4).filter((t3) => void 0 !== e4[t3]).map((t3) => {
    return r4 = t3, "number" != typeof (s5 = e4[t3]) && "boolean" != typeof s5 || (s5 = String(s5)), s5 ? Array.isArray(s5) ? s5.map((e5) => `${encodeQueryKey(r4)}=${encodeQueryValue(e5)}`).join("&") : `${encodeQueryKey(r4)}=${encodeQueryValue(s5)}` : encodeQueryKey(r4);
    var r4, s5;
  }).filter(Boolean).join("&");
}
function hasProtocol(e4, t3 = {}) {
  return "boolean" == typeof t3 && (t3 = { acceptRelative: t3 }), t3.strict ? Mt2.test(e4) : Ot2.test(e4) || !!t3.acceptRelative && Nt2.test(e4);
}
function withoutTrailingSlash(e4 = "", t3) {
  return (function(e5 = "") {
    return e5.endsWith("/");
  }(e4) ? e4.slice(0, -1) : e4) || "/";
}
function withTrailingSlash(e4 = "", t3) {
  return e4.endsWith("/") ? e4 : e4 + "/";
}
function withoutBase(e4, t3) {
  if (isEmptyURL(t3)) return e4;
  const r4 = withoutTrailingSlash(t3);
  if (!e4.startsWith(r4)) return e4;
  const s5 = e4.slice(r4.length);
  return "/" === s5[0] ? s5 : "/" + s5;
}
function withQuery(e4, t3) {
  const r4 = parseURL(e4), s5 = { ...parseQuery(r4.search), ...t3 };
  return r4.search = stringifyQuery(s5), function(e5) {
    const t4 = e5.pathname || "", r5 = e5.search ? (e5.search.startsWith("?") ? "" : "?") + e5.search : "", s6 = e5.hash || "", a6 = e5.auth ? e5.auth + "@" : "", c4 = e5.host || "", u3 = e5.protocol || e5[qt2] ? (e5.protocol || "") + "//" : "";
    return u3 + a6 + c4 + t4 + r5 + s6;
  }(r4);
}
function getQuery(e4) {
  return parseQuery(parseURL(e4).search);
}
function isEmptyURL(e4) {
  return !e4 || "/" === e4;
}
function joinURL(e4, ...t3) {
  let r4 = e4 || "";
  for (const e5 of t3.filter((e6) => /* @__PURE__ */ function(e7) {
    return e7 && "/" !== e7;
  }(e6))) if (r4) {
    const t4 = e5.replace(Bt2, "");
    r4 = withTrailingSlash(r4) + t4;
  } else r4 = e5;
  return r4;
}
function parseURL(e4 = "", t3) {
  const r4 = e4.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r4) {
    const [, e5, t4 = ""] = r4;
    return { protocol: e5.toLowerCase(), pathname: t4, href: e5 + t4, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e4, { acceptRelative: true })) return parsePath(e4);
  const [, s5 = "", a6, c4 = ""] = e4.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u3 = "", d6 = ""] = c4.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s5 && (d6 = d6.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h4, search: f4, hash: m4 } = parsePath(d6);
  return { protocol: s5.toLowerCase(), auth: a6 ? a6.slice(0, Math.max(0, a6.length - 1)) : "", host: u3, pathname: h4, search: f4, hash: m4, [qt2]: !s5 };
}
function parsePath(e4 = "") {
  const [t3 = "", r4 = "", s5 = ""] = (e4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t3, search: r4, hash: s5 };
}
function createRouter$1(e4 = {}) {
  const t3 = { options: e4, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t4) => e4.strictTrailingSlash ? t4 : t4.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e4.routes) for (const r4 in e4.routes) insert(t3, normalizeTrailingSlash(r4), e4.routes[r4]);
  return { ctx: t3, lookup: /* @__PURE__ */ __name((e5) => function(e6, t4) {
    const r4 = e6.staticRoutesMap[t4];
    if (r4) return r4.data;
    const s5 = t4.split("/"), a6 = {};
    let c4 = false, u3 = null, d6 = e6.rootNode, h4 = null;
    for (let e7 = 0; e7 < s5.length; e7++) {
      const t5 = s5[e7];
      null !== d6.wildcardChildNode && (u3 = d6.wildcardChildNode, h4 = s5.slice(e7).join("/"));
      const r5 = d6.children.get(t5);
      if (void 0 === r5) {
        if (d6 && d6.placeholderChildren.length > 1) {
          const t6 = s5.length - e7;
          d6 = d6.placeholderChildren.find((e8) => e8.maxDepth === t6) || null;
        } else d6 = d6.placeholderChildren[0] || null;
        if (!d6) break;
        d6.paramName && (a6[d6.paramName] = t5), c4 = true;
      } else d6 = r5;
    }
    null !== d6 && null !== d6.data || null === u3 || (d6 = u3, a6[d6.paramName || "_"] = h4, c4 = true);
    if (!d6) return null;
    if (c4) return { ...d6.data, params: c4 ? a6 : void 0 };
    return d6.data;
  }(t3, normalizeTrailingSlash(e5)), "lookup"), insert: /* @__PURE__ */ __name((e5, r4) => insert(t3, normalizeTrailingSlash(e5), r4), "insert"), remove: /* @__PURE__ */ __name((e5) => function(e6, t4) {
    let r4 = false;
    const s5 = t4.split("/");
    let a6 = e6.rootNode;
    for (const e7 of s5) if (a6 = a6.children.get(e7), !a6) return r4;
    if (a6.data) {
      const e7 = s5.at(-1) || "";
      a6.data = null, 0 === Object.keys(a6.children).length && a6.parent && (a6.parent.children.delete(e7), a6.parent.wildcardChildNode = null, a6.parent.placeholderChildren = []), r4 = true;
    }
    return r4;
  }(t3, normalizeTrailingSlash(e5)), "remove") };
}
function insert(e4, t3, r4) {
  let s5 = true;
  const a6 = t3.split("/");
  let c4 = e4.rootNode, u3 = 0;
  const d6 = [c4];
  for (const e5 of a6) {
    let t4;
    if (t4 = c4.children.get(e5)) c4 = t4;
    else {
      const r5 = getNodeType(e5);
      t4 = createRadixNode({ type: r5, parent: c4 }), c4.children.set(e5, t4), r5 === $t2 ? (t4.paramName = "*" === e5 ? "_" + u3++ : e5.slice(1), c4.placeholderChildren.push(t4), s5 = false) : r5 === zt2 && (c4.wildcardChildNode = t4, t4.paramName = e5.slice(3) || "_", s5 = false), d6.push(t4), c4 = t4;
    }
  }
  for (const [e5, t4] of d6.entries()) t4.maxDepth = Math.max(d6.length - e5, t4.maxDepth || 0);
  return c4.data = r4, true === s5 && (e4.staticRoutesMap[t3] = c4), c4;
}
function createRadixNode(e4 = {}) {
  return { type: e4.type || Ut2, maxDepth: 0, parent: e4.parent || null, children: /* @__PURE__ */ new Map(), data: e4.data || null, paramName: e4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e4) {
  return e4.startsWith("**") ? zt2 : ":" === e4[0] || "*" === e4 ? $t2 : Ut2;
}
function toRouteMatcher(e4) {
  return /* @__PURE__ */ function(e5, t3) {
    return { ctx: { table: e5 }, matchAll: /* @__PURE__ */ __name((r4) => _matchRoutes(r4, e5, t3), "matchAll") };
  }(_routerNodeToTable("", e4.ctx.rootNode), e4.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e4, t3, r4) {
  true !== r4 && e4.endsWith("/") && (e4 = e4.slice(0, -1) || "/");
  const s5 = [];
  for (const [r5, a7] of _sortRoutesMap(t3.wildcard)) (e4 === r5 || e4.startsWith(r5 + "/")) && s5.push(a7);
  for (const [r5, a7] of _sortRoutesMap(t3.dynamic)) if (e4.startsWith(r5 + "/")) {
    const t4 = "/" + e4.slice(r5.length).split("/").splice(2).join("/");
    s5.push(..._matchRoutes(t4, a7));
  }
  const a6 = t3.static.get(e4);
  return a6 && s5.push(a6), s5.filter(Boolean);
}
function _sortRoutesMap(e4) {
  return [...e4.entries()].sort((e5, t3) => e5[0].length - t3[0].length);
}
function _routerNodeToTable(e4, t3) {
  const r4 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e5, t4) {
    if (e5) if (t4.type !== Ut2 || e5.includes("*") || e5.includes(":")) {
      if (t4.type === zt2) r4.wildcard.set(e5.replace("/**", ""), t4.data);
      else if (t4.type === $t2) {
        const s5 = _routerNodeToTable("", t4);
        return t4.data && s5.static.set("/", t4.data), void r4.dynamic.set(e5.replace(/\/\*|\/:\w+/, ""), s5);
      }
    } else t4.data && r4.static.set(e5, t4.data);
    for (const [r5, s5] of t4.children.entries()) _addNode(`${e5}/${r5}`.replace("//", "/"), s5);
  }, "_addNode"))(e4, t3), r4;
}
function isPlainObject2(e4) {
  if (null === e4 || "object" != typeof e4) return false;
  const t3 = Object.getPrototypeOf(e4);
  return (null === t3 || t3 === Object.prototype || null === Object.getPrototypeOf(t3)) && (!(Symbol.iterator in e4) && (!(Symbol.toStringTag in e4) || "[object Module]" === Object.prototype.toString.call(e4)));
}
function _defu(e4, t3, r4 = ".", s5) {
  if (!isPlainObject2(t3)) return _defu(e4, {}, r4, s5);
  const a6 = Object.assign({}, t3);
  for (const t4 in e4) {
    if ("__proto__" === t4 || "constructor" === t4) continue;
    const c4 = e4[t4];
    null != c4 && (s5 && s5(a6, t4, c4, r4) || (Array.isArray(c4) && Array.isArray(a6[t4]) ? a6[t4] = [...c4, ...a6[t4]] : isPlainObject2(c4) && isPlainObject2(a6[t4]) ? a6[t4] = _defu(c4, a6[t4], (r4 ? `${r4}.` : "") + t4.toString(), s5) : a6[t4] = c4));
  }
  return a6;
}
function createDefu(e4) {
  return (...t3) => t3.reduce((t4, r4) => _defu(t4, r4, "", e4), {});
}
function o4(e4) {
  throw new Error(`${e4} is not implemented yet!`);
}
function p3(e4) {
  const t3 = {};
  for (const [r4, s5] of Object.entries(e4)) r4 && (t3[r4] = (Array.isArray(s5) ? s5 : [s5]).filter(Boolean));
  return t3;
}
function v2(e4 = {}) {
  if (e4 instanceof Headers) return e4;
  const t3 = new Headers();
  for (const [r4, s5] of Object.entries(e4)) if (void 0 !== s5) {
    if (Array.isArray(s5)) {
      for (const e5 of s5) t3.append(r4, String(e5));
      continue;
    }
    t3.set(r4, String(s5));
  }
  return t3;
}
async function b2(e4, t3) {
  const r4 = new y2(), s5 = new w3(r4);
  let a6;
  if (r4.url = t3.url?.toString() || "/", !r4.url.startsWith("/")) {
    const e5 = new URL(r4.url);
    a6 = e5.host, r4.url = e5.pathname + e5.search + e5.hash;
  }
  r4.method = t3.method || "GET", r4.headers = function(e5 = {}) {
    const t4 = new Qt2(), r5 = Array.isArray(e5) || function(e6) {
      return "function" == typeof e6?.entries;
    }(e5) ? e5 : Object.entries(e5);
    for (const [e6, s6] of r5) if (s6) {
      if (void 0 === t4[e6]) {
        t4[e6] = s6;
        continue;
      }
      t4[e6] = [...Array.isArray(t4[e6]) ? t4[e6] : [t4[e6]], ...Array.isArray(s6) ? s6 : [s6]];
    }
    return t4;
  }(t3.headers || {}), r4.headers.host || (r4.headers.host = t3.host || a6 || "localhost"), r4.connection.encrypted = r4.connection.encrypted || "https" === t3.protocol, r4.body = t3.body || null, r4.__unenv__ = t3.context, await e4(r4, s5);
  let c4 = s5._data;
  (Jt2.has(s5.statusCode) || "HEAD" === r4.method.toUpperCase()) && (c4 = null, delete s5._headers["content-length"]);
  const u3 = { status: s5.statusCode, statusText: s5.statusMessage, headers: s5._headers, body: c4 };
  return r4.destroy(), s5.destroy(), u3;
}
function hasProp2(e4, t3) {
  try {
    return t3 in e4;
  } catch {
    return false;
  }
}
function createError(e4) {
  if ("string" == typeof e4) return new H3Error2(e4);
  if (isError(e4)) return e4;
  const t3 = new H3Error2(e4.message ?? e4.statusMessage ?? "", { cause: e4.cause || e4 });
  if (hasProp2(e4, "stack")) try {
    Object.defineProperty(t3, "stack", { get: /* @__PURE__ */ __name(() => e4.stack, "get") });
  } catch {
    try {
      t3.stack = e4.stack;
    } catch {
    }
  }
  if (e4.data && (t3.data = e4.data), e4.statusCode ? t3.statusCode = sanitizeStatusCode2(e4.statusCode, t3.statusCode) : e4.status && (t3.statusCode = sanitizeStatusCode2(e4.status, t3.statusCode)), e4.statusMessage ? t3.statusMessage = e4.statusMessage : e4.statusText && (t3.statusMessage = e4.statusText), t3.statusMessage) {
    const e5 = t3.statusMessage;
    sanitizeStatusMessage2(t3.statusMessage) !== e5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e4.fatal && (t3.fatal = e4.fatal), void 0 !== e4.unhandled && (t3.unhandled = e4.unhandled), t3;
}
function isError(e4) {
  return true === e4?.constructor?.__h3_error__;
}
function readRawBody(e4, t3 = "utf8") {
  !function(e5, t4) {
    if (!function(e6, t5) {
      if ("string" == typeof t5) {
        if (e6.method === t5) return true;
      } else if (t5.includes(e6.method)) return true;
      return false;
    }(e5, t4)) throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(e4, Gt2);
  const r4 = e4._requestBody || e4.web?.request?.body || e4.node.req[Vt2] || e4.node.req.rawBody || e4.node.req.body;
  if (r4) {
    const e5 = Promise.resolve(r4).then((e6) => s4.isBuffer(e6) ? e6 : "function" == typeof e6.pipeTo ? new Promise((t4, r5) => {
      const a7 = [];
      e6.pipeTo(new WritableStream({ write(e7) {
        a7.push(e7);
      }, close() {
        t4(s4.concat(a7));
      }, abort(e7) {
        r5(e7);
      } })).catch(r5);
    }) : "function" == typeof e6.pipe ? new Promise((t4, r5) => {
      const a7 = [];
      e6.on("data", (e7) => {
        a7.push(e7);
      }).on("end", () => {
        t4(s4.concat(a7));
      }).on("error", r5);
    }) : e6.constructor === Object ? s4.from(JSON.stringify(e6)) : e6 instanceof URLSearchParams ? s4.from(e6.toString()) : e6 instanceof FormData ? new Response(e6).bytes().then((e7) => s4.from(e7)) : s4.from(e6));
    return t3 ? e5.then((e6) => e6.toString(t3)) : e5;
  }
  if (!Number.parseInt(e4.node.req.headers["content-length"] || "") && !String(e4.node.req.headers["transfer-encoding"] ?? "").split(",").map((e5) => e5.trim()).filter(Boolean).includes("chunked")) return Promise.resolve(void 0);
  const a6 = e4.node.req[Vt2] = new Promise((t4, r5) => {
    const a7 = [];
    e4.node.req.on("error", (e5) => {
      r5(e5);
    }).on("data", (e5) => {
      a7.push(e5);
    }).on("end", () => {
      t4(s4.concat(a7));
    });
  });
  return t3 ? a6.then((e5) => e5.toString(t3)) : a6;
}
function handleCacheHeaders(e4, t3) {
  const r4 = ["public", ...t3.cacheControls || []];
  let s5 = false;
  if (void 0 !== t3.maxAge && r4.push("max-age=" + +t3.maxAge, "s-maxage=" + +t3.maxAge), t3.modifiedTime) {
    const r5 = new Date(t3.modifiedTime), a6 = e4.node.req.headers["if-modified-since"];
    e4.node.res.setHeader("last-modified", r5.toUTCString()), a6 && new Date(a6) >= r5 && (s5 = true);
  }
  if (t3.etag) {
    e4.node.res.setHeader("etag", t3.etag);
    e4.node.req.headers["if-none-match"] === t3.etag && (s5 = true);
  }
  return e4.node.res.setHeader("cache-control", r4.join(", ")), !!s5 && (e4.node.res.statusCode = 304, e4.handled || e4.node.res.end(), true);
}
function sanitizeStatusMessage2(e4 = "") {
  return e4.replace(Yt2, "");
}
function sanitizeStatusCode2(e4, t3 = 200) {
  return e4 ? ("string" == typeof e4 && (e4 = Number.parseInt(e4, 10)), e4 < 100 || e4 > 999 ? t3 : e4) : t3;
}
function splitCookiesString2(e4) {
  if (Array.isArray(e4)) return e4.flatMap((e5) => splitCookiesString2(e5));
  if ("string" != typeof e4) return [];
  const t3 = [];
  let r4, s5, a6, c4, u3, d6 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; d6 < e4.length && /\s/.test(e4.charAt(d6)); ) d6 += 1;
    return d6 < e4.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (s5 = e4.charAt(d6), "=" !== s5 && ";" !== s5 && "," !== s5), "notSpecialChar");
  for (; d6 < e4.length; ) {
    for (r4 = d6, u3 = false; skipWhitespace(); ) if (s5 = e4.charAt(d6), "," === s5) {
      for (a6 = d6, d6 += 1, skipWhitespace(), c4 = d6; d6 < e4.length && notSpecialChar(); ) d6 += 1;
      d6 < e4.length && "=" === e4.charAt(d6) ? (u3 = true, d6 = c4, t3.push(e4.slice(r4, a6)), r4 = d6) : d6 = a6 + 1;
    } else d6 += 1;
    (!u3 || d6 >= e4.length) && t3.push(e4.slice(r4));
  }
  return t3;
}
function send2(e4, t3, r4) {
  return r4 && function(e5, t4) {
    t4 && 304 !== e5.node.res.statusCode && !e5.node.res.getHeader("content-type") && e5.node.res.setHeader("content-type", t4);
  }(e4, r4), new Promise((r5) => {
    Xt2(() => {
      e4.handled || e4.node.res.end(t3), r5();
    });
  });
}
function setResponseStatus(e4, t3, r4) {
  t3 && (e4.node.res.statusCode = sanitizeStatusCode2(t3, e4.node.res.statusCode)), r4 && (e4.node.res.statusMessage = sanitizeStatusMessage2(r4));
}
function setResponseHeaders(e4, t3) {
  for (const [r4, s5] of Object.entries(t3)) e4.node.res.setHeader(r4, s5);
}
function sendStream(e4, t3) {
  if (!t3 || "object" != typeof t3) throw new Error("[h3] Invalid stream provided.");
  if (e4.node.res._data = t3, !e4.node.res.socket) return e4._handled = true, Promise.resolve();
  if (hasProp2(t3, "pipeTo") && "function" == typeof t3.pipeTo) return t3.pipeTo(new WritableStream({ write(t4) {
    e4.node.res.write(t4);
  } })).then(() => {
    e4.node.res.end();
  });
  if (hasProp2(t3, "pipe") && "function" == typeof t3.pipe) return new Promise((r4, s5) => {
    t3.pipe(e4.node.res), t3.on && (t3.on("end", () => {
      e4.node.res.end(), r4();
    }), t3.on("error", (e5) => {
      s5(e5);
    })), e4.node.res.on("close", () => {
      t3.abort && t3.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse2(e4, t3) {
  for (const [r4, s5] of t3.headers) "set-cookie" === r4 ? e4.node.res.appendHeader(r4, splitCookiesString2(s5)) : e4.node.res.setHeader(r4, s5);
  if (t3.status && (e4.node.res.statusCode = sanitizeStatusCode2(t3.status, e4.node.res.statusCode)), t3.statusText && (e4.node.res.statusMessage = sanitizeStatusMessage2(t3.statusText)), t3.redirected && e4.node.res.setHeader("location", t3.url), t3.body) return sendStream(e4, t3.body);
  e4.node.res.end();
}
async function proxyRequest(e4, t3, r4 = {}) {
  let s5, a6;
  tr2.has(e4.method) && (r4.streamRequest ? (s5 = function(e5) {
    if (!Gt2.includes(e5.method)) return;
    const t4 = e5.web?.request?.body || e5._requestBody;
    return t4 || (Vt2 in e5.node.req || "rawBody" in e5.node.req || "body" in e5.node.req || "__unenv__" in e5.node.req ? new ReadableStream({ async start(t5) {
      const r5 = await readRawBody(e5, false);
      r5 && t5.enqueue(r5), t5.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t5) => {
      e5.node.req.on("data", (e6) => {
        t5.enqueue(e6);
      }), e5.node.req.on("end", () => {
        t5.close();
      }), e5.node.req.on("error", (e6) => {
        t5.error(e6);
      });
    }, "start") }));
  }(e4), a6 = "half") : s5 = await readRawBody(e4, false).catch(() => {
  }));
  const c4 = r4.fetchOptions?.method || e4.method, u3 = function(e5, ...t4) {
    const r5 = t4.filter(Boolean);
    if (0 === r5.length) return e5;
    const s6 = new Headers(e5);
    for (const e6 of r5) {
      const t5 = Array.isArray(e6) ? e6 : "function" == typeof e6.entries ? e6.entries() : Object.entries(e6);
      for (const [e7, r6] of t5) void 0 !== r6 && s6.set(e7, r6);
    }
    return s6;
  }(getProxyRequestHeaders(e4, { host: t3.startsWith("/") }), r4.fetchOptions?.headers, r4.headers);
  return async function(e5, t4, r5 = {}) {
    let s6;
    try {
      s6 = await _getFetch(r5.fetch)(t4, { headers: r5.headers, ignoreResponseError: true, ...r5.fetchOptions });
    } catch (e6) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e6 });
    }
    e5.node.res.statusCode = sanitizeStatusCode2(s6.status, e5.node.res.statusCode), e5.node.res.statusMessage = sanitizeStatusMessage2(s6.statusText);
    const a7 = [];
    for (const [t5, r6] of s6.headers.entries()) "content-encoding" !== t5 && "content-length" !== t5 && ("set-cookie" !== t5 ? e5.node.res.setHeader(t5, r6) : a7.push(...splitCookiesString2(r6)));
    a7.length > 0 && e5.node.res.setHeader("set-cookie", a7.map((e6) => (r5.cookieDomainRewrite && (e6 = rewriteCookieProperty(e6, r5.cookieDomainRewrite, "domain")), r5.cookiePathRewrite && (e6 = rewriteCookieProperty(e6, r5.cookiePathRewrite, "path")), e6)));
    r5.onResponse && await r5.onResponse(e5, s6);
    if (void 0 !== s6._data) return s6._data;
    if (e5.handled) return;
    if (false === r5.sendStream) {
      const t5 = new Uint8Array(await s6.arrayBuffer());
      return e5.node.res.end(t5);
    }
    if (s6.body) for await (const t5 of s6.body) e5.node.res.write(t5);
    return e5.node.res.end();
  }(e4, t3, { ...r4, fetchOptions: { method: c4, body: s5, duplex: a6, ...r4.fetchOptions, headers: u3 } });
}
function getProxyRequestHeaders(e4, t3) {
  const r4 = /* @__PURE__ */ Object.create(null), s5 = function(e5) {
    const t4 = {};
    for (const r5 in e5.node.req.headers) {
      const s6 = e5.node.req.headers[r5];
      t4[r5] = Array.isArray(s6) ? s6.filter(Boolean).join(", ") : s6;
    }
    return t4;
  }(e4);
  for (const e5 in s5) (!rr2.has(e5) || "host" === e5 && t3?.host) && (r4[e5] = s5[e5]);
  return r4;
}
function fetchWithEvent(e4, t3, r4, s5) {
  return _getFetch(s5?.fetch)(t3, { ...r4, context: r4?.context || e4.context, headers: { ...getProxyRequestHeaders(e4, { host: "string" == typeof t3 && t3.startsWith("/") }), ...r4?.headers } });
}
function _getFetch(e4) {
  if (e4) return e4;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e4, t3, r4) {
  const s5 = "string" == typeof t3 ? { "*": t3 } : t3;
  return e4.replace(new RegExp(`(;\\s*${r4}=)([^;]+)`, "gi"), (e5, t4, r5) => {
    let a6;
    if (r5 in s5) a6 = s5[r5];
    else {
      if (!("*" in s5)) return e5;
      a6 = s5["*"];
    }
    return a6 ? t4 + a6 : "";
  });
}
function isEvent(e4) {
  return hasProp2(e4, "__is_event__");
}
function createEvent(e4, t3) {
  return new H3Event2(e4, t3);
}
function defineEventHandler(e4) {
  if ("function" == typeof e4) return e4.__is_handler__ = true, e4;
  const t3 = { onRequest: _normalizeArray2(e4.onRequest), onBeforeResponse: _normalizeArray2(e4.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((r4) => async function(e5, t4, r5) {
    if (r5.onRequest) {
      for (const t5 of r5.onRequest) if (await t5(e5), e5.handled) return;
    }
    const s5 = await t4(e5), a6 = { body: s5 };
    if (r5.onBeforeResponse) for (const t5 of r5.onBeforeResponse) await t5(e5, a6);
    return a6.body;
  }(r4, e4.handler, t3), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e4.handler.__resolve__, _handler.__websocket__ = e4.websocket, _handler;
}
function _normalizeArray2(e4) {
  return e4 ? Array.isArray(e4) ? e4 : [e4] : void 0;
}
function isEventHandler(e4) {
  return hasProp2(e4, "__is_handler__");
}
function toEventHandler(e4, t3, r4) {
  return isEventHandler(e4) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r4 && "/" !== r4 ? `
     Route: ${r4}` : "", `
     Handler: ${e4}`), e4;
}
function createApp(e4 = {}) {
  const t3 = [], r4 = function(e5, t4) {
    const r5 = t4.debug ? 2 : void 0;
    return or2(async (s6) => {
      s6.node.req.originalUrl = s6.node.req.originalUrl || s6.node.req.url || "/";
      const a7 = s6._path || s6.node.req.url || "/";
      let c5;
      t4.onRequest && await t4.onRequest(s6);
      for (const u3 of e5) {
        if (u3.route.length > 1) {
          if (!a7.startsWith(u3.route)) continue;
          c5 = a7.slice(u3.route.length) || "/";
        } else c5 = a7;
        if (u3.match && !u3.match(c5, s6)) continue;
        s6._path = c5, s6.node.req.url = c5;
        const e6 = await u3.handler(s6), d6 = void 0 === e6 ? void 0 : await e6;
        if (void 0 !== d6) {
          const e7 = { body: d6 };
          return t4.onBeforeResponse && (s6._onBeforeResponseCalled = true, await t4.onBeforeResponse(s6, e7)), await handleHandlerResponse(s6, e7.body, r5), void (t4.onAfterResponse && (s6._onAfterResponseCalled = true, await t4.onAfterResponse(s6, e7)));
        }
        if (s6.handled) return void (t4.onAfterResponse && (s6._onAfterResponseCalled = true, await t4.onAfterResponse(s6, void 0)));
      }
      if (!s6.handled) throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${s6.path || "/"}.` });
      t4.onAfterResponse && (s6._onAfterResponseCalled = true, await t4.onAfterResponse(s6, void 0));
    });
  }(t3, e4), s5 = /* @__PURE__ */ function(e5) {
    return async (t4) => {
      let r5;
      for (const s6 of e5) {
        if ("/" === s6.route && !s6.handler.__resolve__) continue;
        if (!t4.startsWith(s6.route)) continue;
        if (r5 = t4.slice(s6.route.length) || "/", s6.match && !s6.match(r5, void 0)) continue;
        let e6 = { route: s6.route, handler: s6.handler };
        if (e6.handler.__resolve__) {
          const t5 = await e6.handler.__resolve__(r5);
          if (!t5) continue;
          e6 = { ...e6, ...t5, route: joinURL(e6.route || "/", t5.route || "/") };
        }
        return e6;
      }
    };
  }(t3);
  r4.__resolve__ = s5;
  const a6 = /* @__PURE__ */ function(e5) {
    let t4;
    return () => (t4 || (t4 = e5()), t4);
  }(() => {
    return t4 = s5, { ...e4.websocket, async resolve(e5) {
      const r5 = e5.request?.url || e5.url || "/", { pathname: s6 } = "string" == typeof r5 ? parseURL(r5) : r5, a7 = await t4(s6);
      return a7?.handler?.__websocket__ || {};
    } };
    var t4;
  }), c4 = { use: /* @__PURE__ */ __name((e5, t4, r5) => use(c4, e5, t4, r5), "use"), resolve: s5, handler: r4, stack: t3, options: e4, get websocket() {
    return a6();
  } };
  return c4;
}
function use(e4, t3, r4, s5) {
  if (Array.isArray(t3)) for (const a6 of t3) use(e4, a6, r4, s5);
  else if (Array.isArray(r4)) for (const a6 of r4) use(e4, t3, a6, s5);
  else "string" == typeof t3 ? e4.stack.push(normalizeLayer({ ...s5, route: t3, handler: r4 })) : "function" == typeof t3 ? e4.stack.push(normalizeLayer({ ...r4, handler: t3 })) : e4.stack.push(normalizeLayer({ ...t3 }));
  return e4;
}
function normalizeLayer(e4) {
  let t3 = e4.handler;
  return t3.handler && (t3 = t3.handler), e4.lazy ? t3 = lazyEventHandler(t3) : isEventHandler(t3) || (t3 = toEventHandler(t3, 0, e4.route)), { route: withoutTrailingSlash(e4.route), match: e4.match, handler: t3 };
}
function handleHandlerResponse(e4, t3, r4) {
  if (null === t3) return function(e5, t4) {
    if (e5.handled) return;
    t4 || 200 === e5.node.res.statusCode || (t4 = e5.node.res.statusCode);
    const r5 = sanitizeStatusCode2(t4, 204);
    204 === r5 && e5.node.res.removeHeader("content-length"), e5.node.res.writeHead(r5), e5.node.res.end();
  }(e4);
  if (t3) {
    if (a6 = t3, "undefined" != typeof Response && a6 instanceof Response) return sendWebResponse2(e4, t3);
    if (function(e5) {
      if (!e5 || "object" != typeof e5) return false;
      if ("function" == typeof e5.pipe) {
        if ("function" == typeof e5._read) return true;
        if ("function" == typeof e5.abort) return true;
      }
      return "function" == typeof e5.pipeTo;
    }(t3)) return sendStream(e4, t3);
    if (t3.buffer) return send2(e4, t3);
    if (t3.arrayBuffer && "function" == typeof t3.arrayBuffer) return t3.arrayBuffer().then((r5) => send2(e4, s4.from(r5), t3.type));
    if (t3 instanceof Error) throw createError(t3);
    if ("function" == typeof t3.end) return true;
  }
  var a6;
  const c4 = typeof t3;
  if ("string" === c4) return send2(e4, t3, Zt2.html);
  if ("object" === c4 || "boolean" === c4 || "number" === c4) return send2(e4, JSON.stringify(t3, void 0, r4), Zt2.json);
  if ("bigint" === c4) return send2(e4, t3.toString(), Zt2.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${c4} as response.` });
}
function toNodeListener(e4) {
  return async function(t3, r4) {
    const s5 = createEvent(t3, r4);
    try {
      await e4.handler(s5);
    } catch (t4) {
      const r5 = createError(t4);
      if (isError(t4) || (r5.unhandled = true), setResponseStatus(s5, r5.statusCode, r5.statusMessage), e4.options.onError && await e4.options.onError(r5, s5), s5.handled) return;
      (r5.unhandled || r5.fatal) && console.error("[h3]", r5.fatal ? "[fatal]" : "[unhandled]", r5), e4.options.onBeforeResponse && !s5._onBeforeResponseCalled && await e4.options.onBeforeResponse(s5, { body: r5 }), await function(e5, t5, r6) {
        if (e5.handled) return;
        const s6 = isError(t5) ? t5 : createError(t5), a6 = { statusCode: s6.statusCode, statusMessage: s6.statusMessage, stack: [], data: s6.data };
        if (r6 && (a6.stack = (s6.stack || "").split("\n").map((e6) => e6.trim())), e5.handled) return;
        setResponseStatus(e5, Number.parseInt(s6.statusCode), s6.statusMessage), e5.node.res.setHeader("content-type", Zt2.json), e5.node.res.end(JSON.stringify(a6, void 0, 2));
      }(s5, r5, !!e4.options.debug), e4.options.onAfterResponse && !s5._onAfterResponseCalled && await e4.options.onAfterResponse(s5, { body: r5 });
    }
  };
}
function flatHooks(e4, t3 = {}, r4) {
  for (const s5 in e4) {
    const a6 = e4[s5], c4 = r4 ? `${r4}:${s5}` : s5;
    "object" == typeof a6 && null !== a6 ? flatHooks(a6, t3, c4) : "function" == typeof a6 && (t3[c4] = a6);
  }
  return t3;
}
function serialTaskCaller(e4, t3) {
  const r4 = t3.shift(), s5 = ar2(r4);
  return e4.reduce((e5, r5) => e5.then(() => s5.run(() => r5(...t3))), Promise.resolve());
}
function parallelTaskCaller(e4, t3) {
  const r4 = t3.shift(), s5 = ar2(r4);
  return Promise.all(e4.map((e5) => s5.run(() => e5(...t3))));
}
function callEachWith(e4, t3) {
  for (const r4 of [...e4]) r4(t3);
}
function isPayloadMethod(e4 = "GET") {
  return cr2.has(e4.toUpperCase());
}
function resolveFetchOptions(e4, t3, r4, s5) {
  const a6 = function(e5, t4, r5) {
    if (!t4) return new r5(e5);
    const s6 = new r5(t4);
    if (e5) for (const [t5, a7] of Symbol.iterator in e5 || Array.isArray(e5) ? e5 : new r5(e5)) s6.set(t5, a7);
    return s6;
  }(t3?.headers ?? e4?.headers, r4?.headers, s5);
  let c4;
  return (r4?.query || r4?.params || t3?.params || t3?.query) && (c4 = { ...r4?.params, ...r4?.query, ...t3?.params, ...t3?.query }), { ...r4, ...t3, query: c4, params: c4, headers: a6 };
}
async function callHooks(e4, t3) {
  if (t3) if (Array.isArray(t3)) for (const r4 of t3) await r4(e4);
  else await t3(e4);
}
function createFetch(e4 = {}) {
  const { fetch: t3 = globalThis.fetch, Headers: r4 = globalThis.Headers, AbortController: s5 = globalThis.AbortController } = e4;
  async function onError2(e5) {
    const t4 = e5.error && "AbortError" === e5.error.name && !e5.options.timeout || false;
    if (false !== e5.options.retry && !t4) {
      let t5;
      t5 = "number" == typeof e5.options.retry ? e5.options.retry : isPayloadMethod(e5.options.method) ? 0 : 1;
      const r6 = e5.response && e5.response.status || 500;
      if (t5 > 0 && (Array.isArray(e5.options.retryStatusCodes) ? e5.options.retryStatusCodes.includes(r6) : dr2.has(r6))) {
        const r7 = "function" == typeof e5.options.retryDelay ? e5.options.retryDelay(e5) : e5.options.retryDelay || 0;
        return r7 > 0 && await new Promise((e6) => setTimeout(e6, r7)), $fetchRaw(e5.request, { ...e5.options, retry: t5 - 1 });
      }
    }
    const r5 = function(e6) {
      const t5 = e6.error?.message || e6.error?.toString() || "", r6 = e6.request?.method || e6.options?.method || "GET", s6 = e6.request?.url || String(e6.request) || "/", a6 = `[${r6}] ${JSON.stringify(s6)}`, c4 = e6.response ? `${e6.response.status} ${e6.response.statusText}` : "<no response>", u3 = new FetchError(`${a6}: ${c4}${t5 ? ` ${t5}` : ""}`, e6.error ? { cause: e6.error } : void 0);
      for (const t6 of ["request", "options", "response"]) Object.defineProperty(u3, t6, { get: /* @__PURE__ */ __name(() => e6[t6], "get") });
      for (const [t6, r7] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(u3, t6, { get: /* @__PURE__ */ __name(() => e6.response && e6.response[r7], "get") });
      return u3;
    }(e5);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, $fetchRaw), r5;
  }
  __name(onError2, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a6, c4 = {}) {
    const u3 = { request: a6, options: resolveFetchOptions(a6, c4, e4.defaults, r4), response: void 0, error: void 0 };
    let d6;
    if (u3.options.method && (u3.options.method = u3.options.method.toUpperCase()), u3.options.onRequest && await callHooks(u3, u3.options.onRequest), "string" == typeof u3.request && (u3.options.baseURL && (u3.request = function(e5, t4) {
      if (isEmptyURL(t4) || hasProtocol(e5)) return e5;
      const r5 = withoutTrailingSlash(t4);
      return e5.startsWith(r5) ? e5 : joinURL(r5, e5);
    }(u3.request, u3.options.baseURL)), u3.options.query && (u3.request = withQuery(u3.request, u3.options.query), delete u3.options.query), "query" in u3.options && delete u3.options.query, "params" in u3.options && delete u3.options.params), u3.options.body && isPayloadMethod(u3.options.method) && (!function(e5) {
      if (void 0 === e5) return false;
      const t4 = typeof e5;
      return "string" === t4 || "number" === t4 || "boolean" === t4 || null === t4 || "object" === t4 && (!!Array.isArray(e5) || !e5.buffer && (e5.constructor && "Object" === e5.constructor.name || "function" == typeof e5.toJSON));
    }(u3.options.body) ? ("pipeTo" in u3.options.body && "function" == typeof u3.options.body.pipeTo || "function" == typeof u3.options.body.pipe) && ("duplex" in u3.options || (u3.options.duplex = "half")) : (u3.options.body = "string" == typeof u3.options.body ? u3.options.body : JSON.stringify(u3.options.body), u3.options.headers = new r4(u3.options.headers || {}), u3.options.headers.has("content-type") || u3.options.headers.set("content-type", "application/json"), u3.options.headers.has("accept") || u3.options.headers.set("accept", "application/json"))), !u3.options.signal && u3.options.timeout) {
      const e5 = new s5();
      d6 = setTimeout(() => {
        const t4 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t4.name = "TimeoutError", t4.code = 23, e5.abort(t4);
      }, u3.options.timeout), u3.options.signal = e5.signal;
    }
    try {
      u3.response = await t3(u3.request, u3.options);
    } catch (e5) {
      return u3.error = e5, u3.options.onRequestError && await callHooks(u3, u3.options.onRequestError), await onError2(u3);
    } finally {
      d6 && clearTimeout(d6);
    }
    if ((u3.response.body || u3.response._bodyInit) && !hr2.has(u3.response.status) && "HEAD" !== u3.options.method) {
      const e5 = (u3.options.parseResponse ? "json" : u3.options.responseType) || function(e6 = "") {
        if (!e6) return "json";
        const t4 = e6.split(";").shift() || "";
        return ur2.test(t4) ? "json" : lr2.has(t4) || t4.startsWith("text/") ? "text" : "blob";
      }(u3.response.headers.get("content-type") || "");
      switch (e5) {
        case "json": {
          const e6 = await u3.response.text(), t4 = u3.options.parseResponse || destr;
          u3.response._data = t4(e6);
          break;
        }
        case "stream":
          u3.response._data = u3.response.body || u3.response._bodyInit;
          break;
        default:
          u3.response._data = await u3.response[e5]();
      }
    }
    return u3.options.onResponse && await callHooks(u3, u3.options.onResponse), !u3.options.ignoreResponseError && u3.response.status >= 400 && u3.response.status < 600 ? (u3.options.onResponseError && await callHooks(u3, u3.options.onResponseError), await onError2(u3)) : u3.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e5, t4) {
    return (await $fetchRaw(e5, t4))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e5) => t3(...e5), $fetch.create = (t4 = {}, r5 = {}) => createFetch({ ...e4, ...r5, defaults: { ...e4.defaults, ...r5.defaults, ...t4 } }), $fetch;
}
function asyncCall(e4, ...t3) {
  try {
    return (r4 = e4(...t3)) && "function" == typeof r4.then ? r4 : Promise.resolve(r4);
  } catch (e5) {
    return Promise.reject(e5);
  }
  var r4;
}
function stringify(e4) {
  if (/* @__PURE__ */ function(e5) {
    const t3 = typeof e5;
    return null === e5 || "object" !== t3 && "function" !== t3;
  }(e4)) return String(e4);
  if (function(e5) {
    const t3 = Object.getPrototypeOf(e5);
    return !t3 || t3.isPrototypeOf(Object);
  }(e4) || Array.isArray(e4)) return JSON.stringify(e4);
  if ("function" == typeof e4.toJSON) return stringify(e4.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e4) {
  return "string" == typeof e4 ? e4 : gr2 + function(e5) {
    if (globalThis.Buffer) return s4.from(e5).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...e5));
  }(e4);
}
function deserializeRaw(e4) {
  return "string" != typeof e4 ? e4 : e4.startsWith(gr2) ? function(e5) {
    if (globalThis.Buffer) return s4.from(e5, "base64");
    return Uint8Array.from(globalThis.atob(e5), (e6) => e6.codePointAt(0));
  }(e4.slice(7)) : e4;
}
function normalizeKey$1(e4) {
  return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e4) {
  return normalizeKey$1(e4.join(":"));
}
function normalizeBaseKey(e4) {
  return (e4 = normalizeKey$1(e4)) ? e4 + ":" : "";
}
function watch(e4, t3, r4) {
  return e4.watch ? e4.watch((e5, s5) => t3(e5, r4 + s5)) : () => {
  };
}
async function dispose(e4) {
  "function" == typeof e4.dispose && await asyncCall(e4.dispose);
}
function useStorage(e4 = "") {
  return e4 ? function(e5, t3) {
    if (!(t3 = normalizeBaseKey(t3))) return e5;
    const r4 = { ...e5 };
    for (const s5 of wr2) r4[s5] = (r5 = "", ...a6) => e5[s5](t3 + r5, ...a6);
    return r4.getKeys = (r5 = "", ...s5) => e5.getKeys(t3 + r5, ...s5).then((e6) => e6.map((e7) => e7.slice(t3.length))), r4.getItems = async (r5, s5) => {
      const a6 = r5.map((e6) => "string" == typeof e6 ? t3 + e6 : { ...e6, key: t3 + e6.key });
      return (await e5.getItems(a6, s5)).map((e6) => ({ key: e6.key.slice(t3.length), value: e6.value }));
    }, r4.setItems = async (r5, s5) => {
      const a6 = r5.map((e6) => ({ key: t3 + e6.key, value: e6.value, options: e6.options }));
      return e5.setItems(a6, s5);
    }, r4;
  }(_r2, e4) : _r2;
}
function hash$1(e4) {
  return function(e5) {
    return new k3().finalize(e5).toBase64();
  }("string" == typeof e4 ? e4 : function(e5) {
    const t3 = new Er2();
    return t3.dispatch(e5), t3.buff;
  }(e4)).replace(/[-_]/g, "").slice(0, 10);
}
function defineCachedFunction(e4, t3 = {}) {
  t3 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t3 };
  const r4 = {}, s5 = t3.group || "nitro/functions", a6 = t3.name || e4.name || "_", c4 = t3.integrity || hash$1([e4, t3]), u3 = t3.validate || ((e5) => void 0 !== e5.value);
  return async (...d6) => {
    if (await t3.shouldBypassCache?.(...d6)) return e4(...d6);
    const h4 = await (t3.getKey || getKey)(...d6), f4 = await t3.shouldInvalidateCache?.(...d6), m4 = await async function(e5, d7, h5, f5) {
      const m5 = [t3.base, s5, a6, e5 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let g4 = await useStorage().getItem(m5).catch((e6) => {
        console.error("[cache] Cache read error.", e6), useNitroApp().captureError(e6, { event: f5, tags: ["cache"] });
      }) || {};
      if ("object" != typeof g4) {
        g4 = {};
        const e6 = new Error("Malformed data read from cache.");
        console.error("[cache]", e6), useNitroApp().captureError(e6, { event: f5, tags: ["cache"] });
      }
      const _3 = 1e3 * (t3.maxAge ?? 0);
      _3 && (g4.expires = Date.now() + _3);
      const x3 = h5 || g4.integrity !== c4 || _3 && Date.now() - (g4.mtime || 0) > _3 || false === u3(g4), R4 = x3 ? (async () => {
        const s6 = r4[e5];
        s6 || (void 0 !== g4.value && (t3.staleMaxAge || 0) >= 0 && false === t3.swr && (g4.value = void 0, g4.integrity = void 0, g4.mtime = void 0, g4.expires = void 0), r4[e5] = Promise.resolve(d7()));
        try {
          g4.value = await r4[e5];
        } catch (t4) {
          throw s6 || delete r4[e5], t4;
        }
        if (!s6 && (g4.mtime = Date.now(), g4.integrity = c4, delete r4[e5], false !== u3(g4))) {
          let e6;
          t3.maxAge && !t3.swr && (e6 = { ttl: t3.maxAge });
          const r5 = useStorage().setItem(m5, g4, e6).catch((e7) => {
            console.error("[cache] Cache write error.", e7), useNitroApp().captureError(e7, { event: f5, tags: ["cache"] });
          });
          f5?.waitUntil && f5.waitUntil(r5);
        }
      })() : Promise.resolve();
      return void 0 === g4.value ? await R4 : x3 && f5 && f5.waitUntil && f5.waitUntil(R4), t3.swr && false !== u3(g4) ? (R4.catch((e6) => {
        console.error("[cache] SWR handler error.", e6), useNitroApp().captureError(e6, { event: f5, tags: ["cache"] });
      }), g4) : R4.then(() => g4);
    }(h4, () => e4(...d6), f4, d6[0] && isEvent(d6[0]) ? d6[0] : void 0);
    let g3 = m4.value;
    return t3.transform && (g3 = await t3.transform(m4, ...d6) || g3), g3;
  };
}
function getKey(...e4) {
  return e4.length > 0 ? hash$1(e4) : "";
}
function escapeKey(e4) {
  return String(e4).replace(/\W/g, "");
}
function cloneWithProxy(e4, t3) {
  return new Proxy(e4, { get: /* @__PURE__ */ __name((e5, r4, s5) => r4 in t3 ? t3[r4] : Reflect.get(e5, r4, s5), "get"), set: /* @__PURE__ */ __name((e5, r4, s5, a6) => r4 in t3 ? (t3[r4] = s5, true) : Reflect.set(e5, r4, s5, a6), "set") });
}
function klona(e4) {
  if ("object" != typeof e4) return e4;
  var t3, r4, s5 = Object.prototype.toString.call(e4);
  if ("[object Object]" === s5) {
    if (e4.constructor !== Object && "function" == typeof e4.constructor) for (t3 in r4 = new e4.constructor(), e4) e4.hasOwnProperty(t3) && r4[t3] !== e4[t3] && (r4[t3] = klona(e4[t3]));
    else for (t3 in r4 = {}, e4) "__proto__" === t3 ? Object.defineProperty(r4, t3, { value: klona(e4[t3]), configurable: true, enumerable: true, writable: true }) : r4[t3] = klona(e4[t3]);
    return r4;
  }
  if ("[object Array]" === s5) {
    for (t3 = e4.length, r4 = Array(t3); t3--; ) r4[t3] = klona(e4[t3]);
    return r4;
  }
  return "[object Set]" === s5 ? (r4 = /* @__PURE__ */ new Set(), e4.forEach(function(e5) {
    r4.add(klona(e5));
  }), r4) : "[object Map]" === s5 ? (r4 = /* @__PURE__ */ new Map(), e4.forEach(function(e5, t4) {
    r4.set(klona(t4), klona(e5));
  }), r4) : "[object Date]" === s5 ? /* @__PURE__ */ new Date(+e4) : "[object RegExp]" === s5 ? ((r4 = new RegExp(e4.source, e4.flags)).lastIndex = e4.lastIndex, r4) : "[object DataView]" === s5 ? new e4.constructor(klona(e4.buffer)) : "[object ArrayBuffer]" === s5 ? e4.slice(0) : "Array]" === s5.slice(-6) ? new e4.constructor(e4) : e4;
}
function isUppercase(e4 = "") {
  if (!Sr2.test(e4)) return e4 !== e4.toLowerCase();
}
function kebabCase(e4, t3) {
  return e4 ? (Array.isArray(e4) ? e4 : function(e5) {
    const t4 = Tr2, r4 = [];
    if (!e5 || "string" != typeof e5) return r4;
    let s5, a6, c4 = "";
    for (const u3 of e5) {
      const e6 = t4.includes(u3);
      if (true === e6) {
        r4.push(c4), c4 = "", s5 = void 0;
        continue;
      }
      const d6 = isUppercase(u3);
      if (false === a6) {
        if (false === s5 && true === d6) {
          r4.push(c4), c4 = u3, s5 = d6;
          continue;
        }
        if (true === s5 && false === d6 && c4.length > 1) {
          const e7 = c4.at(-1);
          r4.push(c4.slice(0, Math.max(0, c4.length - 1))), c4 = e7 + u3, s5 = d6;
          continue;
        }
      }
      c4 += u3, s5 = d6, a6 = e6;
    }
    return r4.push(c4), r4;
  }(e4)).map((e5) => e5.toLowerCase()).join(t3) : "";
}
function getEnv(e4, t3) {
  const r4 = (s5 = e4, kebabCase(s5 || "", "_")).toUpperCase();
  var s5;
  return destr(_.env[t3.prefix + r4] ?? _.env[t3.altPrefix + r4]);
}
function _isObject(e4) {
  return "object" == typeof e4 && !Array.isArray(e4);
}
function _expandFromEnv(e4) {
  return e4.replace(Ar2, (e5, t3) => _.env[t3] || e5);
}
function useRuntimeConfig(e4) {
  return Pr2;
}
function _deepFreeze(e4) {
  const t3 = Object.getOwnPropertyNames(e4);
  for (const r4 of t3) {
    const t4 = e4[r4];
    t4 && "object" == typeof t4 && _deepFreeze(t4);
  }
  return Object.freeze(e4);
}
function createRouteRulesHandler(e4) {
  return or2((t3) => {
    const r4 = function(e5) {
      e5.context._nitro = e5.context._nitro || {}, e5.context._nitro.routeRules || (e5.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e5.path.split("?")[0], useRuntimeConfig().app.baseURL)));
      return e5.context._nitro.routeRules;
    }(t3);
    if (r4.headers && er2(t3, r4.headers), r4.redirect) {
      let e5 = r4.redirect.to;
      if (e5.endsWith("/**")) {
        let s5 = t3.path;
        const a6 = r4.redirect._redirectStripBase;
        a6 && (s5 = withoutBase(s5, a6)), e5 = joinURL(e5.slice(0, -3), s5);
      } else if (t3.path.includes("?")) {
        e5 = withQuery(e5, getQuery(t3.path));
      }
      return function(e6, t4, r5 = 302) {
        return e6.node.res.statusCode = sanitizeStatusCode2(r5, e6.node.res.statusCode), e6.node.res.setHeader("location", t4), send2(e6, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t4.replace(/"/g, "%22")}"></head></html>`, Zt2.html);
      }(t3, e5, r4.redirect.statusCode);
    }
    if (r4.proxy) {
      let s5 = r4.proxy.to;
      if (s5.endsWith("/**")) {
        let e5 = t3.path;
        const a6 = r4.proxy._proxyStripBase;
        a6 && (e5 = withoutBase(e5, a6)), s5 = joinURL(s5.slice(0, -3), e5);
      } else if (t3.path.includes("?")) {
        s5 = withQuery(s5, getQuery(t3.path));
      }
      return proxyRequest(t3, s5, { fetch: e4.localFetch, ...r4.proxy });
    }
  });
}
function getRouteRulesForPath(e4) {
  return Lt2({}, ...qr2.matchAll(e4).reverse());
}
function joinHeaders(e4) {
  return Array.isArray(e4) ? e4.join(", ") : String(e4);
}
function normalizeCookieHeader(e4 = "") {
  return splitCookiesString2(joinHeaders(e4));
}
function normalizeCookieHeaders(e4) {
  const t3 = new Headers();
  for (const [r4, s5] of e4) if ("set-cookie" === r4) for (const e5 of normalizeCookieHeader(s5)) t3.append("set-cookie", e5);
  else t3.set(r4, joinHeaders(s5));
  return t3;
}
function defaultHandler(e4, t3, r4) {
  const s5 = e4.unhandled || e4.fatal, a6 = e4.statusCode || 500, c4 = e4.statusMessage || "Server Error", u3 = function(e5, t4 = {}) {
    const r5 = function(e6, t5 = {}) {
      if (t5.xForwardedHost) {
        const t6 = e6.node.req.headers["x-forwarded-host"];
        if (t6) return t6;
      }
      return e6.node.req.headers.host || "localhost";
    }(e5, t4), s6 = function(e6, t5 = {}) {
      return false !== t5.xForwardedProto && "https" === e6.node.req.headers["x-forwarded-proto"] || e6.node.req.connection?.encrypted ? "https" : "http";
    }(e5, t4), a7 = (e5.node.req.originalUrl || e5.path).replace(/^[/\\]+/g, "/");
    return new URL(a7, `${s6}://${r5}`);
  }(t3, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a6) {
    const e5 = "/";
    if (/^\/[^/]/.test(e5) && !u3.pathname.startsWith(e5)) {
      return { status: 302, statusText: "Found", headers: { location: `${e5}${u3.pathname.slice(1)}${u3.search}` }, body: "Redirecting..." };
    }
  }
  if (s5 && !r4?.silent) {
    const r5 = [e4.unhandled && "[unhandled]", e4.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${r5} [${t3.method}] ${u3}
`, e4);
  }
  const d6 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t3, a6, c4), 404 !== a6 && function(e5, t4) {
    return e5.node.res.getHeader(t4);
  }(t3, "cache-control") || (d6["cache-control"] = "no-cache");
  return { status: a6, statusText: c4, headers: d6, body: { error: true, url: u3.href, statusCode: a6, statusMessage: c4, message: s5 ? "Server Error" : e4.message, data: s5 ? void 0 : e4.data } };
}
function useNitroApp() {
  return Kr2;
}
var WriteStream2, ReadStream2, d5, Process2, h3, f3, _getEnv, m3, g2, _, x2, R3, E3, C3, S3, T3, H2, j2, P3, I3, M2, O3, N3, B2, q2, U3, z2, $2, L3, K3, D3, W3, F3, Q2, J2, V3, G2, Z2, Y3, X3, ee2, te2, re2, oe2, ne2, se2, ae2, ie2, ce2, le2, ue2, de2, he2, fe2, pe2, me2, ye2, ge2, we2, ve2, be2, _e2, xe2, ke2, Re2, Ee2, Ce2, Se2, Te2, Ae2, He2, je2, Pe2, Ie2, Me2, Oe2, Ne2, Be2, qe2, Ue2, ze2, $e2, Le2, Ke2, De2, We2, Fe2, Qe2, Je2, Ve2, Ge2, Ze2, Ye2, Xe2, et2, tt2, rt2, ot2, nt2, st2, at2, it2, ct2, lt2, ut2, dt2, ht2, ft2, pt2, mt2, yt2, gt2, wt2, vt2, bt2, _t2, xt2, kt2, Rt2, Et2, Ct2, St2, Tt2, At2, Ht2, jt2, Pt2, It2, Mt2, Ot2, Nt2, Bt2, qt2, Ut2, zt2, $t2, Lt2, Kt2, i4, Dt2, Wt2, Ft2, A3, y2, w3, Qt2, Jt2, H3Error2, Vt2, Gt2, Zt2, Yt2, Xt2, er2, tr2, rr2, H3Event2, or2, lazyEventHandler, nr2, sr2, ar2, Hookable, ir, FetchError, cr2, lr2, ur2, dr2, hr2, fr2, pr2, mr2, yr2, gr2, wr2, memory, vr2, normalizeKey, br2, _r2, xr2, kr2, Rr2, k3, l4, Er2, cachedEventHandler, Cr2, Sr2, Tr2, Ar2, Hr2, jr2, Pr2, Ir2, Mr2, Or2, Nr2, Br2, qr2, Ur2, zr2, $r2, Lr2, Kr2, Dr2, Wr2, Fr2, Qr2, Jr2, Vr2, Gr2, Zr2, Yr2, Xr2, eo2, to2, ro2, oo2, no2, so2, ao2, io2, co2, lo2, uo2, ho2, fo2, po2, mo2, yo2, go2, wo, vo2, bo2, _o2, xo2, ko2, Ro2, Eo2, Co2, So2, To2, Ao2, Ho2, jo2, Po2, Io2, Mo2, Oo2, No2, Bo2, qo2, Uo2, zo2, $o2, Lo2, Ko2, Do2, Wo2, Fo2, Qo2, Jo2, Vo2, Go2, Zo2, Yo2, Xo2, en2, tn2, rn2, on3, nn2, sn2, an2, cn2;
var init_nitro = __esm({
  ".output/server/chunks/nitro/nitro.mjs"() {
    "use strict";
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_process2();
    init_crypto2();
    "global" in globalThis || (globalThis.global = globalThis);
    WriteStream2 = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      clearLine(e4, t3) {
        return t3 && t3(), false;
      }
      clearScreenDown(e4) {
        return e4 && e4(), false;
      }
      cursorTo(e4, t3, r4) {
        return r4 && "function" == typeof r4 && r4(), false;
      }
      moveCursor(e4, t3, r4) {
        return r4 && r4(), false;
      }
      getColorDepth(e4) {
        return 1;
      }
      hasColors(e4, t3) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e4, t3, r4) {
        e4 instanceof Uint8Array && (e4 = new TextDecoder().decode(e4));
        try {
          console.log(e4);
        } catch {
        }
        return r4 && "function" == typeof r4 && r4(), false;
      }
    };
    ReadStream2 = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      setRawMode(e4) {
        return this.isRaw = e4, this;
      }
    };
    __name(createNotImplementedError2, "createNotImplementedError");
    __name(notImplemented2, "notImplemented");
    d5 = "22.14.0";
    Process2 = class _Process extends r3 {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(e4) {
        super(), this.env = e4.env, this.hrtime = e4.hrtime, this.nextTick = e4.nextTick;
        for (const e5 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(r3.prototype)]) {
          const t3 = this[e5];
          "function" == typeof t3 && (this[e5] = t3.bind(this));
        }
      }
      emitWarning(e4, t3, r4) {
        console.warn(`${r4 ? `[${r4}] ` : ""}${t3 ? `${t3}: ` : ""}${e4}`);
      }
      emit(...e4) {
        return super.emit(...e4);
      }
      listeners(e4) {
        return super.listeners(e4);
      }
      #e;
      #t;
      #r;
      get stdin() {
        return this.#e ??= new ReadStream2(0);
      }
      get stdout() {
        return this.#t ??= new WriteStream2(1);
      }
      get stderr() {
        return this.#r ??= new WriteStream2(2);
      }
      #o = "/";
      chdir(e4) {
        this.#o = e4;
      }
      cwd() {
        return this.#o;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${d5}`;
      }
      get versions() {
        return { node: d5 };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError2("process.umask");
      }
      getBuiltinModule() {
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError2("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError2("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError2("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError2("process.kill");
      }
      abort() {
        throw createNotImplementedError2("process.abort");
      }
      dlopen() {
        throw createNotImplementedError2("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError2("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError2("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError2("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError2("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError2("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError2("process.openStdin");
      }
      assert() {
        throw createNotImplementedError2("process.assert");
      }
      binding() {
        throw createNotImplementedError2("process.binding");
      }
      permission = { has: notImplemented2("process.permission.has") };
      report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: notImplemented2("process.report.getReport"), writeReport: notImplemented2("process.report.writeReport") };
      finalization = { register: notImplemented2("process.finalization.register"), unregister: notImplemented2("process.finalization.unregister"), registerBeforeExit: notImplemented2("process.finalization.registerBeforeExit") };
      memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    h3 = /* @__PURE__ */ Object.create(null);
    f3 = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e4) => globalThis.__env__ || f3?.env || (e4 ? h3 : globalThis), "_getEnv");
    m3 = new Proxy(h3, { get: /* @__PURE__ */ __name((e4, t3) => _getEnv()[t3] ?? h3[t3], "get"), has: /* @__PURE__ */ __name((e4, t3) => t3 in _getEnv() || t3 in h3, "has"), set: /* @__PURE__ */ __name((e4, t3, r4) => (_getEnv(true)[t3] = r4, true), "set"), deleteProperty: /* @__PURE__ */ __name((e4, t3) => (delete _getEnv(true)[t3], true), "deleteProperty"), ownKeys() {
      const e4 = _getEnv();
      return Object.keys(e4);
    }, getOwnPropertyDescriptor(e4, t3) {
      const r4 = _getEnv();
      if (t3 in r4) return { value: r4[t3], writable: true, enumerable: true, configurable: true };
    } });
    g2 = Object.assign(function(e4) {
      const t3 = Date.now(), r4 = Math.trunc(t3 / 1e3), s5 = t3 % 1e3 * 1e6;
      if (e4) {
        let t4 = r4 - e4[0], a6 = s5 - e4[0];
        return a6 < 0 && (t4 -= 1, a6 = 1e9 + a6), [t4, a6];
      }
      return [r4, s5];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") });
    globalThis.__env__ = t2;
    _ = new Process2({ env: m3, hrtime: g2, nextTick: process_default.nextTick });
    for (const t3 of ["exit", "getBuiltinModule", "platform"]) t3 in process_default && (_[t3] = process_default[t3]);
    process_default.features && Object.defineProperty(_, "features", { get: /* @__PURE__ */ __name(() => process_default.features, "get") });
    ({ abort: x2, addListener: R3, allowedNodeEnvironmentFlags: E3, hasUncaughtExceptionCaptureCallback: C3, setUncaughtExceptionCaptureCallback: S3, loadEnvFile: T3, sourceMapsEnabled: H2, arch: j2, argv: P3, argv0: I3, chdir: M2, config: O3, connected: N3, constrainedMemory: B2, availableMemory: q2, cpuUsage: U3, cwd: z2, debugPort: $2, dlopen: L3, disconnect: K3, emit: D3, emitWarning: W3, env: F3, eventNames: Q2, execArgv: J2, execPath: V3, exit: G2, finalization: Z2, features: Y3, getBuiltinModule: X3, getActiveResourcesInfo: ee2, getMaxListeners: te2, hrtime: re2, kill: oe2, listeners: ne2, listenerCount: se2, memoryUsage: ae2, nextTick: ie2, on: ce2, off: le2, once: ue2, pid: de2, platform: he2, ppid: fe2, prependListener: pe2, prependOnceListener: me2, rawListeners: ye2, release: ge2, removeAllListeners: we2, removeListener: ve2, report: be2, resourceUsage: _e2, setMaxListeners: xe2, setSourceMapsEnabled: ke2, stderr: Re2, stdin: Ee2, stdout: Ce2, title: Se2, umask: Te2, uptime: Ae2, version: He2, versions: je2, domain: Pe2, initgroups: Ie2, moduleLoadList: Me2, reallyExit: Oe2, openStdin: Ne2, assert: Be2, binding: qe2, send: Ue2, exitCode: ze2, channel: $e2, getegid: Le2, geteuid: Ke2, getgid: De2, getgroups: We2, getuid: Fe2, setegid: Qe2, seteuid: Je2, setgid: Ve2, setgroups: Ge2, setuid: Ze2, permission: Ye2, mainModule: Xe2, _events: et2, _eventsCount: tt2, _exiting: rt2, _maxListeners: ot2, _debugEnd: nt2, _debugProcess: st2, _fatalException: at2, _getActiveHandles: it2, _getActiveRequests: ct2, _kill: lt2, _preload_modules: ut2, _rawDebug: dt2, _startProfilerIdleNotifier: ht2, _stopProfilerIdleNotifier: ft2, _tickCallback: pt2, _disconnect: mt2, _handleQueue: yt2, _pendingMessage: gt2, _channel: wt2, _send: vt2, _linkedBinding: bt2 } = _);
    _t2 = globalThis.process;
    globalThis.process = _t2 ? new Proxy(_t2, { get: /* @__PURE__ */ __name((e4, t3, r4) => Reflect.has(e4, t3) ? Reflect.get(e4, t3, r4) : Reflect.get(_, t3, r4), "get") }) : _, globalThis.Buffer || (globalThis.Buffer = s4), globalThis.setImmediate || (globalThis.setImmediate = a5), globalThis.clearImmediate || (globalThis.clearImmediate = c3);
    xt2 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    kt2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    Rt2 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    Et2 = /#/g;
    Ct2 = /&/g;
    St2 = /\//g;
    Tt2 = /=/g;
    At2 = /\+/g;
    Ht2 = /%5e/gi;
    jt2 = /%60/gi;
    Pt2 = /%7c/gi;
    It2 = /%20/gi;
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(decode, "decode");
    __name(decodeQueryKey, "decodeQueryKey");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    Mt2 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Ot2 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Nt2 = /^([/\\]\s*){2,}[^/\\]/;
    Bt2 = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withoutBase, "withoutBase");
    __name(withQuery, "withQuery");
    __name(getQuery, "getQuery");
    __name(isEmptyURL, "isEmptyURL");
    __name(joinURL, "joinURL");
    qt2 = Symbol.for("ufo:protocolRelative");
    __name(parseURL, "parseURL");
    __name(parsePath, "parsePath");
    Ut2 = 0;
    zt2 = 1;
    $t2 = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    __name(isPlainObject2, "isPlainObject");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    Lt2 = createDefu();
    Kt2 = createDefu((e4, t3, r4) => {
      if (void 0 !== e4[t3] && "function" == typeof r4) return e4[t3] = r4(e4[t3]), true;
    });
    __name(o4, "o");
    i4 = class _i2 extends r3 {
      static {
        __name(this, "i");
      }
      __unenv__ = {};
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e4, t3) {
        return new _i2(t3);
      }
      constructor(e4) {
        super();
      }
      _read(e4) {
      }
      read(e4) {
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e4) {
        return this;
      }
      unshift(e4, t3) {
      }
      wrap(e4) {
        return this;
      }
      push(e4, t3) {
        return false;
      }
      _destroy(e4, t3) {
        this.removeAllListeners();
      }
      destroy(e4) {
        return this.destroyed = true, this._destroy(e4), this;
      }
      pipe(e4, t3) {
        return {};
      }
      compose(e4, t3) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o4("Readable.asyncIterator");
      }
      iterator(e4) {
        throw o4("Readable.iterator");
      }
      map(e4, t3) {
        throw o4("Readable.map");
      }
      filter(e4, t3) {
        throw o4("Readable.filter");
      }
      forEach(e4, t3) {
        throw o4("Readable.forEach");
      }
      reduce(e4, t3, r4) {
        throw o4("Readable.reduce");
      }
      find(e4, t3) {
        throw o4("Readable.find");
      }
      findIndex(e4, t3) {
        throw o4("Readable.findIndex");
      }
      some(e4, t3) {
        throw o4("Readable.some");
      }
      toArray(e4) {
        throw o4("Readable.toArray");
      }
      every(e4, t3) {
        throw o4("Readable.every");
      }
      flatMap(e4, t3) {
        throw o4("Readable.flatMap");
      }
      drop(e4, t3) {
        throw o4("Readable.drop");
      }
      take(e4, t3) {
        throw o4("Readable.take");
      }
      asIndexedPairs(e4) {
        throw o4("Readable.asIndexedPairs");
      }
    };
    Dt2 = class extends r3 {
      static {
        __name(this, "Dt");
      }
      __unenv__ = {};
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      writableAborted = false;
      destroyed = false;
      _data;
      _encoding = "utf8";
      constructor(e4) {
        super();
      }
      pipe(e4, t3) {
        return {};
      }
      _write(e4, t3, r4) {
        if (this.writableEnded) r4 && r4();
        else {
          if (void 0 === this._data) this._data = e4;
          else {
            const r5 = "string" == typeof this._data ? s4.from(this._data, this._encoding || t3 || "utf8") : this._data, a6 = "string" == typeof e4 ? s4.from(e4, t3 || this._encoding || "utf8") : e4;
            this._data = s4.concat([r5, a6]);
          }
          this._encoding = t3, r4 && r4();
        }
      }
      _writev(e4, t3) {
      }
      _destroy(e4, t3) {
      }
      _final(e4) {
      }
      write(e4, t3, r4) {
        const s5 = "string" == typeof t3 ? this._encoding : "utf8", a6 = "function" == typeof t3 ? t3 : "function" == typeof r4 ? r4 : void 0;
        return this._write(e4, s5, a6), true;
      }
      setDefaultEncoding(e4) {
        return this;
      }
      end(e4, t3, r4) {
        const s5 = "function" == typeof e4 ? e4 : "function" == typeof t3 ? t3 : "function" == typeof r4 ? r4 : void 0;
        if (this.writableEnded) return s5 && s5(), this;
        const a6 = e4 === s5 ? void 0 : e4;
        if (a6) {
          const e5 = t3 === s5 ? void 0 : t3;
          this.write(a6, e5, s5);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e4) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e4, t3) {
        throw new Error("Method not implemented.");
      }
    };
    Wt2 = class {
      static {
        __name(this, "Wt");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e4 = new i4(), t3 = new Dt2()) {
        Object.assign(this, e4), Object.assign(this, t3), this._destroy = /* @__PURE__ */ function(...e5) {
          return function(...t4) {
            for (const r4 of e5) r4(...t4);
          };
        }(e4._destroy, t3._destroy);
      }
    };
    Ft2 = (Object.assign(Wt2.prototype, i4.prototype), Object.assign(Wt2.prototype, Dt2.prototype), Wt2);
    A3 = class extends Ft2 {
      static {
        __name(this, "A");
      }
      __unenv__ = {};
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e4) {
        super();
      }
      write(e4, t3, r4) {
        return false;
      }
      connect(e4, t3, r4) {
        return this;
      }
      end(e4, t3, r4) {
        return this;
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e4, t3) {
        return this;
      }
      setNoDelay(e4) {
        return this;
      }
      setKeepAlive(e4, t3) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e4 = new Error("ERR_SOCKET_CLOSED");
        return e4.code = "ERR_SOCKET_CLOSED", this.destroy(e4), this;
      }
    };
    y2 = class extends i4 {
      static {
        __name(this, "y");
      }
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e4) {
        super(), this.socket = this.connection = e4 || new A3();
      }
      get rawHeaders() {
        const e4 = this.headers, t3 = [];
        for (const r4 in e4) if (Array.isArray(e4[r4])) for (const s5 of e4[r4]) t3.push(r4, s5);
        else t3.push(r4, e4[r4]);
        return t3;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e4, t3) {
        return this;
      }
      get headersDistinct() {
        return p3(this.headers);
      }
      get trailersDistinct() {
        return p3(this.trailers);
      }
    };
    __name(p3, "p");
    w3 = class extends Dt2 {
      static {
        __name(this, "w");
      }
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e4) {
        super(), this.req = e4;
      }
      assignSocket(e4) {
        e4._httpMessage = this, this.socket = e4, this.connection = e4, this.emit("socket", e4), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e4) {
      }
      writeContinue(e4) {
      }
      writeHead(e4, t3, r4) {
        e4 && (this.statusCode = e4), "string" == typeof t3 && (this.statusMessage = t3, t3 = void 0);
        const s5 = r4 || t3;
        if (s5 && !Array.isArray(s5)) for (const e5 in s5) this.setHeader(e5, s5[e5]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e4, t3) {
        return this;
      }
      appendHeader(e4, t3) {
        e4 = e4.toLowerCase();
        const r4 = this._headers[e4], s5 = [...Array.isArray(r4) ? r4 : [r4], ...Array.isArray(t3) ? t3 : [t3]].filter(Boolean);
        return this._headers[e4] = s5.length > 1 ? s5 : s5[0], this;
      }
      setHeader(e4, t3) {
        return this._headers[e4.toLowerCase()] = t3, this;
      }
      setHeaders(e4) {
        for (const [t3, r4] of Object.entries(e4)) this.setHeader(t3, r4);
        return this;
      }
      getHeader(e4) {
        return this._headers[e4.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e4) {
        return e4.toLowerCase() in this._headers;
      }
      removeHeader(e4) {
        delete this._headers[e4.toLowerCase()];
      }
      addTrailers(e4) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e4, t3) {
        "function" == typeof t3 && t3();
      }
    };
    Qt2 = (() => {
      const n2 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n2.prototype = /* @__PURE__ */ Object.create(null), n2;
    })();
    __name(v2, "v");
    Jt2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b2, "b");
    __name(hasProp2, "hasProp");
    H3Error2 = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e4, t3 = {}) {
        super(e4, t3), t3.cause && !this.cause && (this.cause = t3.cause);
      }
      toJSON() {
        const e4 = { message: this.message, statusCode: sanitizeStatusCode2(this.statusCode, 500) };
        return this.statusMessage && (e4.statusMessage = sanitizeStatusMessage2(this.statusMessage)), void 0 !== this.data && (e4.data = this.data), e4;
      }
    };
    __name(createError, "createError");
    __name(isError, "isError");
    Vt2 = Symbol.for("h3RawBody");
    Gt2 = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(handleCacheHeaders, "handleCacheHeaders");
    Zt2 = { html: "text/html", json: "application/json" };
    Yt2 = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage2, "sanitizeStatusMessage");
    __name(sanitizeStatusCode2, "sanitizeStatusCode");
    __name(splitCookiesString2, "splitCookiesString");
    Xt2 = void 0 === a5 ? (e4) => e4() : a5;
    __name(send2, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(setResponseHeaders, "setResponseHeaders");
    er2 = setResponseHeaders;
    __name(sendStream, "sendStream");
    __name(sendWebResponse2, "sendWebResponse");
    tr2 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    rr2 = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    __name(proxyRequest, "proxyRequest");
    __name(getProxyRequestHeaders, "getProxyRequestHeaders");
    __name(fetchWithEvent, "fetchWithEvent");
    __name(_getFetch, "_getFetch");
    __name(rewriteCookieProperty, "rewriteCookieProperty");
    H3Event2 = class {
      static {
        __name(this, "H3Event");
      }
      __is_event__ = true;
      node;
      web;
      context = {};
      _method;
      _path;
      _headers;
      _requestBody;
      _handled = false;
      _onBeforeResponseCalled;
      _onAfterResponseCalled;
      constructor(e4, t3) {
        this.node = { req: e4, res: t3 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e4) {
          const t3 = new Headers();
          for (const [r4, s5] of Object.entries(e4)) if (Array.isArray(s5)) for (const e5 of s5) t3.append(r4, e5);
          else s5 && t3.set(r4, s5);
          return t3;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e4) {
        return Promise.resolve(e4).then((e5) => sendWebResponse2(this, e5));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(isEvent, "isEvent");
    __name(createEvent, "createEvent");
    __name(defineEventHandler, "defineEventHandler");
    __name(_normalizeArray2, "_normalizeArray");
    or2 = defineEventHandler;
    __name(isEventHandler, "isEventHandler");
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e4) {
      let t3, r4;
      const resolveHandler = /* @__PURE__ */ __name(() => r4 ? Promise.resolve(r4) : (t3 || (t3 = Promise.resolve(e4()).then((e5) => {
        const t4 = e5.default || e5;
        if ("function" != typeof t4) throw new TypeError("Invalid lazy handler result. It should be a function:", t4);
        return r4 = { handler: toEventHandler(e5.default || e5) }, r4;
      })), t3), "resolveHandler"), s5 = or2((e5) => r4 ? r4.handler(e5) : resolveHandler().then((t4) => t4.handler(e5)));
      return s5.__resolve__ = resolveHandler, s5;
    }, "lazyEventHandler");
    __name(createApp, "createApp");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    nr2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks, "flatHooks");
    sr2 = { run: /* @__PURE__ */ __name((e4) => e4(), "run") };
    ar2 = void 0 !== console.createTask ? console.createTask : () => sr2;
    __name(serialTaskCaller, "serialTaskCaller");
    __name(parallelTaskCaller, "parallelTaskCaller");
    __name(callEachWith, "callEachWith");
    Hookable = class {
      static {
        __name(this, "Hookable");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e4, t3, r4 = {}) {
        if (!e4 || "function" != typeof t3) return () => {
        };
        const s5 = e4;
        let a6;
        for (; this._deprecatedHooks[e4]; ) a6 = this._deprecatedHooks[e4], e4 = a6.to;
        if (a6 && !r4.allowDeprecated) {
          let e5 = a6.message;
          e5 || (e5 = `${s5} hook has been deprecated` + (a6.to ? `, please use ${a6.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e5) || (console.warn(e5), this._deprecatedMessages.add(e5));
        }
        if (!t3.name) try {
          Object.defineProperty(t3, "name", { get: /* @__PURE__ */ __name(() => "_" + e4.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t3), () => {
          t3 && (this.removeHook(e4, t3), t3 = void 0);
        };
      }
      hookOnce(e4, t3) {
        let r4, _function = /* @__PURE__ */ __name((...e5) => ("function" == typeof r4 && r4(), r4 = void 0, _function = void 0, t3(...e5)), "_function");
        return r4 = this.hook(e4, _function), r4;
      }
      removeHook(e4, t3) {
        if (this._hooks[e4]) {
          const r4 = this._hooks[e4].indexOf(t3);
          -1 !== r4 && this._hooks[e4].splice(r4, 1), 0 === this._hooks[e4].length && delete this._hooks[e4];
        }
      }
      deprecateHook(e4, t3) {
        this._deprecatedHooks[e4] = "string" == typeof t3 ? { to: t3 } : t3;
        const r4 = this._hooks[e4] || [];
        delete this._hooks[e4];
        for (const t4 of r4) this.hook(e4, t4);
      }
      deprecateHooks(e4) {
        Object.assign(this._deprecatedHooks, e4);
        for (const t3 in e4) this.deprecateHook(t3, e4[t3]);
      }
      addHooks(e4) {
        const t3 = flatHooks(e4), r4 = Object.keys(t3).map((e5) => this.hook(e5, t3[e5]));
        return () => {
          for (const e5 of r4.splice(0, r4.length)) e5();
        };
      }
      removeHooks(e4) {
        const t3 = flatHooks(e4);
        for (const e5 in t3) this.removeHook(e5, t3[e5]);
      }
      removeAllHooks() {
        for (const e4 in this._hooks) delete this._hooks[e4];
      }
      callHook(e4, ...t3) {
        return t3.unshift(e4), this.callHookWith(serialTaskCaller, e4, ...t3);
      }
      callHookParallel(e4, ...t3) {
        return t3.unshift(e4), this.callHookWith(parallelTaskCaller, e4, ...t3);
      }
      callHookWith(e4, t3, ...r4) {
        const s5 = this._before || this._after ? { name: t3, args: r4, context: {} } : void 0;
        this._before && callEachWith(this._before, s5);
        const a6 = e4(t3 in this._hooks ? [...this._hooks[t3]] : [], r4);
        return a6 instanceof Promise ? a6.finally(() => {
          this._after && s5 && callEachWith(this._after, s5);
        }) : (this._after && s5 && callEachWith(this._after, s5), a6);
      }
      beforeEach(e4) {
        return this._before = this._before || [], this._before.push(e4), () => {
          if (void 0 !== this._before) {
            const t3 = this._before.indexOf(e4);
            -1 !== t3 && this._before.splice(t3, 1);
          }
        };
      }
      afterEach(e4) {
        return this._after = this._after || [], this._after.push(e4), () => {
          if (void 0 !== this._after) {
            const t3 = this._after.indexOf(e4);
            -1 !== t3 && this._after.splice(t3, 1);
          }
        };
      }
    };
    ir = globalThis;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e4, t3) {
        super(e4, t3), this.name = "FetchError", t3?.cause && !this.cause && (this.cause = t3.cause);
      }
    };
    cr2 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    lr2 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    ur2 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks, "callHooks");
    dr2 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    hr2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch, "createFetch");
    fr2 = function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== ir) return ir;
      throw new Error("unable to locate global object");
    }();
    pr2 = fr2.fetch ? (...e4) => fr2.fetch(...e4) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    mr2 = fr2.Headers;
    yr2 = fr2.AbortController;
    __name(asyncCall, "asyncCall");
    __name(stringify, "stringify");
    createFetch({ fetch: pr2, Headers: mr2, AbortController: yr2 });
    gr2 = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    wr2 = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    __name(normalizeKey$1, "normalizeKey$1");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e4 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e4, "getInstance"), hasItem: /* @__PURE__ */ __name((t3) => e4.has(t3), "hasItem"), getItem: /* @__PURE__ */ __name((t3) => e4.get(t3) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t3) => e4.get(t3) ?? null, "getItemRaw"), setItem(t3, r4) {
        e4.set(t3, r4);
      }, setItemRaw(t3, r4) {
        e4.set(t3, r4);
      }, removeItem(t3) {
        e4.delete(t3);
      }, getKeys: /* @__PURE__ */ __name(() => [...e4.keys()], "getKeys"), clear() {
        e4.clear();
      }, dispose() {
        e4.clear();
      } };
    }, "memory");
    __name(watch, "watch");
    __name(dispose, "dispose");
    vr2 = {};
    normalizeKey = /* @__PURE__ */ __name(function(e4) {
      return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey");
    br2 = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(vr2)), "getKeys"), hasItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey(e4), Promise.resolve(e4 in vr2)), "hasItem"), getItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey(e4), Promise.resolve(vr2[e4] ? vr2[e4].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey(e4), Promise.resolve(vr2[e4] ? vr2[e4].meta : {})), "getMeta") };
    _r2 = function(e4 = {}) {
      const t3 = { mounts: { "": e4.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = /* @__PURE__ */ __name((e5) => {
        for (const r5 of t3.mountpoints) if (e5.startsWith(r5)) return { base: r5, relativeKey: e5.slice(r5.length), driver: t3.mounts[r5] };
        return { base: "", relativeKey: e5, driver: t3.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e5, r5) => t3.mountpoints.filter((t4) => t4.startsWith(e5) || r5 && e5.startsWith(t4)).map((r6) => ({ relativeBase: e5.length > r6.length ? e5.slice(r6.length) : void 0, mountpoint: r6, driver: t3.mounts[r6] })), "getMounts"), onChange = /* @__PURE__ */ __name((e5, r5) => {
        if (t3.watching) {
          r5 = normalizeKey$1(r5);
          for (const s5 of t3.watchListeners) s5(e5, r5);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t3.watching) {
          for (const e5 in t3.unwatch) await t3.unwatch[e5]();
          t3.unwatch = {}, t3.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e5, t4, r5) => {
        const s5 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e6) => {
          let t5 = s5.get(e6.base);
          return t5 || (t5 = { driver: e6.driver, base: e6.base, items: [] }, s5.set(e6.base, t5)), t5;
        }, "getBatch");
        for (const r6 of e5) {
          const e6 = "string" == typeof r6, s6 = normalizeKey$1(e6 ? r6 : r6.key), a6 = e6 ? void 0 : r6.value, c4 = e6 || !r6.options ? t4 : { ...t4, ...r6.options }, u3 = getMount(s6);
          getBatch(u3).items.push({ key: s6, value: a6, relativeKey: u3.relativeKey, options: c4 });
        }
        return Promise.all([...s5.values()].map((e6) => r5(e6))).then((e6) => e6.flat());
      }, "runBatch"), r4 = { hasItem(e5, t4 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s5 } = getMount(e5);
        return asyncCall(s5.hasItem, r5, t4);
      }, getItem(e5, t4 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s5 } = getMount(e5);
        return asyncCall(s5.getItem, r5, t4).then((e6) => destr(e6));
      }, getItems: /* @__PURE__ */ __name((e5, t4 = {}) => runBatch(e5, t4, (e6) => e6.driver.getItems ? asyncCall(e6.driver.getItems, e6.items.map((e7) => ({ key: e7.relativeKey, options: e7.options })), t4).then((t5) => t5.map((t6) => ({ key: joinKeys(e6.base, t6.key), value: destr(t6.value) }))) : Promise.all(e6.items.map((t5) => asyncCall(e6.driver.getItem, t5.relativeKey, t5.options).then((e7) => ({ key: t5.key, value: destr(e7) }))))), "getItems"), getItemRaw(e5, t4 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s5 } = getMount(e5);
        return s5.getItemRaw ? asyncCall(s5.getItemRaw, r5, t4) : asyncCall(s5.getItem, r5, t4).then((e6) => deserializeRaw(e6));
      }, async setItem(e5, t4, s5 = {}) {
        if (void 0 === t4) return r4.removeItem(e5);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a6, driver: c4 } = getMount(e5);
        c4.setItem && (await asyncCall(c4.setItem, a6, stringify(t4), s5), c4.watch || onChange("update", e5));
      }, async setItems(e5, t4) {
        await runBatch(e5, t4, async (e6) => {
          if (e6.driver.setItems) return asyncCall(e6.driver.setItems, e6.items.map((e7) => ({ key: e7.relativeKey, value: stringify(e7.value), options: e7.options })), t4);
          e6.driver.setItem && await Promise.all(e6.items.map((t5) => asyncCall(e6.driver.setItem, t5.relativeKey, stringify(t5.value), t5.options)));
        });
      }, async setItemRaw(e5, t4, s5 = {}) {
        if (void 0 === t4) return r4.removeItem(e5, s5);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a6, driver: c4 } = getMount(e5);
        if (c4.setItemRaw) await asyncCall(c4.setItemRaw, a6, t4, s5);
        else {
          if (!c4.setItem) return;
          await asyncCall(c4.setItem, a6, serializeRaw(t4), s5);
        }
        c4.watch || onChange("update", e5);
      }, async removeItem(e5, t4 = {}) {
        "boolean" == typeof t4 && (t4 = { removeMeta: t4 }), e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s5 } = getMount(e5);
        s5.removeItem && (await asyncCall(s5.removeItem, r5, t4), (t4.removeMeta || t4.removeMata) && await asyncCall(s5.removeItem, r5 + "$", t4), s5.watch || onChange("remove", e5));
      }, async getMeta(e5, t4 = {}) {
        "boolean" == typeof t4 && (t4 = { nativeOnly: t4 }), e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s5 } = getMount(e5), a6 = /* @__PURE__ */ Object.create(null);
        if (s5.getMeta && Object.assign(a6, await asyncCall(s5.getMeta, r5, t4)), !t4.nativeOnly) {
          const e6 = await asyncCall(s5.getItem, r5 + "$", t4).then((e7) => destr(e7));
          e6 && "object" == typeof e6 && ("string" == typeof e6.atime && (e6.atime = new Date(e6.atime)), "string" == typeof e6.mtime && (e6.mtime = new Date(e6.mtime)), Object.assign(a6, e6));
        }
        return a6;
      }, setMeta(e5, t4, r5 = {}) {
        return this.setItem(e5 + "$", t4, r5);
      }, removeMeta(e5, t4 = {}) {
        return this.removeItem(e5 + "$", t4);
      }, async getKeys(e5, t4 = {}) {
        e5 = normalizeBaseKey(e5);
        const r5 = getMounts(e5, true);
        let s5 = [];
        const a6 = [];
        let c4 = true;
        for (const e6 of r5) {
          e6.driver.flags?.maxDepth || (c4 = false);
          const r6 = await asyncCall(e6.driver.getKeys, e6.relativeBase, t4);
          for (const t5 of r6) {
            const r7 = e6.mountpoint + normalizeKey$1(t5);
            s5.some((e7) => r7.startsWith(e7)) || a6.push(r7);
          }
          s5 = [e6.mountpoint, ...s5.filter((t5) => !t5.startsWith(e6.mountpoint))];
        }
        const u3 = void 0 !== t4.maxDepth && !c4;
        return a6.filter((r6) => (!u3 || function(e6, t5) {
          if (void 0 === t5) return true;
          let r7 = 0, s6 = e6.indexOf(":");
          for (; s6 > -1; ) r7++, s6 = e6.indexOf(":", s6 + 1);
          return r7 <= t5;
        }(r6, t4.maxDepth)) && function(e6, t5) {
          return t5 ? e6.startsWith(t5) && "$" !== e6[e6.length - 1] : "$" !== e6[e6.length - 1];
        }(r6, e5));
      }, async clear(e5, t4 = {}) {
        e5 = normalizeBaseKey(e5), await Promise.all(getMounts(e5, false).map(async (e6) => {
          if (e6.driver.clear) return asyncCall(e6.driver.clear, e6.relativeBase, t4);
          if (e6.driver.removeItem) {
            const r5 = await e6.driver.getKeys(e6.relativeBase || "", t4);
            return Promise.all(r5.map((r6) => e6.driver.removeItem(r6, t4)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t3.mounts).map((e5) => dispose(e5)));
      }, watch: /* @__PURE__ */ __name(async (e5) => (await (async () => {
        if (!t3.watching) {
          t3.watching = true;
          for (const e6 in t3.mounts) t3.unwatch[e6] = await watch(t3.mounts[e6], onChange, e6);
        }
      })(), t3.watchListeners.push(e5), async () => {
        t3.watchListeners = t3.watchListeners.filter((t4) => t4 !== e5), 0 === t3.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t3.watchListeners = [], await stopWatch();
      }, mount(e5, s5) {
        if ((e5 = normalizeBaseKey(e5)) && t3.mounts[e5]) throw new Error(`already mounted at ${e5}`);
        return e5 && (t3.mountpoints.push(e5), t3.mountpoints.sort((e6, t4) => t4.length - e6.length)), t3.mounts[e5] = s5, t3.watching && Promise.resolve(watch(s5, onChange, e5)).then((r5) => {
          t3.unwatch[e5] = r5;
        }).catch(console.error), r4;
      }, async unmount(e5, r5 = true) {
        (e5 = normalizeBaseKey(e5)) && t3.mounts[e5] && (t3.watching && e5 in t3.unwatch && (t3.unwatch[e5]?.(), delete t3.unwatch[e5]), r5 && await dispose(t3.mounts[e5]), t3.mountpoints = t3.mountpoints.filter((t4) => t4 !== e5), delete t3.mounts[e5]);
      }, getMount(e5 = "") {
        e5 = normalizeKey$1(e5) + ":";
        const t4 = getMount(e5);
        return { driver: t4.driver, base: t4.base };
      }, getMounts(e5 = "", t4 = {}) {
        e5 = normalizeKey$1(e5);
        return getMounts(e5, t4.parents).map((e6) => ({ driver: e6.driver, base: e6.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e5, t4 = {}) => r4.getKeys(e5, t4), "keys"), get: /* @__PURE__ */ __name((e5, t4 = {}) => r4.getItem(e5, t4), "get"), set: /* @__PURE__ */ __name((e5, t4, s5 = {}) => r4.setItem(e5, t4, s5), "set"), has: /* @__PURE__ */ __name((e5, t4 = {}) => r4.hasItem(e5, t4), "has"), del: /* @__PURE__ */ __name((e5, t4 = {}) => r4.removeItem(e5, t4), "del"), remove: /* @__PURE__ */ __name((e5, t4 = {}) => r4.removeItem(e5, t4), "remove") };
      return r4;
    }({});
    __name(useStorage, "useStorage");
    _r2.mount("/assets", br2);
    xr2 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    kr2 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    Rr2 = [];
    k3 = class {
      static {
        __name(this, "k");
      }
      _data = new l4();
      _hash = new l4([...xr2]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e4) {
        e4 && this._append(e4);
        const t3 = 8 * this._nDataBytes, r4 = 8 * this._data.sigBytes;
        return this._data.words[r4 >>> 5] |= 128 << 24 - r4 % 32, this._data.words[14 + (r4 + 64 >>> 9 << 4)] = Math.floor(t3 / 4294967296), this._data.words[15 + (r4 + 64 >>> 9 << 4)] = t3, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e4, t3) {
        const r4 = this._hash.words;
        let s5 = r4[0], a6 = r4[1], c4 = r4[2], u3 = r4[3], d6 = r4[4], h4 = r4[5], f4 = r4[6], m4 = r4[7];
        for (let r5 = 0; r5 < 64; r5++) {
          if (r5 < 16) Rr2[r5] = 0 | e4[t3 + r5];
          else {
            const e5 = Rr2[r5 - 15], t4 = (e5 << 25 | e5 >>> 7) ^ (e5 << 14 | e5 >>> 18) ^ e5 >>> 3, s6 = Rr2[r5 - 2], a7 = (s6 << 15 | s6 >>> 17) ^ (s6 << 13 | s6 >>> 19) ^ s6 >>> 10;
            Rr2[r5] = t4 + Rr2[r5 - 7] + a7 + Rr2[r5 - 16];
          }
          const g3 = s5 & a6 ^ s5 & c4 ^ a6 & c4, _3 = (s5 << 30 | s5 >>> 2) ^ (s5 << 19 | s5 >>> 13) ^ (s5 << 10 | s5 >>> 22), x3 = m4 + ((d6 << 26 | d6 >>> 6) ^ (d6 << 21 | d6 >>> 11) ^ (d6 << 7 | d6 >>> 25)) + (d6 & h4 ^ ~d6 & f4) + kr2[r5] + Rr2[r5];
          m4 = f4, f4 = h4, h4 = d6, d6 = u3 + x3 | 0, u3 = c4, c4 = a6, a6 = s5, s5 = x3 + (_3 + g3) | 0;
        }
        r4[0] = r4[0] + s5 | 0, r4[1] = r4[1] + a6 | 0, r4[2] = r4[2] + c4 | 0, r4[3] = r4[3] + u3 | 0, r4[4] = r4[4] + d6 | 0, r4[5] = r4[5] + h4 | 0, r4[6] = r4[6] + f4 | 0, r4[7] = r4[7] + m4 | 0;
      }
      _append(e4) {
        "string" == typeof e4 && (e4 = l4.fromUtf8(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }
      _process(e4) {
        let t3, r4 = this._data.sigBytes / 64;
        r4 = e4 ? Math.ceil(r4) : Math.max((0 | r4) - this._minBufferSize, 0);
        const s5 = 16 * r4, a6 = Math.min(4 * s5, this._data.sigBytes);
        if (s5) {
          for (let e5 = 0; e5 < s5; e5 += 16) this._doProcessBlock(this._data.words, e5);
          t3 = this._data.words.splice(0, s5), this._data.sigBytes -= a6;
        }
        return new l4(t3, a6);
      }
    };
    l4 = class _l {
      static {
        __name(this, "l");
      }
      words;
      sigBytes;
      constructor(e4, t3) {
        e4 = this.words = e4 || [], this.sigBytes = void 0 === t3 ? 4 * e4.length : t3;
      }
      static fromUtf8(e4) {
        const t3 = unescape(encodeURIComponent(e4)), r4 = t3.length, s5 = [];
        for (let e5 = 0; e5 < r4; e5++) s5[e5 >>> 2] |= (255 & t3.charCodeAt(e5)) << 24 - e5 % 4 * 8;
        return new _l(s5, r4);
      }
      toBase64() {
        const e4 = [];
        for (let t3 = 0; t3 < this.sigBytes; t3 += 3) {
          const r4 = (this.words[t3 >>> 2] >>> 24 - t3 % 4 * 8 & 255) << 16 | (this.words[t3 + 1 >>> 2] >>> 24 - (t3 + 1) % 4 * 8 & 255) << 8 | this.words[t3 + 2 >>> 2] >>> 24 - (t3 + 2) % 4 * 8 & 255;
          for (let s5 = 0; s5 < 4 && 8 * t3 + 6 * s5 < 8 * this.sigBytes; s5++) e4.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(r4 >>> 6 * (3 - s5) & 63));
        }
        return e4.join("");
      }
      concat(e4) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t3 = 0; t3 < e4.sigBytes; t3++) {
          const r4 = e4.words[t3 >>> 2] >>> 24 - t3 % 4 * 8 & 255;
          this.words[this.sigBytes + t3 >>> 2] |= r4 << 24 - (this.sigBytes + t3) % 4 * 8;
        }
        else for (let t3 = 0; t3 < e4.sigBytes; t3 += 4) this.words[this.sigBytes + t3 >>> 2] = e4.words[t3 >>> 2];
        this.sigBytes += e4.sigBytes;
      }
    };
    Er2 = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #n = /* @__PURE__ */ new Map();
        write(e4) {
          this.buff += e4;
        }
        dispatch(e4) {
          return this[null === e4 ? "null" : typeof e4](e4);
        }
        object(e4) {
          if (e4 && "function" == typeof e4.toJSON) return this.object(e4.toJSON());
          const t3 = Object.prototype.toString.call(e4);
          let r4 = "";
          const a6 = t3.length;
          r4 = a6 < 10 ? "unknown:[" + t3 + "]" : t3.slice(8, a6 - 1), r4 = r4.toLowerCase();
          let c4 = null;
          if (void 0 !== (c4 = this.#n.get(e4))) return this.dispatch("[CIRCULAR:" + c4 + "]");
          if (this.#n.set(e4, this.#n.size), void 0 !== s4 && s4.isBuffer && s4.isBuffer(e4)) return this.write("buffer:"), this.write(e4.toString("utf8"));
          if ("object" !== r4 && "function" !== r4 && "asyncfunction" !== r4) this[r4] ? this[r4](e4) : this.unknown(e4, r4);
          else {
            const t4 = Object.keys(e4).sort(), r5 = [];
            this.write("object:" + (t4.length + r5.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((t5) => {
              this.dispatch(t5), this.write(":"), this.dispatch(e4[t5]), this.write(",");
            }, "dispatchForKey");
            for (const e5 of t4) dispatchForKey(e5);
            for (const e5 of r5) dispatchForKey(e5);
          }
        }
        array(e4, t3) {
          if (t3 = void 0 !== t3 && t3, this.write("array:" + e4.length + ":"), !t3 || e4.length <= 1) {
            for (const t4 of e4) this.dispatch(t4);
            return;
          }
          const r4 = /* @__PURE__ */ new Map(), s5 = e4.map((e5) => {
            const t4 = new Hasher2();
            t4.dispatch(e5);
            for (const [e6, s6] of t4.#n) r4.set(e6, s6);
            return t4.toString();
          });
          return this.#n = r4, s5.sort(), this.array(s5, false);
        }
        date(e4) {
          return this.write("date:" + e4.toJSON());
        }
        symbol(e4) {
          return this.write("symbol:" + e4.toString());
        }
        unknown(e4, t3) {
          if (this.write(t3), e4) return this.write(":"), e4 && "function" == typeof e4.entries ? this.array([...e4.entries()], true) : void 0;
        }
        error(e4) {
          return this.write("error:" + e4.toString());
        }
        boolean(e4) {
          return this.write("bool:" + e4);
        }
        string(e4) {
          this.write("string:" + e4.length + ":"), this.write(e4);
        }
        function(e4) {
          this.write("fn:"), !function(e5) {
            if ("function" != typeof e5) return false;
            return "[native code] }" === Function.prototype.toString.call(e5).slice(-15);
          }(e4) ? this.dispatch(e4.toString()) : this.dispatch("[native]");
        }
        number(e4) {
          return this.write("number:" + e4);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e4) {
          return this.write("regex:" + e4.toString());
        }
        arraybuffer(e4) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e4));
        }
        url(e4) {
          return this.write("url:" + e4.toString());
        }
        map(e4) {
          this.write("map:");
          const t3 = [...e4];
          return this.array(t3, false);
        }
        set(e4) {
          this.write("set:");
          const t3 = [...e4];
          return this.array(t3, false);
        }
        bigint(e4) {
          return this.write("bigint:" + e4.toString());
        }
      }
      for (const e4 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e4] = function(t3) {
        return this.write(e4 + ":"), this.array([...t3], false);
      };
      return Hasher2;
    })();
    __name(hash$1, "hash$1");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e4, t3 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const r4 = (t3.varies || []).filter(Boolean).map((e5) => e5.toLowerCase()).sort(), s5 = { ...t3, getKey: /* @__PURE__ */ __name(async (e5) => {
        const s6 = await t3.getKey?.(e5);
        if (s6) return escapeKey(s6);
        const a7 = e5.node.req.originalUrl || e5.node.req.url || e5.path;
        let c4;
        try {
          c4 = escapeKey(decodeURI(parseURL(a7).pathname)).slice(0, 16) || "index";
        } catch {
          c4 = "-";
        }
        return [`${c4}.${hash$1(a7)}`, ...r4.map((t4) => [t4, e5.node.req.headers[t4]]).map(([e6, t4]) => `${escapeKey(e6)}.${hash$1(t4)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e5) => !!e5.value && (!(e5.value.code >= 400) && (void 0 !== e5.value.body && ("undefined" !== e5.value.headers.etag && "undefined" !== e5.value.headers["last-modified"]))), "validate"), group: t3.group || "nitro/handlers", integrity: t3.integrity || hash$1([e4, t3]) }, a6 = function(e5, t4 = {}) {
        return defineCachedFunction(e5, t4);
      }(async (a7) => {
        const c4 = {};
        for (const e5 of r4) {
          const t4 = a7.node.req.headers[e5];
          void 0 !== t4 && (c4[e5] = t4);
        }
        const u3 = cloneWithProxy(a7.node.req, { headers: c4 }), d6 = {};
        let h4;
        const f4 = createEvent(u3, cloneWithProxy(a7.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e5) => d6[e5], "getHeader"), setHeader(e5, t4) {
          return d6[e5] = t4, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(d6), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e5) => e5 in d6, "hasHeader"), removeHeader(e5) {
          delete d6[e5];
        }, getHeaders: /* @__PURE__ */ __name(() => d6, "getHeaders"), end(e5, t4, r5) {
          return "string" == typeof e5 && (h4 = e5), "function" == typeof t4 && t4(), "function" == typeof r5 && r5(), this;
        }, write: /* @__PURE__ */ __name((e5, t4, r5) => ("string" == typeof e5 && (h4 = e5), "function" == typeof t4 && t4(void 0), "function" == typeof r5 && r5(), true), "write"), writeHead(e5, t4) {
          if (this.statusCode = e5, t4) {
            if (Array.isArray(t4) || "string" == typeof t4) throw new TypeError("Raw headers  is not supported.");
            for (const e6 in t4) {
              const r5 = t4[e6];
              void 0 !== r5 && this.setHeader(e6, r5);
            }
          }
          return this;
        } }));
        f4.fetch = (e5, t4) => fetchWithEvent(f4, e5, t4, { fetch: useNitroApp().localFetch }), f4.$fetch = (e5, t4) => fetchWithEvent(f4, e5, t4, { fetch: globalThis.$fetch }), f4.waitUntil = a7.waitUntil, f4.context = a7.context, f4.context.cache = { options: s5 };
        const m4 = await e4(f4) || h4, g3 = f4.node.res.getHeaders();
        g3.etag = String(g3.Etag || g3.etag || `W/"${hash$1(m4)}"`), g3["last-modified"] = String(g3["Last-Modified"] || g3["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const _3 = [];
        t3.swr ? (t3.maxAge && _3.push(`s-maxage=${t3.maxAge}`), t3.staleMaxAge ? _3.push(`stale-while-revalidate=${t3.staleMaxAge}`) : _3.push("stale-while-revalidate")) : t3.maxAge && _3.push(`max-age=${t3.maxAge}`), _3.length > 0 && (g3["cache-control"] = _3.join(", "));
        return { code: f4.node.res.statusCode, headers: g3, body: m4 };
      }, s5);
      return defineEventHandler(async (r5) => {
        if (t3.headersOnly) {
          if (handleCacheHeaders(r5, { maxAge: t3.maxAge })) return;
          return e4(r5);
        }
        const s6 = await a6(r5);
        if (r5.node.res.headersSent || r5.node.res.writableEnded) return s6.body;
        if (!handleCacheHeaders(r5, { modifiedTime: new Date(s6.headers["last-modified"]), etag: s6.headers.etag, maxAge: t3.maxAge })) {
          r5.node.res.statusCode = s6.code;
          for (const e5 in s6.headers) {
            const t4 = s6.headers[e5];
            "set-cookie" === e5 ? r5.node.res.appendHeader(e5, splitCookiesString2(t4)) : void 0 !== t4 && r5.node.res.setHeader(e5, t4);
          }
          return s6.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    Cr2 = Kt2({});
    Sr2 = /\d/;
    Tr2 = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    Ar2 = /\{\{([^{}]*)\}\}/g;
    __name(_expandFromEnv, "_expandFromEnv");
    Hr2 = { app: { baseURL: "/" }, nitro: { routeRules: {} } };
    jr2 = { prefix: "NITRO_", altPrefix: Hr2.nitro.envPrefix ?? _.env.NITRO_ENV_PREFIX ?? "_", envExpansion: Hr2.nitro.envExpansion ?? _.env.NITRO_ENV_EXPANSION ?? false };
    Pr2 = _deepFreeze((/* @__PURE__ */ __name(function applyEnv(e4, t3, r4 = "") {
      for (const s5 in e4) {
        const a6 = r4 ? `${r4}_${s5}` : s5, c4 = getEnv(a6, t3);
        _isObject(e4[s5]) ? _isObject(c4) ? (e4[s5] = { ...e4[s5], ...c4 }, applyEnv(e4[s5], t3, a6)) : void 0 === c4 ? applyEnv(e4[s5], t3, a6) : e4[s5] = c4 ?? e4[s5] : e4[s5] = c4 ?? e4[s5], t3.envExpansion && "string" == typeof e4[s5] && (e4[s5] = _expandFromEnv(e4[s5]));
      }
      return e4;
    }, "applyEnv"))(klona(Hr2), jr2));
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(Cr2)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e4, t3) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r4 = useRuntimeConfig();
      if (t3 in r4) return r4[t3];
    }, "get") });
    Ir2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== ir ? ir : {};
    Mr2 = "__unctx__";
    Or2 = Ir2[Mr2] || (Ir2[Mr2] = /* @__PURE__ */ function(e4 = {}) {
      const t3 = {};
      return { get: /* @__PURE__ */ __name((r4, s5 = {}) => (t3[r4] || (t3[r4] = function(e5 = {}) {
        let t4, r5 = false;
        const checkConflict = /* @__PURE__ */ __name((e6) => {
          if (t4 && t4 !== e6) throw new Error("Context conflict");
        }, "checkConflict");
        let s6;
        if (e5.asyncContext) {
          const t5 = e5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t5 ? s6 = new t5() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (s6) {
            const e6 = s6.getStore();
            if (void 0 !== e6) return e6;
          }
          return t4;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e6 = _getCurrentInstance();
          if (void 0 === e6) throw new Error("Context is not available");
          return e6;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e6, s7) => {
          s7 || checkConflict(e6), t4 = e6, r5 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t4 = void 0, r5 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e6, a6) => {
          checkConflict(e6), t4 = e6;
          try {
            return s6 ? s6.run(e6, a6) : a6();
          } finally {
            r5 || (t4 = void 0);
          }
        }, "call"), async callAsync(e6, a6) {
          t4 = e6;
          const onRestore = /* @__PURE__ */ __name(() => {
            t4 = e6;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t4 === e6 ? onRestore : void 0, "onLeave");
          Br2.add(onLeave);
          try {
            const c4 = s6 ? s6.run(e6, a6) : a6();
            return r5 || (t4 = void 0), await c4;
          } finally {
            Br2.delete(onLeave);
          }
        } };
      }({ ...e4, ...s5 })), t3[r4]), "get") };
    }());
    Nr2 = "__unctx_async_handlers__";
    Br2 = Ir2[Nr2] || (Ir2[Nr2] = /* @__PURE__ */ new Set());
    ((e4, t3 = {}) => {
      Or2.get(e4, t3);
    })("nitro-app", { asyncContext: void 0, AsyncLocalStorage: void 0 });
    qr2 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    Ur2 = /post|put|patch/i;
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    __name(defaultHandler, "defaultHandler");
    zr2 = [function(e4, t3) {
      const r4 = defaultHandler(e4, t3);
      return setResponseHeaders(t3, r4.headers), setResponseStatus(t3, r4.status, r4.statusText), send2(t3, JSON.stringify(r4.body, null, 2));
    }];
    $r2 = [];
    Lr2 = [{ route: "/**", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_ssr(), ssr_exports)).then(function(e4) {
      return e4.s;
    }), "handler"), lazy: true, middleware: false, method: void 0 }];
    Kr2 = function() {
      const e4 = useRuntimeConfig(), t3 = new Hookable(), captureError = /* @__PURE__ */ __name((e5, r5 = {}) => {
        const s6 = t3.callHookParallel("error", e5, r5).catch((e6) => {
          console.error("Error while capturing another error", e6);
        });
        if (r5.event && isEvent(r5.event)) {
          const t4 = r5.event.context.nitro?.errors;
          t4 && t4.push({ error: e5, context: r5 }), r5.event.waitUntil && r5.event.waitUntil(s6);
        }
      }, "captureError"), r4 = createApp({ debug: destr(false), onError: /* @__PURE__ */ __name((e5, t4) => (captureError(e5, { event: t4, tags: ["request"] }), async function(e6, t5) {
        for (const r5 of zr2) try {
          if (await r5(e6, t5, { defaultHandler }), t5.handled) return;
        } catch (e7) {
          console.error(e7);
        }
      }(e5, t4)), "onError"), onRequest: /* @__PURE__ */ __name(async (e5) => {
        e5.context.nitro = e5.context.nitro || { errors: [] };
        const t4 = e5.node.req?.__unenv__;
        t4?._platform && (e5.context = { _platform: t4?._platform, ...t4._platform, ...e5.context }), !e5.context.waitUntil && t4?.waitUntil && (e5.context.waitUntil = t4.waitUntil), e5.fetch = (t5, r5) => fetchWithEvent(e5, t5, r5, { fetch: localFetch }), e5.$fetch = (t5, r5) => fetchWithEvent(e5, t5, r5, { fetch: c4 }), e5.waitUntil = (t5) => {
          e5.context.nitro._waitUntilPromises || (e5.context.nitro._waitUntilPromises = []), e5.context.nitro._waitUntilPromises.push(t5), e5.context.waitUntil && e5.context.waitUntil(t5);
        }, e5.captureError = (t5, r5) => {
          captureError(t5, { event: e5, ...r5 });
        }, await Kr2.hooks.callHook("request", e5).catch((t5) => {
          captureError(t5, { event: e5, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e5, t4) => {
        await Kr2.hooks.callHook("beforeResponse", e5, t4).catch((t5) => {
          captureError(t5, { event: e5, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e5, t4) => {
        await Kr2.hooks.callHook("afterResponse", e5, t4).catch((t5) => {
          captureError(t5, { event: e5, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), s5 = function(e5 = {}) {
        const t4 = createRouter$1({}), r5 = {};
        let s6;
        const a7 = {}, addRoute = /* @__PURE__ */ __name((e6, s7, c6) => {
          let u3 = r5[e6];
          if (u3 || (r5[e6] = u3 = { path: e6, handlers: {} }, t4.insert(e6, u3)), Array.isArray(c6)) for (const t5 of c6) addRoute(e6, s7, t5);
          else u3.handlers[c6] = toEventHandler(s7, 0, e6);
          return a7;
        }, "addRoute");
        a7.use = a7.add = (e6, t5, r6) => addRoute(e6, t5, r6 || "all");
        for (const e6 of nr2) a7[e6] = (t5, r6) => a7.add(t5, r6, e6);
        const matchHandler = /* @__PURE__ */ __name((e6 = "/", r6 = "get") => {
          const a8 = e6.indexOf("?");
          -1 !== a8 && (e6 = e6.slice(0, Math.max(0, a8)));
          const c6 = t4.lookup(e6);
          if (!c6 || !c6.handlers) return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e6 || "/"}.` }) };
          let u3 = c6.handlers[r6] || c6.handlers.all;
          if (!u3) {
            s6 || (s6 = toRouteMatcher(t4));
            const a9 = s6.matchAll(e6).reverse();
            for (const e7 of a9) {
              if (e7.handlers[r6]) {
                u3 = e7.handlers[r6], c6.handlers[r6] = c6.handlers[r6] || u3;
                break;
              }
              if (e7.handlers.all) {
                u3 = e7.handlers.all, c6.handlers.all = c6.handlers.all || u3;
                break;
              }
            }
          }
          return u3 ? { matched: c6, handler: u3 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r6} is not allowed on this route.` }) };
        }, "matchHandler"), c5 = e5.preemptive || e5.preemtive;
        return a7.handler = or2((e6) => {
          const t5 = matchHandler(e6.path, e6.method.toLowerCase());
          if ("error" in t5) {
            if (c5) throw t5.error;
            return;
          }
          e6.context.matchedRoute = t5.matched;
          const r6 = t5.matched.params || {};
          return e6.context.params = r6, Promise.resolve(t5.handler(e6)).then((e7) => void 0 === e7 && c5 ? null : e7);
        }), a7.handler.__resolve__ = async (e6) => {
          e6 = function(e7 = "") {
            return function(e8 = "") {
              return e8.startsWith("/");
            }(e7) ? e7 : "/" + e7;
          }(e6);
          const t5 = matchHandler(e6);
          if ("error" in t5) return;
          let r6 = { route: t5.matched.path, handler: t5.handler };
          if (t5.handler.__resolve__) {
            const s7 = await t5.handler.__resolve__(e6);
            if (!s7) return;
            r6 = { ...r6, ...s7 };
          }
          return r6;
        }, a7;
      }({ preemptive: true }), a6 = toNodeListener(r4), localFetch = /* @__PURE__ */ __name((e5, t4) => e5.toString().startsWith("/") ? async function(e6, t5, r5 = {}) {
        try {
          const s6 = await b2(e6, { url: t5, ...r5 });
          return new Response(s6.body, { status: s6.status, statusText: s6.statusText, headers: v2(s6.headers) });
        } catch (e7) {
          return new Response(e7.toString(), { status: Number.parseInt(e7.statusCode || e7.code) || 500, statusText: e7.statusText });
        }
      }(a6, e5, t4).then((e6) => function(e7) {
        return e7.headers.has("set-cookie") ? new Response(e7.body, { status: e7.status, statusText: e7.statusText, headers: normalizeCookieHeaders(e7.headers) }) : e7;
      }(e6)) : globalThis.fetch(e5, t4), "localFetch"), c4 = createFetch({ fetch: localFetch, Headers: mr2, defaults: { baseURL: e4.app.baseURL } });
      globalThis.$fetch = c4, r4.use(createRouteRulesHandler({ localFetch }));
      for (const t4 of Lr2) {
        let a7 = t4.lazy ? lazyEventHandler(t4.handler) : t4.handler;
        if (t4.middleware || !t4.route) {
          const s6 = (e4.app.baseURL + (t4.route || "/")).replace(/\/+/g, "/");
          r4.use(s6, a7);
        } else {
          const e5 = getRouteRulesForPath(t4.route.replace(/:\w+|\*\*/g, "_"));
          e5.cache && (a7 = cachedEventHandler(a7, { group: "nitro/routes", ...e5.cache })), s5.use(t4.route, a7, t4.method);
        }
      }
      return r4.use(e4.app.baseURL, s5.handler), { hooks: t3, h3App: r4, router: s5, localCall: /* @__PURE__ */ __name((e5) => b2(a6, e5), "localCall"), localFetch, captureError };
    }();
    __name(useNitroApp, "useNitroApp");
    !function(e4) {
      for (const t3 of $r2) try {
        t3(e4);
      } catch (t4) {
        throw e4.captureError(t4, { tags: ["plugin"] }), t4;
      }
    }(Kr2);
    Dr2 = { "/android-chrome-192x192.png": { type: "image/png", etag: '"2be9-GzjzoaLl9p/yyCAa8WhIVf7rqkk"', mtime: "2025-11-10T06:33:37.469Z", size: 11241, path: "../public/android-chrome-192x192.png" }, "/android-chrome-512x512.png": { type: "image/png", etag: '"7aad-Yg6o5REaWp/LzG4gHMp+S+BCTJQ"', mtime: "2025-11-10T06:33:37.469Z", size: 31405, path: "../public/android-chrome-512x512.png" }, "/apple-touch-icon.png": { type: "image/png", etag: '"2935-W3AzqCj+qEKoqfT/YPZxHyCKunY"', mtime: "2025-11-10T06:33:37.468Z", size: 10549, path: "../public/apple-touch-icon.png" }, "/favicon-16x16.png": { type: "image/png", etag: '"283-5CPm32F44lo25/oIVzW3zesVt0g"', mtime: "2025-11-10T06:33:37.469Z", size: 643, path: "../public/favicon-16x16.png" }, "/favicon-32x32.png": { type: "image/png", etag: '"4fb-WRfc6qnLBjatMdCfX1G7uYcfHKw"', mtime: "2025-11-10T06:33:37.469Z", size: 1275, path: "../public/favicon-32x32.png" }, "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"3c2e-3DkYlGbapBBQ2DZMsx390SIDVXM"', mtime: "2025-11-10T06:33:37.469Z", size: 15406, path: "../public/favicon.ico" }, "/site.webmanifest": { type: "application/manifest+json", etag: '"107-vzG6+RvdL83iSkXj8qG+M3M8b2k"', mtime: "2025-11-10T06:33:37.469Z", size: 263, path: "../public/site.webmanifest" }, "/.vite/manifest.json": { type: "application/json", etag: '"54e-P7kRNQyMZLTXEE14VFMRepzpO20"', mtime: "2025-11-10T06:33:37.468Z", size: 1358, path: "../public/.vite/manifest.json" }, "/assets/app-CfGvBdFD.css": { type: "text/css; charset=utf-8", etag: '"4682-laPC8GKcCaJxLGHRIY+TZwv7b1k"', mtime: "2025-11-10T06:33:37.468Z", size: 18050, path: "../public/assets/app-CfGvBdFD.css" }, "/assets/index-CQwExfST.js": { type: "text/javascript; charset=utf-8", etag: '"218d-A4YdxgPOjxJKoDlQAimZaT/a3hE"', mtime: "2025-11-10T06:33:37.468Z", size: 8589, path: "../public/assets/index-CQwExfST.js" }, "/assets/index-CiJnjDUS.js": { type: "text/javascript; charset=utf-8", etag: '"447c-5LapVeTzTOcHMBVomse/zBXZx1k"', mtime: "2025-11-10T06:33:37.468Z", size: 17532, path: "../public/assets/index-CiJnjDUS.js" }, "/assets/main-CNZ_GIPH.js": { type: "text/javascript; charset=utf-8", etag: '"428f8-hJ5BuPGllYxWtIzt3LInanen+ZI"', mtime: "2025-11-10T06:33:37.469Z", size: 272632, path: "../public/assets/main-CNZ_GIPH.js" }, "/assets/stats-C9cSQAnJ.js": { type: "text/javascript; charset=utf-8", etag: '"1f43-YHqFETjlSOK3ka7trRlS9QBMKhI"', mtime: "2025-11-10T06:33:37.468Z", size: 8003, path: "../public/assets/stats-C9cSQAnJ.js" } };
    Wr2 = {};
    Fr2 = function(e4) {
      const t3 = useNitroApp();
      return { async fetch(r4, a6, c4) {
        const u3 = {}, d6 = new URL(r4.url);
        if (e4.fetch) {
          const t4 = await e4.fetch(r4, a6, c4, d6, u3);
          if (t4) return t4;
        }
        return async function(e5, t4, r5, a7 = new URL(e5.url), c5 = useNitroApp(), u4) {
          let d7;
          (function(e6) {
            return Ur2.test(e6.method);
          })(e5) && (d7 = s4.from(await e5.arrayBuffer()));
          return globalThis.__env__ = t4, c5.localFetch(a7.pathname + a7.search, { context: { waitUntil: /* @__PURE__ */ __name((e6) => r5.waitUntil(e6), "waitUntil"), _platform: { cf: e5.cf, cloudflare: { request: e5, env: t4, context: r5, url: a7, ...u4 } } }, host: a7.hostname, protocol: a7.protocol, method: e5.method, headers: e5.headers, body: d7 });
        }(r4, a6, c4, d6, t3, u3);
      }, scheduled(e5, r4, s5) {
        globalThis.__env__ = r4, s5.waitUntil(t3.hooks.callHook("cloudflare:scheduled", { controller: e5, env: r4, context: s5 }));
      }, email(e5, r4, s5) {
        globalThis.__env__ = r4, s5.waitUntil(t3.hooks.callHook("cloudflare:email", { message: e5, event: e5, env: r4, context: s5 }));
      }, queue(e5, r4, s5) {
        globalThis.__env__ = r4, s5.waitUntil(t3.hooks.callHook("cloudflare:queue", { batch: e5, event: e5, env: r4, context: s5 }));
      }, tail(e5, r4, s5) {
        globalThis.__env__ = r4, s5.waitUntil(t3.hooks.callHook("cloudflare:tail", { traces: e5, env: r4, context: s5 }));
      }, trace(e5, r4, s5) {
        globalThis.__env__ = r4, s5.waitUntil(t3.hooks.callHook("cloudflare:trace", { traces: e5, env: r4, context: s5 }));
      } };
    }({ fetch(e4, t3, r4, s5) {
      if (t3.ASSETS && function(e5 = "") {
        if (Dr2[e5]) return true;
        for (const t4 in Wr2) if (e5.startsWith(t4)) return true;
        return false;
      }(s5.pathname)) return t3.ASSETS.fetch(e4);
    } });
    new Proxy(globalThis.crypto, { get: /* @__PURE__ */ __name((e4, t3) => "CryptoKey" === t3 ? globalThis.CryptoKey : "function" == typeof globalThis.crypto[t3] ? globalThis.crypto[t3].bind(globalThis.crypto) : globalThis.crypto[t3], "get") });
    ({ webcrypto: Qr2, Certificate: Jr2, Cipheriv: Vr2, Decipheriv: Gr2, DiffieHellman: Zr2, DiffieHellmanGroup: Yr2, ECDH: Xr2, Hash: eo2, Hmac: to2, KeyObject: ro2, PrivateKeyObject: oo2, PublicKeyObject: no2, SecretKeyObject: so2, Sign: ao2, Verify: io2, X509Certificate: co2, checkPrime: lo2, checkPrimeSync: uo2, constants: ho2, createCipheriv: fo2, createDecipheriv: po2, createDiffieHellman: mo2, createDiffieHellmanGroup: yo2, createECDH: go2, createHash: wo, createHmac: vo2, createPrivateKey: bo2, createPublicKey: _o2, createSecretKey: xo2, createSign: ko2, createVerify: Ro2, diffieHellman: Eo2, fips: Co2, generateKey: So2, generateKeyPair: To2, generateKeyPairSync: Ao2, generateKeySync: Ho2, generatePrime: jo2, generatePrimeSync: Po2, getCipherInfo: Io2, getCiphers: Mo2, getCurves: Oo2, getDiffieHellman: No2, getFips: Bo2, getHashes: qo2, hash: Uo2, hkdf: zo2, hkdfSync: $o2, pbkdf2: Lo2, pbkdf2Sync: Ko2, privateDecrypt: Do2, privateEncrypt: Wo2, publicDecrypt: Fo2, publicEncrypt: Qo2, randomBytes: Jo2, randomFill: Vo2, randomFillSync: Go2, randomInt: Zo2, randomUUID: Yo2, scrypt: Xo2, scryptSync: en2, secureHeapUsed: tn2, setEngine: rn2, setFips: on3, sign: nn2, subtle: sn2, timingSafeEqual: an2, verify: cn2 } = crypto_default);
    crypto_default.getRandomValues.bind(crypto_default.webcrypto);
  }
});

// .output/server/index.mjs
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_nitro();
init_crypto2();
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };
export {
  Fr2 as default
};
//# sourceMappingURL=index.js.map
