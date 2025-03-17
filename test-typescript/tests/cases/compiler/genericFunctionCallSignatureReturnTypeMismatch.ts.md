__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 21,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 47,
            "name": "f",
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 33,
                      "end": 36,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 34,
                          "end": 35,
                          "name": {
                            "type": "Identifier",
                            "start": 34,
                            "end": 35,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 37,
                        "end": 40,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 38,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 39,
                            "end": 40,
                            "typeName": {
                              "type": "Identifier",
                              "start": 39,
                              "end": 40,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 44,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 73,
            "name": "g",
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 59,
                      "end": 62,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 60,
                          "end": 61,
                          "name": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 61,
                            "name": "S",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 68,
                            "name": "S",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 81,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 80,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 91,
            "end": 113,
            "callee": {
              "type": "MemberExpression",
              "start": 91,
              "end": 111,
              "object": {
                "type": "CallExpression",
                "start": 91,
                "end": 99,
                "callee": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 93,
                    "end": 98,
                    "value": "str",
                    "raw": "\"str\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 100,
                "end": 111,
                "name": "toUpperCase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 131,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 130,
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 127,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 123,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 127,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
