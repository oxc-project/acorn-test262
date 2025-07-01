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
            "start": 7,
            "end": 22
          },
          "start": 7,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 33,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 85
    },
    {
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
                "start": 94,
                "end": 100
              },
              "start": 92,
              "end": 100
            },
            "start": 90,
            "end": 100
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 118
          },
          "definite": false,
          "start": 90,
          "end": 118
        }
      ],
      "declare": false,
      "start": 86,
      "end": 119
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
            "start": 127,
            "end": 142
          },
          "start": 127,
          "end": 142
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "importKind": "value",
          "start": 146,
          "end": 147
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 155,
        "end": 206
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 120,
      "end": 207
    },
    {
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
                "start": 216,
                "end": 222
              },
              "start": 214,
              "end": 222
            },
            "start": 212,
            "end": 222
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 240
          },
          "definite": false,
          "start": 212,
          "end": 240
        }
      ],
      "declare": false,
      "start": 208,
      "end": 241
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
            "start": 249,
            "end": 264
          },
          "start": 249,
          "end": 264
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 269
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 274
          },
          "importKind": "value",
          "start": 268,
          "end": 274
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 282,
        "end": 333
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 242,
      "end": 334
    },
    {
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
                "start": 343,
                "end": 349
              },
              "start": 341,
              "end": 349
            },
            "start": 339,
            "end": 349
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 367
          },
          "definite": false,
          "start": 339,
          "end": 367
        }
      ],
      "declare": false,
      "start": 335,
      "end": 368
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
            "start": 376,
            "end": 391
          },
          "start": 376,
          "end": 391
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 396
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 396
          },
          "importKind": "value",
          "start": 395,
          "end": 396
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 399
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 404
          },
          "importKind": "value",
          "start": 398,
          "end": 404
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 412,
        "end": 463
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 369,
      "end": 464
    },
    {
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
                "start": 473,
                "end": 479
              },
              "start": 471,
              "end": 479
            },
            "start": 469,
            "end": 479
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 497
          },
          "definite": false,
          "start": 469,
          "end": 497
        }
      ],
      "declare": false,
      "start": 465,
      "end": 498
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
            "start": 506,
            "end": 521
          },
          "start": 506,
          "end": 521
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 526
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 531
          },
          "importKind": "value",
          "start": 525,
          "end": 531
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 541,
        "end": 592
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 499,
      "end": 593
    },
    {
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
                "start": 602,
                "end": 608
              },
              "start": 600,
              "end": 608
            },
            "start": 598,
            "end": 608
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 626
          },
          "definite": false,
          "start": 598,
          "end": 626
        }
      ],
      "declare": false,
      "start": 594,
      "end": 627
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
            "start": 635,
            "end": 650
          },
          "start": 635,
          "end": 650
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 655
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 655
          },
          "importKind": "value",
          "start": 654,
          "end": 655
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 665,
        "end": 716
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 628,
      "end": 717
    },
    {
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
                "start": 726,
                "end": 732
              },
              "start": 724,
              "end": 732
            },
            "start": 722,
            "end": 732
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 750
          },
          "definite": false,
          "start": 722,
          "end": 750
        }
      ],
      "declare": false,
      "start": 718,
      "end": 751
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 751
}
```
