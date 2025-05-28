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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Callable",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 58,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 28,
            "end": 34,
            "typeParameters": null,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 39,
            "end": 56,
            "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 87,
        "decorators": [],
        "name": "CallableExtention",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
            "optional": false,
            "typeAnnotation": null
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
        "type": "TSInterfaceBody",
        "start": 111,
        "end": 114,
        "body": []
      },
      "declare": false
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 202,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 122,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 94,
              "decorators": [],
              "name": "callableThing",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 113,
                  "decorators": [],
                  "name": "CallableExtention",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 200,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 143,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 143,
              "end": 200,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 200,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 156,
                    "end": 194,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 160,
                        "end": 193,
                        "id": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 161,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSTypeAssertion",
                          "start": 164,
                          "end": 193,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 165,
                            "end": 171
                          },
                          "expression": {
                            "type": "CallExpression",
                            "start": 173,
                            "end": 193,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 173,
                              "end": 191,
                              "object": {
                                "type": "ThisExpression",
                                "start": 173,
                                "end": 177
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 178,
                                "end": 191,
                                "decorators": [],
                                "name": "callableThing",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
