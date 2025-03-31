__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 74,
  "end": 515,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 105,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 103,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 94,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
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
      "start": 106,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 123,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 132,
          "end": 136,
          "expression": {
            "type": "Identifier",
            "start": 132,
            "end": 136,
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
        "start": 137,
        "end": 153,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 139,
            "end": 151,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
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
      "start": 155,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 185,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 173,
            "end": 183,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 182,
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
      "start": 187,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 207,
          "end": 208,
          "expression": {
            "type": "Identifier",
            "start": 207,
            "end": 208,
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
        "start": 209,
        "end": 239,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 215,
            "end": 228,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 221,
                "end": 228,
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 228,
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
      "end": 270,
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
        "end": 270,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 260,
            "end": 268,
            "computed": false,
            "optional": false,
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
              "start": 261,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 267,
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
      "start": 272,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 284,
        "name": "S2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 293,
          "end": 295,
          "expression": {
            "type": "Identifier",
            "start": 293,
            "end": 295,
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
        "start": 296,
        "end": 325,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 302,
            "end": 314,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 302,
              "end": 303,
              "value": 1,
              "raw": "1"
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
      "start": 327,
      "end": 358,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 339,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 340,
        "end": 358,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 346,
            "end": 356,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 346,
              "end": 349,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 351,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
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
      "start": 360,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 372,
        "name": "S3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 381,
          "end": 383,
          "expression": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
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
        "start": 384,
        "end": 415,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 390,
            "end": 404,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 390,
              "end": 393,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 403,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 403,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 403,
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
      "start": 440,
      "end": 461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 461,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 461,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 461,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 447,
                "end": 461,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 449,
                    "end": 459,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 452,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 452,
                      "end": 458,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 454,
                        "end": 458,
                        "typeName": {
                          "type": "Identifier",
                          "start": 454,
                          "end": 458,
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
      "start": 462,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 487,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 487,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 467,
              "end": 487,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 469,
                "end": 487,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 471,
                    "end": 485,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 474,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 475,
                      "end": 484,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 477,
                        "end": 484,
                        "typeName": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 484,
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
      "start": 488,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 508,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 496,
            "end": 508,
            "test": {
              "type": "Literal",
              "start": 496,
              "end": 500,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
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
