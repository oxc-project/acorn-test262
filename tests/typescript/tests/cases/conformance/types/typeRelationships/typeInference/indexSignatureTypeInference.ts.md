__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 524,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "NumberMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
        "start": 23,
        "end": 50,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 29,
            "end": 48,
            "parameters": [
              {
                "type": "Identifier",
                "start": 30,
                "end": 43,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "decorators": [],
        "name": "StringMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
        "start": 75,
        "end": 102,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 81,
            "end": 100,
            "parameters": [
              {
                "type": "Identifier",
                "start": 82,
                "end": 95,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 87,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 104,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 137,
        "decorators": [],
        "name": "numberMapToArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 137,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 139,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
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
      "params": [
        {
          "type": "Identifier",
          "start": 141,
          "end": 161,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 161,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 149,
              "end": 161,
              "typeName": {
                "type": "Identifier",
                "start": 149,
                "end": 158,
                "decorators": [],
                "name": "NumberMap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 158,
                "end": 161,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 160,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "T",
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
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 162,
        "end": 167,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 164,
          "end": 167,
          "elementType": {
            "type": "TSTypeReference",
            "start": 164,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 169,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 202,
        "decorators": [],
        "name": "stringMapToArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 202,
        "end": 205,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 203,
            "end": 204,
            "name": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
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
      "params": [
        {
          "type": "Identifier",
          "start": 206,
          "end": 226,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 212,
            "end": 226,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 226,
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 223,
                "decorators": [],
                "name": "StringMap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 223,
                "end": 226,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 224,
                    "end": 225,
                    "typeName": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 225,
                      "decorators": [],
                      "name": "T",
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
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 227,
        "end": 232,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 229,
          "end": 232,
          "elementType": {
            "type": "TSTypeReference",
            "start": 229,
            "end": 230,
            "typeName": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 270,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 269,
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 269,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 259,
                  "decorators": [],
                  "name": "NumberMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 259,
                  "end": 269,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 260,
                      "end": 268,
                      "typeName": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 268,
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 306,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 305,
            "decorators": [],
            "name": "stringMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 286,
                "end": 305,
                "typeName": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 295,
                  "decorators": [],
                  "name": "StringMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 295,
                  "end": 305,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 296,
                      "end": 304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 304,
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 327,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 326,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 326,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 316,
                "end": 326,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 316,
                  "end": 324,
                  "typeName": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 324,
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 365,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 337,
            "end": 364,
            "callee": {
              "type": "Identifier",
              "start": 337,
              "end": 353,
              "decorators": [],
              "name": "numberMapToArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 354,
                "end": 363,
                "decorators": [],
                "name": "numberMap",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 373,
      "end": 410,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 379,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 382,
            "end": 409,
            "callee": {
              "type": "Identifier",
              "start": 382,
              "end": 398,
              "decorators": [],
              "name": "numberMapToArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 399,
                "end": 408,
                "decorators": [],
                "name": "stringMap",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 455,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 424,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 427,
            "end": 454,
            "callee": {
              "type": "Identifier",
              "start": 427,
              "end": 443,
              "decorators": [],
              "name": "stringMapToArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 444,
                "end": 453,
                "decorators": [],
                "name": "numberMap",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 480,
      "end": 517,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 486,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 489,
            "end": 516,
            "callee": {
              "type": "Identifier",
              "start": 489,
              "end": 505,
              "decorators": [],
              "name": "stringMapToArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 506,
                "end": 515,
                "decorators": [],
                "name": "stringMap",
                "optional": false,
                "typeAnnotation": null
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
