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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 76,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 74,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "each",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 66,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 34,
                    "end": 66,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 35,
                        "end": 42,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 44,
                        "end": 57,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 49,
                          "end": 57,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 51,
                            "end": 57
                          }
                        }
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
                }
              }
            ],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "VariableDeclaration",
      "start": 77,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 102,
            "decorators": [],
            "name": "q1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 102,
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
                          "key": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 90,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 90,
                            "end": 98,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 92,
                              "end": 98
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "Q",
                  "optional": false
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
      "start": 104,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 134,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 120,
                "end": 133,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 125,
                  "end": 133,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 125,
                    "end": 130,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 130,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 112,
              "end": 119,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 112,
                "end": 114,
                "decorators": [],
                "name": "q1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "decorators": [],
                "name": "each",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "decorators": [],
            "name": "c",
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
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 103,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 103,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 68,
            "end": 101,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 73,
              "decorators": [],
              "name": "count",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 93,
                "decorators": [],
                "name": "countTitle",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 87,
                    "end": 93
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 104,
      "end": 175,
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 175,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 122,
            "end": 173,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "log",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 126,
                "end": 139,
                "decorators": [],
                "name": "message",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 134,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 136,
                    "end": 139
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 141,
                "end": 165,
                "argument": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 158,
                  "decorators": [],
                  "name": "optionalParams",
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
                }
              }
            ],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 115,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
