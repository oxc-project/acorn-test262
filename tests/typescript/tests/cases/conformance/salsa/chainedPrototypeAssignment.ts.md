__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 44,
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
          "end": 37,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 43,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 40,
          "end": 43
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 69,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 69,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 66,
                "end": 69
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
  "start": 37,
  "end": 244,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 45,
            "end": 76,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 58,
              "end": 76,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 64,
                  "end": 74,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 64,
                    "end": 74,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 64,
                      "end": 70,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 64,
                        "end": 68
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 73,
                      "end": 74,
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
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 85,
            "end": 116,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 98,
              "end": 116,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 104,
                  "end": 114,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 104,
                    "end": 114,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 110,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 113,
                      "end": 114,
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
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 130,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 117,
          "end": 126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 144,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 131,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 131,
          "end": 140,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 131,
            "end": 138,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 243,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 243,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 145,
          "end": 156,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 147,
            "end": 156,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 159,
          "end": 243,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 159,
            "end": 170,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 161,
              "end": 170,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 173,
            "end": 243,
            "properties": [
              {
                "type": "Property",
                "start": 208,
                "end": 241,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 209,
                  "end": 241,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 213,
                    "end": 241,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 223,
                        "end": 235,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 230,
                          "end": 235,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 234,
                            "end": 235,
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
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
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
  "start": 37,
  "end": 134,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 47,
            "end": 63,
            "arguments": [
              {
                "type": "Literal",
                "start": 55,
                "end": 62,
                "raw": "'./mod'",
                "value": "./mod"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 73,
            "end": 84,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 77,
              "end": 82,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 77,
                "end": 80,
                "decorators": [],
                "name": "mod",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 93,
            "end": 104,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 97,
              "end": 102,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
                "decorators": [],
                "name": "mod",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 116,
        "arguments": [
          {
            "type": "Literal",
            "start": 109,
            "end": 115,
            "raw": "'nope'",
            "value": "nope"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 105,
          "end": 108,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 134,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 117,
        "end": 134,
        "arguments": [
          {
            "type": "Literal",
            "start": 121,
            "end": 133,
            "raw": "'not really'",
            "value": "not really"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 117,
          "end": 120,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
