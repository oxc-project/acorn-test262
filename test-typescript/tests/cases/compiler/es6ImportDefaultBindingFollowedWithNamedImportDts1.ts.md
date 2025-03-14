server.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
client.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 535,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 43,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 22,
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 52,
        "end": 83,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 82,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 58,
              "decorators": [],
              "name": "x1",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 61,
              "end": 82,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 65,
                "end": 80,
                "decorators": [],
                "name": "defaultBinding1",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 84,
      "end": 130,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 119,
        "end": 129,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 91,
          "end": 106,
          "local": {
            "type": "Identifier",
            "start": 91,
            "end": 106,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 110,
          "end": 111,
          "imported": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 169,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 138,
        "end": 169,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 142,
            "end": 168,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 144,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 147,
              "end": 168,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 151,
                "end": 166,
                "decorators": [],
                "name": "defaultBinding2",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 170,
      "end": 221,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 210,
        "end": 220,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 177,
          "end": 192,
          "local": {
            "type": "Identifier",
            "start": 177,
            "end": 192,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 196,
          "end": 202,
          "imported": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 222,
      "end": 260,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 229,
        "end": 260,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 233,
            "end": 259,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 233,
              "end": 235,
              "decorators": [],
              "name": "x3",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 238,
              "end": 259,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 257,
                "decorators": [],
                "name": "defaultBinding3",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 261,
      "end": 315,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 304,
        "end": 314,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 268,
          "end": 283,
          "local": {
            "type": "Identifier",
            "start": 268,
            "end": 283,
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 287,
          "end": 288,
          "imported": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 290,
          "end": 296,
          "imported": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 295,
            "end": 296,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 316,
      "end": 354,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 323,
        "end": 354,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 327,
            "end": 353,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 327,
              "end": 329,
              "decorators": [],
              "name": "x4",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 332,
              "end": 353,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 336,
                "end": 351,
                "decorators": [],
                "name": "defaultBinding4",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 355,
      "end": 408,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 397,
        "end": 407,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 362,
          "end": 377,
          "local": {
            "type": "Identifier",
            "start": 362,
            "end": 377,
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 381,
          "end": 387,
          "imported": {
            "type": "Identifier",
            "start": 381,
            "end": 382,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 409,
      "end": 447,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 416,
        "end": 447,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 420,
            "end": 446,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 420,
              "end": 422,
              "decorators": [],
              "name": "x5",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 425,
              "end": 446,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 429,
                "end": 444,
                "decorators": [],
                "name": "defaultBinding5",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 448,
      "end": 496,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 485,
        "end": 495,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 455,
          "end": 470,
          "local": {
            "type": "Identifier",
            "start": 455,
            "end": 470,
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 474,
          "end": 475,
          "imported": {
            "type": "Identifier",
            "start": 474,
            "end": 475,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 474,
            "end": 475,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 497,
      "end": 535,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 504,
        "end": 535,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 508,
            "end": 534,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 508,
              "end": 510,
              "decorators": [],
              "name": "x6",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 513,
              "end": 534,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 517,
                "end": 532,
                "decorators": [],
                "name": "defaultBinding6",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
