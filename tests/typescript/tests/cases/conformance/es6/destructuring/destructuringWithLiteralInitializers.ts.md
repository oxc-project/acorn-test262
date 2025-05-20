__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 1325,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 62,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 62,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 48,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 49,
          "end": 57,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 51,
              "end": 52,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 54,
              "end": 55,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 81,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 66,
            "end": 80,
            "properties": [
              {
                "type": "Property",
                "start": 68,
                "end": 72,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 71,
                  "end": 72,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 74,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 77,
                  "end": 78,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 65,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 154,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 151,
        "end": 154,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 137,
          "end": 149,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 139,
              "end": 140,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 142,
              "end": 147,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 142,
                "end": 147,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 146,
                  "end": 147,
                  "raw": "0",
                  "value": 0
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 155,
        "end": 167,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 158,
            "end": 166,
            "properties": [
              {
                "type": "Property",
                "start": 160,
                "end": 164,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 163,
                  "end": 164,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 188,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 169,
        "end": 187,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 172,
            "end": 186,
            "properties": [
              {
                "type": "Property",
                "start": 174,
                "end": 178,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 178,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 180,
                "end": 184,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 183,
                  "end": 184,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 169,
          "end": 171,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 235,
      "end": 268,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 265,
        "end": 268,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 246,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 247,
          "end": 263,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 249,
              "end": 254,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 249,
                "end": 254,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 253,
                  "end": 254,
                  "raw": "0",
                  "value": 0
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 256,
              "end": 261,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 256,
                "end": 261,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 260,
                  "end": 261,
                  "raw": "0",
                  "value": 0
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 276,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 275,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 272,
            "end": 274,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 271,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 290,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 277,
        "end": 289,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 280,
            "end": 288,
            "properties": [
              {
                "type": "Property",
                "start": 282,
                "end": 286,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 285,
                  "end": 286,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 277,
          "end": 279,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 291,
      "end": 304,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 291,
        "end": 303,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 294,
            "end": 302,
            "properties": [
              {
                "type": "Property",
                "start": 296,
                "end": 300,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 299,
                  "end": 300,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 291,
          "end": 293,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 324,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 305,
        "end": 323,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 308,
            "end": 322,
            "properties": [
              {
                "type": "Property",
                "start": 310,
                "end": 314,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 313,
                  "end": 314,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 316,
                "end": 320,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 319,
                  "end": 320,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 305,
          "end": 307,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 370,
      "end": 412,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 409,
        "end": 412,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 379,
        "end": 381,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 382,
          "end": 407,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 382,
            "end": 390,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 384,
                "end": 385,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 387,
                "end": 388,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 393,
            "end": 407,
            "properties": [
              {
                "type": "Property",
                "start": 395,
                "end": 399,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 396,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 398,
                  "end": 399,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 401,
                "end": 405,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 404,
                  "end": 405,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 418,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 413,
        "end": 417,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 413,
          "end": 415,
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 419,
      "end": 438,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 419,
        "end": 437,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 422,
            "end": 436,
            "properties": [
              {
                "type": "Property",
                "start": 424,
                "end": 428,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 427,
                  "end": 428,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 430,
                "end": 434,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 431,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 433,
                  "end": 434,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 419,
          "end": 421,
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 485,
      "end": 525,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 522,
        "end": 525,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 496,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 497,
          "end": 520,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 497,
            "end": 509,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 499,
                "end": 500,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 500,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 500,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 502,
                "end": 507,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 503,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 502,
                  "end": 507,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 503,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 506,
                    "end": 507,
                    "raw": "0",
                    "value": 0
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 512,
            "end": 520,
            "properties": [
              {
                "type": "Property",
                "start": 514,
                "end": 518,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 515,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 517,
                  "end": 518,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 526,
      "end": 531,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 526,
        "end": 530,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 526,
          "end": 528,
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 532,
      "end": 545,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 532,
        "end": 544,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 535,
            "end": 543,
            "properties": [
              {
                "type": "Property",
                "start": 537,
                "end": 541,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 538,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 540,
                  "end": 541,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 532,
          "end": 534,
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 546,
      "end": 565,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 546,
        "end": 564,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 549,
            "end": 563,
            "properties": [
              {
                "type": "Property",
                "start": 551,
                "end": 555,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 554,
                  "end": 555,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 557,
                "end": 561,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 560,
                  "end": 561,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 546,
          "end": 548,
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 613,
      "end": 651,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 648,
        "end": 651,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 624,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 625,
          "end": 646,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 625,
            "end": 641,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 627,
                "end": 632,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 628,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 627,
                  "end": 632,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 631,
                    "end": 632,
                    "raw": "0",
                    "value": 0
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 634,
                "end": 639,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 634,
                  "end": 639,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 635,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 638,
                    "end": 639,
                    "raw": "0",
                    "value": 0
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 644,
            "end": 646,
            "properties": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 657,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 652,
        "end": 656,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 652,
          "end": 654,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 658,
      "end": 665,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 658,
        "end": 664,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 661,
            "end": 663,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 658,
          "end": 660,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 666,
      "end": 679,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 666,
        "end": 678,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 669,
            "end": 677,
            "properties": [
              {
                "type": "Property",
                "start": 671,
                "end": 675,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 672,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 674,
                  "end": 675,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 666,
          "end": 668,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 680,
      "end": 693,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 680,
        "end": 692,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 683,
            "end": 691,
            "properties": [
              {
                "type": "Property",
                "start": 685,
                "end": 689,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 688,
                  "end": 689,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 680,
          "end": 682,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 694,
      "end": 713,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 694,
        "end": 712,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 697,
            "end": 711,
            "properties": [
              {
                "type": "Property",
                "start": 699,
                "end": 703,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 700,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 702,
                  "end": 703,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 705,
                "end": 709,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 708,
                  "end": 709,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 694,
          "end": 696,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 768,
      "end": 820,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 817,
        "end": 820,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 779,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 780,
          "end": 815,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 780,
            "end": 803,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 782,
                "end": 801,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 783,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 785,
                  "end": 801,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 787,
                      "end": 792,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 787,
                        "end": 788,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 787,
                        "end": 792,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 787,
                          "end": 788,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 791,
                          "end": 792,
                          "raw": "0",
                          "value": 0
                        },
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 794,
                      "end": 799,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 794,
                        "end": 795,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 794,
                        "end": 799,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 794,
                          "end": 795,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 798,
                          "end": 799,
                          "raw": "0",
                          "value": 0
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 806,
            "end": 815,
            "properties": [
              {
                "type": "Property",
                "start": 808,
                "end": 813,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 808,
                  "end": 809,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 811,
                  "end": 813,
                  "properties": []
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 821,
      "end": 826,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 821,
        "end": 825,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 821,
          "end": 823,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 827,
      "end": 841,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 827,
        "end": 840,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 830,
            "end": 839,
            "properties": [
              {
                "type": "Property",
                "start": 832,
                "end": 837,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 833,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 835,
                  "end": 837,
                  "properties": []
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 827,
          "end": 829,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 842,
      "end": 862,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 842,
        "end": 861,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 845,
            "end": 860,
            "properties": [
              {
                "type": "Property",
                "start": 847,
                "end": 858,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 847,
                  "end": 848,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 850,
                  "end": 858,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 852,
                      "end": 856,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 852,
                        "end": 853,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 855,
                        "end": 856,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 842,
          "end": 844,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 863,
      "end": 883,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 863,
        "end": 882,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 866,
            "end": 881,
            "properties": [
              {
                "type": "Property",
                "start": 868,
                "end": 879,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 868,
                  "end": 869,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 871,
                  "end": 879,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 873,
                      "end": 877,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 873,
                        "end": 874,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 876,
                        "end": 877,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 863,
          "end": 865,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 884,
      "end": 910,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 884,
        "end": 909,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 887,
            "end": 908,
            "properties": [
              {
                "type": "Property",
                "start": 889,
                "end": 906,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 890,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 892,
                  "end": 906,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 894,
                      "end": 898,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 894,
                        "end": 895,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 897,
                        "end": 898,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 900,
                      "end": 904,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 900,
                        "end": 901,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 903,
                        "end": 904,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 884,
          "end": 886,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 941,
      "end": 964,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 961,
        "end": 964,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 950,
        "end": 952,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 953,
          "end": 959,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 954,
              "end": 955,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 957,
              "end": 958,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 965,
      "end": 976,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 965,
        "end": 975,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 968,
            "end": 974,
            "elements": [
              {
                "type": "Literal",
                "start": 969,
                "end": 970,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 972,
                "end": 973,
                "raw": "1",
                "value": 1
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 965,
          "end": 967,
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1013,
      "end": 1044,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1041,
        "end": 1044,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1022,
        "end": 1024,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 1025,
          "end": 1039,
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 1026,
              "end": 1031,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 1026,
                "end": 1027,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "start": 1030,
                "end": 1031,
                "raw": "0",
                "value": 0
              },
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 1033,
              "end": 1038,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 1033,
                "end": 1034,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "start": 1037,
                "end": 1038,
                "raw": "0",
                "value": 0
              },
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1045,
      "end": 1056,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1045,
        "end": 1055,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1048,
            "end": 1054,
            "elements": [
              {
                "type": "Literal",
                "start": 1049,
                "end": 1050,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1052,
                "end": 1053,
                "raw": "1",
                "value": 1
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1045,
          "end": 1047,
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1094,
      "end": 1126,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1123,
        "end": 1126,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1103,
        "end": 1105,
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1106,
          "end": 1121,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 1106,
            "end": 1112,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1107,
                "end": 1108,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1110,
                "end": 1111,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 1115,
            "end": 1121,
            "elements": [
              {
                "type": "Literal",
                "start": 1116,
                "end": 1117,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 1119,
                "end": 1120,
                "raw": "0",
                "value": 0
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1127,
      "end": 1132,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1127,
        "end": 1131,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1127,
          "end": 1129,
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1133,
      "end": 1144,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1133,
        "end": 1143,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1136,
            "end": 1142,
            "elements": [
              {
                "type": "Literal",
                "start": 1137,
                "end": 1138,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1140,
                "end": 1141,
                "raw": "1",
                "value": 1
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1133,
          "end": 1135,
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1182,
      "end": 1215,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1212,
        "end": 1215,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1191,
        "end": 1193,
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1194,
          "end": 1210,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 1194,
            "end": 1204,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1195,
                "end": 1196,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 1198,
                "end": 1203,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1198,
                  "end": 1199,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 1202,
                  "end": 1203,
                  "raw": "0",
                  "value": 0
                },
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 1207,
            "end": 1210,
            "elements": [
              {
                "type": "Literal",
                "start": 1208,
                "end": 1209,
                "raw": "0",
                "value": 0
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1216,
      "end": 1221,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1216,
        "end": 1220,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1216,
          "end": 1218,
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1222,
      "end": 1233,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1222,
        "end": 1232,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1225,
            "end": 1231,
            "elements": [
              {
                "type": "Literal",
                "start": 1226,
                "end": 1227,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1229,
                "end": 1230,
                "raw": "1",
                "value": 1
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1222,
          "end": 1224,
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1271,
      "end": 1307,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1304,
        "end": 1307,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1280,
        "end": 1282,
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1283,
          "end": 1302,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 1283,
            "end": 1297,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 1284,
                "end": 1289,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1284,
                  "end": 1285,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 1288,
                  "end": 1289,
                  "raw": "0",
                  "value": 0
                },
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 1291,
                "end": 1296,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1291,
                  "end": 1292,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 1295,
                  "end": 1296,
                  "raw": "0",
                  "value": 0
                },
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 1300,
            "end": 1302,
            "elements": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1308,
      "end": 1313,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1308,
        "end": 1312,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1308,
          "end": 1310,
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1314,
      "end": 1325,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1314,
        "end": 1324,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1317,
            "end": 1323,
            "elements": [
              {
                "type": "Literal",
                "start": 1318,
                "end": 1319,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1321,
                "end": 1322,
                "raw": "1",
                "value": 1
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1314,
          "end": 1316,
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
