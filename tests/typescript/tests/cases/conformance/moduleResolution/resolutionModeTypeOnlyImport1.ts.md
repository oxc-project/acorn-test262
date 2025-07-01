__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "module",
                    "raw": "\"module\"",
                    "start": 24,
                    "end": 32
                  },
                  "start": 24,
                  "end": 32
                },
                "start": 22,
                "end": 32
              },
              "start": 21,
              "end": 32
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 32
          }
        ],
        "declare": true,
        "start": 7,
        "end": 33
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "script",
                    "raw": "\"script\"",
                    "start": 24,
                    "end": 32
                  },
                  "start": 24,
                  "end": 32
                },
                "start": 22,
                "end": 32
              },
              "start": 21,
              "end": 32
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 32
          }
        ],
        "declare": true,
        "start": 7,
        "end": 33
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Default",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 26
          },
          "importKind": "value",
          "start": 14,
          "end": 26
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 34,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 40
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Import",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 66
          },
          "importKind": "value",
          "start": 55,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 74,
        "end": 79
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 89,
            "end": 106
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 108,
            "end": 116
          },
          "start": 89,
          "end": 116
        }
      ],
      "importKind": "type",
      "start": 41,
      "end": 119
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 146
          },
          "importKind": "value",
          "start": 134,
          "end": 146
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 154,
        "end": 159
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 169,
            "end": 186
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 188,
            "end": 197
          },
          "start": 169,
          "end": 197
        }
      ],
      "importKind": "type",
      "start": 120,
      "end": 200
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Default",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 214
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Default",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 231
        },
        "typeArguments": null,
        "start": 217,
        "end": 231
      },
      "declare": false,
      "start": 201,
      "end": 232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Import",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 245
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Import",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 261
        },
        "typeArguments": null,
        "start": 248,
        "end": 261
      },
      "declare": false,
      "start": 233,
      "end": 262
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Require",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 276
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Require",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 293
        },
        "typeArguments": null,
        "start": 279,
        "end": 293
      },
      "declare": false,
      "start": 263,
      "end": 294
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 397
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 415
          },
          "importKind": "value",
          "start": 396,
          "end": 415
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 423,
        "end": 432
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 442,
            "end": 459
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 461,
            "end": 469
          },
          "start": 442,
          "end": 469
        }
      ],
      "importKind": "type",
      "start": 382,
      "end": 472
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 488
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 507
          },
          "importKind": "value",
          "start": 487,
          "end": 507
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 515,
        "end": 524
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 534,
            "end": 551
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 553,
            "end": 562
          },
          "start": 534,
          "end": 562
        }
      ],
      "importKind": "type",
      "start": 473,
      "end": 565
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_ImportRelative",
        "optional": false,
        "typeAnnotation": null,
        "start": 571,
        "end": 586
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportRelative",
          "optional": false,
          "typeAnnotation": null,
          "start": 596,
          "end": 610
        },
        "typeArguments": null,
        "start": 589,
        "end": 610
      },
      "declare": false,
      "start": 566,
      "end": 611
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_RequireRelative",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 633
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequireRelative",
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 658
        },
        "typeArguments": null,
        "start": 636,
        "end": 658
      },
      "declare": false,
      "start": 612,
      "end": 659
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 680
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 680
          },
          "exportKind": "value",
          "start": 672,
          "end": 680
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 691
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 691
          },
          "exportKind": "value",
          "start": 684,
          "end": 691
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 703
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 703
          },
          "exportKind": "value",
          "start": 695,
          "end": 703
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 707,
            "end": 722
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 707,
            "end": 722
          },
          "exportKind": "value",
          "start": 707,
          "end": 722
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 742
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 742
          },
          "exportKind": "value",
          "start": 726,
          "end": 742
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 661,
      "end": 744
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 745
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": "other",
              "raw": "\"other\"",
              "start": 17,
              "end": 24
            },
            "definite": false,
            "start": 13,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
