__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "itemNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 27,
                    "end": 36
                  }
                ],
                "start": 18,
                "end": 36
              },
              "start": 16,
              "end": 36
            },
            "start": 6,
            "end": 36
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 40,
                    "end": 41
                  }
                ],
                "start": 39,
                "end": 42
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLast",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 51
              },
              "optional": false,
              "computed": false,
              "start": 39,
              "end": 51
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 57
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 66
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 71,
                    "end": 72
                  },
                  "start": 62,
                  "end": 72
                },
                "id": null,
                "generator": false,
                "start": 52,
                "end": 72
              }
            ],
            "optional": false,
            "start": 39,
            "end": 73
          },
          "definite": false,
          "start": 6,
          "end": 73
        }
      ],
      "declare": false,
      "start": 0,
      "end": 74
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
            "name": "itemString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 102,
                    "end": 111
                  }
                ],
                "start": 93,
                "end": 111
              },
              "start": 91,
              "end": 111
            },
            "start": 81,
            "end": 111
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 115,
                    "end": 123
                  }
                ],
                "start": 114,
                "end": 124
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLast",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 133
              },
              "optional": false,
              "computed": false,
              "start": 114,
              "end": 133
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 139
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 148
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 153,
                    "end": 161
                  },
                  "start": 144,
                  "end": 161
                },
                "id": null,
                "generator": false,
                "start": 134,
                "end": 161
              }
            ],
            "optional": false,
            "start": 114,
            "end": 162
          },
          "definite": false,
          "start": 81,
          "end": 162
        }
      ],
      "declare": false,
      "start": 75,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [],
            "start": 164,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 188
          },
          "optional": false,
          "computed": false,
          "start": 164,
          "end": 188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 194
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 203
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 208,
                "end": 209
              },
              "start": 199,
              "end": 209
            },
            "id": null,
            "generator": false,
            "start": 189,
            "end": 209
          }
        ],
        "optional": false,
        "start": 164,
        "end": 210
      },
      "directive": null,
      "start": 164,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 226
            },
            "typeArguments": null,
            "arguments": [],
            "start": 212,
            "end": 228
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 237
          },
          "optional": false,
          "computed": false,
          "start": 212,
          "end": 237
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 243
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 252
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 257,
                "end": 258
              },
              "start": 248,
              "end": 258
            },
            "id": null,
            "generator": false,
            "start": 238,
            "end": 258
          }
        ],
        "optional": false,
        "start": 212,
        "end": 259
      },
      "directive": null,
      "start": 212,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 282
            },
            "typeArguments": null,
            "arguments": [],
            "start": 261,
            "end": 284
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 293
          },
          "optional": false,
          "computed": false,
          "start": 261,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 299
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 308
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 313,
                "end": 314
              },
              "start": 304,
              "end": 314
            },
            "id": null,
            "generator": false,
            "start": 294,
            "end": 314
          }
        ],
        "optional": false,
        "start": 261,
        "end": 315
      },
      "directive": null,
      "start": 261,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 331
            },
            "typeArguments": null,
            "arguments": [],
            "start": 317,
            "end": 333
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 342
          },
          "optional": false,
          "computed": false,
          "start": 317,
          "end": 342
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 348
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 357
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 362,
                "end": 363
              },
              "start": 353,
              "end": 363
            },
            "id": null,
            "generator": false,
            "start": 343,
            "end": 363
          }
        ],
        "optional": false,
        "start": 317,
        "end": 364
      },
      "directive": null,
      "start": 317,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 381
            },
            "typeArguments": null,
            "arguments": [],
            "start": 366,
            "end": 383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 392
          },
          "optional": false,
          "computed": false,
          "start": 366,
          "end": 392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 398
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 407
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 412,
                "end": 413
              },
              "start": 403,
              "end": 413
            },
            "id": null,
            "generator": false,
            "start": 393,
            "end": 413
          }
        ],
        "optional": false,
        "start": 366,
        "end": 414
      },
      "directive": null,
      "start": 366,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 430
            },
            "typeArguments": null,
            "arguments": [],
            "start": 416,
            "end": 432
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 441
          },
          "optional": false,
          "computed": false,
          "start": 416,
          "end": 441
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 447
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 456
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 461,
                "end": 462
              },
              "start": 452,
              "end": 462
            },
            "id": null,
            "generator": false,
            "start": 442,
            "end": 462
          }
        ],
        "optional": false,
        "start": 416,
        "end": 463
      },
      "directive": null,
      "start": 416,
      "end": 464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 480
            },
            "typeArguments": null,
            "arguments": [],
            "start": 465,
            "end": 482
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 491
          },
          "optional": false,
          "computed": false,
          "start": 465,
          "end": 491
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 497
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 506
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 511,
                "end": 512
              },
              "start": 502,
              "end": 512
            },
            "id": null,
            "generator": false,
            "start": 492,
            "end": 512
          }
        ],
        "optional": false,
        "start": 465,
        "end": 513
      },
      "directive": null,
      "start": 465,
      "end": 514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 531
            },
            "typeArguments": null,
            "arguments": [],
            "start": 515,
            "end": 533
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 542
          },
          "optional": false,
          "computed": false,
          "start": 515,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 548
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 557
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 562,
                "end": 563
              },
              "start": 553,
              "end": 563
            },
            "id": null,
            "generator": false,
            "start": 543,
            "end": 563
          }
        ],
        "optional": false,
        "start": 515,
        "end": 564
      },
      "directive": null,
      "start": 515,
      "end": 565
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 582
            },
            "typeArguments": null,
            "arguments": [],
            "start": 566,
            "end": 584
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 593
          },
          "optional": false,
          "computed": false,
          "start": 566,
          "end": 593
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 599
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 608
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 613,
                "end": 614
              },
              "start": 604,
              "end": 614
            },
            "id": null,
            "generator": false,
            "start": 594,
            "end": 614
          }
        ],
        "optional": false,
        "start": 566,
        "end": 615
      },
      "directive": null,
      "start": 566,
      "end": 616
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [],
            "start": 617,
            "end": 636
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 637,
            "end": 645
          },
          "optional": false,
          "computed": false,
          "start": 617,
          "end": 645
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 651
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 660
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 671
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 672,
                    "end": 673
                  }
                ],
                "optional": false,
                "start": 665,
                "end": 674
              },
              "start": 656,
              "end": 674
            },
            "id": null,
            "generator": false,
            "start": 646,
            "end": 674
          }
        ],
        "optional": false,
        "start": 617,
        "end": 675
      },
      "directive": null,
      "start": 617,
      "end": 676
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 695
            },
            "typeArguments": null,
            "arguments": [],
            "start": 677,
            "end": 697
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 706
          },
          "optional": false,
          "computed": false,
          "start": 677,
          "end": 706
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 708,
                "end": 712
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 721
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 732
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 733,
                    "end": 734
                  }
                ],
                "optional": false,
                "start": 726,
                "end": 735
              },
              "start": 717,
              "end": 735
            },
            "id": null,
            "generator": false,
            "start": 707,
            "end": 735
          }
        ],
        "optional": false,
        "start": 677,
        "end": 736
      },
      "directive": null,
      "start": 677,
      "end": 737
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
            "name": "indexNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 758,
                "end": 764
              },
              "start": 756,
              "end": 764
            },
            "start": 745,
            "end": 764
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 768,
                    "end": 769
                  }
                ],
                "start": 767,
                "end": 770
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLastIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 784
              },
              "optional": false,
              "computed": false,
              "start": 767,
              "end": 784
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 790
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 799
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 804,
                    "end": 805
                  },
                  "start": 795,
                  "end": 805
                },
                "id": null,
                "generator": false,
                "start": 785,
                "end": 805
              }
            ],
            "optional": false,
            "start": 767,
            "end": 806
          },
          "definite": false,
          "start": 745,
          "end": 806
        }
      ],
      "declare": false,
      "start": 739,
      "end": 807
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
            "name": "indexString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 827,
                "end": 833
              },
              "start": 825,
              "end": 833
            },
            "start": 814,
            "end": 833
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 837,
                    "end": 845
                  }
                ],
                "start": 836,
                "end": 846
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLastIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 860
              },
              "optional": false,
              "computed": false,
              "start": 836,
              "end": 860
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
                    "end": 866
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 871,
                    "end": 875
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 880,
                    "end": 888
                  },
                  "start": 871,
                  "end": 888
                },
                "id": null,
                "generator": false,
                "start": 861,
                "end": 888
              }
            ],
            "optional": false,
            "start": 836,
            "end": 889
          },
          "definite": false,
          "start": 814,
          "end": 889
        }
      ],
      "declare": false,
      "start": 808,
      "end": 890
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 904
            },
            "typeArguments": null,
            "arguments": [],
            "start": 891,
            "end": 906
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 920
          },
          "optional": false,
          "computed": false,
          "start": 891,
          "end": 920
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 926
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 935
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 940,
                "end": 941
              },
              "start": 931,
              "end": 941
            },
            "id": null,
            "generator": false,
            "start": 921,
            "end": 941
          }
        ],
        "optional": false,
        "start": 891,
        "end": 942
      },
      "directive": null,
      "start": 891,
      "end": 943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 958
            },
            "typeArguments": null,
            "arguments": [],
            "start": 944,
            "end": 960
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 974
          },
          "optional": false,
          "computed": false,
          "start": 944,
          "end": 974
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 976,
                "end": 980
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 989
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 994,
                "end": 995
              },
              "start": 985,
              "end": 995
            },
            "id": null,
            "generator": false,
            "start": 975,
            "end": 995
          }
        ],
        "optional": false,
        "start": 944,
        "end": 996
      },
      "directive": null,
      "start": 944,
      "end": 997
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1019
            },
            "typeArguments": null,
            "arguments": [],
            "start": 998,
            "end": 1021
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1022,
            "end": 1035
          },
          "optional": false,
          "computed": false,
          "start": 998,
          "end": 1035
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1041
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1050
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1055,
                "end": 1056
              },
              "start": 1046,
              "end": 1056
            },
            "id": null,
            "generator": false,
            "start": 1036,
            "end": 1056
          }
        ],
        "optional": false,
        "start": 998,
        "end": 1057
      },
      "directive": null,
      "start": 998,
      "end": 1058
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1073
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1059,
            "end": 1075
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1089
          },
          "optional": false,
          "computed": false,
          "start": 1059,
          "end": 1089
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1091,
                "end": 1095
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1104
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1109,
                "end": 1110
              },
              "start": 1100,
              "end": 1110
            },
            "id": null,
            "generator": false,
            "start": 1090,
            "end": 1110
          }
        ],
        "optional": false,
        "start": 1059,
        "end": 1111
      },
      "directive": null,
      "start": 1059,
      "end": 1112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1117,
              "end": 1128
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1113,
            "end": 1130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1131,
            "end": 1144
          },
          "optional": false,
          "computed": false,
          "start": 1113,
          "end": 1144
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1146,
                "end": 1150
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1155,
                "end": 1159
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1164,
                "end": 1165
              },
              "start": 1155,
              "end": 1165
            },
            "id": null,
            "generator": false,
            "start": 1145,
            "end": 1165
          }
        ],
        "optional": false,
        "start": 1113,
        "end": 1166
      },
      "directive": null,
      "start": 1113,
      "end": 1167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1182
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1168,
            "end": 1184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1198
          },
          "optional": false,
          "computed": false,
          "start": 1168,
          "end": 1198
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1204
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1209,
                "end": 1213
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1218,
                "end": 1219
              },
              "start": 1209,
              "end": 1219
            },
            "id": null,
            "generator": false,
            "start": 1199,
            "end": 1219
          }
        ],
        "optional": false,
        "start": 1168,
        "end": 1220
      },
      "directive": null,
      "start": 1168,
      "end": 1221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1226,
              "end": 1237
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1222,
            "end": 1239
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1240,
            "end": 1253
          },
          "optional": false,
          "computed": false,
          "start": 1222,
          "end": 1253
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1259
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1264,
                "end": 1268
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1273,
                "end": 1274
              },
              "start": 1264,
              "end": 1274
            },
            "id": null,
            "generator": false,
            "start": 1254,
            "end": 1274
          }
        ],
        "optional": false,
        "start": 1222,
        "end": 1275
      },
      "directive": null,
      "start": 1222,
      "end": 1276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1293
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1277,
            "end": 1295
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1309
          },
          "optional": false,
          "computed": false,
          "start": 1277,
          "end": 1309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1315
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1324
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1329,
                "end": 1330
              },
              "start": 1320,
              "end": 1330
            },
            "id": null,
            "generator": false,
            "start": 1310,
            "end": 1330
          }
        ],
        "optional": false,
        "start": 1277,
        "end": 1331
      },
      "directive": null,
      "start": 1277,
      "end": 1332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1349
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1333,
            "end": 1351
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1352,
            "end": 1365
          },
          "optional": false,
          "computed": false,
          "start": 1333,
          "end": 1365
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1367,
                "end": 1371
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1380
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1385,
                "end": 1386
              },
              "start": 1376,
              "end": 1386
            },
            "id": null,
            "generator": false,
            "start": 1366,
            "end": 1386
          }
        ],
        "optional": false,
        "start": 1333,
        "end": 1387
      },
      "directive": null,
      "start": 1333,
      "end": 1388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1393,
              "end": 1406
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1389,
            "end": 1408
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1422
          },
          "optional": false,
          "computed": false,
          "start": 1389,
          "end": 1422
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1424,
                "end": 1428
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1433,
                "end": 1437
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1442,
                  "end": 1448
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1449,
                    "end": 1450
                  }
                ],
                "optional": false,
                "start": 1442,
                "end": 1451
              },
              "start": 1433,
              "end": 1451
            },
            "id": null,
            "generator": false,
            "start": 1423,
            "end": 1451
          }
        ],
        "optional": false,
        "start": 1389,
        "end": 1452
      },
      "directive": null,
      "start": 1389,
      "end": 1453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1458,
              "end": 1472
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1454,
            "end": 1474
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1475,
            "end": 1488
          },
          "optional": false,
          "computed": false,
          "start": 1454,
          "end": 1488
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1490,
                "end": 1494
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1503
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1514
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1515,
                    "end": 1516
                  }
                ],
                "optional": false,
                "start": 1508,
                "end": 1517
              },
              "start": 1499,
              "end": 1517
            },
            "id": null,
            "generator": false,
            "start": 1489,
            "end": 1517
          }
        ],
        "optional": false,
        "start": 1454,
        "end": 1518
      },
      "directive": null,
      "start": 1454,
      "end": 1519
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1519
}
```
