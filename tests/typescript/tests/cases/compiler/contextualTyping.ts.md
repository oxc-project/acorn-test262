__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 5373,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 124,
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 68,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 73,
            "end": 105,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 84,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 76,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 86,
                "end": 95,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 87,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 121,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 113,
                "end": 121,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 113,
                  "end": 119
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
        "start": 32,
        "end": 36,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 126,
      "end": 159,
      "body": {
        "type": "TSInterfaceBody",
        "start": 141,
        "end": 159,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 147,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 156,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 156,
                  "decorators": [],
                  "name": "IFoo",
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
        "start": 136,
        "end": 140,
        "decorators": [],
        "name": "IBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 200,
      "end": 296,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 296,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 217,
            "end": 294,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 254,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 222,
                "end": 254,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 223,
                    "end": 232,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 224,
                      "end": 232,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 226,
                        "end": 232
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 234,
                    "end": 243,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 235,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 245,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 248,
                    "end": 254
                  }
                },
                "typeParameters": null
              }
            },
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 294,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 269,
                "end": 294,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 279,
                    "end": 288,
                    "argument": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 287,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 266,
                  "end": 267,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 210,
        "decorators": [],
        "name": "C1T5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 338,
      "end": 446,
      "body": {
        "type": "TSModuleBlock",
        "start": 350,
        "end": 446,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 356,
            "end": 444,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 363,
              "end": 444,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 367,
                  "end": 444,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 404,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 370,
                      "end": 404,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 372,
                        "end": 404,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 373,
                            "end": 382,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 374,
                              "end": 382,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 376,
                                "end": 382
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 384,
                            "end": 393,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 385,
                              "end": 393,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 387,
                                "end": 393
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 395,
                          "end": 404,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 398,
                            "end": 404
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 407,
                    "end": 444,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 419,
                      "end": 444,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 429,
                          "end": 438,
                          "argument": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 416,
                        "end": 417,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 349,
        "decorators": [],
        "name": "C2T5",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 481,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 541,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 512,
            "decorators": [],
            "name": "c3t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 489,
              "end": 512,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 491,
                "end": 512,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 492,
                    "end": 501,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 493,
                      "end": 501,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 495,
                        "end": 501
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 503,
                  "end": 512,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 506,
                    "end": 512
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 516,
            "end": 540,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 528,
              "end": 540,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 530,
                  "end": 538,
                  "argument": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 538,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 525,
                "end": 526,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 574,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 551,
            "decorators": [],
            "name": "c3t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 554,
            "end": 574,
            "expression": {
              "type": "ObjectExpression",
              "start": 561,
              "end": 573,
              "properties": [
                {
                  "type": "Property",
                  "start": 567,
                  "end": 571,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 567,
                    "end": 568,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 570,
                    "end": 571,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 555,
              "end": 559,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 555,
                "end": 559,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 575,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 579,
          "end": 598,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 593,
            "decorators": [],
            "name": "c3t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 583,
              "end": 593,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 585,
                "end": 593,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 585,
                  "end": 591
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 596,
            "end": 598,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 600,
      "end": 656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 604,
          "end": 655,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 604,
            "end": 620,
            "decorators": [],
            "name": "c3t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 608,
              "end": 620,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 610,
                "end": 620,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 613,
                  "end": 620,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 616,
                    "end": 620,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 616,
                      "end": 620,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 623,
            "end": 655,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 634,
              "end": 655,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 636,
                  "end": 653,
                  "argument": {
                    "type": "TSTypeAssertion",
                    "start": 643,
                    "end": 653,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 650,
                      "end": 652,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 644,
                      "end": 648,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 644,
                        "end": 648,
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 657,
      "end": 723,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 722,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 686,
            "decorators": [],
            "name": "c3t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 686,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 667,
                "end": 686,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 668,
                    "end": 677,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 669,
                      "end": 677,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 671,
                        "end": 677
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 679,
                  "end": 686,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 682,
                    "end": 686,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 682,
                      "end": 686,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 689,
            "end": 722,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 701,
              "end": 722,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 703,
                  "end": 720,
                  "argument": {
                    "type": "TSTypeAssertion",
                    "start": 710,
                    "end": 720,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 717,
                      "end": 719,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 711,
                      "end": 715,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 711,
                        "end": 715,
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "start": 698,
                "end": 699,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 724,
      "end": 804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 728,
          "end": 803,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 728,
            "end": 764,
            "decorators": [],
            "name": "c3t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 732,
              "end": 764,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 734,
                "end": 764,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 735,
                    "end": 744,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 736,
                      "end": 744,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 738,
                        "end": 744
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 746,
                    "end": 755,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 747,
                      "end": 755,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 749,
                        "end": 755
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 757,
                  "end": 764,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 760,
                    "end": 764,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 760,
                      "end": 764,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 767,
            "end": 803,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 782,
              "end": 803,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 784,
                  "end": 801,
                  "argument": {
                    "type": "TSTypeAssertion",
                    "start": 791,
                    "end": 801,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 798,
                      "end": 800,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 792,
                      "end": 796,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 792,
                        "end": 796,
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "start": 776,
                "end": 777,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 779,
                "end": 780,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 805,
      "end": 902,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 809,
          "end": 901,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 809,
            "end": 873,
            "decorators": [],
            "name": "c3t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 813,
              "end": 873,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 815,
                "end": 873,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 821,
                    "end": 841,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 822,
                        "end": 831,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 823,
                          "end": 831,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 825,
                            "end": 831
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 832,
                      "end": 840,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 834,
                        "end": 840
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 850,
                    "end": 871,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 851,
                        "end": 861,
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 853,
                          "end": 861,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 855,
                            "end": 861
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 862,
                      "end": 870,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 864,
                        "end": 870
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 876,
            "end": 901,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 888,
              "end": 901,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 890,
                  "end": 899,
                  "argument": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 898,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 885,
                "end": 886,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 904,
      "end": 975,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 908,
          "end": 974,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 908,
            "end": 946,
            "decorators": [],
            "name": "c3t8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 912,
              "end": 946,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 914,
                "end": 946,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 915,
                    "end": 924,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 916,
                      "end": 924,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 918,
                        "end": 924
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 926,
                    "end": 935,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 927,
                      "end": 935,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 929,
                        "end": 935
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 937,
                  "end": 946,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 940,
                    "end": 946
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 949,
            "end": 974,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 961,
              "end": 974,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 963,
                  "end": 972,
                  "argument": {
                    "type": "Identifier",
                    "start": 970,
                    "end": 971,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 958,
                "end": 959,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 976,
      "end": 1007,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 980,
          "end": 1006,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 980,
            "end": 996,
            "decorators": [],
            "name": "c3t9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 984,
              "end": 996,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 986,
                "end": 996,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 986,
                  "end": 994,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 986,
                    "end": 992
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 999,
            "end": 1006,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1000,
                "end": 1002,
                "elements": []
              },
              {
                "type": "ArrayExpression",
                "start": 1003,
                "end": 1005,
                "elements": []
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1008,
      "end": 1052,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1012,
          "end": 1051,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1012,
            "end": 1025,
            "decorators": [],
            "name": "c3t10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1017,
              "end": 1025,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1019,
                "end": 1025,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1019,
                  "end": 1023,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1023,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1028,
            "end": 1051,
            "elements": [
              {
                "type": "TSTypeAssertion",
                "start": 1029,
                "end": 1039,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1036,
                  "end": 1038,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1030,
                  "end": 1034,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1030,
                    "end": 1034,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              {
                "type": "TSTypeAssertion",
                "start": 1040,
                "end": 1050,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 1047,
                  "end": 1049,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1041,
                  "end": 1045,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1041,
                    "end": 1045,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1053,
      "end": 1133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1057,
          "end": 1132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1057,
            "end": 1099,
            "decorators": [],
            "name": "c3t11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1062,
              "end": 1099,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1064,
                "end": 1099,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 1064,
                  "end": 1097,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 1065,
                      "end": 1096,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1066,
                          "end": 1075,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1067,
                            "end": 1075,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1069,
                              "end": 1075
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1077,
                          "end": 1086,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1078,
                            "end": 1086,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1080,
                              "end": 1086
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1087,
                        "end": 1095,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1089,
                          "end": 1095
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1102,
            "end": 1132,
            "elements": [
              {
                "type": "FunctionExpression",
                "start": 1103,
                "end": 1131,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1118,
                  "end": 1131,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1120,
                      "end": 1129,
                      "argument": {
                        "type": "Identifier",
                        "start": 1127,
                        "end": 1128,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 1112,
                    "end": 1113,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1115,
                    "end": 1116,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1134,
      "end": 1175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1138,
          "end": 1175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1138,
            "end": 1149,
            "decorators": [],
            "name": "c3t12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1143,
              "end": 1149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1145,
                "end": 1149,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1145,
                  "end": 1149,
                  "decorators": [],
                  "name": "IBar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1152,
            "end": 1175,
            "properties": [
              {
                "type": "Property",
                "start": 1158,
                "end": 1173,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1161,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 1163,
                  "end": 1173,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 1170,
                    "end": 1172,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1164,
                    "end": 1168,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1164,
                      "end": 1168,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1176,
      "end": 1235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1180,
          "end": 1235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1180,
            "end": 1185,
            "decorators": [],
            "name": "c3t13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1188,
            "end": 1235,
            "expression": {
              "type": "ObjectExpression",
              "start": 1195,
              "end": 1234,
              "properties": [
                {
                  "type": "Property",
                  "start": 1201,
                  "end": 1232,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1201,
                    "end": 1202,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1204,
                    "end": 1232,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1219,
                      "end": 1232,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1221,
                          "end": 1230,
                          "argument": {
                            "type": "Identifier",
                            "start": 1228,
                            "end": 1229,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 1213,
                        "end": 1214,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1216,
                        "end": 1217,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1189,
              "end": 1193,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1189,
                "end": 1193,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1236,
      "end": 1269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1240,
          "end": 1269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1240,
            "end": 1245,
            "decorators": [],
            "name": "c3t14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1248,
            "end": 1269,
            "expression": {
              "type": "ObjectExpression",
              "start": 1255,
              "end": 1268,
              "properties": [
                {
                  "type": "Property",
                  "start": 1261,
                  "end": 1266,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1261,
                    "end": 1262,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrayExpression",
                    "start": 1264,
                    "end": 1266,
                    "elements": []
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1249,
              "end": 1253,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1249,
                "end": 1253,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1309,
      "end": 1460,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1320,
        "end": 1460,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1326,
            "end": 1364,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1326,
              "end": 1329,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1329,
              "end": 1363,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1331,
                "end": 1363,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1332,
                    "end": 1341,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1333,
                      "end": 1341,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1335,
                        "end": 1341
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1343,
                    "end": 1352,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1344,
                      "end": 1352,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1346,
                        "end": 1352
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1354,
                  "end": 1363,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1357,
                    "end": 1363
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1369,
            "end": 1458,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1369,
              "end": 1380,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1380,
              "end": 1458,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1383,
                "end": 1458,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1393,
                    "end": 1452,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1393,
                      "end": 1452,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1393,
                        "end": 1401,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1393,
                          "end": 1397
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1398,
                          "end": 1401,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 1404,
                        "end": 1452,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1419,
                          "end": 1452,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1433,
                              "end": 1442,
                              "argument": {
                                "type": "Identifier",
                                "start": 1440,
                                "end": 1441,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null
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
                            "start": 1413,
                            "end": 1414,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 1416,
                            "end": 1417,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
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
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1315,
        "end": 1319,
        "decorators": [],
        "name": "C4T5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1501,
      "end": 1621,
      "body": {
        "type": "TSModuleBlock",
        "start": 1513,
        "end": 1621,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1519,
            "end": 1568,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1526,
              "end": 1568,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1530,
                  "end": 1567,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1530,
                    "end": 1567,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1533,
                      "end": 1567,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1535,
                        "end": 1567,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1536,
                            "end": 1545,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1537,
                              "end": 1545,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1539,
                                "end": 1545
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1547,
                            "end": 1556,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1548,
                              "end": 1556,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1550,
                                "end": 1556
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1558,
                          "end": 1567,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1561,
                            "end": 1567
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 1573,
            "end": 1619,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1573,
              "end": 1619,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1573,
                "end": 1576,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "FunctionExpression",
                "start": 1579,
                "end": 1619,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1594,
                  "end": 1619,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1604,
                      "end": 1613,
                      "argument": {
                        "type": "Identifier",
                        "start": 1611,
                        "end": 1612,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 1588,
                    "end": 1589,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1591,
                    "end": 1592,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1508,
        "end": 1512,
        "decorators": [],
        "name": "C5T5",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 1655,
      "end": 1685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1659,
          "end": 1684,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1659,
            "end": 1684,
            "decorators": [],
            "name": "c6t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1663,
              "end": 1684,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1665,
                "end": 1684,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1666,
                    "end": 1675,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1667,
                      "end": 1675,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1669,
                        "end": 1675
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1677,
                  "end": 1684,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1680,
                    "end": 1684,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1680,
                      "end": 1684,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
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
      "type": "ExpressionStatement",
      "start": 1686,
      "end": 1748,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1686,
        "end": 1747,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1686,
          "end": 1690,
          "decorators": [],
          "name": "c6t5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 1693,
          "end": 1747,
          "expression": {
            "type": "FunctionExpression",
            "start": 1714,
            "end": 1747,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1726,
              "end": 1747,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1728,
                  "end": 1745,
                  "argument": {
                    "type": "TSTypeAssertion",
                    "start": 1735,
                    "end": 1745,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 1742,
                      "end": 1744,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1736,
                      "end": 1740,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1736,
                        "end": 1740,
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "start": 1723,
                "end": 1724,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 1694,
            "end": 1713,
            "params": [
              {
                "type": "Identifier",
                "start": 1695,
                "end": 1704,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1696,
                  "end": 1704,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1698,
                    "end": 1704
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1706,
              "end": 1713,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1709,
                "end": 1713,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1709,
                  "end": 1713,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1785,
      "end": 1802,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1789,
          "end": 1801,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1789,
            "end": 1801,
            "decorators": [],
            "name": "c7t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1793,
              "end": 1801,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1795,
                "end": 1801,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1795,
                  "end": 1799,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1795,
                    "end": 1799,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "type": "ExpressionStatement",
      "start": 1803,
      "end": 1828,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1803,
        "end": 1827,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1803,
          "end": 1810,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1803,
            "end": 1807,
            "decorators": [],
            "name": "c7t2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1808,
            "end": 1809,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 1813,
          "end": 1827,
          "expression": {
            "type": "ObjectExpression",
            "start": 1820,
            "end": 1826,
            "properties": [
              {
                "type": "Property",
                "start": 1821,
                "end": 1825,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1821,
                  "end": 1822,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1824,
                  "end": 1825,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1814,
            "end": 1818,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1814,
              "end": 1818,
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1869,
      "end": 2338,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1892,
        "end": 2338,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1898,
            "end": 1924,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1898,
              "end": 1900,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1900,
              "end": 1923,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1902,
                "end": 1923,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1903,
                    "end": 1912,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1904,
                      "end": 1912,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1906,
                        "end": 1912
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1914,
                  "end": 1923,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1917,
                    "end": 1923
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1929,
            "end": 1938,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1929,
              "end": 1931,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1931,
              "end": 1937,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1933,
                "end": 1937,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1933,
                  "end": 1937,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1943,
            "end": 1956,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1943,
              "end": 1945,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1945,
              "end": 1955,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1947,
                "end": 1955,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1947,
                  "end": 1953
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1961,
            "end": 1976,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1961,
              "end": 1963,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1963,
              "end": 1975,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1965,
                "end": 1975,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1968,
                  "end": 1975,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1971,
                    "end": 1975,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1971,
                      "end": 1975,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1981,
            "end": 2005,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1981,
              "end": 1983,
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1983,
              "end": 2004,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1985,
                "end": 2004,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1986,
                    "end": 1995,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1987,
                      "end": 1995,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1989,
                        "end": 1995
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1997,
                  "end": 2004,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2000,
                    "end": 2004,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2000,
                      "end": 2004,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2010,
            "end": 2045,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2010,
              "end": 2012,
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2012,
              "end": 2044,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2014,
                "end": 2044,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2015,
                    "end": 2024,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2016,
                      "end": 2024,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2018,
                        "end": 2024
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2026,
                    "end": 2035,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2027,
                      "end": 2035,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2029,
                        "end": 2035
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2037,
                  "end": 2044,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2040,
                    "end": 2044,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2040,
                      "end": 2044,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2050,
            "end": 2162,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2050,
              "end": 2052,
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2052,
              "end": 2161,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2054,
                "end": 2161,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 2068,
                    "end": 2099,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2069,
                        "end": 2078,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2070,
                          "end": 2078,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2072,
                            "end": 2078
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2080,
                        "end": 2089,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2081,
                          "end": 2089,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2083,
                            "end": 2089
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2090,
                      "end": 2098,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2092,
                        "end": 2098
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2167,
            "end": 2204,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2167,
              "end": 2169,
              "decorators": [],
              "name": "t8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2169,
              "end": 2203,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2171,
                "end": 2203,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2172,
                    "end": 2181,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2173,
                      "end": 2181,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2175,
                        "end": 2181
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2183,
                    "end": 2192,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2184,
                      "end": 2192,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2186,
                        "end": 2192
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2194,
                  "end": 2203,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2197,
                    "end": 2203
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2209,
            "end": 2224,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2209,
              "end": 2211,
              "decorators": [],
              "name": "t9",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2211,
              "end": 2223,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2213,
                "end": 2223,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 2213,
                  "end": 2221,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 2213,
                    "end": 2219
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2229,
            "end": 2241,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2229,
              "end": 2232,
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2232,
              "end": 2240,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2234,
                "end": 2240,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 2234,
                  "end": 2238,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2234,
                    "end": 2238,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2246,
            "end": 2287,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2246,
              "end": 2249,
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2249,
              "end": 2286,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2251,
                "end": 2286,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 2251,
                  "end": 2284,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 2252,
                      "end": 2283,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2253,
                          "end": 2262,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2254,
                            "end": 2262,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2256,
                              "end": 2262
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 2264,
                          "end": 2273,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2265,
                            "end": 2273,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2267,
                              "end": 2273
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2274,
                        "end": 2282,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2276,
                          "end": 2282
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2292,
            "end": 2302,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2292,
              "end": 2295,
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2295,
              "end": 2301,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2297,
                "end": 2301,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2297,
                  "end": 2301,
                  "decorators": [],
                  "name": "IBar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2307,
            "end": 2317,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2307,
              "end": 2310,
              "decorators": [],
              "name": "t13",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2310,
              "end": 2316,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2312,
                "end": 2316,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2312,
                  "end": 2316,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2322,
            "end": 2332,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2322,
              "end": 2325,
              "decorators": [],
              "name": "t14",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2325,
              "end": 2331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2327,
                "end": 2331,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2327,
                  "end": 2331,
                  "decorators": [],
                  "name": "IFoo",
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
        "start": 1879,
        "end": 1891,
        "decorators": [],
        "name": "IPlaceHolder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2340,
      "end": 2815,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2344,
          "end": 2814,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2344,
            "end": 2793,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2349,
              "end": 2793,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2351,
                "end": 2793,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2357,
                    "end": 2383,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2357,
                      "end": 2359,
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2359,
                      "end": 2382,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2361,
                        "end": 2382,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2362,
                            "end": 2371,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2363,
                              "end": 2371,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2365,
                                "end": 2371
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2373,
                          "end": 2382,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2376,
                            "end": 2382
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2388,
                    "end": 2397,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2388,
                      "end": 2390,
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2390,
                      "end": 2396,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2392,
                        "end": 2396,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2392,
                          "end": 2396,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2402,
                    "end": 2415,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2402,
                      "end": 2404,
                      "decorators": [],
                      "name": "t3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2404,
                      "end": 2414,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2406,
                        "end": 2414,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 2406,
                          "end": 2412
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2420,
                    "end": 2435,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2420,
                      "end": 2422,
                      "decorators": [],
                      "name": "t4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2422,
                      "end": 2434,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2424,
                        "end": 2434,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2427,
                          "end": 2434,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2430,
                            "end": 2434,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2430,
                              "end": 2434,
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2440,
                    "end": 2464,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2440,
                      "end": 2442,
                      "decorators": [],
                      "name": "t5",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2442,
                      "end": 2463,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2444,
                        "end": 2463,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2445,
                            "end": 2454,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2446,
                              "end": 2454,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2448,
                                "end": 2454
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2456,
                          "end": 2463,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2459,
                            "end": 2463,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2459,
                              "end": 2463,
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2469,
                    "end": 2504,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2469,
                      "end": 2471,
                      "decorators": [],
                      "name": "t6",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2471,
                      "end": 2503,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2473,
                        "end": 2503,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2474,
                            "end": 2483,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2475,
                              "end": 2483,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2477,
                                "end": 2483
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2485,
                            "end": 2494,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2486,
                              "end": 2494,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2488,
                                "end": 2494
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2496,
                          "end": 2503,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2499,
                            "end": 2503,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2499,
                              "end": 2503,
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2509,
                    "end": 2621,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2509,
                      "end": 2511,
                      "decorators": [],
                      "name": "t7",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2511,
                      "end": 2620,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2513,
                        "end": 2620,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 2527,
                            "end": 2558,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2528,
                                "end": 2537,
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2529,
                                  "end": 2537,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2531,
                                    "end": 2537
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2539,
                                "end": 2548,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2540,
                                  "end": 2548,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2542,
                                    "end": 2548
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2549,
                              "end": 2557,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2551,
                                "end": 2557
                              }
                            },
                            "typeParameters": null
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2626,
                    "end": 2663,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2626,
                      "end": 2628,
                      "decorators": [],
                      "name": "t8",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2628,
                      "end": 2662,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2630,
                        "end": 2662,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2631,
                            "end": 2640,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2632,
                              "end": 2640,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2634,
                                "end": 2640
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2642,
                            "end": 2651,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2643,
                              "end": 2651,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2645,
                                "end": 2651
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2653,
                          "end": 2662,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2656,
                            "end": 2662
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2668,
                    "end": 2683,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2668,
                      "end": 2670,
                      "decorators": [],
                      "name": "t9",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2670,
                      "end": 2682,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2672,
                        "end": 2682,
                        "elementType": {
                          "type": "TSArrayType",
                          "start": 2672,
                          "end": 2680,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 2672,
                            "end": 2678
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2688,
                    "end": 2700,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2688,
                      "end": 2691,
                      "decorators": [],
                      "name": "t10",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2691,
                      "end": 2699,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2693,
                        "end": 2699,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2693,
                          "end": 2697,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2693,
                            "end": 2697,
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2705,
                    "end": 2746,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2705,
                      "end": 2708,
                      "decorators": [],
                      "name": "t11",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2708,
                      "end": 2745,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2710,
                        "end": 2745,
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "start": 2710,
                          "end": 2743,
                          "members": [
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 2711,
                              "end": 2742,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2712,
                                  "end": 2721,
                                  "decorators": [],
                                  "name": "n",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2713,
                                    "end": 2721,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2715,
                                      "end": 2721
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 2723,
                                  "end": 2732,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2724,
                                    "end": 2732,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 2726,
                                      "end": 2732
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 2733,
                                "end": 2741,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2735,
                                  "end": 2741
                                }
                              },
                              "typeParameters": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2751,
                    "end": 2761,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2751,
                      "end": 2754,
                      "decorators": [],
                      "name": "t12",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2754,
                      "end": 2760,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2756,
                        "end": 2760,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2756,
                          "end": 2760,
                          "decorators": [],
                          "name": "IBar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2766,
                    "end": 2776,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2766,
                      "end": 2769,
                      "decorators": [],
                      "name": "t13",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2769,
                      "end": 2775,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2771,
                        "end": 2775,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2771,
                          "end": 2775,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2781,
                    "end": 2791,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2781,
                      "end": 2784,
                      "decorators": [],
                      "name": "t14",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2784,
                      "end": 2790,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2786,
                        "end": 2790,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2786,
                          "end": 2790,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 2796,
            "end": 2814,
            "expression": {
              "type": "ObjectExpression",
              "start": 2811,
              "end": 2813,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2797,
              "end": 2809,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2797,
                "end": 2809,
                "decorators": [],
                "name": "IPlaceHolder",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 2817,
      "end": 2855,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2817,
        "end": 2854,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2817,
          "end": 2825,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2817,
            "end": 2822,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2823,
            "end": 2825,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 2829,
          "end": 2853,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 2841,
            "end": 2853,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 2843,
                "end": 2851,
                "argument": {
                  "type": "Identifier",
                  "start": 2850,
                  "end": 2851,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
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
              "start": 2838,
              "end": 2839,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2856,
      "end": 2888,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2856,
        "end": 2887,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2856,
          "end": 2864,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2856,
            "end": 2861,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2862,
            "end": 2864,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 2867,
          "end": 2887,
          "expression": {
            "type": "ObjectExpression",
            "start": 2874,
            "end": 2886,
            "properties": [
              {
                "type": "Property",
                "start": 2880,
                "end": 2884,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2880,
                  "end": 2881,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2883,
                  "end": 2884,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2868,
            "end": 2872,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2868,
              "end": 2872,
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2889,
      "end": 2903,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2889,
        "end": 2902,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2889,
          "end": 2897,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2889,
            "end": 2894,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2895,
            "end": 2897,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 2900,
          "end": 2902,
          "elements": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2904,
      "end": 2948,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2904,
        "end": 2947,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2904,
          "end": 2912,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2904,
            "end": 2909,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2910,
            "end": 2912,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 2915,
          "end": 2947,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 2926,
            "end": 2947,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 2928,
                "end": 2945,
                "argument": {
                  "type": "TSTypeAssertion",
                  "start": 2935,
                  "end": 2945,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 2942,
                    "end": 2944,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2936,
                    "end": 2940,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2936,
                      "end": 2940,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2949,
      "end": 2994,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2949,
        "end": 2993,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2949,
          "end": 2957,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2949,
            "end": 2954,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2955,
            "end": 2957,
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 2960,
          "end": 2993,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 2972,
            "end": 2993,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 2974,
                "end": 2991,
                "argument": {
                  "type": "TSTypeAssertion",
                  "start": 2981,
                  "end": 2991,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 2988,
                    "end": 2990,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2982,
                    "end": 2986,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2982,
                      "end": 2986,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
              "start": 2969,
              "end": 2970,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2995,
      "end": 3043,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2995,
        "end": 3042,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2995,
          "end": 3003,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2995,
            "end": 3000,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3001,
            "end": 3003,
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 3006,
          "end": 3042,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 3021,
            "end": 3042,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 3023,
                "end": 3040,
                "argument": {
                  "type": "TSTypeAssertion",
                  "start": 3030,
                  "end": 3040,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 3037,
                    "end": 3039,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3031,
                    "end": 3035,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3031,
                      "end": 3035,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
              "start": 3015,
              "end": 3016,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 3018,
              "end": 3019,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3044,
      "end": 3088,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3044,
        "end": 3087,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3044,
          "end": 3052,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3044,
            "end": 3049,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3050,
            "end": 3052,
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 3055,
          "end": 3087,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 3075,
            "end": 3087,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 3077,
                "end": 3085,
                "argument": {
                  "type": "Identifier",
                  "start": 3084,
                  "end": 3085,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
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
              "start": 3064,
              "end": 3073,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3065,
                "end": 3073,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3067,
                  "end": 3073
                }
              }
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3090,
      "end": 3127,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3090,
        "end": 3126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3090,
          "end": 3098,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3090,
            "end": 3095,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3096,
            "end": 3098,
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 3101,
          "end": 3126,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 3113,
            "end": 3126,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 3115,
                "end": 3124,
                "argument": {
                  "type": "Identifier",
                  "start": 3122,
                  "end": 3123,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
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
              "start": 3110,
              "end": 3111,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3128,
      "end": 3147,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3128,
        "end": 3146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3128,
          "end": 3136,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3128,
            "end": 3133,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3134,
            "end": 3136,
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 3139,
          "end": 3146,
          "elements": [
            {
              "type": "ArrayExpression",
              "start": 3140,
              "end": 3142,
              "elements": []
            },
            {
              "type": "ArrayExpression",
              "start": 3143,
              "end": 3145,
              "elements": []
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3148,
      "end": 3184,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3148,
        "end": 3183,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3148,
          "end": 3157,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3148,
            "end": 3153,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3154,
            "end": 3157,
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 3160,
          "end": 3183,
          "elements": [
            {
              "type": "TSTypeAssertion",
              "start": 3161,
              "end": 3171,
              "expression": {
                "type": "ObjectExpression",
                "start": 3168,
                "end": 3170,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3162,
                "end": 3166,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3162,
                  "end": 3166,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "TSTypeAssertion",
              "start": 3172,
              "end": 3182,
              "expression": {
                "type": "ObjectExpression",
                "start": 3179,
                "end": 3181,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3173,
                "end": 3177,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3173,
                  "end": 3177,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3185,
      "end": 3228,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3185,
        "end": 3227,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3185,
          "end": 3194,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3185,
            "end": 3190,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3191,
            "end": 3194,
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 3197,
          "end": 3227,
          "elements": [
            {
              "type": "FunctionExpression",
              "start": 3198,
              "end": 3226,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3213,
                "end": 3226,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3215,
                    "end": 3224,
                    "argument": {
                      "type": "Identifier",
                      "start": 3222,
                      "end": 3223,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 3207,
                  "end": 3208,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 3210,
                  "end": 3211,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3229,
      "end": 3264,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3229,
        "end": 3264,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3229,
          "end": 3238,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3229,
            "end": 3234,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3235,
            "end": 3238,
            "decorators": [],
            "name": "t12",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 3241,
          "end": 3264,
          "properties": [
            {
              "type": "Property",
              "start": 3247,
              "end": 3262,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3247,
                "end": 3250,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "TSTypeAssertion",
                "start": 3252,
                "end": 3262,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 3259,
                  "end": 3261,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3253,
                  "end": 3257,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3253,
                    "end": 3257,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3265,
      "end": 3324,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3265,
        "end": 3324,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3265,
          "end": 3274,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3265,
            "end": 3270,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3271,
            "end": 3274,
            "decorators": [],
            "name": "t13",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 3277,
          "end": 3324,
          "expression": {
            "type": "ObjectExpression",
            "start": 3284,
            "end": 3323,
            "properties": [
              {
                "type": "Property",
                "start": 3290,
                "end": 3321,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3290,
                  "end": 3291,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 3293,
                  "end": 3321,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3308,
                    "end": 3321,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 3310,
                        "end": 3319,
                        "argument": {
                          "type": "Identifier",
                          "start": 3317,
                          "end": 3318,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 3302,
                      "end": 3303,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3305,
                      "end": 3306,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3278,
            "end": 3282,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3278,
              "end": 3282,
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3325,
      "end": 3358,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3325,
        "end": 3358,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3325,
          "end": 3334,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3325,
            "end": 3330,
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3331,
            "end": 3334,
            "decorators": [],
            "name": "t14",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 3337,
          "end": 3358,
          "expression": {
            "type": "ObjectExpression",
            "start": 3344,
            "end": 3357,
            "properties": [
              {
                "type": "Property",
                "start": 3350,
                "end": 3355,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3350,
                  "end": 3351,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 3353,
                  "end": 3355,
                  "elements": []
                }
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3338,
            "end": 3342,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3338,
              "end": 3342,
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3385,
      "end": 3425,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3423,
        "end": 3425,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3394,
        "end": 3398,
        "decorators": [],
        "name": "c9t5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3399,
          "end": 3421,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3400,
            "end": 3421,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3402,
              "end": 3421,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3403,
                  "end": 3412,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3404,
                    "end": 3412,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3406,
                      "end": 3412
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3414,
                "end": 3421,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3417,
                  "end": 3421,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3417,
                    "end": 3421,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 3425,
      "end": 3426
    },
    {
      "type": "ExpressionStatement",
      "start": 3427,
      "end": 3472,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 3427,
        "end": 3471,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 3432,
            "end": 3470,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3444,
              "end": 3470,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3450,
                  "end": 3468,
                  "argument": {
                    "type": "TSTypeAssertion",
                    "start": 3457,
                    "end": 3467,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 3464,
                      "end": 3466,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3458,
                      "end": 3462,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3458,
                        "end": 3462,
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "start": 3441,
                "end": 3442,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3427,
          "end": 3431,
          "decorators": [],
          "name": "c9t5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3503,
      "end": 3598,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3507,
          "end": 3597,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3507,
            "end": 3539,
            "decorators": [],
            "name": "c10t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3512,
              "end": 3539,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3514,
                "end": 3539,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3517,
                  "end": 3539,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3520,
                    "end": 3539,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3521,
                        "end": 3530,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3522,
                          "end": 3530,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3524,
                            "end": 3530
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3532,
                      "end": 3539,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3535,
                        "end": 3539,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3535,
                          "end": 3539,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 3542,
            "end": 3597,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3553,
              "end": 3597,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3555,
                  "end": 3595,
                  "argument": {
                    "type": "FunctionExpression",
                    "start": 3562,
                    "end": 3595,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3574,
                      "end": 3595,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3576,
                          "end": 3593,
                          "argument": {
                            "type": "TSTypeAssertion",
                            "start": 3583,
                            "end": 3593,
                            "expression": {
                              "type": "ObjectExpression",
                              "start": 3590,
                              "end": 3592,
                              "properties": []
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3584,
                              "end": 3588,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3584,
                                "end": 3588,
                                "decorators": [],
                                "name": "IFoo",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                        "start": 3571,
                        "end": 3572,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 3627,
      "end": 3682,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3639,
        "end": 3682,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3641,
            "end": 3680,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3641,
              "end": 3652,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3652,
              "end": 3680,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3677,
                "end": 3680,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3653,
                  "end": 3675,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3654,
                    "end": 3675,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 3656,
                      "end": 3675,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3657,
                          "end": 3666,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3658,
                            "end": 3666,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3660,
                              "end": 3666
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3668,
                        "end": 3675,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3671,
                          "end": 3675,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3671,
                            "end": 3675,
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3633,
        "end": 3638,
        "decorators": [],
        "name": "C11t5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 3682,
      "end": 3683
    },
    {
      "type": "VariableDeclaration",
      "start": 3684,
      "end": 3737,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3688,
          "end": 3736,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3688,
            "end": 3689,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 3692,
            "end": 3736,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 3702,
                "end": 3735,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3714,
                  "end": 3735,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3716,
                      "end": 3733,
                      "argument": {
                        "type": "TSTypeAssertion",
                        "start": 3723,
                        "end": 3733,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 3730,
                          "end": 3732,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3724,
                          "end": 3728,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3724,
                            "end": 3728,
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                    "start": 3711,
                    "end": 3712,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3696,
              "end": 3701,
              "decorators": [],
              "name": "C11t5",
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
      "type": "VariableDeclaration",
      "start": 3777,
      "end": 3840,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3781,
          "end": 3839,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3781,
            "end": 3786,
            "decorators": [],
            "name": "c12t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 3789,
            "end": 3839,
            "expression": {
              "type": "FunctionExpression",
              "start": 3814,
              "end": 3838,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3826,
                "end": 3838,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3828,
                    "end": 3836,
                    "argument": {
                      "type": "Identifier",
                      "start": 3835,
                      "end": 3836,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 3823,
                  "end": 3824,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3790,
              "end": 3811,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3791,
                  "end": 3800,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3792,
                    "end": 3800,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3794,
                      "end": 3800
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3802,
                "end": 3811,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3805,
                  "end": 3811
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3841,
      "end": 3875,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3845,
          "end": 3874,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3845,
            "end": 3850,
            "decorators": [],
            "name": "c12t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 3853,
            "end": 3874,
            "expression": {
              "type": "ObjectExpression",
              "start": 3861,
              "end": 3873,
              "properties": [
                {
                  "type": "Property",
                  "start": 3867,
                  "end": 3871,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3867,
                    "end": 3868,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 3870,
                    "end": 3871,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3854,
              "end": 3858,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3854,
                "end": 3858,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3876,
      "end": 3902,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3880,
          "end": 3901,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3880,
            "end": 3885,
            "decorators": [],
            "name": "c12t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 3888,
            "end": 3901,
            "expression": {
              "type": "ArrayExpression",
              "start": 3899,
              "end": 3901,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 3889,
              "end": 3897,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 3889,
                "end": 3895
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3903,
      "end": 3961,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3907,
          "end": 3960,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3907,
            "end": 3912,
            "decorators": [],
            "name": "c12t4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 3915,
            "end": 3960,
            "expression": {
              "type": "FunctionExpression",
              "start": 3928,
              "end": 3960,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3939,
                "end": 3960,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3941,
                    "end": 3958,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 3948,
                      "end": 3958,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 3955,
                        "end": 3957,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3949,
                        "end": 3953,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3949,
                          "end": 3953,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3916,
              "end": 3926,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3919,
                "end": 3926,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3922,
                  "end": 3926,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3922,
                    "end": 3926,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3962,
      "end": 4030,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3966,
          "end": 4029,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3966,
            "end": 3971,
            "decorators": [],
            "name": "c12t5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 3974,
            "end": 4029,
            "expression": {
              "type": "FunctionExpression",
              "start": 3996,
              "end": 4029,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4008,
                "end": 4029,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4010,
                    "end": 4027,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 4017,
                      "end": 4027,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 4024,
                        "end": 4026,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4018,
                        "end": 4022,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4018,
                          "end": 4022,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "start": 4005,
                  "end": 4006,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3975,
              "end": 3994,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3976,
                  "end": 3985,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3977,
                    "end": 3985,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3979,
                      "end": 3985
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3987,
                "end": 3994,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3990,
                  "end": 3994,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3990,
                    "end": 3994,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4031,
      "end": 4113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4035,
          "end": 4112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4035,
            "end": 4040,
            "decorators": [],
            "name": "c12t6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4043,
            "end": 4112,
            "expression": {
              "type": "FunctionExpression",
              "start": 4076,
              "end": 4112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4091,
                "end": 4112,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4093,
                    "end": 4110,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 4100,
                      "end": 4110,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 4107,
                        "end": 4109,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4101,
                        "end": 4105,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4101,
                          "end": 4105,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "start": 4085,
                  "end": 4086,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 4088,
                  "end": 4089,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 4044,
              "end": 4074,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4045,
                  "end": 4054,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4046,
                    "end": 4054,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4048,
                      "end": 4054
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4056,
                  "end": 4065,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4057,
                    "end": 4065,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4059,
                      "end": 4065
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4067,
                "end": 4074,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4070,
                  "end": 4074,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4070,
                    "end": 4074,
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4114,
      "end": 4244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4118,
          "end": 4243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4118,
            "end": 4123,
            "decorators": [],
            "name": "c12t7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4126,
            "end": 4243,
            "expression": {
              "type": "FunctionExpression",
              "start": 4212,
              "end": 4243,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4231,
                "end": 4243,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4233,
                    "end": 4241,
                    "argument": {
                      "type": "Identifier",
                      "start": 4240,
                      "end": 4241,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 4221,
                  "end": 4229,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4222,
                    "end": 4229,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4223,
                      "end": 4229
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4127,
              "end": 4210,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 4133,
                  "end": 4164,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4134,
                      "end": 4143,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4135,
                        "end": 4143,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4137,
                          "end": 4143
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 4145,
                      "end": 4154,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4146,
                        "end": 4154,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4148,
                          "end": 4154
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4155,
                    "end": 4163,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4157,
                      "end": 4163
                    }
                  },
                  "typeParameters": null
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
      "type": "VariableDeclaration",
      "start": 4246,
      "end": 4319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4250,
          "end": 4318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4250,
            "end": 4255,
            "decorators": [],
            "name": "c12t8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4258,
            "end": 4318,
            "expression": {
              "type": "FunctionExpression",
              "start": 4293,
              "end": 4318,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4305,
                "end": 4318,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4307,
                    "end": 4316,
                    "argument": {
                      "type": "Identifier",
                      "start": 4314,
                      "end": 4315,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 4302,
                  "end": 4303,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 4259,
              "end": 4291,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4260,
                  "end": 4269,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4261,
                    "end": 4269,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4263,
                      "end": 4269
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4271,
                  "end": 4280,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4272,
                    "end": 4280,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4274,
                      "end": 4280
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4282,
                "end": 4291,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4285,
                  "end": 4291
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4320,
      "end": 4353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4324,
          "end": 4352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4324,
            "end": 4329,
            "decorators": [],
            "name": "c12t9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4332,
            "end": 4352,
            "expression": {
              "type": "ArrayExpression",
              "start": 4345,
              "end": 4352,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 4346,
                  "end": 4348,
                  "elements": []
                },
                {
                  "type": "ArrayExpression",
                  "start": 4349,
                  "end": 4351,
                  "elements": []
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 4333,
              "end": 4343,
              "elementType": {
                "type": "TSArrayType",
                "start": 4333,
                "end": 4341,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 4333,
                  "end": 4339
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4354,
      "end": 4400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4358,
          "end": 4399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4358,
            "end": 4364,
            "decorators": [],
            "name": "c12t10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4367,
            "end": 4399,
            "expression": {
              "type": "ArrayExpression",
              "start": 4376,
              "end": 4399,
              "elements": [
                {
                  "type": "TSTypeAssertion",
                  "start": 4377,
                  "end": 4387,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 4384,
                    "end": 4386,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4378,
                    "end": 4382,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4378,
                      "end": 4382,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "TSTypeAssertion",
                  "start": 4388,
                  "end": 4398,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 4395,
                    "end": 4397,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4389,
                    "end": 4393,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4389,
                      "end": 4393,
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 4368,
              "end": 4374,
              "elementType": {
                "type": "TSTypeReference",
                "start": 4368,
                "end": 4372,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4368,
                  "end": 4372,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4401,
      "end": 4483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4405,
          "end": 4482,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4405,
            "end": 4411,
            "decorators": [],
            "name": "c12t11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4414,
            "end": 4482,
            "expression": {
              "type": "ArrayExpression",
              "start": 4452,
              "end": 4482,
              "elements": [
                {
                  "type": "FunctionExpression",
                  "start": 4453,
                  "end": 4481,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 4468,
                    "end": 4481,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 4470,
                        "end": 4479,
                        "argument": {
                          "type": "Identifier",
                          "start": 4477,
                          "end": 4478,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 4462,
                      "end": 4463,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 4465,
                      "end": 4466,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 4415,
              "end": 4450,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 4415,
                "end": 4448,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 4416,
                    "end": 4447,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4417,
                        "end": 4426,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4418,
                          "end": 4426,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4420,
                            "end": 4426
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 4428,
                        "end": 4437,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4429,
                          "end": 4437,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4431,
                            "end": 4437
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4438,
                      "end": 4446,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4440,
                        "end": 4446
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4484,
      "end": 4527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4488,
          "end": 4527,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4488,
            "end": 4494,
            "decorators": [],
            "name": "c12t12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4497,
            "end": 4527,
            "expression": {
              "type": "ObjectExpression",
              "start": 4504,
              "end": 4527,
              "properties": [
                {
                  "type": "Property",
                  "start": 4510,
                  "end": 4525,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4510,
                    "end": 4513,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "TSTypeAssertion",
                    "start": 4515,
                    "end": 4525,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 4522,
                      "end": 4524,
                      "properties": []
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4516,
                      "end": 4520,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4516,
                        "end": 4520,
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4498,
              "end": 4502,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4498,
                "end": 4502,
                "decorators": [],
                "name": "IBar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4528,
      "end": 4589,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4532,
          "end": 4589,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4532,
            "end": 4538,
            "decorators": [],
            "name": "c12t13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4541,
            "end": 4589,
            "expression": {
              "type": "ObjectExpression",
              "start": 4549,
              "end": 4588,
              "properties": [
                {
                  "type": "Property",
                  "start": 4555,
                  "end": 4586,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4555,
                    "end": 4556,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 4558,
                    "end": 4586,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 4573,
                      "end": 4586,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 4575,
                          "end": 4584,
                          "argument": {
                            "type": "Identifier",
                            "start": 4582,
                            "end": 4583,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 4567,
                        "end": 4568,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 4570,
                        "end": 4571,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4542,
              "end": 4546,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4542,
                "end": 4546,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4590,
      "end": 4625,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4594,
          "end": 4625,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4594,
            "end": 4600,
            "decorators": [],
            "name": "c12t14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 4603,
            "end": 4625,
            "expression": {
              "type": "ObjectExpression",
              "start": 4611,
              "end": 4624,
              "properties": [
                {
                  "type": "Property",
                  "start": 4617,
                  "end": 4622,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4617,
                    "end": 4618,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrayExpression",
                    "start": 4620,
                    "end": 4622,
                    "elements": []
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4604,
              "end": 4608,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4604,
                "end": 4608,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 4716,
      "end": 4764,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4733,
        "end": 4736,
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4737,
          "end": 4745,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4738,
            "end": 4745,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4739,
              "end": 4745
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4747,
          "end": 4755,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4748,
            "end": 4755,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4749,
              "end": 4755
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4756,
        "end": 4763,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 4757,
          "end": 4763
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4766,
      "end": 4799,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4784,
        "end": 4799,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4786,
            "end": 4797,
            "argument": {
              "type": "BinaryExpression",
              "start": 4793,
              "end": 4796,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 4793,
                "end": 4794,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 4795,
                "end": 4796,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4775,
        "end": 4778,
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4779,
          "end": 4780,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 4781,
          "end": 4782,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4801,
      "end": 4820,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4805,
          "end": 4819,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4805,
            "end": 4808,
            "decorators": [],
            "name": "efv",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4811,
            "end": 4819,
            "arguments": [
              {
                "type": "Literal",
                "start": 4815,
                "end": 4816,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 4817,
                "end": 4818,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 4811,
              "end": 4814,
              "decorators": [],
              "name": "EF1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 4878,
      "end": 5047,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4898,
        "end": 5047,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4906,
            "end": 4940,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4906,
              "end": 4917,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 4917,
              "end": 4940,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4918,
                  "end": 4927,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4919,
                    "end": 4927,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4921,
                      "end": 4927
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4929,
                  "end": 4938,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4930,
                    "end": 4938,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4932,
                      "end": 4938
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
            "start": 4947,
            "end": 4957,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4947,
              "end": 4948,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4948,
              "end": 4956,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4950,
                "end": 4956
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 4964,
            "end": 4974,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4964,
              "end": 4965,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4965,
              "end": 4973,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4967,
                "end": 4973
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 4981,
            "end": 5016,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4981,
              "end": 4984,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 4984,
              "end": 5016,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4985,
                  "end": 4995,
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4987,
                    "end": 4995,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4989,
                      "end": 4995
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4997,
                  "end": 5007,
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4999,
                    "end": 5007,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5001,
                      "end": 5007
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 5008,
                "end": 5015,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5010,
                  "end": 5015,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5010,
                    "end": 5015,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5023,
            "end": 5044,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5030,
              "end": 5036,
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5036,
              "end": 5043,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5038,
                "end": 5043,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5038,
                  "end": 5043,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4892,
        "end": 4897,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5049,
      "end": 5080,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5049,
        "end": 5079,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5049,
          "end": 5061,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5049,
            "end": 5054,
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5055,
            "end": 5061,
            "decorators": [],
            "name": "origin",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "NewExpression",
          "start": 5064,
          "end": 5079,
          "arguments": [
            {
              "type": "Literal",
              "start": 5074,
              "end": 5075,
              "raw": "0",
              "value": 0
            },
            {
              "type": "Literal",
              "start": 5077,
              "end": 5078,
              "raw": "0",
              "value": 0
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 5068,
            "end": 5073,
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5082,
      "end": 5173,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5082,
        "end": 5172,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5082,
          "end": 5101,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 5082,
            "end": 5097,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 5082,
              "end": 5087,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5088,
              "end": 5097,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5098,
            "end": 5101,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 5104,
          "end": 5172,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 5121,
            "end": 5172,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 5127,
                "end": 5170,
                "argument": {
                  "type": "NewExpression",
                  "start": 5134,
                  "end": 5169,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 5144,
                      "end": 5155,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5144,
                        "end": 5150,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 5144,
                          "end": 5148
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 5149,
                          "end": 5150,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5153,
                        "end": 5155,
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "BinaryExpression",
                      "start": 5157,
                      "end": 5168,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 5157,
                        "end": 5163,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 5157,
                          "end": 5161
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 5162,
                          "end": 5163,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5166,
                        "end": 5168,
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 5138,
                    "end": 5143,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
              "start": 5113,
              "end": 5115,
              "decorators": [],
              "name": "dx",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 5117,
              "end": 5119,
              "decorators": [],
              "name": "dy",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5175,
      "end": 5303,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5175,
        "end": 5302,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5175,
          "end": 5190,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5175,
            "end": 5180,
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5181,
            "end": 5190,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 5193,
          "end": 5302,
          "properties": [
            {
              "type": "Property",
              "start": 5199,
              "end": 5203,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5199,
                "end": 5200,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 5202,
                "end": 5203,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "Property",
              "start": 5209,
              "end": 5213,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5209,
                "end": 5210,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 5212,
                "end": 5213,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "Property",
              "start": 5219,
              "end": 5300,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5219,
                "end": 5222,
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 5224,
                "end": 5300,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 5241,
                  "end": 5300,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 5251,
                      "end": 5294,
                      "argument": {
                        "type": "NewExpression",
                        "start": 5258,
                        "end": 5293,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 5268,
                            "end": 5279,
                            "operator": "+",
                            "left": {
                              "type": "MemberExpression",
                              "start": 5268,
                              "end": 5274,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5268,
                                "end": 5272
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 5273,
                                "end": 5274,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5277,
                              "end": 5279,
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "BinaryExpression",
                            "start": 5281,
                            "end": 5292,
                            "operator": "+",
                            "left": {
                              "type": "MemberExpression",
                              "start": 5281,
                              "end": 5287,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5281,
                                "end": 5285
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 5286,
                                "end": 5287,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5290,
                              "end": 5292,
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 5262,
                          "end": 5267,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                    "start": 5233,
                    "end": 5235,
                    "decorators": [],
                    "name": "dx",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5237,
                    "end": 5239,
                    "decorators": [],
                    "name": "dy",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5305,
      "end": 5331,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5317,
        "end": 5331,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 5319,
            "end": 5329,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5319,
              "end": 5320,
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
              "start": 5320,
              "end": 5328,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5322,
                "end": 5328
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 5315,
        "end": 5316,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5332,
      "end": 5357,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5354,
        "end": 5357,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 5352,
          "end": 5353,
          "expression": {
            "type": "Identifier",
            "start": 5352,
            "end": 5353,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 5342,
        "end": 5343,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5358,
      "end": 5373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5362,
          "end": 5372,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5362,
            "end": 5366,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5363,
              "end": 5366,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5365,
                "end": 5366,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5365,
                  "end": 5366,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 5369,
            "end": 5372,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
