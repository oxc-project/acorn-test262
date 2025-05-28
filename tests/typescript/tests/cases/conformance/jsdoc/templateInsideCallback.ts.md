__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 193,
  "end": 887,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 217,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 207,
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 210,
            "end": 216,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 658,
      "end": 887,
      "id": {
        "type": "Identifier",
        "start": 667,
        "end": 674,
        "decorators": [],
        "name": "flatMap",
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
          "start": 675,
          "end": 680,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 682,
          "end": 701,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 682,
            "end": 690,
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 693,
            "end": 701,
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 703,
        "end": 887,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 734,
            "end": 752,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 740,
                "end": 751,
                "id": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 746,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 749,
                  "end": 751,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 755,
            "end": 868,
            "init": {
              "type": "VariableDeclaration",
              "start": 760,
              "end": 769,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 764,
                  "end": 769,
                  "id": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 768,
                    "end": 769,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 771,
              "end": 787,
              "left": {
                "type": "Identifier",
                "start": 771,
                "end": 772,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "start": 775,
                "end": 787,
                "object": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 780,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 787,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 789,
              "end": 795,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 789,
                "end": 790,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 794,
                "end": 795,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 797,
              "end": 868,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 803,
                  "end": 864,
                  "expression": {
                    "type": "CallExpression",
                    "start": 803,
                    "end": 863,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 803,
                      "end": 814,
                      "object": {
                        "type": "Identifier",
                        "start": 803,
                        "end": 809,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 810,
                        "end": 814,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "start": 815,
                        "end": 862,
                        "argument": {
                          "type": "CallExpression",
                          "start": 843,
                          "end": 861,
                          "callee": {
                            "type": "Identifier",
                            "start": 843,
                            "end": 851,
                            "decorators": [],
                            "name": "iterable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 852,
                              "end": 860,
                              "object": {
                                "type": "Identifier",
                                "start": 852,
                                "end": 857,
                                "decorators": [],
                                "name": "array",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 858,
                                "end": 859,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": true
                            }
                          ],
                          "optional": false
                        }
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 871,
            "end": 885,
            "argument": {
              "type": "Identifier",
              "start": 878,
              "end": 884,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
