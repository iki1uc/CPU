export function CPU_ROUTER(msg) {
    const text = String(msg || "");

    // GPU
    if (text.startsWith("GPU-")) return { sys: "GPU", num: text };

    // CPU
    if (text.startsWith("CPU-")) return { sys: "CPU", num: text };

    // RAM
    if (text.startsWith("RAM-")) return { sys: "RAM", num: text };

    // ROM
    if (text.startsWith("ROM-")) return { sys: "ROM", num: text };

    // Fehler
    return { sys: "AUA", num: 99 };
}

