__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 33,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 32,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 24,
                  "end": 32,
                  "literal": {
                    "type": "Literal",
                    "start": 24,
                    "end": 32,
                    "raw": "\"module\"",
                    "value": "module"
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 34,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 33,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 32,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 24,
                  "end": 32,
                  "literal": {
                    "type": "Literal",
                    "start": 24,
                    "end": 32,
                    "raw": "\"script\"",
                    "value": "script"
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 745,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 39,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 26,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 26,
            "decorators": [],
            "name": "Default",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 119,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 79,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 55,
          "end": 66,
          "imported": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "decorators": [],
            "name": "Import",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 89,
          "end": 116,
          "key": {
            "type": "Literal",
            "start": 89,
            "end": 106,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 108,
            "end": 116,
            "raw": "\"import\"",
            "value": "import"
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 120,
      "end": 200,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 154,
        "end": 159,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 134,
          "end": 146,
          "imported": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 139,
            "end": 146,
            "decorators": [],
            "name": "Require",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 169,
          "end": 197,
          "key": {
            "type": "Literal",
            "start": 169,
            "end": 186,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 188,
            "end": 197,
            "raw": "\"require\"",
            "value": "require"
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 201,
      "end": 232,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 214,
        "decorators": [],
        "name": "_Default",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 217,
        "end": 231,
        "exprName": {
          "type": "Identifier",
          "start": 224,
          "end": 231,
          "decorators": [],
          "name": "Default",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 233,
      "end": 262,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 245,
        "decorators": [],
        "name": "_Import",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 248,
        "end": 261,
        "exprName": {
          "type": "Identifier",
          "start": 255,
          "end": 261,
          "decorators": [],
          "name": "Import",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 263,
      "end": 294,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 276,
        "decorators": [],
        "name": "_Require",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 279,
        "end": 293,
        "exprName": {
          "type": "Identifier",
          "start": 286,
          "end": 293,
          "decorators": [],
          "name": "Require",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "ImportDeclaration",
      "start": 382,
      "end": 472,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 423,
        "end": 432,
        "raw": "\"./other\"",
        "value": "./other"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 396,
          "end": 415,
          "imported": {
            "type": "Identifier",
            "start": 396,
            "end": 397,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 401,
            "end": 415,
            "decorators": [],
            "name": "ImportRelative",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 442,
          "end": 469,
          "key": {
            "type": "Literal",
            "start": 442,
            "end": 459,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 461,
            "end": 469,
            "raw": "\"import\"",
            "value": "import"
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 473,
      "end": 565,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 515,
        "end": 524,
        "raw": "\"./other\"",
        "value": "./other"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 487,
          "end": 507,
          "imported": {
            "type": "Identifier",
            "start": 487,
            "end": 488,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 492,
            "end": 507,
            "decorators": [],
            "name": "RequireRelative",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 534,
          "end": 562,
          "key": {
            "type": "Literal",
            "start": 534,
            "end": 551,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 553,
            "end": 562,
            "raw": "\"require\"",
            "value": "require"
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 566,
      "end": 611,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 586,
        "decorators": [],
        "name": "_ImportRelative",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 589,
        "end": 610,
        "exprName": {
          "type": "Identifier",
          "start": 596,
          "end": 610,
          "decorators": [],
          "name": "ImportRelative",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 612,
      "end": 659,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 633,
        "decorators": [],
        "name": "_RequireRelative",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 636,
        "end": 658,
        "exprName": {
          "type": "Identifier",
          "start": 643,
          "end": 658,
          "decorators": [],
          "name": "RequireRelative",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 661,
      "end": 744,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 672,
          "end": 680,
          "exported": {
            "type": "Identifier",
            "start": 672,
            "end": 680,
            "decorators": [],
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 672,
            "end": 680,
            "decorators": [],
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 684,
          "end": 691,
          "exported": {
            "type": "Identifier",
            "start": 684,
            "end": 691,
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 684,
            "end": 691,
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 695,
          "end": 703,
          "exported": {
            "type": "Identifier",
            "start": 695,
            "end": 703,
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 695,
            "end": 703,
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 707,
          "end": 722,
          "exported": {
            "type": "Identifier",
            "start": 707,
            "end": 722,
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 707,
            "end": 722,
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 726,
          "end": 742,
          "exported": {
            "type": "Identifier",
            "start": 726,
            "end": 742,
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 726,
            "end": 742,
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 25,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 24,
              "raw": "\"other\"",
              "value": "other"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
