__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "start": 19,
              "end": 24
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 24
          }
        ],
        "start": 8,
        "end": 25
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "typeArguments": null,
            "start": 46,
            "end": 47
          },
          "start": 40,
          "end": 47
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeArguments": null,
            "start": 50,
            "end": 51
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "typeArguments": null,
            "start": 52,
            "end": 53
          },
          "start": 50,
          "end": 54
        },
        "optional": false,
        "readonly": null,
        "start": 28,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              },
              "start": 82,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 87
          }
        ],
        "start": 71,
        "end": 88
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 101
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 106
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 107,
                              "end": 108
                            },
                            "typeArguments": null,
                            "start": 107,
                            "end": 108
                          }
                        ],
                        "start": 106,
                        "end": 109
                      },
                      "start": 103,
                      "end": 109
                    },
                    "start": 101,
                    "end": 109
                  },
                  "value": null,
                  "start": 94,
                  "end": 109
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 114,
                  "end": 118
                },
                "start": 111,
                "end": 118
              },
              "start": 93,
              "end": 118
            },
            "start": 91,
            "end": 118
          },
          "start": 89,
          "end": 118
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 140
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 142
                            },
                            "typeArguments": null,
                            "start": 141,
                            "end": 142
                          }
                        ],
                        "start": 140,
                        "end": 143
                      },
                      "start": 137,
                      "end": 143
                    },
                    "start": 135,
                    "end": 143
                  },
                  "start": 132,
                  "end": 143
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 146,
                    "end": 148
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 152,
                    "end": 155
                  },
                  "start": 146,
                  "end": 155
                },
                "definite": false,
                "start": 132,
                "end": 155
              }
            ],
            "declare": false,
            "start": 126,
            "end": 155
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 162
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 169
                  },
                  "start": 163,
                  "end": 169
                }
              ],
              "optional": false,
              "start": 160,
              "end": 170
            },
            "directive": null,
            "start": 160,
            "end": 170
          }
        ],
        "start": 120,
        "end": 255
      },
      "expression": false,
      "start": 58,
      "end": 255
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 255
}
```
