awaitBinaryExpression5_es2017.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 22,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 15,
                "end": 22
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 55,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 55,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 46,
                  "end": 55,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 47,
                      "end": 54
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 46,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 89,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 80,
        "decorators": [],
        "name": "before",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 82,
        "end": 88,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 84,
          "end": 88
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 121,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 112,
        "decorators": [],
        "name": "after",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 120,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 116,
          "end": 120
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 236,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 159,
        "end": 236,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 165,
            "end": 174,
            "expression": {
              "type": "CallExpression",
              "start": 165,
              "end": 173,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 165,
                "end": 171,
                "decorators": [],
                "name": "before",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 179,
            "end": 202,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 183,
                "end": 201,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 201,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 186,
                      "end": 201,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 188,
                          "end": 199,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 189,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 189,
                            "end": 198,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 191,
                              "end": 198
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 221,
            "expression": {
              "type": "AssignmentExpression",
              "start": 207,
              "end": 220,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 207,
                "end": 210,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 213,
                "end": 220,
                "argument": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 226,
            "end": 234,
            "expression": {
              "type": "CallExpression",
              "start": 226,
              "end": 233,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 226,
                "end": 231,
                "decorators": [],
                "name": "after",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 141,
        "decorators": [],
        "name": "func",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 143,
        "end": 158,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 145,
          "end": 158,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 152,
            "end": 158,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 153,
                "end": 157
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 145,
            "end": 152,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
