__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "exportKind": "value",
      "start": 12,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
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
        "value": "./server",
        "raw": "\"./server\"",
        "start": 40,
        "end": 50
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 51
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
                  "start": 67,
                  "end": 73
                },
                "start": 65,
                "end": 73
              },
              "start": 63,
              "end": 73
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultBinding1",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 91
            },
            "definite": false,
            "start": 63,
            "end": 91
          }
        ],
        "declare": false,
        "start": 59,
        "end": 92
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 92
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
            "start": 107,
            "end": 122
          },
          "start": 107,
          "end": 122
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "importKind": "value",
          "start": 126,
          "end": 127
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 135,
        "end": 145
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 93,
      "end": 146
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
                  "start": 162,
                  "end": 168
                },
                "start": 160,
                "end": 168
              },
              "start": 158,
              "end": 168
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultBinding2",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 186
            },
            "definite": false,
            "start": 158,
            "end": 186
          }
        ],
        "declare": false,
        "start": 154,
        "end": 187
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 147,
      "end": 187
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
            "start": 202,
            "end": 217
          },
          "start": 202,
          "end": 217
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 227
          },
          "importKind": "value",
          "start": 221,
          "end": 227
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 235,
        "end": 245
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 188,
      "end": 246
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
                  "start": 262,
                  "end": 268
                },
                "start": 260,
                "end": 268
              },
              "start": 258,
              "end": 268
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultBinding3",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 286
            },
            "definite": false,
            "start": 258,
            "end": 286
          }
        ],
        "declare": false,
        "start": 254,
        "end": 287
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 247,
      "end": 287
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
            "start": 302,
            "end": 317
          },
          "start": 302,
          "end": 317
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 322
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 322
          },
          "importKind": "value",
          "start": 321,
          "end": 322
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 330
          },
          "importKind": "value",
          "start": 324,
          "end": 330
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 338,
        "end": 348
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 288,
      "end": 349
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
                  "start": 365,
                  "end": 371
                },
                "start": 363,
                "end": 371
              },
              "start": 361,
              "end": 371
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultBinding4",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 389
            },
            "definite": false,
            "start": 361,
            "end": 389
          }
        ],
        "declare": false,
        "start": 357,
        "end": 390
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 350,
      "end": 390
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
            "start": 405,
            "end": 420
          },
          "start": 405,
          "end": 420
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 425
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 430
          },
          "importKind": "value",
          "start": 424,
          "end": 430
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 440,
        "end": 450
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 391,
      "end": 451
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
                  "start": 467,
                  "end": 473
                },
                "start": 465,
                "end": 473
              },
              "start": 463,
              "end": 473
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultBinding5",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 491
            },
            "definite": false,
            "start": 463,
            "end": 491
          }
        ],
        "declare": false,
        "start": 459,
        "end": 492
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 452,
      "end": 492
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
            "start": 507,
            "end": 522
          },
          "start": 507,
          "end": 522
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 527
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 527
          },
          "importKind": "value",
          "start": 526,
          "end": 527
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./server",
        "raw": "\"./server\"",
        "start": 537,
        "end": 547
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 493,
      "end": 548
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
                  "start": 564,
                  "end": 570
                },
                "start": 562,
                "end": 570
              },
              "start": 560,
              "end": 570
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultBinding6",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 588
            },
            "definite": false,
            "start": 560,
            "end": 588
          }
        ],
        "declare": false,
        "start": 556,
        "end": 589
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 549,
      "end": 589
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 589
}
```
