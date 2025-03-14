assignmentStricterConstraints.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 65,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 52,
              "end": 65,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 58,
                  "end": 63,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 58,
                    "end": 63,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 37,
                    "end": 38,
                    "typeName": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 40,
                "end": 44,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 43,
                    "end": 44,
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 51,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 47,
                "end": 51
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 17,
              "end": 33,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 18,
                  "end": 19,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 19,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 21,
                  "end": 32,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 32,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 75,
            "end": 112,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 109,
              "end": 112,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 91,
                "end": 95,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 95,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 97,
                "end": 101,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 100,
                    "end": 101,
                    "typeName": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 108,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 104,
                "end": 108
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 84,
              "end": 90,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 85,
                  "end": 86,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 88,
                  "end": 89,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 128,
        "arguments": [
          {
            "type": "Literal",
            "start": 122,
            "end": 123,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 125,
            "end": 127,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
