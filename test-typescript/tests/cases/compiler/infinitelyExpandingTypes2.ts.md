__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 37,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 29,
                  "end": 37,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 36,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 33,
                        "end": 36,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 34,
                            "end": 35,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 34,
                              "end": 35,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 33,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "type": "TSInterfaceDeclaration",
      "start": 43,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 75,
        "end": 93,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 81,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 68,
          "end": 74,
          "expression": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 71,
            "end": 74,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 56,
        "end": 59,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 58,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
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
      "type": "FunctionDeclaration",
      "start": 95,
      "end": 145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 145,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 128,
            "end": 143,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 128,
              "end": 142,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 128,
                "end": 139,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 135,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 139,
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
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 106,
          "end": 120,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 109,
              "end": 120,
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 112,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 165,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 165,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 157,
                  "end": 165,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 168,
            "end": 172,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 180,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 175,
        "end": 179,
        "arguments": [
          {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 175,
          "end": 176,
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
  "sourceType": "script",
  "hashbang": null
}
```
