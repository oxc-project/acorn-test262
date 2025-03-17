__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 22,
        "name": "CPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 36,
              "end": 90,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 75,
                  "name": "success",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 50,
                      "end": 75,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 51,
                          "end": 59,
                          "name": "value",
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
                        "start": 61,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 64,
                          "end": 75,
                          "typeName": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 72,
                            "name": "CPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 36,
                "end": 39,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 37,
                    "end": 38,
                    "name": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 89,
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 86,
                    "name": "CPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 93,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 111,
        "name": "IPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 111,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
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
        "start": 115,
        "end": 181,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 121,
            "end": 179,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 125,
              "end": 128,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 126,
                  "end": 127,
                  "name": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
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
                "start": 129,
                "end": 164,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 139,
                    "end": 164,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 140,
                        "end": 148,
                        "name": "value",
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
                      "start": 150,
                      "end": 164,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 153,
                        "end": 164,
                        "typeName": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 161,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                    }
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 175,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "type": "TSDeclareFunction",
      "start": 182,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 203,
        "name": "load",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 204,
          "end": 216,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 217,
        "end": 235,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 219,
          "end": 235,
          "typeName": {
            "type": "Identifier",
            "start": 219,
            "end": 227,
            "name": "CPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 237,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 261,
        "name": "convert",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 262,
          "end": 271,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 263,
            "end": 271,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 265,
              "end": 271
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 272,
        "end": 290,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 274,
          "end": 290,
          "typeName": {
            "type": "Identifier",
            "start": 274,
            "end": 282,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "name": "$$x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 342,
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 325,
              "object": {
                "type": "CallExpression",
                "start": 303,
                "end": 320,
                "callee": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 307,
                  "name": "load",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 308,
                    "end": 319,
                    "value": "something",
                    "raw": "\"something\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 325,
                "name": "then",
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
                "start": 326,
                "end": 341,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 331,
                  "end": 341,
                  "callee": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 338,
                    "name": "convert",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 339,
                      "end": 340,
                      "name": "s",
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
  "sourceType": "script",
  "hashbang": null
}
```
