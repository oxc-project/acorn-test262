spyComparisonChecking.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 542,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 150,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 150,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 44,
            "params": [
              {
                "type": "RestElement",
                "start": 21,
                "end": 37,
                "argument": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 30,
                  "decorators": [],
                  "name": "params",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 32,
                    "end": 37,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 32,
                      "end": 35
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 67,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 58,
              "decorators": [],
              "name": "identity",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 86,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 75,
              "decorators": [],
              "name": "and",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 85,
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 124,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 105,
              "decorators": [],
              "name": "mostRecentCall",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 107,
                "end": 123,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 109,
                    "end": 121,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 113,
                      "decorators": [],
                      "name": "args",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 113,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 115,
                        "end": 120,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 115,
                          "end": 118
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 129,
            "end": 148,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "decorators": [],
              "name": "argsForCall",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 147,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 142,
                "end": 147,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 142,
                  "end": 145
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
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Spy",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 152,
      "end": 201,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "decorators": [],
        "name": "SpyObj",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 169,
        "end": 201,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 169,
            "end": 170,
            "typeName": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSMappedType",
            "start": 173,
            "end": 201,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 185,
              "end": 192,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "k",
              "optional": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 195,
              "end": 198,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "decorators": [],
                "name": "Spy",
                "optional": false
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 163,
        "end": 166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 165,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 203,
      "end": 289,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 232,
        "decorators": [],
        "name": "createSpyObj",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 253,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 253,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 247,
              "end": 253
            }
          }
        },
        {
          "type": "Identifier",
          "start": 255,
          "end": 276,
          "decorators": [],
          "name": "names",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 260,
            "end": 276,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 276,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 267,
                "end": 276,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 268,
                    "end": 275,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 274,
                      "end": 275,
                      "typeName": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 267,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 277,
        "end": 288,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 279,
          "end": 288,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 285,
            "end": 288,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 286,
                "end": 287,
                "typeName": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 287,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 279,
            "end": 285,
            "decorators": [],
            "name": "SpyObj",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 232,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 233,
            "end": 234,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 291,
      "end": 542,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 365,
        "end": 542,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 371,
            "end": 424,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 377,
                "end": 423,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 383,
                  "decorators": [],
                  "name": "spyObj",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 386,
                  "end": 423,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 402,
                      "end": 409,
                      "decorators": [],
                      "name": "spyName",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 411,
                      "end": 422,
                      "decorators": [],
                      "name": "methodNames",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 398,
                    "decorators": [],
                    "name": "createSpyObj",
                    "optional": false
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 398,
                    "end": 401,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 399,
                        "end": 400,
                        "typeName": {
                          "type": "Identifier",
                          "start": 399,
                          "end": 400,
                          "decorators": [],
                          "name": "T",
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
          {
            "type": "ForOfStatement",
            "start": 429,
            "end": 521,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 467,
              "end": 521,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 477,
                  "end": 515,
                  "expression": {
                    "type": "CallExpression",
                    "start": 477,
                    "end": 514,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 512,
                        "end": 513,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 477,
                      "end": 511,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 477,
                        "end": 499,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 477,
                          "end": 495,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 477,
                            "end": 483,
                            "decorators": [],
                            "name": "spyObj",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 484,
                            "end": 494,
                            "decorators": [],
                            "name": "methodName",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 496,
                          "end": 499,
                          "decorators": [],
                          "name": "and",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 511,
                        "decorators": [],
                        "name": "returnValue",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 434,
              "end": 450,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 440,
                  "end": 450,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 450,
                    "decorators": [],
                    "name": "methodName",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 454,
              "end": 465,
              "decorators": [],
              "name": "methodNames",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 526,
            "end": 540,
            "argument": {
              "type": "Identifier",
              "start": 533,
              "end": 539,
              "decorators": [],
              "name": "spyObj",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 304,
        "decorators": [],
        "name": "mock",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 308,
          "end": 323,
          "decorators": [],
          "name": "spyName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 315,
            "end": 323,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 317,
              "end": 323
            }
          }
        },
        {
          "type": "Identifier",
          "start": 325,
          "end": 352,
          "decorators": [],
          "name": "methodNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 338,
              "end": 352,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 343,
                "end": 352,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 344,
                    "end": 351,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 350,
                      "end": 351,
                      "typeName": {
                        "type": "Identifier",
                        "start": 350,
                        "end": 351,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 338,
                "end": 343,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 353,
        "end": 364,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 355,
          "end": 364,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 361,
            "end": 364,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 362,
                "end": 363,
                "typeName": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 363,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 355,
            "end": 361,
            "decorators": [],
            "name": "SpyObj",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 304,
        "end": 307,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 305,
            "end": 306,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
