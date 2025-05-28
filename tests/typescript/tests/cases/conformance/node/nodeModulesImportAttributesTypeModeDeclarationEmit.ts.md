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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 32,
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 35,
          "body": []
        },
        "declare": false
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
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 36,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 34,
          "end": 36,
          "body": []
        },
        "declare": false
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
  "end": 400,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 185,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 185,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 26,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
                  "value": "pkg",
                  "raw": "\"pkg\""
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
                      "decorators": [],
                      "name": "with",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 57,
                      "end": 87,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 58,
                          "end": 86,
                          "kind": "init",
                          "key": {
                            "type": "Literal",
                            "start": 58,
                            "end": 75,
                            "value": "resolution-mode",
                            "raw": "\"resolution-mode\""
                          },
                          "value": {
                            "type": "Literal",
                            "start": 77,
                            "end": 86,
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
                  "value": "pkg",
                  "raw": "\"pkg\""
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 134,
                      "decorators": [],
                      "name": "with",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 136,
                      "end": 165,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 137,
                          "end": 164,
                          "kind": "init",
                          "key": {
                            "type": "Literal",
                            "start": 137,
                            "end": 154,
                            "value": "resolution-mode",
                            "raw": "\"resolution-mode\""
                          },
                          "value": {
                            "type": "Literal",
                            "start": 156,
                            "end": 164,
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 187,
      "end": 294,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 194,
        "end": 294,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 200,
            "end": 293,
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
                  "value": null,
                  "raw": "null"
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
                    "value": "pkg",
                    "raw": "\"pkg\""
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 240,
                        "decorators": [],
                        "name": "with",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 242,
                        "end": 272,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 243,
                            "end": 271,
                            "kind": "init",
                            "key": {
                              "type": "Literal",
                              "start": 243,
                              "end": 260,
                              "value": "resolution-mode",
                              "raw": "\"resolution-mode\""
                            },
                            "value": {
                              "type": "Literal",
                              "start": 262,
                              "end": 271,
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
                  "start": 276,
                  "end": 292,
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 295,
      "end": 400,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 302,
        "end": 400,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 308,
            "end": 399,
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
                  "value": null,
                  "raw": "null"
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
                    "value": "pkg",
                    "raw": "\"pkg\""
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 348,
                        "decorators": [],
                        "name": "with",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 350,
                        "end": 379,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 351,
                            "end": 378,
                            "kind": "init",
                            "key": {
                              "type": "Literal",
                              "start": 351,
                              "end": 368,
                              "value": "resolution-mode",
                              "raw": "\"resolution-mode\""
                            },
                            "value": {
                              "type": "Literal",
                              "start": 370,
                              "end": 378,
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
                  "start": 383,
                  "end": 398,
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
