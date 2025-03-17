__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2472,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Mapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 20,
        "end": 31,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 21,
            "end": 25,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
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
          "start": 27,
          "end": 31,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 30,
            "end": 31,
            "typeName": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "name": "wrap",
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
          "start": 62,
          "end": 78,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 72,
                "name": "Mapper",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 72,
                "end": 78,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 74,
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
            "start": 59,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
        "start": 79,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 81,
          "end": 93,
          "typeName": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "name": "Mapper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 87,
            "end": 93,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 88,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
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
    {
      "type": "TSDeclareFunction",
      "start": 96,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "name": "arrayize",
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
          "start": 128,
          "end": 144,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "name": "Mapper",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 138,
                "end": 144,
                "params": [
                  {
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
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 142,
                    "end": 143,
                    "typeName": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
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
            "start": 125,
            "end": 126,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
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
        "start": 145,
        "end": 161,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 147,
          "end": 161,
          "typeName": {
            "type": "Identifier",
            "start": 147,
            "end": 153,
            "name": "Mapper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 153,
            "end": 161,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 154,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSArrayType",
                "start": 157,
                "end": 160,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 157,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 164,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 188,
        "name": "combine",
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
          "start": 198,
          "end": 212,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 212,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 201,
              "end": 212,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 202,
                  "end": 206,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 206,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "name": "A",
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
                "start": 208,
                "end": 212,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 211,
                  "end": 212,
                  "typeName": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 212,
                    "name": "B",
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
        {
          "type": "Identifier",
          "start": 214,
          "end": 228,
          "name": "g",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 228,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 217,
              "end": 228,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 219,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 221,
                      "end": 222,
                      "typeName": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
                        "name": "B",
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
                "start": 224,
                "end": 228,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 227,
                  "end": 228,
                  "typeName": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
                    "name": "C",
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
        "start": 188,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 190,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "name": "A",
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
            "start": 192,
            "end": 193,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "name": "B",
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
            "start": 195,
            "end": 196,
            "name": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "name": "C",
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
        "start": 229,
        "end": 242,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 231,
          "end": 242,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 232,
              "end": 236,
              "name": "x",
              "typeAnnotation": {
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
                    "name": "A",
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
            "start": 238,
            "end": 242,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 241,
              "end": 242,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 245,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 265,
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
          "start": 266,
          "end": 291,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 267,
            "end": 291,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 269,
              "end": 291,
              "typeName": {
                "type": "Identifier",
                "start": 269,
                "end": 275,
                "name": "Mapper",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 275,
                "end": 291,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 276,
                    "end": 282
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 284,
                    "end": 290
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 292,
        "end": 298,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 331,
            "name": "f1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 331,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 315,
                  "name": "Mapper",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 315,
                  "end": 331,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 316,
                      "end": 322
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 324,
                      "end": 330
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 334,
            "end": 347,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 339,
              "end": 347,
              "object": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 341,
                "end": 347,
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
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 379,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 379,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 357,
                "end": 379,
                "typeName": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 363,
                  "name": "Mapper",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 363,
                  "end": 379,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 364,
                      "end": 370
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 382,
            "end": 401,
            "callee": {
              "type": "Identifier",
              "start": 382,
              "end": 386,
              "name": "wrap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 387,
                "end": 400,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 387,
                    "end": 388,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 392,
                  "end": 400,
                  "object": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 393,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 400,
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 435,
            "name": "f3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 435,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 411,
                "end": 435,
                "typeName": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 417,
                  "name": "Mapper",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 417,
                  "end": 435,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 418,
                      "end": 424
                    },
                    {
                      "type": "TSArrayType",
                      "start": 426,
                      "end": 434,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 426,
                        "end": 432
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 467,
            "callee": {
              "type": "Identifier",
              "start": 438,
              "end": 446,
              "name": "arrayize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 447,
                "end": 466,
                "callee": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 451,
                  "name": "wrap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 452,
                    "end": 465,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 452,
                        "end": 453,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 457,
                      "end": 465,
                      "object": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 465,
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
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 551,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 500,
            "name": "f4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 475,
              "end": 500,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 477,
                "end": 500,
                "typeName": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 483,
                  "name": "Mapper",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 483,
                  "end": 500,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 484,
                      "end": 490
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 492,
                      "end": 499
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 503,
            "end": 551,
            "callee": {
              "type": "Identifier",
              "start": 503,
              "end": 510,
              "name": "combine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 511,
                "end": 530,
                "callee": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 515,
                  "name": "wrap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 516,
                    "end": 529,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 516,
                        "end": 517,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 521,
                      "end": 529,
                      "object": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 522,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 529,
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
              {
                "type": "CallExpression",
                "start": 532,
                "end": 550,
                "callee": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 536,
                  "name": "wrap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 537,
                    "end": 549,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 537,
                        "end": 538,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 542,
                      "end": 549,
                      "left": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 543,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Literal",
                        "start": 547,
                        "end": 549,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 554,
      "end": 579,
      "expression": {
        "type": "CallExpression",
        "start": 554,
        "end": 578,
        "callee": {
          "type": "Identifier",
          "start": 554,
          "end": 557,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 558,
            "end": 577,
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 562,
              "name": "wrap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 563,
                "end": 576,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 563,
                    "end": 564,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 568,
                  "end": 576,
                  "object": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 569,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 576,
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
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 581,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 619,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 587,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 590,
            "end": 619,
            "callee": {
              "type": "MemberExpression",
              "start": 590,
              "end": 604,
              "object": {
                "type": "ArrayExpression",
                "start": 590,
                "end": 600,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 591,
                    "end": 594,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 596,
                    "end": 599,
                    "value": "b",
                    "raw": "\"b\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 601,
                "end": 604,
                "name": "map",
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
                "start": 605,
                "end": 618,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 605,
                    "end": 606,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 610,
                  "end": 618,
                  "object": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 611,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 618,
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 621,
      "end": 666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 665,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 627,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 630,
            "end": 665,
            "callee": {
              "type": "MemberExpression",
              "start": 630,
              "end": 644,
              "object": {
                "type": "ArrayExpression",
                "start": 630,
                "end": 640,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 631,
                    "end": 634,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 636,
                    "end": 639,
                    "value": "b",
                    "raw": "\"b\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 641,
                "end": 644,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 645,
                "end": 664,
                "callee": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 649,
                  "name": "wrap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 650,
                    "end": 663,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 650,
                        "end": 651,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 655,
                      "end": 663,
                      "object": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 656,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 663,
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
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 667,
      "end": 722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 673,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 676,
            "end": 721,
            "callee": {
              "type": "MemberExpression",
              "start": 676,
              "end": 690,
              "object": {
                "type": "ArrayExpression",
                "start": 676,
                "end": 686,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 677,
                    "end": 680,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 682,
                    "end": 685,
                    "value": "b",
                    "raw": "\"b\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 687,
                "end": 690,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 691,
                "end": 720,
                "callee": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 695,
                  "name": "wrap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 696,
                    "end": 719,
                    "callee": {
                      "type": "Identifier",
                      "start": 696,
                      "end": 704,
                      "name": "arrayize",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 705,
                        "end": 718,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 705,
                            "end": 706,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "MemberExpression",
                          "start": 710,
                          "end": 718,
                          "object": {
                            "type": "Identifier",
                            "start": 710,
                            "end": 711,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 712,
                            "end": 718,
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
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 723,
      "end": 796,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 727,
          "end": 795,
          "id": {
            "type": "Identifier",
            "start": 727,
            "end": 729,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 732,
            "end": 795,
            "callee": {
              "type": "MemberExpression",
              "start": 732,
              "end": 746,
              "object": {
                "type": "ArrayExpression",
                "start": 732,
                "end": 742,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 733,
                    "end": 736,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 738,
                    "end": 741,
                    "value": "b",
                    "raw": "\"b\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 743,
                "end": 746,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 747,
                "end": 794,
                "callee": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 754,
                  "name": "combine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 755,
                    "end": 774,
                    "callee": {
                      "type": "Identifier",
                      "start": 755,
                      "end": 759,
                      "name": "wrap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 760,
                        "end": 773,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 760,
                            "end": 761,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "MemberExpression",
                          "start": 765,
                          "end": 773,
                          "object": {
                            "type": "Identifier",
                            "start": 765,
                            "end": 766,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 767,
                            "end": 773,
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
                  {
                    "type": "CallExpression",
                    "start": 776,
                    "end": 793,
                    "callee": {
                      "type": "Identifier",
                      "start": 776,
                      "end": 780,
                      "name": "wrap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 781,
                        "end": 792,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 781,
                            "end": 782,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 786,
                          "end": 792,
                          "left": {
                            "type": "Identifier",
                            "start": 786,
                            "end": 787,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": ">",
                          "right": {
                            "type": "Literal",
                            "start": 790,
                            "end": 792,
                            "value": 10,
                            "raw": "10"
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 797,
      "end": 861,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 801,
          "end": 860,
          "id": {
            "type": "Identifier",
            "start": 801,
            "end": 803,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 806,
            "end": 860,
            "callee": {
              "type": "MemberExpression",
              "start": 806,
              "end": 820,
              "object": {
                "type": "ArrayExpression",
                "start": 806,
                "end": 816,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 807,
                    "end": 810,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 812,
                    "end": 815,
                    "value": "b",
                    "raw": "\"b\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 817,
                "end": 820,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 821,
                "end": 859,
                "callee": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 828,
                  "name": "combine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 829,
                    "end": 837,
                    "name": "identity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "CallExpression",
                    "start": 839,
                    "end": 858,
                    "callee": {
                      "type": "Identifier",
                      "start": 839,
                      "end": 843,
                      "name": "wrap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 844,
                        "end": 857,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 844,
                            "end": 845,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "MemberExpression",
                          "start": 849,
                          "end": 857,
                          "object": {
                            "type": "Identifier",
                            "start": 849,
                            "end": 850,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 851,
                            "end": 857,
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
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 862,
      "end": 926,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 866,
          "end": 925,
          "id": {
            "type": "Identifier",
            "start": 866,
            "end": 868,
            "name": "a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 871,
            "end": 925,
            "callee": {
              "type": "MemberExpression",
              "start": 871,
              "end": 885,
              "object": {
                "type": "ArrayExpression",
                "start": 871,
                "end": 881,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 872,
                    "end": 875,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 877,
                    "end": 880,
                    "value": "b",
                    "raw": "\"b\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 882,
                "end": 885,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 886,
                "end": 924,
                "callee": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 893,
                  "name": "combine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 894,
                    "end": 913,
                    "callee": {
                      "type": "Identifier",
                      "start": 894,
                      "end": 898,
                      "name": "wrap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 899,
                        "end": 912,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 899,
                            "end": 900,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "MemberExpression",
                          "start": 904,
                          "end": 912,
                          "object": {
                            "type": "Identifier",
                            "start": 904,
                            "end": 905,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 906,
                            "end": 912,
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
                  {
                    "type": "Identifier",
                    "start": 915,
                    "end": 923,
                    "name": "identity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1008,
      "end": 1286,
      "id": {
        "type": "Identifier",
        "start": 1014,
        "end": 1019,
        "name": "SetOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1023,
        "end": 1286,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1027,
            "end": 1039,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1027,
              "end": 1033,
              "name": "_store",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1033,
              "end": 1038,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1035,
                "end": 1038,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1035,
                  "end": 1036,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1035,
                    "end": 1036,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1043,
            "end": 1083,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1043,
              "end": 1046,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1046,
              "end": 1083,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1051,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1048,
                    "end": 1051,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1050,
                      "end": 1051,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1051,
                        "name": "A",
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
                "start": 1053,
                "end": 1083,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1059,
                    "end": 1079,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1059,
                      "end": 1078,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1059,
                        "end": 1075,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1059,
                          "end": 1070,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1059,
                            "end": 1063
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1064,
                            "end": 1070,
                            "name": "_store",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1071,
                          "end": 1075,
                          "name": "push",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1076,
                          "end": 1077,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1087,
            "end": 1185,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1087,
              "end": 1096,
              "name": "transform",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1096,
              "end": 1185,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1138,
                  "name": "transformer",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1111,
                    "end": 1138,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1113,
                      "end": 1138,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1114,
                          "end": 1125,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1115,
                            "end": 1125,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1117,
                              "end": 1125,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1117,
                                "end": 1122,
                                "name": "SetOf",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1122,
                                "end": 1125,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1123,
                                    "end": 1124,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1123,
                                      "end": 1124,
                                      "name": "A",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1127,
                        "end": 1138,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1130,
                          "end": 1138,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1130,
                            "end": 1135,
                            "name": "SetOf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1135,
                            "end": 1138,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1136,
                                "end": 1137,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1136,
                                  "end": 1137,
                                  "name": "B",
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
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1150,
                "end": 1185,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1156,
                    "end": 1181,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1163,
                      "end": 1180,
                      "callee": {
                        "type": "Identifier",
                        "start": 1163,
                        "end": 1174,
                        "name": "transformer",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1175,
                          "end": 1179
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1096,
                "end": 1099,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1097,
                    "end": 1098,
                    "name": {
                      "type": "Identifier",
                      "start": 1097,
                      "end": 1098,
                      "name": "B",
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
                "start": 1139,
                "end": 1149,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1141,
                  "end": 1149,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1141,
                    "end": 1146,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1146,
                    "end": 1149,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1147,
                        "end": 1148,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1147,
                          "end": 1148,
                          "name": "B",
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
          },
          {
            "type": "MethodDefinition",
            "start": 1189,
            "end": 1284,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1189,
              "end": 1196,
              "name": "forEach",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1196,
              "end": 1284,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1197,
                  "end": 1230,
                  "name": "fn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1199,
                    "end": 1230,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1201,
                      "end": 1230,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1202,
                          "end": 1206,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1203,
                            "end": 1206,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1205,
                              "end": 1206,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1205,
                                "end": 1206,
                                "name": "A",
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
                          "start": 1208,
                          "end": 1221,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1213,
                            "end": 1221,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1215,
                              "end": 1221
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1223,
                        "end": 1230,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1226,
                          "end": 1230
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1232,
                "end": 1284,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1240,
                    "end": 1280,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1240,
                      "end": 1279,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1240,
                        "end": 1259,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1240,
                          "end": 1251,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1240,
                            "end": 1244
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1245,
                            "end": 1251,
                            "name": "_store",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1252,
                          "end": 1259,
                          "name": "forEach",
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
                          "start": 1260,
                          "end": 1278,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1261,
                              "end": 1262,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 1264,
                              "end": 1265,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 1270,
                            "end": 1278,
                            "callee": {
                              "type": "Identifier",
                              "start": 1270,
                              "end": 1272,
                              "name": "fn",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1273,
                                "end": 1274,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1276,
                                "end": 1277,
                                "name": "i",
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
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
        "start": 1019,
        "end": 1022,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1020,
            "end": 1021,
            "name": {
              "type": "Identifier",
              "start": 1020,
              "end": 1021,
              "name": "A",
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
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1288,
      "end": 1487,
      "id": {
        "type": "Identifier",
        "start": 1297,
        "end": 1304,
        "name": "compose",
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
          "start": 1323,
          "end": 1353,
          "name": "fnA",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1326,
            "end": 1353,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1328,
              "end": 1353,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1340,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1330,
                    "end": 1340,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1332,
                      "end": 1340,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1332,
                        "end": 1337,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1337,
                        "end": 1340,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1338,
                            "end": 1339,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1338,
                              "end": 1339,
                              "name": "A",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1342,
                "end": 1353,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1345,
                  "end": 1353,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1345,
                    "end": 1350,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1350,
                    "end": 1353,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1351,
                        "end": 1352,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1351,
                          "end": 1352,
                          "name": "B",
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1358,
          "end": 1388,
          "name": "fnB",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1361,
            "end": 1388,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1363,
              "end": 1388,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1364,
                  "end": 1375,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1365,
                    "end": 1375,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1367,
                      "end": 1375,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1367,
                        "end": 1372,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1372,
                        "end": 1375,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1373,
                            "end": 1374,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1373,
                              "end": 1374,
                              "name": "B",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1377,
                "end": 1388,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1380,
                  "end": 1388,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1380,
                    "end": 1385,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1385,
                    "end": 1388,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1386,
                        "end": 1387,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1386,
                          "end": 1387,
                          "name": "C",
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1393,
          "end": 1423,
          "name": "fnC",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1396,
            "end": 1423,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1398,
              "end": 1423,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1399,
                  "end": 1410,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1400,
                    "end": 1410,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1402,
                      "end": 1410,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1402,
                        "end": 1407,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1407,
                        "end": 1410,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1408,
                            "end": 1409,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1408,
                              "end": 1409,
                              "name": "C",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1412,
                "end": 1423,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1415,
                  "end": 1423,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1415,
                    "end": 1420,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1420,
                    "end": 1423,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1421,
                        "end": 1422,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1421,
                          "end": 1422,
                          "name": "D",
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
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1427,
          "end": 1457,
          "name": "fnD",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1430,
            "end": 1457,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1432,
              "end": 1457,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1433,
                  "end": 1444,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1434,
                    "end": 1444,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1436,
                      "end": 1444,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1436,
                        "end": 1441,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1441,
                        "end": 1444,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1442,
                            "end": 1443,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1442,
                              "end": 1443,
                              "name": "D",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1446,
                "end": 1457,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1449,
                  "end": 1457,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1449,
                    "end": 1454,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1454,
                    "end": 1457,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1455,
                        "end": 1456,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1455,
                          "end": 1456,
                          "name": "E",
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
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1304,
        "end": 1319,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1305,
            "end": 1306,
            "name": {
              "type": "Identifier",
              "start": 1305,
              "end": 1306,
              "name": "A",
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
            "start": 1308,
            "end": 1309,
            "name": {
              "type": "Identifier",
              "start": 1308,
              "end": 1309,
              "name": "B",
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
            "start": 1311,
            "end": 1312,
            "name": {
              "type": "Identifier",
              "start": 1311,
              "end": 1312,
              "name": "C",
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
            "start": 1314,
            "end": 1315,
            "name": {
              "type": "Identifier",
              "start": 1314,
              "end": 1315,
              "name": "D",
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
            "start": 1317,
            "end": 1318,
            "name": {
              "type": "Identifier",
              "start": 1317,
              "end": 1318,
              "name": "E",
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
        "start": 1460,
        "end": 1486,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1461,
          "end": 1486,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1462,
              "end": 1473,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1463,
                "end": 1473,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1465,
                  "end": 1473,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1465,
                    "end": 1470,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1470,
                    "end": 1473,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1471,
                        "end": 1472,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1471,
                          "end": 1472,
                          "name": "A",
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
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1475,
            "end": 1486,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1478,
              "end": 1486,
              "typeName": {
                "type": "Identifier",
                "start": 1478,
                "end": 1483,
                "name": "SetOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1483,
                "end": 1486,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1484,
                    "end": 1485,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1484,
                      "end": 1485,
                      "name": "E",
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1506,
      "end": 1625,
      "id": {
        "type": "Identifier",
        "start": 1515,
        "end": 1522,
        "name": "compose",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 1526,
          "end": 1549,
          "argument": {
            "type": "Identifier",
            "start": 1529,
            "end": 1532,
            "name": "fns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1532,
            "end": 1549,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1534,
              "end": 1549,
              "elementType": {
                "type": "TSFunctionType",
                "start": 1535,
                "end": 1546,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1536,
                    "end": 1540,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1537,
                      "end": 1540,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1539,
                        "end": 1540,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1539,
                          "end": 1540,
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
                  "start": 1542,
                  "end": 1546,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1545,
                    "end": 1546,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1545,
                      "end": 1546,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1564,
        "end": 1625,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1568,
            "end": 1623,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 1575,
              "end": 1622,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1576,
                  "end": 1580,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1577,
                    "end": 1580,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1579,
                      "end": 1580,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1579,
                        "end": 1580,
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
                "type": "CallExpression",
                "start": 1585,
                "end": 1622,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1585,
                  "end": 1595,
                  "object": {
                    "type": "Identifier",
                    "start": 1585,
                    "end": 1588,
                    "name": "fns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1589,
                    "end": 1595,
                    "name": "reduce",
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
                    "start": 1596,
                    "end": 1618,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1597,
                        "end": 1601,
                        "name": "prev",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1603,
                        "end": 1605,
                        "name": "fn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 1610,
                      "end": 1618,
                      "callee": {
                        "type": "Identifier",
                        "start": 1610,
                        "end": 1612,
                        "name": "fn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1613,
                          "end": 1617,
                          "name": "prev",
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
                  },
                  {
                    "type": "Identifier",
                    "start": 1620,
                    "end": 1621,
                    "name": "x",
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1522,
        "end": 1525,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1523,
            "end": 1524,
            "name": {
              "type": "Identifier",
              "start": 1523,
              "end": 1524,
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
        "start": 1550,
        "end": 1563,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1552,
          "end": 1563,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1553,
              "end": 1557,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1554,
                "end": 1557,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1556,
                  "end": 1557,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1556,
                    "end": 1557,
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
            "start": 1559,
            "end": 1563,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1562,
              "end": 1563,
              "typeName": {
                "type": "Identifier",
                "start": 1562,
                "end": 1563,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1627,
      "end": 1810,
      "id": {
        "type": "Identifier",
        "start": 1636,
        "end": 1639,
        "name": "map",
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
          "start": 1646,
          "end": 1661,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1648,
            "end": 1661,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1650,
              "end": 1661,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1655,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1652,
                    "end": 1655,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1654,
                      "end": 1655,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1654,
                        "end": 1655,
                        "name": "A",
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
                "start": 1657,
                "end": 1661,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1660,
                  "end": 1661,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1660,
                    "end": 1661,
                    "name": "B",
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
      "body": {
        "type": "BlockStatement",
        "start": 1690,
        "end": 1810,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1694,
            "end": 1808,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 1701,
              "end": 1808,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1702,
                  "end": 1713,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1703,
                    "end": 1713,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1705,
                      "end": 1713,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1705,
                        "end": 1710,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1710,
                        "end": 1713,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1711,
                            "end": 1712,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1711,
                              "end": 1712,
                              "name": "A",
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
              "body": {
                "type": "BlockStatement",
                "start": 1718,
                "end": 1808,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1724,
                    "end": 1756,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1730,
                        "end": 1755,
                        "id": {
                          "type": "Identifier",
                          "start": 1730,
                          "end": 1741,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1731,
                            "end": 1741,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1733,
                              "end": 1741,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1733,
                                "end": 1738,
                                "name": "SetOf",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1738,
                                "end": 1741,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1739,
                                    "end": 1740,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1739,
                                      "end": 1740,
                                      "name": "B",
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
                        "init": {
                          "type": "NewExpression",
                          "start": 1744,
                          "end": 1755,
                          "callee": {
                            "type": "Identifier",
                            "start": 1748,
                            "end": 1753,
                            "name": "SetOf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1761,
                    "end": 1790,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1761,
                      "end": 1789,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1761,
                        "end": 1770,
                        "object": {
                          "type": "Identifier",
                          "start": 1761,
                          "end": 1762,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1763,
                          "end": 1770,
                          "name": "forEach",
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
                          "start": 1771,
                          "end": 1788,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1771,
                              "end": 1772,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 1776,
                            "end": 1788,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1776,
                              "end": 1781,
                              "object": {
                                "type": "Identifier",
                                "start": 1776,
                                "end": 1777,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1778,
                                "end": 1781,
                                "name": "add",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 1782,
                                "end": 1787,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1782,
                                  "end": 1784,
                                  "name": "fn",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 1785,
                                    "end": 1786,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
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
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1795,
                    "end": 1804,
                    "argument": {
                      "type": "Identifier",
                      "start": 1802,
                      "end": 1803,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1639,
        "end": 1645,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1640,
            "end": 1641,
            "name": {
              "type": "Identifier",
              "start": 1640,
              "end": 1641,
              "name": "A",
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
            "start": 1643,
            "end": 1644,
            "name": {
              "type": "Identifier",
              "start": 1643,
              "end": 1644,
              "name": "B",
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
        "start": 1662,
        "end": 1689,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1664,
          "end": 1689,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1665,
              "end": 1676,
              "name": "s",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1666,
                "end": 1676,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1668,
                  "end": 1676,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1668,
                    "end": 1673,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1673,
                    "end": 1676,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1674,
                        "end": 1675,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1674,
                          "end": 1675,
                          "name": "A",
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
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1678,
            "end": 1689,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1681,
              "end": 1689,
              "typeName": {
                "type": "Identifier",
                "start": 1681,
                "end": 1686,
                "name": "SetOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1686,
                "end": 1689,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1687,
                    "end": 1688,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1687,
                      "end": 1688,
                      "name": "B",
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1812,
      "end": 2044,
      "id": {
        "type": "Identifier",
        "start": 1821,
        "end": 1827,
        "name": "filter",
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
          "start": 1831,
          "end": 1859,
          "name": "predicate",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1840,
            "end": 1859,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1842,
              "end": 1859,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1843,
                  "end": 1847,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1844,
                    "end": 1847,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1846,
                      "end": 1847,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1846,
                        "end": 1847,
                        "name": "A",
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
                "start": 1849,
                "end": 1859,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1852,
                  "end": 1859
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1888,
        "end": 2044,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1892,
            "end": 2042,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 1899,
              "end": 2042,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1900,
                  "end": 1911,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1901,
                    "end": 1911,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1903,
                      "end": 1911,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1908,
                        "name": "SetOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1908,
                        "end": 1911,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1909,
                            "end": 1910,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1909,
                              "end": 1910,
                              "name": "A",
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
              "body": {
                "type": "BlockStatement",
                "start": 1916,
                "end": 2042,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1922,
                    "end": 1952,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1928,
                        "end": 1951,
                        "id": {
                          "type": "Identifier",
                          "start": 1928,
                          "end": 1934,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 1937,
                          "end": 1951,
                          "callee": {
                            "type": "Identifier",
                            "start": 1941,
                            "end": 1946,
                            "name": "SetOf",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1946,
                            "end": 1949,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1947,
                                "end": 1948,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1947,
                                  "end": 1948,
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1957,
                    "end": 2020,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1957,
                      "end": 2019,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1957,
                        "end": 1966,
                        "object": {
                          "type": "Identifier",
                          "start": 1957,
                          "end": 1958,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1959,
                          "end": 1966,
                          "name": "forEach",
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
                          "start": 1967,
                          "end": 2018,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1967,
                              "end": 1968,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1972,
                            "end": 2018,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 1980,
                                "end": 2012,
                                "test": {
                                  "type": "CallExpression",
                                  "start": 1984,
                                  "end": 1996,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1984,
                                    "end": 1993,
                                    "name": "predicate",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1994,
                                      "end": 1995,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "start": 1998,
                                  "end": 2012,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1998,
                                    "end": 2011,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1998,
                                      "end": 2008,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1998,
                                        "end": 2004,
                                        "name": "result",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2005,
                                        "end": 2008,
                                        "name": "add",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 2009,
                                        "end": 2010,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2024,
                    "end": 2038,
                    "argument": {
                      "type": "Identifier",
                      "start": 2031,
                      "end": 2037,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1827,
        "end": 1830,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1828,
            "end": 1829,
            "name": {
              "type": "Identifier",
              "start": 1828,
              "end": 1829,
              "name": "A",
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
        "start": 1860,
        "end": 1887,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1862,
          "end": 1887,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1863,
              "end": 1874,
              "name": "s",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1864,
                "end": 1874,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1866,
                  "end": 1874,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1866,
                    "end": 1871,
                    "name": "SetOf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1871,
                    "end": 1874,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1872,
                        "end": 1873,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1872,
                          "end": 1873,
                          "name": "A",
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
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1876,
            "end": 1887,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1879,
              "end": 1887,
              "typeName": {
                "type": "Identifier",
                "start": 1879,
                "end": 1884,
                "name": "SetOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1884,
                "end": 1887,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1885,
                    "end": 1886,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1885,
                      "end": 1886,
                      "name": "A",
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2046,
      "end": 2082,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2052,
          "end": 2081,
          "id": {
            "type": "Identifier",
            "start": 2052,
            "end": 2059,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2062,
            "end": 2081,
            "callee": {
              "type": "Identifier",
              "start": 2066,
              "end": 2071,
              "name": "SetOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2071,
              "end": 2079,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2072,
                  "end": 2078
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2083,
      "end": 2098,
      "expression": {
        "type": "CallExpression",
        "start": 2083,
        "end": 2097,
        "callee": {
          "type": "MemberExpression",
          "start": 2083,
          "end": 2094,
          "object": {
            "type": "Identifier",
            "start": 2083,
            "end": 2090,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2091,
            "end": 2094,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2095,
            "end": 2096,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2099,
      "end": 2114,
      "expression": {
        "type": "CallExpression",
        "start": 2099,
        "end": 2113,
        "callee": {
          "type": "MemberExpression",
          "start": 2099,
          "end": 2110,
          "object": {
            "type": "Identifier",
            "start": 2099,
            "end": 2106,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2107,
            "end": 2110,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2111,
            "end": 2112,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2115,
      "end": 2130,
      "expression": {
        "type": "CallExpression",
        "start": 2115,
        "end": 2129,
        "callee": {
          "type": "MemberExpression",
          "start": 2115,
          "end": 2126,
          "object": {
            "type": "Identifier",
            "start": 2115,
            "end": 2122,
            "name": "testSet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2123,
            "end": 2126,
            "name": "add",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 2127,
            "end": 2128,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2132,
      "end": 2284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2138,
          "end": 2284,
          "id": {
            "type": "Identifier",
            "start": 2138,
            "end": 2140,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2143,
            "end": 2284,
            "callee": {
              "type": "MemberExpression",
              "start": 2143,
              "end": 2160,
              "object": {
                "type": "Identifier",
                "start": 2143,
                "end": 2150,
                "name": "testSet",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2151,
                "end": 2160,
                "name": "transform",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 2164,
                "end": 2282,
                "callee": {
                  "type": "Identifier",
                  "start": 2164,
                  "end": 2171,
                  "name": "compose",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 2177,
                    "end": 2201,
                    "callee": {
                      "type": "Identifier",
                      "start": 2177,
                      "end": 2183,
                      "name": "filter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2184,
                        "end": 2200,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2184,
                            "end": 2185,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2189,
                          "end": 2200,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 2189,
                            "end": 2194,
                            "left": {
                              "type": "Identifier",
                              "start": 2189,
                              "end": 2190,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "%",
                            "right": {
                              "type": "Literal",
                              "start": 2193,
                              "end": 2194,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 2199,
                            "end": 2200,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2207,
                    "end": 2222,
                    "callee": {
                      "type": "Identifier",
                      "start": 2207,
                      "end": 2210,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2211,
                        "end": 2221,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2211,
                            "end": 2212,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2216,
                          "end": 2221,
                          "left": {
                            "type": "Identifier",
                            "start": 2216,
                            "end": 2217,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 2220,
                            "end": 2221,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2228,
                    "end": 2247,
                    "callee": {
                      "type": "Identifier",
                      "start": 2228,
                      "end": 2231,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2232,
                        "end": 2246,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2232,
                            "end": 2233,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2237,
                          "end": 2246,
                          "left": {
                            "type": "Identifier",
                            "start": 2237,
                            "end": 2238,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 2241,
                            "end": 2246,
                            "value": "!!!",
                            "raw": "'!!!'"
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2253,
                    "end": 2278,
                    "callee": {
                      "type": "Identifier",
                      "start": 2253,
                      "end": 2256,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2257,
                        "end": 2277,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2257,
                            "end": 2258,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "CallExpression",
                          "start": 2262,
                          "end": 2277,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2262,
                            "end": 2275,
                            "object": {
                              "type": "Identifier",
                              "start": 2262,
                              "end": 2263,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2264,
                              "end": 2275,
                              "name": "toUpperCase",
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
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2286,
      "end": 2324,
      "id": {
        "type": "Identifier",
        "start": 2303,
        "end": 2311,
        "name": "identity",
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
          "start": 2315,
          "end": 2319,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2316,
            "end": 2319,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2318,
              "end": 2319,
              "typeName": {
                "type": "Identifier",
                "start": 2318,
                "end": 2319,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2311,
        "end": 2314,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2312,
            "end": 2313,
            "name": {
              "type": "Identifier",
              "start": 2312,
              "end": 2313,
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
        "start": 2320,
        "end": 2323,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2322,
          "end": 2323,
          "typeName": {
            "type": "Identifier",
            "start": 2322,
            "end": 2323,
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
      "start": 2326,
      "end": 2471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2332,
          "end": 2471,
          "id": {
            "type": "Identifier",
            "start": 2332,
            "end": 2334,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2337,
            "end": 2471,
            "callee": {
              "type": "MemberExpression",
              "start": 2337,
              "end": 2354,
              "object": {
                "type": "Identifier",
                "start": 2337,
                "end": 2344,
                "name": "testSet",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2345,
                "end": 2354,
                "name": "transform",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 2358,
                "end": 2469,
                "callee": {
                  "type": "Identifier",
                  "start": 2358,
                  "end": 2365,
                  "name": "compose",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 2371,
                    "end": 2395,
                    "callee": {
                      "type": "Identifier",
                      "start": 2371,
                      "end": 2377,
                      "name": "filter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2378,
                        "end": 2394,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2378,
                            "end": 2379,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2383,
                          "end": 2394,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 2383,
                            "end": 2388,
                            "left": {
                              "type": "Identifier",
                              "start": 2383,
                              "end": 2384,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "%",
                            "right": {
                              "type": "Literal",
                              "start": 2387,
                              "end": 2388,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 2393,
                            "end": 2394,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2401,
                    "end": 2409,
                    "name": "identity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "CallExpression",
                    "start": 2415,
                    "end": 2434,
                    "callee": {
                      "type": "Identifier",
                      "start": 2415,
                      "end": 2418,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2419,
                        "end": 2433,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2419,
                            "end": 2420,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2424,
                          "end": 2433,
                          "left": {
                            "type": "Identifier",
                            "start": 2424,
                            "end": 2425,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 2428,
                            "end": 2433,
                            "value": "!!!",
                            "raw": "'!!!'"
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2440,
                    "end": 2465,
                    "callee": {
                      "type": "Identifier",
                      "start": 2440,
                      "end": 2443,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2444,
                        "end": 2464,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2444,
                            "end": 2445,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "CallExpression",
                          "start": 2449,
                          "end": 2464,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2449,
                            "end": 2462,
                            "object": {
                              "type": "Identifier",
                              "start": 2449,
                              "end": 2450,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2451,
                              "end": 2462,
                              "name": "toUpperCase",
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
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
