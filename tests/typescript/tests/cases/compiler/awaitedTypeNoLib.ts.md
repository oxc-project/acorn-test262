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
        "name": "NotPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "typeArguments": null,
          "start": 21,
          "end": 22
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thenable",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 39
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnknownKeyword",
                "start": 40,
                "end": 47
              }
            ],
            "start": 39,
            "end": 48
          },
          "start": 31,
          "end": 48
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "typeArguments": null,
          "start": 53,
          "end": 54
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "typeArguments": null,
            "start": 59,
            "end": 60
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 80
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 81,
                  "end": 88
                }
              ],
              "start": 80,
              "end": 89
            },
            "start": 69,
            "end": 89
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 94,
            "end": 99
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "typeArguments": null,
            "start": 104,
            "end": 105
          },
          "start": 59,
          "end": 105
        },
        "start": 21,
        "end": 105
      },
      "declare": false,
      "start": 0,
      "end": 106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Receiver",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 121
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
              "start": 122,
              "end": 123
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 123
          }
        ],
        "start": 121,
        "end": 124
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NotPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 145
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
                        "start": 146,
                        "end": 147
                      },
                      "typeArguments": null,
                      "start": 146,
                      "end": 147
                    }
                  ],
                  "start": 145,
                  "end": 148
                },
                "start": 135,
                "end": 148
              },
              "start": 133,
              "end": 148
            },
            "start": 128,
            "end": 148
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 153,
            "end": 157
          },
          "start": 150,
          "end": 157
        },
        "start": 127,
        "end": 157
      },
      "declare": false,
      "start": 108,
      "end": 158
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thenable",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 174
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
              "start": 175,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 175,
            "end": 176
          }
        ],
        "start": 174,
        "end": 177
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 186
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 198
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
                              "start": 199,
                              "end": 200
                            },
                            "typeArguments": null,
                            "start": 199,
                            "end": 200
                          }
                        ],
                        "start": 198,
                        "end": 201
                      },
                      "start": 190,
                      "end": 201
                    },
                    "start": 188,
                    "end": 201
                  },
                  "start": 187,
                  "end": 201
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 203,
                "end": 205
              },
              "expression": false,
              "start": 186,
              "end": 205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 182,
            "end": 205
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleResolve",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 230
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 238
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 231,
                    "end": 238
                  }
                ],
                "start": 230,
                "end": 239
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NotPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 253,
                            "end": 263
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TResult",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 264,
                                  "end": 271
                                },
                                "typeArguments": null,
                                "start": 264,
                                "end": 271
                              }
                            ],
                            "start": 263,
                            "end": 272
                          },
                          "start": 253,
                          "end": 272
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 275,
                            "end": 283
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "NotPromise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 284,
                                  "end": 294
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "TResult",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 295,
                                        "end": 302
                                      },
                                      "typeArguments": null,
                                      "start": 295,
                                      "end": 302
                                    }
                                  ],
                                  "start": 294,
                                  "end": 303
                                },
                                "start": 284,
                                "end": 303
                              }
                            ],
                            "start": 283,
                            "end": 304
                          },
                          "start": 275,
                          "end": 304
                        }
                      ],
                      "start": 253,
                      "end": 304
                    },
                    "start": 251,
                    "end": 304
                  },
                  "start": 245,
                  "end": 304
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 319,
                        "end": 327
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 328,
                              "end": 335
                            },
                            "typeArguments": null,
                            "start": 328,
                            "end": 335
                          }
                        ],
                        "start": 327,
                        "end": 336
                      },
                      "start": 319,
                      "end": 336
                    },
                    "start": 317,
                    "end": 336
                  },
                  "start": 310,
                  "end": 336
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 358
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thenable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 370,
                        "end": 378
                      },
                      "start": 352,
                      "end": 378
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 518,
                                "end": 522
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolvePromise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 523,
                                "end": 537
                              },
                              "optional": false,
                              "computed": false,
                              "start": 518,
                              "end": 537
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 538,
                                "end": 544
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 546,
                                "end": 553
                              }
                            ],
                            "optional": false,
                            "start": 518,
                            "end": 554
                          },
                          "directive": null,
                          "start": 518,
                          "end": 555
                        }
                      ],
                      "start": 380,
                      "end": 561
                    },
                    "alternate": null,
                    "start": 348,
                    "end": 561
                  }
                ],
                "start": 342,
                "end": 565
              },
              "expression": false,
              "start": 230,
              "end": 565
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 209,
            "end": 565
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolvePromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 591
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 592,
                      "end": 599
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 592,
                    "end": 599
                  }
                ],
                "start": 591,
                "end": 600
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thenable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 622
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 623,
                              "end": 630
                            },
                            "typeArguments": null,
                            "start": 623,
                            "end": 630
                          }
                        ],
                        "start": 622,
                        "end": 631
                      },
                      "start": 614,
                      "end": 631
                    },
                    "start": 612,
                    "end": 631
                  },
                  "start": 606,
                  "end": 631
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 646,
                        "end": 654
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 655,
                              "end": 662
                            },
                            "typeArguments": null,
                            "start": 655,
                            "end": 662
                          }
                        ],
                        "start": 654,
                        "end": 663
                      },
                      "start": 646,
                      "end": 663
                    },
                    "start": 644,
                    "end": 663
                  },
                  "start": 637,
                  "end": 663
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 669,
                "end": 671
              },
              "expression": false,
              "start": 591,
              "end": 671
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 569,
            "end": 671
          }
        ],
        "start": 178,
        "end": 673
      },
      "abstract": false,
      "declare": false,
      "start": 160,
      "end": 673
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 673
}
```
