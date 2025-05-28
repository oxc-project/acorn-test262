__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 11,
          "end": 25,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 43,
                  "end": 83,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "UnaryExpression",
                    "start": 53,
                    "end": 83,
                    "operator": "void",
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
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
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
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "prefix": true
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "g",
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
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 126,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 137,
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
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
