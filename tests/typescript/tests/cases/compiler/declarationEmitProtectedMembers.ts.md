__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 967,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 406,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 406,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 117,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 117,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 117,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 111,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 110,
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "x",
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
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 123,
            "end": 160,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 145,
              "decorators": [],
              "name": "accessor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 160,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 155,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 149,
                      "end": 155
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 160,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 203,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 187,
              "decorators": [],
              "name": "accessor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 203,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 203,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 192,
                    "end": 201,
                    "argument": {
                      "type": "Literal",
                      "start": 199,
                      "end": 200,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 237,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 228,
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 243,
            "end": 296,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 262,
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 296,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 265,
                "end": 296,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 275,
                    "end": 290,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 282,
                      "end": 289,
                      "object": {
                        "type": "ThisExpression",
                        "start": 282,
                        "end": 286
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 289,
                        "decorators": [],
                        "name": "sx",
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
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 302,
            "end": 350,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 335,
              "decorators": [],
              "name": "staticSetter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 335,
              "end": 350,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 336,
                  "end": 345,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 347,
                "end": 350,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 355,
            "end": 404,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 388,
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 404,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 391,
                "end": 404,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 393,
                    "end": 402,
                    "argument": {
                      "type": "Literal",
                      "start": 400,
                      "end": 401,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 454,
      "end": 609,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 462,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 474,
        "end": 609,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 480,
            "end": 536,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 491,
              "end": 536,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 494,
                "end": 536,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 504,
                    "end": 530,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 511,
                      "end": 529,
                      "left": {
                        "type": "CallExpression",
                        "start": 511,
                        "end": 520,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 511,
                          "end": 518,
                          "object": {
                            "type": "Super",
                            "start": 511,
                            "end": 516
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 517,
                            "end": 518,
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 523,
                        "end": 529,
                        "object": {
                          "type": "ThisExpression",
                          "start": 523,
                          "end": 527
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 528,
                          "end": 529,
                          "decorators": [],
                          "name": "x",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 541,
            "end": 607,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 560,
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 560,
              "end": 607,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 563,
                "end": 607,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 573,
                    "end": 601,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 580,
                      "end": 600,
                      "left": {
                        "type": "CallExpression",
                        "start": 580,
                        "end": 590,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 580,
                          "end": 588,
                          "object": {
                            "type": "Super",
                            "start": 580,
                            "end": 585
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 586,
                            "end": 588,
                            "decorators": [],
                            "name": "sf",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 593,
                        "end": 600,
                        "object": {
                          "type": "ThisExpression",
                          "start": 593,
                          "end": 597
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 598,
                          "end": 600,
                          "decorators": [],
                          "name": "sx",
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
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 660,
      "end": 859,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 666,
        "end": 668,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 677,
        "end": 679,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 680,
        "end": 859,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 686,
            "end": 696,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 686,
              "end": 687,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 687,
              "end": 695,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 689,
                "end": 695
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
            "type": "PropertyDefinition",
            "start": 701,
            "end": 719,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 710,
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 710,
              "end": 718,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 712,
                "end": 718
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 724,
            "end": 761,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 724,
              "end": 725,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 725,
              "end": 761,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 728,
                "end": 761,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 738,
                    "end": 755,
                    "argument": {
                      "type": "CallExpression",
                      "start": 745,
                      "end": 754,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 745,
                        "end": 752,
                        "object": {
                          "type": "Super",
                          "start": 745,
                          "end": 750
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 751,
                          "end": 752,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            "start": 766,
            "end": 812,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 773,
              "end": 775,
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 775,
              "end": 812,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 778,
                "end": 812,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 788,
                    "end": 806,
                    "argument": {
                      "type": "CallExpression",
                      "start": 795,
                      "end": 805,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 795,
                        "end": 803,
                        "object": {
                          "type": "Super",
                          "start": 795,
                          "end": 800
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 801,
                          "end": 803,
                          "decorators": [],
                          "name": "sf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 818,
            "end": 857,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 829,
              "end": 841,
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 841,
              "end": 857,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 844,
                "end": 857,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 846,
                    "end": 855,
                    "argument": {
                      "type": "Literal",
                      "start": 853,
                      "end": 854,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
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
      "type": "ClassDeclaration",
      "start": 901,
      "end": 967,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 907,
        "end": 909,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 910,
        "end": 967,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 916,
            "end": 965,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 916,
              "end": 927,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 927,
              "end": 965,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 928,
                  "end": 947,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 938,
                    "end": 947,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 939,
                      "end": 947,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 941,
                        "end": 947
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 949,
                  "end": 960,
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 959,
                    "end": 960,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 962,
                "end": 965,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
