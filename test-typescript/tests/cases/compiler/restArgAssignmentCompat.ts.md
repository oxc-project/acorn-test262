__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 87,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 87,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 33,
            "end": 85,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 33,
              "end": 84,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 83,
                  "async": false,
                  "body": {
                    "type": "UnaryExpression",
                    "start": 53,
                    "end": 83,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 59,
                      "end": 82,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 59,
                        "end": 78,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 59,
                          "end": 70,
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "start": 59,
                            "end": 66,
                            "raw": "'item '",
                            "value": "item "
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 70,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 73,
                          "end": 78,
                          "raw": "' = '",
                          "value": " = "
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "void",
                    "prefix": true
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 33,
                "end": 42,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "decorators": [],
                  "name": "forEach",
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 11,
          "end": 25,
          "argument": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 25,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 17,
              "end": 25,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 126,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 126,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 99,
          "end": 110,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 110,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 102,
              "end": 110,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 112,
          "end": 121,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 121,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 115,
              "end": 121
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 145,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 139,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 160,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 146,
        "end": 159,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 148,
            "end": 151,
            "elements": [
              {
                "type": "Literal",
                "start": 149,
                "end": 150,
                "raw": "4",
                "value": 4
              }
            ]
          },
          {
            "type": "Literal",
            "start": 153,
            "end": 158,
            "raw": "'foo'",
            "value": "foo"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
