__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 417,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 41,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
        "start": 45,
        "end": 95,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 51,
            "end": 93,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 55,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 55,
              "end": 58,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 56,
                  "end": 57,
                  "name": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
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
            "params": [
              {
                "type": "Identifier",
                "start": 59,
                "end": 84,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 69,
                    "end": 84,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 70,
                        "end": 78,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 75,
                          "end": 78,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 77,
                            "end": 78,
                            "typeName": {
                              "type": "Identifier",
                              "start": 77,
                              "end": 78,
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
                      "start": 80,
                      "end": 84,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 83,
                        "end": 84,
                        "typeName": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 89,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 89,
                  "end": 92,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 90,
                      "end": 91,
                      "typeName": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
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
      "start": 98,
      "end": 125,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 124,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 124,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 117,
                      "end": 123
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 144,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 144,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 144,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 136,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 136,
                  "end": 144,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 137,
                      "end": 143
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 147,
            "end": 248,
            "callee": {
              "type": "MemberExpression",
              "start": 147,
              "end": 229,
              "object": {
                "type": "CallExpression",
                "start": 147,
                "end": 177,
                "callee": {
                  "type": "MemberExpression",
                  "start": 147,
                  "end": 154,
                  "object": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 149,
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 154,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 155,
                    "end": 176,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 155,
                        "end": 158,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "start": 162,
                      "end": 176,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 162,
                        "end": 174,
                        "object": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 165,
                          "decorators": [],
                          "name": "num",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 174,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 230,
                "end": 247,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 230,
                    "end": 233,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 237,
                  "end": 247,
                  "object": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 240,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 247,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 393,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 288,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 288,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 288,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 280,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 280,
                  "end": 288,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 281,
                      "end": 287
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 291,
            "end": 392,
            "callee": {
              "type": "MemberExpression",
              "start": 291,
              "end": 373,
              "object": {
                "type": "CallExpression",
                "start": 291,
                "end": 321,
                "callee": {
                  "type": "MemberExpression",
                  "start": 291,
                  "end": 298,
                  "object": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 293,
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 298,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 299,
                    "end": 320,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 299,
                        "end": 302,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "start": 306,
                      "end": 320,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 306,
                        "end": 318,
                        "object": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 309,
                          "decorators": [],
                          "name": "num",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 318,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 369,
                "end": 373,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 374,
                "end": 391,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 374,
                    "end": 377,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 381,
                  "end": 391,
                  "object": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 384,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 391,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
