fixingTypeParametersRepeatedly3.ts
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
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "decorators": [],
              "name": "baseProp",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 88,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 88,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 70,
            "end": 86,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "decorators": [],
              "name": "toBase",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
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
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 59,
          "end": 63,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 63,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 50,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 110,
            "decorators": [],
            "name": "derived",
            "optional": false,
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
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 113,
      "end": 165,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 133,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 143,
          "end": 160,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 160,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 149,
              "end": 160,
              "params": [
                {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
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
                    "decorators": [],
                    "name": "T",
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 133,
        "end": 136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 135,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
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
      "start": 166,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 176,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 179,
            "end": 208,
            "arguments": [
              {
                "type": "Identifier",
                "start": 183,
                "end": 190,
                "decorators": [],
                "name": "derived",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 192,
                "end": 207,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 197,
                  "end": 207,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 197,
                    "end": 205,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "decorators": [],
                      "name": "d",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 205,
                      "decorators": [],
                      "name": "toBase",
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
                    "start": 192,
                    "end": 193,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 298,
      "end": 350,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 318,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 322,
          "end": 326,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 328,
          "end": 345,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 332,
            "end": 345,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 334,
              "end": 345,
              "params": [
                {
                  "type": "Identifier",
                  "start": 335,
                  "end": 339,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
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
                    "decorators": [],
                    "name": "T",
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 320,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
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
      "start": 351,
      "end": 403,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 371,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 375,
          "end": 379,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 381,
          "end": 398,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 385,
            "end": 398,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 387,
              "end": 398,
              "params": [
                {
                  "type": "Identifier",
                  "start": 388,
                  "end": 392,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
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
                    "decorators": [],
                    "name": "T",
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 371,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 373,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
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
      "start": 404,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 447,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 415,
            "decorators": [],
            "name": "result2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 447,
            "arguments": [
              {
                "type": "Identifier",
                "start": 422,
                "end": 429,
                "decorators": [],
                "name": "derived",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 431,
                "end": 446,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 436,
                  "end": 446,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 436,
                    "end": 444,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 437,
                      "decorators": [],
                      "name": "d",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 444,
                      "decorators": [],
                      "name": "toBase",
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
                    "start": 431,
                    "end": 432,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 421,
              "decorators": [],
              "name": "bar",
              "optional": false
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
