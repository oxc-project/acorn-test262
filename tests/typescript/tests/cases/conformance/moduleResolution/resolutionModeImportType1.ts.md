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
        "decorators": [],
        "name": "Default",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "Import",
        "optional": false,
        "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
        "decorators": [],
        "name": "Require",
        "optional": false,
        "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 166,
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
        "decorators": [],
        "name": "ImportRelative",
        "optional": false,
        "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 348,
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
        "decorators": [],
        "name": "RequireRelative",
        "optional": false,
        "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 444,
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
