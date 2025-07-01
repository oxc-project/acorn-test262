__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNotNullish",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 37,
              "end": 44
            },
            "start": 35,
            "end": 44
          },
          "start": 30,
          "end": 44
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 52
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 56,
              "end": 58
            },
            "start": 56,
            "end": 58
          },
          "start": 47,
          "end": 58
        },
        "start": 45,
        "end": 58
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNullish",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 94,
              "end": 101
            },
            "start": 92,
            "end": 101
          },
          "start": 87,
          "end": 101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 109
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 113,
                  "end": 117
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 120,
                  "end": 129
                }
              ],
              "start": 113,
              "end": 129
            },
            "start": 113,
            "end": 129
          },
          "start": 104,
          "end": 129
        },
        "start": 102,
        "end": 129
      },
      "body": null,
      "expression": false,
      "start": 60,
      "end": 130
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 154,
                "end": 161
              },
              "start": 152,
              "end": 161
            },
            "start": 146,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 146,
          "end": 161
        }
      ],
      "declare": true,
      "start": 132,
      "end": 162
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNotNullish",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 179
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value1",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 186
          }
        ],
        "optional": false,
        "start": 167,
        "end": 187
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value1",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 199
            },
            "directive": null,
            "start": 193,
            "end": 200
          }
        ],
        "start": 189,
        "end": 202
      },
      "alternate": null,
      "start": 163,
      "end": 202
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 226,
                "end": 233
              },
              "start": 224,
              "end": 233
            },
            "start": 218,
            "end": 233
          },
          "init": null,
          "definite": false,
          "start": 218,
          "end": 233
        }
      ],
      "declare": true,
      "start": 204,
      "end": 234
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
            "name": "isNotNullish",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 252
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 259
            }
          ],
          "optional": false,
          "start": 240,
          "end": 260
        },
        "prefix": true,
        "start": 239,
        "end": 260
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 272
            },
            "directive": null,
            "start": 266,
            "end": 273
          }
        ],
        "start": 262,
        "end": 275
      },
      "alternate": null,
      "start": 235,
      "end": 275
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 299,
                "end": 306
              },
              "start": 297,
              "end": 306
            },
            "start": 291,
            "end": 306
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 306
        }
      ],
      "declare": true,
      "start": 277,
      "end": 307
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNullish",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 321
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value3",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 328
          }
        ],
        "optional": false,
        "start": 312,
        "end": 329
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value3",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 341
            },
            "directive": null,
            "start": 335,
            "end": 342
          }
        ],
        "start": 331,
        "end": 344
      },
      "alternate": null,
      "start": 308,
      "end": 344
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 368,
                "end": 375
              },
              "start": 366,
              "end": 375
            },
            "start": 360,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 360,
          "end": 375
        }
      ],
      "declare": true,
      "start": 346,
      "end": 376
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
            "name": "isNullish",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 391
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value4",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 398
            }
          ],
          "optional": false,
          "start": 382,
          "end": 399
        },
        "prefix": true,
        "start": 381,
        "end": 399
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value4",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 411
            },
            "directive": null,
            "start": 405,
            "end": 412
          }
        ],
        "start": 401,
        "end": 414
      },
      "alternate": null,
      "start": 377,
      "end": 414
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 431
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 437
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 439,
                "end": 445
              },
              "start": 437,
              "end": 445
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 434,
            "end": 446
          }
        ],
        "start": 432,
        "end": 448
      },
      "abstract": false,
      "declare": true,
      "start": 416,
      "end": 448
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 469
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 477,
              "end": 484
            },
            "start": 475,
            "end": 484
          },
          "start": 470,
          "end": 484
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 492
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
                "start": 496,
                "end": 497
              },
              "typeArguments": null,
              "start": 496,
              "end": 497
            },
            "start": 496,
            "end": 497
          },
          "start": 487,
          "end": 497
        },
        "start": 485,
        "end": 497
      },
      "body": null,
      "expression": false,
      "start": 449,
      "end": 498
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 522,
                "end": 529
              },
              "start": 520,
              "end": 529
            },
            "start": 514,
            "end": 529
          },
          "init": null,
          "definite": false,
          "start": 514,
          "end": 529
        }
      ],
      "declare": true,
      "start": 500,
      "end": 530
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isA",
          "optional": false,
          "typeAnnotation": null,
          "start": 535,
          "end": 538
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value5",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 545
          }
        ],
        "optional": false,
        "start": 535,
        "end": 546
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value5",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 558
            },
            "directive": null,
            "start": 552,
            "end": 559
          }
        ],
        "start": 548,
        "end": 561
      },
      "alternate": null,
      "start": 531,
      "end": 561
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 585,
                "end": 592
              },
              "start": 583,
              "end": 592
            },
            "start": 577,
            "end": 592
          },
          "init": null,
          "definite": false,
          "start": 577,
          "end": 592
        }
      ],
      "declare": true,
      "start": 563,
      "end": 593
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
            "name": "isA",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 602
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value6",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 609
            }
          ],
          "optional": false,
          "start": 599,
          "end": 610
        },
        "prefix": true,
        "start": 598,
        "end": 610
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value6",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 622
            },
            "directive": null,
            "start": 616,
            "end": 623
          }
        ],
        "start": 612,
        "end": 625
      },
      "alternate": null,
      "start": 594,
      "end": 625
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 625
}
```
