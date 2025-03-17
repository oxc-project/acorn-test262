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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 11,
          "end": 25,
          "argument": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 87,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 33,
            "end": 85,
            "expression": {
              "type": "CallExpression",
              "start": 33,
              "end": 84,
              "callee": {
                "type": "MemberExpression",
                "start": 33,
                "end": 42,
                "object": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "name": "forEach",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 83,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "UnaryExpression",
                    "start": 53,
                    "end": 83,
                    "operator": "void",
                    "prefix": true,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 59,
                      "end": 82,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 59,
                        "end": 78,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 59,
                          "end": 70,
                          "left": {
                            "type": "Literal",
                            "start": 59,
                            "end": 66,
                            "value": "item ",
                            "raw": "'item '"
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 70,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 73,
                          "end": 78,
                          "value": " = ",
                          "raw": "' = '"
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "start": 88,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "g",
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
          "start": 99,
          "end": 110,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 112,
          "end": 121,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 121,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 115,
              "end": 121
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 126,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 145,
      "expression": {
        "type": "AssignmentExpression",
        "start": 139,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 160,
      "expression": {
        "type": "CallExpression",
        "start": 146,
        "end": 159,
        "callee": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": 4,
                "raw": "4"
              }
            ]
          },
          {
            "type": "Literal",
            "start": 153,
            "end": 158,
            "value": "foo",
            "raw": "'foo'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
