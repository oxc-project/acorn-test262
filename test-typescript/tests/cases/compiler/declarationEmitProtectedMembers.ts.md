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
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 406,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
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
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 117,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 123,
            "end": 160,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 145,
              "name": "accessor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 160,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 155,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 149,
                      "end": 155
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 160,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 187,
              "name": "accessor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 203,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 237,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 228,
              "name": "sx",
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
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 243,
            "end": 296,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 262,
              "name": "sf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 296,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "sx",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 302,
            "end": 350,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 335,
              "name": "staticSetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 335,
              "end": 350,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 336,
                  "end": 345,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 347,
                "end": 350,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 355,
            "end": 404,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 388,
              "name": "staticGetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 404,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "start": 454,
      "end": 609,
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 462,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 471,
        "end": 473,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 474,
        "end": 609,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 480,
            "end": 536,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 491,
              "end": 536,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "name": "f",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
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
                          "name": "x",
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 541,
            "end": 607,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 560,
              "name": "sf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 560,
              "end": 607,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "name": "sf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
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
                          "name": "sx",
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "start": 660,
      "end": 859,
      "id": {
        "type": "Identifier",
        "start": 666,
        "end": 668,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 677,
        "end": 679,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 680,
        "end": 859,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 686,
            "end": 696,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 686,
              "end": 687,
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
              "start": 687,
              "end": 695,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 689,
                "end": 695
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 701,
            "end": 719,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 710,
              "name": "sx",
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
              "start": 710,
              "end": 718,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 712,
                "end": 718
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 724,
            "end": 761,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 724,
              "end": 725,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 725,
              "end": 761,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 766,
            "end": 812,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 773,
              "end": 775,
              "name": "sf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 775,
              "end": 812,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "sf",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 818,
            "end": 857,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 829,
              "end": 841,
              "name": "staticGetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 841,
              "end": 857,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
      "start": 901,
      "end": 967,
      "id": {
        "type": "Identifier",
        "start": 907,
        "end": 909,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 910,
        "end": 967,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 916,
            "end": 965,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 916,
              "end": 927,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 927,
              "end": 965,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 939,
                      "end": 947,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 941,
                        "end": 947
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 962,
                "end": 965,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
