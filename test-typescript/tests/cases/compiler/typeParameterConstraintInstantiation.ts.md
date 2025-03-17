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
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 84,
        "name": "Mapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 150,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 94,
            "end": 148,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 97,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 97,
              "end": 125,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 98,
                  "end": 109,
                  "name": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 109,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 111,
                  "end": 124,
                  "name": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 121,
                    "end": 124,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 122,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 126,
                "end": 143,
                "name": "f",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 127,
                  "end": 143,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 129,
                    "end": 143,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 137,
                        "name": "item",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 134,
                          "end": 137,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 136,
                            "end": 137,
                            "typeName": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 137,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 143,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 142,
                        "end": 143,
                        "typeName": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 152,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 173,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 165,
                  "name": "Mapper",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 183,
            "end": 206,
            "callee": {
              "type": "MemberExpression",
              "start": 183,
              "end": 188,
              "object": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 188,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 189,
                "end": 205,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 190,
                    "end": 199,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 191,
                      "end": 199,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 193,
                        "end": 199
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
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
