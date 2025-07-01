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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 11,
            "end": 17
          },
          {
            "type": "TSStringKeyword",
            "start": 19,
            "end": 25
          },
          {
            "type": "TSBooleanKeyword",
            "start": 27,
            "end": 34
          }
        ],
        "start": 10,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 44
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 48,
            "end": 54
          },
          {
            "type": "TSStringKeyword",
            "start": 56,
            "end": 62
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 64,
              "end": 71
            },
            "start": 64,
            "end": 72
          }
        ],
        "start": 47,
        "end": 73
      },
      "declare": false,
      "start": 37,
      "end": 74
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 82
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 86,
            "end": 92
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 94,
              "end": 100
            },
            "start": 94,
            "end": 101
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 103,
              "end": 110
            },
            "start": 103,
            "end": 111
          }
        ],
        "start": 85,
        "end": 112
      },
      "declare": false,
      "start": 75,
      "end": 113
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 121
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 125,
              "end": 131
            },
            "start": 125,
            "end": 132
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 134,
              "end": 140
            },
            "start": 134,
            "end": 141
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 143,
              "end": 150
            },
            "start": 143,
            "end": 151
          }
        ],
        "start": 124,
        "end": 152
      },
      "declare": false,
      "start": 114,
      "end": 153
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L1",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 162
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 167
          },
          "typeArguments": null,
          "start": 165,
          "end": 167
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 168,
            "end": 176
          },
          "start": 168,
          "end": 176
        },
        "start": 165,
        "end": 177
      },
      "declare": false,
      "start": 155,
      "end": 178
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L2",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 186
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 191
          },
          "typeArguments": null,
          "start": 189,
          "end": 191
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 192,
            "end": 200
          },
          "start": 192,
          "end": 200
        },
        "start": 189,
        "end": 201
      },
      "declare": false,
      "start": 179,
      "end": 202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L3",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 210
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 215
          },
          "typeArguments": null,
          "start": 213,
          "end": 215
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 216,
            "end": 224
          },
          "start": 216,
          "end": 224
        },
        "start": 213,
        "end": 225
      },
      "declare": false,
      "start": 203,
      "end": 226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L4",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 239
          },
          "typeArguments": null,
          "start": 237,
          "end": 239
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 240,
            "end": 248
          },
          "start": 240,
          "end": 248
        },
        "start": 237,
        "end": 249
      },
      "declare": false,
      "start": 227,
      "end": 250
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 259
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 263,
            "end": 269
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 271,
              "end": 277
            },
            "start": 271,
            "end": 278
          },
          {
            "type": "TSBooleanKeyword",
            "start": 280,
            "end": 287
          }
        ],
        "start": 262,
        "end": 288
      },
      "declare": false,
      "start": 252,
      "end": 289
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 312
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 319
              },
              "typeArguments": null,
              "start": 317,
              "end": 319
            },
            "start": 315,
            "end": 319
          },
          "start": 313,
          "end": 319
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 327
              },
              "typeArguments": null,
              "start": 325,
              "end": 327
            },
            "start": 323,
            "end": 327
          },
          "start": 321,
          "end": 327
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 335
              },
              "typeArguments": null,
              "start": 333,
              "end": 335
            },
            "start": 331,
            "end": 335
          },
          "start": 329,
          "end": 335
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 343
              },
              "typeArguments": null,
              "start": 341,
              "end": 343
            },
            "start": 339,
            "end": 343
          },
          "start": 337,
          "end": 343
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 353
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 358
              },
              "start": 351,
              "end": 358
            },
            "directive": null,
            "start": 351,
            "end": 359
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 366
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 371
              },
              "start": 364,
              "end": 371
            },
            "directive": null,
            "start": 364,
            "end": 372
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 389
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 394
              },
              "start": 387,
              "end": 394
            },
            "directive": null,
            "start": 387,
            "end": 395
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 412
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 417
              },
              "start": 410,
              "end": 417
            },
            "directive": null,
            "start": 410,
            "end": 418
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 435
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 440
              },
              "start": 433,
              "end": 440
            },
            "directive": null,
            "start": 433,
            "end": 441
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 448
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 453
              },
              "start": 446,
              "end": 453
            },
            "directive": null,
            "start": 446,
            "end": 454
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 461
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 466
              },
              "start": 459,
              "end": 466
            },
            "directive": null,
            "start": 459,
            "end": 467
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 484
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 489
              },
              "start": 482,
              "end": 489
            },
            "directive": null,
            "start": 482,
            "end": 490
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 507
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 512
              },
              "start": 505,
              "end": 512
            },
            "directive": null,
            "start": 505,
            "end": 513
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 520
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 525
              },
              "start": 518,
              "end": 525
            },
            "directive": null,
            "start": 518,
            "end": 526
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 533
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 538
              },
              "start": 531,
              "end": 538
            },
            "directive": null,
            "start": 531,
            "end": 539
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 546
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 551
              },
              "start": 544,
              "end": 551
            },
            "directive": null,
            "start": 544,
            "end": 552
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 569
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 574
              },
              "start": 567,
              "end": 574
            },
            "directive": null,
            "start": 567,
            "end": 575
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 582
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 587
              },
              "start": 580,
              "end": 587
            },
            "directive": null,
            "start": 580,
            "end": 588
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 595
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 600
              },
              "start": 593,
              "end": 600
            },
            "directive": null,
            "start": 593,
            "end": 601
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 608
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 613
              },
              "start": 606,
              "end": 613
            },
            "directive": null,
            "start": 606,
            "end": 614
          }
        ],
        "start": 345,
        "end": 616
      },
      "expression": false,
      "start": 301,
      "end": 616
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 628
                },
                "typeArguments": null,
                "start": 626,
                "end": 628
              },
              "start": 624,
              "end": 628
            },
            "start": 622,
            "end": 628
          },
          "init": null,
          "definite": false,
          "start": 622,
          "end": 628
        }
      ],
      "declare": false,
      "start": 618,
      "end": 629
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 640
                },
                "typeArguments": null,
                "start": 638,
                "end": 640
              },
              "start": 636,
              "end": 640
            },
            "start": 634,
            "end": 640
          },
          "init": null,
          "definite": false,
          "start": 634,
          "end": 640
        }
      ],
      "declare": false,
      "start": 630,
      "end": 641
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 652
                },
                "typeArguments": null,
                "start": 650,
                "end": 652
              },
              "start": 648,
              "end": 652
            },
            "start": 646,
            "end": 652
          },
          "init": null,
          "definite": false,
          "start": 646,
          "end": 652
        }
      ],
      "declare": false,
      "start": 642,
      "end": 653
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 655,
          "end": 657
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 661,
              "end": 663
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 665,
              "end": 672
            }
          ],
          "start": 660,
          "end": 673
        },
        "start": 655,
        "end": 673
      },
      "directive": null,
      "start": 655,
      "end": 674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 677
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 681,
              "end": 683
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 685,
              "end": 692
            }
          ],
          "start": 680,
          "end": 693
        },
        "start": 675,
        "end": 693
      },
      "directive": null,
      "start": 675,
      "end": 694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 695,
          "end": 697
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 701,
              "end": 703
            },
            null,
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 705,
              "end": 709
            }
          ],
          "start": 700,
          "end": 710
        },
        "start": 695,
        "end": 710
      },
      "directive": null,
      "start": 695,
      "end": 710
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 711,
          "end": 713
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 717,
              "end": 719
            }
          ],
          "start": 716,
          "end": 720
        },
        "start": 711,
        "end": 720
      },
      "directive": null,
      "start": 711,
      "end": 721
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 722,
          "end": 724
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 728,
              "end": 730
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 732,
              "end": 739
            }
          ],
          "start": 727,
          "end": 740
        },
        "start": 722,
        "end": 740
      },
      "directive": null,
      "start": 722,
      "end": 741
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 742,
          "end": 744
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 748,
              "end": 750
            },
            null,
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 752,
              "end": 756
            }
          ],
          "start": 747,
          "end": 757
        },
        "start": 742,
        "end": 757
      },
      "directive": null,
      "start": 742,
      "end": 758
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 759,
          "end": 761
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            null,
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 766,
              "end": 773
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 775,
              "end": 779
            }
          ],
          "start": 764,
          "end": 780
        },
        "start": 759,
        "end": 780
      },
      "directive": null,
      "start": 759,
      "end": 781
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 782,
          "end": 784
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            null,
            null,
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 790,
              "end": 794
            }
          ],
          "start": 787,
          "end": 795
        },
        "start": 782,
        "end": 795
      },
      "directive": null,
      "start": 782,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 797,
          "end": 799
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 802,
          "end": 804
        },
        "start": 797,
        "end": 804
      },
      "directive": null,
      "start": 797,
      "end": 805
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 805
}
```
