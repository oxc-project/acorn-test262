__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 417,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 123,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 166,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 166,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 160,
                "end": 166
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "elements": [
            {
              "type": "TSSatisfiesExpression",
              "start": 170,
              "end": 188,
              "expression": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 182,
                "end": 188
              }
            }
          ],
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 213,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 213,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 207,
                "end": 213
              }
            }
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
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
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
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 225,
              "end": 248,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 226,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSSatisfiesExpression",
                "start": 229,
                "end": 247,
                "expression": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 241,
                  "end": 247
                }
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
          "start": 253,
          "end": 262,
          "properties": [
            {
              "type": "Property",
              "start": 255,
              "end": 260,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 258,
                "end": 260,
                "value": 10,
                "raw": "10"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
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
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 326,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 327,
                  "end": 328,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 356,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 346,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 346,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 340,
                "end": 346
              }
            }
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 393,
              "value": 10,
              "raw": "10"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 412,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
