__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 793,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "IContext",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 40,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 38,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 35,
              "name": "someMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 667,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 49,
        "name": "c1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 667,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 153,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 86,
              "name": "_forEachBindingContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 86,
              "end": 153,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 111,
                  "name": "bindingContext",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 111,
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 111,
                        "name": "IContext",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 151,
                  "name": "fn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 117,
                      "end": 151,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 118,
                          "end": 142,
                          "name": "bindingContext",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 132,
                            "end": 142,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 134,
                              "end": 142,
                              "typeName": {
                                "type": "Identifier",
                                "start": 134,
                                "end": 142,
                                "name": "IContext",
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
                        "start": 144,
                        "end": 151,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 147,
                          "end": 151
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 267,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 188,
              "name": "_forEachBindingContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 188,
              "end": 267,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 225,
                  "name": "bindingContextArray",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 210,
                      "end": 225,
                      "typeName": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 215,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 215,
                        "end": 225,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 216,
                            "end": 224,
                            "typeName": {
                              "type": "Identifier",
                              "start": 216,
                              "end": 224,
                              "name": "IContext",
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
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 265,
                  "name": "fn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 229,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 231,
                      "end": 265,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 232,
                          "end": 256,
                          "name": "bindingContext",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 246,
                            "end": 256,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 248,
                              "end": 256,
                              "typeName": {
                                "type": "Identifier",
                                "start": 248,
                                "end": 256,
                                "name": "IContext",
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
                        "start": 258,
                        "end": 265,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 261,
                          "end": 265
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 272,
            "end": 390,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 302,
              "name": "_forEachBindingContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 302,
              "end": 390,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 303,
                  "end": 310,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 312,
                  "end": 350,
                  "name": "fn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 314,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 316,
                      "end": 350,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 317,
                          "end": 341,
                          "name": "bindingContext",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 331,
                            "end": 341,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 333,
                              "end": 341,
                              "typeName": {
                                "type": "Identifier",
                                "start": 333,
                                "end": 341,
                                "name": "IContext",
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
                        "start": 343,
                        "end": 350,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 346,
                          "end": 350
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 358,
                "end": 390,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 351,
                "end": 357,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 353,
                  "end": 357
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 396,
            "end": 458,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 404,
              "end": 431,
              "name": "overloadWithArityDifference",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 431,
              "end": 458,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 432,
                  "end": 456,
                  "name": "bindingContext",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 446,
                    "end": 456,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 448,
                      "end": 456,
                      "typeName": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 456,
                        "name": "IContext",
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 463,
            "end": 577,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 498,
              "name": "overloadWithArityDifference",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 498,
              "end": 577,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 499,
                  "end": 535,
                  "name": "bindingContextArray",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 518,
                    "end": 535,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 520,
                      "end": 535,
                      "typeName": {
                        "type": "Identifier",
                        "start": 520,
                        "end": 525,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 525,
                        "end": 535,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 526,
                            "end": 534,
                            "typeName": {
                              "type": "Identifier",
                              "start": 526,
                              "end": 534,
                              "name": "IContext",
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
                {
                  "type": "Identifier",
                  "start": 537,
                  "end": 575,
                  "name": "fn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 539,
                    "end": 575,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 541,
                      "end": 575,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 542,
                          "end": 566,
                          "name": "bindingContext",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 556,
                            "end": 566,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 558,
                              "end": 566,
                              "typeName": {
                                "type": "Identifier",
                                "start": 558,
                                "end": 566,
                                "name": "IContext",
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
                        "start": 568,
                        "end": 575,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 571,
                          "end": 575
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 582,
            "end": 665,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 590,
              "end": 617,
              "name": "overloadWithArityDifference",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 617,
              "end": 665,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 618,
                  "end": 625,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 633,
                "end": 665,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 626,
                "end": 632,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 628,
                  "end": 632
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 668,
      "end": 793,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 684,
        "name": "c2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 685,
        "end": 793,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 691,
            "end": 722,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 708,
              "name": "overload1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 708,
              "end": 722,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 709,
                  "end": 716,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 718,
                  "end": 720,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 728,
            "end": 755,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 736,
              "end": 745,
              "name": "overload2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 745,
              "end": 755,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 746,
                  "end": 753,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 760,
            "end": 791,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 768,
              "end": 777,
              "name": "overload2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                  "end": 785,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 787,
                  "end": 789,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
