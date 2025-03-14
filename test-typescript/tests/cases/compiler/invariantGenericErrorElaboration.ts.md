__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 563,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 45,
            "decorators": [],
            "name": "wat",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 45,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 40,
                  "end": 45,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 41,
                      "end": 44
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 40,
                  "decorators": [],
                  "name": "Runtype",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 48,
            "end": 51,
            "decorators": [],
            "name": "Num",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 65,
            "end": 82,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 69,
                "end": 81,
                "properties": [
                  {
                    "type": "Property",
                    "start": 71,
                    "end": 79,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 74,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 79,
                      "decorators": [],
                      "name": "Num",
                      "optional": false
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "decorators": [],
              "name": "Obj",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 84,
      "end": 152,
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 152,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 137,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 119,
              "decorators": [],
              "name": "constraint",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 137,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 131,
                  "end": 137,
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 132,
                      "end": 136
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 131,
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 150,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 147,
              "decorators": [],
              "name": "witness",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "decorators": [],
        "name": "Runtype",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 154,
      "end": 211,
      "body": {
        "type": "TSInterfaceBody",
        "start": 192,
        "end": 211,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 196,
            "end": 209,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "decorators": [],
              "name": "tag",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 209,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 201,
                "end": 209,
                "literal": {
                  "type": "Literal",
                  "start": 201,
                  "end": 209,
                  "raw": "'number'",
                  "value": "number"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 176,
          "end": 191,
          "expression": {
            "type": "Identifier",
            "start": 176,
            "end": 183,
            "decorators": [],
            "name": "Runtype",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 183,
            "end": 191,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 184,
                "end": 190
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "decorators": [],
        "name": "Num",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 234,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 234,
            "decorators": [],
            "name": "Num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 234,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "Num",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 236,
      "end": 347,
      "body": {
        "type": "TSInterfaceBody",
        "start": 345,
        "end": 347,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 301,
          "end": 344,
          "expression": {
            "type": "Identifier",
            "start": 301,
            "end": 308,
            "decorators": [],
            "name": "Runtype",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 308,
            "end": 344,
            "params": [
              {
                "type": "TSMappedType",
                "start": 309,
                "end": 343,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 316,
                  "end": 323,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 322,
                    "end": 323,
                    "typeName": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 323,
                      "decorators": [],
                      "name": "O",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 326,
                  "end": 341,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 331,
                    "end": 340,
                    "literal": {
                      "type": "Literal",
                      "start": 331,
                      "end": 340,
                      "raw": "'witness'",
                      "value": "witness"
                    }
                  },
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "start": 326,
                    "end": 330,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 329,
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 326,
                      "end": 327,
                      "typeName": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "decorators": [],
                        "name": "O",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 249,
        "decorators": [],
        "name": "Obj",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 249,
        "end": 292,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 291,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 260,
              "end": 291,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 268,
                "end": 274
              },
              "key": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "_",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 277,
                "end": 289,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 284,
                  "end": 289,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 285,
                      "end": 288
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 284,
                  "decorators": [],
                  "name": "Runtype",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 348,
      "end": 429,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 365,
        "end": 368,
        "decorators": [],
        "name": "Obj",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 410,
          "end": 419,
          "decorators": [],
          "name": "fields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 416,
            "end": 419,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 418,
              "end": 419,
              "typeName": {
                "type": "Identifier",
                "start": 418,
                "end": 419,
                "decorators": [],
                "name": "O",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 420,
        "end": 428,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 422,
          "end": 428,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 425,
            "end": 428,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 426,
                "end": 427,
                "typeName": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 427,
                  "decorators": [],
                  "name": "O",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "decorators": [],
            "name": "Obj",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 368,
        "end": 409,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 369,
            "end": 408,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 379,
              "end": 408,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 381,
                  "end": 406,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 382,
                      "end": 391,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 383,
                        "end": 391,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 385,
                          "end": 391
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 392,
                    "end": 406,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 394,
                      "end": 406,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 401,
                        "end": 406,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 402,
                            "end": 405
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 401,
                        "decorators": [],
                        "name": "Runtype",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 431,
      "end": 562,
      "body": {
        "type": "TSInterfaceBody",
        "start": 506,
        "end": 562,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 510,
            "end": 524,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 520,
              "decorators": [],
              "name": "underlying",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 523,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 522,
                "end": 523,
                "typeName": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 523,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 527,
            "end": 560,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 527,
              "end": 532,
              "decorators": [],
              "name": "check",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 532,
              "end": 559,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 534,
                "end": 559,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 535,
                    "end": 550,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 536,
                      "end": 550,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 538,
                        "end": 550,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 540,
                          "end": 549,
                          "literal": {
                            "type": "Literal",
                            "start": 540,
                            "end": 549,
                            "raw": "'witness'",
                            "value": "witness"
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 538,
                          "end": 539,
                          "typeName": {
                            "type": "Identifier",
                            "start": 538,
                            "end": 539,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 552,
                  "end": 559,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 555,
                    "end": 559
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 484,
          "end": 505,
          "expression": {
            "type": "Identifier",
            "start": 484,
            "end": 491,
            "decorators": [],
            "name": "Runtype",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 491,
            "end": 505,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 492,
                "end": 504,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 494,
                  "end": 503,
                  "literal": {
                    "type": "Literal",
                    "start": 494,
                    "end": 503,
                    "raw": "'witness'",
                    "value": "witness"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 492,
                  "end": 493,
                  "typeName": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 493,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 451,
        "decorators": [],
        "name": "Constraint",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 451,
        "end": 475,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 452,
            "end": 474,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 462,
              "end": 474,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 469,
                "end": 474,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 470,
                    "end": 473
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 469,
                "decorators": [],
                "name": "Runtype",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
