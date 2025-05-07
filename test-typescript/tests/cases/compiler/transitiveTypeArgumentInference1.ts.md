__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 39,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 39,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 32,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 32,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
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
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 67,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 67,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 50,
                  "end": 67,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 51,
                      "end": 58
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 50,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 70,
            "end": 74,
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
      "type": "ClassDeclaration",
      "start": 77,
      "end": 128,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 126,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 102,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 126,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 126,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 120,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 120,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 106,
                      "end": 120,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 108,
                        "end": 120,
                        "params": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 109,
                            "end": 116
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 118,
                            "end": 119,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 119,
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
                        "start": 106,
                        "end": 108,
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
      "start": 130,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 138,
            "end": 146,
            "arguments": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
