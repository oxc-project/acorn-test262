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
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 319,
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
          "start": 320,
          "end": 321,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
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
      "start": 403,
      "end": 427,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 426,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
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
      "start": 717,
      "end": 946,
      "id": {
        "type": "Identifier",
        "start": 726,
        "end": 733,
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
          "right": {
            "type": "Identifier",
            "start": 752,
            "end": 760,
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
        "start": 762,
        "end": 946,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 793,
            "end": 811,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 799,
                "end": 810,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 814,
            "end": 927,
            "init": {
              "type": "VariableDeclaration",
              "start": 819,
              "end": 828,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 823,
                  "end": 828,
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
              "start": 830,
              "end": 846,
              "left": {
                "type": "Identifier",
                "start": 830,
                "end": 831,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "start": 834,
                "end": 846,
                "object": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 839,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 846,
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
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 856,
              "end": 927,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 862,
                  "end": 923,
                  "expression": {
                    "type": "CallExpression",
                    "start": 862,
                    "end": 922,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 862,
                      "end": 873,
                      "object": {
                        "type": "Identifier",
                        "start": 862,
                        "end": 868,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 869,
                        "end": 873,
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
                        "start": 874,
                        "end": 921,
                        "argument": {
                          "type": "CallExpression",
                          "start": 902,
                          "end": 920,
                          "callee": {
                            "type": "Identifier",
                            "start": 902,
                            "end": 910,
                            "decorators": [],
                            "name": "iterable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 911,
                              "end": 919,
                              "object": {
                                "type": "Identifier",
                                "start": 911,
                                "end": 916,
                                "decorators": [],
                                "name": "array",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 917,
                                "end": 918,
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
