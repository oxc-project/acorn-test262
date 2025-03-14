mappedTypes3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 762,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 27,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 32,
      "end": 85,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 45,
        "decorators": [],
        "name": "Boxified",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 51,
        "end": 85,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 63,
          "end": 70,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 69,
            "end": 70,
            "typeName": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 73,
          "end": 82,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 76,
            "end": 82,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 77,
                "end": 81,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 77,
                  "end": 78,
                  "typeName": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "Box",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "start": 87,
      "end": 135,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 110,
        "decorators": [],
        "name": "boxify",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 120,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
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
        "start": 121,
        "end": 134,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 123,
          "end": 134,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 131,
            "end": 134,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 132,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 123,
            "end": 131,
            "decorators": [],
            "name": "Boxified",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 112,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
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
      "start": 136,
      "end": 186,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 161,
        "decorators": [],
        "name": "unboxify",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 165,
          "end": 181,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 181,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 181,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 178,
                "end": 181,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 179,
                    "end": 180,
                    "typeName": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 178,
                "decorators": [],
                "name": "Boxified",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 182,
        "end": 185,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 184,
          "end": 185,
          "typeName": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 163,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
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
      "type": "TSInterfaceDeclaration",
      "start": 188,
      "end": 251,
      "body": {
        "type": "TSInterfaceBody",
        "start": 204,
        "end": 251,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 210,
            "end": 229,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 219,
              "decorators": [],
              "name": "isPerfect",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 228,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 221,
                "end": 228
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 234,
            "end": 249,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 240,
              "decorators": [],
              "name": "weight",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 203,
        "decorators": [],
        "name": "Bacon",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 253,
      "end": 334,
      "body": {
        "type": "TSInterfaceBody",
        "start": 277,
        "end": 334,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 283,
            "end": 307,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 292,
              "decorators": [],
              "name": "isPerfect",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 306,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 297,
                  "end": 306,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 298,
                      "end": 305
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 297,
                  "decorators": [],
                  "name": "Box",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 312,
            "end": 332,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 318,
              "decorators": [],
              "name": "weight",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 320,
                "end": 331,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 323,
                  "end": 331,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 324,
                      "end": 330
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 323,
                  "decorators": [],
                  "name": "Box",
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
        "start": 263,
        "end": 276,
        "decorators": [],
        "name": "BoxifiedBacon",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 336,
      "end": 459,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 358,
        "end": 459,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 364,
            "end": 383,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 368,
                "end": 382,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 370,
                  "decorators": [],
                  "name": "bb",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 373,
                  "end": 382,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 380,
                      "end": 381,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 379,
                    "decorators": [],
                    "name": "boxify",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 388,
            "end": 423,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 392,
                "end": 422,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 401,
                  "decorators": [],
                  "name": "isPerfect",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 404,
                  "end": 422,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 404,
                    "end": 416,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 406,
                      "decorators": [],
                      "name": "bb",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 407,
                      "end": 416,
                      "decorators": [],
                      "name": "isPerfect",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 422,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 428,
            "end": 457,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 432,
                "end": 456,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 438,
                  "decorators": [],
                  "name": "weight",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 441,
                  "end": 456,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 441,
                    "end": 450,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 443,
                      "decorators": [],
                      "name": "bb",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 450,
                      "decorators": [],
                      "name": "weight",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 456,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 347,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 348,
          "end": 356,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 356,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 351,
              "end": 356,
              "typeName": {
                "type": "Identifier",
                "start": 351,
                "end": 356,
                "decorators": [],
                "name": "Bacon",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 461,
      "end": 600,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 494,
        "end": 600,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 500,
            "end": 521,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 504,
                "end": 520,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 505,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 508,
                  "end": 520,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 517,
                      "end": 519,
                      "decorators": [],
                      "name": "bb",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 516,
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 548,
            "end": 571,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 552,
                "end": 570,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 556,
                  "decorators": [],
                  "name": "bool",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 559,
                  "end": 570,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 560,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 570,
                    "decorators": [],
                    "name": "isPerfect",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 576,
            "end": 598,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 580,
                "end": 597,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 586,
                  "decorators": [],
                  "name": "weight",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 589,
                  "end": 597,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 590,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 597,
                    "decorators": [],
                    "name": "weight",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 472,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 473,
          "end": 492,
          "decorators": [],
          "name": "bb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 475,
            "end": 492,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 477,
              "end": 492,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 485,
                "end": 492,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 486,
                    "end": 491,
                    "typeName": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 491,
                      "decorators": [],
                      "name": "Bacon",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 477,
                "end": 485,
                "decorators": [],
                "name": "Boxified",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 602,
      "end": 762,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 633,
        "end": 762,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 639,
            "end": 667,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 643,
                "end": 666,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 644,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 647,
                  "end": 666,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 663,
                      "end": 665,
                      "decorators": [],
                      "name": "bb",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 647,
                    "end": 655,
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 655,
                    "end": 662,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 656,
                        "end": 661,
                        "typeName": {
                          "type": "Identifier",
                          "start": 656,
                          "end": 661,
                          "decorators": [],
                          "name": "Bacon",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 709,
            "end": 732,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 713,
                "end": 731,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 717,
                  "decorators": [],
                  "name": "bool",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 720,
                  "end": 731,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 721,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 722,
                    "end": 731,
                    "decorators": [],
                    "name": "isPerfect",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 737,
            "end": 760,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 741,
                "end": 759,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 747,
                  "decorators": [],
                  "name": "weight",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 750,
                  "end": 759,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 752,
                    "decorators": [],
                    "name": "bb",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 753,
                    "end": 759,
                    "decorators": [],
                    "name": "weight",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 613,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 614,
          "end": 631,
          "decorators": [],
          "name": "bb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 616,
            "end": 631,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 618,
              "end": 631,
              "typeName": {
                "type": "Identifier",
                "start": 618,
                "end": 631,
                "decorators": [],
                "name": "BoxifiedBacon",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
