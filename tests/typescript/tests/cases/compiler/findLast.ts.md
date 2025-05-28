__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1519,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 74,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 36,
            "decorators": [],
            "name": "itemNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 36,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 36,
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
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 39,
            "end": 73,
            "callee": {
              "type": "MemberExpression",
              "start": 39,
              "end": 51,
              "object": {
                "type": "ArrayExpression",
                "start": 39,
                "end": 42,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 40,
                    "end": 41,
                    "value": 0,
                    "raw": "0"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 51,
                "decorators": [],
                "name": "findLast",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 52,
                "end": 72,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 53,
                    "end": 57,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 62,
                  "end": 72,
                  "left": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 66,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 71,
                    "end": 72,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 163,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 111,
            "decorators": [],
            "name": "itemString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 111,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 93,
                "end": 111,
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
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 162,
            "callee": {
              "type": "MemberExpression",
              "start": 114,
              "end": 133,
              "object": {
                "type": "ArrayExpression",
                "start": 114,
                "end": 124,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 115,
                    "end": 123,
                    "value": "string",
                    "raw": "\"string\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 125,
                "end": 133,
                "decorators": [],
                "name": "findLast",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 134,
                "end": 161,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 135,
                    "end": 139,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 144,
                  "end": 161,
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 148,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 153,
                    "end": 161,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 211,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 210,
        "callee": {
          "type": "MemberExpression",
          "start": 164,
          "end": 188,
          "object": {
            "type": "NewExpression",
            "start": 164,
            "end": 179,
            "callee": {
              "type": "Identifier",
              "start": 168,
              "end": 177,
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 188,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 189,
            "end": 209,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 199,
              "end": 209,
              "left": {
                "type": "Identifier",
                "start": 199,
                "end": 203,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 260,
      "expression": {
        "type": "CallExpression",
        "start": 212,
        "end": 259,
        "callee": {
          "type": "MemberExpression",
          "start": 212,
          "end": 237,
          "object": {
            "type": "NewExpression",
            "start": 212,
            "end": 228,
            "callee": {
              "type": "Identifier",
              "start": 216,
              "end": 226,
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 237,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 238,
            "end": 258,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 239,
                "end": 243,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 248,
              "end": 258,
              "left": {
                "type": "Identifier",
                "start": 248,
                "end": 252,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 257,
                "end": 258,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 316,
      "expression": {
        "type": "CallExpression",
        "start": 261,
        "end": 315,
        "callee": {
          "type": "MemberExpression",
          "start": 261,
          "end": 293,
          "object": {
            "type": "NewExpression",
            "start": 261,
            "end": 284,
            "callee": {
              "type": "Identifier",
              "start": 265,
              "end": 282,
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 285,
            "end": 293,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 294,
            "end": 314,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 295,
                "end": 299,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 304,
              "end": 314,
              "left": {
                "type": "Identifier",
                "start": 304,
                "end": 308,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 317,
      "end": 365,
      "expression": {
        "type": "CallExpression",
        "start": 317,
        "end": 364,
        "callee": {
          "type": "MemberExpression",
          "start": 317,
          "end": 342,
          "object": {
            "type": "NewExpression",
            "start": 317,
            "end": 333,
            "callee": {
              "type": "Identifier",
              "start": 321,
              "end": 331,
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 334,
            "end": 342,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 343,
            "end": 363,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 344,
                "end": 348,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 353,
              "end": 363,
              "left": {
                "type": "Identifier",
                "start": 353,
                "end": 357,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 362,
                "end": 363,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 366,
      "end": 415,
      "expression": {
        "type": "CallExpression",
        "start": 366,
        "end": 414,
        "callee": {
          "type": "MemberExpression",
          "start": 366,
          "end": 392,
          "object": {
            "type": "NewExpression",
            "start": 366,
            "end": 383,
            "callee": {
              "type": "Identifier",
              "start": 370,
              "end": 381,
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 384,
            "end": 392,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 393,
            "end": 413,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 394,
                "end": 398,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 403,
              "end": 413,
              "left": {
                "type": "Identifier",
                "start": 403,
                "end": 407,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 412,
                "end": 413,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 416,
      "end": 464,
      "expression": {
        "type": "CallExpression",
        "start": 416,
        "end": 463,
        "callee": {
          "type": "MemberExpression",
          "start": 416,
          "end": 441,
          "object": {
            "type": "NewExpression",
            "start": 416,
            "end": 432,
            "callee": {
              "type": "Identifier",
              "start": 420,
              "end": 430,
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 433,
            "end": 441,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 442,
            "end": 462,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 443,
                "end": 447,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 452,
              "end": 462,
              "left": {
                "type": "Identifier",
                "start": 452,
                "end": 456,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 461,
                "end": 462,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 514,
      "expression": {
        "type": "CallExpression",
        "start": 465,
        "end": 513,
        "callee": {
          "type": "MemberExpression",
          "start": 465,
          "end": 491,
          "object": {
            "type": "NewExpression",
            "start": 465,
            "end": 482,
            "callee": {
              "type": "Identifier",
              "start": 469,
              "end": 480,
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 483,
            "end": 491,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 492,
            "end": 512,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 493,
                "end": 497,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 502,
              "end": 512,
              "left": {
                "type": "Identifier",
                "start": 502,
                "end": 506,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 511,
                "end": 512,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 515,
      "end": 565,
      "expression": {
        "type": "CallExpression",
        "start": 515,
        "end": 564,
        "callee": {
          "type": "MemberExpression",
          "start": 515,
          "end": 542,
          "object": {
            "type": "NewExpression",
            "start": 515,
            "end": 533,
            "callee": {
              "type": "Identifier",
              "start": 519,
              "end": 531,
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 534,
            "end": 542,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 543,
            "end": 563,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 544,
                "end": 548,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 553,
              "end": 563,
              "left": {
                "type": "Identifier",
                "start": 553,
                "end": 557,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 562,
                "end": 563,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 566,
      "end": 616,
      "expression": {
        "type": "CallExpression",
        "start": 566,
        "end": 615,
        "callee": {
          "type": "MemberExpression",
          "start": 566,
          "end": 593,
          "object": {
            "type": "NewExpression",
            "start": 566,
            "end": 584,
            "callee": {
              "type": "Identifier",
              "start": 570,
              "end": 582,
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 585,
            "end": 593,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 594,
            "end": 614,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 595,
                "end": 599,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 604,
              "end": 614,
              "left": {
                "type": "Identifier",
                "start": 604,
                "end": 608,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 613,
                "end": 614,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 617,
      "end": 676,
      "expression": {
        "type": "CallExpression",
        "start": 617,
        "end": 675,
        "callee": {
          "type": "MemberExpression",
          "start": 617,
          "end": 645,
          "object": {
            "type": "NewExpression",
            "start": 617,
            "end": 636,
            "callee": {
              "type": "Identifier",
              "start": 621,
              "end": 634,
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 637,
            "end": 645,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 646,
            "end": 674,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 647,
                "end": 651,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 656,
              "end": 674,
              "left": {
                "type": "Identifier",
                "start": 656,
                "end": 660,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "start": 665,
                "end": 674,
                "callee": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 671,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 672,
                    "end": 673,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 677,
      "end": 737,
      "expression": {
        "type": "CallExpression",
        "start": 677,
        "end": 736,
        "callee": {
          "type": "MemberExpression",
          "start": 677,
          "end": 706,
          "object": {
            "type": "NewExpression",
            "start": 677,
            "end": 697,
            "callee": {
              "type": "Identifier",
              "start": 681,
              "end": 695,
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 698,
            "end": 706,
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 707,
            "end": 735,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 708,
                "end": 712,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 717,
              "end": 735,
              "left": {
                "type": "Identifier",
                "start": 717,
                "end": 721,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "start": 726,
                "end": 735,
                "callee": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 732,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 733,
                    "end": 734,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 739,
      "end": 807,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 806,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 764,
            "decorators": [],
            "name": "indexNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 756,
              "end": 764,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 758,
                "end": 764
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 767,
            "end": 806,
            "callee": {
              "type": "MemberExpression",
              "start": 767,
              "end": 784,
              "object": {
                "type": "ArrayExpression",
                "start": 767,
                "end": 770,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 768,
                    "end": 769,
                    "value": 0,
                    "raw": "0"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 771,
                "end": 784,
                "decorators": [],
                "name": "findLastIndex",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 785,
                "end": 805,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 786,
                    "end": 790,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 795,
                  "end": 805,
                  "left": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 799,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 804,
                    "end": 805,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 808,
      "end": 890,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 889,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 833,
            "decorators": [],
            "name": "indexString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 825,
              "end": 833,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 827,
                "end": 833
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 836,
            "end": 889,
            "callee": {
              "type": "MemberExpression",
              "start": 836,
              "end": 860,
              "object": {
                "type": "ArrayExpression",
                "start": 836,
                "end": 846,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 837,
                    "end": 845,
                    "value": "string",
                    "raw": "\"string\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 847,
                "end": 860,
                "decorators": [],
                "name": "findLastIndex",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 861,
                "end": 888,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 862,
                    "end": 866,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 871,
                  "end": 888,
                  "left": {
                    "type": "Identifier",
                    "start": 871,
                    "end": 875,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 880,
                    "end": 888,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 891,
      "end": 943,
      "expression": {
        "type": "CallExpression",
        "start": 891,
        "end": 942,
        "callee": {
          "type": "MemberExpression",
          "start": 891,
          "end": 920,
          "object": {
            "type": "NewExpression",
            "start": 891,
            "end": 906,
            "callee": {
              "type": "Identifier",
              "start": 895,
              "end": 904,
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 907,
            "end": 920,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 921,
            "end": 941,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 922,
                "end": 926,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 931,
              "end": 941,
              "left": {
                "type": "Identifier",
                "start": 931,
                "end": 935,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 940,
                "end": 941,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 944,
      "end": 997,
      "expression": {
        "type": "CallExpression",
        "start": 944,
        "end": 996,
        "callee": {
          "type": "MemberExpression",
          "start": 944,
          "end": 974,
          "object": {
            "type": "NewExpression",
            "start": 944,
            "end": 960,
            "callee": {
              "type": "Identifier",
              "start": 948,
              "end": 958,
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 961,
            "end": 974,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 975,
            "end": 995,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 976,
                "end": 980,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 985,
              "end": 995,
              "left": {
                "type": "Identifier",
                "start": 985,
                "end": 989,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 994,
                "end": 995,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 998,
      "end": 1058,
      "expression": {
        "type": "CallExpression",
        "start": 998,
        "end": 1057,
        "callee": {
          "type": "MemberExpression",
          "start": 998,
          "end": 1035,
          "object": {
            "type": "NewExpression",
            "start": 998,
            "end": 1021,
            "callee": {
              "type": "Identifier",
              "start": 1002,
              "end": 1019,
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1022,
            "end": 1035,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1036,
            "end": 1056,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1037,
                "end": 1041,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1046,
              "end": 1056,
              "left": {
                "type": "Identifier",
                "start": 1046,
                "end": 1050,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1055,
                "end": 1056,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1059,
      "end": 1112,
      "expression": {
        "type": "CallExpression",
        "start": 1059,
        "end": 1111,
        "callee": {
          "type": "MemberExpression",
          "start": 1059,
          "end": 1089,
          "object": {
            "type": "NewExpression",
            "start": 1059,
            "end": 1075,
            "callee": {
              "type": "Identifier",
              "start": 1063,
              "end": 1073,
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1076,
            "end": 1089,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1090,
            "end": 1110,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1091,
                "end": 1095,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1100,
              "end": 1110,
              "left": {
                "type": "Identifier",
                "start": 1100,
                "end": 1104,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1109,
                "end": 1110,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1113,
      "end": 1167,
      "expression": {
        "type": "CallExpression",
        "start": 1113,
        "end": 1166,
        "callee": {
          "type": "MemberExpression",
          "start": 1113,
          "end": 1144,
          "object": {
            "type": "NewExpression",
            "start": 1113,
            "end": 1130,
            "callee": {
              "type": "Identifier",
              "start": 1117,
              "end": 1128,
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1131,
            "end": 1144,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1145,
            "end": 1165,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1146,
                "end": 1150,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1155,
              "end": 1165,
              "left": {
                "type": "Identifier",
                "start": 1155,
                "end": 1159,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1164,
                "end": 1165,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1168,
      "end": 1221,
      "expression": {
        "type": "CallExpression",
        "start": 1168,
        "end": 1220,
        "callee": {
          "type": "MemberExpression",
          "start": 1168,
          "end": 1198,
          "object": {
            "type": "NewExpression",
            "start": 1168,
            "end": 1184,
            "callee": {
              "type": "Identifier",
              "start": 1172,
              "end": 1182,
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1185,
            "end": 1198,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1199,
            "end": 1219,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1200,
                "end": 1204,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1209,
              "end": 1219,
              "left": {
                "type": "Identifier",
                "start": 1209,
                "end": 1213,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1218,
                "end": 1219,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1222,
      "end": 1276,
      "expression": {
        "type": "CallExpression",
        "start": 1222,
        "end": 1275,
        "callee": {
          "type": "MemberExpression",
          "start": 1222,
          "end": 1253,
          "object": {
            "type": "NewExpression",
            "start": 1222,
            "end": 1239,
            "callee": {
              "type": "Identifier",
              "start": 1226,
              "end": 1237,
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1240,
            "end": 1253,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1254,
            "end": 1274,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1255,
                "end": 1259,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1264,
              "end": 1274,
              "left": {
                "type": "Identifier",
                "start": 1264,
                "end": 1268,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1273,
                "end": 1274,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1277,
      "end": 1332,
      "expression": {
        "type": "CallExpression",
        "start": 1277,
        "end": 1331,
        "callee": {
          "type": "MemberExpression",
          "start": 1277,
          "end": 1309,
          "object": {
            "type": "NewExpression",
            "start": 1277,
            "end": 1295,
            "callee": {
              "type": "Identifier",
              "start": 1281,
              "end": 1293,
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1296,
            "end": 1309,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1310,
            "end": 1330,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1311,
                "end": 1315,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1320,
              "end": 1330,
              "left": {
                "type": "Identifier",
                "start": 1320,
                "end": 1324,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1329,
                "end": 1330,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1333,
      "end": 1388,
      "expression": {
        "type": "CallExpression",
        "start": 1333,
        "end": 1387,
        "callee": {
          "type": "MemberExpression",
          "start": 1333,
          "end": 1365,
          "object": {
            "type": "NewExpression",
            "start": 1333,
            "end": 1351,
            "callee": {
              "type": "Identifier",
              "start": 1337,
              "end": 1349,
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1352,
            "end": 1365,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1366,
            "end": 1386,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1367,
                "end": 1371,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1376,
              "end": 1386,
              "left": {
                "type": "Identifier",
                "start": 1376,
                "end": 1380,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1385,
                "end": 1386,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1389,
      "end": 1453,
      "expression": {
        "type": "CallExpression",
        "start": 1389,
        "end": 1452,
        "callee": {
          "type": "MemberExpression",
          "start": 1389,
          "end": 1422,
          "object": {
            "type": "NewExpression",
            "start": 1389,
            "end": 1408,
            "callee": {
              "type": "Identifier",
              "start": 1393,
              "end": 1406,
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1409,
            "end": 1422,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1423,
            "end": 1451,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1424,
                "end": 1428,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1433,
              "end": 1451,
              "left": {
                "type": "Identifier",
                "start": 1433,
                "end": 1437,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "start": 1442,
                "end": 1451,
                "callee": {
                  "type": "Identifier",
                  "start": 1442,
                  "end": 1448,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1449,
                    "end": 1450,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1454,
      "end": 1519,
      "expression": {
        "type": "CallExpression",
        "start": 1454,
        "end": 1518,
        "callee": {
          "type": "MemberExpression",
          "start": 1454,
          "end": 1488,
          "object": {
            "type": "NewExpression",
            "start": 1454,
            "end": 1474,
            "callee": {
              "type": "Identifier",
              "start": 1458,
              "end": 1472,
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1475,
            "end": 1488,
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1489,
            "end": 1517,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1490,
                "end": 1494,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 1499,
              "end": 1517,
              "left": {
                "type": "Identifier",
                "start": 1499,
                "end": 1503,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "start": 1508,
                "end": 1517,
                "callee": {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1514,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1515,
                    "end": 1516,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "optional": false
              }
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
