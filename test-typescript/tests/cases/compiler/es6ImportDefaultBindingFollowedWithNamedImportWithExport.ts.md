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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 36,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 54,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 54,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 494,
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
            "name": "defaultBinding1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "defaultBinding2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 113,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 123,
              "name": "x1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 115,
                "end": 123,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 117,
                  "end": 123
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "defaultBinding3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 197,
            "end": 211,
            "id": {
              "type": "Identifier",
              "start": 197,
              "end": 207,
              "name": "x1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 199,
                "end": 207,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 201,
                  "end": 207
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "defaultBinding4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 284,
            "end": 298,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 294,
              "name": "x1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 286,
                "end": 294,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 288,
                  "end": 294
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 300,
      "end": 326,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 307,
        "end": 326,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 311,
            "end": 325,
            "id": {
              "type": "Identifier",
              "start": 311,
              "end": 321,
              "name": "x1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 313,
                "end": 321,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 315,
                  "end": 321
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "defaultBinding5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 365,
            "end": 366,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 397,
            "end": 411,
            "id": {
              "type": "Identifier",
              "start": 397,
              "end": 407,
              "name": "x1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 399,
                "end": 407,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 401,
                  "end": 407
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "defaultBinding6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 478,
            "end": 492,
            "id": {
              "type": "Identifier",
              "start": 478,
              "end": 488,
              "name": "x1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 480,
                "end": 488,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 482,
                  "end": 488
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
