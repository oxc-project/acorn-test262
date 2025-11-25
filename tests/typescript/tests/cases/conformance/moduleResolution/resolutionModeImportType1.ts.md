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
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Default",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 29,
            "end": 34
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "typeArguments": null,
          "start": 22,
          "end": 37
        },
        "typeArguments": null,
        "start": 15,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Import",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 50
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 67,
            "end": 72
          },
          "options": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 82
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 86,
                        "end": 103
                      },
                      "value": {
                        "type": "Literal",
                        "value": "import",
                        "raw": "\"import\"",
                        "start": 105,
                        "end": 113
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 86,
                      "end": 113
                    }
                  ],
                  "start": 84,
                  "end": 115
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 76,
                "end": 115
              }
            ],
            "start": 74,
            "end": 117
          },
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "typeArguments": null,
          "start": 60,
          "end": 120
        },
        "typeArguments": null,
        "start": 53,
        "end": 120
      },
      "declare": false,
      "start": 39,
      "end": 121
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Require",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 134
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 151,
            "end": 156
          },
          "options": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 166
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 170,
                        "end": 187
                      },
                      "value": {
                        "type": "Literal",
                        "value": "require",
                        "raw": "\"require\"",
                        "start": 189,
                        "end": 198
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 170,
                      "end": 198
                    }
                  ],
                  "start": 168,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 160,
                "end": 200
              }
            ],
            "start": 158,
            "end": 202
          },
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "typeArguments": null,
          "start": 144,
          "end": 205
        },
        "typeArguments": null,
        "start": 137,
        "end": 205
      },
      "declare": false,
      "start": 122,
      "end": 206
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImportRelative",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 312
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./other",
            "raw": "\"./other\"",
            "start": 329,
            "end": 338
          },
          "options": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 348
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 352,
                        "end": 369
                      },
                      "value": {
                        "type": "Literal",
                        "value": "import",
                        "raw": "\"import\"",
                        "start": 371,
                        "end": 379
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 352,
                      "end": 379
                    }
                  ],
                  "start": 350,
                  "end": 381
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 342,
                "end": 381
              }
            ],
            "start": 340,
            "end": 383
          },
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 386
          },
          "typeArguments": null,
          "start": 322,
          "end": 386
        },
        "typeArguments": null,
        "start": 315,
        "end": 386
      },
      "declare": false,
      "start": 293,
      "end": 387
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequireRelative",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 408
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./other",
            "raw": "\"./other\"",
            "start": 425,
            "end": 434
          },
          "options": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 444
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 448,
                        "end": 465
                      },
                      "value": {
                        "type": "Literal",
                        "value": "require",
                        "raw": "\"require\"",
                        "start": 467,
                        "end": 476
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 448,
                      "end": 476
                    }
                  ],
                  "start": 446,
                  "end": 478
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 438,
                "end": 478
              }
            ],
            "start": 436,
            "end": 480
          },
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 483
          },
          "typeArguments": null,
          "start": 418,
          "end": 483
        },
        "typeArguments": null,
        "start": 411,
        "end": 483
      },
      "declare": false,
      "start": 388,
      "end": 484
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 485
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
