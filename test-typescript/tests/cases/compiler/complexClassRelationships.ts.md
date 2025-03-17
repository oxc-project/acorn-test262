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
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 55,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 64,
        "end": 68,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 176,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 174,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 100,
              "name": "createEmpty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 174,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 130,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 133,
                          "end": 146,
                          "callee": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 144,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 156,
                    "end": 168,
                    "argument": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 167,
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "Derived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "start": 177,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 197,
        "name": "BaseCollection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 309,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 307,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 231,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 307,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 242,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 235,
                      "end": 242,
                      "typeParameters": null,
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 255,
                          "end": 266,
                          "name": "item",
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
                                "name": "Thing",
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
                                  "object": {
                                    "type": "Identifier",
                                    "start": 281,
                                    "end": 285,
                                    "name": "item",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 296,
                                    "name": "Components",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 197,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 198,
            "end": 212,
            "name": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 212,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 310,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 320,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 367,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 327,
            "end": 365,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 342,
              "name": "ownerCollection",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 364,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 344,
                "end": 364,
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 358,
                  "name": "BaseCollection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "Base",
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
            "accessibility": null
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
      "start": 369,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 380,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 381,
        "end": 454,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 387,
            "end": 452,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 398,
              "end": 408,
              "name": "Components",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 408,
              "end": 452,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 410,
                "end": 436,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 412,
                  "end": 436,
                  "typeName": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 431,
                    "name": "ComponentCollection",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "start": 456,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 462,
        "end": 481,
        "name": "ComponentCollection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 485,
        "end": 562,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 491,
            "end": 560,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 520,
              "name": "sortComponents",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 520,
              "end": 560,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 521,
                  "end": 527,
                  "name": "p",
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
                        "name": "Foo",
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
                      "object": {
                        "type": "Identifier",
                        "start": 546,
                        "end": 547,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 553,
                        "name": "prop1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 481,
        "end": 484,
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
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 564,
      "end": 825,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 573,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 574,
        "end": 825,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 580,
            "end": 652,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 591,
              "end": 596,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 596,
              "end": 652,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 620,
                        "end": 631,
                        "name": "GenericType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 640,
                          "end": 644
                        }
                      ],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 657,
            "end": 702,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 672,
              "name": "populate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 672,
              "end": 702,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 685,
                        "end": 689
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 690,
                        "end": 695,
                        "name": "prop2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 707,
            "end": 823,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 718,
              "end": 723,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 723,
              "end": 823,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 772,
                        "end": 786,
                        "name": "BaseCollection",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 796,
                          "end": 815,
                          "object": {
                            "type": "Identifier",
                            "start": 796,
                            "end": 803,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 804,
                            "end": 815,
                            "name": "createEmpty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
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
                              "name": "Derived",
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
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 725,
                "end": 750,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 727,
                  "end": 750,
                  "typeName": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 741,
                    "name": "BaseCollection",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "Derived",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "start": 827,
      "end": 888,
      "id": {
        "type": "Identifier",
        "start": 833,
        "end": 844,
        "name": "GenericType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 848,
        "end": 888,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 854,
            "end": 886,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 854,
              "end": 865,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 865,
              "end": 886,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 866,
                  "end": 881,
                  "name": "parent",
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
                        "name": "FooBase",
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
                "type": "BlockStatement",
                "start": 883,
                "end": 886,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 844,
        "end": 847,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 845,
            "end": 846,
            "name": {
              "type": "Identifier",
              "start": 845,
              "end": 846,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 890,
      "end": 938,
      "id": {
        "type": "Identifier",
        "start": 896,
        "end": 903,
        "name": "FooBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 904,
        "end": 938,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 910,
            "end": 936,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 917,
              "end": 925,
              "name": "populate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 925,
              "end": 936,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 928,
                "end": 936,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
