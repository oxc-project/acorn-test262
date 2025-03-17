__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 451,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 32,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 30,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "name": "baseProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 50,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 59,
          "end": 63,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 63,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 87,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 70,
            "end": 85,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "name": "toBase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 84,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 84,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 89,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 109,
            "name": "derived",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 109,
                  "name": "Derived",
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
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 112,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "name": "foo",
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
          "start": 136,
          "end": 140,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
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
          "start": 142,
          "end": 159,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 159,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 148,
              "end": 159,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 153,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 152,
                      "end": 153,
                      "typeName": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 153,
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
                "start": 155,
                "end": 159,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 158,
                  "end": 159,
                  "typeName": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "name": "T",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 132,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 134,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 160,
        "end": 163,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 162,
          "end": 163,
          "typeName": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 175,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 178,
            "end": 207,
            "callee": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 182,
                "end": 189,
                "name": "derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 191,
                "end": 206,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 196,
                  "end": 206,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 196,
                    "end": 204,
                    "object": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 204,
                      "name": "toBase",
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
      "type": "TSDeclareFunction",
      "start": 302,
      "end": 354,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 322,
        "name": "bar",
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
          "start": 326,
          "end": 330,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 330,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 329,
              "end": 330,
              "typeName": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
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
          "start": 332,
          "end": 349,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 349,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 338,
              "end": 349,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 339,
                  "end": 343,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 340,
                    "end": 343,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 342,
                      "end": 343,
                      "typeName": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 343,
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
                "start": 345,
                "end": 349,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 348,
                  "end": 349,
                  "typeName": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 349,
                    "name": "T",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 322,
        "end": 325,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 323,
            "end": 324,
            "name": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 350,
        "end": 353,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 352,
          "end": 353,
          "typeName": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 355,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 375,
        "name": "bar",
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
          "start": 379,
          "end": 383,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 383,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 382,
              "end": 383,
              "typeName": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
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
          "start": 385,
          "end": 402,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 389,
            "end": 402,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 391,
              "end": 402,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 392,
                  "end": 396,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 393,
                    "end": 396,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 395,
                      "end": 396,
                      "typeName": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
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
                "start": 398,
                "end": 402,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 401,
                  "end": 402,
                  "typeName": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 402,
                    "name": "T",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 375,
        "end": 378,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 376,
            "end": 377,
            "name": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 403,
        "end": 406,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 405,
          "end": 406,
          "typeName": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 408,
      "end": 451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 450,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 418,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 421,
            "end": 450,
            "callee": {
              "type": "Identifier",
              "start": 421,
              "end": 424,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 425,
                "end": 432,
                "name": "derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 434,
                "end": 449,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 434,
                    "end": 435,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 439,
                  "end": 449,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 439,
                    "end": 447,
                    "object": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 440,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 447,
                      "name": "toBase",
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
