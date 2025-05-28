__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "isBig",
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
          "start": 23,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 29,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 30,
        "end": 50,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 32,
          "end": 50,
          "parameterName": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 50,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 37,
              "end": 50,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 39,
                  "end": 48,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 42,
                    "decorators": [],
                    "name": "big",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 44,
                      "end": 48,
                      "literal": {
                        "type": "Literal",
                        "start": 44,
                        "end": 48,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 67,
        "decorators": [],
        "name": "bigger",
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
          "start": 68,
          "end": 76,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 76,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 74,
              "end": 76,
              "members": []
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 156,
        "body": [
          {
            "type": "IfStatement",
            "start": 84,
            "end": 154,
            "test": {
              "type": "CallExpression",
              "start": 88,
              "end": 99,
              "callee": {
                "type": "Identifier",
                "start": 88,
                "end": 93,
                "decorators": [],
                "name": "isBig",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 94,
                  "end": 98
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 101,
              "end": 154,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 111,
                  "end": 120,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 111,
                    "end": 119,
                    "object": {
                      "type": "ThisExpression",
                      "start": 111,
                      "end": 115
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 119,
                      "decorators": [],
                      "name": "big",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 170,
        "decorators": [],
        "name": "bar",
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
          "start": 171,
          "end": 192,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 175,
            "end": 192,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 177,
              "end": 192,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 177,
                  "end": 183
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 186,
                  "end": 192
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 271,
        "body": [
          {
            "type": "IfStatement",
            "start": 200,
            "end": 269,
            "test": {
              "type": "BinaryExpression",
              "start": 204,
              "end": 228,
              "left": {
                "type": "UnaryExpression",
                "start": 204,
                "end": 215,
                "operator": "typeof",
                "argument": {
                  "type": "ThisExpression",
                  "start": 211,
                  "end": 215
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 220,
                "end": 228,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 230,
              "end": 269,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 240,
                  "end": 263,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 246,
                      "end": 262,
                      "id": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 255,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 247,
                          "end": 255,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 249,
                            "end": 255
                          }
                        }
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 258,
                        "end": 262
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
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
