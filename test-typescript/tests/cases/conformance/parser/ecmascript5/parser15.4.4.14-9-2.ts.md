__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 513,
  "end": 1031,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 513,
      "end": 1007,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 530,
        "name": "testcase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 533,
        "end": 1007,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 537,
            "end": 580,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 541,
                "end": 579,
                "id": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 544,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 547,
                  "end": 579,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 548,
                      "end": 578,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 556,
                        "name": "toString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 557,
                        "end": 578,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 568,
                          "end": 578,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 569,
                              "end": 577,
                              "argument": {
                                "type": "Literal",
                                "start": 576,
                                "end": 577,
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
            "start": 583,
            "end": 595,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 587,
                "end": 594,
                "id": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 590,
                  "name": "one",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 593,
                  "end": 594,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 598,
            "end": 618,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 602,
                "end": 617,
                "id": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 608,
                  "name": "_float",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 611,
                  "end": 617,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 613,
                    "end": 616,
                    "left": {
                      "type": "Literal",
                      "start": 613,
                      "end": 614,
                      "value": 4,
                      "raw": "4"
                    },
                    "operator": "/",
                    "right": {
                      "type": "Literal",
                      "start": 615,
                      "end": 616,
                      "value": 3,
                      "raw": "3"
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 621,
            "end": 737,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 625,
                "end": 736,
                "id": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 629,
                  "end": 736,
                  "callee": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 638,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 639,
                      "end": 644,
                      "value": false,
                      "raw": "false"
                    },
                    {
                      "type": "Identifier",
                      "start": 645,
                      "end": 654,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 655,
                      "end": 659,
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Literal",
                      "start": 660,
                      "end": 663,
                      "value": "0",
                      "raw": "\"0\""
                    },
                    {
                      "type": "Identifier",
                      "start": 664,
                      "end": 667,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 668,
                      "end": 684,
                      "operator": "-",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 669,
                        "end": 684,
                        "value": 1.3333333333333,
                        "raw": "1.3333333333333"
                      }
                    },
                    {
                      "type": "Literal",
                      "start": 686,
                      "end": 691,
                      "value": "str",
                      "raw": "\"str\""
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 692,
                      "end": 694,
                      "operator": "-",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 693,
                        "end": 694,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    {
                      "type": "Literal",
                      "start": 695,
                      "end": 699,
                      "value": true,
                      "raw": "true"
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 700,
                      "end": 702,
                      "operator": "+",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 701,
                        "end": 702,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 704,
                      "end": 707,
                      "name": "one",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 709,
                      "end": 710,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 711,
                      "end": 712,
                      "value": 0,
                      "raw": "0"
                    },
                    {
                      "type": "Literal",
                      "start": 714,
                      "end": 719,
                      "value": false,
                      "raw": "false"
                    },
                    {
                      "type": "Identifier",
                      "start": 721,
                      "end": 727,
                      "name": "_float",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 729,
                      "end": 735,
                      "operator": "-",
                      "prefix": true,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 731,
                        "end": 734,
                        "left": {
                          "type": "Literal",
                          "start": 731,
                          "end": 732,
                          "value": 4,
                          "raw": "4"
                        },
                        "operator": "/",
                        "right": {
                          "type": "Literal",
                          "start": 733,
                          "end": 734,
                          "value": 3,
                          "raw": "3"
                        }
                      }
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 740,
            "end": 1004,
            "test": {
              "type": "LogicalExpression",
              "start": 744,
              "end": 947,
              "left": {
                "type": "LogicalExpression",
                "start": 744,
                "end": 887,
                "left": {
                  "type": "LogicalExpression",
                  "start": 744,
                  "end": 826,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 744,
                    "end": 768,
                    "left": {
                      "type": "CallExpression",
                      "start": 744,
                      "end": 761,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 744,
                        "end": 753,
                        "object": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 745,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 746,
                          "end": 753,
                          "name": "indexOf",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "start": 754,
                          "end": 760,
                          "operator": "-",
                          "prefix": true,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 756,
                            "end": 759,
                            "left": {
                              "type": "Literal",
                              "start": 756,
                              "end": 757,
                              "value": 4,
                              "raw": "4"
                            },
                            "operator": "/",
                            "right": {
                              "type": "Literal",
                              "start": 758,
                              "end": 759,
                              "value": 3,
                              "raw": "3"
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 766,
                      "end": 768,
                      "value": 14,
                      "raw": "14"
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 808,
                    "end": 826,
                    "left": {
                      "type": "CallExpression",
                      "start": 808,
                      "end": 820,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 808,
                        "end": 817,
                        "object": {
                          "type": "Identifier",
                          "start": 808,
                          "end": 809,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 810,
                          "end": 817,
                          "name": "indexOf",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 818,
                          "end": 819,
                          "value": 0,
                          "raw": "0"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 825,
                      "end": 826,
                      "value": 7,
                      "raw": "7"
                    }
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 868,
                  "end": 887,
                  "left": {
                    "type": "CallExpression",
                    "start": 868,
                    "end": 881,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 868,
                      "end": 877,
                      "object": {
                        "type": "Identifier",
                        "start": 868,
                        "end": 869,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 870,
                        "end": 877,
                        "name": "indexOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "UnaryExpression",
                        "start": 878,
                        "end": 880,
                        "operator": "-",
                        "prefix": true,
                        "argument": {
                          "type": "Literal",
                          "start": 879,
                          "end": 880,
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 886,
                    "end": 887,
                    "value": 7,
                    "raw": "7"
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 928,
                "end": 947,
                "left": {
                  "type": "CallExpression",
                  "start": 928,
                  "end": 940,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 928,
                    "end": 937,
                    "object": {
                      "type": "Identifier",
                      "start": 928,
                      "end": 929,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 930,
                      "end": 937,
                      "name": "indexOf",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 938,
                      "end": 939,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 945,
                  "end": 947,
                  "value": 10,
                  "raw": "10"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 982,
              "end": 1004,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 988,
                  "end": 1000,
                  "argument": {
                    "type": "Literal",
                    "start": 995,
                    "end": 999,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1008,
      "end": 1030,
      "expression": {
        "type": "CallExpression",
        "start": 1008,
        "end": 1029,
        "callee": {
          "type": "Identifier",
          "start": 1008,
          "end": 1019,
          "name": "runTestCase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1020,
            "end": 1028,
            "name": "testcase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
