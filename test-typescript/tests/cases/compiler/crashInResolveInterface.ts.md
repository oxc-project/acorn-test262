__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
        "start": 15,
        "end": 76,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 74,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "name": "each",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 66,
                "name": "action",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 34,
                    "end": 66,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 35,
                        "end": 42,
                        "name": "item",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 41,
                            "end": 42,
                            "typeName": {
                              "type": "Identifier",
                              "start": 41,
                              "end": 42,
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
                        "start": 44,
                        "end": 57,
                        "name": "index",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 49,
                          "end": 57,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 51,
                            "end": 57
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 59,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 62,
                        "end": 66
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
              "start": 67,
              "end": 73,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 69,
                "end": 73
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
      "start": 77,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 102,
            "name": "q1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 102,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 86,
                  "end": 102,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 87,
                      "end": 101,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 89,
                          "end": 99,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 90,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 90,
                            "end": 98,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 92,
                              "end": 98
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "start": 104,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 134,
            "callee": {
              "type": "MemberExpression",
              "start": 112,
              "end": 119,
              "object": {
                "type": "Identifier",
                "start": 112,
                "end": 114,
                "name": "q1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "name": "each",
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
                "start": 120,
                "end": 133,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 125,
                  "end": 133,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 125,
                    "end": 130,
                    "object": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 130,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 176,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "name": "c",
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
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 103,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 68,
            "end": 101,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 73,
              "name": "count",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 93,
                "name": "countTitle",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 87,
                    "end": 93
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 100,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 96,
                "end": 100
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
      "type": "TSInterfaceDeclaration",
      "start": 104,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 115,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 175,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 122,
            "end": 173,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 126,
                "end": 139,
                "name": "message",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 134,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 136,
                    "end": 139
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "RestElement",
                "start": 141,
                "end": 165,
                "argument": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 158,
                  "name": "optionalParams",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 165,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 160,
                    "end": 165,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 160,
                      "end": 163
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 172,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 168,
                "end": 172
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
