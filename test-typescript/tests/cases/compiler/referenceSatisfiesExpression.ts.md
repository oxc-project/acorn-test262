__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 418,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 35,
      "expression": {
        "type": "UpdateExpression",
        "start": 12,
        "end": 34,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "TSSatisfiesExpression",
          "start": 15,
          "end": 33,
          "expression": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 27,
            "end": 33
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 59,
      "expression": {
        "type": "UpdateExpression",
        "start": 36,
        "end": 58,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "TSSatisfiesExpression",
          "start": 39,
          "end": 57,
          "expression": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 51,
            "end": 57
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 84,
      "expression": {
        "type": "UpdateExpression",
        "start": 61,
        "end": 83,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "TSSatisfiesExpression",
          "start": 62,
          "end": 80,
          "expression": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 74,
            "end": 80
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 108,
      "expression": {
        "type": "UpdateExpression",
        "start": 85,
        "end": 107,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "TSSatisfiesExpression",
          "start": 86,
          "end": 104,
          "expression": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 98,
            "end": 104
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 123,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 125,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "TSSatisfiesExpression",
          "start": 126,
          "end": 144,
          "expression": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 138,
            "end": 144
          }
        },
        "right": {
          "type": "Literal",
          "start": 148,
          "end": 150,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 166,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 166,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 160,
                "end": 166
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 198,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 197,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 168,
          "end": 190,
          "elements": [
            {
              "type": "TSSatisfiesExpression",
              "start": 170,
              "end": 188,
              "expression": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 182,
                "end": 188
              }
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 193,
          "end": 197,
          "elements": [
            {
              "type": "Literal",
              "start": 194,
              "end": 196,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 213,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 213,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 207,
                "end": 213
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 219,
            "end": 220,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 264,
      "expression": {
        "type": "AssignmentExpression",
        "start": 223,
        "end": 262,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 223,
          "end": 250,
          "properties": [
            {
              "type": "Property",
              "start": 225,
              "end": 248,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 226,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TSSatisfiesExpression",
                "start": 229,
                "end": 247,
                "expression": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 241,
                  "end": 247
                }
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 253,
          "end": 262,
          "properties": [
            {
              "type": "Property",
              "start": 255,
              "end": 260,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 258,
                "end": 260,
                "value": 10,
                "raw": "10"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 274,
            "end": 275,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 276,
      "end": 331,
      "await": false,
      "left": {
        "type": "TSSatisfiesExpression",
        "start": 282,
        "end": 300,
        "expression": {
          "type": "Identifier",
          "start": 282,
          "end": 283,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 294,
          "end": 300
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 305,
        "end": 309,
        "elements": [
          {
            "type": "Literal",
            "start": 306,
            "end": 308,
            "value": 10,
            "raw": "10"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 311,
        "end": 331,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 315,
            "end": 329,
            "expression": {
              "type": "CallExpression",
              "start": 315,
              "end": 329,
              "callee": {
                "type": "MemberExpression",
                "start": 315,
                "end": 326,
                "object": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 322,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 326,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 327,
                  "end": 328,
                  "name": "g",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 356,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 346,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 346,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 340,
                "end": 346
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 349,
            "end": 356,
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 357,
      "end": 417,
      "left": {
        "type": "TSSatisfiesExpression",
        "start": 363,
        "end": 381,
        "expression": {
          "type": "Identifier",
          "start": 363,
          "end": 364,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 375,
          "end": 381
        }
      },
      "right": {
        "type": "ObjectExpression",
        "start": 386,
        "end": 395,
        "properties": [
          {
            "type": "Property",
            "start": 388,
            "end": 393,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 393,
              "value": 10,
              "raw": "10"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 397,
        "end": 417,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 401,
            "end": 415,
            "expression": {
              "type": "CallExpression",
              "start": 401,
              "end": 415,
              "callee": {
                "type": "MemberExpression",
                "start": 401,
                "end": 412,
                "object": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 408,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 412,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
