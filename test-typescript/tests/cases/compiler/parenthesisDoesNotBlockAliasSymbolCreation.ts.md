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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 80,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "InvalidKeys",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 58,
          "end": 79,
          "constraint": {
            "type": "TSTypeReference",
            "start": 66,
            "end": 67,
            "typeName": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "key": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "optional": true,
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 72,
            "end": 77
          }
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
              "const": false,
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
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "out": false
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
      "start": 81,
      "end": 170,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 88,
        "end": 170,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 105,
          "decorators": [],
          "name": "InvalidKeys2",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 146,
          "end": 167,
          "constraint": {
            "type": "TSTypeReference",
            "start": 154,
            "end": 155,
            "typeName": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "key": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "optional": true,
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 160,
            "end": 165
          }
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
              "const": false,
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
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "out": false
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
      "start": 172,
      "end": 220,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 179,
        "end": 220,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "decorators": [],
          "name": "A",
          "optional": false
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 201,
              "end": 217,
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
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 201,
                "end": 212,
                "decorators": [],
                "name": "InvalidKeys",
                "optional": false
              }
            }
          ]
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
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
      "start": 221,
      "end": 271,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 228,
        "end": 271,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 233,
          "end": 235,
          "decorators": [],
          "name": "A2",
          "optional": false
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 251,
              "end": 268,
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
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 251,
                "end": 263,
                "decorators": [],
                "name": "InvalidKeys2",
                "optional": false
              }
            }
          ]
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
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
      "start": 273,
      "end": 316,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 280,
        "end": 316,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 286,
            "end": 315,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "a",
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
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 315,
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
                          "key": {
                            "type": "Identifier",
                            "start": 302,
                            "end": 303,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 304,
                            "end": 312,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 306,
                              "end": 312
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
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
      "start": 317,
      "end": 362,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 324,
        "end": 362,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 330,
            "end": 361,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 330,
              "end": 332,
              "decorators": [],
              "name": "a2",
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
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 343,
                "end": 361,
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
                          "key": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 349,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 350,
                            "end": 358,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 352,
                              "end": 358
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 345,
                  "decorators": [],
                  "name": "A2",
                  "optional": false
                }
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
      "start": 363,
      "end": 423,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 370,
        "end": 423,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 376,
            "end": 422,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 376,
              "end": 378,
              "decorators": [],
              "name": "a3",
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
                "raw": "null",
                "value": null
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
                        "key": {
                          "type": "Identifier",
                          "start": 391,
                          "end": 392,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 393,
                          "end": 401,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 395,
                            "end": 401
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 406,
                    "end": 422,
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
                            "raw": "\"a\"",
                            "value": "a"
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 417,
                      "decorators": [],
                      "name": "InvalidKeys",
                      "optional": false
                    }
                  }
                ]
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
      "start": 424,
      "end": 485,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 431,
        "end": 485,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 437,
            "end": 484,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 437,
              "end": 439,
              "decorators": [],
              "name": "a4",
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
                "raw": "null",
                "value": null
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
                        "key": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 453,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 454,
                          "end": 462,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 456,
                            "end": 462
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 467,
                    "end": 484,
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
                            "raw": "\"a\"",
                            "value": "a"
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 479,
                      "decorators": [],
                      "name": "InvalidKeys2",
                      "optional": false
                    }
                  }
                ]
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
  "sourceType": "script",
  "hashbang": null
}
```
