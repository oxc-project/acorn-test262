declFilePrivateMethodOverloads.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 40,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 38,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 35,
              "decorators": [],
              "name": "someMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "IContext",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 667,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 667,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 153,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 86,
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 86,
              "end": 153,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 111,
                  "decorators": [],
                  "name": "bindingContext",
                  "optional": false,
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
                        "decorators": [],
                        "name": "IContext",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 151,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 117,
                      "end": 151,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 118,
                          "end": 142,
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
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
                                "decorators": [],
                                "name": "IContext",
                                "optional": false
                              }
                            }
                          }
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
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 267,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 188,
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 188,
              "end": 267,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 225,
                  "decorators": [],
                  "name": "bindingContextArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 210,
                      "end": 225,
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
                              "decorators": [],
                              "name": "IContext",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 215,
                        "decorators": [],
                        "name": "Array",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 265,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 229,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 231,
                      "end": 265,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 232,
                          "end": 256,
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
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
                                "decorators": [],
                                "name": "IContext",
                                "optional": false
                              }
                            }
                          }
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
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 272,
            "end": 390,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 302,
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 302,
              "end": 390,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 358,
                "end": 390,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 303,
                  "end": 310,
                  "decorators": [],
                  "name": "context",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 312,
                  "end": 350,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 314,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 316,
                      "end": 350,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 317,
                          "end": 341,
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
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
                                "decorators": [],
                                "name": "IContext",
                                "optional": false
                              }
                            }
                          }
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
                  }
                }
              ],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 396,
            "end": 458,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 404,
              "end": 431,
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 431,
              "end": 458,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 432,
                  "end": 456,
                  "decorators": [],
                  "name": "bindingContext",
                  "optional": false,
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
                        "decorators": [],
                        "name": "IContext",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 463,
            "end": 577,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 498,
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 498,
              "end": 577,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 499,
                  "end": 535,
                  "decorators": [],
                  "name": "bindingContextArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 518,
                    "end": 535,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 520,
                      "end": 535,
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
                              "decorators": [],
                              "name": "IContext",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 520,
                        "end": 525,
                        "decorators": [],
                        "name": "Array",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 537,
                  "end": 575,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 539,
                    "end": 575,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 541,
                      "end": 575,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 542,
                          "end": 566,
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
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
                                "decorators": [],
                                "name": "IContext",
                                "optional": false
                              }
                            }
                          }
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
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 582,
            "end": 665,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 590,
              "end": 617,
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 617,
              "end": 665,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 633,
                "end": 665,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 618,
                  "end": 625,
                  "decorators": [],
                  "name": "context",
                  "optional": false
                }
              ],
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
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 49,
        "decorators": [],
        "name": "c1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 668,
      "end": 793,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 685,
        "end": 793,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 691,
            "end": 722,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 708,
              "decorators": [],
              "name": "overload1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 708,
              "end": 722,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 709,
                  "end": 716,
                  "decorators": [],
                  "name": "context",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 718,
                  "end": 720,
                  "decorators": [],
                  "name": "fn",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 728,
            "end": 755,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 736,
              "end": 745,
              "decorators": [],
              "name": "overload2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 745,
              "end": 755,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 746,
                  "end": 753,
                  "decorators": [],
                  "name": "context",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 760,
            "end": 791,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 768,
              "end": 777,
              "decorators": [],
              "name": "overload2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 777,
              "end": 791,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 778,
                  "end": 785,
                  "decorators": [],
                  "name": "context",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 787,
                  "end": 789,
                  "decorators": [],
                  "name": "fn",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 684,
        "decorators": [],
        "name": "c2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
