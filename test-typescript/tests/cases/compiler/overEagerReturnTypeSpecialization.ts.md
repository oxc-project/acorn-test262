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
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 59,
                "end": 84,
                "name": "callback",
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
                        "name": "value",
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
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 124,
            "name": "v1",
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
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 126,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 144,
            "name": "r1",
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
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 154,
                    "name": "func",
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
                    "start": 155,
                    "end": 176,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 155,
                        "end": 158,
                        "name": "num",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "num",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 174,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
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
              "property": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "name": "func",
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
                "start": 230,
                "end": 247,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 230,
                    "end": 233,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 237,
                  "end": 247,
                  "object": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 240,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 247,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 288,
            "name": "r2",
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
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 298,
                    "name": "func",
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
                    "start": 299,
                    "end": 320,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 299,
                        "end": 302,
                        "name": "num",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "num",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 318,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
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
              "property": {
                "type": "Identifier",
                "start": 369,
                "end": 373,
                "name": "func",
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
                "start": 374,
                "end": 391,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 374,
                    "end": 377,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 381,
                  "end": 391,
                  "object": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 384,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 391,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
