__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 93,
  "end": 988,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 115,
        "decorators": [],
        "name": "someGenerics1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 120,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
          "start": 122,
          "end": 126,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 126,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 128,
          "end": 137,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 129,
            "end": 137,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 131,
              "end": 137
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 139,
        "end": 142,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 179,
      "expression": {
        "type": "CallExpression",
        "start": 143,
        "end": 178,
        "callee": {
          "type": "Identifier",
          "start": 143,
          "end": 156,
          "decorators": [],
          "name": "someGenerics1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 156,
          "end": 172,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 157,
              "end": 163
            },
            {
              "type": "TSNumberKeyword",
              "start": 165,
              "end": 171
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 173,
            "end": 174,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 176,
            "end": 177,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 331,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 353,
        "decorators": [],
        "name": "someGenerics4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 353,
        "end": 359,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 354,
            "end": 355,
            "name": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 357,
            "end": 358,
            "name": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
          "start": 360,
          "end": 364,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 361,
            "end": 364,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 363,
              "end": 364,
              "typeName": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 366,
          "end": 383,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 367,
            "end": 383,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 369,
              "end": 383,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 370,
                  "end": 374,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 371,
                    "end": 374,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 374,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 376,
                "end": 383,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 379,
                  "end": 383
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 385,
        "end": 388,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 389,
      "end": 442,
      "expression": {
        "type": "CallExpression",
        "start": 389,
        "end": 441,
        "callee": {
          "type": "Identifier",
          "start": 389,
          "end": 402,
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 402,
          "end": 418,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 403,
              "end": 409
            },
            {
              "type": "TSNumberKeyword",
              "start": 411,
              "end": 417
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 419,
            "end": 421,
            "value": "",
            "raw": "''"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 423,
            "end": 440,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 424,
                "end": 433,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 425,
                  "end": 433,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 427,
                    "end": 433
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 438,
              "end": 440,
              "value": "",
              "raw": "''"
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 594,
      "end": 651,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 616,
        "decorators": [],
        "name": "someGenerics5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 616,
        "end": 622,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 617,
            "end": 618,
            "name": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 620,
            "end": 621,
            "name": {
              "type": "Identifier",
              "start": 620,
              "end": 621,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 623,
          "end": 627,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 624,
            "end": 627,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 626,
              "end": 627,
              "typeName": {
                "type": "Identifier",
                "start": 626,
                "end": 627,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 629,
          "end": 646,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 630,
            "end": 646,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 632,
              "end": 646,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 633,
                  "end": 637,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 634,
                    "end": 637,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 636,
                      "end": 637,
                      "typeName": {
                        "type": "Identifier",
                        "start": 636,
                        "end": 637,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 639,
                "end": 646,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 642,
                  "end": 646
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 648,
        "end": 651,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 705,
      "expression": {
        "type": "CallExpression",
        "start": 652,
        "end": 704,
        "callee": {
          "type": "Identifier",
          "start": 652,
          "end": 665,
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 665,
          "end": 681,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 666,
              "end": 672
            },
            {
              "type": "TSStringKeyword",
              "start": 674,
              "end": 680
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 682,
            "end": 684,
            "value": "",
            "raw": "''"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 686,
            "end": 703,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 687,
                "end": 696,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 688,
                  "end": 696,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 690,
                    "end": 696
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 701,
              "end": 703,
              "value": "",
              "raw": "''"
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 825,
      "end": 902,
      "id": {
        "type": "Identifier",
        "start": 834,
        "end": 847,
        "decorators": [],
        "name": "someGenerics6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 847,
        "end": 850,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 848,
            "end": 849,
            "name": {
              "type": "Identifier",
              "start": 848,
              "end": 849,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
          "start": 851,
          "end": 865,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 852,
            "end": 865,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 854,
              "end": 865,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 855,
                  "end": 859,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 856,
                    "end": 859,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 858,
                      "end": 859,
                      "typeName": {
                        "type": "Identifier",
                        "start": 858,
                        "end": 859,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 861,
                "end": 865,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 864,
                  "end": 865,
                  "typeName": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 865,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 867,
          "end": 881,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 868,
            "end": 881,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 870,
              "end": 881,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 871,
                  "end": 875,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 872,
                    "end": 875,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 874,
                      "end": 875,
                      "typeName": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 875,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 877,
                "end": 881,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 880,
                  "end": 881,
                  "typeName": {
                    "type": "Identifier",
                    "start": 880,
                    "end": 881,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 883,
          "end": 897,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 884,
            "end": 897,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 886,
              "end": 897,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 887,
                  "end": 891,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 888,
                    "end": 891,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 890,
                      "end": 891,
                      "typeName": {
                        "type": "Identifier",
                        "start": 890,
                        "end": 891,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 893,
                "end": 897,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 896,
                  "end": 897,
                  "typeName": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 897,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 899,
        "end": 902,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 903,
      "end": 979,
      "expression": {
        "type": "CallExpression",
        "start": 903,
        "end": 978,
        "callee": {
          "type": "Identifier",
          "start": 903,
          "end": 916,
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 916,
          "end": 924,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 917,
              "end": 923
            }
          ]
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 925,
            "end": 941,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 926,
                "end": 935,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 927,
                  "end": 935,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 929,
                    "end": 935
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 940,
              "end": 941,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 943,
            "end": 959,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 944,
                "end": 953,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 945,
                  "end": 953,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 947,
                    "end": 953
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 958,
              "end": 959,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 961,
            "end": 977,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 962,
                "end": 971,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 963,
                  "end": 971,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 965,
                    "end": 971
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 976,
              "end": 977,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
