__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 35,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 35,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 29,
              "end": 35
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 41,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 38,
          "end": 41
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 66,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 66,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 80,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 80,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 77,
                "end": 80
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 28,
            "arguments": [
              {
                "type": "Literal",
                "start": 18,
                "end": 27,
                "raw": "\"./other\"",
                "value": "./other"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 40,
            "end": 50,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 40,
              "end": 47,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 50,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 63,
            "end": 90,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 74,
              "end": 90,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 76,
                  "end": 88,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 76,
                    "end": 87,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 76,
                      "end": 83,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 83,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 86,
                      "end": 87,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 133,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 133,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 91,
          "end": 104,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 91,
            "end": 102,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 93,
              "end": 102,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 107,
          "end": 133,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 118,
            "end": 133,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 120,
                "end": 131,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 120,
                  "end": 130,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 120,
                    "end": 126,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 120,
                      "end": 124
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 129,
                    "end": 130,
                    "raw": "2",
                    "value": 2
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 144,
            "end": 151,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 153,
        "end": 157,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 159,
        "end": 162,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 159,
          "end": 160,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 29,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 15,
            "end": 27,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 15,
              "end": 26,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 15,
                "end": 22,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 15,
                  "end": 19
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 22,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 25,
                "end": 26,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 49,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 30,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 30,
          "end": 44,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 36,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 37,
            "end": 44,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
