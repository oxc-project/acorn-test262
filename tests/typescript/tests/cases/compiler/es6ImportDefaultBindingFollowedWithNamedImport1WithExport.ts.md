__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
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
        "optional": false,
        "typeAnnotation": null
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
  "end": 589,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 51,
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
        "end": 50,
        "value": "./server",
        "raw": "\"./server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 92,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 92,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 91,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 73,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 65,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 67,
                  "end": 73
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 76,
              "end": 91,
              "decorators": [],
              "name": "defaultBinding1",
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
      "start": 93,
      "end": 146,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 107,
          "end": 122,
          "local": {
            "type": "Identifier",
            "start": 107,
            "end": 122,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 126,
          "end": 127,
          "imported": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
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
        "start": 135,
        "end": 145,
        "value": "./server",
        "raw": "\"./server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 147,
      "end": 187,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 154,
        "end": 187,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 158,
            "end": 186,
            "id": {
              "type": "Identifier",
              "start": 158,
              "end": 168,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 160,
                "end": 168,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 162,
                  "end": 168
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 171,
              "end": 186,
              "decorators": [],
              "name": "defaultBinding2",
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
      "start": 188,
      "end": 246,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 202,
          "end": 217,
          "local": {
            "type": "Identifier",
            "start": 202,
            "end": 217,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 221,
          "end": 227,
          "imported": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
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
        "start": 235,
        "end": 245,
        "value": "./server",
        "raw": "\"./server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 247,
      "end": 287,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 254,
        "end": 287,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 258,
            "end": 286,
            "id": {
              "type": "Identifier",
              "start": 258,
              "end": 268,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 260,
                "end": 268,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 262,
                  "end": 268
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 271,
              "end": 286,
              "decorators": [],
              "name": "defaultBinding3",
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
      "start": 288,
      "end": 349,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 302,
          "end": 317,
          "local": {
            "type": "Identifier",
            "start": 302,
            "end": 317,
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 321,
          "end": 322,
          "imported": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 324,
          "end": 330,
          "imported": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
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
        "start": 338,
        "end": 348,
        "value": "./server",
        "raw": "\"./server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 350,
      "end": 390,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 357,
        "end": 390,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 361,
            "end": 389,
            "id": {
              "type": "Identifier",
              "start": 361,
              "end": 371,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 363,
                "end": 371,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 365,
                  "end": 371
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 374,
              "end": 389,
              "decorators": [],
              "name": "defaultBinding4",
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
      "start": 391,
      "end": 451,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 405,
          "end": 420,
          "local": {
            "type": "Identifier",
            "start": 405,
            "end": 420,
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 424,
          "end": 430,
          "imported": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
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
        "start": 440,
        "end": 450,
        "value": "./server",
        "raw": "\"./server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 452,
      "end": 492,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 459,
        "end": 492,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 463,
            "end": 491,
            "id": {
              "type": "Identifier",
              "start": 463,
              "end": 473,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 465,
                "end": 473,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 467,
                  "end": 473
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 476,
              "end": 491,
              "decorators": [],
              "name": "defaultBinding5",
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
      "start": 493,
      "end": 548,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 507,
          "end": 522,
          "local": {
            "type": "Identifier",
            "start": 507,
            "end": 522,
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 526,
          "end": 527,
          "imported": {
            "type": "Identifier",
            "start": 526,
            "end": 527,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 526,
            "end": 527,
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
        "start": 537,
        "end": 547,
        "value": "./server",
        "raw": "\"./server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 549,
      "end": 589,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 556,
        "end": 589,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 560,
            "end": 588,
            "id": {
              "type": "Identifier",
              "start": 560,
              "end": 570,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 562,
                "end": 570,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 564,
                  "end": 570
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 573,
              "end": 588,
              "decorators": [],
              "name": "defaultBinding6",
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
