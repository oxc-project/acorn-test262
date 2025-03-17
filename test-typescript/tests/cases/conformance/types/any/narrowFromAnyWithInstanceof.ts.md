__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 453,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 21,
      "end": 161,
      "test": {
        "type": "BinaryExpression",
        "start": 25,
        "end": 46,
        "left": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 38,
          "end": 46,
          "name": "Function",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 48,
        "end": 161,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 114,
            "expression": {
              "type": "CallExpression",
              "start": 110,
              "end": 113,
              "callee": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 119,
            "end": 130,
            "expression": {
              "type": "CallExpression",
              "start": 119,
              "end": 129,
              "callee": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 121,
                  "end": 122,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 124,
                  "end": 125,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 127,
                  "end": 128,
                  "value": 3,
                  "raw": "3"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 135,
            "end": 147,
            "expression": {
              "type": "CallExpression",
              "start": 135,
              "end": 146,
              "callee": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 137,
                  "end": 145,
                  "value": "hello!",
                  "raw": "\"hello!\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 152,
            "end": 159,
            "expression": {
              "type": "MemberExpression",
              "start": 152,
              "end": 158,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 158,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 163,
      "end": 270,
      "test": {
        "type": "BinaryExpression",
        "start": 167,
        "end": 186,
        "left": {
          "type": "Identifier",
          "start": 167,
          "end": 168,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 180,
          "end": 186,
          "name": "Object",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 188,
        "end": 270,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 248,
            "end": 259,
            "expression": {
              "type": "CallExpression",
              "start": 248,
              "end": 258,
              "callee": {
                "type": "MemberExpression",
                "start": 248,
                "end": 256,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 256,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 264,
            "end": 268,
            "expression": {
              "type": "CallExpression",
              "start": 264,
              "end": 267,
              "callee": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 272,
      "end": 389,
      "test": {
        "type": "BinaryExpression",
        "start": 276,
        "end": 294,
        "left": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 289,
          "end": 294,
          "name": "Error",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 296,
        "end": 389,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 363,
            "end": 373,
            "expression": {
              "type": "MemberExpression",
              "start": 363,
              "end": 372,
              "object": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 365,
                "end": 372,
                "name": "message",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 378,
            "end": 387,
            "expression": {
              "type": "MemberExpression",
              "start": 378,
              "end": 386,
              "object": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 380,
                "end": 386,
                "name": "mesage",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 391,
      "end": 452,
      "test": {
        "type": "BinaryExpression",
        "start": 395,
        "end": 412,
        "left": {
          "type": "Identifier",
          "start": 395,
          "end": 396,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 408,
          "end": 412,
          "name": "Date",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 414,
        "end": 452,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 420,
            "end": 432,
            "expression": {
              "type": "CallExpression",
              "start": 420,
              "end": 431,
              "callee": {
                "type": "MemberExpression",
                "start": 420,
                "end": 429,
                "object": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 421,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 429,
                  "name": "getDate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 437,
            "end": 450,
            "expression": {
              "type": "CallExpression",
              "start": 437,
              "end": 449,
              "callee": {
                "type": "MemberExpression",
                "start": 437,
                "end": 447,
                "object": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 447,
                  "name": "getHuors",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
