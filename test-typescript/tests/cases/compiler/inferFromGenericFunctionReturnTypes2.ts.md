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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Mapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 20,
        "end": 31,
        "params": [
          {
            "type": "Identifier",
            "start": 21,
            "end": 25,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 94,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 78,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 78,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 72,
                "end": 78,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 74,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 77,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 72,
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 81,
          "end": 93,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 87,
            "end": 93,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 88,
                "end": 89,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "Mapper",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 96,
      "end": 162,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "decorators": [],
        "name": "arrayize",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 128,
          "end": 144,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 144,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 138,
                "end": 144,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 140,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 142,
                    "end": 143,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 145,
        "end": 161,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 147,
          "end": 161,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 153,
            "end": 161,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 154,
                "end": 155,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSArrayType",
                "start": 157,
                "end": 160,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 157,
                  "end": 158,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 147,
            "end": 153,
            "decorators": [],
            "name": "Mapper",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 126,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 164,
      "end": 243,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 188,
        "decorators": [],
        "name": "combine",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 198,
          "end": 212,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 212,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 201,
              "end": 212,
              "params": [
                {
                  "type": "Identifier",
                  "start": 202,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 206,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 212,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 214,
          "end": 228,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 228,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 217,
              "end": 228,
              "params": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 219,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 221,
                      "end": 222,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 229,
        "end": 242,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 231,
          "end": 242,
          "params": [
            {
              "type": "Identifier",
              "start": 232,
              "end": 236,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 233,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 235,
                  "end": 236,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 190,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 192,
            "end": 193,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 195,
            "end": 196,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 245,
      "end": 299,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 265,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 266,
          "end": 291,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 267,
            "end": 291,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 269,
              "end": 291,
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 269,
                "end": 275,
                "decorators": [],
                "name": "Mapper",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 292,
        "end": 298,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        }
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 331,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 331,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 315,
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 334,
            "end": 347,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 339,
              "end": 347,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 341,
                "end": 347,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 379,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 379,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 357,
                "end": 379,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 363,
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 382,
            "end": 401,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 387,
                "end": 400,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 392,
                  "end": 400,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 393,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 400,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 387,
                    "end": 388,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 382,
              "end": 386,
              "decorators": [],
              "name": "wrap",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 435,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 435,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 411,
                "end": 435,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 417,
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 467,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 447,
                "end": 466,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 452,
                    "end": 465,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 457,
                      "end": 465,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 465,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 452,
                        "end": 453,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 451,
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 438,
              "end": 446,
              "decorators": [],
              "name": "arrayize",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 500,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 475,
              "end": 500,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 477,
                "end": 500,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 483,
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 503,
            "end": 551,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 511,
                "end": 530,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 516,
                    "end": 529,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 521,
                      "end": 529,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 522,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 529,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 516,
                        "end": 517,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 515,
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "CallExpression",
                "start": 532,
                "end": 550,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 537,
                    "end": 549,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 542,
                      "end": 549,
                      "operator": ">=",
                      "left": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 543,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 547,
                        "end": 549,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 537,
                        "end": 538,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 536,
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 503,
              "end": 510,
              "decorators": [],
              "name": "combine",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 554,
      "end": 579,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 554,
        "end": 578,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 558,
            "end": 577,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 563,
                "end": 576,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 568,
                  "end": 576,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 569,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 576,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 563,
                    "end": 564,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 562,
              "decorators": [],
              "name": "wrap",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 554,
          "end": 557,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 587,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 590,
            "end": 619,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 605,
                "end": 618,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 610,
                  "end": 618,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 611,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 618,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 605,
                    "end": 606,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 590,
              "end": 604,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 590,
                "end": 600,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 591,
                    "end": 594,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 596,
                    "end": 599,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 601,
                "end": 604,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 627,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 630,
            "end": 665,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 645,
                "end": 664,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 650,
                    "end": 663,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 655,
                      "end": 663,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 656,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 663,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 650,
                        "end": 651,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 649,
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 630,
              "end": 644,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 630,
                "end": 640,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 631,
                    "end": 634,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 636,
                    "end": 639,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 641,
                "end": 644,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 673,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 676,
            "end": 721,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 691,
                "end": 720,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 696,
                    "end": 719,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 705,
                        "end": 718,
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "start": 710,
                          "end": 718,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 710,
                            "end": 711,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 712,
                            "end": 718,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 705,
                            "end": 706,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 696,
                      "end": 704,
                      "decorators": [],
                      "name": "arrayize",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 695,
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 676,
              "end": 690,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 676,
                "end": 686,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 677,
                    "end": 680,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 682,
                    "end": 685,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 687,
                "end": 690,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 727,
            "end": 729,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 732,
            "end": 795,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 747,
                "end": 794,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 755,
                    "end": 774,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 760,
                        "end": 773,
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "start": 765,
                          "end": 773,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 765,
                            "end": 766,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 767,
                            "end": 773,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 760,
                            "end": 761,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 755,
                      "end": 759,
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 776,
                    "end": 793,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 781,
                        "end": 792,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 786,
                          "end": 792,
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "start": 786,
                            "end": 787,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 790,
                            "end": 792,
                            "raw": "10",
                            "value": 10
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 781,
                            "end": 782,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 776,
                      "end": 780,
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 747,
                  "end": 754,
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 732,
              "end": 746,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 732,
                "end": 742,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 733,
                    "end": 736,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 738,
                    "end": 741,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 743,
                "end": 746,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 801,
            "end": 803,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 806,
            "end": 860,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 821,
                "end": 859,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 829,
                    "end": 837,
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 839,
                    "end": 858,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 844,
                        "end": 857,
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "start": 849,
                          "end": 857,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 849,
                            "end": 850,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 851,
                            "end": 857,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 844,
                            "end": 845,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 839,
                      "end": 843,
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 828,
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 806,
              "end": 820,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 806,
                "end": 816,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 807,
                    "end": 810,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 812,
                    "end": 815,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 817,
                "end": 820,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 866,
            "end": 868,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 871,
            "end": 925,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 886,
                "end": 924,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 894,
                    "end": 913,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 899,
                        "end": 912,
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "start": 904,
                          "end": 912,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 904,
                            "end": 905,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 906,
                            "end": 912,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 899,
                            "end": 900,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 894,
                      "end": 898,
                      "decorators": [],
                      "name": "wrap",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "Identifier",
                    "start": 915,
                    "end": 923,
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 893,
                  "decorators": [],
                  "name": "combine",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 871,
              "end": 885,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 871,
                "end": 881,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 872,
                    "end": 875,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 877,
                    "end": 880,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 882,
                "end": 885,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 1008,
      "end": 1286,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1023,
        "end": 1286,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1027,
            "end": 1039,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1027,
              "end": 1033,
              "decorators": [],
              "name": "_store",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1035,
                    "end": 1036,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1043,
            "end": 1083,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1043,
              "end": 1046,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1046,
              "end": 1083,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1053,
                "end": 1083,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1059,
                    "end": 1079,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1059,
                      "end": 1078,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1076,
                          "end": 1077,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1059,
                        "end": 1075,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1059,
                          "end": 1070,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1059,
                            "end": 1063
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1064,
                            "end": 1070,
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1071,
                          "end": 1075,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1051,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1048,
                    "end": 1051,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1050,
                      "end": 1051,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1051,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1087,
            "end": 1185,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1087,
              "end": 1096,
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1096,
              "end": 1185,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1175,
                          "end": 1179
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1163,
                        "end": 1174,
                        "decorators": [],
                        "name": "transformer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1138,
                  "decorators": [],
                  "name": "transformer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1111,
                    "end": 1138,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1113,
                      "end": 1138,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1114,
                          "end": 1125,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1115,
                            "end": 1125,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1117,
                              "end": 1125,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1122,
                                "end": 1125,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1123,
                                    "end": 1124,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1123,
                                      "end": 1124,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 1117,
                                "end": 1122,
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
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
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1135,
                            "end": 1138,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1136,
                                "end": 1137,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1136,
                                  "end": 1137,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1130,
                            "end": 1135,
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1139,
                "end": 1149,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1141,
                  "end": 1149,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1146,
                    "end": 1149,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1147,
                        "end": 1148,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1147,
                          "end": 1148,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1141,
                    "end": 1146,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1096,
                "end": 1099,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1097,
                    "end": 1098,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1097,
                      "end": 1098,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1189,
            "end": 1284,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1189,
              "end": 1196,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1196,
              "end": 1284,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1232,
                "end": 1284,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1240,
                    "end": 1280,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1240,
                      "end": 1279,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 1260,
                          "end": 1278,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 1270,
                            "end": 1278,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1273,
                                "end": 1274,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 1276,
                                "end": 1277,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1270,
                              "end": 1272,
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1261,
                              "end": 1262,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 1264,
                              "end": 1265,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1240,
                        "end": 1259,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1240,
                          "end": 1251,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1240,
                            "end": 1244
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1245,
                            "end": 1251,
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1252,
                          "end": 1259,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1197,
                  "end": 1230,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1199,
                    "end": 1230,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1201,
                      "end": 1230,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1202,
                          "end": 1206,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1203,
                            "end": 1206,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1205,
                              "end": 1206,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1205,
                                "end": 1206,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1208,
                          "end": 1221,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1213,
                            "end": 1221,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1215,
                              "end": 1221
                            }
                          }
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
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1014,
        "end": 1019,
        "decorators": [],
        "name": "SetOf",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1019,
        "end": 1022,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1020,
            "end": 1021,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1020,
              "end": 1021,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1288,
      "end": 1487,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1297,
        "end": 1304,
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1323,
          "end": 1353,
          "decorators": [],
          "name": "fnA",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1326,
            "end": 1353,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1328,
              "end": 1353,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1329,
                  "end": 1340,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1330,
                    "end": 1340,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1332,
                      "end": 1340,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1337,
                        "end": 1340,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1338,
                            "end": 1339,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1338,
                              "end": 1339,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1332,
                        "end": 1337,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1350,
                    "end": 1353,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1351,
                        "end": 1352,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1351,
                          "end": 1352,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1345,
                    "end": 1350,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1358,
          "end": 1388,
          "decorators": [],
          "name": "fnB",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1361,
            "end": 1388,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1363,
              "end": 1388,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1364,
                  "end": 1375,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1365,
                    "end": 1375,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1367,
                      "end": 1375,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1372,
                        "end": 1375,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1373,
                            "end": 1374,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1373,
                              "end": 1374,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1367,
                        "end": 1372,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1385,
                    "end": 1388,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1386,
                        "end": 1387,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1386,
                          "end": 1387,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1380,
                    "end": 1385,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1393,
          "end": 1423,
          "decorators": [],
          "name": "fnC",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1396,
            "end": 1423,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1398,
              "end": 1423,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1399,
                  "end": 1410,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1400,
                    "end": 1410,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1402,
                      "end": 1410,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1407,
                        "end": 1410,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1408,
                            "end": 1409,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1408,
                              "end": 1409,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1402,
                        "end": 1407,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1420,
                    "end": 1423,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1421,
                        "end": 1422,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1421,
                          "end": 1422,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1415,
                    "end": 1420,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1427,
          "end": 1457,
          "decorators": [],
          "name": "fnD",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1430,
            "end": 1457,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1432,
              "end": 1457,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1433,
                  "end": 1444,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1434,
                    "end": 1444,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1436,
                      "end": 1444,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1441,
                        "end": 1444,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1442,
                            "end": 1443,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1442,
                              "end": 1443,
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1436,
                        "end": 1441,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1454,
                    "end": 1457,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1455,
                        "end": 1456,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1455,
                          "end": 1456,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1449,
                    "end": 1454,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1460,
        "end": 1486,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1461,
          "end": 1486,
          "params": [
            {
              "type": "Identifier",
              "start": 1462,
              "end": 1473,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1463,
                "end": 1473,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1465,
                  "end": 1473,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1470,
                    "end": 1473,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1471,
                        "end": 1472,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1471,
                          "end": 1472,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1465,
                    "end": 1470,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1483,
                "end": 1486,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1484,
                    "end": 1485,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1484,
                      "end": 1485,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1478,
                "end": 1483,
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1304,
        "end": 1319,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1305,
            "end": 1306,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1305,
              "end": 1306,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1308,
            "end": 1309,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1308,
              "end": 1309,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1311,
            "end": 1312,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1311,
              "end": 1312,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1314,
            "end": 1315,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1314,
              "end": 1315,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1317,
            "end": 1318,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1317,
              "end": 1318,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1506,
      "end": 1625,
      "async": false,
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
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 1585,
                "end": 1622,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1596,
                    "end": 1618,
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 1610,
                      "end": 1618,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1613,
                          "end": 1617,
                          "decorators": [],
                          "name": "prev",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1610,
                        "end": 1612,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1597,
                        "end": 1601,
                        "decorators": [],
                        "name": "prev",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1603,
                        "end": 1605,
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1620,
                    "end": 1621,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1585,
                  "end": 1595,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1585,
                    "end": 1588,
                    "decorators": [],
                    "name": "fns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1589,
                    "end": 1595,
                    "decorators": [],
                    "name": "reduce",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1576,
                  "end": 1580,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1577,
                    "end": 1580,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1579,
                      "end": 1580,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1579,
                        "end": 1580,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1515,
        "end": 1522,
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1526,
          "end": 1549,
          "argument": {
            "type": "Identifier",
            "start": 1529,
            "end": 1532,
            "decorators": [],
            "name": "fns",
            "optional": false,
            "typeAnnotation": null
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1536,
                    "end": 1540,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1537,
                      "end": 1540,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1539,
                        "end": 1540,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1539,
                          "end": 1540,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1545,
                      "end": 1546,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1550,
        "end": 1563,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1552,
          "end": 1563,
          "params": [
            {
              "type": "Identifier",
              "start": 1553,
              "end": 1557,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1554,
                "end": 1557,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1556,
                  "end": 1557,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1556,
                    "end": 1557,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1562,
                "end": 1563,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1522,
        "end": 1525,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1523,
            "end": 1524,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1523,
              "end": 1524,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1627,
      "end": 1810,
      "async": false,
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
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1730,
                          "end": 1741,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1731,
                            "end": 1741,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1733,
                              "end": 1741,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1738,
                                "end": 1741,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1739,
                                    "end": 1740,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1739,
                                      "end": 1740,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 1733,
                                "end": 1738,
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 1744,
                          "end": 1755,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 1748,
                            "end": 1753,
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1761,
                    "end": 1790,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1761,
                      "end": 1789,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 1771,
                          "end": 1788,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 1776,
                            "end": 1788,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 1782,
                                "end": 1787,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 1785,
                                    "end": 1786,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1782,
                                  "end": 1784,
                                  "decorators": [],
                                  "name": "fn",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1776,
                              "end": 1781,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 1776,
                                "end": 1777,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1778,
                                "end": 1781,
                                "decorators": [],
                                "name": "add",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1771,
                              "end": 1772,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1761,
                        "end": 1770,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1761,
                          "end": 1762,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1763,
                          "end": 1770,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1795,
                    "end": 1804,
                    "argument": {
                      "type": "Identifier",
                      "start": 1802,
                      "end": 1803,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1702,
                  "end": 1713,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1703,
                    "end": 1713,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1705,
                      "end": 1713,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1710,
                        "end": 1713,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1711,
                            "end": 1712,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1711,
                              "end": 1712,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1705,
                        "end": 1710,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1636,
        "end": 1639,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1646,
          "end": 1661,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1648,
            "end": 1661,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1650,
              "end": 1661,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1655,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1652,
                    "end": 1655,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1654,
                      "end": 1655,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1654,
                        "end": 1655,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1660,
                    "end": 1661,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1662,
        "end": 1689,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1664,
          "end": 1689,
          "params": [
            {
              "type": "Identifier",
              "start": 1665,
              "end": 1676,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1666,
                "end": 1676,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1668,
                  "end": 1676,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1673,
                    "end": 1676,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1674,
                        "end": 1675,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1674,
                          "end": 1675,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1668,
                    "end": 1673,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1686,
                "end": 1689,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1687,
                    "end": 1688,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1687,
                      "end": 1688,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1681,
                "end": 1686,
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1639,
        "end": 1645,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1640,
            "end": 1641,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1640,
              "end": 1641,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1643,
            "end": 1644,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1643,
              "end": 1644,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1812,
      "end": 2044,
      "async": false,
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
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1928,
                          "end": 1934,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 1937,
                          "end": 1951,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 1941,
                            "end": 1946,
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1946,
                            "end": 1949,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1947,
                                "end": 1948,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1947,
                                  "end": 1948,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1957,
                    "end": 2020,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1957,
                      "end": 2019,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 1967,
                          "end": 2018,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1972,
                            "end": 2018,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 1980,
                                "end": 2012,
                                "alternate": null,
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "start": 1998,
                                  "end": 2012,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1998,
                                    "end": 2011,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 2009,
                                        "end": 2010,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1998,
                                      "end": 2008,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1998,
                                        "end": 2004,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2005,
                                        "end": 2008,
                                        "decorators": [],
                                        "name": "add",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                "test": {
                                  "type": "CallExpression",
                                  "start": 1984,
                                  "end": 1996,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1994,
                                      "end": 1995,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1984,
                                    "end": 1993,
                                    "decorators": [],
                                    "name": "predicate",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1967,
                              "end": 1968,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1957,
                        "end": 1966,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1957,
                          "end": 1958,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1959,
                          "end": 1966,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2024,
                    "end": 2038,
                    "argument": {
                      "type": "Identifier",
                      "start": 2031,
                      "end": 2037,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1900,
                  "end": 1911,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1901,
                    "end": 1911,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1903,
                      "end": 1911,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1908,
                        "end": 1911,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1909,
                            "end": 1910,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1909,
                              "end": 1910,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1908,
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1821,
        "end": 1827,
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1831,
          "end": 1859,
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1840,
            "end": 1859,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1842,
              "end": 1859,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1843,
                  "end": 1847,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1844,
                    "end": 1847,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1846,
                      "end": 1847,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1846,
                        "end": 1847,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1860,
        "end": 1887,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1862,
          "end": 1887,
          "params": [
            {
              "type": "Identifier",
              "start": 1863,
              "end": 1874,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1864,
                "end": 1874,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1866,
                  "end": 1874,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1871,
                    "end": 1874,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1872,
                        "end": 1873,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1872,
                          "end": 1873,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1866,
                    "end": 1871,
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1884,
                "end": 1887,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1885,
                    "end": 1886,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1885,
                      "end": 1886,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1879,
                "end": 1884,
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1827,
        "end": 1830,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1828,
            "end": 1829,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1828,
              "end": 1829,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2052,
            "end": 2059,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2062,
            "end": 2081,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 2066,
              "end": 2071,
              "decorators": [],
              "name": "SetOf",
              "optional": false,
              "typeAnnotation": null
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 2083,
      "end": 2098,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2083,
        "end": 2097,
        "arguments": [
          {
            "type": "Literal",
            "start": 2095,
            "end": 2096,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2083,
          "end": 2094,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2083,
            "end": 2090,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2091,
            "end": 2094,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2099,
      "end": 2114,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2099,
        "end": 2113,
        "arguments": [
          {
            "type": "Literal",
            "start": 2111,
            "end": 2112,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2099,
          "end": 2110,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2099,
            "end": 2106,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2107,
            "end": 2110,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2115,
      "end": 2130,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2115,
        "end": 2129,
        "arguments": [
          {
            "type": "Literal",
            "start": 2127,
            "end": 2128,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2115,
          "end": 2126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2115,
            "end": 2122,
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2123,
            "end": 2126,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2138,
            "end": 2140,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2143,
            "end": 2284,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 2164,
                "end": 2282,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 2177,
                    "end": 2201,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2184,
                        "end": 2200,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2189,
                          "end": 2200,
                          "operator": "===",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 2189,
                            "end": 2194,
                            "operator": "%",
                            "left": {
                              "type": "Identifier",
                              "start": 2189,
                              "end": 2190,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2193,
                              "end": 2194,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2199,
                            "end": 2200,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2184,
                            "end": 2185,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2177,
                      "end": 2183,
                      "decorators": [],
                      "name": "filter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2207,
                    "end": 2222,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2211,
                        "end": 2221,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2216,
                          "end": 2221,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 2216,
                            "end": 2217,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2220,
                            "end": 2221,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2211,
                            "end": 2212,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2207,
                      "end": 2210,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2228,
                    "end": 2247,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2232,
                        "end": 2246,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2237,
                          "end": 2246,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 2237,
                            "end": 2238,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2241,
                            "end": 2246,
                            "raw": "'!!!'",
                            "value": "!!!"
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2232,
                            "end": 2233,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2228,
                      "end": 2231,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2253,
                    "end": 2278,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2257,
                        "end": 2277,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 2262,
                          "end": 2277,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2262,
                            "end": 2275,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2262,
                              "end": 2263,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2264,
                              "end": 2275,
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2257,
                            "end": 2258,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2253,
                      "end": 2256,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2164,
                  "end": 2171,
                  "decorators": [],
                  "name": "compose",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2143,
              "end": 2160,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2143,
                "end": 2150,
                "decorators": [],
                "name": "testSet",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2151,
                "end": 2160,
                "decorators": [],
                "name": "transform",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 2286,
      "end": 2324,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2303,
        "end": 2311,
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2315,
          "end": 2319,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2316,
            "end": 2319,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2318,
              "end": 2319,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2318,
                "end": 2319,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2320,
        "end": 2323,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2322,
          "end": 2323,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2322,
            "end": 2323,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2311,
        "end": 2314,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2312,
            "end": 2313,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2312,
              "end": 2313,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2332,
            "end": 2334,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2337,
            "end": 2471,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 2358,
                "end": 2469,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 2371,
                    "end": 2395,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2378,
                        "end": 2394,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2383,
                          "end": 2394,
                          "operator": "===",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 2383,
                            "end": 2388,
                            "operator": "%",
                            "left": {
                              "type": "Identifier",
                              "start": 2383,
                              "end": 2384,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2387,
                              "end": 2388,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2393,
                            "end": 2394,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2378,
                            "end": 2379,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2371,
                      "end": 2377,
                      "decorators": [],
                      "name": "filter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2401,
                    "end": 2409,
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2415,
                    "end": 2434,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2419,
                        "end": 2433,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 2424,
                          "end": 2433,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 2424,
                            "end": 2425,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2428,
                            "end": 2433,
                            "raw": "'!!!'",
                            "value": "!!!"
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2419,
                            "end": 2420,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2415,
                      "end": 2418,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  {
                    "type": "CallExpression",
                    "start": 2440,
                    "end": 2465,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 2444,
                        "end": 2464,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 2449,
                          "end": 2464,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2449,
                            "end": 2462,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2449,
                              "end": 2450,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2451,
                              "end": 2462,
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2444,
                            "end": 2445,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2440,
                      "end": 2443,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 2358,
                  "end": 2365,
                  "decorators": [],
                  "name": "compose",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2337,
              "end": 2354,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2337,
                "end": 2344,
                "decorators": [],
                "name": "testSet",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2345,
                "end": 2354,
                "decorators": [],
                "name": "transform",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
