objectTypesIdentityWithGenericCallSignaturesDifferingTypeParameterCounts2.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 87,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 75,
            "end": 85,
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 80,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    }
                  }
                }
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
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 56,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 58,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 61,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "Y",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 64,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "Z",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 67,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 89,
      "end": 132,
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 132,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 108,
            "end": 130,
            "params": [
              {
                "type": "Identifier",
                "start": 121,
                "end": 125,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "Y",
                      "optional": false
                    }
                  }
                }
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
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 108,
              "end": 120,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 109,
                  "end": 110,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "Y",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 112,
                  "end": 113,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "decorators": [],
                    "name": "Z",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 115,
                  "end": 116,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 118,
                  "end": 119,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 169,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 163,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "Z",
                              "optional": false
                            }
                          }
                        }
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
                          "decorators": [],
                          "name": "Z",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 143,
                      "end": 158,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 144,
                          "end": 145,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "decorators": [],
                            "name": "Z",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 147,
                          "end": 148,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 148,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 150,
                          "end": 151,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 151,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 153,
                          "end": 154,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 154,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 156,
                          "end": 157,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 157,
                            "decorators": [],
                            "name": "D",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
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
      "start": 171,
      "end": 224,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 184,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 222,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 186,
            "end": 222,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 222,
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 225,
      "end": 278,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 238,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 239,
          "end": 276,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 276,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 276,
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 288,
      "end": 313,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 313,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 301,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 302,
          "end": 308,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 303,
            "end": 308,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 305,
              "end": 308
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 315,
      "end": 336,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 328,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 329,
          "end": 334,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 337,
      "end": 358,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 350,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 351,
          "end": 356,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 368,
      "end": 393,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 390,
        "end": 393,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 381,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 382,
          "end": 388,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 383,
            "end": 388,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 385,
              "end": 388
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 395,
      "end": 422,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 409,
          "end": 420,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 423,
      "end": 450,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 436,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 437,
          "end": 448,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 460,
      "end": 485,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 482,
        "end": 485,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 473,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 474,
          "end": 480,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 475,
            "end": 480,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 477,
              "end": 480
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 487,
      "end": 539,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 501,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 502,
          "end": 537,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 537,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 505,
              "end": 537,
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
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 540,
      "end": 568,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 554,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 555,
          "end": 566,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 575,
      "end": 601,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 598,
        "end": 601,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 589,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 590,
          "end": 596,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 591,
            "end": 596,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 593,
              "end": 596
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 603,
      "end": 655,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 612,
        "end": 617,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 618,
          "end": 653,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 619,
            "end": 653,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 621,
              "end": 653,
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
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 656,
      "end": 678,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 670,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 671,
          "end": 676,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 688,
      "end": 714,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 711,
        "end": 714,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 697,
        "end": 702,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 703,
          "end": 709,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 704,
            "end": 709,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 706,
              "end": 709
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 716,
      "end": 745,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 731,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 732,
          "end": 743,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 746,
      "end": 769,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 755,
        "end": 761,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 762,
          "end": 767,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 776,
      "end": 803,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 800,
        "end": 803,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 785,
        "end": 791,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 792,
          "end": 798,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 793,
            "end": 798,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 795,
              "end": 798
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 805,
      "end": 857,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 814,
        "end": 819,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 820,
          "end": 855,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 821,
            "end": 855,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 823,
              "end": 855,
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
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 823,
                "end": 824,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 858,
      "end": 880,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 867,
        "end": 872,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 873,
          "end": 878,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 887,
      "end": 913,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 910,
        "end": 913,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 896,
        "end": 901,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 902,
          "end": 908,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 903,
            "end": 908,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 905,
              "end": 908
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
