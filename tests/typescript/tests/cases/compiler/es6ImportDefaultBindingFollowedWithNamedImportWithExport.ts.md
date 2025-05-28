__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 36,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 36,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 54,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 54,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 55,
      "end": 73,
      "declaration": {
        "type": "ObjectExpression",
        "start": 70,
        "end": 72,
        "properties": []
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 493,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 49,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 14,
          "end": 29,
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 29,
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 48,
        "value": "server",
        "raw": "\"server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 50,
      "end": 101,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 64,
          "end": 79,
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 79,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 83,
          "end": 84,
          "imported": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 92,
        "end": 100,
        "value": "server",
        "raw": "\"server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 128,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 109,
        "end": 128,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 113,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 123,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 115,
                "end": 123,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 117,
                  "end": 123
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 129,
      "end": 185,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 143,
          "end": 158,
          "local": {
            "type": "Identifier",
            "start": 143,
            "end": 158,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 162,
          "end": 168,
          "imported": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 176,
        "end": 184,
        "value": "server",
        "raw": "\"server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 186,
      "end": 212,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 193,
        "end": 212,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 197,
            "end": 211,
            "id": {
              "type": "Identifier",
              "start": 197,
              "end": 207,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 199,
                "end": 207,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 201,
                  "end": 207
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 213,
      "end": 272,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 227,
          "end": 242,
          "local": {
            "type": "Identifier",
            "start": 227,
            "end": 242,
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 246,
          "end": 247,
          "imported": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 249,
          "end": 255,
          "imported": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 263,
        "end": 271,
        "value": "server",
        "raw": "\"server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 273,
      "end": 299,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 280,
        "end": 299,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 284,
            "end": 298,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 294,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 286,
                "end": 294,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 288,
                  "end": 294
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 300,
      "end": 326,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 307,
        "end": 326,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 311,
            "end": 325,
            "id": {
              "type": "Identifier",
              "start": 311,
              "end": 321,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 313,
                "end": 321,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 315,
                  "end": 321
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 327,
      "end": 385,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 341,
          "end": 356,
          "local": {
            "type": "Identifier",
            "start": 341,
            "end": 356,
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 360,
          "end": 366,
          "imported": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 365,
            "end": 366,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 376,
        "end": 384,
        "value": "server",
        "raw": "\"server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 386,
      "end": 412,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 393,
        "end": 412,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 397,
            "end": 411,
            "id": {
              "type": "Identifier",
              "start": 397,
              "end": 407,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 399,
                "end": 407,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 401,
                  "end": 407
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 413,
      "end": 466,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 427,
          "end": 442,
          "local": {
            "type": "Identifier",
            "start": 427,
            "end": 442,
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 446,
          "end": 447,
          "imported": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 457,
        "end": 465,
        "value": "server",
        "raw": "\"server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 467,
      "end": 493,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 474,
        "end": 493,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 478,
            "end": 492,
            "id": {
              "type": "Identifier",
              "start": 478,
              "end": 488,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 480,
                "end": 488,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 482,
                  "end": 488
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
