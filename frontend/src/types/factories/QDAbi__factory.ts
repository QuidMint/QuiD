/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.43.1
  Forc version: 0.35.5
  Fuel-Core version: 0.17.3
*/

import { Interface, Contract } from "fuels";
import type { Provider, Account, AbstractAddress } from "fuels";
import type { QDAbi, QDAbiInterface } from "../QDAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum AssetError",
      "components": [
        {
          "name": "BelowMinimum",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum ErrorCR",
      "components": [
        {
          "name": "BelowMinimum",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum LiquidationError",
      "components": [
        {
          "name": "UnableToLiquidate",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum PriceError",
      "components": [
        {
          "name": "NotInitialized",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum UpdateError",
      "components": [
        {
          "name": "TooEarly",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Deadlock",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct Pod",
      "components": [
        {
          "name": "credit",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "debit",
          "type": 11,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct Pool",
      "components": [
        {
          "name": "long",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "short",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "amount",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "short",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "borrow",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "who",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "clap",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "live",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "long",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "deposit",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "short",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "fold",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_deep",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_live",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "who",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "eth",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "get_pledge_brood",
      "output": {
        "name": "",
        "type": 11,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "who",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "get_pledge_live",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "price",
          "type": 11,
          "typeArguments": null
        }
      ],
      "name": "set_price",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "update",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "update_longs",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "update_shorts",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "amt",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "qd",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "sp",
          "type": 2,
          "typeArguments": null
        }
      ],
      "name": "withdraw",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 10,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 11,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 12,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 13,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 14,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 15,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 16,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 17,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 18,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 19,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 20,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 21,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 22,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 23,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 24,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 25,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 26,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 27,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 28,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 29,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 30,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 31,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 32,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 33,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 34,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 35,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 36,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 37,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 38,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 39,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 40,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 41,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 42,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 43,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 44,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 45,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 46,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 47,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 48,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 49,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 50,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 51,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 52,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 53,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 54,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 55,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 56,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 57,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 58,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 59,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 60,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 61,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 62,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 63,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 64,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 65,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 66,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 67,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 68,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 69,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 70,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 71,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 72,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 73,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 74,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 75,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 76,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 77,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 78,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 79,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 80,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 81,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 82,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 83,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 84,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 85,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 86,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 87,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 88,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 89,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 90,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 91,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 92,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 93,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 94,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 95,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 96,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 97,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 98,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 99,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 100,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 101,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 102,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 103,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 104,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 105,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 106,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 107,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 108,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 109,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 110,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 111,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 112,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 113,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 114,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 115,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 116,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 117,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 118,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 119,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 120,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 121,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 122,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 123,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 124,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 125,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 126,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 127,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 128,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 129,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 130,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 131,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 132,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 133,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 134,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 135,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 136,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 137,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 138,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 139,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 140,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 141,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 142,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 143,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 144,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 145,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 146,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 147,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 148,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 149,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 150,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 151,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 152,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 153,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 154,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 155,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 156,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 157,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 158,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
}

export class QDAbi__factory {
  static readonly abi = _abi
  static createInterface(): QDAbiInterface {
    return new Interface(_abi) as unknown as QDAbiInterface
  }
  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): QDAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as QDAbi
  }
}