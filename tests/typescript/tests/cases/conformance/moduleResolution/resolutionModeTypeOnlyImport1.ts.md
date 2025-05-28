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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 33,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 32,
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
                    "value": "module",
                    "raw": "\"module\""
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 33,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 32,
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
                    "value": "script",
                    "raw": "\"script\""
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 26,
            "decorators": [],
            "name": "Default",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 39,
        "value": "foo",
        "raw": "\"foo\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 119,
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
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "decorators": [],
            "name": "Import",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 79,
        "value": "foo",
        "raw": "\"foo\""
      },
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
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 108,
            "end": 116,
            "value": "import",
            "raw": "\"import\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 120,
      "end": 200,
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
          "local": {
            "type": "Identifier",
            "start": 139,
            "end": 146,
            "decorators": [],
            "name": "Require",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 154,
        "end": 159,
        "value": "foo",
        "raw": "\"foo\""
      },
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
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 188,
            "end": 197,
            "value": "require",
            "raw": "\"require\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 201,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 214,
        "decorators": [],
        "name": "_Default",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 233,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 245,
        "decorators": [],
        "name": "_Import",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 263,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 276,
        "decorators": [],
        "name": "_Require",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 382,
      "end": 472,
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
          "local": {
            "type": "Identifier",
            "start": 401,
            "end": 415,
            "decorators": [],
            "name": "ImportRelative",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 423,
        "end": 432,
        "value": "./other",
        "raw": "\"./other\""
      },
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
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 461,
            "end": 469,
            "value": "import",
            "raw": "\"import\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 473,
      "end": 565,
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
          "local": {
            "type": "Identifier",
            "start": 492,
            "end": 507,
            "decorators": [],
            "name": "RequireRelative",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 515,
        "end": 524,
        "value": "./other",
        "raw": "\"./other\""
      },
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
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 553,
            "end": 562,
            "value": "require",
            "raw": "\"require\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 566,
      "end": 611,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 586,
        "decorators": [],
        "name": "_ImportRelative",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 612,
      "end": 659,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 633,
        "decorators": [],
        "name": "_RequireRelative",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 661,
      "end": 744,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 672,
          "end": 680,
          "local": {
            "type": "Identifier",
            "start": 672,
            "end": 680,
            "decorators": [],
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 672,
            "end": 680,
            "decorators": [],
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 684,
          "end": 691,
          "local": {
            "type": "Identifier",
            "start": 684,
            "end": 691,
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 684,
            "end": 691,
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 695,
          "end": 703,
          "local": {
            "type": "Identifier",
            "start": 695,
            "end": 703,
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 695,
            "end": 703,
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 707,
          "end": 722,
          "local": {
            "type": "Identifier",
            "start": 707,
            "end": 722,
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 707,
            "end": 722,
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 726,
          "end": 742,
          "local": {
            "type": "Identifier",
            "start": 726,
            "end": 742,
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 726,
            "end": 742,
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
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
              "value": "other",
              "raw": "\"other\""
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
