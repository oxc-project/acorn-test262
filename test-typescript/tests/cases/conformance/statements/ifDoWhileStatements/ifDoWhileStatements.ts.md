__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2156,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 91,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 91,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 71,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 76,
            "end": 89,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
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
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 52,
          "end": 53,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 135,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 135,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 133,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 123,
              "decorators": [],
              "name": "valid",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 132,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
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
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 137,
      "end": 205,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 205,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 153,
            "end": 163,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "source",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 162,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 182,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "decorators": [],
              "name": "recurse",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 181,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 178,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 179,
                      "end": 180,
                      "typeName": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 203,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 194,
              "decorators": [],
              "name": "wrapped",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 203,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 197,
                  "end": 203,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 198,
                      "end": 202,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 199,
                        "end": 202,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 200,
                            "end": 201,
                            "typeName": {
                              "type": "Identifier",
                              "start": 200,
                              "end": 201,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 199,
                        "decorators": [],
                        "name": "D",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "D",
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
        "start": 143,
        "end": 144,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 146,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
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
      "type": "FunctionDeclaration",
      "start": 207,
      "end": 251,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 251,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 239,
            "end": 249,
            "argument": {
              "type": "Literal",
              "start": 246,
              "end": 248,
              "raw": "42",
              "value": 42
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 218,
          "end": 227,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 227,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 221,
              "end": 227
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 236,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 230,
          "end": 236
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 252,
      "end": 302,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 284,
        "end": 302,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 286,
            "end": 300,
            "argument": {
              "type": "BinaryExpression",
              "start": 293,
              "end": 299,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 293,
                "end": 294,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 297,
                "end": 299,
                "raw": "42",
                "value": 42
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
        "start": 261,
        "end": 263,
        "decorators": [],
        "name": "F2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 264,
          "end": 273,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 265,
            "end": 273,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 267,
              "end": 273
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 274,
        "end": 283,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 276,
          "end": 283
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 304,
      "end": 433,
      "body": {
        "type": "TSModuleBlock",
        "start": 313,
        "end": 433,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 319,
            "end": 363,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 326,
              "end": 363,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 334,
                "end": 363,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 344,
                    "end": 357,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 344,
                      "end": 348,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 348,
                      "end": 356,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 350,
                        "end": 356
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
                "start": 332,
                "end": 333,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 369,
            "end": 431,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 376,
              "end": 431,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 407,
                "end": 431,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 409,
                    "end": 429,
                    "argument": {
                      "type": "CallExpression",
                      "start": 416,
                      "end": 428,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 416,
                        "end": 426,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 417,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 426,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 385,
                "end": 387,
                "decorators": [],
                "name": "F2",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 388,
                  "end": 397,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 397,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 391,
                      "end": 397
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 398,
                "end": 406,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 400,
                  "end": 406
                }
              }
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
        "start": 311,
        "end": 312,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 435,
      "end": 562,
      "body": {
        "type": "TSModuleBlock",
        "start": 444,
        "end": 562,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 450,
            "end": 492,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 457,
              "end": 492,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 465,
                "end": 492,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 475,
                    "end": 486,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 477,
                      "decorators": [],
                      "name": "id",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 477,
                      "end": 485,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 479,
                        "end": 485
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
                "start": 463,
                "end": 464,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 498,
            "end": 560,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 505,
              "end": 560,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 536,
                "end": 560,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 538,
                    "end": 558,
                    "argument": {
                      "type": "CallExpression",
                      "start": 545,
                      "end": 557,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 545,
                        "end": 555,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 546,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 555,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 514,
                "end": 516,
                "decorators": [],
                "name": "F2",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 517,
                  "end": 526,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 518,
                    "end": 526,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 520,
                      "end": 526
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 527,
                "end": 535,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 529,
                  "end": 535
                }
              }
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
        "start": 442,
        "end": 443,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "IfStatement",
      "start": 576,
      "end": 589,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 586,
        "end": 589,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 580,
        "end": 584,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "WhileStatement",
      "start": 590,
      "end": 606,
      "body": {
        "type": "BlockStatement",
        "start": 603,
        "end": 606,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 597,
        "end": 601,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 607,
      "end": 624,
      "body": {
        "type": "BlockStatement",
        "start": 610,
        "end": 613,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 619,
        "end": 623,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "IfStatement",
      "start": 626,
      "end": 639,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 636,
        "end": 639,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 630,
        "end": 634,
        "raw": "null",
        "value": null
      }
    },
    {
      "type": "WhileStatement",
      "start": 640,
      "end": 656,
      "body": {
        "type": "BlockStatement",
        "start": 653,
        "end": 656,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 647,
        "end": 651,
        "raw": "null",
        "value": null
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 657,
      "end": 674,
      "body": {
        "type": "BlockStatement",
        "start": 660,
        "end": 663,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 669,
        "end": 673,
        "raw": "null",
        "value": null
      }
    },
    {
      "type": "IfStatement",
      "start": 676,
      "end": 694,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 691,
        "end": 694,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 680,
        "end": 689,
        "decorators": [],
        "name": "undefined",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 695,
      "end": 716,
      "body": {
        "type": "BlockStatement",
        "start": 713,
        "end": 716,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 702,
        "end": 711,
        "decorators": [],
        "name": "undefined",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 717,
      "end": 739,
      "body": {
        "type": "BlockStatement",
        "start": 720,
        "end": 723,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 729,
        "end": 738,
        "decorators": [],
        "name": "undefined",
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 741,
      "end": 753,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 750,
        "end": 753,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 745,
        "end": 748,
        "raw": "0.0",
        "value": 0
      }
    },
    {
      "type": "WhileStatement",
      "start": 754,
      "end": 769,
      "body": {
        "type": "BlockStatement",
        "start": 766,
        "end": 769,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 761,
        "end": 764,
        "raw": "0.0",
        "value": 0
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 770,
      "end": 786,
      "body": {
        "type": "BlockStatement",
        "start": 773,
        "end": 776,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 782,
        "end": 785,
        "raw": "0.0",
        "value": 0
      }
    },
    {
      "type": "IfStatement",
      "start": 788,
      "end": 807,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 804,
        "end": 807,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 792,
        "end": 802,
        "raw": "'a string'",
        "value": "a string"
      }
    },
    {
      "type": "WhileStatement",
      "start": 808,
      "end": 830,
      "body": {
        "type": "BlockStatement",
        "start": 827,
        "end": 830,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 815,
        "end": 825,
        "raw": "'a string'",
        "value": "a string"
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 831,
      "end": 854,
      "body": {
        "type": "BlockStatement",
        "start": 834,
        "end": 837,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 843,
        "end": 853,
        "raw": "'a string'",
        "value": "a string"
      }
    },
    {
      "type": "IfStatement",
      "start": 856,
      "end": 867,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 864,
        "end": 867,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 860,
        "end": 862,
        "raw": "''",
        "value": ""
      }
    },
    {
      "type": "WhileStatement",
      "start": 868,
      "end": 882,
      "body": {
        "type": "BlockStatement",
        "start": 879,
        "end": 882,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 875,
        "end": 877,
        "raw": "''",
        "value": ""
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 883,
      "end": 898,
      "body": {
        "type": "BlockStatement",
        "start": 886,
        "end": 889,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 895,
        "end": 897,
        "raw": "''",
        "value": ""
      }
    },
    {
      "type": "IfStatement",
      "start": 900,
      "end": 916,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 913,
        "end": 916,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 904,
        "end": 911,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        },
        "value": null
      }
    },
    {
      "type": "WhileStatement",
      "start": 917,
      "end": 936,
      "body": {
        "type": "BlockStatement",
        "start": 933,
        "end": 936,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 924,
        "end": 931,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        },
        "value": null
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 937,
      "end": 957,
      "body": {
        "type": "BlockStatement",
        "start": 940,
        "end": 943,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 949,
        "end": 956,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        },
        "value": null
      }
    },
    {
      "type": "IfStatement",
      "start": 959,
      "end": 970,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 967,
        "end": 970,
        "body": []
      },
      "test": {
        "type": "ArrayExpression",
        "start": 963,
        "end": 965,
        "elements": []
      }
    },
    {
      "type": "WhileStatement",
      "start": 971,
      "end": 985,
      "body": {
        "type": "BlockStatement",
        "start": 982,
        "end": 985,
        "body": []
      },
      "test": {
        "type": "ArrayExpression",
        "start": 978,
        "end": 980,
        "elements": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 986,
      "end": 1001,
      "body": {
        "type": "BlockStatement",
        "start": 989,
        "end": 992,
        "body": []
      },
      "test": {
        "type": "ArrayExpression",
        "start": 998,
        "end": 1000,
        "elements": []
      }
    },
    {
      "type": "IfStatement",
      "start": 1003,
      "end": 1018,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1015,
        "end": 1018,
        "body": []
      },
      "test": {
        "type": "ArrayExpression",
        "start": 1007,
        "end": 1013,
        "elements": [
          {
            "type": "Literal",
            "start": 1008,
            "end": 1009,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1011,
            "end": 1012,
            "raw": "2",
            "value": 2
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 1019,
      "end": 1037,
      "body": {
        "type": "BlockStatement",
        "start": 1034,
        "end": 1037,
        "body": []
      },
      "test": {
        "type": "ArrayExpression",
        "start": 1026,
        "end": 1032,
        "elements": [
          {
            "type": "Literal",
            "start": 1027,
            "end": 1028,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1030,
            "end": 1031,
            "raw": "2",
            "value": 2
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1038,
      "end": 1057,
      "body": {
        "type": "BlockStatement",
        "start": 1041,
        "end": 1044,
        "body": []
      },
      "test": {
        "type": "ArrayExpression",
        "start": 1050,
        "end": 1056,
        "elements": [
          {
            "type": "Literal",
            "start": 1051,
            "end": 1052,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1054,
            "end": 1055,
            "raw": "2",
            "value": 2
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1059,
      "end": 1070,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1067,
        "end": 1070,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1063,
        "end": 1065,
        "properties": []
      }
    },
    {
      "type": "WhileStatement",
      "start": 1071,
      "end": 1085,
      "body": {
        "type": "BlockStatement",
        "start": 1082,
        "end": 1085,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1078,
        "end": 1080,
        "properties": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1086,
      "end": 1101,
      "body": {
        "type": "BlockStatement",
        "start": 1089,
        "end": 1092,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1098,
        "end": 1100,
        "properties": []
      }
    },
    {
      "type": "IfStatement",
      "start": 1103,
      "end": 1128,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1125,
        "end": 1128,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1107,
        "end": 1123,
        "properties": [
          {
            "type": "Property",
            "start": 1109,
            "end": 1113,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1109,
              "end": 1110,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 1112,
              "end": 1113,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "Property",
            "start": 1115,
            "end": 1121,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1115,
              "end": 1116,
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
              "start": 1118,
              "end": 1121,
              "raw": "'a'",
              "value": "a"
            }
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 1129,
      "end": 1157,
      "body": {
        "type": "BlockStatement",
        "start": 1154,
        "end": 1157,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1136,
        "end": 1152,
        "properties": [
          {
            "type": "Property",
            "start": 1138,
            "end": 1142,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1138,
              "end": 1139,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 1141,
              "end": 1142,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "Property",
            "start": 1144,
            "end": 1150,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1144,
              "end": 1145,
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
              "start": 1147,
              "end": 1150,
              "raw": "'a'",
              "value": "a"
            }
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1158,
      "end": 1187,
      "body": {
        "type": "BlockStatement",
        "start": 1161,
        "end": 1164,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1170,
        "end": 1186,
        "properties": [
          {
            "type": "Property",
            "start": 1172,
            "end": 1176,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1172,
              "end": 1173,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 1175,
              "end": 1176,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "Property",
            "start": 1178,
            "end": 1184,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1178,
              "end": 1179,
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
              "start": 1181,
              "end": 1184,
              "raw": "'a'",
              "value": "a"
            }
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1189,
      "end": 1206,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1203,
        "end": 1206,
        "body": []
      },
      "test": {
        "type": "ArrowFunctionExpression",
        "start": 1193,
        "end": 1201,
        "async": false,
        "body": {
          "type": "Literal",
          "start": 1199,
          "end": 1201,
          "raw": "43",
          "value": 43
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": []
      }
    },
    {
      "type": "WhileStatement",
      "start": 1207,
      "end": 1227,
      "body": {
        "type": "BlockStatement",
        "start": 1224,
        "end": 1227,
        "body": []
      },
      "test": {
        "type": "ArrowFunctionExpression",
        "start": 1214,
        "end": 1222,
        "async": false,
        "body": {
          "type": "Literal",
          "start": 1220,
          "end": 1222,
          "raw": "43",
          "value": 43
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1228,
      "end": 1249,
      "body": {
        "type": "BlockStatement",
        "start": 1231,
        "end": 1234,
        "body": []
      },
      "test": {
        "type": "ArrowFunctionExpression",
        "start": 1240,
        "end": 1248,
        "async": false,
        "body": {
          "type": "Literal",
          "start": 1246,
          "end": 1248,
          "raw": "43",
          "value": 43
        },
        "expression": true,
        "generator": false,
        "id": null,
        "params": []
      }
    },
    {
      "type": "IfStatement",
      "start": 1251,
      "end": 1267,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1264,
        "end": 1267,
        "body": []
      },
      "test": {
        "type": "NewExpression",
        "start": 1255,
        "end": 1262,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1259,
          "end": 1260,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 1268,
      "end": 1287,
      "body": {
        "type": "BlockStatement",
        "start": 1284,
        "end": 1287,
        "body": []
      },
      "test": {
        "type": "NewExpression",
        "start": 1275,
        "end": 1282,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1279,
          "end": 1280,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1288,
      "end": 1308,
      "body": {
        "type": "BlockStatement",
        "start": 1291,
        "end": 1294,
        "body": []
      },
      "test": {
        "type": "NewExpression",
        "start": 1300,
        "end": 1307,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1304,
          "end": 1305,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1310,
      "end": 1329,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1326,
        "end": 1329,
        "body": []
      },
      "test": {
        "type": "NewExpression",
        "start": 1314,
        "end": 1324,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1318,
          "end": 1319,
          "decorators": [],
          "name": "D",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1319,
          "end": 1322,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1320,
              "end": 1321,
              "typeName": {
                "type": "Identifier",
                "start": 1320,
                "end": 1321,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 1330,
      "end": 1352,
      "body": {
        "type": "BlockStatement",
        "start": 1349,
        "end": 1352,
        "body": []
      },
      "test": {
        "type": "NewExpression",
        "start": 1337,
        "end": 1347,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1341,
          "end": 1342,
          "decorators": [],
          "name": "D",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1342,
          "end": 1345,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1343,
              "end": 1344,
              "typeName": {
                "type": "Identifier",
                "start": 1343,
                "end": 1344,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1353,
      "end": 1376,
      "body": {
        "type": "BlockStatement",
        "start": 1356,
        "end": 1359,
        "body": []
      },
      "test": {
        "type": "NewExpression",
        "start": 1365,
        "end": 1375,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1369,
          "end": 1370,
          "decorators": [],
          "name": "D",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1370,
          "end": 1373,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1371,
              "end": 1372,
              "typeName": {
                "type": "Identifier",
                "start": 1371,
                "end": 1372,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1392,
      "end": 1405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1396,
          "end": 1404,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1396,
            "end": 1397,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1400,
            "end": 1404,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1406,
      "end": 1416,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1413,
        "end": 1416,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1410,
        "end": 1411,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1417,
      "end": 1430,
      "body": {
        "type": "BlockStatement",
        "start": 1427,
        "end": 1430,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1424,
        "end": 1425,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1431,
      "end": 1445,
      "body": {
        "type": "BlockStatement",
        "start": 1434,
        "end": 1437,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1443,
        "end": 1444,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1447,
      "end": 1460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1451,
          "end": 1459,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1451,
            "end": 1452,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1455,
            "end": 1459,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1461,
      "end": 1471,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1468,
        "end": 1471,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1465,
        "end": 1466,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1472,
      "end": 1485,
      "body": {
        "type": "BlockStatement",
        "start": 1482,
        "end": 1485,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1479,
        "end": 1480,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1486,
      "end": 1500,
      "body": {
        "type": "BlockStatement",
        "start": 1489,
        "end": 1492,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1498,
        "end": 1499,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1502,
      "end": 1520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1506,
          "end": 1519,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1506,
            "end": 1507,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1510,
            "end": 1519,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1521,
      "end": 1531,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1528,
        "end": 1531,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1525,
        "end": 1526,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1532,
      "end": 1545,
      "body": {
        "type": "BlockStatement",
        "start": 1542,
        "end": 1545,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1539,
        "end": 1540,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1546,
      "end": 1560,
      "body": {
        "type": "BlockStatement",
        "start": 1549,
        "end": 1552,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1558,
        "end": 1559,
        "decorators": [],
        "name": "c",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1562,
      "end": 1574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1566,
          "end": 1573,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1566,
            "end": 1567,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1570,
            "end": 1573,
            "raw": "0.0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1575,
      "end": 1585,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1582,
        "end": 1585,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1579,
        "end": 1580,
        "decorators": [],
        "name": "d",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1586,
      "end": 1599,
      "body": {
        "type": "BlockStatement",
        "start": 1596,
        "end": 1599,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1593,
        "end": 1594,
        "decorators": [],
        "name": "d",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1600,
      "end": 1614,
      "body": {
        "type": "BlockStatement",
        "start": 1603,
        "end": 1606,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1612,
        "end": 1613,
        "decorators": [],
        "name": "d",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1616,
      "end": 1635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1620,
          "end": 1634,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1620,
            "end": 1621,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1624,
            "end": 1634,
            "raw": "'a string'",
            "value": "a string"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1636,
      "end": 1646,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1643,
        "end": 1646,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1640,
        "end": 1641,
        "decorators": [],
        "name": "e",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1647,
      "end": 1660,
      "body": {
        "type": "BlockStatement",
        "start": 1657,
        "end": 1660,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1654,
        "end": 1655,
        "decorators": [],
        "name": "e",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1661,
      "end": 1675,
      "body": {
        "type": "BlockStatement",
        "start": 1664,
        "end": 1667,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1673,
        "end": 1674,
        "decorators": [],
        "name": "e",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1677,
      "end": 1688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1681,
          "end": 1687,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1681,
            "end": 1682,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1685,
            "end": 1687,
            "raw": "''",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1689,
      "end": 1699,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1696,
        "end": 1699,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1693,
        "end": 1694,
        "decorators": [],
        "name": "f",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1700,
      "end": 1713,
      "body": {
        "type": "BlockStatement",
        "start": 1710,
        "end": 1713,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1707,
        "end": 1708,
        "decorators": [],
        "name": "f",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1714,
      "end": 1728,
      "body": {
        "type": "BlockStatement",
        "start": 1717,
        "end": 1720,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1726,
        "end": 1727,
        "decorators": [],
        "name": "f",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1730,
      "end": 1745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1734,
          "end": 1745,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1734,
            "end": 1735,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1738,
            "end": 1745,
            "raw": "/[a-z]/",
            "regex": {
              "flags": "",
              "pattern": "[a-z]"
            },
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1746,
      "end": 1756,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1753,
        "end": 1756,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1750,
        "end": 1751,
        "decorators": [],
        "name": "g",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1757,
      "end": 1770,
      "body": {
        "type": "BlockStatement",
        "start": 1767,
        "end": 1770,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1764,
        "end": 1765,
        "decorators": [],
        "name": "g",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1771,
      "end": 1785,
      "body": {
        "type": "BlockStatement",
        "start": 1774,
        "end": 1777,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1783,
        "end": 1784,
        "decorators": [],
        "name": "g",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1787,
      "end": 1798,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1791,
          "end": 1797,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1791,
            "end": 1792,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1795,
            "end": 1797,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1799,
      "end": 1809,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1806,
        "end": 1809,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1803,
        "end": 1804,
        "decorators": [],
        "name": "h",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1810,
      "end": 1823,
      "body": {
        "type": "BlockStatement",
        "start": 1820,
        "end": 1823,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1817,
        "end": 1818,
        "decorators": [],
        "name": "h",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1824,
      "end": 1838,
      "body": {
        "type": "BlockStatement",
        "start": 1827,
        "end": 1830,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1836,
        "end": 1837,
        "decorators": [],
        "name": "h",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1840,
      "end": 1855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1844,
          "end": 1854,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1844,
            "end": 1845,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1848,
            "end": 1854,
            "elements": [
              {
                "type": "Literal",
                "start": 1849,
                "end": 1850,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1852,
                "end": 1853,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1856,
      "end": 1866,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1863,
        "end": 1866,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1860,
        "end": 1861,
        "decorators": [],
        "name": "i",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1867,
      "end": 1880,
      "body": {
        "type": "BlockStatement",
        "start": 1877,
        "end": 1880,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1874,
        "end": 1875,
        "decorators": [],
        "name": "i",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1881,
      "end": 1895,
      "body": {
        "type": "BlockStatement",
        "start": 1884,
        "end": 1887,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1893,
        "end": 1894,
        "decorators": [],
        "name": "i",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1897,
      "end": 1908,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1901,
          "end": 1907,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1901,
            "end": 1902,
            "decorators": [],
            "name": "j",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1905,
            "end": 1907,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 1909,
      "end": 1919,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1916,
        "end": 1919,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1913,
        "end": 1914,
        "decorators": [],
        "name": "j",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1920,
      "end": 1933,
      "body": {
        "type": "BlockStatement",
        "start": 1930,
        "end": 1933,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1927,
        "end": 1928,
        "decorators": [],
        "name": "j",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1934,
      "end": 1948,
      "body": {
        "type": "BlockStatement",
        "start": 1937,
        "end": 1940,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1946,
        "end": 1947,
        "decorators": [],
        "name": "j",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1950,
      "end": 1975,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1954,
          "end": 1974,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1954,
            "end": 1955,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1958,
            "end": 1974,
            "properties": [
              {
                "type": "Property",
                "start": 1960,
                "end": 1964,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1960,
                  "end": 1961,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1963,
                  "end": 1964,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 1966,
                "end": 1972,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1966,
                  "end": 1967,
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
                  "start": 1969,
                  "end": 1972,
                  "raw": "'a'",
                  "value": "a"
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
      "type": "IfStatement",
      "start": 1976,
      "end": 1986,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1983,
        "end": 1986,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1980,
        "end": 1981,
        "decorators": [],
        "name": "k",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 1987,
      "end": 2000,
      "body": {
        "type": "BlockStatement",
        "start": 1997,
        "end": 2000,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1994,
        "end": 1995,
        "decorators": [],
        "name": "k",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 2001,
      "end": 2015,
      "body": {
        "type": "BlockStatement",
        "start": 2004,
        "end": 2007,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 2013,
        "end": 2014,
        "decorators": [],
        "name": "k",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2017,
      "end": 2060,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2044,
        "end": 2060,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2046,
            "end": 2058,
            "argument": {
              "type": "Literal",
              "start": 2053,
              "end": 2057,
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
        "start": 2026,
        "end": 2028,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2029,
          "end": 2039,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2031,
            "end": 2039,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2033,
              "end": 2039
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2040,
        "end": 2043,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2042,
          "end": 2043,
          "typeName": {
            "type": "Identifier",
            "start": 2042,
            "end": 2043,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 2061,
      "end": 2074,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2071,
        "end": 2074,
        "body": []
      },
      "test": {
        "type": "CallExpression",
        "start": 2065,
        "end": 2069,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2065,
          "end": 2067,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 2075,
      "end": 2091,
      "body": {
        "type": "BlockStatement",
        "start": 2088,
        "end": 2091,
        "body": []
      },
      "test": {
        "type": "CallExpression",
        "start": 2082,
        "end": 2086,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2082,
          "end": 2084,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 2092,
      "end": 2109,
      "body": {
        "type": "BlockStatement",
        "start": 2095,
        "end": 2098,
        "body": []
      },
      "test": {
        "type": "CallExpression",
        "start": 2104,
        "end": 2108,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2104,
          "end": 2106,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 2111,
      "end": 2122,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2119,
        "end": 2122,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 2115,
        "end": 2117,
        "decorators": [],
        "name": "fn",
        "optional": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 2123,
      "end": 2137,
      "body": {
        "type": "BlockStatement",
        "start": 2134,
        "end": 2137,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 2130,
        "end": 2132,
        "decorators": [],
        "name": "fn",
        "optional": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 2138,
      "end": 2153,
      "body": {
        "type": "BlockStatement",
        "start": 2141,
        "end": 2144,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 2150,
        "end": 2152,
        "decorators": [],
        "name": "fn",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
