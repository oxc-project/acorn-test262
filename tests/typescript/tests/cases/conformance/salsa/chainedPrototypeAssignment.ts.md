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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 70,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 69,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 76,
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
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 58,
              "end": 76,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 64,
                  "end": 74,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 64,
                    "end": 74,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 64,
                      "end": 70,
                      "object": {
                        "type": "ThisExpression",
                        "start": 64,
                        "end": 68
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 73,
                      "end": 74,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 116,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 116,
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
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 98,
              "end": 116,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 104,
                  "end": 114,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 104,
                    "end": 114,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 110,
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 113,
                      "end": 114,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 130,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 117,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 144,
      "expression": {
        "type": "AssignmentExpression",
        "start": 131,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 131,
          "end": 140,
          "object": {
            "type": "Identifier",
            "start": 131,
            "end": 138,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 243,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 243,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 145,
          "end": 156,
          "object": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 147,
            "end": 156,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
            "object": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 161,
              "end": 170,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 209,
                  "end": 241,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                          "left": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 234,
                            "end": 235,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        }
      },
      "directive": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 63,
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
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 55,
                "end": 62,
                "value": "./mod",
                "raw": "'./mod'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 84,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 84,
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
            "callee": {
              "type": "MemberExpression",
              "start": 77,
              "end": 82,
              "object": {
                "type": "Identifier",
                "start": 77,
                "end": 80,
                "decorators": [],
                "name": "mod",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 104,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 104,
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
            "callee": {
              "type": "MemberExpression",
              "start": 97,
              "end": 102,
              "object": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
                "decorators": [],
                "name": "mod",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 116,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 116,
        "callee": {
          "type": "MemberExpression",
          "start": 105,
          "end": 108,
          "object": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 109,
            "end": 115,
            "value": "nope",
            "raw": "'nope'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 134,
      "expression": {
        "type": "CallExpression",
        "start": 117,
        "end": 134,
        "callee": {
          "type": "MemberExpression",
          "start": 117,
          "end": 120,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 121,
            "end": 133,
            "value": "not really",
            "raw": "'not really'"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
