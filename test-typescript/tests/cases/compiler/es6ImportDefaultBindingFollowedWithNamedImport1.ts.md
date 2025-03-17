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
  "end": 752,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 85,
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
        "end": 84,
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 100,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 103,
            "end": 118,
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
      "start": 120,
      "end": 207,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 127,
          "end": 142,
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 142,
            "name": "defaultBinding2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 146,
          "end": 147,
          "imported": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
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
        "start": 155,
        "end": 206,
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 222,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 222,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 216,
                "end": 222
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 225,
            "end": 240,
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
      "start": 242,
      "end": 334,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 249,
          "end": 264,
          "local": {
            "type": "Identifier",
            "start": 249,
            "end": 264,
            "name": "defaultBinding3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 268,
          "end": 274,
          "imported": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
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
        "start": 282,
        "end": 333,
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 349,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 349,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 343,
                "end": 349
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 352,
            "end": 367,
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
      "start": 369,
      "end": 464,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 376,
          "end": 391,
          "local": {
            "type": "Identifier",
            "start": 376,
            "end": 391,
            "name": "defaultBinding4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 395,
          "end": 396,
          "imported": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 398,
          "end": 404,
          "imported": {
            "type": "Identifier",
            "start": 398,
            "end": 399,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 403,
            "end": 404,
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
        "start": 412,
        "end": 463,
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 465,
      "end": 498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 497,
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 479,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 471,
              "end": 479,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 473,
                "end": 479
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 482,
            "end": 497,
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
      "start": 499,
      "end": 593,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 506,
          "end": 521,
          "local": {
            "type": "Identifier",
            "start": 506,
            "end": 521,
            "name": "defaultBinding5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 525,
          "end": 531,
          "imported": {
            "type": "Identifier",
            "start": 525,
            "end": 526,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
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
        "start": 541,
        "end": 592,
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 594,
      "end": 627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 626,
          "id": {
            "type": "Identifier",
            "start": 598,
            "end": 608,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 600,
              "end": 608,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 602,
                "end": 608
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 611,
            "end": 626,
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
      "start": 628,
      "end": 717,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 635,
          "end": 650,
          "local": {
            "type": "Identifier",
            "start": 635,
            "end": 650,
            "name": "defaultBinding6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 654,
          "end": 655,
          "imported": {
            "type": "Identifier",
            "start": 654,
            "end": 655,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 654,
            "end": 655,
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
        "start": 665,
        "end": 716,
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 751,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 750,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 732,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 724,
              "end": 732,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 726,
                "end": 732
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 735,
            "end": 750,
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
