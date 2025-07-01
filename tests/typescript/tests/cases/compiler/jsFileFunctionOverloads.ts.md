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
        "name": "getTypeName",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 269
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 292
              },
              "prefix": true,
              "start": 284,
              "end": 292
            },
            "start": 277,
            "end": 293
          }
        ],
        "start": 273,
        "end": 295
      },
      "expression": false,
      "start": 249,
      "end": 295
    },
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
            "start": 359,
            "end": 367
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
                "start": 370,
                "end": 371
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "id": null,
            "generator": false,
            "start": 370,
            "end": 376
          },
          "definite": false,
          "start": 359,
          "end": 376
        }
      ],
      "declare": false,
      "start": 353,
      "end": 377
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 708
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
          "start": 709,
          "end": 714
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
            "start": 716,
            "end": 724
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 727,
            "end": 735
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 735
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
                  "start": 774,
                  "end": 780
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 783,
                  "end": 785
                },
                "definite": false,
                "start": 774,
                "end": 785
              }
            ],
            "declare": false,
            "start": 768,
            "end": 786
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
                    "start": 798,
                    "end": 799
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 802,
                    "end": 803
                  },
                  "definite": false,
                  "start": 798,
                  "end": 803
                }
              ],
              "declare": false,
              "start": 794,
              "end": 803
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 806
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
                  "start": 809,
                  "end": 814
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 821
                },
                "optional": false,
                "computed": false,
                "start": 809,
                "end": 821
              },
              "start": 805,
              "end": 821
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
                "start": 823,
                "end": 824
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 828,
                "end": 829
              },
              "start": 823,
              "end": 829
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
                        "start": 837,
                        "end": 843
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 844,
                        "end": 848
                      },
                      "optional": false,
                      "computed": false,
                      "start": 837,
                      "end": 848
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
                            "start": 877,
                            "end": 885
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
                                "start": 886,
                                "end": 891
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 892,
                                "end": 893
                              },
                              "optional": false,
                              "computed": true,
                              "start": 886,
                              "end": 894
                            }
                          ],
                          "optional": false,
                          "start": 877,
                          "end": 895
                        },
                        "start": 849,
                        "end": 896
                      }
                    ],
                    "optional": false,
                    "start": 837,
                    "end": 897
                  },
                  "directive": null,
                  "start": 837,
                  "end": 898
                }
              ],
              "start": 831,
              "end": 902
            },
            "start": 789,
            "end": 902
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 918
            },
            "start": 905,
            "end": 919
          }
        ],
        "start": 737,
        "end": 921
      },
      "expression": false,
      "start": 692,
      "end": 921
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 249,
  "end": 921
}
```
