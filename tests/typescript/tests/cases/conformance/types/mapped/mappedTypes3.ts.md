__ESTREE_TEST__:PASS:
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "P",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 32,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 45,
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 51,
        "end": 85,
        "key": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 73,
          "end": 82,
          "typeName": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 76,
            "end": 82,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 77,
                "end": 81,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 110,
        "decorators": [],
        "name": "boxify",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 112,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 123,
            "end": 131,
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 136,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 161,
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 163,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
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
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 178,
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null
              },
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 188,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 203,
        "decorators": [],
        "name": "Bacon",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 219,
              "decorators": [],
              "name": "isPerfect",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 228,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 221,
                "end": 228
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 234,
            "end": 249,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 240,
              "decorators": [],
              "name": "weight",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 253,
      "end": 334,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 276,
        "decorators": [],
        "name": "BoxifiedBacon",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 292,
              "decorators": [],
              "name": "isPerfect",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 306,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 297,
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 312,
            "end": 332,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 318,
              "decorators": [],
              "name": "weight",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 320,
                "end": 331,
                "typeName": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 323,
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 336,
      "end": 459,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 347,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 358,
        "end": 459,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 364,
            "end": 383,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 368,
                "end": 382,
                "id": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 370,
                  "decorators": [],
                  "name": "bb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 373,
                  "end": 382,
                  "callee": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 379,
                    "decorators": [],
                    "name": "boxify",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 380,
                      "end": 381,
                      "decorators": [],
                      "name": "b",
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
            "start": 388,
            "end": 423,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 392,
                "end": 422,
                "id": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 401,
                  "decorators": [],
                  "name": "isPerfect",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 404,
                  "end": 422,
                  "object": {
                    "type": "MemberExpression",
                    "start": 404,
                    "end": 416,
                    "object": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 406,
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 407,
                      "end": 416,
                      "decorators": [],
                      "name": "isPerfect",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 422,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 428,
            "end": 457,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 432,
                "end": 456,
                "id": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 438,
                  "decorators": [],
                  "name": "weight",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 441,
                  "end": 456,
                  "object": {
                    "type": "MemberExpression",
                    "start": 441,
                    "end": 450,
                    "object": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 443,
                      "decorators": [],
                      "name": "bb",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 450,
                      "decorators": [],
                      "name": "weight",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 456,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 461,
      "end": 600,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 472,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 477,
                "end": 485,
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null
              },
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 494,
        "end": 600,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 500,
            "end": 521,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 504,
                "end": 520,
                "id": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 505,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 508,
                  "end": 520,
                  "callee": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 516,
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 517,
                      "end": 519,
                      "decorators": [],
                      "name": "bb",
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
            "start": 548,
            "end": 571,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 552,
                "end": 570,
                "id": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 556,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 559,
                  "end": 570,
                  "object": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 560,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 570,
                    "decorators": [],
                    "name": "isPerfect",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 576,
            "end": 598,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 580,
                "end": 597,
                "id": {
                  "type": "Identifier",
                  "start": 580,
                  "end": 586,
                  "decorators": [],
                  "name": "weight",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 589,
                  "end": 597,
                  "object": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 590,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 597,
                    "decorators": [],
                    "name": "weight",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 602,
      "end": 762,
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 613,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 633,
        "end": 762,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 639,
            "end": 667,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 643,
                "end": 666,
                "id": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 644,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 647,
                  "end": 666,
                  "callee": {
                    "type": "Identifier",
                    "start": 647,
                    "end": 655,
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 663,
                      "end": 665,
                      "decorators": [],
                      "name": "bb",
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
            "start": 709,
            "end": 732,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 713,
                "end": 731,
                "id": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 717,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 720,
                  "end": 731,
                  "object": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 721,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 722,
                    "end": 731,
                    "decorators": [],
                    "name": "isPerfect",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 737,
            "end": 760,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 741,
                "end": 759,
                "id": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 747,
                  "decorators": [],
                  "name": "weight",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 750,
                  "end": 759,
                  "object": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 752,
                    "decorators": [],
                    "name": "bb",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 753,
                    "end": 759,
                    "decorators": [],
                    "name": "weight",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
