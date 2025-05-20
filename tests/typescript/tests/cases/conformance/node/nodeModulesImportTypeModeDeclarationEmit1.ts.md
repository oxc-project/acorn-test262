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
  "end": 408,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 189,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 189,
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
                  "raw": "\"pkg\"",
                  "value": "pkg"
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 57,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 59,
                      "end": 89,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 60,
                          "end": 88,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 60,
                            "end": 77,
                            "raw": "\"resolution-mode\"",
                            "value": "resolution-mode"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 79,
                            "end": 88,
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
                  "raw": "\"pkg\"",
                  "value": "pkg"
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 138,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 140,
                      "end": 169,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 141,
                          "end": 168,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 141,
                            "end": 158,
                            "raw": "\"resolution-mode\"",
                            "value": "resolution-mode"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 160,
                            "end": 168,
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
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 300,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 198,
        "end": 300,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 204,
            "end": 299,
            "definite": false,
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
                  "raw": "null",
                  "value": null
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
                    "raw": "\"pkg\"",
                    "value": "pkg"
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 246,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 248,
                        "end": 278,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 249,
                            "end": 277,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 249,
                              "end": 266,
                              "raw": "\"resolution-mode\"",
                              "value": "resolution-mode"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 268,
                              "end": 277,
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
                  "start": 282,
                  "end": 298,
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
      "start": 301,
      "end": 408,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 308,
        "end": 408,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 314,
            "end": 407,
            "definite": false,
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
                  "raw": "null",
                  "value": null
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
                    "raw": "\"pkg\"",
                    "value": "pkg"
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 350,
                        "end": 356,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 358,
                        "end": 387,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 359,
                            "end": 386,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 359,
                              "end": 376,
                              "raw": "\"resolution-mode\"",
                              "value": "resolution-mode"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 378,
                              "end": 386,
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
                  "start": 391,
                  "end": 406,
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
