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
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 12
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "initializer": null,
            "computed": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 13,
        "end": 22
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 44
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 47,
                  "end": 48
                },
                "definite": false,
                "start": 43,
                "end": 48
              }
            ],
            "declare": false,
            "start": 39,
            "end": 49
          }
        ],
        "start": 33,
        "end": 51
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 24,
      "end": 51
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "computed": false,
            "start": 150,
            "end": 155
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 219
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 224
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 226
              },
              "optional": false,
              "computed": false,
              "start": 222,
              "end": 226
            },
            "computed": false,
            "start": 218,
            "end": 226
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 234
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 239
              },
              "property": {
                "type": "Literal",
                "value": "Z",
                "raw": "\"Z\"",
                "start": 240,
                "end": 243
              },
              "optional": false,
              "computed": true,
              "start": 237,
              "end": 244
            },
            "computed": false,
            "start": 232,
            "end": 244
          }
        ],
        "start": 67,
        "end": 246
      },
      "const": true,
      "declare": false,
      "start": 53,
      "end": 246
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 261
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "initializer": null,
            "computed": false,
            "start": 268,
            "end": 269
          }
        ],
        "start": 262,
        "end": 271
      },
      "const": true,
      "declare": false,
      "start": 248,
      "end": 271
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
            "name": "y0",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 284
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 285,
              "end": 286
            },
            "optional": false,
            "computed": true,
            "start": 282,
            "end": 287
          },
          "definite": false,
          "start": 277,
          "end": 287
        }
      ],
      "declare": false,
      "start": 273,
      "end": 287
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
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 296
          },
          "init": {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 299,
            "end": 302
          },
          "definite": false,
          "start": 292,
          "end": 302
        }
      ],
      "declare": false,
      "start": 288,
      "end": 303
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 310
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 315
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 320
            },
            "optional": false,
            "computed": true,
            "start": 313,
            "end": 321
          },
          "definite": false,
          "start": 308,
          "end": 321
        }
      ],
      "declare": false,
      "start": 304,
      "end": 322
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 329
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 334
            },
            "property": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 335,
                  "end": 338
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 342,
                  "end": 344
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 342
                }
              ],
              "start": 335,
              "end": 344
            },
            "optional": false,
            "computed": true,
            "start": 332,
            "end": 345
          },
          "definite": false,
          "start": 327,
          "end": 345
        }
      ],
      "declare": false,
      "start": 323,
      "end": 346
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 353
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 358
          },
          "definite": false,
          "start": 352,
          "end": 358
        }
      ],
      "declare": false,
      "start": 348,
      "end": 359
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 365
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 371
              }
            ],
            "start": 368,
            "end": 372
          },
          "definite": false,
          "start": 364,
          "end": 372
        }
      ],
      "declare": false,
      "start": 360,
      "end": 373
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 387
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 391,
              "end": 394
            },
            "start": 389,
            "end": 394
          },
          "start": 388,
          "end": 394
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 397,
          "end": 401
        },
        "start": 395,
        "end": 401
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 402,
        "end": 405
      },
      "expression": false,
      "start": 375,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 410
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 413
          }
        ],
        "optional": false,
        "start": 407,
        "end": 414
      },
      "directive": null,
      "start": 407,
      "end": 415
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NaNOrInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 441
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
            },
            "initializer": {
              "type": "Literal",
              "value": 9007199254740992,
              "raw": "9007199254740992",
              "start": 452,
              "end": 468
            },
            "computed": false,
            "start": 448,
            "end": 468
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 475
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 479
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 483
              },
              "start": 478,
              "end": 483
            },
            "computed": false,
            "start": 474,
            "end": 483
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 494
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "start": 493,
              "end": 498
            },
            "computed": false,
            "start": 489,
            "end": 498
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 509
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 513
              },
              "start": 508,
              "end": 513
            },
            "computed": false,
            "start": 504,
            "end": 513
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 524
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 528
              },
              "start": 523,
              "end": 528
            },
            "computed": false,
            "start": 519,
            "end": 528
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 535
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 539
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 543
              },
              "start": 538,
              "end": 543
            },
            "computed": false,
            "start": 534,
            "end": 543
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 561,
              "end": 562
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 565,
                "end": 566
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 569,
                "end": 570
              },
              "start": 565,
              "end": 570
            },
            "computed": false,
            "start": 561,
            "end": 570
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 592,
                "end": 593
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 596,
                "end": 597
              },
              "start": 592,
              "end": 597
            },
            "computed": false,
            "start": 588,
            "end": 597
          }
        ],
        "start": 442,
        "end": 607
      },
      "const": true,
      "declare": false,
      "start": 417,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 607
}
```
