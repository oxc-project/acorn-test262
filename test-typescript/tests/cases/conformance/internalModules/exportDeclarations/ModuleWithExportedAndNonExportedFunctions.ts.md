__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 538,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 267,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 74,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 23,
              "end": 74,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 34,
                "name": "fn",
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
                  "start": 35,
                  "end": 44,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 74,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 56,
                    "end": 68,
                    "argument": {
                      "type": "Literal",
                      "start": 63,
                      "end": 67,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 80,
            "end": 143,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 87,
              "end": 143,
              "id": {
                "type": "Identifier",
                "start": 96,
                "end": 99,
                "name": "fng",
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
                  "start": 106,
                  "end": 110,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
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
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 143,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 125,
                    "end": 137,
                    "argument": {
                      "type": "Literal",
                      "start": 132,
                      "end": 136,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 99,
                "end": 105,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 100,
                    "end": 101,
                    "name": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 103,
                    "end": 104,
                    "name": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
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
                "start": 111,
                "end": 114,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 113,
                  "end": 114,
                  "typeName": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 149,
            "end": 202,
            "id": {
              "type": "Identifier",
              "start": 158,
              "end": 161,
              "name": "fn2",
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
                "start": 162,
                "end": 171,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 163,
                  "end": 171,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 165,
                    "end": 171
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 173,
              "end": 202,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 183,
                  "end": 196,
                  "argument": {
                    "type": "Literal",
                    "start": 190,
                    "end": 195,
                    "value": false,
                    "raw": "false"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 208,
            "end": 265,
            "id": {
              "type": "Identifier",
              "start": 217,
              "end": 221,
              "name": "fng2",
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
                "start": 228,
                "end": 232,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 232,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
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
            "body": {
              "type": "BlockStatement",
              "start": 237,
              "end": 265,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 247,
                  "end": 259,
                  "argument": {
                    "type": "Literal",
                    "start": 254,
                    "end": 258,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 221,
              "end": 227,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 222,
                  "end": 223,
                  "name": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 225,
                  "end": 226,
                  "name": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
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
              "start": 233,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 236,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 362,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 362,
            "name": "fn",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 362,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 340,
                "end": 362,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 341,
                    "end": 350,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 342,
                      "end": 350,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 344,
                        "end": 350
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 352,
                  "end": 362,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 355,
                    "end": 362
                  }
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
      "start": 364,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 370,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 373,
            "end": 377,
            "object": {
              "type": "Identifier",
              "start": 373,
              "end": 374,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 375,
              "end": 377,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 380,
      "end": 407,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 406,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 406,
            "name": "fng",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 406,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 389,
                "end": 406,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 389,
                  "end": 395,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 390,
                      "end": 391,
                      "name": {
                        "type": "Identifier",
                        "start": 390,
                        "end": 391,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 393,
                      "end": 394,
                      "name": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 394,
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
                    "start": 396,
                    "end": 400,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 397,
                      "end": 400,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 399,
                        "end": 400,
                        "typeName": {
                          "type": "Identifier",
                          "start": 399,
                          "end": 400,
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
                  "start": 402,
                  "end": 406,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 405,
                    "end": 406,
                    "typeName": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 406,
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
      "start": 408,
      "end": 424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 415,
            "name": "fng",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 418,
            "end": 423,
            "object": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "name": "fng",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 503,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 510,
            "name": "fn2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 513,
            "end": 518,
            "object": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 515,
              "end": 518,
              "name": "fn2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 520,
      "end": 538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 528,
            "name": "fng2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 531,
            "end": 537,
            "object": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 533,
              "end": 537,
              "name": "fng2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
