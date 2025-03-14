__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 395,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 66,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 66,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 64,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "func",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 30,
                "end": 55,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 40,
                    "end": 55,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 41,
                        "end": 49,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 46,
                          "end": 49,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 48,
                            "end": 49,
                            "typeName": {
                              "type": "Identifier",
                              "start": 48,
                              "end": 49,
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
                      "start": 51,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 54,
                        "end": 55,
                        "typeName": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 55,
                          "decorators": [],
                          "name": "U",
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
              "start": 56,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 63,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 60,
                  "end": 63,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 61,
                      "end": 62,
                      "typeName": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 60,
                  "decorators": [],
                  "name": "I1",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 26,
              "end": 29,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 27,
                  "end": 28,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "start": 69,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 95,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 95,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 87,
                  "end": 95,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 88,
                      "end": 94
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 87,
                  "decorators": [],
                  "name": "I1",
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
      "type": "VariableDeclaration",
      "start": 99,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 108,
            "end": 254,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 232,
                "end": 253,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 239,
                  "end": 253,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 239,
                    "end": 251,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 242,
                      "decorators": [],
                      "name": "num",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 251,
                      "decorators": [],
                      "name": "toString",
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
                    "start": 232,
                    "end": 235,
                    "decorators": [],
                    "name": "num",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 108,
              "end": 231,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 108,
                "end": 175,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 157,
                    "end": 174,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 164,
                      "end": 174,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 167,
                        "decorators": [],
                        "name": "str",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 174,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "decorators": [],
                        "name": "str",
                        "optional": false
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 156,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 108,
                    "end": 138,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 116,
                        "end": 137,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 123,
                          "end": 137,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 123,
                            "end": 135,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 123,
                              "end": 126,
                              "decorators": [],
                              "name": "num",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 127,
                              "end": 135,
                              "decorators": [],
                              "name": "toString",
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
                            "start": 116,
                            "end": 119,
                            "decorators": [],
                            "name": "num",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 108,
                      "end": 115,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 110,
                        "decorators": [],
                        "name": "v1",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 115,
                        "decorators": [],
                        "name": "func",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 156,
                    "decorators": [],
                    "name": "func",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 227,
                "end": 231,
                "decorators": [],
                "name": "func",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 296,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "s1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 296,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 274,
                "end": 295,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 281,
                  "end": 295,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 281,
                    "end": 293,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
                      "decorators": [],
                      "name": "num",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 293,
                      "decorators": [],
                      "name": "toString",
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
                    "start": 274,
                    "end": 277,
                    "decorators": [],
                    "name": "num",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 266,
              "end": 273,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 266,
                "end": 268,
                "decorators": [],
                "name": "v1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 269,
                "end": 273,
                "decorators": [],
                "name": "func",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "decorators": [],
            "name": "s2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 307,
            "end": 333,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 315,
                "end": 332,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 322,
                  "end": 332,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 325,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 332,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 315,
                    "end": 318,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 307,
              "end": 314,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 307,
                "end": 309,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 310,
                "end": 314,
                "decorators": [],
                "name": "func",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 394,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "decorators": [],
            "name": "s3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 364,
            "end": 394,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 372,
                "end": 393,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 379,
                  "end": 393,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 379,
                    "end": 391,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 382,
                      "decorators": [],
                      "name": "num",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 391,
                      "decorators": [],
                      "name": "toString",
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
                    "start": 372,
                    "end": 375,
                    "decorators": [],
                    "name": "num",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 364,
              "end": 371,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 364,
                "end": 366,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 367,
                "end": 371,
                "decorators": [],
                "name": "func",
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
  "sourceType": "script",
  "hashbang": null
}
```
