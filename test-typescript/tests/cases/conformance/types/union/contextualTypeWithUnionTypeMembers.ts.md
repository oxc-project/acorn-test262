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
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 214,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 216,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 408,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 224,
            "end": 260,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 240,
              "name": "commonMethodType",
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
                "start": 241,
                "end": 250,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 242,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 244,
                    "end": 250
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 265,
            "end": 292,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 283,
              "name": "commonPropertyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 291,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 285,
                "end": 291
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 297,
            "end": 336,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 326,
              "name": "commonMethodWithTypeParameter",
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
                "start": 327,
                "end": 331,
                "name": "a",
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
                      "name": "T",
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
                  "name": "T",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 342,
            "end": 376,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 356,
              "name": "methodOnlyInI1",
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
                "start": 357,
                "end": 366,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 358,
                  "end": 366,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 360,
                    "end": 366
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 381,
            "end": 406,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 397,
              "name": "propertyOnlyInI1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 397,
              "end": 405,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 399,
                "end": 405
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 409,
      "end": 615,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 421,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 421,
        "end": 424,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 422,
            "end": 423,
            "name": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 425,
        "end": 615,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 431,
            "end": 467,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 447,
              "name": "commonMethodType",
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
                "start": 448,
                "end": 457,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 449,
                  "end": 457,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 451,
                    "end": 457
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 472,
            "end": 499,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 472,
              "end": 490,
              "name": "commonPropertyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 498,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 492,
                "end": 498
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 504,
            "end": 543,
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 533,
              "name": "commonMethodWithTypeParameter",
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
                "start": 534,
                "end": 538,
                "name": "a",
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
                      "name": "T",
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
                  "name": "T",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 549,
            "end": 583,
            "key": {
              "type": "Identifier",
              "start": 549,
              "end": 563,
              "name": "methodOnlyInI2",
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
                "start": 564,
                "end": 573,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 565,
                  "end": 573,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 567,
                    "end": 573
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 588,
            "end": 613,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 588,
              "end": 604,
              "name": "propertyOnlyInI2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 604,
              "end": 612,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 606,
                "end": 612
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 788,
            "name": "i1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 776,
              "end": 788,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 778,
                "end": 788,
                "typeName": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 780,
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 794,
            "end": 808,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 808,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 798,
                "end": 808,
                "typeName": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 800,
                  "name": "I2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 845,
            "name": "i1Ori2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 822,
                      "end": 824,
                      "name": "I1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 835,
                    "end": 845,
                    "typeName": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 837,
                      "name": "I2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 848,
            "end": 850,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 856,
            "end": 887,
            "name": "i1Ori2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 866,
                      "name": "I1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 877,
                    "end": 887,
                    "typeName": {
                      "type": "Identifier",
                      "start": 877,
                      "end": 879,
                      "name": "I2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 890,
            "end": 892,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 929,
            "name": "i1Ori2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 906,
                      "end": 908,
                      "name": "I1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 919,
                    "end": 929,
                    "typeName": {
                      "type": "Identifier",
                      "start": 919,
                      "end": 921,
                      "name": "I2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 967,
                  "name": "commonPropertyType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 969,
                  "end": 976,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 982,
                "end": 1005,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 982,
                  "end": 998,
                  "name": "commonMethodType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1000,
                  "end": 1005,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1000,
                      "end": 1001,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1004,
                    "end": 1005,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1011,
                "end": 1048,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1011,
                  "end": 1040,
                  "name": "commonMethodWithTypeParameter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1042,
                  "end": 1048,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1042,
                      "end": 1043,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1047,
                    "end": 1048,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1055,
                "end": 1077,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1069,
                  "name": "methodOnlyInI1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1071,
                  "end": 1077,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1072,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1077,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1083,
                "end": 1108,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1083,
                  "end": 1099,
                  "name": "propertyOnlyInI1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1101,
                  "end": 1108,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1117,
            "end": 1148,
            "name": "i1Ori2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1125,
                      "end": 1127,
                      "name": "I1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1138,
                    "end": 1148,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1138,
                      "end": 1140,
                      "name": "I2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1168,
                  "end": 1186,
                  "name": "commonPropertyType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1188,
                  "end": 1195,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1201,
                "end": 1224,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1217,
                  "name": "commonMethodType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1219,
                  "end": 1224,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1219,
                      "end": 1220,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1230,
                "end": 1267,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1230,
                  "end": 1259,
                  "name": "commonMethodWithTypeParameter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1261,
                  "end": 1267,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1261,
                      "end": 1262,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1266,
                    "end": 1267,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1274,
                "end": 1296,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1274,
                  "end": 1288,
                  "name": "methodOnlyInI2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1290,
                  "end": 1296,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1290,
                      "end": 1291,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1295,
                    "end": 1296,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1302,
                "end": 1327,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1318,
                  "name": "propertyOnlyInI2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1320,
                  "end": 1327,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1336,
            "end": 1367,
            "name": "i1Ori2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1344,
                      "end": 1346,
                      "name": "I1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1357,
                    "end": 1367,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1357,
                      "end": 1359,
                      "name": "I2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1399,
                  "end": 1417,
                  "name": "commonPropertyType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1419,
                  "end": 1426,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1432,
                "end": 1455,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1448,
                  "name": "commonMethodType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1450,
                  "end": 1455,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1450,
                      "end": 1451,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1454,
                    "end": 1455,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1461,
                "end": 1498,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1490,
                  "name": "commonMethodWithTypeParameter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1492,
                  "end": 1498,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1492,
                      "end": 1493,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1497,
                    "end": 1498,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1504,
                "end": 1526,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1504,
                  "end": 1518,
                  "name": "methodOnlyInI1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1520,
                  "end": 1526,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1520,
                      "end": 1521,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1525,
                    "end": 1526,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1532,
                "end": 1557,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1532,
                  "end": 1548,
                  "name": "propertyOnlyInI1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1550,
                  "end": 1557,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1563,
                "end": 1585,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1563,
                  "end": 1577,
                  "name": "methodOnlyInI2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1579,
                  "end": 1585,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1579,
                      "end": 1580,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1584,
                    "end": 1585,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                "start": 1591,
                "end": 1616,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1591,
                  "end": 1607,
                  "name": "propertyOnlyInI2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1609,
                  "end": 1616,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1626,
            "end": 1669,
            "name": "arrayI1OrI2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1637,
              "end": 1669,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1639,
                "end": 1669,
                "typeName": {
                  "type": "Identifier",
                  "start": 1639,
                  "end": 1644,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1645,
                            "end": 1647,
                            "name": "I1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1658,
                          "end": 1668,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1658,
                            "end": 1660,
                            "name": "I2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1677,
                "end": 1679,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1702,
                      "end": 1720,
                      "name": "commonPropertyType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1722,
                      "end": 1729,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1739,
                    "end": 1762,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1755,
                      "name": "commonMethodType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1757,
                      "end": 1762,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1757,
                          "end": 1758,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 1761,
                        "end": 1762,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 1772,
                    "end": 1809,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1772,
                      "end": 1801,
                      "name": "commonMethodWithTypeParameter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1803,
                      "end": 1809,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1803,
                          "end": 1804,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 1808,
                        "end": 1809,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 1820,
                    "end": 1842,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1820,
                      "end": 1834,
                      "name": "methodOnlyInI1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1836,
                      "end": 1842,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1837,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 1841,
                        "end": 1842,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 1852,
                    "end": 1877,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1852,
                      "end": 1868,
                      "name": "propertyOnlyInI1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1870,
                      "end": 1877,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1911,
                      "end": 1929,
                      "name": "commonPropertyType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1931,
                      "end": 1938,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1948,
                    "end": 1971,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1948,
                      "end": 1964,
                      "name": "commonMethodType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1966,
                      "end": 1971,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1966,
                          "end": 1967,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 1970,
                        "end": 1971,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 1981,
                    "end": 2018,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1981,
                      "end": 2010,
                      "name": "commonMethodWithTypeParameter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2012,
                      "end": 2018,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2012,
                          "end": 2013,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 2017,
                        "end": 2018,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 2029,
                    "end": 2051,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2029,
                      "end": 2043,
                      "name": "methodOnlyInI2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2045,
                      "end": 2051,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2046,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 2050,
                        "end": 2051,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 2061,
                    "end": 2086,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2061,
                      "end": 2077,
                      "name": "propertyOnlyInI2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2079,
                      "end": 2086,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2128,
                      "end": 2146,
                      "name": "commonPropertyType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2148,
                      "end": 2155,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2165,
                    "end": 2188,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2165,
                      "end": 2181,
                      "name": "commonMethodType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2183,
                      "end": 2188,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2183,
                          "end": 2184,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 2187,
                        "end": 2188,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 2198,
                    "end": 2235,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2198,
                      "end": 2227,
                      "name": "commonMethodWithTypeParameter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2229,
                      "end": 2235,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2229,
                          "end": 2230,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 2234,
                        "end": 2235,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 2245,
                    "end": 2267,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2245,
                      "end": 2259,
                      "name": "methodOnlyInI1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2261,
                      "end": 2267,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2261,
                          "end": 2262,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 2266,
                        "end": 2267,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 2277,
                    "end": 2302,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2277,
                      "end": 2293,
                      "name": "propertyOnlyInI1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2295,
                      "end": 2302,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2312,
                    "end": 2334,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2312,
                      "end": 2326,
                      "name": "methodOnlyInI2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2328,
                      "end": 2334,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2328,
                          "end": 2329,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 2333,
                        "end": 2334,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
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
                    "start": 2344,
                    "end": 2369,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2344,
                      "end": 2360,
                      "name": "propertyOnlyInI2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2362,
                      "end": 2369,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2380,
      "end": 2505,
      "id": {
        "type": "Identifier",
        "start": 2390,
        "end": 2393,
        "name": "I11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2394,
        "end": 2505,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2400,
            "end": 2462,
            "key": {
              "type": "Identifier",
              "start": 2400,
              "end": 2431,
              "name": "commonMethodDifferentReturnType",
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
                "start": 2432,
                "end": 2441,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2433,
                  "end": 2441,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2435,
                    "end": 2441
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2443,
                "end": 2452,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2444,
                  "end": 2452,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2446,
                    "end": 2452
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2467,
            "end": 2503,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2467,
              "end": 2494,
              "name": "commonPropertyDifferentType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2494,
              "end": 2502,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2496,
                "end": 2502
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2506,
      "end": 2631,
      "id": {
        "type": "Identifier",
        "start": 2516,
        "end": 2519,
        "name": "I21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2520,
        "end": 2631,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2526,
            "end": 2588,
            "key": {
              "type": "Identifier",
              "start": 2526,
              "end": 2557,
              "name": "commonMethodDifferentReturnType",
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
                "start": 2558,
                "end": 2567,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2559,
                  "end": 2567,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2561,
                    "end": 2567
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2569,
                "end": 2578,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2570,
                  "end": 2578,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2572,
                    "end": 2578
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2593,
            "end": 2629,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2593,
              "end": 2620,
              "name": "commonPropertyDifferentType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2620,
              "end": 2628,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2622,
                "end": 2628
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2636,
            "end": 2644,
            "name": "i11",
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
                  "name": "I11",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2650,
            "end": 2658,
            "name": "i21",
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
                  "name": "I21",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2664,
            "end": 2683,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2680,
                    "end": 2683,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2680,
                      "end": 2683,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 2686,
            "end": 2689,
            "name": "i11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2695,
            "end": 2714,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2711,
                    "end": 2714,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2711,
                      "end": 2714,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 2717,
            "end": 2720,
            "name": "i21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2726,
            "end": 2745,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2742,
                    "end": 2745,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2742,
                      "end": 2745,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2770,
                  "end": 2801,
                  "name": "commonMethodDifferentReturnType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2803,
                  "end": 2869,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2804,
                      "end": 2805,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2807,
                      "end": 2808,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 2827,
                              "end": 2828,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 2831,
                              "end": 2842,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2831,
                                "end": 2839,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2831,
                                  "end": 2832,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2833,
                                  "end": 2839,
                                  "name": "charAt",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 2840,
                                  "end": 2841,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
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
                        "start": 2852,
                        "end": 2861,
                        "argument": {
                          "type": "Identifier",
                          "start": 2859,
                          "end": 2860,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2875,
                "end": 2911,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2875,
                  "end": 2902,
                  "name": "commonPropertyDifferentType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2904,
                  "end": 2911,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2922,
            "end": 2941,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2938,
                    "end": 2941,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2938,
                      "end": 2941,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2966,
                  "end": 2997,
                  "name": "commonMethodDifferentReturnType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2999,
                  "end": 3067,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3000,
                      "end": 3001,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3003,
                      "end": 3004,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 3023,
                              "end": 3024,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 3027,
                              "end": 3042,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3027,
                                "end": 3039,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3027,
                                  "end": 3028,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3029,
                                  "end": 3039,
                                  "name": "charCodeAt",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 3040,
                                  "end": 3041,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
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
                        "start": 3052,
                        "end": 3061,
                        "argument": {
                          "type": "Identifier",
                          "start": 3059,
                          "end": 3060,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3073,
                "end": 3104,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3073,
                  "end": 3100,
                  "name": "commonPropertyDifferentType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3102,
                  "end": 3104,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3113,
            "end": 3146,
            "name": "arrayOrI11OrI21",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3128,
              "end": 3146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3130,
                "end": 3146,
                "typeName": {
                  "type": "Identifier",
                  "start": 3130,
                  "end": 3135,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                            "name": "I11",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 3142,
                          "end": 3145,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3142,
                            "end": 3145,
                            "name": "I21",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "i11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3155,
                "end": 3158,
                "name": "i21",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "LogicalExpression",
                "start": 3160,
                "end": 3170,
                "left": {
                  "type": "Identifier",
                  "start": 3160,
                  "end": 3163,
                  "name": "i11",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "start": 3167,
                  "end": 3170,
                  "name": "i21",
                  "typeAnnotation": null,
                  "decorators": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3202,
                      "end": 3233,
                      "name": "commonMethodDifferentReturnType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3235,
                      "end": 3311,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3236,
                          "end": 3237,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 3239,
                          "end": 3240,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 3263,
                                  "end": 3264,
                                  "name": "z",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 3267,
                                  "end": 3278,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 3267,
                                    "end": 3275,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3267,
                                      "end": 3268,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3269,
                                      "end": 3275,
                                      "name": "charAt",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 3276,
                                      "end": 3277,
                                      "name": "b",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
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
                            "start": 3292,
                            "end": 3301,
                            "argument": {
                              "type": "Identifier",
                              "start": 3299,
                              "end": 3300,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3321,
                    "end": 3357,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3321,
                      "end": 3348,
                      "name": "commonPropertyDifferentType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3350,
                      "end": 3357,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3396,
                      "end": 3427,
                      "name": "commonMethodDifferentReturnType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3429,
                      "end": 3509,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3430,
                          "end": 3431,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 3433,
                          "end": 3434,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 3457,
                                  "end": 3458,
                                  "name": "z",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 3461,
                                  "end": 3476,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 3461,
                                    "end": 3473,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3461,
                                      "end": 3462,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3463,
                                      "end": 3473,
                                      "name": "charCodeAt",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 3474,
                                      "end": 3475,
                                      "name": "b",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
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
                            "start": 3490,
                            "end": 3499,
                            "argument": {
                              "type": "Identifier",
                              "start": 3497,
                              "end": 3498,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3519,
                    "end": 3550,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3519,
                      "end": 3546,
                      "name": "commonPropertyDifferentType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3548,
                      "end": 3550,
                      "value": 10,
                      "raw": "10"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
