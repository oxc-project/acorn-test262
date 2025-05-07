__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 629,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 21,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 21,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 12,
            "end": 15,
            "literal": {
              "type": "Literal",
              "start": 12,
              "end": 15,
              "raw": "\"A\"",
              "value": "A",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 18,
            "end": 21,
            "literal": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "raw": "\"B\"",
              "value": "B",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 57,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 33,
        "end": 39,
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 121,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 98,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 103,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 100,
                "end": 103,
                "literal": {
                  "type": "Literal",
                  "start": 100,
                  "end": 103,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 119,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 81,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 183,
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 156,
            "end": 166,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 160,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 165,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 162,
                "end": 165,
                "literal": {
                  "type": "Literal",
                  "start": 162,
                  "end": 165,
                  "raw": "\"B\"",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 181,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 174,
                "end": 180
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 143,
          "end": 149,
          "expression": {
            "type": "Identifier",
            "start": 143,
            "end": 149,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 185,
      "end": 242,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 201,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 202,
          "end": 216,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 216,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 216,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 218,
          "end": 227,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 227,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 224,
              "end": 227,
              "literal": {
                "type": "Literal",
                "start": 224,
                "end": 227,
                "raw": "\"A\"",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 241,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 230,
          "end": 241,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 230,
            "end": 236,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 241,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 243,
      "end": 300,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 259,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 274,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 274,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 274,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 274,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 276,
          "end": 285,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 280,
            "end": 285,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 282,
              "end": 285,
              "literal": {
                "type": "Literal",
                "start": 282,
                "end": 285,
                "raw": "\"B\"",
                "value": "B",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 286,
        "end": 299,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 288,
          "end": 299,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 288,
            "end": 294,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 299,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 301,
      "end": 364,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 317,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 318,
          "end": 332,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 332,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 326,
              "end": 332,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 326,
                "end": 332,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 334,
          "end": 344,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 344,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 340,
              "end": 344,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 345,
        "end": 363,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 347,
          "end": 363,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 347,
            "end": 353,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 363,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 363,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 363,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 365,
      "end": 455,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 419,
        "end": 455,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 425,
            "end": 453,
            "argument": {
              "type": "BinaryExpression",
              "start": 432,
              "end": 452,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 432,
                "end": 443,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 438,
                  "decorators": [],
                  "name": "entity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 443,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 448,
                "end": 452,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 381,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 382,
          "end": 396,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 388,
            "end": 396,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 390,
              "end": 396,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 390,
                "end": 396,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 398,
          "end": 408,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 408,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 408,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 408,
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 409,
        "end": 418,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 411,
          "end": 418
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 461,
          "end": 498,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 465,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 465,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 465,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 465,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 468,
            "end": 498,
            "properties": [
              {
                "type": "Property",
                "start": 474,
                "end": 483,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 478,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 480,
                  "end": 483,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 489,
                "end": 495,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 490,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 492,
                  "end": 495,
                  "raw": "100",
                  "value": 100,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 500,
      "end": 563,
      "alternate": {
        "type": "BlockStatement",
        "start": 545,
        "end": 563,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 551,
            "end": 561,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 555,
                "end": 560,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 556,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 560,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 521,
        "end": 539,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 527,
            "end": 537,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 531,
                "end": 536,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 532,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 504,
        "end": 519,
        "arguments": [
          {
            "type": "Identifier",
            "start": 512,
            "end": 513,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 515,
            "end": 518,
            "raw": "\"A\"",
            "value": "A",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 504,
          "end": 511,
          "decorators": [],
          "name": "hasKind",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 565,
      "end": 629,
      "alternate": {
        "type": "BlockStatement",
        "start": 611,
        "end": 629,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 617,
            "end": 627,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 621,
                "end": 626,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 587,
        "end": 605,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 593,
            "end": 603,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 597,
                "end": 602,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 602,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 569,
        "end": 585,
        "argument": {
          "type": "CallExpression",
          "start": 570,
          "end": 585,
          "arguments": [
            {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 581,
              "end": 584,
              "raw": "\"B\"",
              "value": "B",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 570,
            "end": 577,
            "decorators": [],
            "name": "hasKind",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
