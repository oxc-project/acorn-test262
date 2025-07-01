__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 13,
            "end": 27
          }
        ],
        "start": 8,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 48,
        "end": 50
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 77,
              "end": 78
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 65,
            "end": 79
          }
        ],
        "start": 59,
        "end": 81
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 81
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 94
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hi",
                "raw": "\"hi\"",
                "start": 98,
                "end": 102
              },
              "start": 98,
              "end": 102
            },
            "start": 96,
            "end": 102
          },
          "start": 95,
          "end": 102
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 111,
                "end": 117
              },
              "start": 111,
              "end": 119
            },
            "start": 109,
            "end": 119
          },
          "start": 104,
          "end": 119
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "typeArguments": null,
          "start": 122,
          "end": 123
        },
        "start": 120,
        "end": 123
      },
      "body": null,
      "expression": false,
      "start": 82,
      "end": 124
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 137
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bye",
                "raw": "\"bye\"",
                "start": 141,
                "end": 146
              },
              "start": 141,
              "end": 146
            },
            "start": 139,
            "end": 146
          },
          "start": 138,
          "end": 146
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              },
              "start": 155,
              "end": 163
            },
            "start": 153,
            "end": 163
          },
          "start": 148,
          "end": 163
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 167
          },
          "typeArguments": null,
          "start": 166,
          "end": 167
        },
        "start": 164,
        "end": 167
      },
      "body": null,
      "expression": false,
      "start": 125,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 181
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 185,
              "end": 191
            },
            "start": 183,
            "end": 191
          },
          "start": 182,
          "end": 191
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              },
              "start": 200,
              "end": 208
            },
            "start": 198,
            "end": 208
          },
          "start": 193,
          "end": 208
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "typeArguments": null,
          "start": 211,
          "end": 212
        },
        "start": 209,
        "end": 212
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 225,
              "end": 229
            },
            "start": 218,
            "end": 230
          }
        ],
        "start": 213,
        "end": 232
      },
      "expression": false,
      "start": 169,
      "end": 232
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 241
                },
                "typeArguments": null,
                "start": 240,
                "end": 241
              },
              "start": 238,
              "end": 241
            },
            "start": 237,
            "end": 241
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 247
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hi",
                "raw": "\"hi\"",
                "start": 248,
                "end": 252
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 254,
                "end": 256
              }
            ],
            "optional": false,
            "start": 244,
            "end": 257
          },
          "definite": false,
          "start": 237,
          "end": 257
        }
      ],
      "declare": false,
      "start": 233,
      "end": 258
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 272
                },
                "typeArguments": null,
                "start": 271,
                "end": 272
              },
              "start": 269,
              "end": 272
            },
            "start": 268,
            "end": 272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 278
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "bye",
                "raw": "\"bye\"",
                "start": 279,
                "end": 284
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 286,
                "end": 288
              }
            ],
            "optional": false,
            "start": 275,
            "end": 289
          },
          "definite": false,
          "start": 268,
          "end": 289
        }
      ],
      "declare": false,
      "start": 264,
      "end": 290
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 308
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "um",
                "raw": "\"um\"",
                "start": 309,
                "end": 313
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 315,
                "end": 317
              }
            ],
            "optional": false,
            "start": 305,
            "end": 318
          },
          "definite": false,
          "start": 301,
          "end": 318
        }
      ],
      "declare": false,
      "start": 297,
      "end": 319
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 388
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bye",
                "raw": "\"bye\"",
                "start": 392,
                "end": 397
              },
              "start": 392,
              "end": 397
            },
            "start": 390,
            "end": 397
          },
          "start": 389,
          "end": 397
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 406,
                "end": 412
              },
              "start": 406,
              "end": 414
            },
            "start": 404,
            "end": 414
          },
          "start": 399,
          "end": 414
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 418
          },
          "typeArguments": null,
          "start": 417,
          "end": 418
        },
        "start": 415,
        "end": 418
      },
      "body": null,
      "expression": false,
      "start": 376,
      "end": 419
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 432
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 436,
              "end": 442
            },
            "start": 434,
            "end": 442
          },
          "start": 433,
          "end": 442
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 451,
                "end": 457
              },
              "start": 451,
              "end": 459
            },
            "start": 449,
            "end": 459
          },
          "start": 444,
          "end": 459
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 463
          },
          "typeArguments": null,
          "start": 462,
          "end": 463
        },
        "start": 460,
        "end": 463
      },
      "body": null,
      "expression": false,
      "start": 420,
      "end": 464
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 477
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 481,
              "end": 487
            },
            "start": 479,
            "end": 487
          },
          "start": 478,
          "end": 487
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 496,
                "end": 502
              },
              "start": 496,
              "end": 504
            },
            "start": 494,
            "end": 504
          },
          "start": 489,
          "end": 504
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "typeArguments": null,
          "start": 507,
          "end": 508
        },
        "start": 505,
        "end": 508
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 521,
              "end": 525
            },
            "start": 514,
            "end": 526
          }
        ],
        "start": 509,
        "end": 528
      },
      "expression": false,
      "start": 465,
      "end": 528
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 538
                },
                "typeArguments": null,
                "start": 537,
                "end": 538
              },
              "start": 535,
              "end": 538
            },
            "start": 534,
            "end": 538
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 544
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hi",
                "raw": "\"hi\"",
                "start": 545,
                "end": 549
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 551,
                "end": 553
              }
            ],
            "optional": false,
            "start": 541,
            "end": 554
          },
          "definite": false,
          "start": 534,
          "end": 554
        }
      ],
      "declare": false,
      "start": 530,
      "end": 555
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 569
                },
                "typeArguments": null,
                "start": 568,
                "end": 569
              },
              "start": 566,
              "end": 569
            },
            "start": 565,
            "end": 569
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 572,
              "end": 575
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "bye",
                "raw": "\"bye\"",
                "start": 576,
                "end": 581
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 583,
                "end": 585
              }
            ],
            "optional": false,
            "start": 572,
            "end": 586
          },
          "definite": false,
          "start": 565,
          "end": 586
        }
      ],
      "declare": false,
      "start": 561,
      "end": 587
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 602
                },
                "typeArguments": null,
                "start": 601,
                "end": 602
              },
              "start": 599,
              "end": 602
            },
            "start": 598,
            "end": 602
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 608
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "um",
                "raw": "\"um\"",
                "start": 609,
                "end": 613
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 615,
                "end": 617
              }
            ],
            "optional": false,
            "start": 605,
            "end": 618
          },
          "definite": false,
          "start": 598,
          "end": 618
        }
      ],
      "declare": false,
      "start": 594,
      "end": 619
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
