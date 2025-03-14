__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 1495,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 35,
      "end": 93,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "Input",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 58,
          "end": 86,
          "decorators": [],
          "name": "bindingPropertyName",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 86,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 87,
        "end": 92,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 89,
          "end": 92
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 140,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 119,
            "end": 138,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 119,
                "end": 125,
                "expression": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 125,
                  "decorators": [],
                  "name": "Input",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
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
        "start": 100,
        "end": 112,
        "decorators": [],
        "name": "FooComponent",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 257,
            "decorators": [],
            "name": "tracked",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 257,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 195,
                "end": 257,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 212,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 212,
                      "decorators": [],
                      "name": "PropertyDecorator",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 215,
                    "end": 257,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 217,
                        "end": 255,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 218,
                            "end": 248,
                            "argument": {
                              "type": "Identifier",
                              "start": 221,
                              "end": 238,
                              "decorators": [],
                              "name": "watchedProperties",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 238,
                              "end": 248,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 240,
                                "end": 248,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 240,
                                  "end": 246
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 249,
                          "end": 254,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 251,
                            "end": 254
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 259,
      "end": 301,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 272,
        "end": 301,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 278,
            "end": 294,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 278,
                "end": 286,
                "expression": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 286,
                  "decorators": [],
                  "name": "tracked",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 293,
              "decorators": [],
              "name": "person",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 295,
            "end": 299,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 298,
              "decorators": [],
              "name": "any",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 271,
        "decorators": [],
        "name": "Person",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 303,
      "end": 428,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 323,
        "end": 428,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 329,
            "end": 339,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 333,
              "decorators": [],
              "name": "args",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 338,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 335,
                "end": 338
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 426,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 344,
                "end": 360,
                "expression": {
                  "type": "CallExpression",
                  "start": 345,
                  "end": 360,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 353,
                      "end": 359,
                      "raw": "'args'",
                      "value": "args"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 352,
                    "decorators": [],
                    "name": "tracked",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 369,
              "end": 379,
              "decorators": [],
              "name": "multiplied",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 379,
              "end": 426,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 382,
                "end": 426,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 392,
                    "end": 420,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 399,
                      "end": 419,
                      "operator": "*",
                      "left": {
                        "type": "MemberExpression",
                        "start": 399,
                        "end": 415,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 399,
                          "end": 408,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 399,
                            "end": 403
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 408,
                            "decorators": [],
                            "name": "args",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 409,
                          "end": 415,
                          "decorators": [],
                          "name": "number",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 418,
                        "end": 419,
                        "raw": "2",
                        "value": 2
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 322,
        "decorators": [],
        "name": "MultiplyByTwo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 451,
      "end": 537,
      "body": {
        "type": "TSInterfaceBody",
        "start": 534,
        "end": 537,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 483,
          "end": 498,
          "expression": {
            "type": "Identifier",
            "start": 483,
            "end": 498,
            "decorators": [],
            "name": "MethodDecorator",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 500,
          "end": 514,
          "expression": {
            "type": "Identifier",
            "start": 500,
            "end": 514,
            "decorators": [],
            "name": "ClassDecorator",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 516,
          "end": 533,
          "expression": {
            "type": "Identifier",
            "start": 516,
            "end": 533,
            "decorators": [],
            "name": "PropertyDecorator",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 474,
        "decorators": [],
        "name": "OmniDecorator",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 539,
      "end": 580,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 562,
        "decorators": [],
        "name": "noArgs",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 564,
        "end": 579,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 566,
          "end": 579,
          "typeName": {
            "type": "Identifier",
            "start": 566,
            "end": 579,
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 581,
      "end": 637,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 605,
        "decorators": [],
        "name": "allRest",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 606,
          "end": 620,
          "argument": {
            "type": "Identifier",
            "start": 609,
            "end": 613,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 613,
            "end": 620,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 615,
              "end": 620,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 615,
                "end": 618
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 621,
        "end": 636,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 623,
          "end": 636,
          "typeName": {
            "type": "Identifier",
            "start": 623,
            "end": 636,
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 638,
      "end": 691,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 666,
        "decorators": [],
        "name": "oneOptional",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 667,
          "end": 674,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 669,
            "end": 674,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 671,
              "end": 674
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 675,
        "end": 690,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 677,
          "end": 690,
          "typeName": {
            "type": "Identifier",
            "start": 677,
            "end": 690,
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 692,
      "end": 754,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 720,
        "decorators": [],
        "name": "twoOptional",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 721,
          "end": 728,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 723,
            "end": 728,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 725,
              "end": 728
            }
          }
        },
        {
          "type": "Identifier",
          "start": 730,
          "end": 737,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 732,
            "end": 737,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 734,
              "end": 737
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 738,
        "end": 753,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 740,
          "end": 753,
          "typeName": {
            "type": "Identifier",
            "start": 740,
            "end": 753,
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 755,
      "end": 828,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 772,
        "end": 785,
        "decorators": [],
        "name": "threeOptional",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 786,
          "end": 793,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 788,
            "end": 793,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 790,
              "end": 793
            }
          }
        },
        {
          "type": "Identifier",
          "start": 795,
          "end": 802,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 797,
            "end": 802,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 799,
              "end": 802
            }
          }
        },
        {
          "type": "Identifier",
          "start": 804,
          "end": 811,
          "decorators": [],
          "name": "z",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 806,
            "end": 811,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 808,
              "end": 811
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 812,
        "end": 827,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 814,
          "end": 827,
          "typeName": {
            "type": "Identifier",
            "start": 814,
            "end": 827,
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 829,
      "end": 906,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 846,
        "end": 865,
        "decorators": [],
        "name": "oneOptionalWithRest",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 866,
          "end": 873,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 868,
            "end": 873,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 870,
              "end": 873
            }
          }
        },
        {
          "type": "RestElement",
          "start": 875,
          "end": 889,
          "argument": {
            "type": "Identifier",
            "start": 878,
            "end": 882,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 882,
            "end": 889,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 884,
              "end": 889,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 884,
                "end": 887
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 890,
        "end": 905,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 892,
          "end": 905,
          "typeName": {
            "type": "Identifier",
            "start": 892,
            "end": 905,
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 907,
      "end": 933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 921,
          "end": 932,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 921,
            "end": 932,
            "decorators": [],
            "name": "anyDec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 927,
              "end": 932,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 929,
                "end": 932
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 935,
      "end": 998,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 951,
        "end": 998,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 957,
            "end": 974,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 957,
                "end": 964,
                "expression": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 964,
                  "decorators": [],
                  "name": "noArgs",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 965,
              "end": 968,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 968,
              "end": 973,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 970,
                "end": 973
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 979,
            "end": 996,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 979,
                "end": 986,
                "expression": {
                  "type": "Identifier",
                  "start": 980,
                  "end": 986,
                  "decorators": [],
                  "name": "noArgs",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 987,
              "end": 990,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 990,
              "end": 996,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 993,
                "end": 996,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 935,
          "end": 942,
          "expression": {
            "type": "Identifier",
            "start": 936,
            "end": 942,
            "decorators": [],
            "name": "noArgs",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 950,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1000,
      "end": 1066,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1017,
        "end": 1066,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1023,
            "end": 1041,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1023,
                "end": 1031,
                "expression": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1031,
                  "decorators": [],
                  "name": "allRest",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1032,
              "end": 1035,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1035,
              "end": 1040,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1037,
                "end": 1040
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1046,
            "end": 1064,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1046,
                "end": 1054,
                "expression": {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1054,
                  "decorators": [],
                  "name": "allRest",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1055,
              "end": 1058,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1058,
              "end": 1064,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1061,
                "end": 1064,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 1000,
          "end": 1008,
          "expression": {
            "type": "Identifier",
            "start": 1001,
            "end": 1008,
            "decorators": [],
            "name": "allRest",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1015,
        "end": 1016,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1068,
      "end": 1146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1089,
        "end": 1146,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1095,
            "end": 1117,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1095,
                "end": 1107,
                "expression": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1107,
                  "decorators": [],
                  "name": "oneOptional",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1108,
              "end": 1111,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1111,
              "end": 1116,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1113,
                "end": 1116
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1122,
            "end": 1144,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1122,
                "end": 1134,
                "expression": {
                  "type": "Identifier",
                  "start": 1123,
                  "end": 1134,
                  "decorators": [],
                  "name": "oneOptional",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1135,
              "end": 1138,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1138,
              "end": 1144,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1141,
                "end": 1144,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 1068,
          "end": 1080,
          "expression": {
            "type": "Identifier",
            "start": 1069,
            "end": 1080,
            "decorators": [],
            "name": "oneOptional",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1087,
        "end": 1088,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1148,
      "end": 1226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1169,
        "end": 1226,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1175,
            "end": 1197,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1175,
                "end": 1187,
                "expression": {
                  "type": "Identifier",
                  "start": 1176,
                  "end": 1187,
                  "decorators": [],
                  "name": "twoOptional",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1188,
              "end": 1191,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1191,
              "end": 1196,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1193,
                "end": 1196
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1202,
            "end": 1224,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1202,
                "end": 1214,
                "expression": {
                  "type": "Identifier",
                  "start": 1203,
                  "end": 1214,
                  "decorators": [],
                  "name": "twoOptional",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1215,
              "end": 1218,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1218,
              "end": 1224,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1221,
                "end": 1224,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 1148,
          "end": 1160,
          "expression": {
            "type": "Identifier",
            "start": 1149,
            "end": 1160,
            "decorators": [],
            "name": "twoOptional",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1167,
        "end": 1168,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1228,
      "end": 1312,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1251,
        "end": 1312,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1257,
            "end": 1281,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1257,
                "end": 1271,
                "expression": {
                  "type": "Identifier",
                  "start": 1258,
                  "end": 1271,
                  "decorators": [],
                  "name": "threeOptional",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1272,
              "end": 1275,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1275,
              "end": 1280,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1277,
                "end": 1280
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1286,
            "end": 1310,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1286,
                "end": 1300,
                "expression": {
                  "type": "Identifier",
                  "start": 1287,
                  "end": 1300,
                  "decorators": [],
                  "name": "threeOptional",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1301,
              "end": 1304,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1304,
              "end": 1310,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1307,
                "end": 1310,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 1228,
          "end": 1242,
          "expression": {
            "type": "Identifier",
            "start": 1229,
            "end": 1242,
            "decorators": [],
            "name": "threeOptional",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1249,
        "end": 1250,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1314,
      "end": 1416,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1343,
        "end": 1416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1349,
            "end": 1379,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1349,
                "end": 1369,
                "expression": {
                  "type": "Identifier",
                  "start": 1350,
                  "end": 1369,
                  "decorators": [],
                  "name": "oneOptionalWithRest",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1370,
              "end": 1373,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1373,
              "end": 1378,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1375,
                "end": 1378
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1384,
            "end": 1414,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1384,
                "end": 1404,
                "expression": {
                  "type": "Identifier",
                  "start": 1385,
                  "end": 1404,
                  "decorators": [],
                  "name": "oneOptionalWithRest",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1405,
              "end": 1408,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1408,
              "end": 1414,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1411,
                "end": 1414,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 1314,
          "end": 1334,
          "expression": {
            "type": "Identifier",
            "start": 1315,
            "end": 1334,
            "decorators": [],
            "name": "oneOptionalWithRest",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1341,
        "end": 1342,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1418,
      "end": 1481,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1434,
        "end": 1481,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1440,
            "end": 1457,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1440,
                "end": 1447,
                "expression": {
                  "type": "Identifier",
                  "start": 1441,
                  "end": 1447,
                  "decorators": [],
                  "name": "anyDec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1448,
              "end": 1451,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1451,
              "end": 1456,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1453,
                "end": 1456
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1462,
            "end": 1479,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1462,
                "end": 1469,
                "expression": {
                  "type": "Identifier",
                  "start": 1463,
                  "end": 1469,
                  "decorators": [],
                  "name": "anyDec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1470,
              "end": 1473,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1473,
              "end": 1479,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1476,
                "end": 1479,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 1418,
          "end": 1425,
          "expression": {
            "type": "Identifier",
            "start": 1419,
            "end": 1425,
            "decorators": [],
            "name": "anyDec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1432,
        "end": 1433,
        "decorators": [],
        "name": "G",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1483,
      "end": 1494,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
