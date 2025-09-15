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
        "start": 34,
        "end": 35
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
                  "start": 46,
                  "end": 47
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 50,
                  "end": 51
                },
                "definite": false,
                "start": 46,
                "end": 51
              }
            ],
            "declare": false,
            "start": 42,
            "end": 52
          }
        ],
        "start": 36,
        "end": 54
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 24,
      "end": 54
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 69
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
              "start": 153,
              "end": 154
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "computed": false,
            "start": 153,
            "end": 158
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "optional": false,
              "computed": false,
              "start": 225,
              "end": 229
            },
            "computed": false,
            "start": 221,
            "end": 229
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 237
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 242
              },
              "property": {
                "type": "Literal",
                "value": "Z",
                "raw": "\"Z\"",
                "start": 243,
                "end": 246
              },
              "optional": false,
              "computed": true,
              "start": 240,
              "end": 247
            },
            "computed": false,
            "start": 235,
            "end": 247
          }
        ],
        "start": 70,
        "end": 249
      },
      "const": true,
      "declare": false,
      "start": 56,
      "end": 249
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 264
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
              "start": 271,
              "end": 272
            },
            "initializer": null,
            "computed": false,
            "start": 271,
            "end": 272
          }
        ],
        "start": 265,
        "end": 274
      },
      "const": true,
      "declare": false,
      "start": 251,
      "end": 274
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
            "start": 280,
            "end": 282
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 287
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 288,
              "end": 289
            },
            "optional": false,
            "computed": true,
            "start": 285,
            "end": 290
          },
          "definite": false,
          "start": 280,
          "end": 290
        }
      ],
      "declare": false,
      "start": 276,
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
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 299
          },
          "init": {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 302,
            "end": 305
          },
          "definite": false,
          "start": 295,
          "end": 305
        }
      ],
      "declare": false,
      "start": 291,
      "end": 306
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
            "start": 311,
            "end": 313
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 318
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 323
            },
            "optional": false,
            "computed": true,
            "start": 316,
            "end": 324
          },
          "definite": false,
          "start": 311,
          "end": 324
        }
      ],
      "declare": false,
      "start": 307,
      "end": 325
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
            "start": 330,
            "end": 332
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 337
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
                  "start": 338,
                  "end": 341
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 345,
                  "end": 347
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 345
                }
              ],
              "start": 338,
              "end": 347
            },
            "optional": false,
            "computed": true,
            "start": 335,
            "end": 348
          },
          "definite": false,
          "start": 330,
          "end": 348
        }
      ],
      "declare": false,
      "start": 326,
      "end": 349
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
            "start": 355,
            "end": 356
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 361
          },
          "definite": false,
          "start": 355,
          "end": 361
        }
      ],
      "declare": false,
      "start": 351,
      "end": 362
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
            "start": 367,
            "end": 368
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
                "start": 372,
                "end": 374
              }
            ],
            "start": 371,
            "end": 375
          },
          "definite": false,
          "start": 367,
          "end": 375
        }
      ],
      "declare": false,
      "start": 363,
      "end": 376
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 390
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
              "start": 394,
              "end": 397
            },
            "start": 392,
            "end": 397
          },
          "start": 391,
          "end": 397
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 400,
          "end": 404
        },
        "start": 398,
        "end": 404
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 405,
        "end": 408
      },
      "expression": false,
      "start": 378,
      "end": 408
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
          "start": 410,
          "end": 413
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 416
          }
        ],
        "optional": false,
        "start": 410,
        "end": 417
      },
      "directive": null,
      "start": 410,
      "end": 418
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NaNOrInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 444
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
              "start": 451,
              "end": 452
            },
            "initializer": {
              "type": "Literal",
              "value": 9007199254740992,
              "raw": "9007199254740992",
              "start": 455,
              "end": 471
            },
            "computed": false,
            "start": 451,
            "end": 471
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 478
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 482
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 486
              },
              "start": 481,
              "end": 486
            },
            "computed": false,
            "start": 477,
            "end": 486
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 493
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 497
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "start": 496,
              "end": 501
            },
            "computed": false,
            "start": 492,
            "end": 501
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 512
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 516
              },
              "start": 511,
              "end": 516
            },
            "computed": false,
            "start": 507,
            "end": 516
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 523
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 527
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 531
              },
              "start": 526,
              "end": 531
            },
            "computed": false,
            "start": 522,
            "end": 531
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "start": 541,
              "end": 546
            },
            "computed": false,
            "start": 537,
            "end": 546
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 565
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 568,
                "end": 569
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 572,
                "end": 573
              },
              "start": 568,
              "end": 573
            },
            "computed": false,
            "start": 564,
            "end": 573
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 592
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 595,
                "end": 596
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 599,
                "end": 600
              },
              "start": 595,
              "end": 600
            },
            "computed": false,
            "start": 591,
            "end": 600
          }
        ],
        "start": 445,
        "end": 610
      },
      "const": true,
      "declare": false,
      "start": 420,
      "end": 610
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 610
}
```
