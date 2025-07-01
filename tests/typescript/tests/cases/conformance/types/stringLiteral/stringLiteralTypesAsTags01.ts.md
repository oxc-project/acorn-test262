__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 12,
              "end": 15
            },
            "start": 12,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 18,
              "end": 21
            },
            "start": 18,
            "end": 21
          }
        ],
        "start": 12,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 39
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 50
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 56
                },
                "typeArguments": null,
                "start": 52,
                "end": 56
              },
              "start": 50,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 57
          }
        ],
        "start": 40,
        "end": 59
      },
      "declare": false,
      "start": 23,
      "end": 59
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 87
          },
          "typeArguments": null,
          "start": 81,
          "end": 87
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 98
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 100,
                  "end": 103
                },
                "start": 100,
                "end": 103
              },
              "start": 98,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 119
          }
        ],
        "start": 88,
        "end": 121
      },
      "declare": false,
      "start": 61,
      "end": 121
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 134
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 149
          },
          "typeArguments": null,
          "start": 143,
          "end": 149
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 160
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 162,
                  "end": 165
                },
                "start": 162,
                "end": 165
              },
              "start": 160,
              "end": 165
            },
            "accessibility": null,
            "static": false,
            "start": 156,
            "end": 166
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 174,
                "end": 180
              },
              "start": 172,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 171,
            "end": 181
          }
        ],
        "start": 150,
        "end": 183
      },
      "declare": false,
      "start": 123,
      "end": 183
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 216
              },
              "typeArguments": null,
              "start": 210,
              "end": 216
            },
            "start": 208,
            "end": 216
          },
          "start": 202,
          "end": 216
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 224,
                "end": 227
              },
              "start": 224,
              "end": 227
            },
            "start": 222,
            "end": 227
          },
          "start": 218,
          "end": 227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 236
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "typeArguments": null,
              "start": 240,
              "end": 241
            },
            "start": 240,
            "end": 241
          },
          "start": 230,
          "end": 241
        },
        "start": 228,
        "end": 241
      },
      "body": null,
      "expression": false,
      "start": 185,
      "end": 242
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 259
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 274
              },
              "typeArguments": null,
              "start": 268,
              "end": 274
            },
            "start": 266,
            "end": 274
          },
          "start": 260,
          "end": 274
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 282,
                "end": 285
              },
              "start": 282,
              "end": 285
            },
            "start": 280,
            "end": 285
          },
          "start": 276,
          "end": 285
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 294
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 299
              },
              "typeArguments": null,
              "start": 298,
              "end": 299
            },
            "start": 298,
            "end": 299
          },
          "start": 288,
          "end": 299
        },
        "start": 286,
        "end": 299
      },
      "body": null,
      "expression": false,
      "start": 243,
      "end": 300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 317
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 332
              },
              "typeArguments": null,
              "start": 326,
              "end": 332
            },
            "start": 324,
            "end": 332
          },
          "start": 318,
          "end": 332
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 344
              },
              "typeArguments": null,
              "start": 340,
              "end": 344
            },
            "start": 338,
            "end": 344
          },
          "start": 334,
          "end": 344
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 353
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 363
              },
              "typeArguments": null,
              "start": 357,
              "end": 363
            },
            "start": 357,
            "end": 363
          },
          "start": 347,
          "end": 363
        },
        "start": 345,
        "end": 363
      },
      "body": null,
      "expression": false,
      "start": 301,
      "end": 364
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 396
              },
              "typeArguments": null,
              "start": 390,
              "end": 396
            },
            "start": 388,
            "end": 396
          },
          "start": 382,
          "end": 396
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 408
              },
              "typeArguments": null,
              "start": 404,
              "end": 408
            },
            "start": 402,
            "end": 408
          },
          "start": 398,
          "end": 408
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 411,
          "end": 418
        },
        "start": 409,
        "end": 418
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 438
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 443
                },
                "optional": false,
                "computed": false,
                "start": 432,
                "end": 443
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 452
              },
              "start": 432,
              "end": 452
            },
            "start": 425,
            "end": 453
          }
        ],
        "start": 419,
        "end": 455
      },
      "expression": false,
      "start": 365,
      "end": 455
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 465
                },
                "typeArguments": null,
                "start": 464,
                "end": 465
              },
              "start": 462,
              "end": 465
            },
            "start": 461,
            "end": 465
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 478
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 480,
                  "end": 483
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 474,
                "end": 483
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 492,
                  "end": 495
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 489,
                "end": 495
              }
            ],
            "start": 468,
            "end": 498
          },
          "definite": false,
          "start": 461,
          "end": 498
        }
      ],
      "declare": false,
      "start": 457,
      "end": 498
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 511
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 513
          },
          {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 515,
            "end": 518
          }
        ],
        "optional": false,
        "start": 504,
        "end": 519
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 532
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "definite": false,
                "start": 531,
                "end": 536
              }
            ],
            "declare": false,
            "start": 527,
            "end": 537
          }
        ],
        "start": 521,
        "end": 539
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 556
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 560
                },
                "definite": false,
                "start": 555,
                "end": 560
              }
            ],
            "declare": false,
            "start": 551,
            "end": 561
          }
        ],
        "start": 545,
        "end": 563
      },
      "start": 500,
      "end": 563
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "hasKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 570,
            "end": 577
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 581,
              "end": 584
            }
          ],
          "optional": false,
          "start": 570,
          "end": 585
        },
        "prefix": true,
        "start": 569,
        "end": 585
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 598
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 602
                },
                "definite": false,
                "start": 597,
                "end": 602
              }
            ],
            "declare": false,
            "start": 593,
            "end": 603
          }
        ],
        "start": 587,
        "end": 605
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 621,
                  "end": 622
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 625,
                  "end": 626
                },
                "definite": false,
                "start": 621,
                "end": 626
              }
            ],
            "declare": false,
            "start": 617,
            "end": 627
          }
        ],
        "start": 611,
        "end": 629
      },
      "start": 565,
      "end": 629
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 629
}
```
