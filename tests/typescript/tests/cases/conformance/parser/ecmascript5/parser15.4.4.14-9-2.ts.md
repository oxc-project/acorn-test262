__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 513,
  "end": 1030,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 513,
      "end": 1007,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 530,
        "decorators": [],
        "name": "testcase",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 533,
        "end": 1007,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 537,
            "end": 580,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 541,
                "end": 579,
                "id": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 544,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 556,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 557,
                        "end": 578,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
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
                        "expression": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 583,
            "end": 595,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 587,
                "end": 594,
                "id": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 590,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 598,
            "end": 618,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 602,
                "end": 617,
                "id": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 608,
                  "decorators": [],
                  "name": "_float",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 611,
                  "end": 617,
                  "operator": "-",
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
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 621,
            "end": 737,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 625,
                "end": 736,
                "id": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 629,
                  "end": 736,
                  "callee": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 638,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
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
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 668,
                      "end": 684,
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "start": 669,
                        "end": 684,
                        "value": 1.3333333333333,
                        "raw": "1.3333333333333"
                      },
                      "prefix": true
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
                      "argument": {
                        "type": "Literal",
                        "start": 693,
                        "end": 694,
                        "value": 0,
                        "raw": "0"
                      },
                      "prefix": true
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
                      "argument": {
                        "type": "Literal",
                        "start": 701,
                        "end": 702,
                        "value": 0,
                        "raw": "0"
                      },
                      "prefix": true
                    },
                    {
                      "type": "Identifier",
                      "start": 704,
                      "end": 707,
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "_float",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 729,
                      "end": 735,
                      "operator": "-",
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
                      },
                      "prefix": true
                    }
                  ]
                },
                "definite": false
              }
            ],
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 746,
                          "end": 753,
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "start": 754,
                          "end": 760,
                          "operator": "-",
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
                          },
                          "prefix": true
                        }
                      ],
                      "optional": false
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 810,
                          "end": 817,
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 818,
                          "end": 819,
                          "value": 0,
                          "raw": "0"
                        }
                      ],
                      "optional": false
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 870,
                        "end": 877,
                        "decorators": [],
                        "name": "indexOf",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "UnaryExpression",
                        "start": 878,
                        "end": 880,
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "start": 879,
                          "end": 880,
                          "value": 0,
                          "raw": "0"
                        },
                        "prefix": true
                      }
                    ],
                    "optional": false
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 930,
                      "end": 937,
                      "decorators": [],
                      "name": "indexOf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 938,
                      "end": 939,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
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
      "expression": false
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
          "decorators": [],
          "name": "runTestCase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1020,
            "end": 1028,
            "decorators": [],
            "name": "testcase",
            "optional": false,
            "typeAnnotation": null
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
