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
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 103,
        "decorators": [],
        "name": "Multimap",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 235,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 156,
            "end": 171,
            "expression": {
              "type": "AssignmentExpression",
              "start": 156,
              "end": 170,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 156,
                "end": 165,
                "object": {
                  "type": "ThisExpression",
                  "start": 156,
                  "end": 160
                },
                "property": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 165,
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 168,
                "end": 170,
                "properties": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 233,
            "expression": {
              "type": "AssignmentExpression",
              "start": 207,
              "end": 232,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 207,
                "end": 217,
                "object": {
                  "type": "ThisExpression",
                  "start": 207,
                  "end": 211
                },
                "property": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 217,
                  "decorators": [],
                  "name": "_map2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 225,
                      "decorators": [],
                      "name": "ik",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 230,
                      "decorators": [],
                      "name": "iv",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 334,
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
            "callee": {
              "type": "Identifier",
              "start": 318,
              "end": 326,
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 327,
                "end": 330,
                "value": "a",
                "raw": "\"a\""
              },
              {
                "type": "Literal",
                "start": 332,
                "end": 333,
                "value": 1,
                "raw": "1"
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
      "start": 363,
      "end": 397,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 396,
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
            "callee": {
              "type": "Identifier",
              "start": 380,
              "end": 388,
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 389,
                "end": 392,
                "value": "m",
                "raw": "\"m\""
              },
              {
                "type": "Literal",
                "start": 394,
                "end": 395,
                "value": 2,
                "raw": "2"
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
      "start": 421,
      "end": 443,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 443,
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
            "object": {
              "type": "MemberExpression",
              "start": 429,
              "end": 437,
              "object": {
                "type": "Identifier",
                "start": 429,
                "end": 432,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 433,
                "end": 437,
                "decorators": [],
                "name": "_map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 438,
              "end": 442,
              "value": "hi",
              "raw": "'hi'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 489,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 489,
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
            "object": {
              "type": "MemberExpression",
              "start": 474,
              "end": 483,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 478,
                "end": 483,
                "decorators": [],
                "name": "_map2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 484,
              "end": 488,
              "value": "hi",
              "raw": "'hi'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 512,
      "end": 535,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 535,
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
            "object": {
              "type": "MemberExpression",
              "start": 520,
              "end": 529,
              "object": {
                "type": "Identifier",
                "start": 520,
                "end": 524,
                "decorators": [],
                "name": "map2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 525,
                "end": 529,
                "decorators": [],
                "name": "_map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 530,
              "end": 534,
              "value": "hi",
              "raw": "'hi'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 581,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 581,
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
            "object": {
              "type": "MemberExpression",
              "start": 566,
              "end": 575,
              "object": {
                "type": "Identifier",
                "start": 566,
                "end": 569,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 570,
                "end": 575,
                "decorators": [],
                "name": "_map2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 576,
              "end": 580,
              "value": "hi",
              "raw": "'hi'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 632,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 641,
        "end": 643,
        "decorators": [],
        "name": "Cp",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 647,
        "end": 680,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 653,
            "end": 663,
            "expression": {
              "type": "AssignmentExpression",
              "start": 653,
              "end": 663,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 653,
                "end": 659,
                "object": {
                  "type": "ThisExpression",
                  "start": 653,
                  "end": 657
                },
                "property": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 659,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 662,
                "end": 663,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 668,
            "end": 678,
            "expression": {
              "type": "AssignmentExpression",
              "start": 668,
              "end": 678,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 668,
                "end": 674,
                "object": {
                  "type": "ThisExpression",
                  "start": 668,
                  "end": 672
                },
                "property": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 674,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 681,
      "end": 775,
      "expression": {
        "type": "AssignmentExpression",
        "start": 681,
        "end": 775,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 681,
          "end": 693,
          "object": {
            "type": "Identifier",
            "start": 681,
            "end": 683,
            "decorators": [],
            "name": "Cp",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 684,
            "end": 693,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 702,
                "end": 704,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 704,
                "end": 724,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 716,
                          "end": 720
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 721,
                          "end": 722,
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
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 730,
              "end": 773,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 730,
                "end": 732,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 732,
                "end": 773,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 735,
                  "end": 773,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 737,
                      "end": 757,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 737,
                        "end": 756,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 737,
                          "end": 743,
                          "object": {
                            "type": "ThisExpression",
                            "start": 737,
                            "end": 741
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 742,
                            "end": 743,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 746,
                          "end": 756,
                          "left": {
                            "type": "MemberExpression",
                            "start": 746,
                            "end": 752,
                            "object": {
                              "type": "ThisExpression",
                              "start": 746,
                              "end": 750
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 751,
                              "end": 752,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 755,
                            "end": 756,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 758,
                      "end": 771,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 765,
                        "end": 771,
                        "object": {
                          "type": "ThisExpression",
                          "start": 765,
                          "end": 769
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 770,
                          "end": 771,
                          "decorators": [],
                          "name": "y",
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
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 776,
      "end": 794,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 794,
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
            "callee": {
              "type": "Identifier",
              "start": 789,
              "end": 791,
              "decorators": [],
              "name": "Cp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 792,
                "end": 793,
                "value": 1,
                "raw": "1"
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
      "start": 818,
      "end": 830,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 830,
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
            "object": {
              "type": "Identifier",
              "start": 826,
              "end": 828,
              "decorators": [],
              "name": "cp",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 829,
              "end": 830,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 853,
      "end": 865,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 865,
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
            "object": {
              "type": "Identifier",
              "start": 861,
              "end": 863,
              "decorators": [],
              "name": "cp",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 864,
              "end": 865,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 888,
      "end": 903,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 892,
          "end": 903,
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
            "callee": {
              "type": "MemberExpression",
              "start": 896,
              "end": 901,
              "object": {
                "type": "Identifier",
                "start": 896,
                "end": 898,
                "decorators": [],
                "name": "cp",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 899,
                "end": 901,
                "decorators": [],
                "name": "m1",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 926,
      "end": 941,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 930,
          "end": 941,
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
            "callee": {
              "type": "MemberExpression",
              "start": 934,
              "end": 939,
              "object": {
                "type": "Identifier",
                "start": 934,
                "end": 936,
                "decorators": [],
                "name": "cp",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 937,
                "end": 939,
                "decorators": [],
                "name": "m2",
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
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
