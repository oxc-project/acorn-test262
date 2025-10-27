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
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 33,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 87
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
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "start": 92,
            "end": 102
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 120
          },
          "definite": false,
          "start": 92,
          "end": 120
        }
      ],
      "declare": false,
      "start": 88,
      "end": 121
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
            "start": 129,
            "end": 144
          },
          "start": 129,
          "end": 144
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "importKind": "value",
          "start": 148,
          "end": 149
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 157,
        "end": 210
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 122,
      "end": 211
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
                "start": 220,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "start": 216,
            "end": 226
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 244
          },
          "definite": false,
          "start": 216,
          "end": 244
        }
      ],
      "declare": false,
      "start": 212,
      "end": 245
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
            "start": 253,
            "end": 268
          },
          "start": 253,
          "end": 268
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 273
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "importKind": "value",
          "start": 272,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 286,
        "end": 339
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 246,
      "end": 340
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
                "start": 349,
                "end": 355
              },
              "start": 347,
              "end": 355
            },
            "start": 345,
            "end": 355
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 373
          },
          "definite": false,
          "start": 345,
          "end": 373
        }
      ],
      "declare": false,
      "start": 341,
      "end": 374
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
            "start": 382,
            "end": 397
          },
          "start": 382,
          "end": 397
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "importKind": "value",
          "start": 401,
          "end": 402
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 410
          },
          "importKind": "value",
          "start": 404,
          "end": 410
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 418,
        "end": 471
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 375,
      "end": 472
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
                "start": 481,
                "end": 487
              },
              "start": 479,
              "end": 487
            },
            "start": 477,
            "end": 487
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 505
          },
          "definite": false,
          "start": 477,
          "end": 505
        }
      ],
      "declare": false,
      "start": 473,
      "end": 506
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
            "start": 514,
            "end": 529
          },
          "start": 514,
          "end": 529
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 534
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 539
          },
          "importKind": "value",
          "start": 533,
          "end": 539
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 549,
        "end": 602
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 507,
      "end": 603
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
                "start": 612,
                "end": 618
              },
              "start": 610,
              "end": 618
            },
            "start": 608,
            "end": 618
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 636
          },
          "definite": false,
          "start": 608,
          "end": 636
        }
      ],
      "declare": false,
      "start": 604,
      "end": 637
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
            "start": 645,
            "end": 660
          },
          "start": 645,
          "end": 660
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 665
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 665
          },
          "importKind": "value",
          "start": 664,
          "end": 665
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "start": 675,
        "end": 728
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 638,
      "end": 729
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
                "start": 738,
                "end": 744
              },
              "start": 736,
              "end": 744
            },
            "start": 734,
            "end": 744
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 762
          },
          "definite": false,
          "start": 734,
          "end": 762
        }
      ],
      "declare": false,
      "start": 730,
      "end": 763
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 763
}
```
