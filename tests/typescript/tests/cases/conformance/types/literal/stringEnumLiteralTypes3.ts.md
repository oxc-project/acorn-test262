__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 17
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Unknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "initializer": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 30,
              "end": 32
            },
            "computed": false,
            "start": 20,
            "end": 32
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 37
            },
            "initializer": {
              "type": "Literal",
              "value": "yes",
              "raw": "\"yes\"",
              "start": 40,
              "end": 45
            },
            "computed": false,
            "start": 34,
            "end": 45
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "No",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 49
            },
            "initializer": {
              "type": "Literal",
              "value": "no",
              "raw": "\"no\"",
              "start": 52,
              "end": 56
            },
            "computed": false,
            "start": 47,
            "end": 56
          }
        ],
        "start": 18,
        "end": 58
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "EmptyStatement",
      "start": 58,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Yes",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Choice",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 78
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Yes",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 82
          },
          "start": 72,
          "end": 82
        },
        "typeArguments": null,
        "start": 72,
        "end": 82
      },
      "declare": false,
      "start": 61,
      "end": 83
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "YesNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 94
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 103
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 107
              },
              "start": 97,
              "end": 107
            },
            "typeArguments": null,
            "start": 97,
            "end": 107
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 116
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 119
              },
              "start": 110,
              "end": 119
            },
            "typeArguments": null,
            "start": 110,
            "end": 119
          }
        ],
        "start": 97,
        "end": 119
      },
      "declare": false,
      "start": 84,
      "end": 120
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoYes",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 131
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 140
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 143
              },
              "start": 134,
              "end": 143
            },
            "typeArguments": null,
            "start": 134,
            "end": 143
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 152
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 156
              },
              "start": 146,
              "end": 156
            },
            "typeArguments": null,
            "start": 146,
            "end": 156
          }
        ],
        "start": 134,
        "end": 156
      },
      "declare": false,
      "start": 121,
      "end": 157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownYesNo",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 175
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 184
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unknown",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 192
              },
              "start": 178,
              "end": 192
            },
            "typeArguments": null,
            "start": 178,
            "end": 192
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 201
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 205
              },
              "start": 195,
              "end": 205
            },
            "typeArguments": null,
            "start": 195,
            "end": 205
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 214
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 217
              },
              "start": 208,
              "end": 217
            },
            "typeArguments": null,
            "start": 208,
            "end": 217
          }
        ],
        "start": 178,
        "end": 217
      },
      "declare": false,
      "start": 158,
      "end": 218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 231
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 238
              },
              "typeArguments": null,
              "start": 235,
              "end": 238
            },
            "start": 233,
            "end": 238
          },
          "start": 232,
          "end": 238
        },
        {
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 248
              },
              "typeArguments": null,
              "start": 243,
              "end": 248
            },
            "start": 241,
            "end": 248
          },
          "start": 240,
          "end": 248
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 265
              },
              "typeArguments": null,
              "start": 253,
              "end": 265
            },
            "start": 251,
            "end": 265
          },
          "start": 250,
          "end": 265
        },
        {
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 276
              },
              "typeArguments": null,
              "start": 270,
              "end": 276
            },
            "start": 268,
            "end": 276
          },
          "start": 267,
          "end": 276
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 285
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 289
              },
              "start": 284,
              "end": 289
            },
            "directive": null,
            "start": 284,
            "end": 290
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 296
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 300
              },
              "start": 295,
              "end": 300
            },
            "directive": null,
            "start": 295,
            "end": 301
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 311
              },
              "start": 306,
              "end": 311
            },
            "directive": null,
            "start": 306,
            "end": 312
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 322
              },
              "start": 317,
              "end": 322
            },
            "directive": null,
            "start": 317,
            "end": 323
          }
        ],
        "start": 278,
        "end": 325
      },
      "expression": false,
      "start": 220,
      "end": 325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 338
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 345
              },
              "typeArguments": null,
              "start": 342,
              "end": 345
            },
            "start": 340,
            "end": 345
          },
          "start": 339,
          "end": 345
        },
        {
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 355
              },
              "typeArguments": null,
              "start": 350,
              "end": 355
            },
            "start": 348,
            "end": 355
          },
          "start": 347,
          "end": 355
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 372
              },
              "typeArguments": null,
              "start": 360,
              "end": 372
            },
            "start": 358,
            "end": 372
          },
          "start": 357,
          "end": 372
        },
        {
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 383
              },
              "typeArguments": null,
              "start": 377,
              "end": 383
            },
            "start": 375,
            "end": 383
          },
          "start": 374,
          "end": 383
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 392
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 396
              },
              "start": 391,
              "end": 396
            },
            "directive": null,
            "start": 391,
            "end": 397
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 403
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 407
              },
              "start": 402,
              "end": 407
            },
            "directive": null,
            "start": 402,
            "end": 408
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 414
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 418
              },
              "start": 413,
              "end": 418
            },
            "directive": null,
            "start": 413,
            "end": 419
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "start": 424,
              "end": 429
            },
            "directive": null,
            "start": 424,
            "end": 430
          }
        ],
        "start": 385,
        "end": 432
      },
      "expression": false,
      "start": 327,
      "end": 432
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 445
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 452
              },
              "typeArguments": null,
              "start": 449,
              "end": 452
            },
            "start": 447,
            "end": 452
          },
          "start": 446,
          "end": 452
        },
        {
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 462
              },
              "typeArguments": null,
              "start": 457,
              "end": 462
            },
            "start": 455,
            "end": 462
          },
          "start": 454,
          "end": 462
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 479
              },
              "typeArguments": null,
              "start": 467,
              "end": 479
            },
            "start": 465,
            "end": 479
          },
          "start": 464,
          "end": 479
        },
        {
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 490
              },
              "typeArguments": null,
              "start": 484,
              "end": 490
            },
            "start": 482,
            "end": 490
          },
          "start": 481,
          "end": 490
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 499
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 503
              },
              "start": 498,
              "end": 503
            },
            "directive": null,
            "start": 498,
            "end": 504
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 509,
                "end": 510
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 514
              },
              "start": 509,
              "end": 514
            },
            "directive": null,
            "start": 509,
            "end": 515
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 521
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 524,
                "end": 525
              },
              "start": 520,
              "end": 525
            },
            "directive": null,
            "start": 520,
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 532
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 536
              },
              "start": 531,
              "end": 536
            },
            "directive": null,
            "start": 531,
            "end": 537
          }
        ],
        "start": 492,
        "end": 539
      },
      "expression": false,
      "start": 434,
      "end": 539
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 552
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 559
              },
              "typeArguments": null,
              "start": 556,
              "end": 559
            },
            "start": 554,
            "end": 559
          },
          "start": 553,
          "end": 559
        },
        {
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 569
              },
              "typeArguments": null,
              "start": 564,
              "end": 569
            },
            "start": 562,
            "end": 569
          },
          "start": 561,
          "end": 569
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 586
              },
              "typeArguments": null,
              "start": 574,
              "end": 586
            },
            "start": 572,
            "end": 586
          },
          "start": 571,
          "end": 586
        },
        {
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 597
              },
              "typeArguments": null,
              "start": 591,
              "end": 597
            },
            "start": 589,
            "end": 597
          },
          "start": 588,
          "end": 597
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
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 606
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 610
              },
              "start": 605,
              "end": 610
            },
            "directive": null,
            "start": 605,
            "end": 611
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 617
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 621
              },
              "start": 616,
              "end": 621
            },
            "directive": null,
            "start": 616,
            "end": 622
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 628
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 632
              },
              "start": 627,
              "end": 632
            },
            "directive": null,
            "start": 627,
            "end": 633
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 639
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 643
              },
              "start": 638,
              "end": 643
            },
            "directive": null,
            "start": 638,
            "end": 644
          }
        ],
        "start": 599,
        "end": 646
      },
      "expression": false,
      "start": 541,
      "end": 646
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 659
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 666
              },
              "typeArguments": null,
              "start": 663,
              "end": 666
            },
            "start": 661,
            "end": 666
          },
          "start": 660,
          "end": 666
        },
        {
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 676
              },
              "typeArguments": null,
              "start": 671,
              "end": 676
            },
            "start": 669,
            "end": 676
          },
          "start": 668,
          "end": 676
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 693
              },
              "typeArguments": null,
              "start": 681,
              "end": 693
            },
            "start": 679,
            "end": 693
          },
          "start": 678,
          "end": 693
        },
        {
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 704
              },
              "typeArguments": null,
              "start": 698,
              "end": 704
            },
            "start": 696,
            "end": 704
          },
          "start": 695,
          "end": 704
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 713
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 722
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 730
                },
                "optional": false,
                "computed": false,
                "start": 716,
                "end": 730
              },
              "start": 712,
              "end": 730
            },
            "directive": null,
            "start": 712,
            "end": 731
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 746
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 750
                },
                "optional": false,
                "computed": false,
                "start": 740,
                "end": 750
              },
              "start": 736,
              "end": 750
            },
            "directive": null,
            "start": 736,
            "end": 751
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 757
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 766
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 769
                },
                "optional": false,
                "computed": false,
                "start": 760,
                "end": 769
              },
              "start": 756,
              "end": 769
            },
            "directive": null,
            "start": 756,
            "end": 770
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 775,
                "end": 776
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 779,
                  "end": 785
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 786,
                  "end": 793
                },
                "optional": false,
                "computed": false,
                "start": 779,
                "end": 793
              },
              "start": 775,
              "end": 793
            },
            "directive": null,
            "start": 775,
            "end": 794
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 800
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 809
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 810,
                  "end": 813
                },
                "optional": false,
                "computed": false,
                "start": 803,
                "end": 813
              },
              "start": 799,
              "end": 813
            },
            "directive": null,
            "start": 799,
            "end": 814
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 820
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 823,
                  "end": 829
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 832
                },
                "optional": false,
                "computed": false,
                "start": 823,
                "end": 832
              },
              "start": 819,
              "end": 832
            },
            "directive": null,
            "start": 819,
            "end": 833
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 839
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 848
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 856
                },
                "optional": false,
                "computed": false,
                "start": 842,
                "end": 856
              },
              "start": 838,
              "end": 856
            },
            "directive": null,
            "start": 838,
            "end": 857
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 863
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 866,
                  "end": 872
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 876
                },
                "optional": false,
                "computed": false,
                "start": 866,
                "end": 876
              },
              "start": 862,
              "end": 876
            },
            "directive": null,
            "start": 862,
            "end": 877
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 883
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 892
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 895
                },
                "optional": false,
                "computed": false,
                "start": 886,
                "end": 895
              },
              "start": 882,
              "end": 895
            },
            "directive": null,
            "start": 882,
            "end": 896
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 901,
                "end": 902
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 911
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 912,
                  "end": 919
                },
                "optional": false,
                "computed": false,
                "start": 905,
                "end": 919
              },
              "start": 901,
              "end": 919
            },
            "directive": null,
            "start": 901,
            "end": 920
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 926
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 935
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 936,
                  "end": 939
                },
                "optional": false,
                "computed": false,
                "start": 929,
                "end": 939
              },
              "start": 925,
              "end": 939
            },
            "directive": null,
            "start": 925,
            "end": 940
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 945,
                "end": 946
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 949,
                  "end": 955
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 956,
                  "end": 958
                },
                "optional": false,
                "computed": false,
                "start": 949,
                "end": 958
              },
              "start": 945,
              "end": 958
            },
            "directive": null,
            "start": 945,
            "end": 959
          }
        ],
        "start": 706,
        "end": 961
      },
      "expression": false,
      "start": 648,
      "end": 961
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 972,
        "end": 974
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 978,
                "end": 981
              },
              "typeArguments": null,
              "start": 978,
              "end": 981
            },
            "start": 976,
            "end": 981
          },
          "start": 975,
          "end": 981
        },
        {
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 986,
                "end": 991
              },
              "typeArguments": null,
              "start": 986,
              "end": 991
            },
            "start": 984,
            "end": 991
          },
          "start": 983,
          "end": 991
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 996,
                "end": 1008
              },
              "typeArguments": null,
              "start": 996,
              "end": 1008
            },
            "start": 994,
            "end": 1008
          },
          "start": 993,
          "end": 1008
        },
        {
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1013,
                "end": 1019
              },
              "typeArguments": null,
              "start": 1013,
              "end": 1019
            },
            "start": 1011,
            "end": 1019
          },
          "start": 1010,
          "end": 1019
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1027,
                "end": 1028
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1033,
                  "end": 1039
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1040,
                  "end": 1047
                },
                "optional": false,
                "computed": false,
                "start": 1033,
                "end": 1047
              },
              "start": 1027,
              "end": 1047
            },
            "directive": null,
            "start": 1027,
            "end": 1048
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1053,
                "end": 1054
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1059,
                  "end": 1065
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1066,
                  "end": 1069
                },
                "optional": false,
                "computed": false,
                "start": 1059,
                "end": 1069
              },
              "start": 1053,
              "end": 1069
            },
            "directive": null,
            "start": 1053,
            "end": 1070
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1075,
                "end": 1076
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1087
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1088,
                  "end": 1090
                },
                "optional": false,
                "computed": false,
                "start": 1081,
                "end": 1090
              },
              "start": 1075,
              "end": 1090
            },
            "directive": null,
            "start": 1075,
            "end": 1091
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1096,
                "end": 1097
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1108
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1109,
                  "end": 1116
                },
                "optional": false,
                "computed": false,
                "start": 1102,
                "end": 1116
              },
              "start": 1096,
              "end": 1116
            },
            "directive": null,
            "start": 1096,
            "end": 1117
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1122,
                "end": 1123
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1134
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1135,
                  "end": 1138
                },
                "optional": false,
                "computed": false,
                "start": 1128,
                "end": 1138
              },
              "start": 1122,
              "end": 1138
            },
            "directive": null,
            "start": 1122,
            "end": 1139
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1144,
                "end": 1145
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1150,
                  "end": 1156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1159
                },
                "optional": false,
                "computed": false,
                "start": 1150,
                "end": 1159
              },
              "start": 1144,
              "end": 1159
            },
            "directive": null,
            "start": 1144,
            "end": 1160
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1166
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1177
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1185
                },
                "optional": false,
                "computed": false,
                "start": 1171,
                "end": 1185
              },
              "start": 1165,
              "end": 1185
            },
            "directive": null,
            "start": 1165,
            "end": 1186
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1191,
                "end": 1192
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1197,
                  "end": 1203
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1204,
                  "end": 1207
                },
                "optional": false,
                "computed": false,
                "start": 1197,
                "end": 1207
              },
              "start": 1191,
              "end": 1207
            },
            "directive": null,
            "start": 1191,
            "end": 1208
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1213,
                "end": 1214
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1219,
                  "end": 1225
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1226,
                  "end": 1228
                },
                "optional": false,
                "computed": false,
                "start": 1219,
                "end": 1228
              },
              "start": 1213,
              "end": 1228
            },
            "directive": null,
            "start": 1213,
            "end": 1229
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1235
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1240,
                  "end": 1246
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1247,
                  "end": 1254
                },
                "optional": false,
                "computed": false,
                "start": 1240,
                "end": 1254
              },
              "start": 1234,
              "end": 1254
            },
            "directive": null,
            "start": 1234,
            "end": 1255
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1260,
                "end": 1261
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1272
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1276
                },
                "optional": false,
                "computed": false,
                "start": 1266,
                "end": 1276
              },
              "start": 1260,
              "end": 1276
            },
            "directive": null,
            "start": 1260,
            "end": 1277
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1283
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1288,
                  "end": 1294
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1295,
                  "end": 1297
                },
                "optional": false,
                "computed": false,
                "start": 1288,
                "end": 1297
              },
              "start": 1282,
              "end": 1297
            },
            "directive": null,
            "start": 1282,
            "end": 1298
          }
        ],
        "start": 1021,
        "end": 1300
      },
      "expression": false,
      "start": 963,
      "end": 1300
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1311,
        "end": 1313
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 1317,
                "end": 1320
              },
              "typeArguments": null,
              "start": 1317,
              "end": 1320
            },
            "start": 1315,
            "end": 1320
          },
          "start": 1314,
          "end": 1320
        },
        {
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
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1325,
                "end": 1330
              },
              "typeArguments": null,
              "start": 1325,
              "end": 1330
            },
            "start": 1323,
            "end": 1330
          },
          "start": 1322,
          "end": 1330
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1335,
                "end": 1347
              },
              "typeArguments": null,
              "start": 1335,
              "end": 1347
            },
            "start": 1333,
            "end": 1347
          },
          "start": 1332,
          "end": 1347
        },
        {
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
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 1352,
                "end": 1358
              },
              "typeArguments": null,
              "start": 1352,
              "end": 1358
            },
            "start": 1350,
            "end": 1358
          },
          "start": 1349,
          "end": 1358
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1366,
                "end": 1367
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1372,
                "end": 1373
              },
              "start": 1366,
              "end": 1373
            },
            "directive": null,
            "start": 1366,
            "end": 1374
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1379,
                "end": 1380
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1385,
                "end": 1386
              },
              "start": 1379,
              "end": 1386
            },
            "directive": null,
            "start": 1379,
            "end": 1387
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1392,
                "end": 1393
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1398,
                "end": 1399
              },
              "start": 1392,
              "end": 1399
            },
            "directive": null,
            "start": 1392,
            "end": 1400
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1405,
                "end": 1406
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "start": 1405,
              "end": 1412
            },
            "directive": null,
            "start": 1405,
            "end": 1413
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1418,
                "end": 1419
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1424,
                "end": 1425
              },
              "start": 1418,
              "end": 1425
            },
            "directive": null,
            "start": 1418,
            "end": 1426
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1431,
                "end": 1432
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1437,
                "end": 1438
              },
              "start": 1431,
              "end": 1438
            },
            "directive": null,
            "start": 1431,
            "end": 1439
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1445
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1450,
                "end": 1451
              },
              "start": 1444,
              "end": 1451
            },
            "directive": null,
            "start": 1444,
            "end": 1452
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1457,
                "end": 1458
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1463,
                "end": 1464
              },
              "start": 1457,
              "end": 1464
            },
            "directive": null,
            "start": 1457,
            "end": 1465
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1470,
                "end": 1471
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1476,
                "end": 1477
              },
              "start": 1470,
              "end": 1477
            },
            "directive": null,
            "start": 1470,
            "end": 1478
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1483,
                "end": 1484
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1489,
                "end": 1490
              },
              "start": 1483,
              "end": 1490
            },
            "directive": null,
            "start": 1483,
            "end": 1491
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1496,
                "end": 1497
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1503
              },
              "start": 1496,
              "end": 1503
            },
            "directive": null,
            "start": 1496,
            "end": 1504
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1509,
                "end": 1510
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1515,
                "end": 1516
              },
              "start": 1509,
              "end": 1516
            },
            "directive": null,
            "start": 1509,
            "end": 1517
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1522,
                "end": 1523
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1528,
                "end": 1529
              },
              "start": 1522,
              "end": 1529
            },
            "directive": null,
            "start": 1522,
            "end": 1530
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1535,
                "end": 1536
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1541,
                "end": 1542
              },
              "start": 1535,
              "end": 1542
            },
            "directive": null,
            "start": 1535,
            "end": 1543
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1548,
                "end": 1549
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1555
              },
              "start": 1548,
              "end": 1555
            },
            "directive": null,
            "start": 1548,
            "end": 1556
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1561,
                "end": 1562
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1568
              },
              "start": 1561,
              "end": 1568
            },
            "directive": null,
            "start": 1561,
            "end": 1569
          }
        ],
        "start": 1360,
        "end": 1571
      },
      "expression": false,
      "start": 1302,
      "end": 1571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1582,
        "end": 1585
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 1589,
                "end": 1592
              },
              "typeArguments": null,
              "start": 1589,
              "end": 1592
            },
            "start": 1587,
            "end": 1592
          },
          "start": 1586,
          "end": 1592
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Yes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1595,
            "end": 1598
          },
          "typeArguments": null,
          "start": 1595,
          "end": 1598
        },
        "start": 1593,
        "end": 1598
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1613,
              "end": 1614
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1631,
                    "end": 1637
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1638,
                    "end": 1645
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1631,
                  "end": 1645
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1654,
                      "end": 1655
                    },
                    "start": 1647,
                    "end": 1656
                  }
                ],
                "start": 1626,
                "end": 1656
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1670,
                    "end": 1676
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1677,
                    "end": 1680
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1670,
                  "end": 1680
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1689,
                      "end": 1690
                    },
                    "start": 1682,
                    "end": 1691
                  }
                ],
                "start": 1665,
                "end": 1691
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1705,
                    "end": 1711
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1712,
                    "end": 1714
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1705,
                  "end": 1714
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1723,
                      "end": 1724
                    },
                    "start": 1716,
                    "end": 1725
                  }
                ],
                "start": 1700,
                "end": 1725
              }
            ],
            "start": 1605,
            "end": 1731
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1743,
              "end": 1744
            },
            "start": 1736,
            "end": 1745
          }
        ],
        "start": 1599,
        "end": 1747
      },
      "expression": false,
      "start": 1573,
      "end": 1747
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1758,
        "end": 1761
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1765,
                "end": 1770
              },
              "typeArguments": null,
              "start": 1765,
              "end": 1770
            },
            "start": 1763,
            "end": 1770
          },
          "start": 1762,
          "end": 1770
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "YesNo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1773,
            "end": 1778
          },
          "typeArguments": null,
          "start": 1773,
          "end": 1778
        },
        "start": 1771,
        "end": 1778
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1793,
              "end": 1794
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1811,
                    "end": 1817
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1818,
                    "end": 1825
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1811,
                  "end": 1825
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1834,
                      "end": 1835
                    },
                    "start": 1827,
                    "end": 1836
                  }
                ],
                "start": 1806,
                "end": 1836
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1850,
                    "end": 1856
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1857,
                    "end": 1860
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1850,
                  "end": 1860
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1869,
                      "end": 1870
                    },
                    "start": 1862,
                    "end": 1871
                  }
                ],
                "start": 1845,
                "end": 1871
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1885,
                    "end": 1891
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1892,
                    "end": 1894
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1885,
                  "end": 1894
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1903,
                      "end": 1904
                    },
                    "start": 1896,
                    "end": 1905
                  }
                ],
                "start": 1880,
                "end": 1905
              }
            ],
            "start": 1785,
            "end": 1911
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1923,
              "end": 1924
            },
            "start": 1916,
            "end": 1925
          }
        ],
        "start": 1779,
        "end": 1927
      },
      "expression": false,
      "start": 1749,
      "end": 1927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1938,
        "end": 1941
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1945,
                "end": 1957
              },
              "typeArguments": null,
              "start": 1945,
              "end": 1957
            },
            "start": 1943,
            "end": 1957
          },
          "start": 1942,
          "end": 1957
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnknownYesNo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1960,
            "end": 1972
          },
          "typeArguments": null,
          "start": 1960,
          "end": 1972
        },
        "start": 1958,
        "end": 1972
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1987,
              "end": 1988
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2005,
                    "end": 2011
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2012,
                    "end": 2019
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2005,
                  "end": 2019
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2029
                    },
                    "start": 2021,
                    "end": 2030
                  }
                ],
                "start": 2000,
                "end": 2030
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2044,
                    "end": 2050
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2051,
                    "end": 2054
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2044,
                  "end": 2054
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2063,
                      "end": 2064
                    },
                    "start": 2056,
                    "end": 2065
                  }
                ],
                "start": 2039,
                "end": 2065
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2079,
                    "end": 2085
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2086,
                    "end": 2088
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2079,
                  "end": 2088
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2097,
                      "end": 2098
                    },
                    "start": 2090,
                    "end": 2099
                  }
                ],
                "start": 2074,
                "end": 2099
              }
            ],
            "start": 1979,
            "end": 2105
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2117,
              "end": 2118
            },
            "start": 2110,
            "end": 2119
          }
        ],
        "start": 1973,
        "end": 2121
      },
      "expression": false,
      "start": 1929,
      "end": 2121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2132,
        "end": 2135
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2139,
                "end": 2145
              },
              "typeArguments": null,
              "start": 2139,
              "end": 2145
            },
            "start": 2137,
            "end": 2145
          },
          "start": 2136,
          "end": 2145
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Choice",
            "optional": false,
            "typeAnnotation": null,
            "start": 2148,
            "end": 2154
          },
          "typeArguments": null,
          "start": 2148,
          "end": 2154
        },
        "start": 2146,
        "end": 2154
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2169,
              "end": 2170
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2187,
                    "end": 2193
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Unknown",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2194,
                    "end": 2201
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2187,
                  "end": 2201
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2210,
                      "end": 2211
                    },
                    "start": 2203,
                    "end": 2212
                  }
                ],
                "start": 2182,
                "end": 2212
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2226,
                    "end": 2232
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2233,
                    "end": 2236
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2226,
                  "end": 2236
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2245,
                      "end": 2246
                    },
                    "start": 2238,
                    "end": 2247
                  }
                ],
                "start": 2221,
                "end": 2247
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2261,
                    "end": 2267
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2268,
                    "end": 2270
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2261,
                  "end": 2270
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2280
                    },
                    "start": 2272,
                    "end": 2281
                  }
                ],
                "start": 2256,
                "end": 2281
              }
            ],
            "start": 2161,
            "end": 2287
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2299,
              "end": 2300
            },
            "start": 2292,
            "end": 2301
          }
        ],
        "start": 2155,
        "end": 2303
      },
      "expression": false,
      "start": 2123,
      "end": 2303
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2303
}
```
