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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        }
      ],
      "declare": true,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 63,
          "end": 66
        },
        "expression": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 69
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 70,
                "end": 71
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 68,
              "end": 71
            }
          ],
          "start": 67,
          "end": 72
        },
        "start": 62,
        "end": 72
      },
      "directive": null,
      "start": 61,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 79,
          "end": 82
        },
        "expression": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 84,
              "end": 85
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 86,
              "end": 87
            }
          ],
          "start": 83,
          "end": 89
        },
        "start": 78,
        "end": 89
      },
      "directive": null,
      "start": 77,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 95,
          "end": 98
        },
        "expression": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 99,
          "end": 107
        },
        "start": 94,
        "end": 107
      },
      "directive": null,
      "start": 93,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 113,
          "end": 116
        },
        "expression": {
          "type": "Literal",
          "value": 23,
          "raw": "23.0",
          "start": 117,
          "end": 121
        },
        "start": 112,
        "end": 121
      },
      "directive": null,
      "start": 111,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 127,
          "end": 130
        },
        "expression": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 131,
          "end": 132
        },
        "start": 126,
        "end": 132
      },
      "directive": null,
      "start": 125,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 138,
          "end": 141
        },
        "expression": {
          "type": "Literal",
          "value": 1,
          "raw": "1.",
          "start": 142,
          "end": 144
        },
        "start": 137,
        "end": 144
      },
      "directive": null,
      "start": 136,
      "end": 146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 149,
          "end": 152
        },
        "expression": {
          "type": "Literal",
          "value": 1,
          "raw": "1.0",
          "start": 153,
          "end": 156
        },
        "start": 148,
        "end": 156
      },
      "directive": null,
      "start": 147,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 161,
          "end": 164
        },
        "expression": {
          "type": "Literal",
          "value": 1.2e+35,
          "raw": "12e+34",
          "start": 165,
          "end": 171
        },
        "start": 160,
        "end": 171
      },
      "directive": null,
      "start": 159,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 176,
          "end": 179
        },
        "expression": {
          "type": "Literal",
          "value": 255,
          "raw": "0xff",
          "start": 180,
          "end": 184
        },
        "start": 175,
        "end": 184
      },
      "directive": null,
      "start": 174,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 189,
          "end": 192
        },
        "expression": {
          "type": "Literal",
          "value": null,
          "raw": "/regexp/g",
          "regex": {
            "pattern": "regexp",
            "flags": "g"
          },
          "start": 193,
          "end": 202
        },
        "start": 188,
        "end": 202
      },
      "directive": null,
      "start": 187,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 208,
          "end": 211
        },
        "expression": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 212,
          "end": 217
        },
        "start": 207,
        "end": 217
      },
      "directive": null,
      "start": 206,
      "end": 219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 223,
          "end": 226
        },
        "expression": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 227,
          "end": 231
        },
        "start": 222,
        "end": 231
      },
      "directive": null,
      "start": 221,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 237,
          "end": 240
        },
        "expression": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 241,
          "end": 245
        },
        "start": 236,
        "end": 245
      },
      "directive": null,
      "start": 235,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 277,
          "end": 280
        },
        "expression": {
          "type": "ThisExpression",
          "start": 281,
          "end": 285
        },
        "start": 276,
        "end": 285
      },
      "directive": null,
      "start": 275,
      "end": 287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 291,
          "end": 294
        },
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "ThisExpression",
            "start": 295,
            "end": 299
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 301
          },
          "optional": false,
          "computed": false,
          "start": 295,
          "end": 301
        },
        "start": 290,
        "end": 301
      },
      "directive": null,
      "start": 289,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 307,
          "end": 310
        },
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 313,
              "end": 316
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "start": 312,
            "end": 318
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 321
          },
          "optional": false,
          "computed": false,
          "start": 311,
          "end": 321
        },
        "start": 306,
        "end": 321
      },
      "directive": null,
      "start": 305,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 326,
          "end": 329
        },
        "expression": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 331,
            "end": 334
          },
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 336
          },
          "start": 330,
          "end": 336
        },
        "start": 325,
        "end": 336
      },
      "directive": null,
      "start": 324,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 341,
          "end": 344
        },
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 346
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 347,
            "end": 348
          },
          "optional": false,
          "computed": true,
          "start": 345,
          "end": 349
        },
        "start": 340,
        "end": 349
      },
      "directive": null,
      "start": 339,
      "end": 351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 354,
          "end": 357
        },
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 359
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 361
            },
            "optional": false,
            "computed": false,
            "start": 358,
            "end": 361
          },
          "property": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 362,
            "end": 365
          },
          "optional": false,
          "computed": true,
          "start": 358,
          "end": 366
        },
        "start": 353,
        "end": 366
      },
      "directive": null,
      "start": 352,
      "end": 368
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 371,
            "end": 374
          },
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 375,
            "end": 378
          },
          "start": 370,
          "end": 378
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 380,
          "end": 381
        },
        "optional": false,
        "computed": false,
        "start": 369,
        "end": 381
      },
      "directive": null,
      "start": 369,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 385,
            "end": 388
          },
          "expression": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 389,
            "end": 390
          },
          "start": 384,
          "end": 390
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 392,
          "end": 395
        },
        "optional": false,
        "computed": false,
        "start": 383,
        "end": 395
      },
      "directive": null,
      "start": 383,
      "end": 396
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 399,
            "end": 402
          },
          "expression": {
            "type": "Literal",
            "value": 1,
            "raw": "1.",
            "start": 403,
            "end": 405
          },
          "start": 398,
          "end": 405
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 410
        },
        "optional": false,
        "computed": false,
        "start": 397,
        "end": 410
      },
      "directive": null,
      "start": 397,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 414,
            "end": 417
          },
          "expression": {
            "type": "Literal",
            "value": 1,
            "raw": "1.0",
            "start": 418,
            "end": 421
          },
          "start": 413,
          "end": 421
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 426
        },
        "optional": false,
        "computed": false,
        "start": 412,
        "end": 426
      },
      "directive": null,
      "start": 412,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 430,
            "end": 433
          },
          "expression": {
            "type": "Literal",
            "value": 1.2e+35,
            "raw": "12e+34",
            "start": 434,
            "end": 440
          },
          "start": 429,
          "end": 440
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 445
        },
        "optional": false,
        "computed": false,
        "start": 428,
        "end": 445
      },
      "directive": null,
      "start": 428,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 449,
            "end": 452
          },
          "expression": {
            "type": "Literal",
            "value": 255,
            "raw": "0xff",
            "start": 453,
            "end": 457
          },
          "start": 448,
          "end": 457
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 462
        },
        "optional": false,
        "computed": false,
        "start": 447,
        "end": 462
      },
      "directive": null,
      "start": 447,
      "end": 463
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 478
          },
          "init": null,
          "definite": false,
          "start": 477,
          "end": 478
        }
      ],
      "declare": true,
      "start": 465,
      "end": 479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 522,
          "end": 525
        },
        "expression": {
          "type": "Literal",
          "value": 1,
          "raw": "1.0",
          "start": 527,
          "end": 530
        },
        "start": 521,
        "end": 531
      },
      "directive": null,
      "start": 520,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 537,
            "end": 540
          },
          "expression": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 546
            },
            "typeArguments": null,
            "arguments": [],
            "start": 541,
            "end": 546
          },
          "start": 536,
          "end": 546
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 551
        },
        "optional": false,
        "computed": false,
        "start": 535,
        "end": 551
      },
      "directive": null,
      "start": 535,
      "end": 552
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 556,
            "end": 559
          },
          "expression": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 568
            },
            "prefix": true,
            "start": 560,
            "end": 568
          },
          "start": 555,
          "end": 568
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 571
        },
        "optional": false,
        "computed": false,
        "start": 554,
        "end": 571
      },
      "directive": null,
      "start": 554,
      "end": 572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 576,
            "end": 579
          },
          "expression": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 582
            },
            "prefix": true,
            "start": 580,
            "end": 582
          },
          "start": 575,
          "end": 582
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 584,
          "end": 585
        },
        "optional": false,
        "computed": false,
        "start": 574,
        "end": 585
      },
      "directive": null,
      "start": 574,
      "end": 586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 594,
            "end": 597
          },
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 599
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 598,
            "end": 601
          },
          "start": 593,
          "end": 601
        },
        "typeArguments": null,
        "arguments": [],
        "start": 588,
        "end": 602
      },
      "directive": null,
      "start": 588,
      "end": 603
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "params": [
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tany",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 606,
                  "end": 610
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 606,
                "end": 610
              }
            ],
            "start": 605,
            "end": 611
          },
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 616,
            "end": 618
          },
          "id": null,
          "generator": false,
          "start": 605,
          "end": 618
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 604,
        "end": 621
      },
      "directive": null,
      "start": 604,
      "end": 622
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 625,
            "end": 628
          },
          "expression": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 641
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 644,
              "end": 647
            },
            "expression": false,
            "start": 629,
            "end": 647
          },
          "start": 624,
          "end": 647
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 623,
        "end": 650
      },
      "directive": null,
      "start": 623,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 654,
            "end": 657
          },
          "expression": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 659,
              "end": 665
            },
            "expression": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 667,
                "end": 670
              },
              "expression": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 673
                },
                "prefix": true,
                "start": 671,
                "end": 673
              },
              "start": 666,
              "end": 673
            },
            "start": 658,
            "end": 673
          },
          "start": 653,
          "end": 673
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 676
        },
        "optional": false,
        "computed": false,
        "start": 652,
        "end": 676
      },
      "directive": null,
      "start": 652,
      "end": 677
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 733,
            "end": 736
          },
          "expression": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 738,
              "end": 744
            },
            "expression": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 747,
                "end": 750
              },
              "expression": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 752,
                  "end": 753
                },
                "prefix": true,
                "start": 751,
                "end": 753
              },
              "start": 746,
              "end": 753
            },
            "start": 737,
            "end": 754
          },
          "start": 732,
          "end": 754
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 756,
          "end": 757
        },
        "optional": false,
        "computed": false,
        "start": 731,
        "end": 757
      },
      "directive": null,
      "start": 731,
      "end": 758
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 834,
          "end": 837
        },
        "expression": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 839,
          "end": 840
        },
        "start": 833,
        "end": 841
      },
      "directive": null,
      "start": 832,
      "end": 842
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 844
}
```
