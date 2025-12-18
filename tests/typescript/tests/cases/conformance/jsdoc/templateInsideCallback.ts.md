__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 207
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "id": null,
            "generator": false,
            "start": 210,
            "end": 216
          },
          "definite": false,
          "start": 199,
          "end": 216
        }
      ],
      "declare": false,
      "start": 193,
      "end": 217
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 674
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 680
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 690
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 701
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 682,
          "end": 701
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 746
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 749,
                  "end": 751
                },
                "definite": false,
                "start": 740,
                "end": 751
              }
            ],
            "declare": false,
            "start": 734,
            "end": 752
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 765
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 768,
                    "end": 769
                  },
                  "definite": false,
                  "start": 764,
                  "end": 769
                }
              ],
              "declare": false,
              "start": 760,
              "end": 769
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 772
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 780
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 787
                },
                "optional": false,
                "computed": false,
                "start": 775,
                "end": 787
              },
              "start": 771,
              "end": 787
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 790
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 794,
                "end": 795
              },
              "start": 789,
              "end": 795
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 803,
                        "end": 809
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 814
                      },
                      "optional": false,
                      "computed": false,
                      "start": 803,
                      "end": 814
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "iterable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 843,
                            "end": 851
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 852,
                                "end": 857
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 858,
                                "end": 859
                              },
                              "optional": false,
                              "computed": true,
                              "start": 852,
                              "end": 860
                            }
                          ],
                          "optional": false,
                          "start": 843,
                          "end": 861
                        },
                        "start": 815,
                        "end": 862
                      }
                    ],
                    "optional": false,
                    "start": 803,
                    "end": 863
                  },
                  "directive": null,
                  "start": 803,
                  "end": 864
                }
              ],
              "start": 797,
              "end": 868
            },
            "start": 755,
            "end": 868
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 884
            },
            "start": 871,
            "end": 885
          }
        ],
        "start": 703,
        "end": 887
      },
      "expression": false,
      "start": 658,
      "end": 887
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 193,
  "end": 887
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 193,
    "end": 198,
    "range": [
      193,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 199,
    "end": 207,
    "range": [
      199,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214,
    "range": [
      212,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 658,
    "end": 666,
    "range": [
      658,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 667,
    "end": 674,
    "range": [
      667,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 675,
    "end": 680,
    "range": [
      675,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 682,
    "end": 690,
    "range": [
      682,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 693,
    "end": 701,
    "range": [
      693,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 734,
    "end": 739,
    "range": [
      734,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 740,
    "end": 746,
    "range": [
      740,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 755,
    "end": 758,
    "range": [
      755,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 760,
    "end": 763,
    "range": [
      760,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 775,
    "end": 780,
    "range": [
      775,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 781,
    "end": 787,
    "range": [
      781,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 791,
    "end": 793,
    "range": [
      791,
      793
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 803,
    "end": 809,
    "range": [
      803,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 810,
    "end": 814,
    "range": [
      810,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 843,
    "end": 851,
    "range": [
      843,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 852,
    "end": 857,
    "range": [
      852,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 871,
    "end": 877,
    "range": [
      871,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 878,
    "end": 884,
    "range": [
      878,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  }
]
```
