__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "name": "maybeBind",
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
          "start": 42,
          "end": 48,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 47,
              "end": 48,
              "typeName": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
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
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 94,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 94,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 54,
              "end": 94,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 55,
                  "end": 81,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 56,
                      "end": 63,
                      "name": "this",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 60,
                        "end": 63,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 62,
                          "end": 63,
                          "typeName": {
                            "type": "Identifier",
                            "start": 62,
                            "end": 63,
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
                    },
                    {
                      "type": "RestElement",
                      "start": 65,
                      "end": 75,
                      "argument": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 72,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 74,
                          "end": 75,
                          "typeName": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 75,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 80,
                      "end": 81,
                      "typeName": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "name": "R",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 85,
                  "end": 94
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 158,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 156,
            "argument": {
              "type": "ChainExpression",
              "start": 142,
              "end": 155,
              "expression": {
                "type": "CallExpression",
                "start": 142,
                "end": 155,
                "callee": {
                  "type": "MemberExpression",
                  "start": 142,
                  "end": 150,
                  "object": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 144,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 150,
                    "name": "bind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 151,
                    "end": 154,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 41,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
            "start": 22,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 32,
              "end": 37,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 40,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "R",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 95,
        "end": 128,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 97,
          "end": 128,
          "types": [
            {
              "type": "TSFunctionType",
              "start": 98,
              "end": 115,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 99,
                  "end": 109,
                  "argument": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 106,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 106,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 108,
                      "end": 109,
                      "typeName": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 111,
                "end": 115,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 115,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 119,
              "end": 128
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
