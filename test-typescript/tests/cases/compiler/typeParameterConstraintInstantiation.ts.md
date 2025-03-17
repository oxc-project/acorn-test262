__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 221,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 150,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 150,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 94,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 97,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 126,
                "end": 143,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 127,
                  "end": 143,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 129,
                    "end": 143,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 137,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 134,
                          "end": 137,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 136,
                            "end": 137,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 137,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 143,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 142,
                        "end": 143,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 147,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 97,
              "end": 125,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 98,
                  "end": 109,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 109,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 111,
                  "end": 124,
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 121,
                    "end": 124,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 122,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
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
        "start": 78,
        "end": 84,
        "decorators": [],
        "name": "Mapper",
        "optional": false,
        "typeAnnotation": null
      },
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
      "start": 152,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 173,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 173,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 165,
                  "end": 173,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 166,
                      "end": 172
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 165,
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 183,
            "end": 206,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 189,
                "end": 205,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 190,
                    "end": 199,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 191,
                      "end": 199,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 193,
                        "end": 199
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 183,
              "end": 188,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 188,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
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
