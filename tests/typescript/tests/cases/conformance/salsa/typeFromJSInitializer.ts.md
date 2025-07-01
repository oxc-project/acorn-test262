__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 77,
                  "end": 81
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unknown",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 89
                },
                "optional": false,
                "computed": false,
                "start": 77,
                "end": 89
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 92,
                "end": 96
              },
              "start": 77,
              "end": 96
            },
            "directive": null,
            "start": 77,
            "end": 96
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 101,
                  "end": 105
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unknowable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 116
                },
                "optional": false,
                "computed": false,
                "start": 101,
                "end": 116
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 128
              },
              "start": 101,
              "end": 128
            },
            "directive": null,
            "start": 101,
            "end": 128
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 133,
                  "end": 137
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "empty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 143
                },
                "optional": false,
                "computed": false,
                "start": 133,
                "end": 143
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 146,
                "end": 148
              },
              "start": 133,
              "end": 148
            },
            "directive": null,
            "start": 133,
            "end": 148
          }
        ],
        "start": 14,
        "end": 150
      },
      "expression": false,
      "start": 0,
      "end": 150
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
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "typeArguments": null,
            "arguments": [],
            "start": 159,
            "end": 166
          },
          "definite": false,
          "start": 155,
          "end": 166
        }
      ],
      "declare": false,
      "start": 151,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 176
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 179,
          "end": 180
        },
        "start": 167,
        "end": 180
      },
      "directive": null,
      "start": 167,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 190
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 190
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 193,
          "end": 197
        },
        "start": 181,
        "end": 197
      },
      "directive": null,
      "start": 181,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 199
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 207
          },
          "optional": false,
          "computed": false,
          "start": 198,
          "end": 207
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 210,
          "end": 212
        },
        "start": 198,
        "end": 212
      },
      "directive": null,
      "start": 198,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 222
          },
          "optional": false,
          "computed": false,
          "start": 213,
          "end": 222
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 225,
          "end": 229
        },
        "start": 213,
        "end": 229
      },
      "directive": null,
      "start": 213,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknowable",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 242
          },
          "optional": false,
          "computed": false,
          "start": 230,
          "end": 242
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 245,
          "end": 246
        },
        "start": 230,
        "end": 246
      },
      "directive": null,
      "start": 230,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 248
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknowable",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 259
          },
          "optional": false,
          "computed": false,
          "start": 247,
          "end": 259
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 262,
          "end": 266
        },
        "start": 247,
        "end": 266
      },
      "directive": null,
      "start": 247,
      "end": 266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 268
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknowable",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 267,
          "end": 279
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 282,
          "end": 284
        },
        "start": 267,
        "end": 284
      },
      "directive": null,
      "start": 267,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 286
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknowable",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 297
          },
          "optional": false,
          "computed": false,
          "start": 285,
          "end": 297
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 300,
          "end": 304
        },
        "start": 285,
        "end": 304
      },
      "directive": null,
      "start": 285,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 306
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 312
            },
            "optional": false,
            "computed": false,
            "start": 305,
            "end": 312
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 317
          },
          "optional": false,
          "computed": false,
          "start": 305,
          "end": 317
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 318,
            "end": 319
          }
        ],
        "optional": false,
        "start": 305,
        "end": 320
      },
      "directive": null,
      "start": 305,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 328
            },
            "optional": false,
            "computed": false,
            "start": 321,
            "end": 328
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 333
          },
          "optional": false,
          "computed": false,
          "start": 321,
          "end": 333
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 334,
            "end": 338
          }
        ],
        "optional": false,
        "start": 321,
        "end": 339
      },
      "directive": null,
      "start": 321,
      "end": 339
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 347
            },
            "optional": false,
            "computed": false,
            "start": 340,
            "end": 347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 352
          },
          "optional": false,
          "computed": false,
          "start": 340,
          "end": 352
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 353,
            "end": 355
          }
        ],
        "optional": false,
        "start": 340,
        "end": 356
      },
      "directive": null,
      "start": 340,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 358
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 364
            },
            "optional": false,
            "computed": false,
            "start": 357,
            "end": 364
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 369
          },
          "optional": false,
          "computed": false,
          "start": 357,
          "end": 369
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'",
            "start": 370,
            "end": 374
          }
        ],
        "optional": false,
        "start": 357,
        "end": 375
      },
      "directive": null,
      "start": 357,
      "end": 375
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 416
          },
          "init": null,
          "definite": false,
          "start": 415,
          "end": 416
        }
      ],
      "declare": false,
      "start": 411,
      "end": 417
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 472,
        "end": 473
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 475
          },
          "right": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 478,
            "end": 482
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 474,
          "end": 482
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 485
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 489
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 484,
          "end": 489
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 492
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 495,
            "end": 497
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 497
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
                "start": 544,
                "end": 545
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 557
              },
              "start": 544,
              "end": 557
            },
            "directive": null,
            "start": 544,
            "end": 557
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
                "start": 562,
                "end": 563
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 566,
                "end": 570
              },
              "start": 562,
              "end": 570
            },
            "directive": null,
            "start": 562,
            "end": 570
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
                "start": 575,
                "end": 576
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 579,
                "end": 580
              },
              "start": 575,
              "end": 580
            },
            "directive": null,
            "start": 575,
            "end": 580
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
                "start": 585,
                "end": 586
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 589,
                "end": 593
              },
              "start": 585,
              "end": 593
            },
            "directive": null,
            "start": 585,
            "end": 593
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
                "start": 598,
                "end": 599
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 602,
                "end": 604
              },
              "start": 598,
              "end": 604
            },
            "directive": null,
            "start": 598,
            "end": 604
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
                "start": 609,
                "end": 610
              },
              "right": {
                "type": "Literal",
                "value": "ok",
                "raw": "'ok'",
                "start": 613,
                "end": 617
              },
              "start": 609,
              "end": 617
            },
            "directive": null,
            "start": 609,
            "end": 617
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
                "start": 670,
                "end": 671
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 674,
                "end": 675
              },
              "start": 670,
              "end": 675
            },
            "directive": null,
            "start": 670,
            "end": 675
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
                "start": 680,
                "end": 681
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 684,
                "end": 693
              },
              "start": 680,
              "end": 693
            },
            "directive": null,
            "start": 680,
            "end": 693
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
                "start": 698,
                "end": 699
              },
              "right": {
                "type": "Literal",
                "value": "error",
                "raw": "'error'",
                "start": 702,
                "end": 709
              },
              "start": 698,
              "end": 709
            },
            "directive": null,
            "start": 698,
            "end": 709
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 741
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 742,
                  "end": 746
                },
                "optional": false,
                "computed": false,
                "start": 740,
                "end": 746
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 747,
                  "end": 748
                }
              ],
              "optional": false,
              "start": 740,
              "end": 749
            },
            "directive": null,
            "start": 740,
            "end": 749
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 755
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 760
                },
                "optional": false,
                "computed": false,
                "start": 754,
                "end": 760
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 761,
                  "end": 765
                }
              ],
              "optional": false,
              "start": 754,
              "end": 766
            },
            "directive": null,
            "start": 754,
            "end": 766
          }
        ],
        "start": 499,
        "end": 768
      },
      "expression": false,
      "start": 463,
      "end": 768
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 818
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 830
          },
          "definite": false,
          "start": 817,
          "end": 830
        }
      ],
      "declare": false,
      "start": 813,
      "end": 831
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
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 836,
            "end": 837
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 840,
            "end": 842
          },
          "definite": false,
          "start": 836,
          "end": 842
        }
      ],
      "declare": false,
      "start": 832,
      "end": 843
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 844,
          "end": 845
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 848,
          "end": 857
        },
        "start": 844,
        "end": 857
      },
      "directive": null,
      "start": 844,
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
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 859
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 862,
          "end": 863
        },
        "start": 858,
        "end": 863
      },
      "directive": null,
      "start": 858,
      "end": 863
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 864,
          "end": 865
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 868,
          "end": 872
        },
        "start": 864,
        "end": 872
      },
      "directive": null,
      "start": 864,
      "end": 872
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 873,
          "end": 874
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 877,
          "end": 879
        },
        "start": 873,
        "end": 879
      },
      "directive": null,
      "start": 873,
      "end": 879
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 880,
          "end": 881
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "'ok'",
          "start": 884,
          "end": 888
        },
        "start": 880,
        "end": 888
      },
      "directive": null,
      "start": 880,
      "end": 888
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 891
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 896
          },
          "optional": false,
          "computed": false,
          "start": 890,
          "end": 896
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "ok",
            "raw": "'ok'",
            "start": 897,
            "end": 901
          }
        ],
        "optional": false,
        "start": 890,
        "end": 902
      },
      "directive": null,
      "start": 890,
      "end": 902
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
            "name": "isUndef",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 963
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 966,
                "end": 967
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 971,
                "end": 972
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 977,
                "end": 986
              },
              "start": 971,
              "end": 986
            },
            "id": null,
            "generator": false,
            "start": 966,
            "end": 986
          },
          "definite": false,
          "start": 956,
          "end": 986
        }
      ],
      "declare": false,
      "start": 950,
      "end": 987
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 994,
            "end": 995
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 999,
                "end": 1000
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1011
              }
            ],
            "start": 998,
            "end": 1012
          },
          "definite": false,
          "start": 994,
          "end": 1012
        }
      ],
      "declare": false,
      "start": 988,
      "end": 1013
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1046,
            "end": 1047
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1051
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1052,
                "end": 1058
              },
              "optional": false,
              "computed": false,
              "start": 1050,
              "end": 1058
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isUndef",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1066
              }
            ],
            "optional": false,
            "start": 1050,
            "end": 1067
          },
          "definite": false,
          "start": 1046,
          "end": 1067
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1068
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1068
}
```
