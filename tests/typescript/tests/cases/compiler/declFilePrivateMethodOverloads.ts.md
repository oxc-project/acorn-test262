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
        "name": "IContext",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 35
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 25,
            "end": 38
          }
        ],
        "start": 19,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 49
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
              "name": "_forEachBindingContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 86
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bindingContext",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 111
                      },
                      "typeArguments": null,
                      "start": 103,
                      "end": 111
                    },
                    "start": 101,
                    "end": 111
                  },
                  "start": 87,
                  "end": 111
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 134,
                                "end": 142
                              },
                              "typeArguments": null,
                              "start": 134,
                              "end": 142
                            },
                            "start": 132,
                            "end": 142
                          },
                          "start": 118,
                          "end": 142
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 147,
                          "end": 151
                        },
                        "start": 144,
                        "end": 151
                      },
                      "start": 117,
                      "end": 151
                    },
                    "start": 115,
                    "end": 151
                  },
                  "start": 113,
                  "end": 151
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 86,
              "end": 153
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 56,
            "end": 153
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 188
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bindingContextArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 210,
                        "end": 215
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 216,
                              "end": 224
                            },
                            "typeArguments": null,
                            "start": 216,
                            "end": 224
                          }
                        ],
                        "start": 215,
                        "end": 225
                      },
                      "start": 210,
                      "end": 225
                    },
                    "start": 208,
                    "end": 225
                  },
                  "start": 189,
                  "end": 225
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 248,
                                "end": 256
                              },
                              "typeArguments": null,
                              "start": 248,
                              "end": 256
                            },
                            "start": 246,
                            "end": 256
                          },
                          "start": 232,
                          "end": 256
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 261,
                          "end": 265
                        },
                        "start": 258,
                        "end": 265
                      },
                      "start": 231,
                      "end": 265
                    },
                    "start": 229,
                    "end": 265
                  },
                  "start": 227,
                  "end": 265
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 188,
              "end": 267
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 158,
            "end": 267
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 302
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
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 310
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 333,
                                "end": 341
                              },
                              "typeArguments": null,
                              "start": 333,
                              "end": 341
                            },
                            "start": 331,
                            "end": 341
                          },
                          "start": 317,
                          "end": 341
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 346,
                          "end": 350
                        },
                        "start": 343,
                        "end": 350
                      },
                      "start": 316,
                      "end": 350
                    },
                    "start": 314,
                    "end": 350
                  },
                  "start": 312,
                  "end": 350
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 353,
                  "end": 357
                },
                "start": 351,
                "end": 357
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 358,
                "end": 390
              },
              "expression": false,
              "start": 302,
              "end": 390
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 272,
            "end": 390
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 431
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bindingContext",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 456
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 456
                    },
                    "start": 446,
                    "end": 456
                  },
                  "start": 432,
                  "end": 456
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 431,
              "end": 458
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 396,
            "end": 458
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 498
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bindingContextArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 520,
                        "end": 525
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 526,
                              "end": 534
                            },
                            "typeArguments": null,
                            "start": 526,
                            "end": 534
                          }
                        ],
                        "start": 525,
                        "end": 535
                      },
                      "start": 520,
                      "end": 535
                    },
                    "start": 518,
                    "end": 535
                  },
                  "start": 499,
                  "end": 535
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 558,
                                "end": 566
                              },
                              "typeArguments": null,
                              "start": 558,
                              "end": 566
                            },
                            "start": 556,
                            "end": 566
                          },
                          "start": 542,
                          "end": 566
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 571,
                          "end": 575
                        },
                        "start": 568,
                        "end": 575
                      },
                      "start": 541,
                      "end": 575
                    },
                    "start": 539,
                    "end": 575
                  },
                  "start": 537,
                  "end": 575
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 498,
              "end": 577
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 463,
            "end": 577
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 617
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
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 625
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 628,
                  "end": 632
                },
                "start": 626,
                "end": 632
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 633,
                "end": 665
              },
              "expression": false,
              "start": 617,
              "end": 665
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 582,
            "end": 665
          }
        ],
        "start": 50,
        "end": 667
      },
      "abstract": false,
      "declare": false,
      "start": 41,
      "end": 667
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 684
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
              "name": "overload1",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 708
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 716
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 720
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 708,
              "end": 722
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 691,
            "end": 722
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload2",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 745
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 753
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 745,
              "end": 755
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 728,
            "end": 755
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload2",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 777
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 785
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 789
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 777,
              "end": 791
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 760,
            "end": 791
          }
        ],
        "start": 685,
        "end": 793
      },
      "abstract": false,
      "declare": true,
      "start": 668,
      "end": 793
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 793
}
```
