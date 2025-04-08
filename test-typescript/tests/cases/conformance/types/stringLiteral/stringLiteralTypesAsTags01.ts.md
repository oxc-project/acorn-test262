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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Kind",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "A",
              "raw": "\"A\""
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
              "value": "B",
              "raw": "\"B\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "name": "Entity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "name": "Kind",
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
      "start": 61,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 81,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "name": "Entity",
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
        "start": 88,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 98,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 119,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
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
      "start": 123,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 143,
          "end": 149,
          "expression": {
            "type": "Identifier",
            "start": 143,
            "end": 149,
            "name": "Entity",
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
        "start": 150,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 156,
            "end": 166,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 160,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "B",
                  "raw": "\"B\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 181,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 174,
                "end": 180
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
      "type": "TSDeclareFunction",
      "start": 185,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 201,
        "name": "hasKind",
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
          "start": 202,
          "end": 216,
          "name": "entity",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 216,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 216,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 216,
                "name": "Entity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 218,
          "end": 227,
          "name": "kind",
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
                "value": "A",
                "raw": "\"A\""
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 241,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 230,
          "end": 241,
          "parameterName": {
            "type": "Identifier",
            "start": 230,
            "end": 236,
            "name": "entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 241,
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 243,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 259,
        "name": "hasKind",
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
          "start": 260,
          "end": 274,
          "name": "entity",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 274,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 274,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 274,
                "name": "Entity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 276,
          "end": 285,
          "name": "kind",
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
                "value": "B",
                "raw": "\"B\""
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 286,
        "end": 299,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 288,
          "end": 299,
          "parameterName": {
            "type": "Identifier",
            "start": 288,
            "end": 294,
            "name": "entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 299,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 301,
      "end": 364,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 317,
        "name": "hasKind",
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
          "start": 318,
          "end": 332,
          "name": "entity",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 332,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 326,
              "end": 332,
              "typeName": {
                "type": "Identifier",
                "start": 326,
                "end": 332,
                "name": "Entity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 334,
          "end": 344,
          "name": "kind",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 344,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 340,
              "end": 344,
              "typeName": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
                "name": "Kind",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 345,
        "end": 363,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 347,
          "end": 363,
          "parameterName": {
            "type": "Identifier",
            "start": 347,
            "end": 353,
            "name": "entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 363,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 363,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 363,
                "name": "Entity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 365,
      "end": 455,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 381,
        "name": "hasKind",
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
          "end": 396,
          "name": "entity",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 388,
            "end": 396,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 390,
              "end": 396,
              "typeName": {
                "type": "Identifier",
                "start": 390,
                "end": 396,
                "name": "Entity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 398,
          "end": 408,
          "name": "kind",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 408,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 408,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 408,
                "name": "Kind",
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
              "left": {
                "type": "MemberExpression",
                "start": 432,
                "end": 443,
                "object": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 438,
                  "name": "entity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 443,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 448,
                "end": 452,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 409,
        "end": 418,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 411,
          "end": 418
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 461,
            "end": 465,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 465,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 465,
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 465,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 478,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 480,
                  "end": 483,
                  "value": "A",
                  "raw": "\"A\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 489,
                "end": 495,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 490,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 492,
                  "end": 495,
                  "value": 100,
                  "raw": "100"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 500,
      "end": 563,
      "test": {
        "type": "CallExpression",
        "start": 504,
        "end": 519,
        "callee": {
          "type": "Identifier",
          "start": 504,
          "end": 511,
          "name": "hasKind",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 512,
            "end": 513,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 515,
            "end": 518,
            "value": "A",
            "raw": "\"A\""
          }
        ],
        "optional": false,
        "typeArguments": null
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
                "id": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 532,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 556,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 560,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 565,
      "end": 629,
      "test": {
        "type": "UnaryExpression",
        "start": 569,
        "end": 585,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 570,
          "end": 585,
          "callee": {
            "type": "Identifier",
            "start": 570,
            "end": 577,
            "name": "hasKind",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Literal",
              "start": 581,
              "end": 584,
              "value": "B",
              "raw": "\"B\""
            }
          ],
          "optional": false,
          "typeArguments": null
        }
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
                "id": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 602,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
