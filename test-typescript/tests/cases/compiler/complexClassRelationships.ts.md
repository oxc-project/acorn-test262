__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 938,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 176,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 176,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 174,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 100,
              "decorators": [],
              "name": "createEmpty",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 174,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 174,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 122,
                    "end": 147,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 126,
                        "end": 146,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 130,
                          "decorators": [],
                          "name": "item",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 133,
                          "end": 146,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 144,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 156,
                    "end": 168,
                    "argument": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 167,
                      "decorators": [],
                      "name": "item",
                      "optional": false
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
                "start": 102,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 111,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 111,
                    "decorators": [],
                    "name": "Derived",
                    "optional": false
                  }
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
        "start": 48,
        "end": 55,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 64,
        "end": 68,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 177,
      "end": 309,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 307,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 231,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 307,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 307,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 254,
                    "end": 301,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 254,
                      "end": 300,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 271,
                        "end": 300,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 273,
                            "end": 298,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 280,
                              "end": 297,
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "start": 281,
                                  "end": 296,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 281,
                                    "end": 285,
                                    "decorators": [],
                                    "name": "item",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 296,
                                    "decorators": [],
                                    "name": "Components",
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 255,
                          "end": 266,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 259,
                            "end": 266,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 261,
                              "end": 266,
                              "typeName": {
                                "type": "Identifier",
                                "start": 261,
                                "end": 266,
                                "decorators": [],
                                "name": "Thing",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 242,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 235,
                      "end": 242,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 238,
                        "end": 242,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 241,
                          "end": 242,
                          "typeName": {
                            "type": "Identifier",
                            "start": 241,
                            "end": 242,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 197,
        "decorators": [],
        "name": "BaseCollection",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 197,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 198,
            "end": 212,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 212,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
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
      "type": "ClassDeclaration",
      "start": 310,
      "end": 367,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 367,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 327,
            "end": 365,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 342,
              "decorators": [],
              "name": "ownerCollection",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 364,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 344,
                "end": 364,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 358,
                  "end": 364,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 359,
                      "end": 363,
                      "typeName": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 363,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 358,
                  "decorators": [],
                  "name": "BaseCollection",
                  "optional": false
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
        "start": 316,
        "end": 320,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 369,
      "end": 454,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 381,
        "end": 454,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 387,
            "end": 452,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 398,
              "end": 408,
              "decorators": [],
              "name": "Components",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 408,
              "end": 452,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 437,
                "end": 452,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 439,
                    "end": 450,
                    "argument": {
                      "type": "Literal",
                      "start": 446,
                      "end": 450,
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
                "start": 410,
                "end": 436,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 412,
                  "end": 436,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 431,
                    "end": 436,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 432,
                        "end": 435
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 431,
                    "decorators": [],
                    "name": "ComponentCollection",
                    "optional": false
                  }
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
        "start": 375,
        "end": 380,
        "decorators": [],
        "name": "Thing",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 456,
      "end": 562,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 485,
        "end": 562,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 491,
            "end": 560,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 520,
              "decorators": [],
              "name": "sortComponents",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 520,
              "end": 560,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 529,
                "end": 560,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 539,
                    "end": 554,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 546,
                      "end": 553,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 546,
                        "end": 547,
                        "decorators": [],
                        "name": "p",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 553,
                        "decorators": [],
                        "name": "prop1",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 521,
                  "end": 527,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 522,
                    "end": 527,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 524,
                      "end": 527,
                      "typeName": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 527,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 462,
        "end": 481,
        "decorators": [],
        "name": "ComponentCollection",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 481,
        "end": 484,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 482,
            "end": 483,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
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
      "type": "ClassDeclaration",
      "start": 564,
      "end": 825,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 574,
        "end": 825,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 580,
            "end": 652,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 591,
              "end": 596,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 596,
              "end": 652,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 599,
                "end": 652,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 609,
                    "end": 646,
                    "argument": {
                      "type": "NewExpression",
                      "start": 616,
                      "end": 645,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 640,
                          "end": 644
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 620,
                        "end": 631,
                        "decorators": [],
                        "name": "GenericType",
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 631,
                        "end": 639,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 632,
                            "end": 638
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 657,
            "end": 702,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 672,
              "decorators": [],
              "name": "populate",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 672,
              "end": 702,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 675,
                "end": 702,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 685,
                    "end": 696,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 685,
                      "end": 695,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 685,
                        "end": 689
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 690,
                        "end": 695,
                        "decorators": [],
                        "name": "prop2",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 707,
            "end": 823,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 718,
              "end": 723,
              "decorators": [],
              "name": "prop2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 723,
              "end": 823,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 751,
                "end": 823,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 761,
                    "end": 817,
                    "argument": {
                      "type": "NewExpression",
                      "start": 768,
                      "end": 816,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 796,
                          "end": 815,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 796,
                            "end": 803,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 804,
                            "end": 815,
                            "decorators": [],
                            "name": "createEmpty",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 772,
                        "end": 786,
                        "decorators": [],
                        "name": "BaseCollection",
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 786,
                        "end": 795,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 787,
                            "end": 794,
                            "typeName": {
                              "type": "Identifier",
                              "start": 787,
                              "end": 794,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false
                            }
                          }
                        ]
                      }
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
                "start": 725,
                "end": 750,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 727,
                  "end": 750,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 741,
                    "end": 750,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 742,
                        "end": 749,
                        "typeName": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 749,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 741,
                    "decorators": [],
                    "name": "BaseCollection",
                    "optional": false
                  }
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
        "start": 570,
        "end": 573,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 827,
      "end": 888,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 848,
        "end": 888,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 854,
            "end": 886,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 854,
              "end": 865,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 865,
              "end": 886,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 883,
                "end": 886,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 866,
                  "end": 881,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 872,
                    "end": 881,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 874,
                      "end": 881,
                      "typeName": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 881,
                        "decorators": [],
                        "name": "FooBase",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 833,
        "end": 844,
        "decorators": [],
        "name": "GenericType",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 844,
        "end": 847,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 845,
            "end": 846,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 845,
              "end": 846,
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
      "type": "ClassDeclaration",
      "start": 890,
      "end": 938,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 904,
        "end": 938,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 910,
            "end": 936,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 917,
              "end": 925,
              "decorators": [],
              "name": "populate",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 925,
              "end": 936,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 928,
                "end": 936,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 896,
        "end": 903,
        "decorators": [],
        "name": "FooBase",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
