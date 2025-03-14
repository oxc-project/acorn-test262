__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 202,
  "end": 3559,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 202,
      "end": 408,
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 408,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 224,
            "end": 260,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 240,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 241,
                "end": 250,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 242,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 244,
                    "end": 250
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 259,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 253,
                "end": 259
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 265,
            "end": 292,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 283,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 291,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 285,
                "end": 291
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 297,
            "end": 336,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 326,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 327,
                "end": 331,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 328,
                  "end": 331,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 330,
                    "end": 331,
                    "typeName": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 335,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 334,
                "end": 335,
                "typeName": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 335,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 342,
            "end": 376,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 356,
              "decorators": [],
              "name": "methodOnlyInI1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 357,
                "end": 366,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 358,
                  "end": 366,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 360,
                    "end": 366
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 375,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 369,
                "end": 375
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 381,
            "end": 406,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 397,
              "decorators": [],
              "name": "propertyOnlyInI1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 405,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 399,
                "end": 405
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 214,
        "decorators": [],
        "name": "I1",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 216,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
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
      "type": "TSInterfaceDeclaration",
      "start": 409,
      "end": 615,
      "body": {
        "type": "TSInterfaceBody",
        "start": 425,
        "end": 615,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 431,
            "end": 467,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 447,
              "decorators": [],
              "name": "commonMethodType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 448,
                "end": 457,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 449,
                  "end": 457,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 451,
                    "end": 457
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 466,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 460,
                "end": 466
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 472,
            "end": 499,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 472,
              "end": 490,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 498,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 492,
                "end": 498
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 504,
            "end": 543,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 533,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 534,
                "end": 538,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 535,
                  "end": 538,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 537,
                    "end": 538,
                    "typeName": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 538,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 539,
              "end": 542,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 541,
                "end": 542,
                "typeName": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 542,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 549,
            "end": 583,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 549,
              "end": 563,
              "decorators": [],
              "name": "methodOnlyInI2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 564,
                "end": 573,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 565,
                  "end": 573,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 567,
                    "end": 573
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 582,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 576,
                "end": 582
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 588,
            "end": 613,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 588,
              "end": 604,
              "decorators": [],
              "name": "propertyOnlyInI2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 604,
              "end": 612,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 606,
                "end": 612
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 421,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 421,
        "end": 424,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 422,
            "end": 423,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
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
      "type": "VariableDeclaration",
      "start": 770,
      "end": 789,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 788,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 788,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 776,
              "end": 788,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 778,
                "end": 788,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 780,
                  "end": 788,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 781,
                      "end": 787
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 780,
                  "decorators": [],
                  "name": "I1",
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 790,
      "end": 809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 794,
          "end": 808,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 794,
            "end": 808,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 808,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 798,
                "end": 808,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 800,
                  "end": 808,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 801,
                      "end": 807
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 800,
                  "decorators": [],
                  "name": "I2",
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 810,
      "end": 851,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 850,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 845,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 820,
              "end": 845,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 822,
                "end": 845,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 822,
                    "end": 832,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 824,
                      "end": 832,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 825,
                          "end": 831
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 822,
                      "end": 824,
                      "decorators": [],
                      "name": "I1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 835,
                    "end": 845,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 837,
                      "end": 845,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 838,
                          "end": 844
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 837,
                      "decorators": [],
                      "name": "I2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 848,
            "end": 850,
            "decorators": [],
            "name": "i1",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 852,
      "end": 893,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 856,
          "end": 892,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 856,
            "end": 887,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 862,
              "end": 887,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 864,
                "end": 887,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 864,
                    "end": 874,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 866,
                      "end": 874,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 867,
                          "end": 873
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 866,
                      "decorators": [],
                      "name": "I1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 877,
                    "end": 887,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 879,
                      "end": 887,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 880,
                          "end": 886
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 877,
                      "end": 879,
                      "decorators": [],
                      "name": "I2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 890,
            "end": 892,
            "decorators": [],
            "name": "i2",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 894,
      "end": 1112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 898,
          "end": 1111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 929,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 904,
              "end": 929,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 906,
                "end": 929,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 906,
                    "end": 916,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 908,
                      "end": 916,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 909,
                          "end": 915
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 906,
                      "end": 908,
                      "decorators": [],
                      "name": "I1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 919,
                    "end": 929,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 921,
                      "end": 929,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 922,
                          "end": 928
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 919,
                      "end": 921,
                      "decorators": [],
                      "name": "I2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 932,
            "end": 1111,
            "properties": [
              {
                "type": "Property",
                "start": 949,
                "end": 976,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 967,
                  "decorators": [],
                  "name": "commonPropertyType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 969,
                  "end": 976,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              {
                "type": "Property",
                "start": 982,
                "end": 1005,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 982,
                  "end": 998,
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1000,
                  "end": 1005,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1004,
                    "end": 1005,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1000,
                      "end": 1001,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1011,
                "end": 1048,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1011,
                  "end": 1040,
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1042,
                  "end": 1048,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1047,
                    "end": 1048,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1042,
                      "end": 1043,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1055,
                "end": 1077,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1069,
                  "decorators": [],
                  "name": "methodOnlyInI1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1071,
                  "end": 1077,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1077,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1072,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1083,
                "end": 1108,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1083,
                  "end": 1099,
                  "decorators": [],
                  "name": "propertyOnlyInI1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1101,
                  "end": 1108,
                  "raw": "\"Hello\"",
                  "value": "Hello"
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
      "start": 1113,
      "end": 1331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1117,
          "end": 1330,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1117,
            "end": 1148,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1123,
              "end": 1148,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1125,
                "end": 1148,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1125,
                    "end": 1135,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1127,
                      "end": 1135,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1128,
                          "end": 1134
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1125,
                      "end": 1127,
                      "decorators": [],
                      "name": "I1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1138,
                    "end": 1148,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1140,
                      "end": 1148,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1141,
                          "end": 1147
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1138,
                      "end": 1140,
                      "decorators": [],
                      "name": "I2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1151,
            "end": 1330,
            "properties": [
              {
                "type": "Property",
                "start": 1168,
                "end": 1195,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1168,
                  "end": 1186,
                  "decorators": [],
                  "name": "commonPropertyType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1188,
                  "end": 1195,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              {
                "type": "Property",
                "start": 1201,
                "end": 1224,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1217,
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1219,
                  "end": 1224,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1219,
                      "end": 1220,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1230,
                "end": 1267,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1230,
                  "end": 1259,
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1261,
                  "end": 1267,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1266,
                    "end": 1267,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1261,
                      "end": 1262,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1274,
                "end": 1296,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1274,
                  "end": 1288,
                  "decorators": [],
                  "name": "methodOnlyInI2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1290,
                  "end": 1296,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1295,
                    "end": 1296,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1290,
                      "end": 1291,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1302,
                "end": 1327,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1318,
                  "decorators": [],
                  "name": "propertyOnlyInI2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1320,
                  "end": 1327,
                  "raw": "\"Hello\"",
                  "value": "Hello"
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
      "start": 1332,
      "end": 1620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1336,
          "end": 1619,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1336,
            "end": 1367,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1342,
              "end": 1367,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1344,
                "end": 1367,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1344,
                    "end": 1354,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1346,
                      "end": 1354,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1347,
                          "end": 1353
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1344,
                      "end": 1346,
                      "decorators": [],
                      "name": "I1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1357,
                    "end": 1367,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1359,
                      "end": 1367,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1360,
                          "end": 1366
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1357,
                      "end": 1359,
                      "decorators": [],
                      "name": "I2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1370,
            "end": 1619,
            "properties": [
              {
                "type": "Property",
                "start": 1399,
                "end": 1426,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1399,
                  "end": 1417,
                  "decorators": [],
                  "name": "commonPropertyType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1419,
                  "end": 1426,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              {
                "type": "Property",
                "start": 1432,
                "end": 1455,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1448,
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1450,
                  "end": 1455,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1454,
                    "end": 1455,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1450,
                      "end": 1451,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1461,
                "end": 1498,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1490,
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1492,
                  "end": 1498,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1497,
                    "end": 1498,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1492,
                      "end": 1493,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1504,
                "end": 1526,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1504,
                  "end": 1518,
                  "decorators": [],
                  "name": "methodOnlyInI1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1520,
                  "end": 1526,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1525,
                    "end": 1526,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1520,
                      "end": 1521,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1532,
                "end": 1557,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1532,
                  "end": 1548,
                  "decorators": [],
                  "name": "propertyOnlyInI1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1550,
                  "end": 1557,
                  "raw": "\"Hello\"",
                  "value": "Hello"
                }
              },
              {
                "type": "Property",
                "start": 1563,
                "end": 1585,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1563,
                  "end": 1577,
                  "decorators": [],
                  "name": "methodOnlyInI2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1579,
                  "end": 1585,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1584,
                    "end": 1585,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1579,
                      "end": 1580,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1591,
                "end": 1616,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1591,
                  "end": 1607,
                  "decorators": [],
                  "name": "propertyOnlyInI2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1609,
                  "end": 1616,
                  "raw": "\"Hello\"",
                  "value": "Hello"
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
      "start": 1622,
      "end": 2378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1626,
          "end": 2377,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1626,
            "end": 1669,
            "decorators": [],
            "name": "arrayI1OrI2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1637,
              "end": 1669,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1639,
                "end": 1669,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1644,
                  "end": 1669,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 1645,
                      "end": 1668,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1645,
                          "end": 1655,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1647,
                            "end": 1655,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1648,
                                "end": 1654
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1645,
                            "end": 1647,
                            "decorators": [],
                            "name": "I1",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1658,
                          "end": 1668,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1660,
                            "end": 1668,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1661,
                                "end": 1667
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1658,
                            "end": 1660,
                            "decorators": [],
                            "name": "I2",
                            "optional": false
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1639,
                  "end": 1644,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1672,
            "end": 2377,
            "elements": [
              {
                "type": "Identifier",
                "start": 1673,
                "end": 1675,
                "decorators": [],
                "name": "i1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1677,
                "end": 1679,
                "decorators": [],
                "name": "i2",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 1681,
                "end": 1884,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1702,
                    "end": 1729,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1702,
                      "end": 1720,
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1722,
                      "end": 1729,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1739,
                    "end": 1762,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1755,
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1757,
                      "end": 1762,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 1761,
                        "end": 1762,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1757,
                          "end": 1758,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1772,
                    "end": 1809,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1772,
                      "end": 1801,
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1803,
                      "end": 1809,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 1808,
                        "end": 1809,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1803,
                          "end": 1804,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1820,
                    "end": 1842,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1820,
                      "end": 1834,
                      "decorators": [],
                      "name": "methodOnlyInI1",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1836,
                      "end": 1842,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 1841,
                        "end": 1842,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1837,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1852,
                    "end": 1877,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1852,
                      "end": 1868,
                      "decorators": [],
                      "name": "propertyOnlyInI1",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1870,
                      "end": 1877,
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 1890,
                "end": 2093,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1911,
                    "end": 1938,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1911,
                      "end": 1929,
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1931,
                      "end": 1938,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1948,
                    "end": 1971,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1948,
                      "end": 1964,
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1966,
                      "end": 1971,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 1970,
                        "end": 1971,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1966,
                          "end": 1967,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1981,
                    "end": 2018,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1981,
                      "end": 2010,
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2012,
                      "end": 2018,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 2017,
                        "end": 2018,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2012,
                          "end": 2013,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2029,
                    "end": 2051,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2029,
                      "end": 2043,
                      "decorators": [],
                      "name": "methodOnlyInI2",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2045,
                      "end": 2051,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 2050,
                        "end": 2051,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2046,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2061,
                    "end": 2086,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2061,
                      "end": 2077,
                      "decorators": [],
                      "name": "propertyOnlyInI2",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 2079,
                      "end": 2086,
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 2095,
                "end": 2376,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2128,
                    "end": 2155,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2128,
                      "end": 2146,
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 2148,
                      "end": 2155,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2165,
                    "end": 2188,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2165,
                      "end": 2181,
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2183,
                      "end": 2188,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 2187,
                        "end": 2188,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2183,
                          "end": 2184,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2198,
                    "end": 2235,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2198,
                      "end": 2227,
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2229,
                      "end": 2235,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 2234,
                        "end": 2235,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2229,
                          "end": 2230,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2245,
                    "end": 2267,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2245,
                      "end": 2259,
                      "decorators": [],
                      "name": "methodOnlyInI1",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2261,
                      "end": 2267,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 2266,
                        "end": 2267,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2261,
                          "end": 2262,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2277,
                    "end": 2302,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2277,
                      "end": 2293,
                      "decorators": [],
                      "name": "propertyOnlyInI1",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 2295,
                      "end": 2302,
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2312,
                    "end": 2334,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2312,
                      "end": 2326,
                      "decorators": [],
                      "name": "methodOnlyInI2",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2328,
                      "end": 2334,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 2333,
                        "end": 2334,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2328,
                          "end": 2329,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2344,
                    "end": 2369,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2344,
                      "end": 2360,
                      "decorators": [],
                      "name": "propertyOnlyInI2",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 2362,
                      "end": 2369,
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2380,
      "end": 2505,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2394,
        "end": 2505,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2400,
            "end": 2462,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2400,
              "end": 2431,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2432,
                "end": 2441,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2433,
                  "end": 2441,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2435,
                    "end": 2441
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 2443,
                "end": 2452,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2444,
                  "end": 2452,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2446,
                    "end": 2452
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2453,
              "end": 2461,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2455,
                "end": 2461
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2467,
            "end": 2503,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2467,
              "end": 2494,
              "decorators": [],
              "name": "commonPropertyDifferentType",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2494,
              "end": 2502,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2496,
                "end": 2502
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2390,
        "end": 2393,
        "decorators": [],
        "name": "I11",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2506,
      "end": 2631,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2520,
        "end": 2631,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2526,
            "end": 2588,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2526,
              "end": 2557,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2558,
                "end": 2567,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2559,
                  "end": 2567,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2561,
                    "end": 2567
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 2569,
                "end": 2578,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2570,
                  "end": 2578,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2572,
                    "end": 2578
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2579,
              "end": 2587,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2581,
                "end": 2587
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2593,
            "end": 2629,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2593,
              "end": 2620,
              "decorators": [],
              "name": "commonPropertyDifferentType",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2620,
              "end": 2628,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2622,
                "end": 2628
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2516,
        "end": 2519,
        "decorators": [],
        "name": "I21",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2632,
      "end": 2645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2636,
          "end": 2644,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2636,
            "end": 2644,
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2639,
              "end": 2644,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2641,
                "end": 2644,
                "typeName": {
                  "type": "Identifier",
                  "start": 2641,
                  "end": 2644,
                  "decorators": [],
                  "name": "I11",
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 2646,
      "end": 2659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2650,
          "end": 2658,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2650,
            "end": 2658,
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2653,
              "end": 2658,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2655,
                "end": 2658,
                "typeName": {
                  "type": "Identifier",
                  "start": 2655,
                  "end": 2658,
                  "decorators": [],
                  "name": "I21",
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 2660,
      "end": 2690,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2664,
          "end": 2689,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2664,
            "end": 2683,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2672,
              "end": 2683,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2674,
                "end": 2683,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2674,
                    "end": 2677,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2674,
                      "end": 2677,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2680,
                    "end": 2683,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2680,
                      "end": 2683,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 2686,
            "end": 2689,
            "decorators": [],
            "name": "i11",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2691,
      "end": 2721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2695,
          "end": 2720,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2695,
            "end": 2714,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2703,
              "end": 2714,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2705,
                "end": 2714,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2705,
                    "end": 2708,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2705,
                      "end": 2708,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2711,
                    "end": 2714,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2711,
                      "end": 2714,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 2717,
            "end": 2720,
            "decorators": [],
            "name": "i21",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2722,
      "end": 2917,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2726,
          "end": 2916,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2726,
            "end": 2745,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2734,
              "end": 2745,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2736,
                "end": 2745,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2736,
                    "end": 2739,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2736,
                      "end": 2739,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2742,
                    "end": 2745,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2742,
                      "end": 2745,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2748,
            "end": 2916,
            "properties": [
              {
                "type": "Property",
                "start": 2770,
                "end": 2869,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2770,
                  "end": 2801,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2803,
                  "end": 2869,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2813,
                    "end": 2869,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 2823,
                        "end": 2843,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2827,
                            "end": 2842,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 2827,
                              "end": 2828,
                              "decorators": [],
                              "name": "z",
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 2831,
                              "end": 2842,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 2840,
                                  "end": 2841,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2831,
                                "end": 2839,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2831,
                                  "end": 2832,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2833,
                                  "end": 2839,
                                  "decorators": [],
                                  "name": "charAt",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 2852,
                        "end": 2861,
                        "argument": {
                          "type": "Identifier",
                          "start": 2859,
                          "end": 2860,
                          "decorators": [],
                          "name": "z",
                          "optional": false
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
                      "start": 2804,
                      "end": 2805,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2807,
                      "end": 2808,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 2875,
                "end": 2911,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2875,
                  "end": 2902,
                  "decorators": [],
                  "name": "commonPropertyDifferentType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2904,
                  "end": 2911,
                  "raw": "\"hello\"",
                  "value": "hello"
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
      "start": 2918,
      "end": 3108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2922,
          "end": 3107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2922,
            "end": 2941,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2930,
              "end": 2941,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2932,
                "end": 2941,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2932,
                    "end": 2935,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2932,
                      "end": 2935,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2938,
                    "end": 2941,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2938,
                      "end": 2941,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2944,
            "end": 3107,
            "properties": [
              {
                "type": "Property",
                "start": 2966,
                "end": 3067,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2966,
                  "end": 2997,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2999,
                  "end": 3067,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3009,
                    "end": 3067,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 3019,
                        "end": 3043,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 3023,
                            "end": 3042,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 3023,
                              "end": 3024,
                              "decorators": [],
                              "name": "z",
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 3027,
                              "end": 3042,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 3040,
                                  "end": 3041,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3027,
                                "end": 3039,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3027,
                                  "end": 3028,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3029,
                                  "end": 3039,
                                  "decorators": [],
                                  "name": "charCodeAt",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 3052,
                        "end": 3061,
                        "argument": {
                          "type": "Identifier",
                          "start": 3059,
                          "end": 3060,
                          "decorators": [],
                          "name": "z",
                          "optional": false
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
                      "start": 3000,
                      "end": 3001,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3003,
                      "end": 3004,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 3073,
                "end": 3104,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3073,
                  "end": 3100,
                  "decorators": [],
                  "name": "commonPropertyDifferentType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 3102,
                  "end": 3104,
                  "raw": "10",
                  "value": 10
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
      "start": 3109,
      "end": 3559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3113,
          "end": 3558,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3113,
            "end": 3146,
            "decorators": [],
            "name": "arrayOrI11OrI21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3128,
              "end": 3146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3130,
                "end": 3146,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3135,
                  "end": 3146,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 3136,
                      "end": 3145,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 3136,
                          "end": 3139,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3136,
                            "end": 3139,
                            "decorators": [],
                            "name": "I11",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 3142,
                          "end": 3145,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3142,
                            "end": 3145,
                            "decorators": [],
                            "name": "I21",
                            "optional": false
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3130,
                  "end": 3135,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3149,
            "end": 3558,
            "elements": [
              {
                "type": "Identifier",
                "start": 3150,
                "end": 3153,
                "decorators": [],
                "name": "i11",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3155,
                "end": 3158,
                "decorators": [],
                "name": "i21",
                "optional": false
              },
              {
                "type": "LogicalExpression",
                "start": 3160,
                "end": 3170,
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 3160,
                  "end": 3163,
                  "decorators": [],
                  "name": "i11",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 3167,
                  "end": 3170,
                  "decorators": [],
                  "name": "i21",
                  "optional": false
                }
              },
              {
                "type": "ObjectExpression",
                "start": 3172,
                "end": 3364,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3202,
                    "end": 3311,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3202,
                      "end": 3233,
                      "decorators": [],
                      "name": "commonMethodDifferentReturnType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3235,
                      "end": 3311,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3245,
                        "end": 3311,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 3259,
                            "end": 3279,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 3263,
                                "end": 3278,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 3263,
                                  "end": 3264,
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 3267,
                                  "end": 3278,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 3276,
                                      "end": 3277,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 3267,
                                    "end": 3275,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3267,
                                      "end": 3268,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3269,
                                      "end": 3275,
                                      "decorators": [],
                                      "name": "charAt",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 3292,
                            "end": 3301,
                            "argument": {
                              "type": "Identifier",
                              "start": 3299,
                              "end": 3300,
                              "decorators": [],
                              "name": "z",
                              "optional": false
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
                          "start": 3236,
                          "end": 3237,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 3239,
                          "end": 3240,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3321,
                    "end": 3357,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3321,
                      "end": 3348,
                      "decorators": [],
                      "name": "commonPropertyDifferentType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3350,
                      "end": 3357,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 3366,
                "end": 3557,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3396,
                    "end": 3509,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3396,
                      "end": 3427,
                      "decorators": [],
                      "name": "commonMethodDifferentReturnType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3429,
                      "end": 3509,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3439,
                        "end": 3509,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 3453,
                            "end": 3477,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 3457,
                                "end": 3476,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 3457,
                                  "end": 3458,
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 3461,
                                  "end": 3476,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 3474,
                                      "end": 3475,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 3461,
                                    "end": 3473,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3461,
                                      "end": 3462,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3463,
                                      "end": 3473,
                                      "decorators": [],
                                      "name": "charCodeAt",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 3490,
                            "end": 3499,
                            "argument": {
                              "type": "Identifier",
                              "start": 3497,
                              "end": 3498,
                              "decorators": [],
                              "name": "z",
                              "optional": false
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
                          "start": 3430,
                          "end": 3431,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 3433,
                          "end": 3434,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3519,
                    "end": 3550,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3519,
                      "end": 3546,
                      "decorators": [],
                      "name": "commonPropertyDifferentType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3548,
                      "end": 3550,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              }
            ]
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
