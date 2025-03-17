__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 76,
  "end": 512,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 76,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 107,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 105,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
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
      "start": 108,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 125,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 134,
          "end": 138,
          "expression": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 139,
        "end": 155,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 141,
            "end": 153,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 152,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 146,
                "end": 152
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
      "start": 157,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 168,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 169,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 175,
            "end": 186,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 185,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 185,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 190,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 210,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 212,
        "end": 239,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 218,
            "end": 231,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 222,
              "name": "Foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 231,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 224,
                "end": 231,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 231,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 241,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 253,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 260,
            "end": 269,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 260,
              "end": 261,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 264,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 268,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 273,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 285,
        "name": "S2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 294,
          "end": 296,
          "expression": {
            "type": "Identifier",
            "start": 294,
            "end": 296,
            "name": "T2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 297,
        "end": 322,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 303,
            "end": 314,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 303,
              "end": 304,
              "value": 2,
              "raw": "2"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 313,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 306,
                "end": 313,
                "typeName": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 313,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 324,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 336,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 337,
        "end": 356,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 354,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 343,
              "end": 346,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 353,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 349,
                "end": 353,
                "typeName": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 353,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 358,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 370,
        "name": "S3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 379,
          "end": 381,
          "expression": {
            "type": "Identifier",
            "start": 379,
            "end": 381,
            "name": "T3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 382,
        "end": 411,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 388,
            "end": 403,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 388,
              "end": 393,
              "value": "1.0",
              "raw": "'1.0'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 402,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 395,
                "end": 402,
                "typeName": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 402,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 436,
      "end": 458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 458,
          "id": {
            "type": "Identifier",
            "start": 440,
            "end": 458,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 441,
              "end": 458,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 443,
                "end": 458,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 445,
                    "end": 456,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 448,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 449,
                      "end": 455,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 451,
                        "end": 455,
                        "typeName": {
                          "type": "Identifier",
                          "start": 451,
                          "end": 455,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "type": "VariableDeclaration",
      "start": 459,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 484,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 484,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 484,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 466,
                "end": 484,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 468,
                    "end": 482,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 472,
                      "name": "Foo2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 472,
                      "end": 481,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 474,
                        "end": 481,
                        "typeName": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 481,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "type": "VariableDeclaration",
      "start": 485,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 489,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 490,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 493,
            "end": 505,
            "test": {
              "type": "Literal",
              "start": 493,
              "end": 497,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Identifier",
              "start": 500,
              "end": 501,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
