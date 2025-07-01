__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 18,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 32
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
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 32,
        "end": 35
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 36,
        "end": 39
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 39
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass1",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 84
      },
      "typeParameters": null,
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 97
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 99
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 98,
                    "end": 99
                  }
                ],
                "start": 97,
                "end": 100
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 104,
                  "end": 108
                },
                "start": 102,
                "end": 108
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 109,
                "end": 112
              },
              "expression": false,
              "start": 97,
              "end": 112
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 91,
            "end": 112
          }
        ],
        "start": 85,
        "end": 114
      },
      "abstract": false,
      "declare": false,
      "start": 68,
      "end": 114
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 122
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testClass1",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 139
            },
            "typeArguments": null,
            "arguments": [],
            "start": 125,
            "end": 141
          },
          "definite": false,
          "start": 119,
          "end": 141
        }
      ],
      "declare": false,
      "start": 115,
      "end": 142
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
            "name": "tc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 143,
          "end": 153
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 157
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "typeArguments": null,
                      "start": 159,
                      "end": 160
                    },
                    "start": 157,
                    "end": 160
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 156,
                  "end": 160
                }
              ],
              "start": 154,
              "end": 162
            }
          ],
          "start": 153,
          "end": 163
        },
        "arguments": [],
        "optional": false,
        "start": 143,
        "end": 165
      },
      "directive": null,
      "start": 143,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 252
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
              "start": 253,
              "end": 254
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 254
          }
        ],
        "start": 252,
        "end": 255
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 256,
        "end": 259
      },
      "abstract": false,
      "declare": false,
      "start": 236,
      "end": 259
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tc2",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 267
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testClass2",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 284
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 288
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 290,
                            "end": 291
                          },
                          "typeArguments": null,
                          "start": 290,
                          "end": 291
                        },
                        "start": 288,
                        "end": 291
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 287,
                      "end": 291
                    }
                  ],
                  "start": 285,
                  "end": 293
                }
              ],
              "start": 284,
              "end": 294
            },
            "arguments": [],
            "start": 270,
            "end": 296
          },
          "definite": false,
          "start": 264,
          "end": 296
        }
      ],
      "declare": false,
      "start": 260,
      "end": 297
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass3",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 386
      },
      "typeParameters": null,
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
              "name": "testMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 404
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 408,
                    "end": 411
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 414,
                              "end": 415
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 417,
                                  "end": 418
                                },
                                "typeArguments": null,
                                "start": 417,
                                "end": 418
                              },
                              "start": 415,
                              "end": 418
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 414,
                            "end": 418
                          }
                        ],
                        "start": 412,
                        "end": 420
                      }
                    ],
                    "start": 411,
                    "end": 421
                  },
                  "start": 408,
                  "end": 421
                },
                "start": 406,
                "end": 421
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 431,
                      "end": 435
                    },
                    "start": 424,
                    "end": 436
                  }
                ],
                "start": 422,
                "end": 438
              },
              "expression": false,
              "start": 404,
              "end": 438
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 393,
            "end": 438
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 495
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 502
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 505,
                              "end": 506
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 508,
                                  "end": 509
                                },
                                "typeArguments": null,
                                "start": 508,
                                "end": 509
                              },
                              "start": 506,
                              "end": 509
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 505,
                            "end": 509
                          }
                        ],
                        "start": 503,
                        "end": 511
                      }
                    ],
                    "start": 502,
                    "end": 512
                  },
                  "start": 499,
                  "end": 512
                },
                "start": 497,
                "end": 512
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 522,
                      "end": 526
                    },
                    "start": 515,
                    "end": 526
                  }
                ],
                "start": 513,
                "end": 528
              },
              "expression": false,
              "start": 495,
              "end": 528
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 477,
            "end": 528
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 572
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 583
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 586,
                                  "end": 587
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 589,
                                      "end": 590
                                    },
                                    "typeArguments": null,
                                    "start": 589,
                                    "end": 590
                                  },
                                  "start": 587,
                                  "end": 590
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 586,
                                "end": 590
                              }
                            ],
                            "start": 584,
                            "end": 592
                          }
                        ],
                        "start": 583,
                        "end": 593
                      },
                      "start": 580,
                      "end": 593
                    },
                    "start": 578,
                    "end": 593
                  },
                  "start": 573,
                  "end": 593
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 595,
                "end": 598
              },
              "expression": false,
              "start": 572,
              "end": 598
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 567,
            "end": 598
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 645
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 650
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 653,
                            "end": 654
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 656,
                                "end": 657
                              },
                              "typeArguments": null,
                              "start": 656,
                              "end": 657
                            },
                            "start": 654,
                            "end": 657
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 653,
                          "end": 657
                        }
                      ],
                      "start": 651,
                      "end": 659
                    }
                  ],
                  "start": 650,
                  "end": 660
                },
                "start": 647,
                "end": 660
              },
              "start": 645,
              "end": 660
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 637,
            "end": 661
          }
        ],
        "start": 387,
        "end": 697
      },
      "abstract": false,
      "declare": false,
      "start": 370,
      "end": 697
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction1",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 760
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 767
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 770,
                      "end": 771
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 773,
                          "end": 774
                        },
                        "typeArguments": null,
                        "start": 773,
                        "end": 774
                      },
                      "start": 771,
                      "end": 774
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 770,
                    "end": 774
                  }
                ],
                "start": 768,
                "end": 776
              }
            ],
            "start": 767,
            "end": 777
          },
          "start": 764,
          "end": 777
        },
        "start": 762,
        "end": 777
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 787,
              "end": 791
            },
            "start": 780,
            "end": 792
          }
        ],
        "start": 778,
        "end": 794
      },
      "expression": false,
      "start": 738,
      "end": 794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 861,
        "end": 874
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 881
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 884,
                          "end": 885
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 887,
                              "end": 888
                            },
                            "typeArguments": null,
                            "start": 887,
                            "end": 888
                          },
                          "start": 885,
                          "end": 888
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 884,
                        "end": 888
                      }
                    ],
                    "start": 882,
                    "end": 890
                  }
                ],
                "start": 881,
                "end": 891
              },
              "start": 878,
              "end": 891
            },
            "start": 876,
            "end": 891
          },
          "start": 875,
          "end": 891
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 893,
        "end": 896
      },
      "expression": false,
      "start": 852,
      "end": 896
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 965,
                  "end": 968
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 971,
                            "end": 972
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 974,
                                "end": 975
                              },
                              "typeArguments": null,
                              "start": 974,
                              "end": 975
                            },
                            "start": 972,
                            "end": 975
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 971,
                          "end": 975
                        }
                      ],
                      "start": 969,
                      "end": 977
                    }
                  ],
                  "start": 968,
                  "end": 978
                },
                "start": 965,
                "end": 978
              },
              "start": 963,
              "end": 978
            },
            "start": 962,
            "end": 978
          },
          "init": null,
          "definite": false,
          "start": 962,
          "end": 978
        }
      ],
      "declare": false,
      "start": 958,
      "end": 979
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1050
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
              "start": 1051,
              "end": 1052
            },
            "constraint": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1063,
                    "end": 1064
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1066,
                        "end": 1067
                      },
                      "typeArguments": null,
                      "start": 1066,
                      "end": 1067
                    },
                    "start": 1064,
                    "end": 1067
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1063,
                  "end": 1067
                }
              ],
              "start": 1061,
              "end": 1069
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1051,
            "end": 1069
          }
        ],
        "start": 1050,
        "end": 1070
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1071,
        "end": 1074
      },
      "abstract": false,
      "declare": false,
      "start": 1034,
      "end": 1074
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1120,
        "end": 1130
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
              "start": 1131,
              "end": 1132
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1144
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1147,
                          "end": 1148
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1150,
                              "end": 1151
                            },
                            "typeArguments": null,
                            "start": 1150,
                            "end": 1151
                          },
                          "start": 1148,
                          "end": 1151
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1147,
                        "end": 1151
                      }
                    ],
                    "start": 1145,
                    "end": 1153
                  }
                ],
                "start": 1144,
                "end": 1154
              },
              "start": 1141,
              "end": 1154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1131,
            "end": 1154
          }
        ],
        "start": 1130,
        "end": 1155
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1156,
        "end": 1159
      },
      "declare": false,
      "start": 1110,
      "end": 1159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1201,
        "end": 1211
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
              "start": 1212,
              "end": 1213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1212,
            "end": 1213
          }
        ],
        "start": 1211,
        "end": 1214
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1227
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
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1228,
                      "end": 1229
                    },
                    "constraint": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1240,
                            "end": 1241
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1243,
                                "end": 1244
                              },
                              "typeArguments": null,
                              "start": 1243,
                              "end": 1244
                            },
                            "start": 1241,
                            "end": 1244
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1240,
                          "end": 1244
                        }
                      ],
                      "start": 1238,
                      "end": 1246
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1228,
                    "end": 1246
                  }
                ],
                "start": 1227,
                "end": 1247
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1251,
                  "end": 1255
                },
                "start": 1249,
                "end": 1255
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1256,
                "end": 1259
              },
              "expression": false,
              "start": 1227,
              "end": 1259
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1221,
            "end": 1259
          }
        ],
        "start": 1215,
        "end": 1295
      },
      "abstract": false,
      "declare": false,
      "start": 1195,
      "end": 1295
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testInterface1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1307,
        "end": 1321
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1333,
                    "end": 1334
                  },
                  "constraint": {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1345,
                          "end": 1346
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1348,
                              "end": 1349
                            },
                            "typeArguments": null,
                            "start": 1348,
                            "end": 1349
                          },
                          "start": 1346,
                          "end": 1349
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1345,
                        "end": 1349
                      }
                    ],
                    "start": 1343,
                    "end": 1351
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1333,
                  "end": 1351
                }
              ],
              "start": 1332,
              "end": 1352
            },
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
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1356,
                      "end": 1357
                    },
                    "typeArguments": null,
                    "start": 1356,
                    "end": 1357
                  },
                  "start": 1354,
                  "end": 1357
                },
                "start": 1353,
                "end": 1357
              }
            ],
            "returnType": null,
            "start": 1328,
            "end": 1359
          }
        ],
        "start": 1322,
        "end": 1395
      },
      "declare": false,
      "start": 1297,
      "end": 1395
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1435
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1447
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1450,
                  "end": 1451
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1454
                    },
                    "typeArguments": null,
                    "start": 1453,
                    "end": 1454
                  },
                  "start": 1451,
                  "end": 1454
                },
                "accessibility": null,
                "static": false,
                "start": 1450,
                "end": 1454
              }
            ],
            "start": 1448,
            "end": 1456
          }
        ],
        "start": 1447,
        "end": 1457
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1458,
        "end": 1461
      },
      "abstract": false,
      "declare": false,
      "start": 1419,
      "end": 1461
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testClass8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1528,
        "end": 1538
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1550,
            "end": 1554
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1557,
                      "end": 1558
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1560,
                          "end": 1561
                        },
                        "typeArguments": null,
                        "start": 1560,
                        "end": 1561
                      },
                      "start": 1558,
                      "end": 1561
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1557,
                    "end": 1561
                  }
                ],
                "start": 1555,
                "end": 1563
              }
            ],
            "start": 1554,
            "end": 1564
          },
          "start": 1550,
          "end": 1564
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1565,
        "end": 1568
      },
      "abstract": false,
      "declare": false,
      "start": 1522,
      "end": 1568
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testInterface2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1632,
        "end": 1646
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1661,
                      "end": 1664
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1667,
                                "end": 1668
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1670,
                                    "end": 1671
                                  },
                                  "typeArguments": null,
                                  "start": 1670,
                                  "end": 1671
                                },
                                "start": 1668,
                                "end": 1671
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1667,
                              "end": 1671
                            }
                          ],
                          "start": 1665,
                          "end": 1673
                        }
                      ],
                      "start": 1664,
                      "end": 1674
                    },
                    "start": 1661,
                    "end": 1674
                  },
                  "start": 1659,
                  "end": 1674
                },
                "start": 1658,
                "end": 1674
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1677,
                  "end": 1680
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1683,
                            "end": 1684
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1686,
                                "end": 1687
                              },
                              "typeArguments": null,
                              "start": 1686,
                              "end": 1687
                            },
                            "start": 1684,
                            "end": 1687
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1683,
                          "end": 1687
                        }
                      ],
                      "start": 1681,
                      "end": 1689
                    }
                  ],
                  "start": 1680,
                  "end": 1690
                },
                "start": 1677,
                "end": 1690
              },
              "start": 1675,
              "end": 1690
            },
            "start": 1653,
            "end": 1691
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1737,
                    "end": 1743
                  },
                  "start": 1735,
                  "end": 1743
                },
                "start": 1734,
                "end": 1743
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1746,
                  "end": 1749
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1752,
                            "end": 1753
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1755,
                                "end": 1756
                              },
                              "typeArguments": null,
                              "start": 1755,
                              "end": 1756
                            },
                            "start": 1753,
                            "end": 1756
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1752,
                          "end": 1756
                        }
                      ],
                      "start": 1750,
                      "end": 1758
                    }
                  ],
                  "start": 1749,
                  "end": 1759
                },
                "start": 1746,
                "end": 1759
              },
              "start": 1744,
              "end": 1759
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1733,
            "end": 1760
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1799,
              "end": 1805
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1809,
                      "end": 1812
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1815,
                                "end": 1816
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1818,
                                    "end": 1819
                                  },
                                  "typeArguments": null,
                                  "start": 1818,
                                  "end": 1819
                                },
                                "start": 1816,
                                "end": 1819
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1815,
                              "end": 1819
                            }
                          ],
                          "start": 1813,
                          "end": 1821
                        }
                      ],
                      "start": 1812,
                      "end": 1822
                    },
                    "start": 1809,
                    "end": 1822
                  },
                  "start": 1807,
                  "end": 1822
                },
                "start": 1806,
                "end": 1822
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1825,
                  "end": 1828
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1831,
                            "end": 1832
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1834,
                                "end": 1835
                              },
                              "typeArguments": null,
                              "start": 1834,
                              "end": 1835
                            },
                            "start": 1832,
                            "end": 1835
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1831,
                          "end": 1835
                        }
                      ],
                      "start": 1829,
                      "end": 1837
                    }
                  ],
                  "start": 1828,
                  "end": 1838
                },
                "start": 1825,
                "end": 1838
              },
              "start": 1823,
              "end": 1838
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1799,
            "end": 1839
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 1881,
              "end": 1889
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1891,
                  "end": 1894
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1897,
                            "end": 1898
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1900,
                                "end": 1901
                              },
                              "typeArguments": null,
                              "start": 1900,
                              "end": 1901
                            },
                            "start": 1898,
                            "end": 1901
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1897,
                          "end": 1901
                        }
                      ],
                      "start": 1895,
                      "end": 1903
                    }
                  ],
                  "start": 1894,
                  "end": 1904
                },
                "start": 1891,
                "end": 1904
              },
              "start": 1889,
              "end": 1904
            },
            "accessibility": null,
            "static": false,
            "start": 1881,
            "end": 1905
          }
        ],
        "start": 1647,
        "end": 1941
      },
      "declare": false,
      "start": 1622,
      "end": 1941
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1942
}
```
