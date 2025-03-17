__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Spy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 150,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 44,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 21,
                "end": 37,
                "argument": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 30,
                  "name": "params",
                  "typeAnnotation": null,
                  "decorators": [],
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
                },
                "value": null
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 58,
              "name": "identity",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 86,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 75,
              "name": "and",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 124,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 105,
              "name": "mostRecentCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 113,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 129,
            "end": 148,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "name": "argsForCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 152,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "name": "SpyObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSMappedType",
            "start": 173,
            "end": 201,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 180,
              "end": 192,
              "name": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
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
                "name": "Spy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "optional": null,
            "readonly": null,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 203,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 232,
        "name": "createSpyObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 253,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 253,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 247,
              "end": 253
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 255,
          "end": 276,
          "name": "names",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 260,
            "end": 276,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 276,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 267,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 232,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 233,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 277,
        "end": 288,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 279,
          "end": 288,
          "typeName": {
            "type": "Identifier",
            "start": 279,
            "end": 285,
            "name": "SpyObj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 291,
      "end": 542,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 304,
        "name": "mock",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 308,
          "end": 323,
          "name": "spyName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 315,
            "end": 323,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 317,
              "end": 323
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 325,
          "end": 352,
          "name": "methodNames",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 338,
              "end": 352,
              "typeName": {
                "type": "Identifier",
                "start": 338,
                "end": 343,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 383,
                  "name": "spyObj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 386,
                  "end": 423,
                  "callee": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 398,
                    "name": "createSpyObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 402,
                      "end": 409,
                      "name": "spyName",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 411,
                      "end": 422,
                      "name": "methodNames",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
          {
            "type": "ForOfStatement",
            "start": 429,
            "end": 521,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 434,
              "end": 450,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 440,
                  "end": 450,
                  "id": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 450,
                    "name": "methodName",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 454,
              "end": 465,
              "name": "methodNames",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 477,
                      "end": 511,
                      "object": {
                        "type": "MemberExpression",
                        "start": 477,
                        "end": 499,
                        "object": {
                          "type": "MemberExpression",
                          "start": 477,
                          "end": 495,
                          "object": {
                            "type": "Identifier",
                            "start": 477,
                            "end": 483,
                            "name": "spyObj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 484,
                            "end": 494,
                            "name": "methodName",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 496,
                          "end": 499,
                          "name": "and",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 511,
                        "name": "returnValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 512,
                        "end": 513,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
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
              "name": "spyObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 304,
        "end": 307,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 305,
            "end": 306,
            "name": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 353,
        "end": 364,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 355,
          "end": 364,
          "typeName": {
            "type": "Identifier",
            "start": 355,
            "end": 361,
            "name": "SpyObj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
