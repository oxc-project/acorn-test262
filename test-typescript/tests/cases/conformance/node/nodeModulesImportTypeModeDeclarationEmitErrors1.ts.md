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
          "optional": false
        }
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
          "optional": false
        }
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
  "end": 406,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 188,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 188,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 26,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 33,
          "end": 187,
          "types": [
            {
              "type": "TSImportType",
              "start": 35,
              "end": 108,
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
                "end": 90,
                "properties": [
                  {
                    "type": "Property",
                    "start": 51,
                    "end": 88,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 57,
                      "decorators": [],
                      "name": "with",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 59,
                      "end": 88,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 60,
                          "end": 87,
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
                            "end": 87,
                            "raw": "\"foobar\"",
                            "value": "foobar"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "qualifier": {
                "type": "Identifier",
                "start": 92,
                "end": 108,
                "decorators": [],
                "name": "RequireInterface",
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSImportType",
              "start": 115,
              "end": 187,
              "argument": {
                "type": "TSLiteralType",
                "start": 122,
                "end": 127,
                "literal": {
                  "type": "Literal",
                  "start": 122,
                  "end": 127,
                  "raw": "\"pkg\"",
                  "value": "pkg"
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 129,
                "end": 170,
                "properties": [
                  {
                    "type": "Property",
                    "start": 131,
                    "end": 168,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 137,
                      "decorators": [],
                      "name": "with",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 139,
                      "end": 168,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 140,
                          "end": 167,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 140,
                            "end": 157,
                            "raw": "\"resolution-mode\"",
                            "value": "resolution-mode"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 159,
                            "end": 167,
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
                "start": 172,
                "end": 187,
                "decorators": [],
                "name": "ImportInterface",
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 190,
      "end": 298,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 197,
        "end": 298,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 203,
            "end": 297,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 208,
              "end": 296,
              "expression": {
                "type": "TSAsExpression",
                "start": 208,
                "end": 219,
                "expression": {
                  "type": "Literal",
                  "start": 208,
                  "end": 212,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 216,
                  "end": 219
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 223,
                "end": 296,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 230,
                  "end": 235,
                  "literal": {
                    "type": "Literal",
                    "start": 230,
                    "end": 235,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 237,
                  "end": 278,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 239,
                      "end": 276,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 245,
                        "decorators": [],
                        "name": "with",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 247,
                        "end": 276,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 248,
                            "end": 275,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 248,
                              "end": 265,
                              "raw": "\"resolution-mode\"",
                              "value": "resolution-mode"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 267,
                              "end": 275,
                              "raw": "\"foobar\"",
                              "value": "foobar"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "qualifier": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 296,
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false
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
      "start": 299,
      "end": 406,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 306,
        "end": 406,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 312,
            "end": 405,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 317,
              "end": 404,
              "expression": {
                "type": "TSAsExpression",
                "start": 317,
                "end": 328,
                "expression": {
                  "type": "Literal",
                  "start": 317,
                  "end": 321,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 325,
                  "end": 328
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 332,
                "end": 404,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 339,
                  "end": 344,
                  "literal": {
                    "type": "Literal",
                    "start": 339,
                    "end": 344,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 346,
                  "end": 387,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 348,
                      "end": 385,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 354,
                        "decorators": [],
                        "name": "with",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 356,
                        "end": 385,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 357,
                            "end": 384,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 357,
                              "end": 374,
                              "raw": "\"resolution-mode\"",
                              "value": "resolution-mode"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 376,
                              "end": 384,
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
                  "start": 389,
                  "end": 404,
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false
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
__ESTREE_TEST__:FAIL:
```json
'with' expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 383,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 188,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 30,
        "end": 188,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 49,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 56,
          "end": 187,
          "types": [
            {
              "type": "TSImportType",
              "start": 58,
              "end": 120,
              "argument": {
                "type": "TSLiteralType",
                "start": 65,
                "end": 70,
                "literal": {
                  "type": "Literal",
                  "start": 65,
                  "end": 70,
                  "raw": "\"pkg\"",
                  "value": "pkg"
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 72,
                "end": 102,
                "properties": [
                  {
                    "type": "Property",
                    "start": 74,
                    "end": 100,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 80,
                      "decorators": [],
                      "name": "with",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 82,
                      "end": 100,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 99,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 83,
                            "end": 88,
                            "raw": "\"bad\"",
                            "value": "bad"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 90,
                            "end": 99,
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
                "start": 104,
                "end": 120,
                "decorators": [],
                "name": "RequireInterface",
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSImportType",
              "start": 127,
              "end": 187,
              "argument": {
                "type": "TSLiteralType",
                "start": 134,
                "end": 139,
                "literal": {
                  "type": "Literal",
                  "start": 134,
                  "end": 139,
                  "raw": "\"pkg\"",
                  "value": "pkg"
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 141,
                "end": 170,
                "properties": [
                  {
                    "type": "Property",
                    "start": 143,
                    "end": 168,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 149,
                      "decorators": [],
                      "name": "with",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 151,
                      "end": 168,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 152,
                          "end": 167,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 152,
                            "end": 157,
                            "raw": "\"bad\"",
                            "value": "bad"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 159,
                            "end": 167,
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
                "start": 172,
                "end": 187,
                "decorators": [],
                "name": "ImportInterface",
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 190,
      "end": 287,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 197,
        "end": 287,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 203,
            "end": 286,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 208,
              "end": 285,
              "expression": {
                "type": "TSAsExpression",
                "start": 208,
                "end": 219,
                "expression": {
                  "type": "Literal",
                  "start": 208,
                  "end": 212,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 216,
                  "end": 219
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 223,
                "end": 285,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 230,
                  "end": 235,
                  "literal": {
                    "type": "Literal",
                    "start": 230,
                    "end": 235,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 237,
                  "end": 267,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 239,
                      "end": 265,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 245,
                        "decorators": [],
                        "name": "with",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 247,
                        "end": 265,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 248,
                            "end": 264,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 248,
                              "end": 253,
                              "raw": "\"bad\"",
                              "value": "bad"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 255,
                              "end": 264,
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
                  "start": 269,
                  "end": 285,
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false
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
      "start": 288,
      "end": 383,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 295,
        "end": 383,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 301,
            "end": 382,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 306,
              "end": 381,
              "expression": {
                "type": "TSAsExpression",
                "start": 306,
                "end": 317,
                "expression": {
                  "type": "Literal",
                  "start": 306,
                  "end": 310,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 314,
                  "end": 317
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 321,
                "end": 381,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 328,
                  "end": 333,
                  "literal": {
                    "type": "Literal",
                    "start": 328,
                    "end": 333,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 335,
                  "end": 364,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 337,
                      "end": 362,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 343,
                        "decorators": [],
                        "name": "with",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 345,
                        "end": 362,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 346,
                            "end": 361,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 346,
                              "end": 351,
                              "raw": "\"bad\"",
                              "value": "bad"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 353,
                              "end": 361,
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
                  "start": 366,
                  "end": 381,
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false
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
__ESTREE_TEST__:FAIL:
```json
'{' expected.
```
__ESTREE_TEST__:FAIL:
```json
'{' expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 299,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 134,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 134,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 26,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 33,
          "end": 133,
          "types": [
            {
              "type": "TSImportType",
              "start": 35,
              "end": 81,
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
                "end": 63,
                "properties": [
                  {
                    "type": "Property",
                    "start": 51,
                    "end": 61,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 57,
                      "decorators": [],
                      "name": "with",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 59,
                      "end": 61,
                      "properties": []
                    }
                  }
                ]
              },
              "qualifier": {
                "type": "Identifier",
                "start": 65,
                "end": 81,
                "decorators": [],
                "name": "RequireInterface",
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSImportType",
              "start": 88,
              "end": 133,
              "argument": {
                "type": "TSLiteralType",
                "start": 95,
                "end": 100,
                "literal": {
                  "type": "Literal",
                  "start": 95,
                  "end": 100,
                  "raw": "\"pkg\"",
                  "value": "pkg"
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 102,
                "end": 116,
                "properties": [
                  {
                    "type": "Property",
                    "start": 104,
                    "end": 114,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 110,
                      "decorators": [],
                      "name": "with",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 112,
                      "end": 114,
                      "properties": []
                    }
                  }
                ]
              },
              "qualifier": {
                "type": "Identifier",
                "start": 118,
                "end": 133,
                "decorators": [],
                "name": "ImportInterface",
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 217,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 143,
        "end": 217,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 149,
            "end": 216,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 154,
              "end": 215,
              "expression": {
                "type": "TSAsExpression",
                "start": 154,
                "end": 165,
                "expression": {
                  "type": "Literal",
                  "start": 154,
                  "end": 158,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 162,
                  "end": 165
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 169,
                "end": 215,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 176,
                  "end": 181,
                  "literal": {
                    "type": "Literal",
                    "start": 176,
                    "end": 181,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 183,
                  "end": 197,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 185,
                      "end": 195,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 191,
                        "decorators": [],
                        "name": "with",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 193,
                        "end": 195,
                        "properties": []
                      }
                    }
                  ]
                },
                "qualifier": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 215,
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false
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
      "start": 218,
      "end": 298,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 225,
        "end": 298,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 231,
            "end": 297,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 236,
              "end": 296,
              "expression": {
                "type": "TSAsExpression",
                "start": 236,
                "end": 247,
                "expression": {
                  "type": "Literal",
                  "start": 236,
                  "end": 240,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 244,
                  "end": 247
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 251,
                "end": 296,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 258,
                  "end": 263,
                  "literal": {
                    "type": "Literal",
                    "start": 258,
                    "end": 263,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 265,
                  "end": 279,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 267,
                      "end": 277,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 267,
                        "end": 273,
                        "decorators": [],
                        "name": "with",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 275,
                        "end": 277,
                        "properties": []
                      }
                    }
                  ]
                },
                "qualifier": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 296,
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false
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
