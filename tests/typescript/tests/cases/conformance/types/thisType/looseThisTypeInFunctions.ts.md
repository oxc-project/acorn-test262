__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1379,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 33,
            "end": 77,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 45,
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 56,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 52,
                    "end": 56
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 58,
                "end": 67,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 59,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 61,
                    "end": 67
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
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
      "type": "TSInterfaceDeclaration",
      "start": 80,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 96,
        "decorators": [],
        "name": "Unused",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 97,
        "end": 139,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 103,
            "end": 137,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 117,
              "decorators": [],
              "name": "implicitNoThis",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 118,
                "end": 127,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 119,
                  "end": 127,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 121,
                    "end": 127
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
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
      "type": "ClassDeclaration",
      "start": 140,
      "end": 411,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 159,
          "end": 160,
          "expression": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 411,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 177,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 260,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 194,
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 260,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 195,
                  "end": 205,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 199,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 201,
                      "end": 205
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 207,
                  "end": 216,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 216,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 210,
                      "end": 216
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 217,
                "end": 225,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 219,
                  "end": 225
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 260,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 236,
                    "end": 254,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 243,
                      "end": 253,
                      "left": {
                        "type": "MemberExpression",
                        "start": 243,
                        "end": 249,
                        "object": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 253,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 331,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 277,
              "decorators": [],
              "name": "implicitThis",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 277,
              "end": 331,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 278,
                  "end": 287,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
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
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 288,
                "end": 296,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 290,
                  "end": 296
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 331,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 307,
                    "end": 325,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 314,
                      "end": 324,
                      "left": {
                        "type": "MemberExpression",
                        "start": 314,
                        "end": 320,
                        "object": {
                          "type": "ThisExpression",
                          "start": 314,
                          "end": 318
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 336,
            "end": 409,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 348,
              "decorators": [],
              "name": "explicitVoid",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 348,
              "end": 409,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 349,
                  "end": 359,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 359,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 355,
                      "end": 359
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 361,
                  "end": 370,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
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
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 371,
                "end": 379,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 373,
                  "end": 379
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 380,
                "end": 409,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 390,
                    "end": 403,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 397,
                      "end": 402,
                      "left": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 401,
                        "end": 402,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 412,
      "end": 428,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 417,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 420,
            "end": 427,
            "callee": {
              "type": "Identifier",
              "start": 424,
              "end": 425,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 461,
      "expression": {
        "type": "AssignmentExpression",
        "start": 429,
        "end": 460,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 429,
          "end": 443,
          "object": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 431,
            "end": 443,
            "decorators": [],
            "name": "explicitVoid",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 446,
          "end": 460,
          "object": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 448,
            "end": 460,
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 703,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 702,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 506,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 509,
            "end": 702,
            "properties": [
              {
                "type": "Property",
                "start": 515,
                "end": 521,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 516,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 518,
                  "end": 521,
                  "value": 101,
                  "raw": "101"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 527,
                "end": 649,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 539,
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 541,
                  "end": 649,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 551,
                      "end": 560,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 552,
                        "end": 560,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 554,
                          "end": 560
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 562,
                    "end": 649,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 572,
                        "end": 597,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 579,
                          "end": 596,
                          "left": {
                            "type": "Identifier",
                            "start": 579,
                            "end": 580,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "start": 583,
                            "end": 596,
                            "object": {
                              "type": "MemberExpression",
                              "start": 583,
                              "end": 589,
                              "object": {
                                "type": "ThisExpression",
                                "start": 583,
                                "end": 587
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 588,
                                "end": 589,
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 590,
                              "end": 596,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 655,
                "end": 700,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 667,
                  "decorators": [],
                  "name": "implicitThis",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 667,
                  "end": 700,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 668,
                      "end": 677,
                      "decorators": [],
                      "name": "m",
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
                    "start": 678,
                    "end": 686,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 680,
                      "end": 686
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 687,
                    "end": 700,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 689,
                        "end": 698,
                        "argument": {
                          "type": "Identifier",
                          "start": 696,
                          "end": 697,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 704,
      "end": 717,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 708,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 708,
            "end": 712,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 709,
              "end": 712,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 711,
                "end": 712,
                "typeName": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 712,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 715,
            "end": 716,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 867,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 867,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 727,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 724,
              "end": 727,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 726,
                "end": 727,
                "typeName": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 727,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 730,
            "end": 867,
            "properties": [
              {
                "type": "Property",
                "start": 736,
                "end": 743,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 739,
                  "end": 743,
                  "value": 1001,
                  "raw": "1001"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 749,
                "end": 864,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 749,
                  "end": 761,
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 763,
                  "end": 864,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 773,
                      "end": 774,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 776,
                    "end": 864,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 787,
                        "end": 812,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 794,
                          "end": 811,
                          "left": {
                            "type": "Identifier",
                            "start": 794,
                            "end": 795,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "start": 798,
                            "end": 811,
                            "object": {
                              "type": "MemberExpression",
                              "start": 798,
                              "end": 804,
                              "object": {
                                "type": "ThisExpression",
                                "start": 798,
                                "end": 802
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 803,
                                "end": 804,
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 805,
                              "end": 811,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 868,
      "end": 891,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 872,
          "end": 890,
          "id": {
            "type": "Identifier",
            "start": 872,
            "end": 873,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 876,
            "end": 890,
            "object": {
              "type": "Identifier",
              "start": 876,
              "end": 877,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 878,
              "end": 890,
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 892,
      "end": 906,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 896,
          "end": 905,
          "id": {
            "type": "Identifier",
            "start": 896,
            "end": 897,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 900,
            "end": 905,
            "callee": {
              "type": "Identifier",
              "start": 900,
              "end": 901,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 902,
                "end": 904,
                "value": 12,
                "raw": "12"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 943,
      "end": 957,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 947,
          "end": 956,
          "id": {
            "type": "Identifier",
            "start": 947,
            "end": 956,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 948,
              "end": 956,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 950,
                "end": 956,
                "typeName": {
                  "type": "Identifier",
                  "start": 950,
                  "end": 956,
                  "decorators": [],
                  "name": "Unused",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 958,
      "end": 983,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 962,
          "end": 982,
          "id": {
            "type": "Identifier",
            "start": 962,
            "end": 963,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 966,
            "end": 982,
            "object": {
              "type": "Identifier",
              "start": 966,
              "end": 967,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 968,
              "end": 982,
              "decorators": [],
              "name": "implicitNoThis",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 984,
      "end": 994,
      "expression": {
        "type": "AssignmentExpression",
        "start": 984,
        "end": 993,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 984,
          "end": 985,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 988,
          "end": 993,
          "callee": {
            "type": "Identifier",
            "start": 988,
            "end": 989,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 990,
              "end": 992,
              "value": 12,
              "raw": "12"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1031,
      "end": 1062,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1031,
        "end": 1062,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1031,
          "end": 1045,
          "object": {
            "type": "Identifier",
            "start": 1031,
            "end": 1032,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1033,
            "end": 1045,
            "decorators": [],
            "name": "explicitVoid",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1048,
          "end": 1062,
          "object": {
            "type": "Identifier",
            "start": 1048,
            "end": 1049,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1050,
            "end": 1062,
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1093,
      "end": 1125,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1093,
        "end": 1124,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1093,
          "end": 1107,
          "object": {
            "type": "Identifier",
            "start": 1093,
            "end": 1094,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1095,
            "end": 1107,
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1110,
          "end": 1124,
          "object": {
            "type": "Identifier",
            "start": 1110,
            "end": 1111,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1112,
            "end": 1124,
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1156,
      "end": 1188,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1156,
        "end": 1187,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1156,
          "end": 1170,
          "object": {
            "type": "Identifier",
            "start": 1156,
            "end": 1157,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1158,
            "end": 1170,
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1173,
          "end": 1187,
          "object": {
            "type": "Identifier",
            "start": 1173,
            "end": 1174,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1175,
            "end": 1187,
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1261,
      "end": 1293,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1261,
        "end": 1292,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1261,
          "end": 1275,
          "object": {
            "type": "Identifier",
            "start": 1261,
            "end": 1262,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1263,
            "end": 1275,
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1278,
          "end": 1292,
          "object": {
            "type": "Identifier",
            "start": 1278,
            "end": 1279,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1280,
            "end": 1292,
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1294,
      "end": 1379,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1294,
        "end": 1379,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1294,
          "end": 1308,
          "object": {
            "type": "Identifier",
            "start": 1294,
            "end": 1295,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1296,
            "end": 1308,
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1311,
          "end": 1379,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1320,
              "end": 1321,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 1323,
            "end": 1379,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1330,
                "end": 1351,
                "argument": {
                  "type": "MemberExpression",
                  "start": 1337,
                  "end": 1350,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1337,
                    "end": 1343,
                    "object": {
                      "type": "ThisExpression",
                      "start": 1337,
                      "end": 1341
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1342,
                      "end": 1343,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1344,
                    "end": 1350,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
