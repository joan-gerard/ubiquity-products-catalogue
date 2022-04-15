export interface ProductType {
    unifi: {
        network: {
            radios: {
                na: {
                    maxPower: number;
                    maxSpeedMegabitsPerSecond: number;
                }
            },
            numberOfPorts: number
        }
    }
    icon: {
        id: string;
    };
    line: {
        name: string;
        id: string;
    };
    product: {
        name: string;
        abbrev: string;
    };
    sysid: any;
}