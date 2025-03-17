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
          "name": "ImportInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "RequireInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
      "attributes": [],
      "exportKind": "type"
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
  "end": 409,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 189,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 189,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 26,
          "name": "LocalInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 33,
          "end": 188,
          "types": [
            {
              "type": "TSImportType",
              "start": 35,
              "end": 109,
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
                "end": 91,
                "properties": [
                  {
                    "type": "Property",
                    "start": 51,
                    "end": 89,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 57,
                      "name": "with",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 59,
                      "end": 89,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 60,
                          "end": 88,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 60,
                            "end": 77,
                            "value": "resolution-mode",
                            "raw": "\"resolution-mode\""
                          },
                          "value": {
                            "type": "Literal",
                            "start": 79,
                            "end": 88,
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
                "start": 93,
                "end": 109,
                "name": "RequireInterface",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSImportType",
              "start": 116,
              "end": 188,
              "argument": {
                "type": "TSLiteralType",
                "start": 123,
                "end": 128,
                "literal": {
                  "type": "Literal",
                  "start": 123,
                  "end": 128,
                  "value": "pkg",
                  "raw": "\"pkg\""
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 130,
                "end": 171,
                "properties": [
                  {
                    "type": "Property",
                    "start": 132,
                    "end": 169,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 138,
                      "name": "with",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 140,
                      "end": 169,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 141,
                          "end": 168,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 141,
                            "end": 158,
                            "value": "resolution-mode",
                            "raw": "\"resolution-mode\""
                          },
                          "value": {
                            "type": "Literal",
                            "start": 160,
                            "end": 168,
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
                "start": 173,
                "end": 188,
                "name": "ImportInterface",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 300,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 198,
        "end": 300,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 204,
            "end": 299,
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 209,
              "end": 298,
              "expression": {
                "type": "TSAsExpression",
                "start": 209,
                "end": 220,
                "expression": {
                  "type": "Literal",
                  "start": 209,
                  "end": 213,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 217,
                  "end": 220
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 224,
                "end": 298,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 231,
                  "end": 236,
                  "literal": {
                    "type": "Literal",
                    "start": 231,
                    "end": 236,
                    "value": "pkg",
                    "raw": "\"pkg\""
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 238,
                  "end": 280,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 240,
                      "end": 278,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 246,
                        "name": "with",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 248,
                        "end": 278,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 249,
                            "end": 277,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 249,
                              "end": 266,
                              "value": "resolution-mode",
                              "raw": "\"resolution-mode\""
                            },
                            "value": {
                              "type": "Literal",
                              "start": 268,
                              "end": 277,
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
                  "start": 282,
                  "end": 298,
                  "name": "RequireInterface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 301,
      "end": 408,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 308,
        "end": 408,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 314,
            "end": 407,
            "id": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 319,
              "end": 406,
              "expression": {
                "type": "TSAsExpression",
                "start": 319,
                "end": 330,
                "expression": {
                  "type": "Literal",
                  "start": 319,
                  "end": 323,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 327,
                  "end": 330
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 334,
                "end": 406,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 341,
                  "end": 346,
                  "literal": {
                    "type": "Literal",
                    "start": 341,
                    "end": 346,
                    "value": "pkg",
                    "raw": "\"pkg\""
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 348,
                  "end": 389,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 350,
                      "end": 387,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 350,
                        "end": 356,
                        "name": "with",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 358,
                        "end": 387,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 359,
                            "end": 386,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 359,
                              "end": 376,
                              "value": "resolution-mode",
                              "raw": "\"resolution-mode\""
                            },
                            "value": {
                              "type": "Literal",
                              "start": 378,
                              "end": 386,
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
                  "start": 391,
                  "end": 406,
                  "name": "ImportInterface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
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
