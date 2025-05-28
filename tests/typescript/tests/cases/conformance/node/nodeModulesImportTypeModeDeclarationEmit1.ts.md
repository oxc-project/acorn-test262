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
  "end": 408,
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
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 57,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
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
                          "kind": "init",
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
                "start": 93,
                "end": 109,
                "decorators": [],
                "name": "RequireInterface",
                "optional": false,
                "typeAnnotation": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 138,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
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
                          "kind": "init",
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
                "start": 173,
                "end": 188,
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
      "start": 191,
      "end": 300,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 198,
        "end": 300,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 204,
            "end": 299,
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 246,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
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
                            "kind": "init",
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
                  "start": 282,
                  "end": 298,
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
      "start": 301,
      "end": 408,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 308,
        "end": 408,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 314,
            "end": 407,
            "id": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 350,
                        "end": 356,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
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
                            "kind": "init",
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
                  "start": 391,
                  "end": 406,
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
