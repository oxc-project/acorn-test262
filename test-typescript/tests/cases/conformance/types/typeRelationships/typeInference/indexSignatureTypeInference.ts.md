__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 525,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "name": "NumberMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "StringMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 87,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "numberMapToArray",
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
          "start": 141,
          "end": 161,
          "name": "object",
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
                "name": "NumberMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
    {
      "type": "TSDeclareFunction",
      "start": 169,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 202,
        "name": "stringMapToArray",
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
          "start": 206,
          "end": 226,
          "name": "object",
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
                "name": "StringMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 269,
            "name": "numberMap",
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
                  "name": "NumberMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Function",
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
      "start": 271,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 305,
            "name": "stringMap",
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
                  "name": "StringMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Function",
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
      "start": 308,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 326,
            "name": "v1",
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
                    "name": "Function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 328,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 337,
            "end": 364,
            "callee": {
              "type": "Identifier",
              "start": 337,
              "end": 353,
              "name": "numberMapToArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 354,
                "end": 363,
                "name": "numberMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 373,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 379,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 382,
            "end": 409,
            "callee": {
              "type": "Identifier",
              "start": 382,
              "end": 398,
              "name": "numberMapToArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 399,
                "end": 408,
                "name": "stringMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 418,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 424,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 427,
            "end": 454,
            "callee": {
              "type": "Identifier",
              "start": 427,
              "end": 443,
              "name": "stringMapToArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 444,
                "end": 453,
                "name": "numberMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 480,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 486,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 489,
            "end": 516,
            "callee": {
              "type": "Identifier",
              "start": 489,
              "end": 505,
              "name": "stringMapToArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 506,
                "end": 515,
                "name": "stringMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
