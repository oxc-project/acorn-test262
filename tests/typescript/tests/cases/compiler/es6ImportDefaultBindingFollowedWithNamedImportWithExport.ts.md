__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "definite": false,
            "start": 30,
            "end": 35
          }
        ],
        "declare": false,
        "start": 26,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "definite": false,
            "start": 48,
            "end": 53
          }
        ],
        "declare": false,
        "start": 44,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 54
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 70,
        "end": 72
      },
      "exportKind": "value",
      "start": 55,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 29
          },
          "start": 14,
          "end": 29
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 40,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 49
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 79
          },
          "start": 64,
          "end": 79
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "importKind": "value",
          "start": 83,
          "end": 84
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 92,
        "end": 100
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 50,
      "end": 101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 117,
                  "end": 123
                },
                "start": 115,
                "end": 123
              },
              "start": 113,
              "end": 123
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 127
            },
            "definite": false,
            "start": 113,
            "end": 127
          }
        ],
        "declare": false,
        "start": 109,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 128
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 158
          },
          "start": 143,
          "end": 158
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "importKind": "value",
          "start": 162,
          "end": 168
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 176,
        "end": 184
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 129,
      "end": 185
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 201,
                  "end": 207
                },
                "start": 199,
                "end": 207
              },
              "start": 197,
              "end": 207
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 211
            },
            "definite": false,
            "start": 197,
            "end": 211
          }
        ],
        "declare": false,
        "start": 193,
        "end": 212
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 186,
      "end": 212
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 242
          },
          "start": 227,
          "end": 242
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 247
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 247
          },
          "importKind": "value",
          "start": 246,
          "end": 247
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 250
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 255
          },
          "importKind": "value",
          "start": 249,
          "end": 255
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 263,
        "end": 271
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 213,
      "end": 272
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 288,
                  "end": 294
                },
                "start": 286,
                "end": 294
              },
              "start": 284,
              "end": 294
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 298
            },
            "definite": false,
            "start": 284,
            "end": 298
          }
        ],
        "declare": false,
        "start": 280,
        "end": 299
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 273,
      "end": 299
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 315,
                  "end": 321
                },
                "start": 313,
                "end": 321
              },
              "start": 311,
              "end": 321
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "definite": false,
            "start": 311,
            "end": 325
          }
        ],
        "declare": false,
        "start": 307,
        "end": 326
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 300,
      "end": 326
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 356
          },
          "start": 341,
          "end": 356
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 361
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 366
          },
          "importKind": "value",
          "start": 360,
          "end": 366
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 376,
        "end": 384
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 327,
      "end": 385
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 401,
                  "end": 407
                },
                "start": 399,
                "end": 407
              },
              "start": 397,
              "end": 407
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
            },
            "definite": false,
            "start": 397,
            "end": 411
          }
        ],
        "declare": false,
        "start": 393,
        "end": 412
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 386,
      "end": 412
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 442
          },
          "start": 427,
          "end": 442
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 447
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 447
          },
          "importKind": "value",
          "start": 446,
          "end": 447
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 457,
        "end": 465
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 413,
      "end": 466
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 482,
                  "end": 488
                },
                "start": 480,
                "end": 488
              },
              "start": 478,
              "end": 488
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 492
            },
            "definite": false,
            "start": 478,
            "end": 492
          }
        ],
        "declare": false,
        "start": 474,
        "end": 493
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 467,
      "end": 493
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 493
}
```
