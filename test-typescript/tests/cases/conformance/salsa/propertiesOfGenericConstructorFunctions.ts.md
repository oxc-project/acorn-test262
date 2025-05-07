__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 86,
  "end": 942,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 235,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 235,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 156,
            "end": 171,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 156,
              "end": 170,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 156,
                "end": 165,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 156,
                  "end": 160
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 165,
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ObjectExpression",
                "start": 168,
                "end": 170,
                "properties": []
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 233,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 207,
              "end": 232,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 207,
                "end": 217,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 207,
                  "end": 211
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 217,
                  "decorators": [],
                  "name": "_map2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ObjectExpression",
                "start": 220,
                "end": 232,
                "properties": [
                  {
                    "type": "Property",
                    "start": 222,
                    "end": 230,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 225,
                      "decorators": [],
                      "name": "ik",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 230,
                      "decorators": [],
                      "name": "iv",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
        "start": 95,
        "end": 103,
        "decorators": [],
        "name": "Multimap",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 104,
          "end": 106,
          "decorators": [],
          "name": "ik",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "decorators": [],
          "name": "iv",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 235,
      "end": 236
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 334,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 311,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 314,
            "end": 334,
            "arguments": [
              {
                "type": "Literal",
                "start": 327,
                "end": 330,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 332,
                "end": 333,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 318,
              "end": 326,
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 396,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 373,
            "decorators": [],
            "name": "map2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 376,
            "end": 396,
            "arguments": [
              {
                "type": "Literal",
                "start": 389,
                "end": 392,
                "raw": "\"m\"",
                "value": "m",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 394,
                "end": 395,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 380,
              "end": 388,
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 443,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 426,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 429,
            "end": 443,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 429,
              "end": 437,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 429,
                "end": 432,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 433,
                "end": 437,
                "decorators": [],
                "name": "_map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 438,
              "end": 442,
              "raw": "'hi'",
              "value": "hi",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 489,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 471,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 474,
            "end": 489,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 474,
              "end": 483,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 478,
                "end": 483,
                "decorators": [],
                "name": "_map2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 484,
              "end": 488,
              "raw": "'hi'",
              "value": "hi",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 512,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 535,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 517,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 520,
            "end": 535,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 520,
              "end": 529,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 520,
                "end": 524,
                "decorators": [],
                "name": "map2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 525,
                "end": 529,
                "decorators": [],
                "name": "_map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 530,
              "end": 534,
              "raw": "'hi'",
              "value": "hi",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 581,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 563,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 566,
            "end": 581,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 566,
              "end": 575,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 566,
                "end": 569,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 570,
                "end": 575,
                "decorators": [],
                "name": "_map2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 576,
              "end": 580,
              "raw": "'hi'",
              "value": "hi",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 632,
      "end": 680,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 647,
        "end": 680,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 653,
            "end": 663,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 653,
              "end": 663,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 653,
                "end": 659,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 653,
                  "end": 657
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 659,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 662,
                "end": 663,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 668,
            "end": 678,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 668,
              "end": 678,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 668,
                "end": 674,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 668,
                  "end": 672
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 674,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 677,
                "end": 678,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
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
        "start": 641,
        "end": 643,
        "decorators": [],
        "name": "Cp",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 644,
          "end": 645,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 681,
      "end": 775,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 681,
        "end": 775,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 681,
          "end": 693,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 681,
            "end": 683,
            "decorators": [],
            "name": "Cp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 684,
            "end": 693,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 696,
          "end": 775,
          "properties": [
            {
              "type": "Property",
              "start": 702,
              "end": 724,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 702,
                "end": 704,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 704,
                "end": 724,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 707,
                  "end": 724,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 709,
                      "end": 722,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 716,
                        "end": 722,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 716,
                          "end": 720
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 721,
                          "end": 722,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "Property",
              "start": 730,
              "end": 773,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 730,
                "end": 732,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 732,
                "end": 773,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 735,
                  "end": 773,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 737,
                      "end": 757,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 737,
                        "end": 756,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 737,
                          "end": 743,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 737,
                            "end": 741
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 742,
                            "end": 743,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 746,
                          "end": 756,
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "start": 746,
                            "end": 752,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 746,
                              "end": 750
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 751,
                              "end": 752,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 755,
                            "end": 756,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 758,
                      "end": 771,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 765,
                        "end": 771,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 765,
                          "end": 769
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 770,
                          "end": 771,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 776,
      "end": 794,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 794,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 782,
            "decorators": [],
            "name": "cp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 785,
            "end": 794,
            "arguments": [
              {
                "type": "Literal",
                "start": 792,
                "end": 793,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 789,
              "end": 791,
              "decorators": [],
              "name": "Cp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 818,
      "end": 830,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 830,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 823,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 826,
            "end": 830,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 826,
              "end": 828,
              "decorators": [],
              "name": "cp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 829,
              "end": 830,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 853,
      "end": 865,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 865,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 858,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 861,
            "end": 865,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 861,
              "end": 863,
              "decorators": [],
              "name": "cp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 864,
              "end": 865,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 888,
      "end": 903,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 892,
          "end": 903,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 892,
            "end": 893,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 896,
            "end": 903,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 896,
              "end": 901,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 896,
                "end": 898,
                "decorators": [],
                "name": "cp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 899,
                "end": 901,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 926,
      "end": 941,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 930,
          "end": 941,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 930,
            "end": 931,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 934,
            "end": 941,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 934,
              "end": 939,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 934,
                "end": 936,
                "decorators": [],
                "name": "cp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 937,
                "end": 939,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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
