__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 221,
  "end": 1122,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 221,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 233,
        "name": "Record2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 233,
        "end": 257,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 234,
            "end": 253,
            "name": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 244,
              "end": 253,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 250,
                "end": 253
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 255,
            "end": 256,
            "name": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 260,
        "end": 280,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 267,
          "end": 273,
          "name": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 272,
            "end": 273,
            "typeName": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "K",
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 276,
          "end": 277,
          "typeName": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 272,
          "end": 273,
          "typeName": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 267,
          "end": 268,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 283,
      "end": 404,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 305,
        "name": "defaultRecord",
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
          "start": 306,
          "end": 328,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 307,
            "end": 328,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 309,
              "end": 328,
              "typeName": {
                "type": "Identifier",
                "start": 309,
                "end": 315,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 315,
                "end": 328,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 316,
                    "end": 319,
                    "literal": {
                      "type": "Literal",
                      "start": 316,
                      "end": 319,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 321,
                    "end": 327
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 330,
          "end": 355,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 331,
            "end": 355,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 333,
              "end": 355,
              "typeName": {
                "type": "Identifier",
                "start": 333,
                "end": 339,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 339,
                "end": 355,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 340,
                    "end": 346
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 348,
                    "end": 354
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 404,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 363,
            "end": 369,
            "expression": {
              "type": "AssignmentExpression",
              "start": 363,
              "end": 368,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 367,
                "end": 368,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 406,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 427,
        "name": "customRecord",
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
          "start": 428,
          "end": 451,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 429,
            "end": 451,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 431,
              "end": 451,
              "typeName": {
                "type": "Identifier",
                "start": 431,
                "end": 438,
                "name": "Record2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 438,
                "end": 451,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 439,
                    "end": 442,
                    "literal": {
                      "type": "Literal",
                      "start": 439,
                      "end": 442,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 444,
                    "end": 450
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 453,
          "end": 479,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 454,
            "end": 479,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 456,
              "end": 479,
              "typeName": {
                "type": "Identifier",
                "start": 456,
                "end": 463,
                "name": "Record2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 463,
                "end": 479,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 464,
                    "end": 470
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 472,
                    "end": 478
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 481,
        "end": 528,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 487,
            "end": 493,
            "expression": {
              "type": "AssignmentExpression",
              "start": 487,
              "end": 492,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 530,
      "end": 621,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 545,
        "name": "mixed1",
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
          "start": 546,
          "end": 569,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 547,
            "end": 569,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 549,
              "end": 569,
              "typeName": {
                "type": "Identifier",
                "start": 549,
                "end": 556,
                "name": "Record2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 556,
                "end": 569,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 557,
                    "end": 560,
                    "literal": {
                      "type": "Literal",
                      "start": 557,
                      "end": 560,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 562,
                    "end": 568
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 571,
          "end": 596,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 596,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 574,
              "end": 596,
              "typeName": {
                "type": "Identifier",
                "start": 574,
                "end": 580,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 580,
                "end": 596,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 581,
                    "end": 587
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 589,
                    "end": 595
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 598,
        "end": 621,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 604,
            "end": 610,
            "expression": {
              "type": "AssignmentExpression",
              "start": 604,
              "end": 609,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 604,
                "end": 605,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 608,
                "end": 609,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 623,
      "end": 714,
      "id": {
        "type": "Identifier",
        "start": 632,
        "end": 638,
        "name": "mixed2",
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
          "start": 639,
          "end": 661,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 661,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 642,
              "end": 661,
              "typeName": {
                "type": "Identifier",
                "start": 642,
                "end": 648,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 648,
                "end": 661,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 649,
                    "end": 652,
                    "literal": {
                      "type": "Literal",
                      "start": 649,
                      "end": 652,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 654,
                    "end": 660
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 663,
          "end": 689,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 664,
            "end": 689,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 666,
              "end": 689,
              "typeName": {
                "type": "Identifier",
                "start": 666,
                "end": 673,
                "name": "Record2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 673,
                "end": 689,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 674,
                    "end": 680
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 682,
                    "end": 688
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 691,
        "end": 714,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 697,
            "end": 703,
            "expression": {
              "type": "AssignmentExpression",
              "start": 697,
              "end": 702,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 697,
                "end": 698,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 701,
                "end": 702,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 716,
      "end": 831,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 739,
        "name": "defaultRecord2",
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
          "start": 743,
          "end": 760,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 744,
            "end": 760,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 746,
              "end": 760,
              "typeName": {
                "type": "Identifier",
                "start": 746,
                "end": 752,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 752,
                "end": 760,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 753,
                    "end": 756,
                    "literal": {
                      "type": "Literal",
                      "start": 753,
                      "end": 756,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 758,
                    "end": 759,
                    "typeName": {
                      "type": "Identifier",
                      "start": 758,
                      "end": 759,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 762,
          "end": 782,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 763,
            "end": 782,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 765,
              "end": 782,
              "typeName": {
                "type": "Identifier",
                "start": 765,
                "end": 771,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 771,
                "end": 782,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 772,
                    "end": 778
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 780,
                    "end": 781,
                    "typeName": {
                      "type": "Identifier",
                      "start": 780,
                      "end": 781,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 784,
        "end": 831,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 790,
            "end": 796,
            "expression": {
              "type": "AssignmentExpression",
              "start": 790,
              "end": 795,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 790,
                "end": 791,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 794,
                "end": 795,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 739,
        "end": 742,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 740,
            "end": 741,
            "name": {
              "type": "Identifier",
              "start": 740,
              "end": 741,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 833,
      "end": 949,
      "id": {
        "type": "Identifier",
        "start": 842,
        "end": 855,
        "name": "customRecord2",
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
          "start": 859,
          "end": 877,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 860,
            "end": 877,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 862,
              "end": 877,
              "typeName": {
                "type": "Identifier",
                "start": 862,
                "end": 869,
                "name": "Record2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 869,
                "end": 877,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 870,
                    "end": 873,
                    "literal": {
                      "type": "Literal",
                      "start": 870,
                      "end": 873,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 875,
                    "end": 876,
                    "typeName": {
                      "type": "Identifier",
                      "start": 875,
                      "end": 876,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 879,
          "end": 900,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 880,
            "end": 900,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 882,
              "end": 900,
              "typeName": {
                "type": "Identifier",
                "start": 882,
                "end": 889,
                "name": "Record2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 889,
                "end": 900,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 890,
                    "end": 896
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 898,
                    "end": 899,
                    "typeName": {
                      "type": "Identifier",
                      "start": 898,
                      "end": 899,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 902,
        "end": 949,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 908,
            "end": 914,
            "expression": {
              "type": "AssignmentExpression",
              "start": 908,
              "end": 913,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 908,
                "end": 909,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 912,
                "end": 913,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 855,
        "end": 858,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 856,
            "end": 857,
            "name": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 951,
      "end": 1035,
      "id": {
        "type": "Identifier",
        "start": 960,
        "end": 966,
        "name": "mixed3",
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
          "start": 970,
          "end": 988,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 971,
            "end": 988,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 973,
              "end": 988,
              "typeName": {
                "type": "Identifier",
                "start": 973,
                "end": 980,
                "name": "Record2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 980,
                "end": 988,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 981,
                    "end": 984,
                    "literal": {
                      "type": "Literal",
                      "start": 981,
                      "end": 984,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 986,
                    "end": 987,
                    "typeName": {
                      "type": "Identifier",
                      "start": 986,
                      "end": 987,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 990,
          "end": 1010,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 991,
            "end": 1010,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 993,
              "end": 1010,
              "typeName": {
                "type": "Identifier",
                "start": 993,
                "end": 999,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 999,
                "end": 1010,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1008,
                    "end": 1009,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1008,
                      "end": 1009,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1012,
        "end": 1035,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1018,
            "end": 1024,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1018,
              "end": 1023,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1018,
                "end": 1019,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1022,
                "end": 1023,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 966,
        "end": 969,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 967,
            "end": 968,
            "name": {
              "type": "Identifier",
              "start": 967,
              "end": 968,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1037,
      "end": 1121,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1052,
        "name": "mixed4",
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
          "start": 1056,
          "end": 1073,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1057,
            "end": 1073,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1059,
              "end": 1073,
              "typeName": {
                "type": "Identifier",
                "start": 1059,
                "end": 1065,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1065,
                "end": 1073,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 1066,
                    "end": 1069,
                    "literal": {
                      "type": "Literal",
                      "start": 1066,
                      "end": 1069,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1071,
                    "end": 1072,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1072,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1075,
          "end": 1096,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1076,
            "end": 1096,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1078,
              "end": 1096,
              "typeName": {
                "type": "Identifier",
                "start": 1078,
                "end": 1085,
                "name": "Record2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1085,
                "end": 1096,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1086,
                    "end": 1092
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1094,
                    "end": 1095,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1094,
                      "end": 1095,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1098,
        "end": 1121,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1104,
            "end": 1110,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1104,
              "end": 1109,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1104,
                "end": 1105,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1108,
                "end": 1109,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1052,
        "end": 1055,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1053,
            "end": 1054,
            "name": {
              "type": "Identifier",
              "start": 1053,
              "end": 1054,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
