__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "n",
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
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
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
      "start": 44,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 402,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "n",
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
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 151,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 85,
              "name": "explicitThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 151,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 86,
                  "end": 96,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 96,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 92,
                      "end": 96
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 107,
                  "name": "m",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 134,
                        "end": 140,
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 228,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 165,
              "name": "explicitC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 228,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 166,
                  "end": 173,
                  "name": "this",
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
                        "name": "C",
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
                  "start": 175,
                  "end": 184,
                  "name": "m",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 184,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 178,
                      "end": 184
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 211,
                        "end": 217,
                        "object": {
                          "type": "ThisExpression",
                          "start": 211,
                          "end": 215
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 217,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 322,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 249,
              "name": "explicitProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 249,
              "end": 322,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 250,
                  "end": 267,
                  "name": "this",
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 258,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 258,
                            "end": 266,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 260,
                              "end": 266
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 269,
                  "end": 278,
                  "name": "m",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 272,
                      "end": 278
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 305,
                        "end": 311,
                        "object": {
                          "type": "ThisExpression",
                          "start": 305,
                          "end": 309
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 311,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 400,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 339,
              "name": "explicitVoid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 339,
              "end": 400,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 340,
                  "end": 350,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 344,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 346,
                      "end": 350
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 352,
                  "end": 361,
                  "name": "m",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 361,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 355,
                      "end": 361
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "left": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 389,
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 392,
                        "end": 393,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 403,
      "end": 424,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 410,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 419,
        "end": 420,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 424,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 425,
      "end": 662,
      "id": {
        "type": "Identifier",
        "start": 435,
        "end": 436,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 452,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 446,
                "end": 452
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 458,
            "end": 492,
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 471,
              "name": "explicitVoid1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 482,
                "name": "this",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 476,
                  "end": 482,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 478,
                    "end": 482
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 497,
            "end": 531,
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 510,
              "name": "explicitVoid2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 511,
                "end": 521,
                "name": "this",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 515,
                  "end": 521,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 517,
                    "end": 521
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 536,
            "end": 582,
            "key": {
              "type": "Identifier",
              "start": 536,
              "end": 554,
              "name": "explicitStructural",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 555,
                "end": 572,
                "name": "this",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 562,
                          "end": 563,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 563,
                          "end": 571,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 565,
                            "end": 571
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 587,
            "end": 622,
            "key": {
              "type": "Identifier",
              "start": 587,
              "end": 604,
              "name": "explicitInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 605,
                "end": 612,
                "name": "this",
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
                      "name": "I",
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
              "start": 613,
              "end": 621,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 615,
                "end": 621
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 627,
            "end": 660,
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 639,
              "name": "explicitThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 640,
                "end": 650,
                "name": "this",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 644,
                  "end": 650,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 646,
                    "end": 650
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 663,
      "end": 757,
      "id": {
        "type": "Identifier",
        "start": 672,
        "end": 690,
        "name": "explicitStructural",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 691,
          "end": 710,
          "name": "this",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 699,
                    "end": 700,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 700,
                    "end": 708,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 702,
                      "end": 708
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 712,
          "end": 721,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 713,
            "end": 721,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 715,
              "end": 721
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "Identifier",
                "start": 744,
                "end": 745,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 748,
                "end": 754,
                "object": {
                  "type": "ThisExpression",
                  "start": 748,
                  "end": 752
                },
                "property": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 754,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 767,
        "end": 775,
        "name": "justThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 776,
          "end": 795,
          "name": "this",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 784,
                    "end": 785,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 785,
                    "end": 793,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 787,
                      "end": 793
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "object": {
                "type": "ThisExpression",
                "start": 818,
                "end": 822
              },
              "property": {
                "type": "Identifier",
                "start": 823,
                "end": 824,
                "name": "y",
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
      "id": {
        "type": "Identifier",
        "start": 837,
        "end": 849,
        "name": "implicitThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 850,
          "end": 859,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 851,
            "end": 859,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 853,
              "end": 859
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "BinaryExpression",
                "start": 882,
                "end": 892,
                "left": {
                  "type": "MemberExpression",
                  "start": 882,
                  "end": 888,
                  "object": {
                    "type": "ThisExpression",
                    "start": 882,
                    "end": 886
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 887,
                    "end": 888,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 891,
                  "end": 892,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 895,
                "end": 897,
                "value": 12,
                "raw": "12"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 912,
            "name": "impl",
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
                  "name": "I",
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
          "init": {
            "type": "ObjectExpression",
            "start": 915,
            "end": 1228,
            "properties": [
              {
                "type": "Property",
                "start": 921,
                "end": 926,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 922,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 924,
                  "end": 926,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 932,
                "end": 959,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 932,
                  "end": 945,
                  "name": "explicitVoid2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 947,
                  "end": 959,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "MemberExpression",
                    "start": 953,
                    "end": 959,
                    "object": {
                      "type": "ThisExpression",
                      "start": 953,
                      "end": 957
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 958,
                      "end": 959,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1031,
                "end": 1061,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1031,
                  "end": 1044,
                  "name": "explicitVoid1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1044,
                  "end": 1061,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 12,
                          "raw": "12"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1067,
                "end": 1118,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1067,
                  "end": 1085,
                  "name": "explicitStructural",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1085,
                  "end": 1118,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 1105,
                            "end": 1109
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1111,
                            "name": "a",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1124,
                "end": 1174,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1124,
                  "end": 1141,
                  "name": "explicitInterface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1141,
                  "end": 1174,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 1161,
                            "end": 1165
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1166,
                            "end": 1167,
                            "name": "a",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1180,
                "end": 1225,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1180,
                  "end": 1192,
                  "name": "explicitThis",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1192,
                  "end": 1225,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 1212,
                            "end": 1216
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1217,
                            "end": 1218,
                            "name": "a",
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 1229,
            "end": 1233,
            "name": "impl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1234,
            "end": 1247,
            "name": "explicitVoid1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1250,
          "end": 1276,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "value": 12,
                  "raw": "12"
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1278,
            "end": 1282,
            "name": "impl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1283,
            "end": 1296,
            "name": "explicitVoid2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1299,
          "end": 1307,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "Literal",
            "start": 1305,
            "end": 1307,
            "value": 12,
            "raw": "12"
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1309,
            "end": 1313,
            "name": "impl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1314,
            "end": 1332,
            "name": "explicitStructural",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1335,
          "end": 1364,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "object": {
                    "type": "ThisExpression",
                    "start": 1355,
                    "end": 1359
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1360,
                    "end": 1361,
                    "name": "a",
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
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1366,
            "end": 1370,
            "name": "impl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1371,
            "end": 1388,
            "name": "explicitInterface",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1391,
          "end": 1420,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "object": {
                    "type": "ThisExpression",
                    "start": 1411,
                    "end": 1415
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1416,
                    "end": 1417,
                    "name": "a",
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
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1422,
            "end": 1426,
            "name": "impl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1427,
            "end": 1445,
            "name": "explicitStructural",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1448,
          "end": 1456,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "Literal",
            "start": 1454,
            "end": 1456,
            "value": 12,
            "raw": "12"
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1458,
            "end": 1462,
            "name": "impl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1463,
            "end": 1480,
            "name": "explicitInterface",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1483,
          "end": 1491,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "Literal",
            "start": 1489,
            "end": 1491,
            "value": 12,
            "raw": "12"
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1493,
            "end": 1497,
            "name": "impl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1498,
            "end": 1510,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1513,
          "end": 1543,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "object": {
                    "type": "ThisExpression",
                    "start": 1534,
                    "end": 1538
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1539,
                    "end": 1540,
                    "name": "a",
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
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1571,
            "end": 1633,
            "name": "ok",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1576,
                      "end": 1577,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1577,
                      "end": 1585,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1579,
                        "end": 1585
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1587,
                    "end": 1632,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1587,
                      "end": 1588,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1588,
                      "end": 1632,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1590,
                        "end": 1632,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1591,
                            "end": 1610,
                            "name": "this",
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
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1599,
                                      "end": 1600,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1600,
                                      "end": 1608,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1602,
                                        "end": 1608
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1612,
                            "end": 1621,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1613,
                              "end": 1621,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1615,
                                "end": 1621
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1638,
                  "end": 1639,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1641,
                  "end": 1643,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1645,
                "end": 1666,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1645,
                  "end": 1646,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1666,
                  "name": "explicitStructural",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1674,
            "end": 1737,
            "name": "implicitAnyOk",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1690,
                      "end": 1702,
                      "name": "notSpecified",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1702,
                      "end": 1710,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1704,
                        "end": 1710
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1712,
                    "end": 1736,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1712,
                      "end": 1713,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1713,
                      "end": 1736,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1715,
                        "end": 1736,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1716,
                            "end": 1725,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1717,
                              "end": 1725,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1719,
                                "end": 1725
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1742,
                  "end": 1754,
                  "name": "notSpecified",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1756,
                  "end": 1758,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1760,
                "end": 1775,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1760,
                  "end": 1761,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1763,
                  "end": 1775,
                  "name": "implicitThis",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1779,
      "end": 1788,
      "expression": {
        "type": "CallExpression",
        "start": 1779,
        "end": 1787,
        "callee": {
          "type": "MemberExpression",
          "start": 1779,
          "end": 1783,
          "object": {
            "type": "Identifier",
            "start": 1779,
            "end": 1781,
            "name": "ok",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1782,
            "end": 1783,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1784,
            "end": 1786,
            "value": 13,
            "raw": "13"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1789,
      "end": 1806,
      "expression": {
        "type": "CallExpression",
        "start": 1789,
        "end": 1805,
        "callee": {
          "type": "Identifier",
          "start": 1789,
          "end": 1801,
          "name": "implicitThis",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1802,
            "end": 1804,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1807,
      "end": 1827,
      "expression": {
        "type": "CallExpression",
        "start": 1807,
        "end": 1826,
        "callee": {
          "type": "MemberExpression",
          "start": 1807,
          "end": 1822,
          "object": {
            "type": "Identifier",
            "start": 1807,
            "end": 1820,
            "name": "implicitAnyOk",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1821,
            "end": 1822,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1823,
            "end": 1825,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1833,
            "end": 1834,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1837,
            "end": 1844,
            "callee": {
              "type": "Identifier",
              "start": 1841,
              "end": 1842,
              "name": "C",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1850,
            "end": 1851,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1854,
            "end": 1861,
            "callee": {
              "type": "Identifier",
              "start": 1858,
              "end": 1859,
              "name": "D",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1867,
            "end": 1873,
            "name": "ripped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1876,
            "end": 1887,
            "object": {
              "type": "Identifier",
              "start": 1876,
              "end": 1877,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1878,
              "end": 1887,
              "name": "explicitC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1889,
      "end": 1905,
      "expression": {
        "type": "CallExpression",
        "start": 1889,
        "end": 1904,
        "callee": {
          "type": "MemberExpression",
          "start": 1889,
          "end": 1900,
          "object": {
            "type": "Identifier",
            "start": 1889,
            "end": 1890,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1891,
            "end": 1900,
            "name": "explicitC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1901,
            "end": 1903,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1906,
      "end": 1929,
      "expression": {
        "type": "CallExpression",
        "start": 1906,
        "end": 1928,
        "callee": {
          "type": "MemberExpression",
          "start": 1906,
          "end": 1924,
          "object": {
            "type": "Identifier",
            "start": 1906,
            "end": 1907,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1908,
            "end": 1924,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1925,
            "end": 1927,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1930,
      "end": 1949,
      "expression": {
        "type": "CallExpression",
        "start": 1930,
        "end": 1948,
        "callee": {
          "type": "MemberExpression",
          "start": 1930,
          "end": 1944,
          "object": {
            "type": "Identifier",
            "start": 1930,
            "end": 1931,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1932,
            "end": 1944,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1945,
            "end": 1947,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1950,
      "end": 1966,
      "expression": {
        "type": "CallExpression",
        "start": 1950,
        "end": 1965,
        "callee": {
          "type": "MemberExpression",
          "start": 1950,
          "end": 1961,
          "object": {
            "type": "Identifier",
            "start": 1950,
            "end": 1951,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1952,
            "end": 1961,
            "name": "explicitC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1962,
            "end": 1964,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1967,
      "end": 1990,
      "expression": {
        "type": "CallExpression",
        "start": 1967,
        "end": 1989,
        "callee": {
          "type": "MemberExpression",
          "start": 1967,
          "end": 1985,
          "object": {
            "type": "Identifier",
            "start": 1967,
            "end": 1968,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1969,
            "end": 1985,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1986,
            "end": 1988,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1991,
      "end": 2010,
      "expression": {
        "type": "CallExpression",
        "start": 1991,
        "end": 2009,
        "callee": {
          "type": "MemberExpression",
          "start": 1991,
          "end": 2005,
          "object": {
            "type": "Identifier",
            "start": 1991,
            "end": 1992,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1993,
            "end": 2005,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2006,
            "end": 2008,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 2015,
            "end": 2314,
            "name": "reconstructed",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2037,
                      "end": 2038,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2038,
                      "end": 2046,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2040,
                        "end": 2046
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2052,
                    "end": 2093,
                    "key": {
                      "type": "Identifier",
                      "start": 2052,
                      "end": 2064,
                      "name": "explicitThis",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2065,
                        "end": 2072,
                        "name": "this",
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
                              "name": "C",
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
                        "start": 2074,
                        "end": 2083,
                        "name": "m",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2075,
                          "end": 2083,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2077,
                            "end": 2083
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2160,
                    "end": 2198,
                    "key": {
                      "type": "Identifier",
                      "start": 2160,
                      "end": 2169,
                      "name": "explicitC",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2170,
                        "end": 2177,
                        "name": "this",
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
                              "name": "C",
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
                        "start": 2179,
                        "end": 2188,
                        "name": "m",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2180,
                          "end": 2188,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2182,
                            "end": 2188
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2203,
                    "end": 2263,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2203,
                      "end": 2219,
                      "name": "explicitProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2219,
                      "end": 2262,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2221,
                        "end": 2262,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2222,
                            "end": 2240,
                            "name": "this",
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
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2229,
                                      "end": 2230,
                                      "name": "n",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2231,
                                      "end": 2239,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2233,
                                        "end": 2239
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 2242,
                            "end": 2251,
                            "name": "m",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2243,
                              "end": 2251,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2245,
                                "end": 2251
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2268,
                    "end": 2312,
                    "key": {
                      "type": "Identifier",
                      "start": 2268,
                      "end": 2280,
                      "name": "explicitVoid",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2281,
                        "end": 2291,
                        "name": "this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2285,
                          "end": 2291,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 2287,
                            "end": 2291
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2293,
                        "end": 2302,
                        "name": "m",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2294,
                          "end": 2302,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2296,
                            "end": 2302
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2324,
                  "end": 2325,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2327,
                  "end": 2329,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2335,
                "end": 2363,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2335,
                  "end": 2347,
                  "name": "explicitThis",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 2349,
                  "end": 2363,
                  "object": {
                    "type": "Identifier",
                    "start": 2349,
                    "end": 2350,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2351,
                    "end": 2363,
                    "name": "explicitThis",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2369,
                "end": 2391,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2369,
                  "end": 2378,
                  "name": "explicitC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 2380,
                  "end": 2391,
                  "object": {
                    "type": "Identifier",
                    "start": 2380,
                    "end": 2381,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2382,
                    "end": 2391,
                    "name": "explicitC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2397,
                "end": 2433,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2397,
                  "end": 2413,
                  "name": "explicitProperty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 2415,
                  "end": 2433,
                  "object": {
                    "type": "Identifier",
                    "start": 2415,
                    "end": 2416,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2417,
                    "end": 2433,
                    "name": "explicitProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2439,
                "end": 2467,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2439,
                  "end": 2451,
                  "name": "explicitVoid",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 2453,
                  "end": 2467,
                  "object": {
                    "type": "Identifier",
                    "start": 2453,
                    "end": 2454,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2455,
                    "end": 2467,
                    "name": "explicitVoid",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2471,
      "end": 2502,
      "expression": {
        "type": "CallExpression",
        "start": 2471,
        "end": 2501,
        "callee": {
          "type": "MemberExpression",
          "start": 2471,
          "end": 2497,
          "object": {
            "type": "Identifier",
            "start": 2471,
            "end": 2484,
            "name": "reconstructed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2485,
            "end": 2497,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2498,
            "end": 2500,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2503,
      "end": 2538,
      "expression": {
        "type": "CallExpression",
        "start": 2503,
        "end": 2537,
        "callee": {
          "type": "MemberExpression",
          "start": 2503,
          "end": 2533,
          "object": {
            "type": "Identifier",
            "start": 2503,
            "end": 2516,
            "name": "reconstructed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2517,
            "end": 2533,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2534,
            "end": 2536,
            "value": 11,
            "raw": "11"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 2543,
            "end": 2555,
            "name": "explicitVoid",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2558,
            "end": 2584,
            "object": {
              "type": "Identifier",
              "start": 2558,
              "end": 2571,
              "name": "reconstructed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2572,
              "end": 2584,
              "name": "explicitVoid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2586,
      "end": 2603,
      "expression": {
        "type": "CallExpression",
        "start": 2586,
        "end": 2602,
        "callee": {
          "type": "Identifier",
          "start": 2586,
          "end": 2598,
          "name": "explicitVoid",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2599,
            "end": 2601,
            "value": 12,
            "raw": "12"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 2631,
            "end": 2693,
            "name": "unboundToSpecified",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2649,
              "end": 2693,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2651,
                "end": 2693,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2652,
                    "end": 2671,
                    "name": "this",
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2660,
                              "end": 2661,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2661,
                              "end": 2669,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2663,
                                "end": 2669
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2673,
                    "end": 2682,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2674,
                      "end": 2682,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2676,
                        "end": 2682
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2696,
            "end": 2711,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2696,
                "end": 2697,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 2701,
              "end": 2711,
              "left": {
                "type": "Identifier",
                "start": 2701,
                "end": 2702,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 2705,
                "end": 2711,
                "object": {
                  "type": "ThisExpression",
                  "start": 2705,
                  "end": 2709
                },
                "property": {
                  "type": "Identifier",
                  "start": 2710,
                  "end": 2711,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2733,
            "end": 2795,
            "name": "specifiedToSpecified",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2753,
              "end": 2795,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2755,
                "end": 2795,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2756,
                    "end": 2773,
                    "name": "this",
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2763,
                              "end": 2764,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2764,
                              "end": 2772,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2766,
                                "end": 2772
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2775,
                    "end": 2784,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2776,
                      "end": 2784,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2778,
                        "end": 2784
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 2798,
            "end": 2816,
            "name": "explicitStructural",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2822,
            "end": 2880,
            "name": "anyToSpecified",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2836,
              "end": 2880,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2838,
                "end": 2880,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2839,
                    "end": 2858,
                    "name": "this",
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2847,
                              "end": 2848,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2848,
                              "end": 2856,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2850,
                                "end": 2856
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2860,
                    "end": 2869,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2861,
                      "end": 2869,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2863,
                        "end": 2869
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 2883,
            "end": 2929,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2892,
                "end": 2901,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2893,
                  "end": 2901,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2895,
                    "end": 2901
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "left": {
                      "type": "Identifier",
                      "start": 2920,
                      "end": 2921,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 2924,
                      "end": 2926,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
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
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2936,
            "end": 2976,
            "name": "unspecifiedLambda",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2953,
              "end": 2976,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2955,
                "end": 2976,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2956,
                    "end": 2965,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2957,
                      "end": 2965,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2959,
                        "end": 2965
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2979,
            "end": 2990,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2979,
                "end": 2980,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 2984,
              "end": 2990,
              "left": {
                "type": "Identifier",
                "start": 2984,
                "end": 2985,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 2988,
                "end": 2990,
                "value": 12,
                "raw": "12"
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2996,
            "end": 3046,
            "name": "specifiedLambda",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3011,
              "end": 3046,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3013,
                "end": 3046,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3014,
                    "end": 3024,
                    "name": "this",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3018,
                      "end": 3024,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3020,
                        "end": 3024
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3026,
                    "end": 3035,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3027,
                      "end": 3035,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3029,
                        "end": 3035
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3049,
            "end": 3060,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 3049,
                "end": 3050,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 3054,
              "end": 3060,
              "left": {
                "type": "Identifier",
                "start": 3054,
                "end": 3055,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 3058,
                "end": 3060,
                "value": 12,
                "raw": "12"
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3066,
            "end": 3136,
            "name": "unspecifiedLambdaToSpecified",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3094,
              "end": 3136,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3096,
                "end": 3136,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3097,
                    "end": 3114,
                    "name": "this",
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3104,
                              "end": 3105,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3105,
                              "end": 3113,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3107,
                                "end": 3113
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3116,
                    "end": 3125,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3117,
                      "end": 3125,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3119,
                        "end": 3125
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 3139,
            "end": 3156,
            "name": "unspecifiedLambda",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3162,
            "end": 3230,
            "name": "specifiedLambdaToSpecified",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3188,
              "end": 3230,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3190,
                "end": 3230,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3191,
                    "end": 3208,
                    "name": "this",
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3198,
                              "end": 3199,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3199,
                              "end": 3207,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3201,
                                "end": 3207
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3210,
                    "end": 3219,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3211,
                      "end": 3219,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3213,
                        "end": 3219
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 3233,
            "end": 3248,
            "name": "specifiedLambda",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3256,
            "end": 3305,
            "name": "explicitCFunction",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3273,
              "end": 3305,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3275,
                "end": 3305,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3276,
                    "end": 3283,
                    "name": "this",
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
                          "name": "C",
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
                    "start": 3285,
                    "end": 3294,
                    "name": "m",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3286,
                      "end": 3294,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3288,
                        "end": 3294
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3311,
            "end": 3377,
            "name": "explicitPropertyFunction",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3335,
              "end": 3377,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3337,
                "end": 3377,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3338,
                    "end": 3355,
                    "name": "this",
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3345,
                              "end": 3346,
                              "name": "n",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3346,
                              "end": 3354,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3348,
                                "end": 3354
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3357,
                    "end": 3366,
                    "name": "m",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3358,
                      "end": 3366,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3360,
                        "end": 3366
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 3379,
            "end": 3380,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3381,
            "end": 3390,
            "name": "explicitC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3393,
          "end": 3410,
          "name": "explicitCFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3412,
            "end": 3413,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3414,
            "end": 3423,
            "name": "explicitC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 3426,
          "end": 3476,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 3435,
              "end": 3442,
              "name": "this",
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
                    "name": "C",
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
              "start": 3444,
              "end": 3453,
              "name": "m",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3445,
                "end": 3453,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3447,
                  "end": 3453
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 3464,
                    "end": 3470,
                    "object": {
                      "type": "ThisExpression",
                      "start": 3464,
                      "end": 3468
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3469,
                      "end": 3470,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 3473,
                    "end": 3474,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3478,
            "end": 3479,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3480,
            "end": 3496,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3499,
          "end": 3523,
          "name": "explicitPropertyFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3525,
            "end": 3526,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3527,
            "end": 3543,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 3546,
          "end": 3606,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 3555,
              "end": 3572,
              "name": "this",
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3562,
                        "end": 3563,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3563,
                        "end": 3571,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3565,
                          "end": 3571
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 3574,
              "end": 3583,
              "name": "m",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3575,
                "end": 3583,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3577,
                  "end": 3583
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 3594,
                    "end": 3600,
                    "object": {
                      "type": "ThisExpression",
                      "start": 3594,
                      "end": 3598
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3599,
                      "end": 3600,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 3603,
                    "end": 3604,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3608,
            "end": 3609,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3610,
            "end": 3626,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 3629,
          "end": 3659,
          "object": {
            "type": "Identifier",
            "start": 3629,
            "end": 3642,
            "name": "reconstructed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3643,
            "end": 3659,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3700,
            "end": 3701,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3702,
            "end": 3711,
            "name": "explicitC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3714,
          "end": 3720,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 3714,
              "end": 3715,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 3719,
            "end": 3720,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3722,
            "end": 3723,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3724,
            "end": 3736,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3739,
          "end": 3745,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 3739,
              "end": 3740,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 3744,
            "end": 3745,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3747,
            "end": 3748,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3749,
            "end": 3765,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3768,
          "end": 3774,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 3768,
              "end": 3769,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 3773,
            "end": 3774,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3881,
            "end": 3882,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3883,
            "end": 3892,
            "name": "explicitC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3895,
          "end": 3910,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 3895,
              "end": 3896,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BinaryExpression",
            "start": 3900,
            "end": 3910,
            "left": {
              "type": "Identifier",
              "start": 3900,
              "end": 3901,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 3904,
              "end": 3910,
              "object": {
                "type": "ThisExpression",
                "start": 3904,
                "end": 3908
              },
              "property": {
                "type": "Identifier",
                "start": 3909,
                "end": 3910,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3912,
            "end": 3913,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3914,
            "end": 3926,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3929,
          "end": 3944,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 3929,
              "end": 3930,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BinaryExpression",
            "start": 3934,
            "end": 3944,
            "left": {
              "type": "Identifier",
              "start": 3934,
              "end": 3935,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 3938,
              "end": 3944,
              "object": {
                "type": "ThisExpression",
                "start": 3938,
                "end": 3942
              },
              "property": {
                "type": "Identifier",
                "start": 3943,
                "end": 3944,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 3946,
            "end": 3947,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 3948,
            "end": 3964,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 3967,
          "end": 3982,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 3967,
              "end": 3968,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BinaryExpression",
            "start": 3972,
            "end": 3982,
            "left": {
              "type": "Identifier",
              "start": 3972,
              "end": 3973,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 3976,
              "end": 3982,
              "object": {
                "type": "ThisExpression",
                "start": 3976,
                "end": 3980
              },
              "property": {
                "type": "Identifier",
                "start": 3981,
                "end": 3982,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 4015,
            "end": 4016,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4017,
            "end": 4029,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4032,
          "end": 4049,
          "name": "explicitCFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 4051,
            "end": 4052,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4053,
            "end": 4065,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4068,
          "end": 4118,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 4077,
              "end": 4084,
              "name": "this",
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
                    "name": "C",
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
              "start": 4086,
              "end": 4095,
              "name": "m",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4087,
                "end": 4095,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4089,
                  "end": 4095
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 4106,
                    "end": 4112,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4106,
                      "end": 4110
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4111,
                      "end": 4112,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 4115,
                    "end": 4116,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 4147,
            "end": 4148,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4149,
            "end": 4158,
            "name": "explicitC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4161,
          "end": 4194,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 4170,
              "end": 4171,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 4182,
                    "end": 4188,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4182,
                      "end": 4186
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4187,
                      "end": 4188,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 4191,
                    "end": 4192,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 4196,
            "end": 4197,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4198,
            "end": 4214,
            "name": "explicitProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4217,
          "end": 4250,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 4226,
              "end": 4227,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 4238,
                    "end": 4244,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4238,
                      "end": 4242
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4243,
                      "end": 4244,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 4247,
                    "end": 4248,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 4252,
            "end": 4253,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4254,
            "end": 4266,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4269,
          "end": 4302,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 4278,
              "end": 4279,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 4290,
                    "end": 4296,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4290,
                      "end": 4294
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4295,
                      "end": 4296,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 4299,
                    "end": 4300,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 4332,
            "end": 4333,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4334,
            "end": 4346,
            "name": "explicitThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4349,
          "end": 4388,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 4358,
              "end": 4362,
              "name": "this",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 4364,
              "end": 4365,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 4376,
                    "end": 4382,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4376,
                      "end": 4380
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4381,
                      "end": 4382,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 4385,
                    "end": 4386,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 4425,
            "end": 4426,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4427,
            "end": 4436,
            "name": "explicitC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 4439,
          "end": 4489,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 4448,
              "end": 4455,
              "name": "this",
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
                    "name": "B",
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
              "start": 4457,
              "end": 4466,
              "name": "m",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4458,
                "end": 4466,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4460,
                  "end": 4466
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 4477,
                    "end": 4483,
                    "object": {
                      "type": "ThisExpression",
                      "start": 4477,
                      "end": 4481
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4482,
                      "end": 4483,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 4486,
                    "end": 4487,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 4519,
            "end": 4520,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4521,
            "end": 4533,
            "name": "explicitVoid",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 4536,
          "end": 4542,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 4536,
              "end": 4537,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "Identifier",
            "start": 4541,
            "end": 4542,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4574,
      "end": 4814,
      "id": {
        "type": "Identifier",
        "start": 4580,
        "end": 4585,
        "name": "Base1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4586,
        "end": 4814,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4592,
            "end": 4602,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4592,
              "end": 4593,
              "name": "x",
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
              "start": 4593,
              "end": 4601,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4595,
                "end": 4601
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4607,
            "end": 4664,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4614,
              "end": 4625,
              "name": "polymorphic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4625,
              "end": 4664,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4626,
                  "end": 4636,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4630,
                    "end": 4636,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 4632,
                      "end": 4636
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 4655,
                        "end": 4659
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4660,
                        "end": 4661,
                        "name": "x",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 4669,
            "end": 4717,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4669,
              "end": 4677,
              "name": "explicit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4677,
              "end": 4717,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4678,
                  "end": 4689,
                  "name": "this",
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
                        "name": "Base1",
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 4708,
                        "end": 4712
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4713,
                        "end": 4714,
                        "name": "x",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4722,
            "end": 4790,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4729,
              "end": 4743,
              "name": "explicitStatic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4743,
              "end": 4790,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4744,
                  "end": 4762,
                  "name": "this",
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
                        "name": "Base1",
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 4781,
                        "end": 4785
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4786,
                        "end": 4787,
                        "name": "y",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 4795,
            "end": 4812,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4802,
              "end": 4803,
              "name": "y",
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
              "start": 4803,
              "end": 4811,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4805,
                "end": 4811
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
      "start": 4815,
      "end": 4861,
      "id": {
        "type": "Identifier",
        "start": 4821,
        "end": 4829,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 4838,
        "end": 4843,
        "name": "Base1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 4844,
        "end": 4861,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4850,
            "end": 4859,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4850,
              "end": 4851,
              "name": "y",
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
              "start": 4851,
              "end": 4859,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4853,
                "end": 4859
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
      "start": 4862,
      "end": 4999,
      "id": {
        "type": "Identifier",
        "start": 4868,
        "end": 4873,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4874,
        "end": 4999,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4880,
            "end": 4889,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4880,
              "end": 4881,
              "name": "y",
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
              "start": 4881,
              "end": 4889,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4883,
                "end": 4889
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4894,
            "end": 4944,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4894,
              "end": 4905,
              "name": "polymorphic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4905,
              "end": 4944,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4906,
                  "end": 4916,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4910,
                    "end": 4916,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 4912,
                      "end": 4916
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 4935,
                        "end": 4939
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4940,
                        "end": 4941,
                        "name": "y",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4949,
            "end": 4997,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4949,
              "end": 4957,
              "name": "explicit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4957,
              "end": 4997,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4958,
                  "end": 4969,
                  "name": "this",
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
                        "name": "Base1",
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 4988,
                        "end": 4992
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4993,
                        "end": 4994,
                        "name": "x",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 5000,
      "end": 5046,
      "id": {
        "type": "Identifier",
        "start": 5006,
        "end": 5014,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 5023,
        "end": 5028,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 5029,
        "end": 5046,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5035,
            "end": 5044,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5035,
              "end": 5036,
              "name": "x",
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
              "start": 5036,
              "end": 5044,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5038,
                "end": 5044
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
      "type": "VariableDeclaration",
      "start": 5047,
      "end": 5068,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5051,
          "end": 5067,
          "id": {
            "type": "Identifier",
            "start": 5051,
            "end": 5053,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5056,
            "end": 5067,
            "callee": {
              "type": "Identifier",
              "start": 5060,
              "end": 5065,
              "name": "Base1",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5073,
            "end": 5075,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5078,
            "end": 5089,
            "callee": {
              "type": "Identifier",
              "start": 5082,
              "end": 5087,
              "name": "Base2",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5095,
            "end": 5097,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5100,
            "end": 5114,
            "callee": {
              "type": "Identifier",
              "start": 5104,
              "end": 5112,
              "name": "Derived1",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5120,
            "end": 5122,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5125,
            "end": 5139,
            "callee": {
              "type": "Identifier",
              "start": 5129,
              "end": 5137,
              "name": "Derived2",
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
      "kind": "let",
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 5141,
            "end": 5143,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5144,
            "end": 5155,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 5158,
          "end": 5172,
          "object": {
            "type": "Identifier",
            "start": 5158,
            "end": 5160,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5161,
            "end": 5172,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 5204,
            "end": 5206,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5207,
            "end": 5218,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 5221,
          "end": 5235,
          "object": {
            "type": "Identifier",
            "start": 5221,
            "end": 5223,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5224,
            "end": 5235,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 5296,
            "end": 5298,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5299,
            "end": 5310,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 5313,
          "end": 5327,
          "object": {
            "type": "Identifier",
            "start": 5313,
            "end": 5315,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5316,
            "end": 5327,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 5354,
            "end": 5356,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5357,
            "end": 5368,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 5371,
          "end": 5382,
          "object": {
            "type": "Identifier",
            "start": 5371,
            "end": 5373,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5374,
            "end": 5382,
            "name": "explicit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 5406,
            "end": 5408,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5409,
            "end": 5420,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 5423,
          "end": 5437,
          "object": {
            "type": "Identifier",
            "start": 5423,
            "end": 5425,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5426,
            "end": 5437,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 5477,
            "end": 5479,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5480,
            "end": 5488,
            "name": "explicit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 5491,
          "end": 5505,
          "object": {
            "type": "Identifier",
            "start": 5491,
            "end": 5493,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5494,
            "end": 5505,
            "name": "polymorphic",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5598,
      "end": 5650,
      "id": {
        "type": "Identifier",
        "start": 5607,
        "end": 5620,
        "name": "InterfaceThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 5621,
          "end": 5628,
          "name": "this",
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
                "name": "I",
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
                "object": {
                  "type": "ThisExpression",
                  "start": 5636,
                  "end": 5640
                },
                "property": {
                  "type": "Identifier",
                  "start": 5641,
                  "end": 5642,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 5645,
                "end": 5647,
                "value": 12,
                "raw": "12"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5651,
      "end": 5717,
      "id": {
        "type": "Identifier",
        "start": 5660,
        "end": 5675,
        "name": "LiteralTypeThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 5676,
          "end": 5693,
          "name": "this",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5683,
                    "end": 5684,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5684,
                    "end": 5692,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5686,
                      "end": 5692
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "object": {
                  "type": "ThisExpression",
                  "start": 5701,
                  "end": 5705
                },
                "property": {
                  "type": "Identifier",
                  "start": 5706,
                  "end": 5707,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 5710,
                "end": 5714,
                "value": "ok",
                "raw": "\"ok\""
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5718,
      "end": 5768,
      "id": {
        "type": "Identifier",
        "start": 5727,
        "end": 5734,
        "name": "AnyThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 5735,
          "end": 5744,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5739,
            "end": 5744,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 5741,
              "end": 5744
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "object": {
                  "type": "ThisExpression",
                  "start": 5752,
                  "end": 5756
                },
                "property": {
                  "type": "Identifier",
                  "start": 5757,
                  "end": 5758,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 5761,
                "end": 5765,
                "value": "ok",
                "raw": "\"ok\""
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 5773,
            "end": 5786,
            "name": "interfaceThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5789,
            "end": 5808,
            "callee": {
              "type": "Identifier",
              "start": 5793,
              "end": 5806,
              "name": "InterfaceThis",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5814,
            "end": 5829,
            "name": "literalTypeThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5832,
            "end": 5853,
            "callee": {
              "type": "Identifier",
              "start": 5836,
              "end": 5851,
              "name": "LiteralTypeThis",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5859,
            "end": 5866,
            "name": "anyThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 5869,
            "end": 5882,
            "callee": {
              "type": "Identifier",
              "start": 5873,
              "end": 5880,
              "name": "AnyThis",
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5932,
            "end": 6046,
            "name": "f",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5943,
                        "end": 5953,
                        "name": "this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5947,
                          "end": 5953,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 5949,
                            "end": 5953
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 5955,
                        "end": 5964,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5956,
                          "end": 5964,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 5958,
                            "end": 5964
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    "key": {
                      "type": "Identifier",
                      "start": 5980,
                      "end": 5984,
                      "name": "call",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5984,
                      "end": 5987,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5985,
                          "end": 5986,
                          "name": {
                            "type": "Identifier",
                            "start": 5985,
                            "end": 5986,
                            "name": "U",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5988,
                        "end": 6019,
                        "name": "this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5992,
                          "end": 6019,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 5994,
                            "end": 6019,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 5995,
                                "end": 6013,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 5998,
                                  "end": 6006,
                                  "name": "argArray",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                                },
                                "value": null
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
                                  "name": "U",
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
                      },
                      {
                        "type": "RestElement",
                        "start": 6021,
                        "end": 6039,
                        "argument": {
                          "type": "Identifier",
                          "start": 6024,
                          "end": 6032,
                          "name": "argArray",
                          "typeAnnotation": null,
                          "decorators": [],
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
                        },
                        "value": null
                      }
                    ],
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
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 6052,
            "end": 6061,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6053,
              "end": 6061,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6055,
                "end": 6061
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6064,
            "end": 6074,
            "callee": {
              "type": "MemberExpression",
              "start": 6064,
              "end": 6070,
              "object": {
                "type": "Identifier",
                "start": 6064,
                "end": 6065,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6066,
                "end": 6070,
                "name": "call",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 6071,
                "end": 6073,
                "value": 12,
                "raw": "12"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 6077,
      "end": 6157,
      "id": {
        "type": "Identifier",
        "start": 6086,
        "end": 6110,
        "name": "missingTypeIsImplicitAny",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 6111,
          "end": 6115,
          "name": "this",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 6117,
          "end": 6126,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6118,
            "end": 6126,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 6120,
              "end": 6126
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "MemberExpression",
                "start": 6137,
                "end": 6150,
                "object": {
                  "type": "ThisExpression",
                  "start": 6137,
                  "end": 6141
                },
                "property": {
                  "type": "Identifier",
                  "start": 6142,
                  "end": 6150,
                  "name": "anything",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 6153,
                "end": 6154,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
