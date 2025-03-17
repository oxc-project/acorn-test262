__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 485,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 38,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "Default",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 15,
        "end": 37,
        "exprName": {
          "type": "TSImportType",
          "start": 22,
          "end": 37,
          "argument": {
            "type": "TSLiteralType",
            "start": 29,
            "end": 34,
            "literal": {
              "type": "Literal",
              "start": 29,
              "end": 34,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 121,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 50,
        "decorators": [],
        "name": "Import",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 53,
        "end": 120,
        "exprName": {
          "type": "TSImportType",
          "start": 60,
          "end": 120,
          "argument": {
            "type": "TSLiteralType",
            "start": 67,
            "end": 72,
            "literal": {
              "type": "Literal",
              "start": 67,
              "end": 72,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          "options": {
            "type": "ObjectExpression",
            "start": 74,
            "end": 117,
            "properties": [
              {
                "type": "Property",
                "start": 76,
                "end": 115,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 84,
                  "end": 115,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 86,
                      "end": 113,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 86,
                        "end": 103,
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 105,
                        "end": 113,
                        "raw": "\"import\"",
                        "value": "import"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "qualifier": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 122,
      "end": 206,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 134,
        "decorators": [],
        "name": "Require",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 137,
        "end": 205,
        "exprName": {
          "type": "TSImportType",
          "start": 144,
          "end": 205,
          "argument": {
            "type": "TSLiteralType",
            "start": 151,
            "end": 156,
            "literal": {
              "type": "Literal",
              "start": 151,
              "end": 156,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          "options": {
            "type": "ObjectExpression",
            "start": 158,
            "end": 202,
            "properties": [
              {
                "type": "Property",
                "start": 160,
                "end": 200,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 166,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 168,
                  "end": 200,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 170,
                      "end": 198,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 170,
                        "end": 187,
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 189,
                        "end": 198,
                        "raw": "\"require\"",
                        "value": "require"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "qualifier": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 293,
      "end": 387,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 312,
        "decorators": [],
        "name": "ImportRelative",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 315,
        "end": 386,
        "exprName": {
          "type": "TSImportType",
          "start": 322,
          "end": 386,
          "argument": {
            "type": "TSLiteralType",
            "start": 329,
            "end": 338,
            "literal": {
              "type": "Literal",
              "start": 329,
              "end": 338,
              "raw": "\"./other\"",
              "value": "./other"
            }
          },
          "options": {
            "type": "ObjectExpression",
            "start": 340,
            "end": 383,
            "properties": [
              {
                "type": "Property",
                "start": 342,
                "end": 381,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 348,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 350,
                  "end": 381,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 352,
                      "end": 379,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 352,
                        "end": 369,
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 371,
                        "end": 379,
                        "raw": "\"import\"",
                        "value": "import"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "qualifier": {
            "type": "Identifier",
            "start": 385,
            "end": 386,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 388,
      "end": 484,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 408,
        "decorators": [],
        "name": "RequireRelative",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 411,
        "end": 483,
        "exprName": {
          "type": "TSImportType",
          "start": 418,
          "end": 483,
          "argument": {
            "type": "TSLiteralType",
            "start": 425,
            "end": 434,
            "literal": {
              "type": "Literal",
              "start": 425,
              "end": 434,
              "raw": "\"./other\"",
              "value": "./other"
            }
          },
          "options": {
            "type": "ObjectExpression",
            "start": 436,
            "end": 480,
            "properties": [
              {
                "type": "Property",
                "start": 438,
                "end": 478,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 444,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 446,
                  "end": 478,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 448,
                      "end": 476,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 448,
                        "end": 465,
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 467,
                        "end": 476,
                        "raw": "\"require\"",
                        "value": "require"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "qualifier": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
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
  "end": 26,
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
