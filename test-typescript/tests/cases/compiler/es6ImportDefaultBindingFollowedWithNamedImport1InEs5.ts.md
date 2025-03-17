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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 788,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 92,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 22,
            "name": "defaultBinding1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 91,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 106,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 100,
                "end": 106
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 109,
            "end": 124,
            "name": "defaultBinding1",
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
    {
      "type": "ImportDeclaration",
      "start": 126,
      "end": 220,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 133,
          "end": 148,
          "local": {
            "type": "Identifier",
            "start": 133,
            "end": 148,
            "name": "defaultBinding2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 152,
          "end": 153,
          "imported": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
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
        "start": 161,
        "end": 219,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 253,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 234,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 234,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 228,
                "end": 234
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 237,
            "end": 252,
            "name": "defaultBinding2",
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
    {
      "type": "ImportDeclaration",
      "start": 254,
      "end": 353,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 261,
          "end": 276,
          "local": {
            "type": "Identifier",
            "start": 261,
            "end": 276,
            "name": "defaultBinding3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 280,
          "end": 286,
          "imported": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
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
        "start": 294,
        "end": 352,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 367,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 359,
              "end": 367,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 361,
                "end": 367
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 370,
            "end": 385,
            "name": "defaultBinding3",
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
    {
      "type": "ImportDeclaration",
      "start": 387,
      "end": 489,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 394,
          "end": 409,
          "local": {
            "type": "Identifier",
            "start": 394,
            "end": 409,
            "name": "defaultBinding4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 413,
          "end": 414,
          "imported": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 416,
          "end": 422,
          "imported": {
            "type": "Identifier",
            "start": 416,
            "end": 417,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 421,
            "end": 422,
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
        "start": 430,
        "end": 488,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 490,
      "end": 522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 503,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 503,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 497,
                "end": 503
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 506,
            "end": 521,
            "name": "defaultBinding4",
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
    {
      "type": "ImportDeclaration",
      "start": 523,
      "end": 624,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 530,
          "end": 545,
          "local": {
            "type": "Identifier",
            "start": 530,
            "end": 545,
            "name": "defaultBinding5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 549,
          "end": 555,
          "imported": {
            "type": "Identifier",
            "start": 549,
            "end": 550,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 554,
            "end": 555,
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
        "start": 565,
        "end": 623,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 625,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 638,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 630,
              "end": 638,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 632,
                "end": 638
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 641,
            "end": 656,
            "name": "defaultBinding5",
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
    {
      "type": "ImportDeclaration",
      "start": 658,
      "end": 754,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 665,
          "end": 680,
          "local": {
            "type": "Identifier",
            "start": 665,
            "end": 680,
            "name": "defaultBinding6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 684,
          "end": 685,
          "imported": {
            "type": "Identifier",
            "start": 684,
            "end": 685,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 684,
            "end": 685,
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
        "start": 695,
        "end": 753,
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 755,
      "end": 787,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 759,
          "end": 786,
          "id": {
            "type": "Identifier",
            "start": 759,
            "end": 768,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 760,
              "end": 768,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 762,
                "end": 768
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 771,
            "end": 786,
            "name": "defaultBinding6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
