__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 27,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 26,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18,
                    "end": 21,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 20,
                      "end": 21,
                      "typeName": {
                        "type": "Identifier",
                        "start": 20,
                        "end": 21,
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
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 26,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 38,
            "end": 53,
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 43,
              "end": 51,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 44,
                  "end": 50
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
      "start": 55,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 71,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 71,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 64,
                      "end": 70
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 74,
            "end": 92,
            "expression": {
              "type": "NewExpression",
              "start": 85,
              "end": 92,
              "callee": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 76,
                "end": 84,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 77,
                    "end": 83
                  }
                ]
              }
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
      "start": 103,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 120,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 112,
                  "end": 120,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 113,
                      "end": 119
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 123,
            "end": 140,
            "expression": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 124,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 125,
                "end": 136,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 126,
                    "end": 135,
                    "typeName": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 127,
                      "end": 135,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 128,
                          "end": 134
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
