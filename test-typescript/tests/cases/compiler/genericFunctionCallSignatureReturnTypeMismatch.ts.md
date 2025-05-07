__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 21,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 21,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 47,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 47,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 33,
                    "end": 45,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 37,
                        "end": 40,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 38,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 39,
                            "end": 40,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 39,
                              "end": 40,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 43,
                        "end": 44,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 44,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 33,
                      "end": 36,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 34,
                          "end": 35,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 34,
                            "end": 35,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
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
      "type": "VariableDeclaration",
      "start": 49,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 73,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 57,
                "end": 73,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 59,
                    "end": 71,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 70,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 67,
                        "end": 70,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 67,
                          "end": 68,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 68,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 59,
                      "end": 62,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 60,
                          "end": 61,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 61,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
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
      "start": 75,
      "end": 81,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 80,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 91,
            "end": 113,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 91,
              "end": 111,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 91,
                "end": 99,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 93,
                    "end": 98,
                    "raw": "\"str\"",
                    "value": "str",
                    "regex": null,
                    "bigint": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 100,
                "end": 111,
                "decorators": [],
                "name": "toUpperCase",
                "optional": false,
                "typeAnnotation": null
              }
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
      "type": "ExpressionStatement",
      "start": 116,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 130,
        "arguments": [
          {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 127,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 123,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 127,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
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
