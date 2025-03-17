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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "name": "Default",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 50,
        "name": "Import",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "foo",
              "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "name": "with",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 84,
                  "end": 115,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 86,
                      "end": 113,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 86,
                        "end": 103,
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\""
                      },
                      "value": {
                        "type": "Literal",
                        "start": 105,
                        "end": 113,
                        "value": "import",
                        "raw": "\"import\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "qualifier": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 122,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 134,
        "name": "Require",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "foo",
              "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 166,
                  "name": "with",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 168,
                  "end": 200,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 170,
                      "end": 198,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 170,
                        "end": 187,
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\""
                      },
                      "value": {
                        "type": "Literal",
                        "start": 189,
                        "end": 198,
                        "value": "require",
                        "raw": "\"require\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "qualifier": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 293,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 312,
        "name": "ImportRelative",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "./other",
              "raw": "\"./other\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 348,
                  "name": "with",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 350,
                  "end": 381,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 352,
                      "end": 379,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 352,
                        "end": 369,
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\""
                      },
                      "value": {
                        "type": "Literal",
                        "start": 371,
                        "end": 379,
                        "value": "import",
                        "raw": "\"import\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "qualifier": {
            "type": "Identifier",
            "start": 385,
            "end": 386,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 388,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 408,
        "name": "RequireRelative",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "./other",
              "raw": "\"./other\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 444,
                  "name": "with",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 446,
                  "end": 478,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 448,
                      "end": 476,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 448,
                        "end": 465,
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\""
                      },
                      "value": {
                        "type": "Literal",
                        "start": 467,
                        "end": 476,
                        "value": "require",
                        "raw": "\"require\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "qualifier": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
