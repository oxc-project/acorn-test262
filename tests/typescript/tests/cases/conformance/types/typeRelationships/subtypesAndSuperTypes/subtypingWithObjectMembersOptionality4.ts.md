__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 514,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 91,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 106,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 97,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
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
      "start": 109,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 126,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 135,
          "end": 139,
          "expression": {
            "type": "Identifier",
            "start": 135,
            "end": 139,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 140,
        "end": 156,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 142,
            "end": 154,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 153,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 147,
                "end": 153
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
      "start": 158,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 170,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
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
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 210,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 212,
        "end": 240,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 218,
            "end": 232,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 222,
              "decorators": [],
              "name": "Foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 232,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 242,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 254,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 255,
        "end": 272,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 261,
            "end": 269,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 261,
              "end": 262,
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
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 274,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 295,
          "end": 297,
          "expression": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 298,
        "end": 324,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 304,
            "end": 316,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 304,
              "end": 305,
              "value": 2,
              "raw": "2"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 308,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 315,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 326,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 338,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 339,
        "end": 357,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 345,
            "end": 355,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 345,
              "end": 348,
              "value": "1",
              "raw": "'1'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 350,
                "end": 354,
                "typeName": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 359,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 371,
        "decorators": [],
        "name": "S3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 380,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 380,
            "end": 382,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 383,
        "end": 413,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 389,
            "end": 405,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 389,
              "end": 394,
              "value": "1.0",
              "raw": "'1.0'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 404,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 397,
                "end": 404,
                "typeName": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 404,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 438,
      "end": 459,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 459,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 445,
                "end": 459,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 447,
                    "end": 457,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 450,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 450,
                      "end": 456,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 452,
                        "end": 456,
                        "typeName": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 456,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 486,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 486,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 486,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 486,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 467,
                "end": 486,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 469,
                    "end": 484,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 473,
                      "decorators": [],
                      "name": "Foo2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 474,
                      "end": 483,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 476,
                        "end": 483,
                        "typeName": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 483,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 487,
      "end": 508,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 491,
          "end": 507,
          "id": {
            "type": "Identifier",
            "start": 491,
            "end": 492,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 495,
            "end": 507,
            "test": {
              "type": "Literal",
              "start": 495,
              "end": 499,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "alternate": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
