__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 504,
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
      "end": 327,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 327,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 325,
                "end": 327,
                "typeName": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 327,
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
      "start": 328,
      "end": 347,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 347,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 347,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 345,
                "end": 347,
                "typeName": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 347,
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
      "start": 349,
      "end": 359,
      "expression": {
        "type": "UnaryExpression",
        "start": 349,
        "end": 359,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 356,
          "end": 359,
          "object": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 358,
            "end": 359,
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
      "start": 360,
      "end": 370,
      "expression": {
        "type": "UnaryExpression",
        "start": 360,
        "end": 370,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 367,
          "end": 370,
          "object": {
            "type": "Identifier",
            "start": 367,
            "end": 368,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 369,
            "end": 370,
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
      "start": 371,
      "end": 381,
      "expression": {
        "type": "UnaryExpression",
        "start": 371,
        "end": 381,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 378,
          "end": 381,
          "object": {
            "type": "Identifier",
            "start": 378,
            "end": 379,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 380,
            "end": 381,
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
      "start": 382,
      "end": 392,
      "expression": {
        "type": "UnaryExpression",
        "start": 382,
        "end": 392,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 389,
          "end": 392,
          "object": {
            "type": "Identifier",
            "start": 389,
            "end": 390,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
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
      "start": 393,
      "end": 403,
      "expression": {
        "type": "UnaryExpression",
        "start": 393,
        "end": 403,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 400,
          "end": 403,
          "object": {
            "type": "Identifier",
            "start": 400,
            "end": 401,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
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
      "start": 404,
      "end": 414,
      "expression": {
        "type": "UnaryExpression",
        "start": 404,
        "end": 414,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 411,
          "end": 414,
          "object": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
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
      "start": 415,
      "end": 425,
      "expression": {
        "type": "UnaryExpression",
        "start": 415,
        "end": 425,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 422,
          "end": 425,
          "object": {
            "type": "Identifier",
            "start": 422,
            "end": 423,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
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
      "start": 426,
      "end": 436,
      "expression": {
        "type": "UnaryExpression",
        "start": 426,
        "end": 436,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 433,
          "end": 436,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 434,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
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
      "start": 437,
      "end": 447,
      "expression": {
        "type": "UnaryExpression",
        "start": 437,
        "end": 447,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 444,
          "end": 447,
          "object": {
            "type": "Identifier",
            "start": 444,
            "end": 445,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
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
      "start": 448,
      "end": 458,
      "expression": {
        "type": "UnaryExpression",
        "start": 448,
        "end": 458,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 455,
          "end": 458,
          "object": {
            "type": "Identifier",
            "start": 455,
            "end": 456,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 458,
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
      "start": 460,
      "end": 470,
      "expression": {
        "type": "UnaryExpression",
        "start": 460,
        "end": 470,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 467,
          "end": 470,
          "object": {
            "type": "Identifier",
            "start": 467,
            "end": 468,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 469,
            "end": 470,
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
      "start": 471,
      "end": 481,
      "expression": {
        "type": "UnaryExpression",
        "start": 471,
        "end": 481,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 478,
          "end": 481,
          "object": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 480,
            "end": 481,
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
      "start": 483,
      "end": 493,
      "expression": {
        "type": "UnaryExpression",
        "start": 483,
        "end": 493,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 490,
          "end": 493,
          "object": {
            "type": "Identifier",
            "start": 490,
            "end": 491,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
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
      "start": 494,
      "end": 504,
      "expression": {
        "type": "UnaryExpression",
        "start": 494,
        "end": 504,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 501,
          "end": 504,
          "object": {
            "type": "Identifier",
            "start": 501,
            "end": 502,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 503,
            "end": 504,
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
