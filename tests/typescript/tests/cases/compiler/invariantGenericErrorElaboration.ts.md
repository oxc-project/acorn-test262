__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 562,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 52,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 51,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 40,
                  "decorators": [],
                  "name": "Runtype",
                  "optional": false,
                  "typeAnnotation": null
                },
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
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 82,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 65,
            "end": 82,
            "callee": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 74,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 79,
                      "decorators": [],
                      "name": "Num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 84,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "decorators": [],
        "name": "Runtype",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 119,
              "decorators": [],
              "name": "constraint",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 131,
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 147,
              "decorators": [],
              "name": "witness",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 154,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "decorators": [],
        "name": "Num",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": "number",
                  "raw": "'number'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 234,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 234,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 236,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 249,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 260,
              "end": 291,
              "key": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 268,
                "end": 274
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 277,
                "end": 289,
                "typeName": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 284,
                  "decorators": [],
                  "name": "Runtype",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              },
              "optional": false,
              "readonly": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "optional": false,
            "typeAnnotation": null
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
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 326,
                  "end": 341,
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "start": 326,
                    "end": 330,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 331,
                    "end": 340,
                    "literal": {
                      "type": "Literal",
                      "start": 331,
                      "end": 340,
                      "value": "witness",
                      "raw": "'witness'"
                    }
                  }
                },
                "optional": false,
                "readonly": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 345,
        "end": 347,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 348,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 365,
        "end": 368,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 368,
        "end": 409,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 369,
            "end": 408,
            "name": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 392,
                    "end": 406,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 394,
                      "end": 406,
                      "typeName": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 401,
                        "decorators": [],
                        "name": "Runtype",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 431,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 451,
        "decorators": [],
        "name": "Constraint",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 462,
              "end": 474,
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 469,
                "decorators": [],
                "name": "Runtype",
                "optional": false,
                "typeAnnotation": null
              },
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "optional": false,
            "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 494,
                  "end": 503,
                  "literal": {
                    "type": "Literal",
                    "start": 494,
                    "end": 503,
                    "value": "witness",
                    "raw": "'witness'"
                  }
                }
              }
            ]
          }
        }
      ],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 510,
              "end": 520,
              "decorators": [],
              "name": "underlying",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 527,
            "end": 560,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 527,
              "end": 532,
              "decorators": [],
              "name": "check",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 532,
              "end": 559,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 534,
                "end": 559,
                "typeParameters": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 540,
                          "end": 549,
                          "literal": {
                            "type": "Literal",
                            "start": 540,
                            "end": 549,
                            "value": "witness",
                            "raw": "'witness'"
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
