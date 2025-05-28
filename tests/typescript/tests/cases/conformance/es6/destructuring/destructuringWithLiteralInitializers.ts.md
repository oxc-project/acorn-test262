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
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 48,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 49,
          "end": 57,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 51,
              "end": 52,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 54,
              "end": 55,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 62,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 81,
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 65,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 71,
                  "end": 72,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 74,
                "end": 78,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 77,
                  "end": 78,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 137,
          "end": 149,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 139,
              "end": 140,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 142,
              "end": 147,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
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
                "right": {
                  "type": "Literal",
                  "start": 146,
                  "end": 147,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 151,
        "end": 154,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 168,
      "expression": {
        "type": "CallExpression",
        "start": 155,
        "end": 167,
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 163,
                  "end": 164,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 169,
        "end": 187,
        "callee": {
          "type": "Identifier",
          "start": 169,
          "end": 171,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 178,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 180,
                "end": 184,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 183,
                  "end": 184,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 235,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 246,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 247,
          "end": 263,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 249,
              "end": 254,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
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
                "right": {
                  "type": "Literal",
                  "start": 253,
                  "end": 254,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 256,
              "end": 261,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
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
                "right": {
                  "type": "Literal",
                  "start": 260,
                  "end": 261,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 265,
        "end": 268,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 276,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 275,
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 271,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 272,
            "end": 274,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 290,
      "expression": {
        "type": "CallExpression",
        "start": 277,
        "end": 289,
        "callee": {
          "type": "Identifier",
          "start": 277,
          "end": 279,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 285,
                  "end": 286,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 291,
      "end": 304,
      "expression": {
        "type": "CallExpression",
        "start": 291,
        "end": 303,
        "callee": {
          "type": "Identifier",
          "start": 291,
          "end": 293,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 299,
                  "end": 300,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 324,
      "expression": {
        "type": "CallExpression",
        "start": 305,
        "end": 323,
        "callee": {
          "type": "Identifier",
          "start": 305,
          "end": 307,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 313,
                  "end": 314,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 316,
                "end": 320,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 319,
                  "end": 320,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 370,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 379,
        "end": 381,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "properties": [
              {
                "type": "Property",
                "start": 384,
                "end": 385,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 385,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 387,
                "end": 388,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 393,
            "end": 407,
            "properties": [
              {
                "type": "Property",
                "start": 395,
                "end": 399,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 396,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 398,
                  "end": 399,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 401,
                "end": 405,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 404,
                  "end": 405,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 409,
        "end": 412,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 418,
      "expression": {
        "type": "CallExpression",
        "start": 413,
        "end": 417,
        "callee": {
          "type": "Identifier",
          "start": 413,
          "end": 415,
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 419,
      "end": 438,
      "expression": {
        "type": "CallExpression",
        "start": 419,
        "end": 437,
        "callee": {
          "type": "Identifier",
          "start": 419,
          "end": 421,
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 427,
                  "end": 428,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 430,
                "end": 434,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 431,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 433,
                  "end": 434,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 485,
      "end": 525,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 496,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "properties": [
              {
                "type": "Property",
                "start": 499,
                "end": 500,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 500,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 500,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 502,
                "end": 507,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 503,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 506,
                    "end": 507,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 512,
            "end": 520,
            "properties": [
              {
                "type": "Property",
                "start": 514,
                "end": 518,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 515,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 517,
                  "end": 518,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 522,
        "end": 525,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 526,
      "end": 531,
      "expression": {
        "type": "CallExpression",
        "start": 526,
        "end": 530,
        "callee": {
          "type": "Identifier",
          "start": 526,
          "end": 528,
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 532,
      "end": 545,
      "expression": {
        "type": "CallExpression",
        "start": 532,
        "end": 544,
        "callee": {
          "type": "Identifier",
          "start": 532,
          "end": 534,
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 538,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 540,
                  "end": 541,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 546,
      "end": 565,
      "expression": {
        "type": "CallExpression",
        "start": 546,
        "end": 564,
        "callee": {
          "type": "Identifier",
          "start": 546,
          "end": 548,
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 554,
                  "end": 555,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 557,
                "end": 561,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 560,
                  "end": 561,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 613,
      "end": 651,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 624,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "properties": [
              {
                "type": "Property",
                "start": 627,
                "end": 632,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 628,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 631,
                    "end": 632,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 634,
                "end": 639,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 638,
                    "end": 639,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 644,
            "end": 646,
            "properties": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 648,
        "end": 651,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 657,
      "expression": {
        "type": "CallExpression",
        "start": 652,
        "end": 656,
        "callee": {
          "type": "Identifier",
          "start": 652,
          "end": 654,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 658,
      "end": 665,
      "expression": {
        "type": "CallExpression",
        "start": 658,
        "end": 664,
        "callee": {
          "type": "Identifier",
          "start": 658,
          "end": 660,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 661,
            "end": 663,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 666,
      "end": 679,
      "expression": {
        "type": "CallExpression",
        "start": 666,
        "end": 678,
        "callee": {
          "type": "Identifier",
          "start": 666,
          "end": 668,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 672,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 674,
                  "end": 675,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 680,
      "end": 693,
      "expression": {
        "type": "CallExpression",
        "start": 680,
        "end": 692,
        "callee": {
          "type": "Identifier",
          "start": 680,
          "end": 682,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 688,
                  "end": 689,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 694,
      "end": 713,
      "expression": {
        "type": "CallExpression",
        "start": 694,
        "end": 712,
        "callee": {
          "type": "Identifier",
          "start": 694,
          "end": 696,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 700,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 702,
                  "end": 703,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 705,
                "end": 709,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 708,
                  "end": 709,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 768,
      "end": 820,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 779,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "properties": [
              {
                "type": "Property",
                "start": 782,
                "end": 801,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 783,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 785,
                  "end": 801,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 787,
                      "end": 792,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 787,
                        "end": 788,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                        "right": {
                          "type": "Literal",
                          "start": 791,
                          "end": 792,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 794,
                      "end": 799,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 794,
                        "end": 795,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                        "right": {
                          "type": "Literal",
                          "start": 798,
                          "end": 799,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 806,
            "end": 815,
            "properties": [
              {
                "type": "Property",
                "start": 808,
                "end": 813,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 808,
                  "end": 809,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 811,
                  "end": 813,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 817,
        "end": 820,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 821,
      "end": 826,
      "expression": {
        "type": "CallExpression",
        "start": 821,
        "end": 825,
        "callee": {
          "type": "Identifier",
          "start": 821,
          "end": 823,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 827,
      "end": 841,
      "expression": {
        "type": "CallExpression",
        "start": 827,
        "end": 840,
        "callee": {
          "type": "Identifier",
          "start": 827,
          "end": 829,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 833,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 835,
                  "end": 837,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 842,
      "end": 862,
      "expression": {
        "type": "CallExpression",
        "start": 842,
        "end": 861,
        "callee": {
          "type": "Identifier",
          "start": 842,
          "end": 844,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 847,
                  "end": 848,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 850,
                  "end": 858,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 852,
                      "end": 856,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 852,
                        "end": 853,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 855,
                        "end": 856,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 863,
      "end": 883,
      "expression": {
        "type": "CallExpression",
        "start": 863,
        "end": 882,
        "callee": {
          "type": "Identifier",
          "start": 863,
          "end": 865,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 868,
                  "end": 869,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 871,
                  "end": 879,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 873,
                      "end": 877,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 873,
                        "end": 874,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 876,
                        "end": 877,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 884,
      "end": 910,
      "expression": {
        "type": "CallExpression",
        "start": 884,
        "end": 909,
        "callee": {
          "type": "Identifier",
          "start": 884,
          "end": 886,
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 890,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 892,
                  "end": 906,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 894,
                      "end": 898,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 894,
                        "end": 895,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 897,
                        "end": 898,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 900,
                      "end": 904,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 900,
                        "end": 901,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 903,
                        "end": 904,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 941,
      "end": 964,
      "id": {
        "type": "Identifier",
        "start": 950,
        "end": 952,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 961,
        "end": 964,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 965,
      "end": 976,
      "expression": {
        "type": "CallExpression",
        "start": 965,
        "end": 975,
        "callee": {
          "type": "Identifier",
          "start": 965,
          "end": 967,
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 972,
                "end": 973,
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1013,
      "end": 1044,
      "id": {
        "type": "Identifier",
        "start": 1022,
        "end": 1024,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "right": {
                "type": "Literal",
                "start": 1030,
                "end": 1031,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
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
              "right": {
                "type": "Literal",
                "start": 1037,
                "end": 1038,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1041,
        "end": 1044,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1045,
      "end": 1056,
      "expression": {
        "type": "CallExpression",
        "start": 1045,
        "end": 1055,
        "callee": {
          "type": "Identifier",
          "start": 1045,
          "end": 1047,
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1052,
                "end": 1053,
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1094,
      "end": 1126,
      "id": {
        "type": "Identifier",
        "start": 1103,
        "end": 1105,
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
          "right": {
            "type": "ArrayExpression",
            "start": 1115,
            "end": 1121,
            "elements": [
              {
                "type": "Literal",
                "start": 1116,
                "end": 1117,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 1119,
                "end": 1120,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1123,
        "end": 1126,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1127,
      "end": 1132,
      "expression": {
        "type": "CallExpression",
        "start": 1127,
        "end": 1131,
        "callee": {
          "type": "Identifier",
          "start": 1127,
          "end": 1129,
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1133,
      "end": 1144,
      "expression": {
        "type": "CallExpression",
        "start": 1133,
        "end": 1143,
        "callee": {
          "type": "Identifier",
          "start": 1133,
          "end": 1135,
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1140,
                "end": 1141,
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1182,
      "end": 1215,
      "id": {
        "type": "Identifier",
        "start": 1191,
        "end": 1193,
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "right": {
                  "type": "Literal",
                  "start": 1202,
                  "end": 1203,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 1207,
            "end": 1210,
            "elements": [
              {
                "type": "Literal",
                "start": 1208,
                "end": 1209,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1212,
        "end": 1215,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1216,
      "end": 1221,
      "expression": {
        "type": "CallExpression",
        "start": 1216,
        "end": 1220,
        "callee": {
          "type": "Identifier",
          "start": 1216,
          "end": 1218,
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1222,
      "end": 1233,
      "expression": {
        "type": "CallExpression",
        "start": 1222,
        "end": 1232,
        "callee": {
          "type": "Identifier",
          "start": 1222,
          "end": 1224,
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1229,
                "end": 1230,
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1271,
      "end": 1307,
      "id": {
        "type": "Identifier",
        "start": 1280,
        "end": 1282,
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "right": {
                  "type": "Literal",
                  "start": 1288,
                  "end": 1289,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
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
                "right": {
                  "type": "Literal",
                  "start": 1295,
                  "end": 1296,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 1300,
            "end": 1302,
            "elements": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1304,
        "end": 1307,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1308,
      "end": 1313,
      "expression": {
        "type": "CallExpression",
        "start": 1308,
        "end": 1312,
        "callee": {
          "type": "Identifier",
          "start": 1308,
          "end": 1310,
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1314,
      "end": 1325,
      "expression": {
        "type": "CallExpression",
        "start": 1314,
        "end": 1324,
        "callee": {
          "type": "Identifier",
          "start": 1314,
          "end": 1316,
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1321,
                "end": 1322,
                "value": 1,
                "raw": "1"
              }
            ]
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
