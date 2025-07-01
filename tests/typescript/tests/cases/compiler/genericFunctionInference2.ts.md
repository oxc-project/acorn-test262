__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reducer",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 34
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 36
          }
        ],
        "start": 34,
        "end": 37
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "typeArguments": null,
                "start": 48,
                "end": 49
              },
              "start": 46,
              "end": 49
            },
            "start": 41,
            "end": 49
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "typeArguments": null,
            "start": 54,
            "end": 55
          },
          "start": 51,
          "end": 55
        },
        "start": 40,
        "end": 55
      },
      "declare": false,
      "start": 22,
      "end": 56
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "combineReducers",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 89
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 91
          }
        ],
        "start": 89,
        "end": 92
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "reducers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 118
                  },
                  "typeArguments": null,
                  "start": 117,
                  "end": 118
                },
                "start": 111,
                "end": 118
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 128
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 129,
                        "end": 130
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 132
                        },
                        "typeArguments": null,
                        "start": 131,
                        "end": 132
                      },
                      "start": 129,
                      "end": 133
                    }
                  ],
                  "start": 128,
                  "end": 134
                },
                "start": 121,
                "end": 134
              },
              "optional": false,
              "readonly": null,
              "start": 103,
              "end": 136
            },
            "start": 101,
            "end": 136
          },
          "start": 93,
          "end": 136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reducer",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 146
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "typeArguments": null,
                "start": 147,
                "end": 148
              }
            ],
            "start": 146,
            "end": 149
          },
          "start": 139,
          "end": 149
        },
        "start": 137,
        "end": 149
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyState",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 164
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "combined",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 186,
                        "end": 192
                      },
                      "start": 184,
                      "end": 192
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 181,
                    "end": 192
                  }
                ],
                "start": 179,
                "end": 194
              },
              "start": 177,
              "end": 194
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 194
          }
        ],
        "start": 167,
        "end": 196
      },
      "declare": false,
      "start": 152,
      "end": 197
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 224
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 232
                          },
                          "typeArguments": null,
                          "start": 225,
                          "end": 232
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "combined",
                            "raw": "'combined'",
                            "start": 233,
                            "end": 243
                          },
                          "start": 233,
                          "end": 243
                        },
                        "start": 225,
                        "end": 244
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "'foo'",
                          "start": 245,
                          "end": 250
                        },
                        "start": 245,
                        "end": 250
                      },
                      "start": 225,
                      "end": 251
                    }
                  ],
                  "start": 224,
                  "end": 252
                },
                "start": 217,
                "end": 252
              },
              "start": 215,
              "end": 252
            },
            "start": 212,
            "end": 252
          },
          "init": null,
          "definite": false,
          "start": 212,
          "end": 252
        }
      ],
      "declare": true,
      "start": 198,
      "end": 253
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myReducer1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 280
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 281,
                        "end": 288
                      },
                      "typeArguments": null,
                      "start": 281,
                      "end": 288
                    }
                  ],
                  "start": 280,
                  "end": 289
                },
                "start": 273,
                "end": 289
              },
              "start": 271,
              "end": 289
            },
            "start": 261,
            "end": 289
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineReducers",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 307
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "combined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 322
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "combineReducers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 339
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 342,
                                "end": 345
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 342,
                                "end": 345
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 342,
                              "end": 345
                            }
                          ],
                          "start": 340,
                          "end": 347
                        }
                      ],
                      "optional": false,
                      "start": 324,
                      "end": 348
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 314,
                    "end": 348
                  }
                ],
                "start": 308,
                "end": 351
              }
            ],
            "optional": false,
            "start": 292,
            "end": 352
          },
          "definite": false,
          "start": 261,
          "end": 352
        }
      ],
      "declare": false,
      "start": 255,
      "end": 353
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myReducer2",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 371
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "combineReducers",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 389
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "combined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 404
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "combineReducers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 421
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 424,
                                "end": 427
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 424,
                                "end": 427
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 424,
                              "end": 427
                            }
                          ],
                          "start": 422,
                          "end": 429
                        }
                      ],
                      "optional": false,
                      "start": 406,
                      "end": 430
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 396,
                    "end": 430
                  }
                ],
                "start": 390,
                "end": 433
              }
            ],
            "optional": false,
            "start": 374,
            "end": 434
          },
          "definite": false,
          "start": 361,
          "end": 434
        }
      ],
      "declare": false,
      "start": 355,
      "end": 435
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withH",
        "optional": false,
        "typeAnnotation": null,
        "start": 476,
        "end": 481
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 483
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 482,
            "end": 483
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 485,
            "end": 486
          }
        ],
        "start": 481,
        "end": 487
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handlerCreators",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandleCreatorsFactory",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 526
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 527,
                      "end": 528
                    },
                    "typeArguments": null,
                    "start": 527,
                    "end": 528
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 530,
                      "end": 531
                    },
                    "typeArguments": null,
                    "start": 530,
                    "end": 531
                  }
                ],
                "start": 526,
                "end": 532
              },
              "start": 505,
              "end": 532
            },
            "start": 503,
            "end": 532
          },
          "start": 488,
          "end": 532
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 535,
            "end": 536
          },
          "typeArguments": null,
          "start": 535,
          "end": 536
        },
        "start": 533,
        "end": 536
      },
      "body": null,
      "expression": false,
      "start": 459,
      "end": 537
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 549
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 557
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 559,
                "end": 565
              },
              "start": 557,
              "end": 565
            },
            "accessibility": null,
            "static": false,
            "start": 554,
            "end": 565
          }
        ],
        "start": 552,
        "end": 567
      },
      "declare": false,
      "start": 539,
      "end": 567
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandleCreatorsFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 595
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 597
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 596,
            "end": 597
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 600
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 599,
            "end": 600
          }
        ],
        "start": 595,
        "end": 601
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "initialProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "typeArguments": null,
                "start": 619,
                "end": 620
              },
              "start": 617,
              "end": 620
            },
            "start": 605,
            "end": 620
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 629
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 640
                },
                "typeArguments": null,
                "start": 639,
                "end": 640
              },
              "start": 633,
              "end": 640
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 652
                      },
                      "typeArguments": null,
                      "start": 651,
                      "end": 652
                    },
                    "start": 649,
                    "end": 652
                  },
                  "start": 644,
                  "end": 652
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 658
                    },
                    "typeArguments": null,
                    "start": 657,
                    "end": 658
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 660
                    },
                    "typeArguments": null,
                    "start": 659,
                    "end": 660
                  },
                  "start": 657,
                  "end": 661
                },
                "start": 654,
                "end": 661
              },
              "start": 643,
              "end": 661
            },
            "optional": false,
            "readonly": null,
            "start": 625,
            "end": 663
          },
          "start": 622,
          "end": 663
        },
        "start": 604,
        "end": 663
      },
      "declare": false,
      "start": 569,
      "end": 664
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "enhancer4",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withH",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 689
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 698,
                          "end": 703
                        },
                        "typeArguments": null,
                        "start": 698,
                        "end": 703
                      },
                      "start": 696,
                      "end": 703
                    },
                    "start": 691,
                    "end": 703
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onChange",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 715,
                        "end": 723
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 726,
                            "end": 731
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 740,
                                  "end": 743
                                },
                                "start": 738,
                                "end": 743
                              },
                              "start": 737,
                              "end": 743
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 748,
                            "end": 750
                          },
                          "id": null,
                          "generator": false,
                          "start": 736,
                          "end": 750
                        },
                        "id": null,
                        "generator": false,
                        "start": 725,
                        "end": 750
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 715,
                      "end": 750
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onSubmit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 756,
                        "end": 764
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 767,
                            "end": 772
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 781,
                                  "end": 784
                                },
                                "start": 779,
                                "end": 784
                              },
                              "start": 778,
                              "end": 784
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 789,
                            "end": 791
                          },
                          "id": null,
                          "generator": false,
                          "start": 777,
                          "end": 791
                        },
                        "id": null,
                        "generator": false,
                        "start": 766,
                        "end": 791
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 756,
                      "end": 791
                    }
                  ],
                  "start": 709,
                  "end": 794
                },
                "id": null,
                "generator": false,
                "start": 690,
                "end": 795
              }
            ],
            "optional": false,
            "start": 684,
            "end": 796
          },
          "definite": false,
          "start": 672,
          "end": 796
        }
      ],
      "declare": false,
      "start": 666,
      "end": 797
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "enhancer4",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 808
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "onChange",
            "optional": false,
            "typeAnnotation": null,
            "start": 809,
            "end": 817
          },
          "optional": false,
          "computed": false,
          "start": 799,
          "end": 817
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 818,
            "end": 822
          }
        ],
        "optional": false,
        "start": 799,
        "end": 823
      },
      "directive": null,
      "start": 799,
      "end": 824
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 824
}
```
