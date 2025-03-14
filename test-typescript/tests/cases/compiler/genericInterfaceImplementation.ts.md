__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 69,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 69,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 27,
            "end": 36,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "get",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 67,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 49,
              "decorators": [],
              "name": "flatten",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 66,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 66,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 64,
                      "end": 65,
                      "typeName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 63,
                  "decorators": [],
                  "name": "IOption",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 49,
              "end": 52,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 50,
                  "end": 51,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "IOption",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 219,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 112,
            "end": 148,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "decorators": [],
              "name": "get",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 148,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 131,
                    "end": 142,
                    "argument": {
                      "type": "Literal",
                      "start": 137,
                      "end": 141,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 120,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 120,
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 217,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 161,
              "decorators": [],
              "name": "flatten",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 161,
              "end": 217,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 217,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 190,
                    "end": 211,
                    "argument": {
                      "type": "NewExpression",
                      "start": 197,
                      "end": 210,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 205,
                        "decorators": [],
                        "name": "None",
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 205,
                        "end": 208,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 206,
                            "end": 207,
                            "typeName": {
                              "type": "Identifier",
                              "start": 206,
                              "end": 207,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 167,
                "end": 179,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 179,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 176,
                    "end": 179,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 177,
                        "end": 178,
                        "typeName": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 178,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 176,
                    "decorators": [],
                    "name": "IOption",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 161,
                "end": 164,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 162,
                    "end": 163,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 81,
        "decorators": [],
        "name": "None",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 96,
          "end": 106,
          "expression": {
            "type": "Identifier",
            "start": 96,
            "end": 103,
            "decorators": [],
            "name": "IOption",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 103,
            "end": 106,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 104,
                "end": 105,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "T",
              "optional": false
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
