/node_modules/pkg/import.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
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
  "sourceType": "module"
}
```
/node_modules/pkg/require.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
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
  "sourceType": "module"
}
```
/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 399,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 184,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 184,
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
          "end": 183,
          "types": [
            {
              "type": "TSImportType",
              "start": 35,
              "end": 106,
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
                "end": 88,
                "properties": [
                  {
                    "type": "Property",
                    "start": 51,
                    "end": 86,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
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
                      "start": 57,
                      "end": 86,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 58,
                          "end": 85,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 58,
                            "end": 75,
                            "raw": "\"resolution-mode\"",
                            "value": "resolution-mode"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 77,
                            "end": 85,
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
                "start": 90,
                "end": 106,
                "decorators": [],
                "name": "RequireInterface",
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSImportType",
              "start": 113,
              "end": 183,
              "argument": {
                "type": "TSLiteralType",
                "start": 120,
                "end": 125,
                "literal": {
                  "type": "Literal",
                  "start": 120,
                  "end": 125,
                  "raw": "\"pkg\"",
                  "value": "pkg"
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 127,
                "end": 166,
                "properties": [
                  {
                    "type": "Property",
                    "start": 129,
                    "end": 164,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 133,
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
                      "start": 135,
                      "end": 164,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 136,
                          "end": 163,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 136,
                            "end": 153,
                            "raw": "\"resolution-mode\"",
                            "value": "resolution-mode"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 155,
                            "end": 163,
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
                "start": 168,
                "end": 183,
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
      "start": 186,
      "end": 292,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 193,
        "end": 292,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 199,
            "end": 291,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 204,
              "end": 290,
              "expression": {
                "type": "TSAsExpression",
                "start": 204,
                "end": 215,
                "expression": {
                  "type": "Literal",
                  "start": 204,
                  "end": 208,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 212,
                  "end": 215
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 219,
                "end": 290,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 226,
                  "end": 231,
                  "literal": {
                    "type": "Literal",
                    "start": 226,
                    "end": 231,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 233,
                  "end": 272,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 235,
                      "end": 270,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 239,
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
                        "start": 241,
                        "end": 270,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 242,
                            "end": 269,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 242,
                              "end": 259,
                              "raw": "\"resolution-mode\"",
                              "value": "resolution-mode"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 261,
                              "end": 269,
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
                  "start": 274,
                  "end": 290,
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
      "start": 293,
      "end": 398,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 300,
        "end": 398,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 306,
            "end": 397,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 311,
              "end": 396,
              "expression": {
                "type": "TSAsExpression",
                "start": 311,
                "end": 322,
                "expression": {
                  "type": "Literal",
                  "start": 311,
                  "end": 315,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 319,
                  "end": 322
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 326,
                "end": 396,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 333,
                  "end": 338,
                  "literal": {
                    "type": "Literal",
                    "start": 333,
                    "end": 338,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 340,
                  "end": 379,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 342,
                      "end": 377,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 346,
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
                        "start": 348,
                        "end": 377,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 349,
                            "end": 376,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 349,
                              "end": 366,
                              "raw": "\"resolution-mode\"",
                              "value": "resolution-mode"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 368,
                              "end": 376,
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
                  "start": 381,
                  "end": 396,
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
  "sourceType": "module"
}
```
/other.ts
```json
'with' expected.
```
/other2.ts
```json
{
  "type": "Program",
  "start": 23,
  "end": 376,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 184,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 30,
        "end": 184,
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
          "end": 183,
          "types": [
            {
              "type": "TSImportType",
              "start": 58,
              "end": 118,
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
                "end": 100,
                "properties": [
                  {
                    "type": "Property",
                    "start": 74,
                    "end": 98,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 78,
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
                      "start": 80,
                      "end": 98,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 81,
                          "end": 97,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 81,
                            "end": 86,
                            "raw": "\"bad\"",
                            "value": "bad"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 88,
                            "end": 97,
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
                "start": 102,
                "end": 118,
                "decorators": [],
                "name": "RequireInterface",
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSImportType",
              "start": 125,
              "end": 183,
              "argument": {
                "type": "TSLiteralType",
                "start": 132,
                "end": 137,
                "literal": {
                  "type": "Literal",
                  "start": 132,
                  "end": 137,
                  "raw": "\"pkg\"",
                  "value": "pkg"
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 139,
                "end": 166,
                "properties": [
                  {
                    "type": "Property",
                    "start": 141,
                    "end": 164,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 145,
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
                      "start": 147,
                      "end": 164,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 148,
                          "end": 163,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 148,
                            "end": 153,
                            "raw": "\"bad\"",
                            "value": "bad"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 155,
                            "end": 163,
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
                "start": 168,
                "end": 183,
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
      "start": 186,
      "end": 281,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 193,
        "end": 281,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 199,
            "end": 280,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 204,
              "end": 279,
              "expression": {
                "type": "TSAsExpression",
                "start": 204,
                "end": 215,
                "expression": {
                  "type": "Literal",
                  "start": 204,
                  "end": 208,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 212,
                  "end": 215
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 219,
                "end": 279,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 226,
                  "end": 231,
                  "literal": {
                    "type": "Literal",
                    "start": 226,
                    "end": 231,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 233,
                  "end": 261,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 235,
                      "end": 259,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 239,
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
                        "start": 241,
                        "end": 259,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 242,
                            "end": 258,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 242,
                              "end": 247,
                              "raw": "\"bad\"",
                              "value": "bad"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 249,
                              "end": 258,
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
                  "start": 263,
                  "end": 279,
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
      "start": 282,
      "end": 375,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 289,
        "end": 375,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 295,
            "end": 374,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 295,
              "end": 296,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 300,
              "end": 373,
              "expression": {
                "type": "TSAsExpression",
                "start": 300,
                "end": 311,
                "expression": {
                  "type": "Literal",
                  "start": 300,
                  "end": 304,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 308,
                  "end": 311
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 315,
                "end": 373,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 322,
                  "end": 327,
                  "literal": {
                    "type": "Literal",
                    "start": 322,
                    "end": 327,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 329,
                  "end": 356,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 331,
                      "end": 354,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 335,
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
                        "start": 337,
                        "end": 354,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 338,
                            "end": 353,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 338,
                              "end": 343,
                              "raw": "\"bad\"",
                              "value": "bad"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 345,
                              "end": 353,
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
                  "start": 358,
                  "end": 373,
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
  "sourceType": "module"
}
```
/other3.ts
```json
'{' expected.
```
/other4.ts
```json
'{' expected.
```
/other5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 130,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 130,
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
          "end": 129,
          "types": [
            {
              "type": "TSImportType",
              "start": 35,
              "end": 79,
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
                "end": 61,
                "properties": [
                  {
                    "type": "Property",
                    "start": 51,
                    "end": 59,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
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
                      "start": 57,
                      "end": 59,
                      "properties": []
                    }
                  }
                ]
              },
              "qualifier": {
                "type": "Identifier",
                "start": 63,
                "end": 79,
                "decorators": [],
                "name": "RequireInterface",
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSImportType",
              "start": 86,
              "end": 129,
              "argument": {
                "type": "TSLiteralType",
                "start": 93,
                "end": 98,
                "literal": {
                  "type": "Literal",
                  "start": 93,
                  "end": 98,
                  "raw": "\"pkg\"",
                  "value": "pkg"
                }
              },
              "options": {
                "type": "ObjectExpression",
                "start": 100,
                "end": 112,
                "properties": [
                  {
                    "type": "Property",
                    "start": 102,
                    "end": 110,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 106,
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
                      "start": 108,
                      "end": 110,
                      "properties": []
                    }
                  }
                ]
              },
              "qualifier": {
                "type": "Identifier",
                "start": 114,
                "end": 129,
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
      "start": 132,
      "end": 211,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 139,
        "end": 211,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 145,
            "end": 210,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 150,
              "end": 209,
              "expression": {
                "type": "TSAsExpression",
                "start": 150,
                "end": 161,
                "expression": {
                  "type": "Literal",
                  "start": 150,
                  "end": 154,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 158,
                  "end": 161
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 165,
                "end": 209,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 172,
                  "end": 177,
                  "literal": {
                    "type": "Literal",
                    "start": 172,
                    "end": 177,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 179,
                  "end": 191,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 181,
                      "end": 189,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 185,
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
                        "start": 187,
                        "end": 189,
                        "properties": []
                      }
                    }
                  ]
                },
                "qualifier": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 209,
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
      "start": 212,
      "end": 290,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 219,
        "end": 290,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 225,
            "end": 289,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 230,
              "end": 288,
              "expression": {
                "type": "TSAsExpression",
                "start": 230,
                "end": 241,
                "expression": {
                  "type": "Literal",
                  "start": 230,
                  "end": 234,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 238,
                  "end": 241
                }
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 245,
                "end": 288,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 252,
                  "end": 257,
                  "literal": {
                    "type": "Literal",
                    "start": 252,
                    "end": 257,
                    "raw": "\"pkg\"",
                    "value": "pkg"
                  }
                },
                "options": {
                  "type": "ObjectExpression",
                  "start": 259,
                  "end": 271,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 261,
                      "end": 269,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 265,
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
                        "start": 267,
                        "end": 269,
                        "properties": []
                      }
                    }
                  ]
                },
                "qualifier": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 288,
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
  "sourceType": "module"
}
```
