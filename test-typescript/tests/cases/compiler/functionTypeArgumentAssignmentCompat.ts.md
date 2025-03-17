__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 25,
            "name": "f",
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 11,
                      "end": 14,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 12,
                          "end": 13,
                          "name": {
                            "type": "Identifier",
                            "start": 12,
                            "end": 13,
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
                        "start": 15,
                        "end": 18,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 16,
                          "end": 18,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 17,
                            "end": 18,
                            "typeName": {
                              "type": "Identifier",
                              "start": 17,
                              "end": 18,
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
                      "start": 19,
                      "end": 22,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 21,
                        "end": 22,
                        "typeName": {
                          "type": "Identifier",
                          "start": 21,
                          "end": 22,
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
      "start": 27,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 52,
            "name": "g",
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 38,
                      "end": 41,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 39,
                          "end": 40,
                          "name": {
                            "type": "Identifier",
                            "start": 39,
                            "end": 40,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 46,
                            "end": 47,
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
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 55,
            "end": 63,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ArrayExpression",
              "start": 61,
              "end": 63,
              "elements": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 72,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 71,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
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
      "start": 73,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 103,
            "callee": {
              "type": "MemberExpression",
              "start": 81,
              "end": 101,
              "object": {
                "type": "CallExpression",
                "start": 81,
                "end": 89,
                "callee": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 83,
                    "end": 88,
                    "value": "str",
                    "raw": "\"str\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 90,
                "end": 101,
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
      "start": 106,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 120,
        "callee": {
          "type": "MemberExpression",
          "start": 106,
          "end": 117,
          "object": {
            "type": "Identifier",
            "start": 106,
            "end": 113,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 117,
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
            "start": 118,
            "end": 119,
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
