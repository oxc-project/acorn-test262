__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 645,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 199,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 55,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 55,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 37,
                "end": 55,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 46,
                    "end": 55
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 76,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 76,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 63,
                "end": 76,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 63,
                    "end": 69
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 72,
                    "end": 76
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 81,
            "end": 91,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 124,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 124,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 99,
                "end": 124,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 99,
                    "end": 105
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 108,
                    "end": 117
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 120,
                    "end": 124
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 129,
            "end": 158,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 158,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 133,
                "end": 158,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 133,
                    "end": 139
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 142,
                    "end": 151
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 154,
                    "end": 158
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 163,
            "end": 173,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 173,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 166,
                "end": 173
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 178,
            "end": 184,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 184,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 189,
            "end": 197,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 197,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 192,
                "end": 197
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
      "start": 201,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 214,
        "end": 241,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 220,
            "end": 239,
            "parameters": [
              {
                "type": "Identifier",
                "start": 221,
                "end": 230,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 222,
                  "end": 230,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 239,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 233,
                "end": 239
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
      "type": "TSTypeAliasDeclaration",
      "start": 243,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 250,
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 253,
        "end": 285,
        "key": {
          "type": "Identifier",
          "start": 260,
          "end": 261,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 265,
          "end": 274,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 271,
            "end": 274
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 277,
          "end": 283
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 307,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 307,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 307,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 307,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 307,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 337,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 337,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 325,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 332,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 332,
                  "end": 337,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 333,
                      "end": 336,
                      "typeName": {
                        "type": "Identifier",
                        "start": 333,
                        "end": 336,
                        "decorators": [],
                        "name": "Foo",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 357,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 357,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 357,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 355,
                "end": 357,
                "typeName": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 357,
                  "decorators": [],
                  "name": "AA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 377,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 377,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 377,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 375,
                "end": 377,
                "typeName": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 377,
                  "decorators": [],
                  "name": "BB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 389,
      "expression": {
        "type": "UnaryExpression",
        "start": 379,
        "end": 389,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 386,
          "end": 389,
          "object": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 400,
      "expression": {
        "type": "UnaryExpression",
        "start": 390,
        "end": 400,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 397,
          "end": 400,
          "object": {
            "type": "Identifier",
            "start": 397,
            "end": 398,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 399,
            "end": 400,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 411,
      "expression": {
        "type": "UnaryExpression",
        "start": 401,
        "end": 411,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 408,
          "end": 411,
          "object": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 410,
            "end": 411,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 422,
      "expression": {
        "type": "UnaryExpression",
        "start": 412,
        "end": 422,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 419,
          "end": 422,
          "object": {
            "type": "Identifier",
            "start": 419,
            "end": 420,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 421,
            "end": 422,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 433,
      "expression": {
        "type": "UnaryExpression",
        "start": 423,
        "end": 433,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 430,
          "end": 433,
          "object": {
            "type": "Identifier",
            "start": 430,
            "end": 431,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 432,
            "end": 433,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 434,
      "end": 444,
      "expression": {
        "type": "UnaryExpression",
        "start": 434,
        "end": 444,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 441,
          "end": 444,
          "object": {
            "type": "Identifier",
            "start": 441,
            "end": 442,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 443,
            "end": 444,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 445,
      "end": 455,
      "expression": {
        "type": "UnaryExpression",
        "start": 445,
        "end": 455,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 452,
          "end": 455,
          "object": {
            "type": "Identifier",
            "start": 452,
            "end": 453,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 454,
            "end": 455,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 466,
      "expression": {
        "type": "UnaryExpression",
        "start": 456,
        "end": 466,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 463,
          "end": 466,
          "object": {
            "type": "Identifier",
            "start": 463,
            "end": 464,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 465,
            "end": 466,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 477,
      "expression": {
        "type": "UnaryExpression",
        "start": 467,
        "end": 477,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 474,
          "end": 477,
          "object": {
            "type": "Identifier",
            "start": 474,
            "end": 475,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 476,
            "end": 477,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 488,
      "expression": {
        "type": "UnaryExpression",
        "start": 478,
        "end": 488,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 485,
          "end": 488,
          "object": {
            "type": "Identifier",
            "start": 485,
            "end": 486,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 487,
            "end": 488,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 490,
      "end": 500,
      "expression": {
        "type": "UnaryExpression",
        "start": 490,
        "end": 500,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 497,
          "end": 500,
          "object": {
            "type": "Identifier",
            "start": 497,
            "end": 498,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 501,
      "end": 511,
      "expression": {
        "type": "UnaryExpression",
        "start": 501,
        "end": 511,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 508,
          "end": 511,
          "object": {
            "type": "Identifier",
            "start": 508,
            "end": 509,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 510,
            "end": 511,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 522,
      "expression": {
        "type": "UnaryExpression",
        "start": 512,
        "end": 522,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 519,
          "end": 522,
          "object": {
            "type": "Identifier",
            "start": 519,
            "end": 520,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 521,
            "end": 522,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 523,
      "end": 533,
      "expression": {
        "type": "UnaryExpression",
        "start": 523,
        "end": 533,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 530,
          "end": 533,
          "object": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 532,
            "end": 533,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 544,
      "expression": {
        "type": "UnaryExpression",
        "start": 534,
        "end": 544,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 541,
          "end": 544,
          "object": {
            "type": "Identifier",
            "start": 541,
            "end": 542,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 545,
      "end": 555,
      "expression": {
        "type": "UnaryExpression",
        "start": 545,
        "end": 555,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 552,
          "end": 555,
          "object": {
            "type": "Identifier",
            "start": 552,
            "end": 553,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 554,
            "end": 555,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 556,
      "end": 566,
      "expression": {
        "type": "UnaryExpression",
        "start": 556,
        "end": 566,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 563,
          "end": 566,
          "object": {
            "type": "Identifier",
            "start": 563,
            "end": 564,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 565,
            "end": 566,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 567,
      "end": 577,
      "expression": {
        "type": "UnaryExpression",
        "start": 567,
        "end": 577,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 574,
          "end": 577,
          "object": {
            "type": "Identifier",
            "start": 574,
            "end": 575,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 576,
            "end": 577,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 578,
      "end": 588,
      "expression": {
        "type": "UnaryExpression",
        "start": 578,
        "end": 588,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 585,
          "end": 588,
          "object": {
            "type": "Identifier",
            "start": 585,
            "end": 586,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 587,
            "end": 588,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 589,
      "end": 599,
      "expression": {
        "type": "UnaryExpression",
        "start": 589,
        "end": 599,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 596,
          "end": 599,
          "object": {
            "type": "Identifier",
            "start": 596,
            "end": 597,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 598,
            "end": 599,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 601,
      "end": 611,
      "expression": {
        "type": "UnaryExpression",
        "start": 601,
        "end": 611,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 608,
          "end": 611,
          "object": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 610,
            "end": 611,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 622,
      "expression": {
        "type": "UnaryExpression",
        "start": 612,
        "end": 622,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 619,
          "end": 622,
          "object": {
            "type": "Identifier",
            "start": 619,
            "end": 620,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 621,
            "end": 622,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 624,
      "end": 634,
      "expression": {
        "type": "UnaryExpression",
        "start": 624,
        "end": 634,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 631,
          "end": 634,
          "object": {
            "type": "Identifier",
            "start": 631,
            "end": 632,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 633,
            "end": 634,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 635,
      "end": 645,
      "expression": {
        "type": "UnaryExpression",
        "start": 635,
        "end": 645,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 642,
          "end": 645,
          "object": {
            "type": "Identifier",
            "start": 642,
            "end": 643,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 644,
            "end": 645,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
