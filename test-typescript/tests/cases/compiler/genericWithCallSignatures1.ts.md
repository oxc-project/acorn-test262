__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 58,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 28,
            "end": 34,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 39,
            "end": 56,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 48,
                "decorators": [],
                "name": "value",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 55,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 51,
                "end": 55
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
        "end": 18,
        "decorators": [],
        "name": "Callable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 114,
      "body": {
        "type": "TSInterfaceBody",
        "start": 111,
        "end": 114,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 99,
          "end": 110,
          "expression": {
            "type": "Identifier",
            "start": 99,
            "end": 107,
            "decorators": [],
            "name": "Callable",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 107,
            "end": 110,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 87,
        "decorators": [],
        "name": "CallableExtention",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 54,
  "end": 202,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 202,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 202,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 122,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 94,
              "decorators": [],
              "name": "callableThing",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 121,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 113,
                  "end": 121,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 114,
                      "end": 120
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 113,
                  "decorators": [],
                  "name": "CallableExtention",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 200,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 143,
              "decorators": [],
              "name": "myMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 143,
              "end": 200,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 200,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 156,
                    "end": 194,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 160,
                        "end": 193,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 161,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 164,
                          "end": 193,
                          "expression": {
                            "type": "CallExpression",
                            "start": 173,
                            "end": 193,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 173,
                              "end": 191,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 173,
                                "end": 177
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 178,
                                "end": 191,
                                "decorators": [],
                                "name": "callableThing",
                                "optional": false
                              }
                            },
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 165,
                            "end": 171
                          }
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
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
