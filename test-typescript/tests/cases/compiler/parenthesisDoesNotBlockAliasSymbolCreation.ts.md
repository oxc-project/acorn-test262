__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 486,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 80,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "name": "InvalidKeys",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 55,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 54,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 34,
                "end": 54,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 41,
                    "end": 47
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 48,
                    "end": 54
                  }
                ]
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 58,
          "end": 79,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 67,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 72,
            "end": 77
          },
          "optional": true,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 66,
            "end": 67,
            "typeName": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "key": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
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
      "start": 81,
      "end": 170,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 88,
        "end": 170,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 105,
          "name": "InvalidKeys2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 105,
          "end": 137,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 106,
              "end": 136,
              "name": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 116,
                "end": 136,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 116,
                    "end": 122
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 123,
                    "end": 129
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 130,
                    "end": 136
                  }
                ]
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 146,
          "end": 167,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 149,
            "end": 155,
            "name": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 155,
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 160,
            "end": 165
          },
          "optional": true,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 154,
            "end": 155,
            "typeName": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "key": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
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
      "start": 172,
      "end": 220,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 179,
        "end": 220,
        "id": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 185,
          "end": 188,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 186,
              "end": 187,
              "name": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 197,
          "end": 217,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 197,
              "end": 198,
              "typeName": {
                "type": "Identifier",
                "start": 197,
                "end": 198,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 201,
              "end": 217,
              "typeName": {
                "type": "Identifier",
                "start": 201,
                "end": 212,
                "name": "InvalidKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 212,
                "end": 217,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 213,
                    "end": 216,
                    "literal": {
                      "type": "Literal",
                      "start": 213,
                      "end": 216,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  }
                ]
              }
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
      "start": 221,
      "end": 271,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 228,
        "end": 271,
        "id": {
          "type": "Identifier",
          "start": 233,
          "end": 235,
          "name": "A2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 235,
          "end": 238,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 236,
              "end": 237,
              "name": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 247,
          "end": 268,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 247,
              "end": 248,
              "typeName": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 251,
              "end": 268,
              "typeName": {
                "type": "Identifier",
                "start": 251,
                "end": 263,
                "name": "InvalidKeys2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 263,
                "end": 268,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 264,
                    "end": 267,
                    "literal": {
                      "type": "Literal",
                      "start": 264,
                      "end": 267,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  }
                ]
              }
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
      "start": 273,
      "end": 316,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 280,
        "end": 316,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 286,
            "end": 315,
            "id": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 290,
              "end": 315,
              "expression": {
                "type": "Literal",
                "start": 290,
                "end": 294,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 299,
                  "end": 315,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 300,
                      "end": 314,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 302,
                          "end": 312,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 302,
                            "end": 303,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 304,
                            "end": 312,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 306,
                              "end": 312
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
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
      "start": 317,
      "end": 362,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 324,
        "end": 362,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 330,
            "end": 361,
            "id": {
              "type": "Identifier",
              "start": 330,
              "end": 332,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 335,
              "end": 361,
              "expression": {
                "type": "Literal",
                "start": 335,
                "end": 339,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 343,
                "end": 361,
                "typeName": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 345,
                  "name": "A2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 345,
                  "end": 361,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 346,
                      "end": 360,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 348,
                          "end": 358,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 349,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 350,
                            "end": 358,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 352,
                              "end": 358
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
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
      "start": 363,
      "end": 423,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 370,
        "end": 423,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 376,
            "end": 422,
            "id": {
              "type": "Identifier",
              "start": 376,
              "end": 378,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 381,
              "end": 422,
              "expression": {
                "type": "Literal",
                "start": 381,
                "end": 385,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 389,
                "end": 422,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 389,
                    "end": 403,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 391,
                        "end": 401,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 391,
                          "end": 392,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 393,
                          "end": 401,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 395,
                            "end": 401
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 406,
                    "end": 422,
                    "typeName": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 417,
                      "name": "InvalidKeys",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 417,
                      "end": 422,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 418,
                          "end": 421,
                          "literal": {
                            "type": "Literal",
                            "start": 418,
                            "end": 421,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        }
                      ]
                    }
                  }
                ]
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
      "start": 424,
      "end": 485,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 431,
        "end": 485,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 437,
            "end": 484,
            "id": {
              "type": "Identifier",
              "start": 437,
              "end": 439,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 442,
              "end": 484,
              "expression": {
                "type": "Literal",
                "start": 442,
                "end": 446,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 450,
                "end": 484,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 450,
                    "end": 464,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 452,
                        "end": 462,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 453,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 454,
                          "end": 462,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 456,
                            "end": 462
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 467,
                    "end": 484,
                    "typeName": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 479,
                      "name": "InvalidKeys2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 479,
                      "end": 484,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 480,
                          "end": 483,
                          "literal": {
                            "type": "Literal",
                            "start": 480,
                            "end": 483,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        }
                      ]
                    }
                  }
                ]
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
  "sourceType": "script",
  "hashbang": null
}
```
