__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 825,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "name": "Reducer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "S",
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
        "type": "TSFunctionType",
        "start": 40,
        "end": 55,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "name": "state",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 51,
          "end": 55,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 54,
            "end": 55,
            "typeName": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 89,
        "name": "combineReducers",
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
          "start": 93,
          "end": 136,
          "name": "reducers",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 101,
            "end": 136,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 103,
              "end": 136,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 106,
                "end": 118,
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
                  "type": "TSTypeOperator",
                  "start": 111,
                  "end": 118,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 117,
                    "end": 118,
                    "typeName": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "name": "S",
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
                "start": 121,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 128,
                  "name": "Reducer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 128,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 129,
                      "end": 133,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 129,
                        "end": 130,
                        "typeName": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "name": "S",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 131,
                        "end": 132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 132,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 111,
                "end": 118,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 117,
                  "end": 118,
                  "typeName": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 118,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "S",
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
        "start": 137,
        "end": 149,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 139,
          "end": 149,
          "typeName": {
            "type": "Identifier",
            "start": 139,
            "end": 146,
            "name": "Reducer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 146,
            "end": 149,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "S",
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
      "type": "TSTypeAliasDeclaration",
      "start": 152,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 164,
        "name": "MyState",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 167,
        "end": 196,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 194,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 177,
              "name": "combined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 179,
                "end": 194,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 181,
                    "end": 192,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 184,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 186,
                        "end": 192
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 253,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 252,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 252,
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 224,
                  "name": "Reducer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 224,
                  "end": 252,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 225,
                      "end": 251,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 225,
                        "end": 244,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 225,
                          "end": 232,
                          "typeName": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 232,
                            "name": "MyState",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 233,
                          "end": 243,
                          "literal": {
                            "type": "Literal",
                            "start": 233,
                            "end": 243,
                            "value": "combined",
                            "raw": "'combined'"
                          }
                        }
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 245,
                        "end": 250,
                        "literal": {
                          "type": "Literal",
                          "start": 245,
                          "end": 250,
                          "value": "foo",
                          "raw": "'foo'"
                        }
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 289,
            "name": "myReducer1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 289,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 289,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 280,
                  "name": "Reducer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 280,
                  "end": 289,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 281,
                      "end": 288,
                      "typeName": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 288,
                        "name": "MyState",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 292,
            "end": 352,
            "callee": {
              "type": "Identifier",
              "start": 292,
              "end": 307,
              "name": "combineReducers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 308,
                "end": 351,
                "properties": [
                  {
                    "type": "Property",
                    "start": 314,
                    "end": 348,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 322,
                      "name": "combined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 324,
                      "end": 348,
                      "callee": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 339,
                        "name": "combineReducers",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 340,
                          "end": 347,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 342,
                              "end": 345,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 342,
                                "end": 345,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 342,
                                "end": 345,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 434,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 371,
            "name": "myReducer2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 374,
            "end": 434,
            "callee": {
              "type": "Identifier",
              "start": 374,
              "end": 389,
              "name": "combineReducers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 390,
                "end": 433,
                "properties": [
                  {
                    "type": "Property",
                    "start": 396,
                    "end": 430,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 404,
                      "name": "combined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 406,
                      "end": 430,
                      "callee": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 421,
                        "name": "combineReducers",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 422,
                          "end": 429,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 424,
                              "end": 427,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 424,
                                "end": 427,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 424,
                                "end": 427,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 459,
      "end": 537,
      "id": {
        "type": "Identifier",
        "start": 476,
        "end": 481,
        "name": "withH",
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
          "start": 488,
          "end": 532,
          "name": "handlerCreators",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 532,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 505,
              "end": 532,
              "typeName": {
                "type": "Identifier",
                "start": 505,
                "end": 526,
                "name": "HandleCreatorsFactory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 526,
                "end": 532,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 527,
                    "end": 528,
                    "typeName": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 528,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 530,
                    "end": 531,
                    "typeName": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 531,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
        "start": 481,
        "end": 487,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 482,
            "end": 483,
            "name": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 485,
            "end": 486,
            "name": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "name": "U",
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
        "start": 533,
        "end": 536,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 535,
          "end": 536,
          "typeName": {
            "type": "Identifier",
            "start": 535,
            "end": 536,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 539,
      "end": 567,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 549,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 552,
        "end": 567,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 554,
            "end": 565,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 554,
              "end": 557,
              "name": "out",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 557,
              "end": 565,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 559,
                "end": 565
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
      "start": 569,
      "end": 664,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 595,
        "name": "HandleCreatorsFactory",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 595,
        "end": 601,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 596,
            "end": 597,
            "name": {
              "type": "Identifier",
              "start": 596,
              "end": 597,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 599,
            "end": 600,
            "name": {
              "type": "Identifier",
              "start": 599,
              "end": 600,
              "name": "U",
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
        "type": "TSFunctionType",
        "start": 604,
        "end": 663,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 605,
            "end": 620,
            "name": "initialProps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 620,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 619,
                "end": 620,
                "typeName": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 622,
          "end": 663,
          "typeAnnotation": {
            "type": "TSMappedType",
            "start": 625,
            "end": 663,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 628,
              "end": 640,
              "name": {
                "type": "Identifier",
                "start": 628,
                "end": 629,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 633,
                "end": 640,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 639,
                  "end": 640,
                  "typeName": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "name": "U",
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
              "type": "TSFunctionType",
              "start": 643,
              "end": 661,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 644,
                  "end": 652,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 649,
                    "end": 652,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 651,
                      "end": 652,
                      "typeName": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 652,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 654,
                "end": 661,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 657,
                  "end": 661,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 657,
                    "end": 658,
                    "typeName": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 658,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 659,
                    "end": 660,
                    "typeName": {
                      "type": "Identifier",
                      "start": 659,
                      "end": 660,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 633,
              "end": 640,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 639,
                "end": 640,
                "typeName": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 640,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 666,
      "end": 797,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 796,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 681,
            "name": "enhancer4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 684,
            "end": 796,
            "callee": {
              "type": "Identifier",
              "start": 684,
              "end": 689,
              "name": "withH",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 690,
                "end": 795,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 691,
                    "end": 703,
                    "name": "props",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 696,
                      "end": 703,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 698,
                        "end": 703,
                        "typeName": {
                          "type": "Identifier",
                          "start": 698,
                          "end": 703,
                          "name": "Props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ObjectExpression",
                  "start": 709,
                  "end": 794,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 715,
                      "end": 750,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 715,
                        "end": 723,
                        "name": "onChange",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 725,
                        "end": 750,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 726,
                            "end": 731,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "ArrowFunctionExpression",
                          "start": 736,
                          "end": 750,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 737,
                              "end": 743,
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 738,
                                "end": 743,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 740,
                                  "end": 743
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 748,
                            "end": 750,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 756,
                      "end": 791,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 756,
                        "end": 764,
                        "name": "onSubmit",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 766,
                        "end": 791,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 767,
                            "end": 772,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "ArrowFunctionExpression",
                          "start": 777,
                          "end": 791,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 778,
                              "end": 784,
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 779,
                                "end": 784,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 781,
                                  "end": 784
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 789,
                            "end": 791,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 799,
      "end": 824,
      "expression": {
        "type": "CallExpression",
        "start": 799,
        "end": 823,
        "callee": {
          "type": "MemberExpression",
          "start": 799,
          "end": 817,
          "object": {
            "type": "Identifier",
            "start": 799,
            "end": 808,
            "name": "enhancer4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 809,
            "end": 817,
            "name": "onChange",
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
            "start": 818,
            "end": 822,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
