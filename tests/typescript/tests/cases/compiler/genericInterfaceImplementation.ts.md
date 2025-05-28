__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "IOption",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 69,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 27,
            "end": 36,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 67,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 49,
              "decorators": [],
              "name": "flatten",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 49,
              "end": 52,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 50,
                  "end": 51,
                  "name": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 54,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 63,
                  "decorators": [],
                  "name": "IOption",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 219,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 81,
        "decorators": [],
        "name": "None",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
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
            "optional": false,
            "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 112,
            "end": 148,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 148,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 217,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 161,
              "decorators": [],
              "name": "flatten",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 161,
              "end": 217,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 161,
                "end": 164,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 162,
                    "end": 163,
                    "name": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 167,
                "end": 179,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 179,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 176,
                    "decorators": [],
                    "name": "IOption",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
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
                      "callee": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 205,
                        "decorators": [],
                        "name": "None",
                        "optional": false,
                        "typeAnnotation": null
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      },
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
