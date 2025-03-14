thisTypeInFunctions.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 6159,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 41,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
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
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 402,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 402,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 68,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 151,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 85,
              "decorators": [],
              "name": "explicitThis",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 151,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 151,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 127,
                    "end": 145,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 134,
                      "end": 144,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 134,
                        "end": 140,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "decorators": [],
                        "name": "m",
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
                  "start": 86,
                  "end": 96,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 96,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 92,
                      "end": 96
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 107,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 108,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 110,
                  "end": 116
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 228,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 165,
              "decorators": [],
              "name": "explicitC",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 228,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 228,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 204,
                    "end": 222,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 211,
                      "end": 221,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 211,
                        "end": 217,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 211,
                          "end": 215
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 217,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "decorators": [],
                        "name": "m",
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
                  "start": 166,
                  "end": 173,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 170,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 173,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 184,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 184,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 178,
                      "end": 184
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 185,
                "end": 193,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 187,
                  "end": 193
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 322,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 249,
              "decorators": [],
              "name": "explicitProperty",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 249,
              "end": 322,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 322,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 298,
                    "end": 316,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 305,
                      "end": 315,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 305,
                        "end": 311,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 305,
                          "end": 309
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 311,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "decorators": [],
                        "name": "m",
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
                  "start": 250,
                  "end": 267,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 254,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 256,
                      "end": 267,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 257,
                          "end": 266,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 258,
                            "decorators": [],
                            "name": "n",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 258,
                            "end": 266,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 260,
                              "end": 266
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 269,
                  "end": 278,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 272,
                      "end": 278
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 279,
                "end": 287,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 281,
                  "end": 287
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 400,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 339,
              "decorators": [],
              "name": "explicitVoid",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 339,
              "end": 400,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 371,
                "end": 400,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 381,
                    "end": 394,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 388,
                      "end": 393,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 389,
                        "decorators": [],
                        "name": "m",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 392,
                        "end": 393,
                        "raw": "1",
                        "value": 1
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
                  "start": 340,
                  "end": 350,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 344,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 346,
                      "end": 350
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 352,
                  "end": 361,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 361,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 355,
                      "end": 361
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 362,
                "end": 370,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 364,
                  "end": 370
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
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 403,
      "end": 424,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 424,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 410,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 419,
        "end": 420,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 425,
      "end": 662,
      "body": {
        "type": "TSInterfaceBody",
        "start": 437,
        "end": 662,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 443,
            "end": 453,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 452,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 446,
                "end": 452
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 458,
            "end": 492,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 471,
              "decorators": [],
              "name": "explicitVoid1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 482,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 476,
                  "end": 482,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 478,
                    "end": 482
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 491,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 485,
                "end": 491
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 497,
            "end": 531,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 510,
              "decorators": [],
              "name": "explicitVoid2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 511,
                "end": 521,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 515,
                  "end": 521,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 517,
                    "end": 521
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 530,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 524,
                "end": 530
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 536,
            "end": 582,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 536,
              "end": 554,
              "decorators": [],
              "name": "explicitStructural",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 555,
                "end": 572,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 559,
                  "end": 572,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 561,
                    "end": 572,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 562,
                        "end": 571,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 562,
                          "end": 563,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 563,
                          "end": 571,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 565,
                            "end": 571
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 573,
              "end": 581,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 575,
                "end": 581
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 587,
            "end": 622,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 587,
              "end": 604,
              "decorators": [],
              "name": "explicitInterface",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 605,
                "end": 612,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 609,
                  "end": 612,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 611,
                    "end": 612,
                    "typeName": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 612,
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 613,
              "end": 621,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 615,
                "end": 621
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 627,
            "end": 660,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 639,
              "decorators": [],
              "name": "explicitThis",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 640,
                "end": 650,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 644,
                  "end": 650,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 646,
                    "end": 650
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 651,
              "end": 659,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 653,
                "end": 659
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 435,
        "end": 436,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 663,
      "end": 757,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 731,
        "end": 757,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 737,
            "end": 755,
            "argument": {
              "type": "BinaryExpression",
              "start": 744,
              "end": 754,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 744,
                "end": 745,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 748,
                "end": 754,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 748,
                  "end": 752
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 754,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
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
        "start": 672,
        "end": 690,
        "decorators": [],
        "name": "explicitStructural",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 691,
          "end": 710,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 695,
            "end": 710,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 697,
              "end": 710,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 699,
                  "end": 708,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 699,
                    "end": 700,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 700,
                    "end": 708,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 702,
                      "end": 708
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 712,
          "end": 721,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 713,
            "end": 721,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 715,
              "end": 721
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 722,
        "end": 730,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 724,
          "end": 730
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 758,
      "end": 827,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 805,
        "end": 827,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 811,
            "end": 825,
            "argument": {
              "type": "MemberExpression",
              "start": 818,
              "end": 824,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 818,
                "end": 822
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 823,
                "end": 824,
                "decorators": [],
                "name": "y",
                "optional": false
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
        "start": 767,
        "end": 775,
        "decorators": [],
        "name": "justThis",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 776,
          "end": 795,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 780,
            "end": 795,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 782,
              "end": 795,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 784,
                  "end": 793,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 784,
                    "end": 785,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 785,
                    "end": 793,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 787,
                      "end": 793
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 796,
        "end": 804,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 798,
          "end": 804
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 828,
      "end": 900,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 869,
        "end": 900,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 875,
            "end": 898,
            "argument": {
              "type": "BinaryExpression",
              "start": 882,
              "end": 897,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 882,
                "end": 892,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 882,
                  "end": 888,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 882,
                    "end": 886
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 887,
                    "end": 888,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 891,
                  "end": 892,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 895,
                "end": 897,
                "raw": "12",
                "value": 12
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
        "start": 837,
        "end": 849,
        "decorators": [],
        "name": "implicitThis",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 850,
          "end": 859,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 851,
            "end": 859,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 853,
              "end": 859
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 860,
        "end": 868,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 862,
          "end": 868
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 1228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 905,
          "end": 1228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 912,
            "decorators": [],
            "name": "impl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 909,
              "end": 912,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 911,
                "end": 912,
                "typeName": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 912,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 915,
            "end": 1228,
            "properties": [
              {
                "type": "Property",
                "start": 921,
                "end": 926,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 922,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 924,
                  "end": 926,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 932,
                "end": 959,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 932,
                  "end": 945,
                  "decorators": [],
                  "name": "explicitVoid2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 947,
                  "end": 959,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 953,
                    "end": 959,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 953,
                      "end": 957
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 958,
                      "end": 959,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 1031,
                "end": 1061,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1031,
                  "end": 1044,
                  "decorators": [],
                  "name": "explicitVoid1",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1044,
                  "end": 1061,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1047,
                    "end": 1061,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1049,
                        "end": 1059,
                        "argument": {
                          "type": "Literal",
                          "start": 1056,
                          "end": 1058,
                          "raw": "12",
                          "value": 12
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
                "type": "Property",
                "start": 1067,
                "end": 1118,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1067,
                  "end": 1085,
                  "decorators": [],
                  "name": "explicitStructural",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1085,
                  "end": 1118,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1088,
                    "end": 1118,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1098,
                        "end": 1112,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 1105,
                          "end": 1111,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1105,
                            "end": 1109
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1111,
                            "decorators": [],
                            "name": "a",
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
                "type": "Property",
                "start": 1124,
                "end": 1174,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1141,
                  "decorators": [],
                  "name": "explicitInterface",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1141,
                  "end": 1174,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1144,
                    "end": 1174,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1154,
                        "end": 1168,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 1161,
                          "end": 1167,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1161,
                            "end": 1165
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1166,
                            "end": 1167,
                            "decorators": [],
                            "name": "a",
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
                "type": "Property",
                "start": 1180,
                "end": 1225,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1180,
                  "end": 1192,
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1192,
                  "end": 1225,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1195,
                    "end": 1225,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1205,
                        "end": 1219,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 1212,
                          "end": 1218,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1212,
                            "end": 1216
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1217,
                            "end": 1218,
                            "decorators": [],
                            "name": "a",
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
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1229,
      "end": 1277,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1229,
        "end": 1276,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1229,
          "end": 1247,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1229,
            "end": 1233,
            "decorators": [],
            "name": "impl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1234,
            "end": 1247,
            "decorators": [],
            "name": "explicitVoid1",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1250,
          "end": 1276,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1262,
            "end": 1276,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1264,
                "end": 1274,
                "argument": {
                  "type": "Literal",
                  "start": 1271,
                  "end": 1273,
                  "raw": "12",
                  "value": 12
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1278,
      "end": 1308,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1278,
        "end": 1307,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1278,
          "end": 1296,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1278,
            "end": 1282,
            "decorators": [],
            "name": "impl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1283,
            "end": 1296,
            "decorators": [],
            "name": "explicitVoid2",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1299,
          "end": 1307,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 1305,
            "end": 1307,
            "raw": "12",
            "value": 12
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1309,
      "end": 1365,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1309,
        "end": 1364,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1309,
          "end": 1332,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1309,
            "end": 1313,
            "decorators": [],
            "name": "impl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1314,
            "end": 1332,
            "decorators": [],
            "name": "explicitStructural",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1335,
          "end": 1364,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1346,
            "end": 1364,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1348,
                "end": 1362,
                "argument": {
                  "type": "MemberExpression",
                  "start": 1355,
                  "end": 1361,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 1355,
                    "end": 1359
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1360,
                    "end": 1361,
                    "decorators": [],
                    "name": "a",
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1366,
      "end": 1421,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1366,
        "end": 1420,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1366,
          "end": 1388,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1366,
            "end": 1370,
            "decorators": [],
            "name": "impl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1371,
            "end": 1388,
            "decorators": [],
            "name": "explicitInterface",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1391,
          "end": 1420,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1402,
            "end": 1420,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1404,
                "end": 1418,
                "argument": {
                  "type": "MemberExpression",
                  "start": 1411,
                  "end": 1417,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 1411,
                    "end": 1415
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1416,
                    "end": 1417,
                    "decorators": [],
                    "name": "a",
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1422,
      "end": 1457,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1422,
        "end": 1456,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1422,
          "end": 1445,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1422,
            "end": 1426,
            "decorators": [],
            "name": "impl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1427,
            "end": 1445,
            "decorators": [],
            "name": "explicitStructural",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1448,
          "end": 1456,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 1454,
            "end": 1456,
            "raw": "12",
            "value": 12
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1458,
      "end": 1492,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1458,
        "end": 1491,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1458,
          "end": 1480,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1458,
            "end": 1462,
            "decorators": [],
            "name": "impl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1463,
            "end": 1480,
            "decorators": [],
            "name": "explicitInterface",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1483,
          "end": 1491,
          "async": false,
          "body": {
            "type": "Literal",
            "start": 1489,
            "end": 1491,
            "raw": "12",
            "value": 12
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1493,
      "end": 1544,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1493,
        "end": 1543,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1493,
          "end": 1510,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1493,
            "end": 1497,
            "decorators": [],
            "name": "impl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1498,
            "end": 1510,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1513,
          "end": 1543,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1525,
            "end": 1543,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1527,
                "end": 1541,
                "argument": {
                  "type": "MemberExpression",
                  "start": 1534,
                  "end": 1540,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 1534,
                    "end": 1538
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1539,
                    "end": 1540,
                    "decorators": [],
                    "name": "a",
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1567,
      "end": 1669,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1571,
          "end": 1668,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1571,
            "end": 1633,
            "decorators": [],
            "name": "ok",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1573,
              "end": 1633,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1575,
                "end": 1633,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1576,
                    "end": 1586,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1576,
                      "end": 1577,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1577,
                      "end": 1585,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1579,
                        "end": 1585
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1587,
                    "end": 1632,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1587,
                      "end": 1588,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1588,
                      "end": 1632,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1590,
                        "end": 1632,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1591,
                            "end": 1610,
                            "decorators": [],
                            "name": "this",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1595,
                              "end": 1610,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 1597,
                                "end": 1610,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 1599,
                                    "end": 1608,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1599,
                                      "end": 1600,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1600,
                                      "end": 1608,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1602,
                                        "end": 1608
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1612,
                            "end": 1621,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1613,
                              "end": 1621,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1615,
                                "end": 1621
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1623,
                          "end": 1632,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1626,
                            "end": 1632
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1636,
            "end": 1668,
            "properties": [
              {
                "type": "Property",
                "start": 1638,
                "end": 1643,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1638,
                  "end": 1639,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1641,
                  "end": 1643,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 1645,
                "end": 1666,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1645,
                  "end": 1646,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1666,
                  "decorators": [],
                  "name": "explicitStructural",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1670,
      "end": 1778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1674,
          "end": 1777,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1674,
            "end": 1737,
            "decorators": [],
            "name": "implicitAnyOk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1687,
              "end": 1737,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1689,
                "end": 1737,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1690,
                    "end": 1711,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1690,
                      "end": 1702,
                      "decorators": [],
                      "name": "notSpecified",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1702,
                      "end": 1710,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1704,
                        "end": 1710
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1712,
                    "end": 1736,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1712,
                      "end": 1713,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1713,
                      "end": 1736,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1715,
                        "end": 1736,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1716,
                            "end": 1725,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1717,
                              "end": 1725,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1719,
                                "end": 1725
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1727,
                          "end": 1736,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1730,
                            "end": 1736
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1740,
            "end": 1777,
            "properties": [
              {
                "type": "Property",
                "start": 1742,
                "end": 1758,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1742,
                  "end": 1754,
                  "decorators": [],
                  "name": "notSpecified",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1756,
                  "end": 1758,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 1760,
                "end": 1775,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1760,
                  "end": 1761,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1763,
                  "end": 1775,
                  "decorators": [],
                  "name": "implicitThis",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1779,
      "end": 1788,
      "expression": {
        "type": "CallExpression",
        "start": 1779,
        "end": 1787,
        "arguments": [
          {
            "type": "Literal",
            "start": 1784,
            "end": 1786,
            "raw": "13",
            "value": 13
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1779,
          "end": 1783,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1779,
            "end": 1781,
            "decorators": [],
            "name": "ok",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1782,
            "end": 1783,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1789,
      "end": 1806,
      "expression": {
        "type": "CallExpression",
        "start": 1789,
        "end": 1805,
        "arguments": [
          {
            "type": "Literal",
            "start": 1802,
            "end": 1804,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1789,
          "end": 1801,
          "decorators": [],
          "name": "implicitThis",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1807,
      "end": 1827,
      "expression": {
        "type": "CallExpression",
        "start": 1807,
        "end": 1826,
        "arguments": [
          {
            "type": "Literal",
            "start": 1823,
            "end": 1825,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1807,
          "end": 1822,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1807,
            "end": 1820,
            "decorators": [],
            "name": "implicitAnyOk",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1821,
            "end": 1822,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1829,
      "end": 1845,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1833,
          "end": 1844,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1833,
            "end": 1834,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1837,
            "end": 1844,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1841,
              "end": 1842,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1846,
      "end": 1862,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1850,
          "end": 1861,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1850,
            "end": 1851,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1854,
            "end": 1861,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1858,
              "end": 1859,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1863,
      "end": 1888,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1867,
          "end": 1887,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1867,
            "end": 1873,
            "decorators": [],
            "name": "ripped",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1876,
            "end": 1887,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1876,
              "end": 1877,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1878,
              "end": 1887,
              "decorators": [],
              "name": "explicitC",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1889,
      "end": 1905,
      "expression": {
        "type": "CallExpression",
        "start": 1889,
        "end": 1904,
        "arguments": [
          {
            "type": "Literal",
            "start": 1901,
            "end": 1903,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1889,
          "end": 1900,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1889,
            "end": 1890,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1891,
            "end": 1900,
            "decorators": [],
            "name": "explicitC",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1906,
      "end": 1929,
      "expression": {
        "type": "CallExpression",
        "start": 1906,
        "end": 1928,
        "arguments": [
          {
            "type": "Literal",
            "start": 1925,
            "end": 1927,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1906,
          "end": 1924,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1906,
            "end": 1907,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1908,
            "end": 1924,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1930,
      "end": 1949,
      "expression": {
        "type": "CallExpression",
        "start": 1930,
        "end": 1948,
        "arguments": [
          {
            "type": "Literal",
            "start": 1945,
            "end": 1947,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1930,
          "end": 1944,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1930,
            "end": 1931,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1932,
            "end": 1944,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1950,
      "end": 1966,
      "expression": {
        "type": "CallExpression",
        "start": 1950,
        "end": 1965,
        "arguments": [
          {
            "type": "Literal",
            "start": 1962,
            "end": 1964,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1950,
          "end": 1961,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1950,
            "end": 1951,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1952,
            "end": 1961,
            "decorators": [],
            "name": "explicitC",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1967,
      "end": 1990,
      "expression": {
        "type": "CallExpression",
        "start": 1967,
        "end": 1989,
        "arguments": [
          {
            "type": "Literal",
            "start": 1986,
            "end": 1988,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1967,
          "end": 1985,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1967,
            "end": 1968,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1969,
            "end": 1985,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1991,
      "end": 2010,
      "expression": {
        "type": "CallExpression",
        "start": 1991,
        "end": 2009,
        "arguments": [
          {
            "type": "Literal",
            "start": 2006,
            "end": 2008,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1991,
          "end": 2005,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1991,
            "end": 1992,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1993,
            "end": 2005,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2011,
      "end": 2470,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2015,
          "end": 2469,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2015,
            "end": 2314,
            "decorators": [],
            "name": "reconstructed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2028,
              "end": 2314,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2030,
                "end": 2314,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2037,
                    "end": 2047,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2037,
                      "end": 2038,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2038,
                      "end": 2046,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2040,
                        "end": 2046
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2052,
                    "end": 2093,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2052,
                      "end": 2064,
                      "decorators": [],
                      "name": "explicitThis",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2065,
                        "end": 2072,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2069,
                          "end": 2072,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2071,
                            "end": 2072,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2071,
                              "end": 2072,
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2074,
                        "end": 2083,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2075,
                          "end": 2083,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2077,
                            "end": 2083
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2084,
                      "end": 2092,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2086,
                        "end": 2092
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2160,
                    "end": 2198,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2160,
                      "end": 2169,
                      "decorators": [],
                      "name": "explicitC",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2170,
                        "end": 2177,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2174,
                          "end": 2177,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2176,
                            "end": 2177,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2176,
                              "end": 2177,
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2179,
                        "end": 2188,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2180,
                          "end": 2188,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2182,
                            "end": 2188
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2189,
                      "end": 2197,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2191,
                        "end": 2197
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2203,
                    "end": 2263,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2203,
                      "end": 2219,
                      "decorators": [],
                      "name": "explicitProperty",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2219,
                      "end": 2262,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2221,
                        "end": 2262,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2222,
                            "end": 2240,
                            "decorators": [],
                            "name": "this",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2226,
                              "end": 2240,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2228,
                                "end": 2240,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2229,
                                    "end": 2239,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2229,
                                      "end": 2230,
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2231,
                                      "end": 2239,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2233,
                                        "end": 2239
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 2242,
                            "end": 2251,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2243,
                              "end": 2251,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2245,
                                "end": 2251
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2253,
                          "end": 2262,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2256,
                            "end": 2262
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2268,
                    "end": 2312,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2268,
                      "end": 2280,
                      "decorators": [],
                      "name": "explicitVoid",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2281,
                        "end": 2291,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2285,
                          "end": 2291,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 2287,
                            "end": 2291
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2293,
                        "end": 2302,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2294,
                          "end": 2302,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2296,
                            "end": 2302
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2303,
                      "end": 2311,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2305,
                        "end": 2311
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2317,
            "end": 2469,
            "properties": [
              {
                "type": "Property",
                "start": 2324,
                "end": 2329,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2324,
                  "end": 2325,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2327,
                  "end": 2329,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 2335,
                "end": 2363,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2335,
                  "end": 2347,
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 2349,
                  "end": 2363,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2349,
                    "end": 2350,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2351,
                    "end": 2363,
                    "decorators": [],
                    "name": "explicitThis",
                    "optional": false
                  }
                }
              },
              {
                "type": "Property",
                "start": 2369,
                "end": 2391,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2369,
                  "end": 2378,
                  "decorators": [],
                  "name": "explicitC",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 2380,
                  "end": 2391,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2380,
                    "end": 2381,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2382,
                    "end": 2391,
                    "decorators": [],
                    "name": "explicitC",
                    "optional": false
                  }
                }
              },
              {
                "type": "Property",
                "start": 2397,
                "end": 2433,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2397,
                  "end": 2413,
                  "decorators": [],
                  "name": "explicitProperty",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 2415,
                  "end": 2433,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2415,
                    "end": 2416,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2417,
                    "end": 2433,
                    "decorators": [],
                    "name": "explicitProperty",
                    "optional": false
                  }
                }
              },
              {
                "type": "Property",
                "start": 2439,
                "end": 2467,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2439,
                  "end": 2451,
                  "decorators": [],
                  "name": "explicitVoid",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 2453,
                  "end": 2467,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2453,
                    "end": 2454,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2455,
                    "end": 2467,
                    "decorators": [],
                    "name": "explicitVoid",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2471,
      "end": 2502,
      "expression": {
        "type": "CallExpression",
        "start": 2471,
        "end": 2501,
        "arguments": [
          {
            "type": "Literal",
            "start": 2498,
            "end": 2500,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2471,
          "end": 2497,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2471,
            "end": 2484,
            "decorators": [],
            "name": "reconstructed",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2485,
            "end": 2497,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2503,
      "end": 2538,
      "expression": {
        "type": "CallExpression",
        "start": 2503,
        "end": 2537,
        "arguments": [
          {
            "type": "Literal",
            "start": 2534,
            "end": 2536,
            "raw": "11",
            "value": 11
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2503,
          "end": 2533,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2503,
            "end": 2516,
            "decorators": [],
            "name": "reconstructed",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2517,
            "end": 2533,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2539,
      "end": 2585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2543,
          "end": 2584,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2543,
            "end": 2555,
            "decorators": [],
            "name": "explicitVoid",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2558,
            "end": 2584,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2558,
              "end": 2571,
              "decorators": [],
              "name": "reconstructed",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2572,
              "end": 2584,
              "decorators": [],
              "name": "explicitVoid",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2586,
      "end": 2603,
      "expression": {
        "type": "CallExpression",
        "start": 2586,
        "end": 2602,
        "arguments": [
          {
            "type": "Literal",
            "start": 2599,
            "end": 2601,
            "raw": "12",
            "value": 12
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2586,
          "end": 2598,
          "decorators": [],
          "name": "explicitVoid",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2627,
      "end": 2712,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2631,
          "end": 2711,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2631,
            "end": 2693,
            "decorators": [],
            "name": "unboundToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2649,
              "end": 2693,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2651,
                "end": 2693,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2652,
                    "end": 2671,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2656,
                      "end": 2671,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2658,
                        "end": 2671,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2660,
                            "end": 2669,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2660,
                              "end": 2661,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2661,
                              "end": 2669,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2663,
                                "end": 2669
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2673,
                    "end": 2682,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2674,
                      "end": 2682,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2676,
                        "end": 2682
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2684,
                  "end": 2693,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2687,
                    "end": 2693
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2696,
            "end": 2711,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 2701,
              "end": 2711,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 2701,
                "end": 2702,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 2705,
                "end": 2711,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 2705,
                  "end": 2709
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2710,
                  "end": 2711,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2696,
                "end": 2697,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2729,
      "end": 2817,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2733,
          "end": 2816,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2733,
            "end": 2795,
            "decorators": [],
            "name": "specifiedToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2753,
              "end": 2795,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2755,
                "end": 2795,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2756,
                    "end": 2773,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2760,
                      "end": 2773,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2762,
                        "end": 2773,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2763,
                            "end": 2772,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2763,
                              "end": 2764,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2764,
                              "end": 2772,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2766,
                                "end": 2772
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2775,
                    "end": 2784,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2776,
                      "end": 2784,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2778,
                        "end": 2784
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2786,
                  "end": 2795,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2789,
                    "end": 2795
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 2798,
            "end": 2816,
            "decorators": [],
            "name": "explicitStructural",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2818,
      "end": 2930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2822,
          "end": 2929,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2822,
            "end": 2880,
            "decorators": [],
            "name": "anyToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2836,
              "end": 2880,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2838,
                "end": 2880,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2839,
                    "end": 2858,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2843,
                      "end": 2858,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2845,
                        "end": 2858,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2847,
                            "end": 2856,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2847,
                              "end": 2848,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2848,
                              "end": 2856,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2850,
                                "end": 2856
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2860,
                    "end": 2869,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2861,
                      "end": 2869,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2863,
                        "end": 2869
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2871,
                  "end": 2880,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2874,
                    "end": 2880
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 2883,
            "end": 2929,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2911,
              "end": 2929,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2913,
                  "end": 2927,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 2920,
                    "end": 2926,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 2920,
                      "end": 2921,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2924,
                      "end": 2926,
                      "raw": "12",
                      "value": 12
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
                "start": 2892,
                "end": 2901,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2893,
                  "end": 2901,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2895,
                    "end": 2901
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2902,
              "end": 2910,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2904,
                "end": 2910
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2932,
      "end": 2991,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2936,
          "end": 2990,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2936,
            "end": 2976,
            "decorators": [],
            "name": "unspecifiedLambda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2953,
              "end": 2976,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2955,
                "end": 2976,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2956,
                    "end": 2965,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2957,
                      "end": 2965,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2959,
                        "end": 2965
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2967,
                  "end": 2976,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2970,
                    "end": 2976
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2979,
            "end": 2990,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 2984,
              "end": 2990,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 2984,
                "end": 2985,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 2988,
                "end": 2990,
                "raw": "12",
                "value": 12
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2979,
                "end": 2980,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2992,
      "end": 3061,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2996,
          "end": 3060,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2996,
            "end": 3046,
            "decorators": [],
            "name": "specifiedLambda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3011,
              "end": 3046,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3013,
                "end": 3046,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3014,
                    "end": 3024,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3018,
                      "end": 3024,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3020,
                        "end": 3024
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3026,
                    "end": 3035,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3027,
                      "end": 3035,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3029,
                        "end": 3035
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3037,
                  "end": 3046,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3040,
                    "end": 3046
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3049,
            "end": 3060,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 3054,
              "end": 3060,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 3054,
                "end": 3055,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 3058,
                "end": 3060,
                "raw": "12",
                "value": 12
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3049,
                "end": 3050,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3062,
      "end": 3157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3066,
          "end": 3156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3066,
            "end": 3136,
            "decorators": [],
            "name": "unspecifiedLambdaToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3094,
              "end": 3136,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3096,
                "end": 3136,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3097,
                    "end": 3114,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3101,
                      "end": 3114,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3103,
                        "end": 3114,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3104,
                            "end": 3113,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3104,
                              "end": 3105,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3105,
                              "end": 3113,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3107,
                                "end": 3113
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3116,
                    "end": 3125,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3117,
                      "end": 3125,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3119,
                        "end": 3125
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3127,
                  "end": 3136,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3130,
                    "end": 3136
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 3139,
            "end": 3156,
            "decorators": [],
            "name": "unspecifiedLambda",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3158,
      "end": 3249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3162,
          "end": 3248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3162,
            "end": 3230,
            "decorators": [],
            "name": "specifiedLambdaToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3188,
              "end": 3230,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3190,
                "end": 3230,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3191,
                    "end": 3208,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3195,
                      "end": 3208,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3197,
                        "end": 3208,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3198,
                            "end": 3207,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3198,
                              "end": 3199,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3199,
                              "end": 3207,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3201,
                                "end": 3207
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3210,
                    "end": 3219,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3211,
                      "end": 3219,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3213,
                        "end": 3219
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3221,
                  "end": 3230,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3224,
                    "end": 3230
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 3233,
            "end": 3248,
            "decorators": [],
            "name": "specifiedLambda",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3252,
      "end": 3306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3256,
          "end": 3305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3256,
            "end": 3305,
            "decorators": [],
            "name": "explicitCFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3273,
              "end": 3305,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3275,
                "end": 3305,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3276,
                    "end": 3283,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3280,
                      "end": 3283,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3282,
                        "end": 3283,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3282,
                          "end": 3283,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3285,
                    "end": 3294,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3286,
                      "end": 3294,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3288,
                        "end": 3294
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3296,
                  "end": 3305,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3299,
                    "end": 3305
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3307,
      "end": 3378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3311,
          "end": 3377,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3311,
            "end": 3377,
            "decorators": [],
            "name": "explicitPropertyFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3335,
              "end": 3377,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3337,
                "end": 3377,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3338,
                    "end": 3355,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3342,
                      "end": 3355,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3344,
                        "end": 3355,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3345,
                            "end": 3354,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3345,
                              "end": 3346,
                              "decorators": [],
                              "name": "n",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3346,
                              "end": 3354,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3348,
                                "end": 3354
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3357,
                    "end": 3366,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3358,
                      "end": 3366,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3360,
                        "end": 3366
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3368,
                  "end": 3377,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3371,
                    "end": 3377
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 3379,
      "end": 3411,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3379,
        "end": 3410,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3379,
          "end": 3390,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3379,
            "end": 3380,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3381,
            "end": 3390,
            "decorators": [],
            "name": "explicitC",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3393,
          "end": 3410,
          "decorators": [],
          "name": "explicitCFunction",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3412,
      "end": 3477,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3412,
        "end": 3476,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3412,
          "end": 3423,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3412,
            "end": 3413,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3414,
            "end": 3423,
            "decorators": [],
            "name": "explicitC",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 3426,
          "end": 3476,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 3455,
            "end": 3476,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 3457,
                "end": 3474,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 3464,
                  "end": 3474,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 3464,
                    "end": 3470,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 3464,
                      "end": 3468
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3469,
                      "end": 3470,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3473,
                    "end": 3474,
                    "decorators": [],
                    "name": "m",
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
              "start": 3435,
              "end": 3442,
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3439,
                "end": 3442,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3441,
                  "end": 3442,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3441,
                    "end": 3442,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 3444,
              "end": 3453,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3445,
                "end": 3453,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3447,
                  "end": 3453
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3478,
      "end": 3524,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3478,
        "end": 3523,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3478,
          "end": 3496,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3478,
            "end": 3479,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3480,
            "end": 3496,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3499,
          "end": 3523,
          "decorators": [],
          "name": "explicitPropertyFunction",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3525,
      "end": 3607,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3525,
        "end": 3606,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3525,
          "end": 3543,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3525,
            "end": 3526,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3527,
            "end": 3543,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 3546,
          "end": 3606,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 3585,
            "end": 3606,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 3587,
                "end": 3604,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 3594,
                  "end": 3604,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 3594,
                    "end": 3600,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 3594,
                      "end": 3598
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3599,
                      "end": 3600,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3603,
                    "end": 3604,
                    "decorators": [],
                    "name": "m",
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
              "start": 3555,
              "end": 3572,
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3559,
                "end": 3572,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 3561,
                  "end": 3572,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3562,
                      "end": 3571,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3562,
                        "end": 3563,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3563,
                        "end": 3571,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3565,
                          "end": 3571
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "Identifier",
              "start": 3574,
              "end": 3583,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3575,
                "end": 3583,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3577,
                  "end": 3583
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3608,
      "end": 3660,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3608,
        "end": 3659,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3608,
          "end": 3626,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3608,
            "end": 3609,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3610,
            "end": 3626,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 3629,
          "end": 3659,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3629,
            "end": 3642,
            "decorators": [],
            "name": "reconstructed",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3643,
            "end": 3659,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3700,
      "end": 3721,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3700,
        "end": 3720,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3700,
          "end": 3711,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3700,
            "end": 3701,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3702,
            "end": 3711,
            "decorators": [],
            "name": "explicitC",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3714,
          "end": 3720,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 3719,
            "end": 3720,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3714,
              "end": 3715,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3722,
      "end": 3746,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3722,
        "end": 3745,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3722,
          "end": 3736,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3722,
            "end": 3723,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3724,
            "end": 3736,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3739,
          "end": 3745,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 3744,
            "end": 3745,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3739,
              "end": 3740,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3747,
      "end": 3775,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3747,
        "end": 3774,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3747,
          "end": 3765,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3747,
            "end": 3748,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3749,
            "end": 3765,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3768,
          "end": 3774,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 3773,
            "end": 3774,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3768,
              "end": 3769,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3881,
      "end": 3911,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3881,
        "end": 3910,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3881,
          "end": 3892,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3881,
            "end": 3882,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3883,
            "end": 3892,
            "decorators": [],
            "name": "explicitC",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3895,
          "end": 3910,
          "async": false,
          "body": {
            "type": "BinaryExpression",
            "start": 3900,
            "end": 3910,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 3900,
              "end": 3901,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 3904,
              "end": 3910,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 3904,
                "end": 3908
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3909,
                "end": 3910,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3895,
              "end": 3896,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3912,
      "end": 3945,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3912,
        "end": 3944,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3912,
          "end": 3926,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3912,
            "end": 3913,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3914,
            "end": 3926,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3929,
          "end": 3944,
          "async": false,
          "body": {
            "type": "BinaryExpression",
            "start": 3934,
            "end": 3944,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 3934,
              "end": 3935,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 3938,
              "end": 3944,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 3938,
                "end": 3942
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3943,
                "end": 3944,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3929,
              "end": 3930,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3946,
      "end": 3983,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3946,
        "end": 3982,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3946,
          "end": 3964,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3946,
            "end": 3947,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3948,
            "end": 3964,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3967,
          "end": 3982,
          "async": false,
          "body": {
            "type": "BinaryExpression",
            "start": 3972,
            "end": 3982,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 3972,
              "end": 3973,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 3976,
              "end": 3982,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 3976,
                "end": 3980
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3981,
                "end": 3982,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3967,
              "end": 3968,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4015,
      "end": 4050,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4015,
        "end": 4049,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4015,
          "end": 4029,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4015,
            "end": 4016,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4017,
            "end": 4029,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 4032,
          "end": 4049,
          "decorators": [],
          "name": "explicitCFunction",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4051,
      "end": 4119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4051,
        "end": 4118,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4051,
          "end": 4065,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4051,
            "end": 4052,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4053,
            "end": 4065,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4068,
          "end": 4118,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 4097,
            "end": 4118,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 4099,
                "end": 4116,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 4106,
                  "end": 4116,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 4106,
                    "end": 4112,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4106,
                      "end": 4110
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4111,
                      "end": 4112,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4115,
                    "end": 4116,
                    "decorators": [],
                    "name": "m",
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
              "start": 4077,
              "end": 4084,
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4081,
                "end": 4084,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4083,
                  "end": 4084,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4083,
                    "end": 4084,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 4086,
              "end": 4095,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4087,
                "end": 4095,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4089,
                  "end": 4095
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4147,
      "end": 4195,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4147,
        "end": 4194,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4147,
          "end": 4158,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4147,
            "end": 4148,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4149,
            "end": 4158,
            "decorators": [],
            "name": "explicitC",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4161,
          "end": 4194,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 4173,
            "end": 4194,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 4175,
                "end": 4192,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 4182,
                  "end": 4192,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 4182,
                    "end": 4188,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4182,
                      "end": 4186
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4187,
                      "end": 4188,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4191,
                    "end": 4192,
                    "decorators": [],
                    "name": "m",
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
              "start": 4170,
              "end": 4171,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4196,
      "end": 4251,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4196,
        "end": 4250,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4196,
          "end": 4214,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4196,
            "end": 4197,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4198,
            "end": 4214,
            "decorators": [],
            "name": "explicitProperty",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4217,
          "end": 4250,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 4229,
            "end": 4250,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 4231,
                "end": 4248,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 4238,
                  "end": 4248,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 4238,
                    "end": 4244,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4238,
                      "end": 4242
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4243,
                      "end": 4244,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4247,
                    "end": 4248,
                    "decorators": [],
                    "name": "m",
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
              "start": 4226,
              "end": 4227,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4252,
      "end": 4303,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4252,
        "end": 4302,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4252,
          "end": 4266,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4252,
            "end": 4253,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4254,
            "end": 4266,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4269,
          "end": 4302,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 4281,
            "end": 4302,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 4283,
                "end": 4300,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 4290,
                  "end": 4300,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 4290,
                    "end": 4296,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4290,
                      "end": 4294
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4295,
                      "end": 4296,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4299,
                    "end": 4300,
                    "decorators": [],
                    "name": "m",
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
              "start": 4278,
              "end": 4279,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4332,
      "end": 4389,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4332,
        "end": 4388,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4332,
          "end": 4346,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4332,
            "end": 4333,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4334,
            "end": 4346,
            "decorators": [],
            "name": "explicitThis",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4349,
          "end": 4388,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 4367,
            "end": 4388,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 4369,
                "end": 4386,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 4376,
                  "end": 4386,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 4376,
                    "end": 4382,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4376,
                      "end": 4380
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4381,
                      "end": 4382,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4385,
                    "end": 4386,
                    "decorators": [],
                    "name": "m",
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
              "start": 4358,
              "end": 4362,
              "decorators": [],
              "name": "this",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 4364,
              "end": 4365,
              "decorators": [],
              "name": "m",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4425,
      "end": 4490,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4425,
        "end": 4489,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4425,
          "end": 4436,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4425,
            "end": 4426,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4427,
            "end": 4436,
            "decorators": [],
            "name": "explicitC",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4439,
          "end": 4489,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 4468,
            "end": 4489,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 4470,
                "end": 4487,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 4477,
                  "end": 4487,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 4477,
                    "end": 4483,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4477,
                      "end": 4481
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4482,
                      "end": 4483,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4486,
                    "end": 4487,
                    "decorators": [],
                    "name": "m",
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
              "start": 4448,
              "end": 4455,
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4452,
                "end": 4455,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4454,
                  "end": 4455,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4454,
                    "end": 4455,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 4457,
              "end": 4466,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4458,
                "end": 4466,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4460,
                  "end": 4466
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4519,
      "end": 4543,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4519,
        "end": 4542,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4519,
          "end": 4533,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4519,
            "end": 4520,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4521,
            "end": 4533,
            "decorators": [],
            "name": "explicitVoid",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 4536,
          "end": 4542,
          "async": false,
          "body": {
            "type": "Identifier",
            "start": 4541,
            "end": 4542,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 4536,
              "end": 4537,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 4574,
      "end": 4814,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4586,
        "end": 4814,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4592,
            "end": 4602,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4592,
              "end": 4593,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4593,
              "end": 4601,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4595,
                "end": 4601
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 4607,
            "end": 4664,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4614,
              "end": 4625,
              "decorators": [],
              "name": "polymorphic",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4625,
              "end": 4664,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4646,
                "end": 4664,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4648,
                    "end": 4662,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 4655,
                      "end": 4661,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4655,
                        "end": 4659
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4660,
                        "end": 4661,
                        "decorators": [],
                        "name": "x",
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
                  "start": 4626,
                  "end": 4636,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4630,
                    "end": 4636,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 4632,
                      "end": 4636
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4637,
                "end": 4645,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4639,
                  "end": 4645
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4669,
            "end": 4717,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4669,
              "end": 4677,
              "decorators": [],
              "name": "explicit",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4677,
              "end": 4717,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4699,
                "end": 4717,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4701,
                    "end": 4715,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 4708,
                      "end": 4714,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4708,
                        "end": 4712
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4713,
                        "end": 4714,
                        "decorators": [],
                        "name": "x",
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
                  "start": 4678,
                  "end": 4689,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4682,
                    "end": 4689,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4684,
                      "end": 4689,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4684,
                        "end": 4689,
                        "decorators": [],
                        "name": "Base1",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4690,
                "end": 4698,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4692,
                  "end": 4698
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4722,
            "end": 4790,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4729,
              "end": 4743,
              "decorators": [],
              "name": "explicitStatic",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4743,
              "end": 4790,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4772,
                "end": 4790,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4774,
                    "end": 4788,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 4781,
                      "end": 4787,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4781,
                        "end": 4785
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4786,
                        "end": 4787,
                        "decorators": [],
                        "name": "y",
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
                  "start": 4744,
                  "end": 4762,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4748,
                    "end": 4762,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 4750,
                      "end": 4762,
                      "exprName": {
                        "type": "Identifier",
                        "start": 4757,
                        "end": 4762,
                        "decorators": [],
                        "name": "Base1",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4763,
                "end": 4771,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4765,
                  "end": 4771
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 4795,
            "end": 4812,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4802,
              "end": 4803,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4803,
              "end": 4811,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4805,
                "end": 4811
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
        "start": 4580,
        "end": 4585,
        "decorators": [],
        "name": "Base1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4815,
      "end": 4861,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4844,
        "end": 4861,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4850,
            "end": 4859,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4850,
              "end": 4851,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4851,
              "end": 4859,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4853,
                "end": 4859
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
        "start": 4821,
        "end": 4829,
        "decorators": [],
        "name": "Derived1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 4838,
        "end": 4843,
        "decorators": [],
        "name": "Base1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 4862,
      "end": 4999,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4874,
        "end": 4999,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4880,
            "end": 4889,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4880,
              "end": 4881,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4881,
              "end": 4889,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4883,
                "end": 4889
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 4894,
            "end": 4944,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4894,
              "end": 4905,
              "decorators": [],
              "name": "polymorphic",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4905,
              "end": 4944,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4926,
                "end": 4944,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4928,
                    "end": 4942,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 4935,
                      "end": 4941,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4935,
                        "end": 4939
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4940,
                        "end": 4941,
                        "decorators": [],
                        "name": "y",
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
                  "start": 4906,
                  "end": 4916,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4910,
                    "end": 4916,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 4912,
                      "end": 4916
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4917,
                "end": 4925,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4919,
                  "end": 4925
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4949,
            "end": 4997,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4949,
              "end": 4957,
              "decorators": [],
              "name": "explicit",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4957,
              "end": 4997,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4979,
                "end": 4997,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4981,
                    "end": 4995,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 4988,
                      "end": 4994,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4988,
                        "end": 4992
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4993,
                        "end": 4994,
                        "decorators": [],
                        "name": "x",
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
                  "start": 4958,
                  "end": 4969,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4962,
                    "end": 4969,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4964,
                      "end": 4969,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4964,
                        "end": 4969,
                        "decorators": [],
                        "name": "Base1",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4970,
                "end": 4978,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4972,
                  "end": 4978
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
        "start": 4868,
        "end": 4873,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 5000,
      "end": 5046,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 5029,
        "end": 5046,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5035,
            "end": 5044,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5035,
              "end": 5036,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5036,
              "end": 5044,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5038,
                "end": 5044
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
        "start": 5006,
        "end": 5014,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 5023,
        "end": 5028,
        "decorators": [],
        "name": "Base2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5047,
      "end": 5068,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5051,
          "end": 5067,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5051,
            "end": 5053,
            "decorators": [],
            "name": "b1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5056,
            "end": 5067,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5060,
              "end": 5065,
              "decorators": [],
              "name": "Base1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 5069,
      "end": 5090,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5073,
          "end": 5089,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5073,
            "end": 5075,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5078,
            "end": 5089,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5082,
              "end": 5087,
              "decorators": [],
              "name": "Base2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 5091,
      "end": 5115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5095,
          "end": 5114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5095,
            "end": 5097,
            "decorators": [],
            "name": "d1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5100,
            "end": 5114,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5104,
              "end": 5112,
              "decorators": [],
              "name": "Derived1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 5116,
      "end": 5140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5120,
          "end": 5139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5120,
            "end": 5122,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5125,
            "end": 5139,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5129,
              "end": 5137,
              "decorators": [],
              "name": "Derived2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 5141,
      "end": 5172,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5141,
        "end": 5172,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5141,
          "end": 5155,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5141,
            "end": 5143,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5144,
            "end": 5155,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 5158,
          "end": 5172,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5158,
            "end": 5160,
            "decorators": [],
            "name": "d1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5161,
            "end": 5172,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5204,
      "end": 5235,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5204,
        "end": 5235,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5204,
          "end": 5218,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5204,
            "end": 5206,
            "decorators": [],
            "name": "d1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5207,
            "end": 5218,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 5221,
          "end": 5235,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5221,
            "end": 5223,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5224,
            "end": 5235,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5296,
      "end": 5327,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5296,
        "end": 5327,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5296,
          "end": 5310,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5296,
            "end": 5298,
            "decorators": [],
            "name": "d1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5299,
            "end": 5310,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 5313,
          "end": 5327,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5313,
            "end": 5315,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5316,
            "end": 5327,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5354,
      "end": 5382,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5354,
        "end": 5382,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5354,
          "end": 5368,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5354,
            "end": 5356,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5357,
            "end": 5368,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 5371,
          "end": 5382,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5371,
            "end": 5373,
            "decorators": [],
            "name": "d1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5374,
            "end": 5382,
            "decorators": [],
            "name": "explicit",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5406,
      "end": 5437,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5406,
        "end": 5437,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5406,
          "end": 5420,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5406,
            "end": 5408,
            "decorators": [],
            "name": "b1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5409,
            "end": 5420,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 5423,
          "end": 5437,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5423,
            "end": 5425,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5426,
            "end": 5437,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5477,
      "end": 5505,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5477,
        "end": 5505,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 5477,
          "end": 5488,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5477,
            "end": 5479,
            "decorators": [],
            "name": "b1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5480,
            "end": 5488,
            "decorators": [],
            "name": "explicit",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 5491,
          "end": 5505,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5491,
            "end": 5493,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5494,
            "end": 5505,
            "decorators": [],
            "name": "polymorphic",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 5598,
      "end": 5650,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5630,
        "end": 5650,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5636,
            "end": 5648,
            "expression": {
              "type": "AssignmentExpression",
              "start": 5636,
              "end": 5647,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 5636,
                "end": 5642,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 5636,
                  "end": 5640
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 5641,
                  "end": 5642,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 5645,
                "end": 5647,
                "raw": "12",
                "value": 12
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
        "start": 5607,
        "end": 5620,
        "decorators": [],
        "name": "InterfaceThis",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5621,
          "end": 5628,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5625,
            "end": 5628,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5627,
              "end": 5628,
              "typeName": {
                "type": "Identifier",
                "start": 5627,
                "end": 5628,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 5651,
      "end": 5717,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5695,
        "end": 5717,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5701,
            "end": 5715,
            "expression": {
              "type": "AssignmentExpression",
              "start": 5701,
              "end": 5714,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 5701,
                "end": 5707,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 5701,
                  "end": 5705
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 5706,
                  "end": 5707,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 5710,
                "end": 5714,
                "raw": "\"ok\"",
                "value": "ok"
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
        "start": 5660,
        "end": 5675,
        "decorators": [],
        "name": "LiteralTypeThis",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5676,
          "end": 5693,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5680,
            "end": 5693,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 5682,
              "end": 5693,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5683,
                  "end": 5692,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5683,
                    "end": 5684,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5684,
                    "end": 5692,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5686,
                      "end": 5692
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 5718,
      "end": 5768,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5746,
        "end": 5768,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5752,
            "end": 5766,
            "expression": {
              "type": "AssignmentExpression",
              "start": 5752,
              "end": 5765,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 5752,
                "end": 5758,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 5752,
                  "end": 5756
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 5757,
                  "end": 5758,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 5761,
                "end": 5765,
                "raw": "\"ok\"",
                "value": "ok"
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
        "start": 5727,
        "end": 5734,
        "decorators": [],
        "name": "AnyThis",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5735,
          "end": 5744,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5739,
            "end": 5744,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 5741,
              "end": 5744
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 5769,
      "end": 5809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5773,
          "end": 5808,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5773,
            "end": 5786,
            "decorators": [],
            "name": "interfaceThis",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5789,
            "end": 5808,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5793,
              "end": 5806,
              "decorators": [],
              "name": "InterfaceThis",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 5810,
      "end": 5854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5814,
          "end": 5853,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5814,
            "end": 5829,
            "decorators": [],
            "name": "literalTypeThis",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5832,
            "end": 5853,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5836,
              "end": 5851,
              "decorators": [],
              "name": "LiteralTypeThis",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 5855,
      "end": 5883,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5859,
          "end": 5882,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5859,
            "end": 5866,
            "decorators": [],
            "name": "anyThis",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5869,
            "end": 5882,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5873,
              "end": 5880,
              "decorators": [],
              "name": "AnyThis",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 5920,
      "end": 6047,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5932,
          "end": 6046,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5932,
            "end": 6046,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5933,
              "end": 6046,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 5935,
                "end": 6046,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 5942,
                    "end": 5974,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5943,
                        "end": 5953,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5947,
                          "end": 5953,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 5949,
                            "end": 5953
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 5955,
                        "end": 5964,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5956,
                          "end": 5964,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 5958,
                            "end": 5964
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5965,
                      "end": 5973,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 5967,
                        "end": 5973
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5980,
                    "end": 6044,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5980,
                      "end": 5984,
                      "decorators": [],
                      "name": "call",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5988,
                        "end": 6019,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5992,
                          "end": 6019,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 5994,
                            "end": 6019,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 5995,
                                "end": 6013,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 5998,
                                  "end": 6006,
                                  "decorators": [],
                                  "name": "argArray",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 6006,
                                  "end": 6013,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 6008,
                                    "end": 6013,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 6008,
                                      "end": 6011
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 6015,
                              "end": 6019,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6018,
                                "end": 6019,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6018,
                                  "end": 6019,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 6021,
                        "end": 6039,
                        "argument": {
                          "type": "Identifier",
                          "start": 6024,
                          "end": 6032,
                          "decorators": [],
                          "name": "argArray",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6032,
                          "end": 6039,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 6034,
                            "end": 6039,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 6034,
                              "end": 6037
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 6040,
                      "end": 6043,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6042,
                        "end": 6043,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6042,
                          "end": 6043,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5984,
                      "end": 5987,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5985,
                          "end": 5986,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 5985,
                            "end": 5986,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6048,
      "end": 6075,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6052,
          "end": 6074,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6052,
            "end": 6061,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6053,
              "end": 6061,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6055,
                "end": 6061
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 6064,
            "end": 6074,
            "arguments": [
              {
                "type": "Literal",
                "start": 6071,
                "end": 6073,
                "raw": "12",
                "value": 12
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6064,
              "end": 6070,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6064,
                "end": 6065,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6066,
                "end": 6070,
                "decorators": [],
                "name": "call",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 6077,
      "end": 6157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6128,
        "end": 6157,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 6130,
            "end": 6155,
            "argument": {
              "type": "BinaryExpression",
              "start": 6137,
              "end": 6154,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 6137,
                "end": 6150,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 6137,
                  "end": 6141
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 6142,
                  "end": 6150,
                  "decorators": [],
                  "name": "anything",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 6153,
                "end": 6154,
                "decorators": [],
                "name": "a",
                "optional": false
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
        "start": 6086,
        "end": 6110,
        "decorators": [],
        "name": "missingTypeIsImplicitAny",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6111,
          "end": 6115,
          "decorators": [],
          "name": "this",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 6117,
          "end": 6126,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6118,
            "end": 6126,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 6120,
              "end": 6126
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
