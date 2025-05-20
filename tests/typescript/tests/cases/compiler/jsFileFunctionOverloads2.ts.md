__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 299,
  "end": 946,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 299,
      "end": 345,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 323,
        "end": 345,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 327,
            "end": 343,
            "argument": {
              "type": "UnaryExpression",
              "start": 334,
              "end": 342,
              "argument": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
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
        "start": 308,
        "end": 319,
        "decorators": [],
        "name": "getTypeName",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 320,
          "end": 321,
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
      "start": 403,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 426,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 417,
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 420,
            "end": 426,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
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
                "start": 420,
                "end": 421,
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
      "start": 717,
      "end": 946,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 762,
        "end": 946,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 793,
            "end": 811,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 799,
                "end": 810,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 799,
                  "end": 805,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 808,
                  "end": 810,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ForStatement",
            "start": 814,
            "end": 927,
            "body": {
              "type": "BlockStatement",
              "start": 856,
              "end": 927,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 862,
                  "end": 923,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 862,
                    "end": 922,
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "start": 874,
                        "end": 921,
                        "argument": {
                          "type": "CallExpression",
                          "start": 902,
                          "end": 920,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 911,
                              "end": 919,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 911,
                                "end": 916,
                                "decorators": [],
                                "name": "array",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 917,
                                "end": 918,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 902,
                            "end": 910,
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
                      "start": 862,
                      "end": 873,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 862,
                        "end": 868,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 869,
                        "end": 873,
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
              "start": 819,
              "end": 828,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 823,
                  "end": 828,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 823,
                    "end": 824,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 827,
                    "end": 828,
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
              "start": 830,
              "end": 846,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 830,
                "end": 831,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 834,
                "end": 846,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 839,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 846,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "start": 848,
              "end": 854,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 848,
                "end": 849,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 853,
                "end": 854,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 930,
            "end": 944,
            "argument": {
              "type": "Identifier",
              "start": 937,
              "end": 943,
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
        "start": 726,
        "end": 733,
        "decorators": [],
        "name": "flatMap",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 734,
          "end": 739,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 741,
          "end": 760,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 741,
            "end": 749,
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 752,
            "end": 760,
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
