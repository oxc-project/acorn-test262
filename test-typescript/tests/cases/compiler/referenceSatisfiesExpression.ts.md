referenceSatisfiesExpression.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 35,
      "expression": {
        "type": "UpdateExpression",
        "start": 12,
        "end": 34,
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
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 27,
            "end": 33
          }
        },
        "operator": "--",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 59,
      "expression": {
        "type": "UpdateExpression",
        "start": 36,
        "end": 58,
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
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 51,
            "end": 57
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 84,
      "expression": {
        "type": "UpdateExpression",
        "start": 61,
        "end": 83,
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
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 74,
            "end": 80
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 108,
      "expression": {
        "type": "UpdateExpression",
        "start": 85,
        "end": 107,
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
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 98,
            "end": 104
          }
        },
        "operator": "--",
        "prefix": false
      }
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "raw": "10",
          "value": 10
        }
      }
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 182,
                "end": 188
              }
            }
          ],
          "optional": false
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
              "raw": "10",
              "value": 10
            }
          ]
        }
      }
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
          "definite": false,
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
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 219,
            "end": 220,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 225,
              "end": 248,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 226,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
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
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 241,
                  "end": 247
                }
              }
            }
          ]
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 258,
                "end": 260,
                "raw": "10",
                "value": 10
              }
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 274,
            "end": 275,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForOfStatement",
      "start": 276,
      "end": 331,
      "await": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 327,
                  "end": 328,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 315,
                "end": 326,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 322,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 326,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
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
            "raw": "10",
            "value": 10
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
          "definite": false,
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
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForInStatement",
      "start": 357,
      "end": 417,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 401,
                "end": 412,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 408,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 412,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 391,
              "end": 393,
              "raw": "10",
              "value": 10
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
