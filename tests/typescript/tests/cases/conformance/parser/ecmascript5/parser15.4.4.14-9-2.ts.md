__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testcase",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 530
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 544
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 556
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 576,
                                "end": 577
                              },
                              "start": 569,
                              "end": 577
                            }
                          ],
                          "start": 568,
                          "end": 578
                        },
                        "expression": false,
                        "start": 557,
                        "end": 578
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 548,
                      "end": 578
                    }
                  ],
                  "start": 547,
                  "end": 579
                },
                "definite": false,
                "start": 541,
                "end": 579
              }
            ],
            "declare": false,
            "start": 537,
            "end": 580
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 590
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 593,
                  "end": 594
                },
                "definite": false,
                "start": 587,
                "end": 594
              }
            ],
            "declare": false,
            "start": 583,
            "end": 595
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_float",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 608
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 613,
                      "end": 614
                    },
                    "operator": "/",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 615,
                      "end": 616
                    },
                    "start": 613,
                    "end": 616
                  },
                  "prefix": true,
                  "start": 611,
                  "end": 617
                },
                "definite": false,
                "start": 602,
                "end": 617
              }
            ],
            "declare": false,
            "start": 598,
            "end": 618
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 625,
                  "end": 626
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 638
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 639,
                      "end": 644
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 645,
                      "end": 654
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 655,
                      "end": 659
                    },
                    {
                      "type": "Literal",
                      "value": "0",
                      "raw": "\"0\"",
                      "start": 660,
                      "end": 663
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 667
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1.3333333333333,
                        "raw": "1.3333333333333",
                        "start": 669,
                        "end": 684
                      },
                      "prefix": true,
                      "start": 668,
                      "end": 684
                    },
                    {
                      "type": "Literal",
                      "value": "str",
                      "raw": "\"str\"",
                      "start": 686,
                      "end": 691
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 693,
                        "end": 694
                      },
                      "prefix": true,
                      "start": 692,
                      "end": 694
                    },
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 695,
                      "end": 699
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "+",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 701,
                        "end": 702
                      },
                      "prefix": true,
                      "start": 700,
                      "end": 702
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 707
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 709,
                      "end": 710
                    },
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 711,
                      "end": 712
                    },
                    {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 714,
                      "end": 719
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_float",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 727
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 731,
                          "end": 732
                        },
                        "operator": "/",
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 733,
                          "end": 734
                        },
                        "start": 731,
                        "end": 734
                      },
                      "prefix": true,
                      "start": 729,
                      "end": 735
                    }
                  ],
                  "start": 629,
                  "end": 736
                },
                "definite": false,
                "start": 625,
                "end": 736
              }
            ],
            "declare": false,
            "start": 621,
            "end": 737
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 744,
                          "end": 745
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 746,
                          "end": 753
                        },
                        "optional": false,
                        "computed": false,
                        "start": 744,
                        "end": 753
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4",
                              "start": 756,
                              "end": 757
                            },
                            "operator": "/",
                            "right": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 758,
                              "end": 759
                            },
                            "start": 756,
                            "end": 759
                          },
                          "prefix": true,
                          "start": 754,
                          "end": 760
                        }
                      ],
                      "optional": false,
                      "start": 744,
                      "end": 761
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 14,
                      "raw": "14",
                      "start": 766,
                      "end": 768
                    },
                    "start": 744,
                    "end": 768
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 808,
                          "end": 809
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 810,
                          "end": 817
                        },
                        "optional": false,
                        "computed": false,
                        "start": 808,
                        "end": 817
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 818,
                          "end": 819
                        }
                      ],
                      "optional": false,
                      "start": 808,
                      "end": 820
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 7,
                      "raw": "7",
                      "start": 825,
                      "end": 826
                    },
                    "start": 808,
                    "end": 826
                  },
                  "start": 744,
                  "end": 826
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 869
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "indexOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 870,
                        "end": 877
                      },
                      "optional": false,
                      "computed": false,
                      "start": 868,
                      "end": 877
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 879,
                          "end": 880
                        },
                        "prefix": true,
                        "start": 878,
                        "end": 880
                      }
                    ],
                    "optional": false,
                    "start": 868,
                    "end": 881
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 886,
                    "end": 887
                  },
                  "start": 868,
                  "end": 887
                },
                "start": 744,
                "end": 887
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 928,
                      "end": 929
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "indexOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 930,
                      "end": 937
                    },
                    "optional": false,
                    "computed": false,
                    "start": 928,
                    "end": 937
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 938,
                      "end": 939
                    }
                  ],
                  "optional": false,
                  "start": 928,
                  "end": 940
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 945,
                  "end": 947
                },
                "start": 928,
                "end": 947
              },
              "start": 744,
              "end": 947
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 995,
                    "end": 999
                  },
                  "start": 988,
                  "end": 1000
                }
              ],
              "start": 982,
              "end": 1004
            },
            "alternate": null,
            "start": 740,
            "end": 1004
          }
        ],
        "start": 533,
        "end": 1007
      },
      "expression": false,
      "start": 513,
      "end": 1007
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "runTestCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1008,
          "end": 1019
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "testcase",
            "optional": false,
            "typeAnnotation": null,
            "start": 1020,
            "end": 1028
          }
        ],
        "optional": false,
        "start": 1008,
        "end": 1029
      },
      "directive": null,
      "start": 1008,
      "end": 1030
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 513,
  "end": 1030
}
```
