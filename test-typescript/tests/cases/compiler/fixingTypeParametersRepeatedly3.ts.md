__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 448,
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
      "end": 88,
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
        "end": 88,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 70,
            "end": 86,
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
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 85,
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
      "start": 90,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 110,
            "name": "derived",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 110,
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
      "start": 113,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 133,
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
          "start": 137,
          "end": 141,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 138,
            "end": 141,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 141,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
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
          "start": 143,
          "end": 160,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 160,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 149,
              "end": 160,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 153,
                      "end": 154,
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
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
                "start": 156,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 159,
                  "end": 160,
                  "typeName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
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
        "start": 133,
        "end": 136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 135,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
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
        "start": 161,
        "end": 164,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 163,
          "end": 164,
          "typeName": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
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
      "start": 166,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 176,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 179,
            "end": 208,
            "callee": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 183,
                "end": 190,
                "name": "derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 192,
                "end": 207,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 192,
                    "end": 193,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 197,
                  "end": 207,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 197,
                    "end": 205,
                    "object": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 205,
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
      "start": 298,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 318,
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
          "start": 322,
          "end": 326,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 323,
            "end": 326,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 325,
              "end": 326,
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
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
          "start": 328,
          "end": 345,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 332,
            "end": 345,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 334,
              "end": 345,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 335,
                  "end": 339,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 336,
                    "end": 339,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 338,
                      "end": 339,
                      "typeName": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 339,
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
                "start": 341,
                "end": 345,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 344,
                  "end": 345,
                  "typeName": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
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
        "start": 318,
        "end": 321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 320,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
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
        "start": 346,
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
    },
    {
      "type": "TSDeclareFunction",
      "start": 351,
      "end": 403,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 371,
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
          "start": 375,
          "end": 379,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 379,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 378,
              "end": 379,
              "typeName": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
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
          "start": 381,
          "end": 398,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 385,
            "end": 398,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 387,
              "end": 398,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 388,
                  "end": 392,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 391,
                      "end": 392,
                      "typeName": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 392,
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
                "start": 394,
                "end": 398,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 397,
                  "end": 398,
                  "typeName": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 398,
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
        "start": 371,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 373,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
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
        "start": 399,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 447,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 415,
            "name": "result2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 447,
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 421,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 422,
                "end": 429,
                "name": "derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 431,
                "end": 446,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 431,
                    "end": 432,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 436,
                  "end": 446,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 436,
                    "end": 444,
                    "object": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 437,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 444,
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
