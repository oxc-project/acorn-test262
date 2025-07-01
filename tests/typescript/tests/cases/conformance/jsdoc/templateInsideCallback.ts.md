__ESTREE_TEST__:PASS:
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
