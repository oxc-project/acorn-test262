__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 343,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 92,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 22,
        "decorators": [],
        "name": "CPromise",
        "optional": false,
        "typeAnnotation": null
      },
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 90,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 36,
              "end": 90,
              "id": null,
              "generator": false,
              "async": false,
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
                      "typeParameters": null,
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
                            "decorators": [],
                            "name": "CPromise",
                            "optional": false,
                            "typeAnnotation": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 86,
                    "decorators": [],
                    "name": "CPromise",
                    "optional": false,
                    "typeAnnotation": null
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
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 93,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 111,
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
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
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
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
                    "typeParameters": null,
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
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
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
                    }
                  }
                }
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
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSDeclareFunction",
      "start": 182,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 203,
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
          "typeName": {
            "type": "Identifier",
            "start": 219,
            "end": 227,
            "decorators": [],
            "name": "CPromise",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 237,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 261,
        "decorators": [],
        "name": "convert",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
          "typeName": {
            "type": "Identifier",
            "start": 274,
            "end": 282,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 343,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "decorators": [],
            "name": "$$x",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "load",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 308,
                    "end": 319,
                    "value": "something",
                    "raw": "\"something\""
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 325,
                "decorators": [],
                "name": "then",
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
                "start": 326,
                "end": 341,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 331,
                  "end": 341,
                  "callee": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 338,
                    "decorators": [],
                    "name": "convert",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 339,
                      "end": 340,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
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
