__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 25,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 8,
                "end": 25,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 11,
                    "end": 23,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15,
                        "end": 18,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 16,
                          "end": 18,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 17,
                            "end": 18,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 17,
                              "end": 18,
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
                      "start": 19,
                      "end": 22,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 21,
                        "end": 22,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 21,
                          "end": 22,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 11,
                      "end": 14,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12,
                          "end": 13,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 12,
                            "end": 13,
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
      "start": 27,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 52,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 35,
                "end": 52,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 38,
                    "end": 50,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 46,
                        "end": 49,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 46,
                          "end": 47,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 46,
                            "end": 47,
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
                      "start": 38,
                      "end": 41,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 39,
                          "end": 40,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 39,
                            "end": 40,
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
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 55,
            "end": 63,
            "async": false,
            "body": {
              "type": "ArrayExpression",
              "start": 61,
              "end": 63,
              "elements": []
            },
            "expression": true,
            "generator": false,
            "id": null,
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
      "start": 66,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 71,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 103,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 81,
              "end": 101,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 81,
                "end": 89,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 83,
                    "end": 88,
                    "raw": "\"str\"",
                    "value": "str"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
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
                "start": 90,
                "end": 101,
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
      "start": 106,
      "end": 121,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 120,
        "arguments": [
          {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 106,
          "end": 117,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 113,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 117,
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
