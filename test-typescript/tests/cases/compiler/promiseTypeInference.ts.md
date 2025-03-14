promiseTypeInference.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 92,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 90,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 36,
              "end": 90,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 75,
                  "decorators": [],
                  "name": "success",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 50,
                      "end": 75,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 51,
                          "end": 59,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 56,
                            "end": 59,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 58,
                              "end": 59,
                              "typeName": {
                                "type": "Identifier",
                                "start": 58,
                                "end": 59,
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
                        "start": 61,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 64,
                          "end": 75,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 72,
                            "end": 75,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 73,
                                "end": 74,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 74,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 72,
                            "decorators": [],
                            "name": "CPromise",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 89,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 86,
                    "end": 89,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 87,
                        "end": 88,
                        "typeName": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 88,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 86,
                    "decorators": [],
                    "name": "CPromise",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 36,
                "end": 39,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 37,
                    "end": 38,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
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
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 22,
        "decorators": [],
        "name": "CPromise",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
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
      "start": 93,
      "end": 181,
      "body": {
        "type": "TSInterfaceBody",
        "start": 115,
        "end": 181,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 121,
            "end": 179,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 129,
                "end": 164,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 139,
                    "end": 164,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 140,
                        "end": 148,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 145,
                          "end": 148,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 147,
                            "end": 148,
                            "typeName": {
                              "type": "Identifier",
                              "start": 147,
                              "end": 148,
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
                      "start": 150,
                      "end": 164,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 153,
                        "end": 164,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 161,
                          "end": 164,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 162,
                              "end": 163,
                              "typeName": {
                                "type": "Identifier",
                                "start": 162,
                                "end": 163,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 161,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 178,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 175,
                  "end": 178,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 176,
                      "end": 177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 175,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 125,
              "end": 128,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 126,
                  "end": 127,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "U",
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
        "start": 103,
        "end": 111,
        "decorators": [],
        "name": "IPromise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 111,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
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
      "type": "TSDeclareFunction",
      "start": 182,
      "end": 236,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 203,
        "decorators": [],
        "name": "load",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 204,
          "end": 216,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 217,
        "end": 235,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 219,
          "end": 235,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 227,
            "end": 235,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 228,
                "end": 234
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 219,
            "end": 227,
            "decorators": [],
            "name": "CPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 237,
      "end": 291,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 261,
        "decorators": [],
        "name": "convert",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 262,
          "end": 271,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 263,
            "end": 271,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 265,
              "end": 271
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 272,
        "end": 290,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 274,
          "end": 290,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 282,
            "end": 290,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 283,
                "end": 289
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 274,
            "end": 282,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "decorators": [],
            "name": "$$x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 342,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 326,
                "end": 341,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 331,
                  "end": 341,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 339,
                      "end": 340,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 338,
                    "decorators": [],
                    "name": "convert",
                    "optional": false
                  },
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 325,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 303,
                "end": 320,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 308,
                    "end": 319,
                    "raw": "\"something\"",
                    "value": "something"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 307,
                  "decorators": [],
                  "name": "load",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 325,
                "decorators": [],
                "name": "then",
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
  "sourceType": "script"
}
```
