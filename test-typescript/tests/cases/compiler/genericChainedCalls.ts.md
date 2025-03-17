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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
        "start": 16,
        "end": 66,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 64,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
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
              "start": 26,
              "end": 29,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 27,
                  "end": 28,
                  "name": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
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
                "start": 30,
                "end": 55,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 40,
                    "end": 55,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 41,
                        "end": 49,
                        "name": "value",
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
              "start": 56,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 63,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 60,
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
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
      "start": 69,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 95,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 87,
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 99,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 108,
            "end": 254,
            "callee": {
              "type": "MemberExpression",
              "start": 108,
              "end": 231,
              "object": {
                "type": "CallExpression",
                "start": 108,
                "end": 175,
                "callee": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 156,
                  "object": {
                    "type": "CallExpression",
                    "start": 108,
                    "end": 138,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 108,
                      "end": 115,
                      "object": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 110,
                        "name": "v1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 115,
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
                        "start": 116,
                        "end": 137,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 116,
                            "end": 119,
                            "name": "num",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "CallExpression",
                          "start": 123,
                          "end": 137,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 123,
                            "end": 135,
                            "object": {
                              "type": "Identifier",
                              "start": 123,
                              "end": 126,
                              "name": "num",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 127,
                              "end": 135,
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
                    "start": 152,
                    "end": 156,
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
                    "start": 157,
                    "end": 174,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 157,
                        "end": 160,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 164,
                      "end": 174,
                      "object": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 167,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 174,
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
              "property": {
                "type": "Identifier",
                "start": 227,
                "end": 231,
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
                "start": 232,
                "end": 253,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 232,
                    "end": 235,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 239,
                  "end": 253,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 239,
                    "end": 251,
                    "object": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 242,
                      "name": "num",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 251,
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "name": "s1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 296,
            "callee": {
              "type": "MemberExpression",
              "start": 266,
              "end": 273,
              "object": {
                "type": "Identifier",
                "start": 266,
                "end": 268,
                "name": "v1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 269,
                "end": 273,
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
                "start": 274,
                "end": 295,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 274,
                    "end": 277,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 281,
                  "end": 295,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 281,
                    "end": 293,
                    "object": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
                      "name": "num",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 293,
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "name": "s2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 307,
            "end": 333,
            "callee": {
              "type": "MemberExpression",
              "start": 307,
              "end": 314,
              "object": {
                "type": "Identifier",
                "start": 307,
                "end": 309,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 310,
                "end": 314,
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
                "start": 315,
                "end": 332,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 315,
                    "end": 318,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 322,
                  "end": 332,
                  "object": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 325,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 332,
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
      "start": 355,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "name": "s3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 364,
            "end": 394,
            "callee": {
              "type": "MemberExpression",
              "start": 364,
              "end": 371,
              "object": {
                "type": "Identifier",
                "start": 364,
                "end": 366,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 367,
                "end": 371,
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
                "start": 372,
                "end": 393,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 372,
                    "end": 375,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 379,
                  "end": 393,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 379,
                    "end": 391,
                    "object": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 382,
                      "name": "num",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 391,
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
