__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 35,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 32,
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 36,
        "body": {
          "type": "TSInterfaceBody",
          "start": 34,
          "end": 36,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
  "end": 400,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 185,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 185,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 26,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 33,
          "end": 184,
          "types": [
            {
              "type": "TSImportType",
              "start": 35,
              "end": 107,
              "argument": {
                "type": "TSLiteralType",
                "start": 42,
                "end": 47,
                "literal": {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "raw": "\"pkg\"",
                  "value": "pkg",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 49,
                "end": 89,
                "properties": [
                  {
                    "type": "Property",
                    "start": 51,
                    "end": 87,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
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
                      "start": 57,
                      "end": 87,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 58,
                          "end": 86,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 58,
                            "end": 75,
                            "raw": "\"resolution-mode\"",
                            "value": "resolution-mode",
                            "regex": null,
                            "bigint": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 77,
                            "end": 86,
                            "raw": "\"require\"",
                            "value": "require",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "qualifier": {
                "type": "Identifier",
                "start": 91,
                "end": 107,
                "decorators": [],
                "name": "RequireInterface",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSImportType",
              "start": 114,
              "end": 184,
              "argument": {
                "type": "TSLiteralType",
                "start": 121,
                "end": 126,
                "literal": {
                  "type": "Literal",
                  "start": 121,
                  "end": 126,
                  "raw": "\"pkg\"",
                  "value": "pkg",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 128,
                "end": 167,
                "properties": [
                  {
                    "type": "Property",
                    "start": 130,
                    "end": 165,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 134,
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
                      "start": 136,
                      "end": 165,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 137,
                          "end": 164,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 137,
                            "end": 154,
                            "raw": "\"resolution-mode\"",
                            "value": "resolution-mode",
                            "regex": null,
                            "bigint": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 156,
                            "end": 164,
                            "raw": "\"import\"",
                            "value": "import",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "qualifier": {
                "type": "Identifier",
                "start": 169,
                "end": 184,
                "decorators": [],
                "name": "ImportInterface",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 187,
      "end": 294,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 194,
        "end": 294,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 200,
            "end": 293,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 205,
              "end": 292,
              "expression": {
                "type": "TSAsExpression",
                "start": 205,
                "end": 216,
                "expression": {
                  "type": "Literal",
                  "start": 205,
                  "end": 209,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 213,
                  "end": 216
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 220,
                "end": 292,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 227,
                  "end": 232,
                  "literal": {
                    "type": "Literal",
                    "start": 227,
                    "end": 232,
                    "raw": "\"pkg\"",
                    "value": "pkg",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 234,
                  "end": 274,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 236,
                      "end": 272,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 240,
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
                        "start": 242,
                        "end": 272,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 243,
                            "end": 271,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 243,
                              "end": 260,
                              "raw": "\"resolution-mode\"",
                              "value": "resolution-mode",
                              "regex": null,
                              "bigint": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 262,
                              "end": 271,
                              "raw": "\"require\"",
                              "value": "require",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "qualifier": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 292,
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 295,
      "end": 400,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 302,
        "end": 400,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 308,
            "end": 399,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 313,
              "end": 398,
              "expression": {
                "type": "TSAsExpression",
                "start": 313,
                "end": 324,
                "expression": {
                  "type": "Literal",
                  "start": 313,
                  "end": 317,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 321,
                  "end": 324
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 328,
                "end": 398,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 335,
                  "end": 340,
                  "literal": {
                    "type": "Literal",
                    "start": 335,
                    "end": 340,
                    "raw": "\"pkg\"",
                    "value": "pkg",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 342,
                  "end": 381,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 344,
                      "end": 379,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 344,
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
                        "end": 379,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 351,
                            "end": 378,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 351,
                              "end": 368,
                              "raw": "\"resolution-mode\"",
                              "value": "resolution-mode",
                              "regex": null,
                              "bigint": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 370,
                              "end": 378,
                              "raw": "\"import\"",
                              "value": "import",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "qualifier": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 398,
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
