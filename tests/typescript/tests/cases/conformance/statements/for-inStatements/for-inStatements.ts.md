__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
              },
              "start": 11,
              "end": 19
            },
            "start": 4,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "aString",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 33
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 37,
        "end": 39
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 41,
        "end": 44
      },
      "start": 21,
      "end": 44
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
            "name": "anAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 55,
              "end": 60
            },
            "start": 50,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 60
        }
      ],
      "declare": false,
      "start": 46,
      "end": 61
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "anAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 72
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 76,
        "end": 78
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 80,
        "end": 83
      },
      "start": 62,
      "end": 83
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "init": null,
            "definite": false,
            "start": 94,
            "end": 95
          }
        ],
        "declare": false,
        "start": 90,
        "end": 95
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 99,
        "end": 101
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 103,
        "end": 106
      },
      "start": 85,
      "end": 106
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "init": null,
            "definite": false,
            "start": 116,
            "end": 117
          }
        ],
        "declare": false,
        "start": 112,
        "end": 117
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 121,
        "end": 123
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 125,
        "end": 128
      },
      "start": 107,
      "end": 128
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "init": null,
            "definite": false,
            "start": 138,
            "end": 139
          }
        ],
        "declare": false,
        "start": 134,
        "end": 139
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 144,
            "end": 145
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 147,
            "end": 148
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 150,
            "end": 151
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 153,
            "end": 154
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 156,
            "end": 157
          }
        ],
        "start": 143,
        "end": 158
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 160,
        "end": 163
      },
      "start": 129,
      "end": 163
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 180,
          "end": 183
        },
        "start": 178,
        "end": 183
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 184,
        "end": 187
      },
      "expression": false,
      "start": 165,
      "end": 187
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "init": null,
            "definite": false,
            "start": 197,
            "end": 198
          }
        ],
        "declare": false,
        "start": 193,
        "end": 198
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 202,
        "end": 206
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 208,
        "end": 211
      },
      "start": 188,
      "end": 211
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "init": null,
            "definite": false,
            "start": 222,
            "end": 223
          }
        ],
        "declare": false,
        "start": 218,
        "end": 223
      },
      "right": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 227,
        "end": 234
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 236,
        "end": 239
      },
      "start": 213,
      "end": 239
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
            },
            "init": null,
            "definite": false,
            "start": 249,
            "end": 250
          }
        ],
        "declare": false,
        "start": 245,
        "end": 250
      },
      "right": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 262
        },
        "typeArguments": null,
        "arguments": [],
        "start": 254,
        "end": 264
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 266,
        "end": 269
      },
      "start": 240,
      "end": 269
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 278,
                "end": 281
              },
              "start": 276,
              "end": 281
            },
            "start": 275,
            "end": 281
          },
          "init": null,
          "definite": false,
          "start": 275,
          "end": 281
        },
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
                "type": "TSAnyKeyword",
                "start": 286,
                "end": 289
              },
              "start": 284,
              "end": 289
            },
            "start": 283,
            "end": 289
          },
          "init": null,
          "definite": false,
          "start": 283,
          "end": 289
        },
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
                "type": "TSAnyKeyword",
                "start": 294,
                "end": 297
              },
              "start": 292,
              "end": 297
            },
            "start": 291,
            "end": 297
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 297
        }
      ],
      "declare": false,
      "start": 271,
      "end": 298
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
            },
            "init": null,
            "definite": false,
            "start": 309,
            "end": 310
          }
        ],
        "declare": false,
        "start": 305,
        "end": 310
      },
      "right": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 315
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 320
        },
        "start": 314,
        "end": 320
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 322,
        "end": 325
      },
      "start": 300,
      "end": 325
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "init": null,
            "definite": false,
            "start": 335,
            "end": 336
          }
        ],
        "declare": false,
        "start": 331,
        "end": 336
      },
      "right": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 341
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 345
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 349
        },
        "start": 340,
        "end": 349
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 351,
        "end": 354
      },
      "start": 326,
      "end": 354
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 365
            },
            "init": null,
            "definite": false,
            "start": 364,
            "end": 365
          }
        ],
        "declare": false,
        "start": 360,
        "end": 365
      },
      "right": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 369,
          "end": 371
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 374,
          "end": 375
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 379
        },
        "start": 369,
        "end": 379
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 381,
        "end": 384
      },
      "start": 355,
      "end": 384
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 395
            },
            "init": null,
            "definite": false,
            "start": 394,
            "end": 395
          }
        ],
        "declare": false,
        "start": 390,
        "end": 395
      },
      "right": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 399,
          "end": 401
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 405
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 409
        },
        "start": 399,
        "end": 409
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 411,
        "end": 414
      },
      "start": 385,
      "end": 414
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 425
            },
            "init": null,
            "definite": false,
            "start": 424,
            "end": 425
          }
        ],
        "declare": false,
        "start": 420,
        "end": 425
      },
      "right": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 429,
          "end": 431
        },
        "consequent": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 435
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 437
          },
          "optional": false,
          "computed": true,
          "start": 434,
          "end": 438
        },
        "alternate": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 442
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 444
          },
          "optional": false,
          "computed": true,
          "start": 441,
          "end": 445
        },
        "start": 429,
        "end": 445
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 447,
        "end": 450
      },
      "start": 415,
      "end": 450
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "init": null,
            "definite": false,
            "start": 460,
            "end": 461
          }
        ],
        "declare": false,
        "start": 456,
        "end": 461
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 465,
          "end": 466
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 467,
          "end": 468
        },
        "optional": false,
        "computed": true,
        "start": 465,
        "end": 469
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 471,
        "end": 474
      },
      "start": 451,
      "end": 474
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "init": null,
            "definite": false,
            "start": 485,
            "end": 486
          }
        ],
        "declare": false,
        "start": 481,
        "end": 486
      },
      "right": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 492,
              "end": 493
            }
          ],
          "start": 491,
          "end": 494
        },
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 499
                },
                "typeArguments": null,
                "start": 498,
                "end": 499
              },
              "start": 496,
              "end": 499
            },
            "start": 495,
            "end": 499
          }
        ],
        "returnType": null,
        "body": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 505
        },
        "id": null,
        "generator": false,
        "start": 491,
        "end": 505
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 508,
        "end": 511
      },
      "start": 476,
      "end": 511
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "init": null,
            "definite": false,
            "start": 521,
            "end": 522
          }
        ],
        "declare": false,
        "start": 517,
        "end": 522
      },
      "right": {
        "type": "FunctionExpression",
        "id": null,
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
                "start": 539,
                "end": 545
              },
              "start": 537,
              "end": 545
            },
            "start": 536,
            "end": 545
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 550,
                "end": 556
              },
              "start": 548,
              "end": 556
            },
            "start": 547,
            "end": 556
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 568
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "start": 567,
                "end": 572
              },
              "start": 560,
              "end": 572
            }
          ],
          "start": 558,
          "end": 574
        },
        "expression": false,
        "start": 526,
        "end": 574
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 576,
        "end": 579
      },
      "start": 512,
      "end": 579
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
        "start": 587,
        "end": 588
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "biz",
              "optional": false,
              "typeAnnotation": null,
              "start": 595,
              "end": 598
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 620,
                            "end": 621
                          },
                          "init": null,
                          "definite": false,
                          "start": 620,
                          "end": 621
                        }
                      ],
                      "declare": false,
                      "start": 616,
                      "end": 621
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 625,
                          "end": 629
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "biz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 630,
                          "end": 633
                        },
                        "optional": false,
                        "computed": false,
                        "start": 625,
                        "end": 633
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 625,
                      "end": 635
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 637,
                      "end": 640
                    },
                    "start": 611,
                    "end": 640
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 658,
                            "end": 659
                          },
                          "init": null,
                          "definite": false,
                          "start": 658,
                          "end": 659
                        }
                      ],
                      "declare": false,
                      "start": 654,
                      "end": 659
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 663,
                        "end": 667
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "biz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 668,
                        "end": 671
                      },
                      "optional": false,
                      "computed": false,
                      "start": 663,
                      "end": 671
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 673,
                      "end": 676
                    },
                    "start": 649,
                    "end": 676
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 694,
                            "end": 695
                          },
                          "init": null,
                          "definite": false,
                          "start": 694,
                          "end": 695
                        }
                      ],
                      "declare": false,
                      "start": 690,
                      "end": 695
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 699,
                      "end": 703
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 705,
                      "end": 708
                    },
                    "start": 685,
                    "end": 708
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 724,
                      "end": 728
                    },
                    "start": 717,
                    "end": 729
                  }
                ],
                "start": 601,
                "end": 735
              },
              "expression": false,
              "start": 598,
              "end": 735
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 595,
            "end": 735
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 751
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 773,
                            "end": 774
                          },
                          "init": null,
                          "definite": false,
                          "start": 773,
                          "end": 774
                        }
                      ],
                      "declare": false,
                      "start": 769,
                      "end": 774
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 778,
                      "end": 782
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 784,
                      "end": 787
                    },
                    "start": 764,
                    "end": 787
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 805,
                            "end": 806
                          },
                          "init": null,
                          "definite": false,
                          "start": 805,
                          "end": 806
                        }
                      ],
                      "declare": false,
                      "start": 801,
                      "end": 806
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 810,
                        "end": 814
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 815,
                        "end": 818
                      },
                      "optional": false,
                      "computed": false,
                      "start": 810,
                      "end": 818
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 820,
                      "end": 823
                    },
                    "start": 796,
                    "end": 823
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 841,
                            "end": 842
                          },
                          "init": null,
                          "definite": false,
                          "start": 841,
                          "end": 842
                        }
                      ],
                      "declare": false,
                      "start": 837,
                      "end": 842
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 846,
                          "end": 850
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 851,
                          "end": 854
                        },
                        "optional": false,
                        "computed": false,
                        "start": 846,
                        "end": 854
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 846,
                      "end": 856
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 858,
                      "end": 861
                    },
                    "start": 832,
                    "end": 861
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 878,
                      "end": 882
                    },
                    "start": 871,
                    "end": 883
                  }
                ],
                "start": 754,
                "end": 889
              },
              "expression": false,
              "start": 751,
              "end": 889
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 741,
            "end": 889
          }
        ],
        "start": 589,
        "end": 891
      },
      "abstract": false,
      "declare": false,
      "start": 581,
      "end": 891
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 900
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 910
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "boz",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 920
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 942,
                            "end": 943
                          },
                          "init": null,
                          "definite": false,
                          "start": 942,
                          "end": 943
                        }
                      ],
                      "declare": false,
                      "start": 938,
                      "end": 943
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 947,
                          "end": 951
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "biz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 952,
                          "end": 955
                        },
                        "optional": false,
                        "computed": false,
                        "start": 947,
                        "end": 955
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 947,
                      "end": 957
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 959,
                      "end": 962
                    },
                    "start": 933,
                    "end": 962
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 980,
                            "end": 981
                          },
                          "init": null,
                          "definite": false,
                          "start": 980,
                          "end": 981
                        }
                      ],
                      "declare": false,
                      "start": 976,
                      "end": 981
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 985,
                        "end": 989
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "biz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 993
                      },
                      "optional": false,
                      "computed": false,
                      "start": 985,
                      "end": 993
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 995,
                      "end": 998
                    },
                    "start": 971,
                    "end": 998
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1016,
                            "end": 1017
                          },
                          "init": null,
                          "definite": false,
                          "start": 1016,
                          "end": 1017
                        }
                      ],
                      "declare": false,
                      "start": 1012,
                      "end": 1017
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 1021,
                      "end": 1025
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1027,
                      "end": 1030
                    },
                    "start": 1007,
                    "end": 1030
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1049,
                            "end": 1050
                          },
                          "init": null,
                          "definite": false,
                          "start": 1049,
                          "end": 1050
                        }
                      ],
                      "declare": false,
                      "start": 1045,
                      "end": 1050
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 1054,
                        "end": 1059
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "biz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1060,
                        "end": 1063
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1054,
                      "end": 1063
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1065,
                      "end": 1068
                    },
                    "start": 1040,
                    "end": 1068
                  },
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1086,
                            "end": 1087
                          },
                          "init": null,
                          "definite": false,
                          "start": 1086,
                          "end": 1087
                        }
                      ],
                      "declare": false,
                      "start": 1082,
                      "end": 1087
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1091,
                          "end": 1096
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "biz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1097,
                          "end": 1100
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1091,
                        "end": 1100
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1091,
                      "end": 1102
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1104,
                      "end": 1107
                    },
                    "start": 1077,
                    "end": 1107
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1123,
                      "end": 1127
                    },
                    "start": 1116,
                    "end": 1128
                  }
                ],
                "start": 923,
                "end": 1134
              },
              "expression": false,
              "start": 920,
              "end": 1134
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 917,
            "end": 1134
          }
        ],
        "start": 911,
        "end": 1136
      },
      "abstract": false,
      "declare": false,
      "start": 893,
      "end": 1136
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1148,
        "end": 1149
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1156,
              "end": 1158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1160,
                "end": 1166
              },
              "start": 1158,
              "end": 1166
            },
            "accessibility": null,
            "static": false,
            "start": 1156,
            "end": 1167
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1178,
                    "end": 1184
                  },
                  "start": 1176,
                  "end": 1184
                },
                "start": 1173,
                "end": 1184
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1187,
                  "end": 1188
                },
                "typeArguments": null,
                "start": 1187,
                "end": 1188
              },
              "start": 1185,
              "end": 1188
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1172,
            "end": 1189
          }
        ],
        "start": 1150,
        "end": 1191
      },
      "declare": false,
      "start": 1138,
      "end": 1191
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1200
                },
                "typeArguments": null,
                "start": 1199,
                "end": 1200
              },
              "start": 1197,
              "end": 1200
            },
            "start": 1196,
            "end": 1200
          },
          "init": null,
          "definite": false,
          "start": 1196,
          "end": 1200
        }
      ],
      "declare": false,
      "start": 1192,
      "end": 1201
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1213
            },
            "init": null,
            "definite": false,
            "start": 1212,
            "end": 1213
          }
        ],
        "declare": false,
        "start": 1208,
        "end": 1213
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1217,
          "end": 1218
        },
        "property": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1219,
          "end": 1221
        },
        "optional": false,
        "computed": true,
        "start": 1217,
        "end": 1222
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1224,
        "end": 1227
      },
      "start": 1203,
      "end": 1227
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1241,
        "end": 1242
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 1262,
                "end": 1263
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1264,
                      "end": 1265
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1264,
                    "end": 1265
                  }
                ],
                "start": 1263,
                "end": 1266
              },
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1277,
                      "end": 1281
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1282,
                        "end": 1288
                      },
                      "start": 1281,
                      "end": 1288
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
                    "start": 1277,
                    "end": 1288
                  }
                ],
                "start": 1267,
                "end": 1294
              },
              "abstract": false,
              "declare": false,
              "start": 1256,
              "end": 1294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1249,
            "end": 1294
          }
        ],
        "start": 1243,
        "end": 1296
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1231,
      "end": 1296
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1307,
              "end": 1308
            },
            "init": null,
            "definite": false,
            "start": 1307,
            "end": 1308
          }
        ],
        "declare": false,
        "start": 1303,
        "end": 1308
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1312,
        "end": 1313
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1315,
        "end": 1318
      },
      "start": 1298,
      "end": 1318
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1329
            },
            "init": null,
            "definite": false,
            "start": 1328,
            "end": 1329
          }
        ],
        "declare": false,
        "start": 1324,
        "end": 1329
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 1333,
          "end": 1334
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 1335,
          "end": 1336
        },
        "optional": false,
        "computed": false,
        "start": 1333,
        "end": 1336
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1338,
        "end": 1341
      },
      "start": 1319,
      "end": 1341
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 1348,
        "end": 1353
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1359
            },
            "initializer": null,
            "computed": false,
            "start": 1356,
            "end": 1359
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1361,
              "end": 1365
            },
            "initializer": null,
            "computed": false,
            "start": 1361,
            "end": 1365
          }
        ],
        "start": 1354,
        "end": 1367
      },
      "const": false,
      "declare": false,
      "start": 1343,
      "end": 1367
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1379
            },
            "init": null,
            "definite": false,
            "start": 1378,
            "end": 1379
          }
        ],
        "declare": false,
        "start": 1374,
        "end": 1379
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 1383,
        "end": 1388
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1390,
        "end": 1393
      },
      "start": 1369,
      "end": 1393
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1403,
              "end": 1404
            },
            "init": null,
            "definite": false,
            "start": 1403,
            "end": 1404
          }
        ],
        "declare": false,
        "start": 1399,
        "end": 1404
      },
      "right": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Color",
          "optional": false,
          "typeAnnotation": null,
          "start": 1408,
          "end": 1413
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blue",
          "optional": false,
          "typeAnnotation": null,
          "start": 1414,
          "end": 1418
        },
        "optional": false,
        "computed": false,
        "start": 1408,
        "end": 1418
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1420,
        "end": 1423
      },
      "start": 1394,
      "end": 1423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1423
}
```
