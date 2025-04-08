__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 518,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 86,
        "name": "testNonNullInference",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 104,
          "name": "numbers",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 94,
            "end": 104,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 96,
              "end": 104,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 106,
        "end": 255,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 112,
            "end": 121,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 116,
                "end": 120,
                "id": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 120,
                  "name": "last",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 127,
            "end": 231,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 132,
              "end": 139,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 138,
                  "end": 139,
                  "id": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 143,
              "end": 150,
              "name": "numbers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 152,
              "end": 231,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 162,
                  "end": 206,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 166,
                    "end": 171,
                    "left": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "%",
                    "right": {
                      "type": "Literal",
                      "start": 170,
                      "end": 171,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 173,
                    "end": 206,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 187,
                        "end": 196,
                        "argument": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 195,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 216,
                  "end": 225,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 216,
                    "end": 224,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 220,
                      "name": "last",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 237,
            "end": 242,
            "expression": {
              "type": "Identifier",
              "start": 237,
              "end": 241,
              "name": "last",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 247,
            "end": 253,
            "expression": {
              "type": "TSNonNullExpression",
              "start": 247,
              "end": 252,
              "expression": {
                "type": "Identifier",
                "start": 247,
                "end": 251,
                "name": "last",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 257,
      "end": 518,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 296,
        "name": "testNonNullInferenceWithArrays",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 297,
          "end": 314,
          "name": "numbers",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 304,
            "end": 314,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 306,
              "end": 314,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 306,
                "end": 312
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 316,
        "end": 518,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 322,
            "end": 333,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 332,
                "id": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 332,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 338,
            "end": 353,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 344,
                "end": 352,
                "id": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 347,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 350,
                  "end": 352,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 359,
            "end": 490,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 364,
              "end": 371,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 370,
                  "end": 371,
                  "id": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 371,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 375,
              "end": 382,
              "name": "numbers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 384,
              "end": 490,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 394,
                  "end": 440,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 398,
                    "end": 403,
                    "left": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 399,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "%",
                    "right": {
                      "type": "Literal",
                      "start": 402,
                      "end": 403,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 405,
                    "end": 440,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 419,
                        "end": 430,
                        "argument": {
                          "type": "ArrayExpression",
                          "start": 426,
                          "end": 429,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 427,
                              "end": 428,
                              "name": "n",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 450,
                  "end": 462,
                  "expression": {
                    "type": "CallExpression",
                    "start": 450,
                    "end": 461,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 450,
                      "end": 458,
                      "object": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 453,
                        "name": "arr",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 454,
                        "end": 458,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 459,
                        "end": 460,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 471,
                  "end": 484,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 471,
                    "end": 483,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 477,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 483,
                      "name": "arr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 496,
            "end": 503,
            "expression": {
              "type": "Identifier",
              "start": 496,
              "end": 502,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 508,
            "end": 516,
            "expression": {
              "type": "TSNonNullExpression",
              "start": 508,
              "end": 515,
              "expression": {
                "type": "Identifier",
                "start": 508,
                "end": 514,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
