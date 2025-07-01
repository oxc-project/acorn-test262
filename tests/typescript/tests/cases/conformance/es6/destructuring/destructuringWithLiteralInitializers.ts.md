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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 48
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 52
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 52
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 51,
              "end": 52
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 54,
              "end": 55
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 57
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 62
      },
      "expression": false,
      "start": 37,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 71,
                  "end": 72
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 68,
                "end": 72
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 77,
                  "end": 78
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 74,
                "end": 78
              }
            ],
            "start": 66,
            "end": 80
          }
        ],
        "optional": false,
        "start": 63,
        "end": 81
      },
      "directive": null,
      "start": 63,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 136
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 139,
              "end": 140
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 146,
                  "end": 147
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 147
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 142,
              "end": 147
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 149
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 151,
        "end": 154
      },
      "expression": false,
      "start": 125,
      "end": 154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 157
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 163,
                  "end": 164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 160,
                "end": 164
              }
            ],
            "start": 158,
            "end": 166
          }
        ],
        "optional": false,
        "start": 155,
        "end": 167
      },
      "directive": null,
      "start": 155,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 171
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 177,
                  "end": 178
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 174,
                "end": 178
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 183,
                  "end": 184
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 180,
                "end": 184
              }
            ],
            "start": 172,
            "end": 186
          }
        ],
        "optional": false,
        "start": 169,
        "end": 187
      },
      "directive": null,
      "start": 169,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 246
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 250
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 250
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 253,
                  "end": 254
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 254
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 249,
              "end": 254
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 260,
                  "end": 261
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 261
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 256,
              "end": 261
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 263
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 265,
        "end": 268
      },
      "expression": false,
      "start": 235,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 271
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 272,
            "end": 274
          }
        ],
        "optional": false,
        "start": 269,
        "end": 275
      },
      "directive": null,
      "start": 269,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 279
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 283
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 285,
                  "end": 286
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 282,
                "end": 286
              }
            ],
            "start": 280,
            "end": 288
          }
        ],
        "optional": false,
        "start": 277,
        "end": 289
      },
      "directive": null,
      "start": 277,
      "end": 290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 297
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 299,
                  "end": 300
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 296,
                "end": 300
              }
            ],
            "start": 294,
            "end": 302
          }
        ],
        "optional": false,
        "start": 291,
        "end": 303
      },
      "directive": null,
      "start": 291,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 307
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 313,
                  "end": 314
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 310,
                "end": 314
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 319,
                  "end": 320
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 316,
                "end": 320
              }
            ],
            "start": 308,
            "end": 322
          }
        ],
        "optional": false,
        "start": 305,
        "end": 323
      },
      "directive": null,
      "start": 305,
      "end": 324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 379,
        "end": 381
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 385
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 385
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 384,
                "end": 385
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 387,
                "end": 388
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 390
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 396
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 398,
                  "end": 399
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 395,
                "end": 399
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 402
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 404,
                  "end": 405
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 401,
                "end": 405
              }
            ],
            "start": 393,
            "end": 407
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 382,
          "end": 407
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 409,
        "end": 412
      },
      "expression": false,
      "start": 370,
      "end": 412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 413,
          "end": 415
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 413,
        "end": 417
      },
      "directive": null,
      "start": 413,
      "end": 418
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 419,
          "end": 421
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 427,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 424,
                "end": 428
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 431
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 433,
                  "end": 434
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 430,
                "end": 434
              }
            ],
            "start": 422,
            "end": 436
          }
        ],
        "optional": false,
        "start": 419,
        "end": 437
      },
      "directive": null,
      "start": 419,
      "end": 438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 496
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 500
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 500
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 499,
                "end": 500
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 503
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 503
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 506,
                    "end": 507
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 507
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 502,
                "end": 507
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 509
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 515
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 517,
                  "end": 518
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 514,
                "end": 518
              }
            ],
            "start": 512,
            "end": 520
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 520
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 522,
        "end": 525
      },
      "expression": false,
      "start": 485,
      "end": 525
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null,
          "start": 526,
          "end": 528
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 526,
        "end": 530
      },
      "directive": null,
      "start": 526,
      "end": 531
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null,
          "start": 532,
          "end": 534
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 538
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 540,
                  "end": 541
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 537,
                "end": 541
              }
            ],
            "start": 535,
            "end": 543
          }
        ],
        "optional": false,
        "start": 532,
        "end": 544
      },
      "directive": null,
      "start": 532,
      "end": 545
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null,
          "start": 546,
          "end": 548
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 552
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 554,
                  "end": 555
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 551,
                "end": 555
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 558
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 560,
                  "end": 561
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 557,
                "end": 561
              }
            ],
            "start": 549,
            "end": 563
          }
        ],
        "optional": false,
        "start": 546,
        "end": 564
      },
      "directive": null,
      "start": 546,
      "end": 565
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 624
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 627,
                  "end": 628
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 628
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 631,
                    "end": 632
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 627,
                  "end": 632
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 627,
                "end": 632
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 635
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 634,
                    "end": 635
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 638,
                    "end": 639
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 639
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 634,
                "end": 639
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 641
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 644,
            "end": 646
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 625,
          "end": 646
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 648,
        "end": 651
      },
      "expression": false,
      "start": 613,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 654
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 652,
        "end": 656
      },
      "directive": null,
      "start": 652,
      "end": 657
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 658,
          "end": 660
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 661,
            "end": 663
          }
        ],
        "optional": false,
        "start": 658,
        "end": 664
      },
      "directive": null,
      "start": 658,
      "end": 665
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 668
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 672
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 674,
                  "end": 675
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 671,
                "end": 675
              }
            ],
            "start": 669,
            "end": 677
          }
        ],
        "optional": false,
        "start": 666,
        "end": 678
      },
      "directive": null,
      "start": 666,
      "end": 679
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 680,
          "end": 682
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 686
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 688,
                  "end": 689
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 685,
                "end": 689
              }
            ],
            "start": 683,
            "end": 691
          }
        ],
        "optional": false,
        "start": 680,
        "end": 692
      },
      "directive": null,
      "start": 680,
      "end": 693
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 694,
          "end": 696
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 702,
                  "end": 703
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 699,
                "end": 703
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 706
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 708,
                  "end": 709
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 705,
                "end": 709
              }
            ],
            "start": 697,
            "end": 711
          }
        ],
        "optional": false,
        "start": 694,
        "end": 712
      },
      "directive": null,
      "start": 694,
      "end": 713
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 779
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
            "type": "ObjectPattern",
            "decorators": [],
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
                  "start": 782,
                  "end": 783
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 788
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 787,
                          "end": 788
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 791,
                          "end": 792
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 792
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 787,
                      "end": 792
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 795
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 794,
                          "end": 795
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 798,
                          "end": 799
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 799
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 794,
                      "end": 799
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 801
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 782,
                "end": 801
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 803
          },
          "right": {
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
                  "start": 808,
                  "end": 809
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 811,
                  "end": 813
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 808,
                "end": 813
              }
            ],
            "start": 806,
            "end": 815
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 780,
          "end": 815
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 817,
        "end": 820
      },
      "expression": false,
      "start": 768,
      "end": 820
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 821,
          "end": 823
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 821,
        "end": 825
      },
      "directive": null,
      "start": 821,
      "end": 826
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 827,
          "end": 829
        },
        "typeArguments": null,
        "arguments": [
          {
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
                  "start": 832,
                  "end": 833
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 835,
                  "end": 837
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 832,
                "end": 837
              }
            ],
            "start": 830,
            "end": 839
          }
        ],
        "optional": false,
        "start": 827,
        "end": 840
      },
      "directive": null,
      "start": 827,
      "end": 841
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 842,
          "end": 844
        },
        "typeArguments": null,
        "arguments": [
          {
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
                  "start": 847,
                  "end": 848
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 852,
                        "end": 853
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 855,
                        "end": 856
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 852,
                      "end": 856
                    }
                  ],
                  "start": 850,
                  "end": 858
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 847,
                "end": 858
              }
            ],
            "start": 845,
            "end": 860
          }
        ],
        "optional": false,
        "start": 842,
        "end": 861
      },
      "directive": null,
      "start": 842,
      "end": 862
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 865
        },
        "typeArguments": null,
        "arguments": [
          {
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
                  "start": 868,
                  "end": 869
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 873,
                        "end": 874
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 876,
                        "end": 877
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 873,
                      "end": 877
                    }
                  ],
                  "start": 871,
                  "end": 879
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 868,
                "end": 879
              }
            ],
            "start": 866,
            "end": 881
          }
        ],
        "optional": false,
        "start": 863,
        "end": 882
      },
      "directive": null,
      "start": 863,
      "end": 883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 884,
          "end": 886
        },
        "typeArguments": null,
        "arguments": [
          {
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
                  "start": 889,
                  "end": 890
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 894,
                        "end": 895
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 897,
                        "end": 898
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 894,
                      "end": 898
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 900,
                        "end": 901
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 903,
                        "end": 904
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 900,
                      "end": 904
                    }
                  ],
                  "start": 892,
                  "end": 906
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 889,
                "end": 906
              }
            ],
            "start": 887,
            "end": 908
          }
        ],
        "optional": false,
        "start": 884,
        "end": 909
      },
      "directive": null,
      "start": 884,
      "end": 910
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 950,
        "end": 952
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 955
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 958
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 953,
          "end": 959
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 961,
        "end": 964
      },
      "expression": false,
      "start": 941,
      "end": 964
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null,
          "start": 965,
          "end": 967
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 969,
                "end": 970
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 972,
                "end": 973
              }
            ],
            "start": 968,
            "end": 974
          }
        ],
        "optional": false,
        "start": 965,
        "end": 975
      },
      "directive": null,
      "start": 965,
      "end": 976
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1022,
        "end": 1024
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1027
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1030,
                "end": 1031
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1031
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1034
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1037,
                "end": 1038
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1038
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1025,
          "end": 1039
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1041,
        "end": 1044
      },
      "expression": false,
      "start": 1013,
      "end": 1044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1047
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1049,
                "end": 1050
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1052,
                "end": 1053
              }
            ],
            "start": 1048,
            "end": 1054
          }
        ],
        "optional": false,
        "start": 1045,
        "end": 1055
      },
      "directive": null,
      "start": 1045,
      "end": 1056
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1103,
        "end": 1105
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1107,
                "end": 1108
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1111
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1112
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1116,
                "end": 1117
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1119,
                "end": 1120
              }
            ],
            "start": 1115,
            "end": 1121
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1106,
          "end": 1121
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1123,
        "end": 1126
      },
      "expression": false,
      "start": 1094,
      "end": 1126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1127,
          "end": 1129
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1127,
        "end": 1131
      },
      "directive": null,
      "start": 1127,
      "end": 1132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1135
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1137,
                "end": 1138
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1140,
                "end": 1141
              }
            ],
            "start": 1136,
            "end": 1142
          }
        ],
        "optional": false,
        "start": 1133,
        "end": 1143
      },
      "directive": null,
      "start": 1133,
      "end": 1144
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1193
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1195,
                "end": 1196
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1198,
                  "end": 1199
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1202,
                  "end": 1203
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1198,
                "end": 1203
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1194,
            "end": 1204
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1208,
                "end": 1209
              }
            ],
            "start": 1207,
            "end": 1210
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1194,
          "end": 1210
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1212,
        "end": 1215
      },
      "expression": false,
      "start": 1182,
      "end": 1215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1216,
          "end": 1218
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1216,
        "end": 1220
      },
      "directive": null,
      "start": 1216,
      "end": 1221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1222,
          "end": 1224
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1226,
                "end": 1227
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1229,
                "end": 1230
              }
            ],
            "start": 1225,
            "end": 1231
          }
        ],
        "optional": false,
        "start": 1222,
        "end": 1232
      },
      "directive": null,
      "start": 1222,
      "end": 1233
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1282
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1284,
                  "end": 1285
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1288,
                  "end": 1289
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1284,
                "end": 1289
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1291,
                  "end": 1292
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1295,
                  "end": 1296
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1291,
                "end": 1296
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1283,
            "end": 1297
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1300,
            "end": 1302
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1283,
          "end": 1302
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1304,
        "end": 1307
      },
      "expression": false,
      "start": 1271,
      "end": 1307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1308,
          "end": 1310
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1308,
        "end": 1312
      },
      "directive": null,
      "start": 1308,
      "end": 1313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1314,
          "end": 1316
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1318,
                "end": 1319
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1321,
                "end": 1322
              }
            ],
            "start": 1317,
            "end": 1323
          }
        ],
        "optional": false,
        "start": 1314,
        "end": 1324
      },
      "directive": null,
      "start": 1314,
      "end": 1325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 1325
}
```
