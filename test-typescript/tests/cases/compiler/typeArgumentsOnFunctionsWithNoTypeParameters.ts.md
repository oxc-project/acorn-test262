__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
          "start": 19,
          "end": 33,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 33,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 22,
              "end": 33,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 27,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 27,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 26,
                      "end": 27,
                      "typeName": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 27,
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
                "start": 29,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 32,
                  "end": 33,
                  "typeName": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 46,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 49,
                  "end": 61,
                  "callee": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 59,
                      "end": 60,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
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
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 72,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 75,
                  "end": 79,
                  "callee": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
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
            "type": "VariableDeclaration",
            "start": 84,
            "end": 106,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 105,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 90,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 93,
                  "end": 105,
                  "callee": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 100,
                      "end": 104,
                      "value": null,
                      "raw": "null"
                    }
                  ],
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
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 119,
                  "end": 126,
                  "callee": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 121,
                      "end": 125,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "U",
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
