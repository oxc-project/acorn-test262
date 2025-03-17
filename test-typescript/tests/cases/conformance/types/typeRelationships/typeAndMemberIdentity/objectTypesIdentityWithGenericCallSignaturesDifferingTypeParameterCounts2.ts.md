__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 913,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 56,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 58,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "X",
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
            "start": 60,
            "end": 61,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "Y",
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
            "start": 63,
            "end": 64,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "Z",
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
            "start": 66,
            "end": 67,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 87,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 75,
            "end": 85,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 80,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 80,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 79,
                    "end": 80,
                    "typeName": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 80,
                      "name": "X",
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
              "start": 81,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 84,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "X",
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 89,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 132,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 108,
            "end": 130,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 108,
              "end": 120,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 109,
                  "end": 110,
                  "name": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "Y",
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
                  "start": 112,
                  "end": 113,
                  "name": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "name": "Z",
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
                  "start": 115,
                  "end": 116,
                  "name": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
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
                  "start": 118,
                  "end": 119,
                  "name": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
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
            "params": [
              {
                "type": "Identifier",
                "start": 121,
                "end": 125,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 122,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 124,
                    "end": 125,
                    "typeName": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "name": "Y",
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
              "start": 126,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "name": "Y",
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 169,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 169,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 141,
                "end": 169,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 143,
                    "end": 167,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 143,
                      "end": 158,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 144,
                          "end": 145,
                          "name": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "name": "Z",
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
                          "start": 147,
                          "end": 148,
                          "name": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 148,
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
                          "start": 150,
                          "end": 151,
                          "name": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 151,
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
                          "start": 153,
                          "end": 154,
                          "name": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 154,
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
                          "start": 156,
                          "end": 157,
                          "name": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 157,
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
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 163,
                        "name": "x",
                        "typeAnnotation": {
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
                              "name": "Z",
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
                      "start": 164,
                      "end": 167,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 166,
                        "end": 167,
                        "typeName": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 167,
                          "name": "Z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
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
      "start": 171,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 184,
        "name": "foo1",
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
          "start": 185,
          "end": 222,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 186,
            "end": 222,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 222,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 189,
                "end": 222,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 190,
                    "end": 196
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 198,
                    "end": 205
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 207,
                    "end": 213
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 225,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 238,
        "name": "foo1",
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
          "start": 239,
          "end": 276,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 276,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 276,
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 243,
                "end": 276,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 244,
                    "end": 250
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 252,
                    "end": 259
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 261,
                    "end": 267
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 269,
                    "end": 275
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 288,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 301,
        "name": "foo1",
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
          "start": 302,
          "end": 308,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 303,
            "end": 308,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 305,
              "end": 308
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 313,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 315,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 328,
        "name": "foo2",
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
          "start": 329,
          "end": 334,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 330,
            "end": 334,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 332,
              "end": 334,
              "typeName": {
                "type": "Identifier",
                "start": 332,
                "end": 334,
                "name": "I2",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 337,
      "end": 358,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 350,
        "name": "foo2",
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
          "start": 351,
          "end": 356,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 352,
            "end": 356,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 354,
              "end": 356,
              "typeName": {
                "type": "Identifier",
                "start": 354,
                "end": 356,
                "name": "I2",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 368,
      "end": 393,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 381,
        "name": "foo2",
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
          "start": 382,
          "end": 388,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 383,
            "end": 388,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 385,
              "end": 388
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 390,
        "end": 393,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 395,
      "end": 422,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "name": "foo3",
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
          "start": 409,
          "end": 420,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 410,
            "end": 420,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 412,
              "end": 420,
              "exprName": {
                "type": "Identifier",
                "start": 419,
                "end": 420,
                "name": "a",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 423,
      "end": 450,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 436,
        "name": "foo3",
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
          "start": 437,
          "end": 448,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 448,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 440,
              "end": 448,
              "exprName": {
                "type": "Identifier",
                "start": 447,
                "end": 448,
                "name": "a",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 460,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 473,
        "name": "foo3",
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
          "start": 474,
          "end": 480,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 475,
            "end": 480,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 477,
              "end": 480
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 482,
        "end": 485,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 487,
      "end": 539,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 501,
        "name": "foo13",
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
          "start": 502,
          "end": 537,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 537,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 505,
              "end": 537,
              "typeName": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 506,
                "end": 537,
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 507,
                    "end": 514
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 516,
                    "end": 522
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 524,
                    "end": 530
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 532,
                    "end": 536,
                    "typeName": {
                      "type": "Identifier",
                      "start": 532,
                      "end": 536,
                      "name": "Date",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 540,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 554,
        "name": "foo13",
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
          "start": 555,
          "end": 566,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 556,
            "end": 566,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 558,
              "end": 566,
              "exprName": {
                "type": "Identifier",
                "start": 565,
                "end": 566,
                "name": "a",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 575,
      "end": 601,
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 589,
        "name": "foo13",
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
          "start": 590,
          "end": 596,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 591,
            "end": 596,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 593,
              "end": 596
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 598,
        "end": 601,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 603,
      "end": 655,
      "id": {
        "type": "Identifier",
        "start": 612,
        "end": 617,
        "name": "foo14",
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
          "start": 618,
          "end": 653,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 619,
            "end": 653,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 621,
              "end": 653,
              "typeName": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 622,
                "end": 653,
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 623,
                    "end": 630
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 632,
                    "end": 638
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 640,
                    "end": 646
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 648,
                    "end": 652,
                    "typeName": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 652,
                      "name": "Date",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 656,
      "end": 678,
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 670,
        "name": "foo14",
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
          "start": 671,
          "end": 676,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 672,
            "end": 676,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 674,
              "end": 676,
              "typeName": {
                "type": "Identifier",
                "start": 674,
                "end": 676,
                "name": "I2",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 688,
      "end": 714,
      "id": {
        "type": "Identifier",
        "start": 697,
        "end": 702,
        "name": "foo14",
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
          "start": 703,
          "end": 709,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 704,
            "end": 709,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 706,
              "end": 709
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 711,
        "end": 714,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 716,
      "end": 745,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 731,
        "name": "foo14b",
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
          "start": 732,
          "end": 743,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 733,
            "end": 743,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 735,
              "end": 743,
              "exprName": {
                "type": "Identifier",
                "start": 742,
                "end": 743,
                "name": "a",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 746,
      "end": 769,
      "id": {
        "type": "Identifier",
        "start": 755,
        "end": 761,
        "name": "foo14b",
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
          "start": 762,
          "end": 767,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 763,
            "end": 767,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 765,
              "end": 767,
              "typeName": {
                "type": "Identifier",
                "start": 765,
                "end": 767,
                "name": "I2",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 776,
      "end": 803,
      "id": {
        "type": "Identifier",
        "start": 785,
        "end": 791,
        "name": "foo14b",
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
          "start": 792,
          "end": 798,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 793,
            "end": 798,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 795,
              "end": 798
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 800,
        "end": 803,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 805,
      "end": 857,
      "id": {
        "type": "Identifier",
        "start": 814,
        "end": 819,
        "name": "foo15",
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
          "start": 820,
          "end": 855,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 821,
            "end": 855,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 823,
              "end": 855,
              "typeName": {
                "type": "Identifier",
                "start": 823,
                "end": 824,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 824,
                "end": 855,
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 825,
                    "end": 832
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 834,
                    "end": 840
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 842,
                    "end": 848
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 850,
                    "end": 854,
                    "typeName": {
                      "type": "Identifier",
                      "start": 850,
                      "end": 854,
                      "name": "Date",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 858,
      "end": 880,
      "id": {
        "type": "Identifier",
        "start": 867,
        "end": 872,
        "name": "foo15",
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
          "start": 873,
          "end": 878,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 874,
            "end": 878,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 876,
              "end": 878,
              "typeName": {
                "type": "Identifier",
                "start": 876,
                "end": 878,
                "name": "I2",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 887,
      "end": 913,
      "id": {
        "type": "Identifier",
        "start": 896,
        "end": 901,
        "name": "foo15",
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
          "start": 902,
          "end": 908,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 903,
            "end": 908,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 905,
              "end": 908
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 910,
        "end": 913,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
