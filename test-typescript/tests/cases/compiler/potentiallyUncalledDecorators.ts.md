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
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "name": "Input",
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
          "start": 58,
          "end": 86,
          "name": "bindingPropertyName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 86,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 112,
        "name": "FooComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 140,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 119,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 119,
                "end": 125,
                "expression": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 125,
                  "name": "Input",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "start": 172,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 257,
            "name": "tracked",
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
                      "name": "PropertyDecorator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 218,
                            "end": 248,
                            "argument": {
                              "type": "Identifier",
                              "start": 221,
                              "end": 238,
                              "name": "watchedProperties",
                              "typeAnnotation": null,
                              "decorators": [],
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
                            },
                            "value": null
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 259,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 271,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 272,
        "end": 301,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 278,
            "end": 294,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 293,
              "name": "person",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 278,
                "end": 286,
                "expression": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 286,
                  "name": "tracked",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 295,
            "end": 299,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 298,
              "name": "any",
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
            "typeAnnotation": null,
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
      "start": 303,
      "end": 428,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 322,
        "name": "MultiplyByTwo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 323,
        "end": 428,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 329,
            "end": 339,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 333,
              "name": "args",
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
              "start": 333,
              "end": 338,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 335,
                "end": 338
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 426,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 369,
              "end": 379,
              "name": "multiplied",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 379,
              "end": 426,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 399,
                        "end": 415,
                        "object": {
                          "type": "MemberExpression",
                          "start": 399,
                          "end": 408,
                          "object": {
                            "type": "ThisExpression",
                            "start": 399,
                            "end": 403
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 408,
                            "name": "args",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 409,
                          "end": 415,
                          "name": "number",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "start": 418,
                        "end": 419,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 344,
                "end": 360,
                "expression": {
                  "type": "CallExpression",
                  "start": 345,
                  "end": 360,
                  "callee": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 352,
                    "name": "tracked",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 353,
                      "end": 359,
                      "value": "args",
                      "raw": "'args'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
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
      "type": "TSInterfaceDeclaration",
      "start": 451,
      "end": 537,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 474,
        "name": "OmniDecorator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 483,
          "end": 498,
          "expression": {
            "type": "Identifier",
            "start": 483,
            "end": 498,
            "name": "MethodDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 500,
          "end": 514,
          "expression": {
            "type": "Identifier",
            "start": 500,
            "end": 514,
            "name": "ClassDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 516,
          "end": 533,
          "expression": {
            "type": "Identifier",
            "start": 516,
            "end": 533,
            "name": "PropertyDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 534,
        "end": 537,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 539,
      "end": 580,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 562,
        "name": "noArgs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "OmniDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 581,
      "end": 637,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 605,
        "name": "allRest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 606,
          "end": 620,
          "argument": {
            "type": "Identifier",
            "start": 609,
            "end": 613,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "OmniDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 638,
      "end": 691,
      "id": {
        "type": "Identifier",
        "start": 655,
        "end": 666,
        "name": "oneOptional",
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
          "start": 667,
          "end": 674,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 669,
            "end": 674,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 671,
              "end": 674
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "OmniDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 692,
      "end": 754,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 720,
        "name": "twoOptional",
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
          "start": 721,
          "end": 728,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 723,
            "end": 728,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 725,
              "end": 728
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 730,
          "end": 737,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 732,
            "end": 737,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 734,
              "end": 737
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "OmniDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 755,
      "end": 828,
      "id": {
        "type": "Identifier",
        "start": 772,
        "end": 785,
        "name": "threeOptional",
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
          "start": 786,
          "end": 793,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 788,
            "end": 793,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 790,
              "end": 793
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 795,
          "end": 802,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 797,
            "end": 802,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 799,
              "end": 802
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 804,
          "end": 811,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 806,
            "end": 811,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 808,
              "end": 811
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "OmniDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 829,
      "end": 906,
      "id": {
        "type": "Identifier",
        "start": 846,
        "end": 865,
        "name": "oneOptionalWithRest",
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
          "start": 866,
          "end": 873,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 868,
            "end": 873,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 870,
              "end": 873
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "RestElement",
          "start": 875,
          "end": 889,
          "argument": {
            "type": "Identifier",
            "start": 878,
            "end": 882,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "OmniDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 921,
            "end": 932,
            "name": "anyDec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 927,
              "end": 932,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 929,
                "end": 932
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 935,
      "end": 998,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 950,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 951,
        "end": 998,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 957,
            "end": 974,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 965,
              "end": 968,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 957,
                "end": 964,
                "expression": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 964,
                  "name": "noArgs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 979,
            "end": 996,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 987,
              "end": 990,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 990,
              "end": 996,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 993,
                "end": 996,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 979,
                "end": 986,
                "expression": {
                  "type": "Identifier",
                  "start": 980,
                  "end": 986,
                  "name": "noArgs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 935,
          "end": 942,
          "expression": {
            "type": "Identifier",
            "start": 936,
            "end": 942,
            "name": "noArgs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1000,
      "end": 1066,
      "id": {
        "type": "Identifier",
        "start": 1015,
        "end": 1016,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1017,
        "end": 1066,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1023,
            "end": 1041,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1032,
              "end": 1035,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1023,
                "end": 1031,
                "expression": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1031,
                  "name": "allRest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1046,
            "end": 1064,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1055,
              "end": 1058,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1058,
              "end": 1064,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1061,
                "end": 1064,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 1046,
                "end": 1054,
                "expression": {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1054,
                  "name": "allRest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 1000,
          "end": 1008,
          "expression": {
            "type": "Identifier",
            "start": 1001,
            "end": 1008,
            "name": "allRest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1068,
      "end": 1146,
      "id": {
        "type": "Identifier",
        "start": 1087,
        "end": 1088,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1089,
        "end": 1146,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1095,
            "end": 1117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1108,
              "end": 1111,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1095,
                "end": 1107,
                "expression": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1107,
                  "name": "oneOptional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1122,
            "end": 1144,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1135,
              "end": 1138,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1138,
              "end": 1144,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1141,
                "end": 1144,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 1122,
                "end": 1134,
                "expression": {
                  "type": "Identifier",
                  "start": 1123,
                  "end": 1134,
                  "name": "oneOptional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 1068,
          "end": 1080,
          "expression": {
            "type": "Identifier",
            "start": 1069,
            "end": 1080,
            "name": "oneOptional",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1148,
      "end": 1226,
      "id": {
        "type": "Identifier",
        "start": 1167,
        "end": 1168,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1169,
        "end": 1226,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1175,
            "end": 1197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1188,
              "end": 1191,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1175,
                "end": 1187,
                "expression": {
                  "type": "Identifier",
                  "start": 1176,
                  "end": 1187,
                  "name": "twoOptional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1202,
            "end": 1224,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1215,
              "end": 1218,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1218,
              "end": 1224,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1221,
                "end": 1224,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 1202,
                "end": 1214,
                "expression": {
                  "type": "Identifier",
                  "start": 1203,
                  "end": 1214,
                  "name": "twoOptional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 1148,
          "end": 1160,
          "expression": {
            "type": "Identifier",
            "start": 1149,
            "end": 1160,
            "name": "twoOptional",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1228,
      "end": 1312,
      "id": {
        "type": "Identifier",
        "start": 1249,
        "end": 1250,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1251,
        "end": 1312,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1257,
            "end": 1281,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1272,
              "end": 1275,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1257,
                "end": 1271,
                "expression": {
                  "type": "Identifier",
                  "start": 1258,
                  "end": 1271,
                  "name": "threeOptional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1286,
            "end": 1310,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1301,
              "end": 1304,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1304,
              "end": 1310,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1307,
                "end": 1310,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 1286,
                "end": 1300,
                "expression": {
                  "type": "Identifier",
                  "start": 1287,
                  "end": 1300,
                  "name": "threeOptional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 1228,
          "end": 1242,
          "expression": {
            "type": "Identifier",
            "start": 1229,
            "end": 1242,
            "name": "threeOptional",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1314,
      "end": 1416,
      "id": {
        "type": "Identifier",
        "start": 1341,
        "end": 1342,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1343,
        "end": 1416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1349,
            "end": 1379,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1370,
              "end": 1373,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1349,
                "end": 1369,
                "expression": {
                  "type": "Identifier",
                  "start": 1350,
                  "end": 1369,
                  "name": "oneOptionalWithRest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1384,
            "end": 1414,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1405,
              "end": 1408,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1408,
              "end": 1414,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1411,
                "end": 1414,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 1384,
                "end": 1404,
                "expression": {
                  "type": "Identifier",
                  "start": 1385,
                  "end": 1404,
                  "name": "oneOptionalWithRest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 1314,
          "end": 1334,
          "expression": {
            "type": "Identifier",
            "start": 1315,
            "end": 1334,
            "name": "oneOptionalWithRest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1418,
      "end": 1481,
      "id": {
        "type": "Identifier",
        "start": 1432,
        "end": 1433,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1434,
        "end": 1481,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1440,
            "end": 1457,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1448,
              "end": 1451,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1440,
                "end": 1447,
                "expression": {
                  "type": "Identifier",
                  "start": 1441,
                  "end": 1447,
                  "name": "anyDec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1462,
            "end": 1479,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1470,
              "end": 1473,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1473,
              "end": 1479,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1476,
                "end": 1479,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 1462,
                "end": 1469,
                "expression": {
                  "type": "Identifier",
                  "start": 1463,
                  "end": 1469,
                  "name": "anyDec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 1418,
          "end": 1425,
          "expression": {
            "type": "Identifier",
            "start": 1419,
            "end": 1425,
            "name": "anyDec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1483,
      "end": 1494,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
