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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 544,
                  "decorators": [],
                  "name": "obj",
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 556,
                        "decorators": [],
                        "name": "toString",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 557,
                        "end": 578,
                        "async": false,
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
                                "raw": "0",
                                "value": 0
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
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 590,
                  "decorators": [],
                  "name": "one",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 593,
                  "end": 594,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 608,
                  "decorators": [],
                  "name": "_float",
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 611,
                  "end": 617,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 613,
                    "end": 616,
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "start": 613,
                      "end": 614,
                      "raw": "4",
                      "value": 4
                    },
                    "right": {
                      "type": "Literal",
                      "start": 615,
                      "end": 616,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 629,
                  "end": 736,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 639,
                      "end": 644,
                      "raw": "false",
                      "value": false
                    },
                    {
                      "type": "Identifier",
                      "start": 645,
                      "end": 654,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 655,
                      "end": 659,
                      "raw": "null",
                      "value": null
                    },
                    {
                      "type": "Literal",
                      "start": 660,
                      "end": 663,
                      "raw": "\"0\"",
                      "value": "0"
                    },
                    {
                      "type": "Identifier",
                      "start": 664,
                      "end": 667,
                      "decorators": [],
                      "name": "obj",
                      "optional": false
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 668,
                      "end": 684,
                      "argument": {
                        "type": "Literal",
                        "start": 669,
                        "end": 684,
                        "raw": "1.3333333333333",
                        "value": 1.3333333333333
                      },
                      "operator": "-",
                      "prefix": true
                    },
                    {
                      "type": "Literal",
                      "start": 686,
                      "end": 691,
                      "raw": "\"str\"",
                      "value": "str"
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 692,
                      "end": 694,
                      "argument": {
                        "type": "Literal",
                        "start": 693,
                        "end": 694,
                        "raw": "0",
                        "value": 0
                      },
                      "operator": "-",
                      "prefix": true
                    },
                    {
                      "type": "Literal",
                      "start": 695,
                      "end": 699,
                      "raw": "true",
                      "value": true
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 700,
                      "end": 702,
                      "argument": {
                        "type": "Literal",
                        "start": 701,
                        "end": 702,
                        "raw": "0",
                        "value": 0
                      },
                      "operator": "+",
                      "prefix": true
                    },
                    {
                      "type": "Identifier",
                      "start": 704,
                      "end": 707,
                      "decorators": [],
                      "name": "one",
                      "optional": false
                    },
                    {
                      "type": "Literal",
                      "start": 709,
                      "end": 710,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 711,
                      "end": 712,
                      "raw": "0",
                      "value": 0
                    },
                    {
                      "type": "Literal",
                      "start": 714,
                      "end": 719,
                      "raw": "false",
                      "value": false
                    },
                    {
                      "type": "Identifier",
                      "start": 721,
                      "end": 727,
                      "decorators": [],
                      "name": "_float",
                      "optional": false
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 729,
                      "end": 735,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 731,
                        "end": 734,
                        "operator": "/",
                        "left": {
                          "type": "Literal",
                          "start": 731,
                          "end": 732,
                          "raw": "4",
                          "value": 4
                        },
                        "right": {
                          "type": "Literal",
                          "start": 733,
                          "end": 734,
                          "raw": "3",
                          "value": 3
                        }
                      },
                      "operator": "-",
                      "prefix": true
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 638,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 740,
            "end": 1004,
            "alternate": null,
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
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 744,
              "end": 947,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 744,
                "end": 887,
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "start": 744,
                  "end": 826,
                  "operator": "&&",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 744,
                    "end": 768,
                    "operator": "===",
                    "left": {
                      "type": "CallExpression",
                      "start": 744,
                      "end": 761,
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "start": 754,
                          "end": 760,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 756,
                            "end": 759,
                            "operator": "/",
                            "left": {
                              "type": "Literal",
                              "start": 756,
                              "end": 757,
                              "raw": "4",
                              "value": 4
                            },
                            "right": {
                              "type": "Literal",
                              "start": 758,
                              "end": 759,
                              "raw": "3",
                              "value": 3
                            }
                          },
                          "operator": "-",
                          "prefix": true
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 744,
                        "end": 753,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 745,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 746,
                          "end": 753,
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 766,
                      "end": 768,
                      "raw": "14",
                      "value": 14
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 808,
                    "end": 826,
                    "operator": "===",
                    "left": {
                      "type": "CallExpression",
                      "start": 808,
                      "end": 820,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 818,
                          "end": 819,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 808,
                        "end": 817,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 808,
                          "end": 809,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 810,
                          "end": 817,
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 825,
                      "end": 826,
                      "raw": "7",
                      "value": 7
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 868,
                  "end": 887,
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 868,
                    "end": 881,
                    "arguments": [
                      {
                        "type": "UnaryExpression",
                        "start": 878,
                        "end": 880,
                        "argument": {
                          "type": "Literal",
                          "start": 879,
                          "end": 880,
                          "raw": "0",
                          "value": 0
                        },
                        "operator": "-",
                        "prefix": true
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 868,
                      "end": 877,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 868,
                        "end": 869,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 870,
                        "end": 877,
                        "decorators": [],
                        "name": "indexOf",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 886,
                    "end": 887,
                    "raw": "7",
                    "value": 7
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 928,
                "end": 947,
                "operator": "===",
                "left": {
                  "type": "CallExpression",
                  "start": 928,
                  "end": 940,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 938,
                      "end": 939,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 928,
                    "end": 937,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 928,
                      "end": 929,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 930,
                      "end": 937,
                      "decorators": [],
                      "name": "indexOf",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 945,
                  "end": 947,
                  "raw": "10",
                  "value": 10
                }
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
        "start": 522,
        "end": 530,
        "decorators": [],
        "name": "testcase",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 1008,
      "end": 1030,
      "expression": {
        "type": "CallExpression",
        "start": 1008,
        "end": 1029,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1020,
            "end": 1028,
            "decorators": [],
            "name": "testcase",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1008,
          "end": 1019,
          "decorators": [],
          "name": "runTestCase",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
