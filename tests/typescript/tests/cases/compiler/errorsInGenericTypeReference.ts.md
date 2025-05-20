__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1942,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 21,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 21,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 39,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 39,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 68,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 114,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 112,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 102,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 104,
                  "end": 108
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 97,
                "end": 100,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 98,
                    "end": 99,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 84,
        "decorators": [],
        "name": "testClass1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 122,
            "decorators": [],
            "name": "tc1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 125,
            "end": 141,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 139,
              "decorators": [],
              "name": "testClass1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 143,
        "end": 165,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 143,
          "end": 153,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "tc1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 147,
            "end": 153,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 153,
          "end": 163,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 154,
              "end": 162,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 156,
                  "end": 160,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 157,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 159,
                      "end": 160,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 236,
      "end": 259,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 256,
        "end": 259,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 252,
        "decorators": [],
        "name": "testClass2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 252,
        "end": 255,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 254,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 296,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 267,
            "decorators": [],
            "name": "tc2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 270,
            "end": 296,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 274,
              "end": 284,
              "decorators": [],
              "name": "testClass2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 284,
              "end": 294,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 285,
                  "end": 293,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 287,
                      "end": 291,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 288,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 288,
                        "end": 291,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 290,
                          "end": 291,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 291,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 370,
      "end": 697,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 387,
        "end": 697,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 393,
            "end": 438,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 393,
              "end": 404,
              "decorators": [],
              "name": "testMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 404,
              "end": 438,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 422,
                "end": 438,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 424,
                    "end": 436,
                    "argument": {
                      "type": "Literal",
                      "start": 431,
                      "end": 435,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 406,
                "end": 421,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 408,
                  "end": 421,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 411,
                    "end": 421,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 412,
                        "end": 420,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 414,
                            "end": 418,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 414,
                              "end": 415,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 415,
                              "end": 418,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 417,
                                "end": 418,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 417,
                                  "end": 418,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 411,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 477,
            "end": 528,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 484,
              "end": 495,
              "decorators": [],
              "name": "testMethod2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 495,
              "end": 528,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 513,
                "end": 528,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 515,
                    "end": 526,
                    "argument": {
                      "type": "Literal",
                      "start": 522,
                      "end": 526,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 497,
                "end": 512,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 499,
                  "end": 512,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 502,
                    "end": 512,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 503,
                        "end": 511,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 505,
                            "end": 509,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 505,
                              "end": 506,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 506,
                              "end": 509,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 508,
                                "end": 509,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 508,
                                  "end": 509,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 502,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 567,
            "end": 598,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 572,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 572,
              "end": 598,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 595,
                "end": 598,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 573,
                  "end": 593,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 593,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 580,
                      "end": 593,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 583,
                        "end": 593,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 584,
                            "end": 592,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 586,
                                "end": 590,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 586,
                                  "end": 587,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 587,
                                  "end": 590,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 589,
                                    "end": 590,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 589,
                                      "end": 590,
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 583,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 637,
            "end": 661,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 637,
              "end": 645,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 645,
              "end": 660,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 647,
                "end": 660,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 650,
                  "end": 660,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 651,
                      "end": 659,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 653,
                          "end": 657,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 653,
                            "end": 654,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 654,
                            "end": 657,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 656,
                              "end": 657,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 656,
                                "end": 657,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 650,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 386,
        "decorators": [],
        "name": "testClass3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 738,
      "end": 794,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 778,
        "end": 794,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 780,
            "end": 792,
            "argument": {
              "type": "Literal",
              "start": 787,
              "end": 791,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 747,
        "end": 760,
        "decorators": [],
        "name": "testFunction1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 762,
        "end": 777,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 764,
          "end": 777,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 767,
            "end": 777,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 768,
                "end": 776,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 770,
                    "end": 774,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 770,
                      "end": 771,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 771,
                      "end": 774,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 773,
                        "end": 774,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 773,
                          "end": 774,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 764,
            "end": 767,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 852,
      "end": 896,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 893,
        "end": 896,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 861,
        "end": 874,
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 875,
          "end": 891,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 876,
            "end": 891,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 878,
              "end": 891,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 881,
                "end": 891,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 882,
                    "end": 890,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 884,
                        "end": 888,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 884,
                          "end": 885,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 885,
                          "end": 888,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 887,
                            "end": 888,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 887,
                              "end": 888,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 878,
                "end": 881,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 958,
      "end": 979,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 962,
          "end": 978,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 962,
            "end": 978,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 963,
              "end": 978,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 965,
                "end": 978,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 968,
                  "end": 978,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 969,
                      "end": 977,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 971,
                          "end": 975,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 971,
                            "end": 972,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 972,
                            "end": 975,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 974,
                              "end": 975,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 974,
                                "end": 975,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 965,
                  "end": 968,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1034,
      "end": 1074,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1071,
        "end": 1074,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1040,
        "end": 1050,
        "decorators": [],
        "name": "testClass4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1050,
        "end": 1070,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1051,
            "end": 1069,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1061,
              "end": 1069,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1063,
                  "end": 1067,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1063,
                    "end": 1064,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1064,
                    "end": 1067,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1066,
                      "end": 1067,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1067,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1051,
              "end": 1052,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1110,
      "end": 1159,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1156,
        "end": 1159,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1120,
        "end": 1130,
        "decorators": [],
        "name": "testClass5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1130,
        "end": 1155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1131,
            "end": 1154,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1141,
              "end": 1154,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1144,
                "end": 1154,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1145,
                    "end": 1153,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1147,
                        "end": 1151,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1147,
                          "end": 1148,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1148,
                          "end": 1151,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1150,
                            "end": 1151,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1150,
                              "end": 1151,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1141,
                "end": 1144,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1131,
              "end": 1132,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1195,
      "end": 1295,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1215,
        "end": 1295,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1221,
            "end": 1259,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1221,
              "end": 1227,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1227,
              "end": 1259,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1256,
                "end": 1259,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1249,
                "end": 1255,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1251,
                  "end": 1255
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1227,
                "end": 1247,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1228,
                    "end": 1246,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "start": 1238,
                      "end": 1246,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1240,
                          "end": 1244,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1240,
                            "end": 1241,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1241,
                            "end": 1244,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1243,
                              "end": 1244,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1243,
                                "end": 1244,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1228,
                      "end": 1229,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1201,
        "end": 1211,
        "decorators": [],
        "name": "testClass6",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1211,
        "end": 1214,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1212,
            "end": 1213,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1212,
              "end": 1213,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1297,
      "end": 1395,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1322,
        "end": 1395,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1328,
            "end": 1359,
            "params": [
              {
                "type": "Identifier",
                "start": 1353,
                "end": 1357,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1354,
                  "end": 1357,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1356,
                    "end": 1357,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1356,
                      "end": 1357,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1332,
              "end": 1352,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1333,
                  "end": 1351,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 1343,
                    "end": 1351,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1345,
                        "end": 1349,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1345,
                          "end": 1346,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1346,
                          "end": 1349,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1348,
                            "end": 1349,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1348,
                              "end": 1349,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1333,
                    "end": 1334,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1307,
        "end": 1321,
        "decorators": [],
        "name": "testInterface1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1419,
      "end": 1461,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1458,
        "end": 1461,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1425,
        "end": 1435,
        "decorators": [],
        "name": "testClass7",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1444,
        "end": 1447,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1447,
        "end": 1457,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 1448,
            "end": 1456,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1450,
                "end": 1454,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1451,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1451,
                  "end": 1454,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1453,
                    "end": 1454,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1453,
                      "end": 1454,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1522,
      "end": 1568,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1565,
        "end": 1568,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1528,
        "end": 1538,
        "decorators": [],
        "name": "testClass8",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1550,
          "end": 1564,
          "expression": {
            "type": "Identifier",
            "start": 1550,
            "end": 1554,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1554,
            "end": 1564,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 1555,
                "end": 1563,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1557,
                    "end": 1561,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1557,
                      "end": 1558,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1558,
                      "end": 1561,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1560,
                        "end": 1561,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1560,
                          "end": 1561,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1622,
      "end": 1941,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1647,
        "end": 1941,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1653,
            "end": 1691,
            "params": [
              {
                "type": "Identifier",
                "start": 1658,
                "end": 1674,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1659,
                  "end": 1674,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1661,
                    "end": 1674,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1664,
                      "end": 1674,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 1665,
                          "end": 1673,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1667,
                              "end": 1671,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1667,
                                "end": 1668,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1668,
                                "end": 1671,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1670,
                                  "end": 1671,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1670,
                                    "end": 1671,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1661,
                      "end": 1664,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1675,
              "end": 1690,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1677,
                "end": 1690,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1680,
                  "end": 1690,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1681,
                      "end": 1689,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1683,
                          "end": 1687,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1683,
                            "end": 1684,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1684,
                            "end": 1687,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1686,
                              "end": 1687,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1686,
                                "end": 1687,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1677,
                  "end": 1680,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1733,
            "end": 1760,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1734,
                "end": 1743,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1735,
                  "end": 1743,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1737,
                    "end": 1743
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1744,
              "end": 1759,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1746,
                "end": 1759,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1749,
                  "end": 1759,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1750,
                      "end": 1758,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1752,
                          "end": 1756,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1752,
                            "end": 1753,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1753,
                            "end": 1756,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1755,
                              "end": 1756,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1755,
                                "end": 1756,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1746,
                  "end": 1749,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1799,
            "end": 1839,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1799,
              "end": 1805,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1806,
                "end": 1822,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1807,
                  "end": 1822,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1809,
                    "end": 1822,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1812,
                      "end": 1822,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 1813,
                          "end": 1821,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1815,
                              "end": 1819,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1815,
                                "end": 1816,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1816,
                                "end": 1819,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1818,
                                  "end": 1819,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1818,
                                    "end": 1819,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1809,
                      "end": 1812,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1823,
              "end": 1838,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1825,
                "end": 1838,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1828,
                  "end": 1838,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1829,
                      "end": 1837,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1831,
                          "end": 1835,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1831,
                            "end": 1832,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1832,
                            "end": 1835,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1834,
                              "end": 1835,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1834,
                                "end": 1835,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1828,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 1881,
            "end": 1905,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1881,
              "end": 1889,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1889,
              "end": 1904,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1891,
                "end": 1904,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1894,
                  "end": 1904,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1895,
                      "end": 1903,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1897,
                          "end": 1901,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1897,
                            "end": 1898,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1898,
                            "end": 1901,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1900,
                              "end": 1901,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1900,
                                "end": 1901,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1891,
                  "end": 1894,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1632,
        "end": 1646,
        "decorators": [],
        "name": "testInterface2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
