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
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 269,
        "decorators": [],
        "name": "getTypeName",
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
          "start": 270,
          "end": 271,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 291,
                "end": 292,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 377,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 376,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
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
      "start": 692,
      "end": 921,
      "id": {
        "type": "Identifier",
        "start": 701,
        "end": 708,
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
          "right": {
            "type": "Identifier",
            "start": 727,
            "end": 735,
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
        "start": 737,
        "end": 921,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 768,
            "end": 786,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 774,
                "end": 785,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 789,
            "end": 902,
            "init": {
              "type": "VariableDeclaration",
              "start": 794,
              "end": 803,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 798,
                  "end": 803,
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
              "start": 805,
              "end": 821,
              "left": {
                "type": "Identifier",
                "start": 805,
                "end": 806,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "start": 809,
                "end": 821,
                "object": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 814,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 821,
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
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 831,
              "end": 902,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 837,
                  "end": 898,
                  "expression": {
                    "type": "CallExpression",
                    "start": 837,
                    "end": 897,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 837,
                      "end": 848,
                      "object": {
                        "type": "Identifier",
                        "start": 837,
                        "end": 843,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 844,
                        "end": 848,
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
                        "start": 849,
                        "end": 896,
                        "argument": {
                          "type": "CallExpression",
                          "start": 877,
                          "end": 895,
                          "callee": {
                            "type": "Identifier",
                            "start": 877,
                            "end": 885,
                            "decorators": [],
                            "name": "iterable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 886,
                              "end": 894,
                              "object": {
                                "type": "Identifier",
                                "start": 886,
                                "end": 891,
                                "decorators": [],
                                "name": "array",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 892,
                                "end": 893,
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
