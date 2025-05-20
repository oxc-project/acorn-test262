__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 249,
  "end": 921,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 249,
      "end": 295,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 273,
        "end": 295,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 277,
            "end": 293,
            "argument": {
              "type": "UnaryExpression",
              "start": 284,
              "end": 292,
              "argument": {
                "type": "Identifier",
                "start": 291,
                "end": 292,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 269,
        "decorators": [],
        "name": "getTypeName",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 270,
          "end": 271,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 376,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 367,
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 370,
            "end": 376,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 692,
      "end": 921,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 737,
        "end": 921,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 768,
            "end": 786,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 774,
                "end": 785,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 780,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 783,
                  "end": 785,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ForStatement",
            "start": 789,
            "end": 902,
            "body": {
              "type": "BlockStatement",
              "start": 831,
              "end": 902,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 837,
                  "end": 898,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 837,
                    "end": 897,
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "start": 849,
                        "end": 896,
                        "argument": {
                          "type": "CallExpression",
                          "start": 877,
                          "end": 895,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 886,
                              "end": 894,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 886,
                                "end": 891,
                                "decorators": [],
                                "name": "array",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 892,
                                "end": 893,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 877,
                            "end": 885,
                            "decorators": [],
                            "name": "iterable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 837,
                      "end": 848,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 837,
                        "end": 843,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 844,
                        "end": 848,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 794,
              "end": 803,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 798,
                  "end": 803,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 798,
                    "end": 799,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 802,
                    "end": 803,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 805,
              "end": 821,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 805,
                "end": 806,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 809,
                "end": 821,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 814,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 821,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 823,
              "end": 829,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 823,
                "end": 824,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 828,
                "end": 829,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 905,
            "end": 919,
            "argument": {
              "type": "Identifier",
              "start": 912,
              "end": 918,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 701,
        "end": 708,
        "decorators": [],
        "name": "flatMap",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 709,
          "end": 714,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 716,
          "end": 735,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 716,
            "end": 724,
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 727,
            "end": 735,
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
