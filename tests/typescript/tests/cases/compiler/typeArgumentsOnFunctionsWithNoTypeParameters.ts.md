__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 129,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 129,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 40,
            "end": 62,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 44,
                "end": 61,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 46,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 49,
                  "end": 61,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 59,
                      "end": 60,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 50,
                    "end": 58,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 70,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 72,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 75,
                  "end": 79,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
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
            "type": "VariableDeclaration",
            "start": 84,
            "end": 106,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 105,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 90,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 93,
                  "end": 105,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 100,
                      "end": 104,
                      "raw": "null",
                      "value": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 94,
                    "end": 99,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 95,
                        "end": 98
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 110,
            "end": 127,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 114,
                "end": 126,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 119,
                  "end": 126,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 121,
                      "end": 125,
                      "raw": "null",
                      "value": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 33,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 33,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 22,
              "end": 33,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 27,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 27,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 26,
                      "end": 27,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 27,
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
                "start": 29,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 32,
                  "end": 33,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
