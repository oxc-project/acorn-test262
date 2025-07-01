__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "TSSatisfiesExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 27,
            "end": 33
          },
          "start": 15,
          "end": 33
        },
        "start": 12,
        "end": 34
      },
      "directive": null,
      "start": 12,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "TSSatisfiesExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 51,
            "end": 57
          },
          "start": 39,
          "end": 57
        },
        "start": 36,
        "end": 58
      },
      "directive": null,
      "start": 36,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "TSSatisfiesExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 74,
            "end": 80
          },
          "start": 62,
          "end": 80
        },
        "start": 61,
        "end": 83
      },
      "directive": null,
      "start": 61,
      "end": 84
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "TSSatisfiesExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 98,
            "end": 104
          },
          "start": 86,
          "end": 104
        },
        "start": 85,
        "end": 107
      },
      "directive": null,
      "start": 85,
      "end": 108
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "start": 114,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 114,
          "end": 123
        }
      ],
      "declare": false,
      "start": 110,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "TSSatisfiesExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 138,
            "end": 144
          },
          "start": 126,
          "end": 144
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 148,
          "end": 150
        },
        "start": 125,
        "end": 150
      },
      "directive": null,
      "start": 125,
      "end": 151
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 160,
                "end": 166
              },
              "start": 158,
              "end": 166
            },
            "start": 157,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 166
        }
      ],
      "declare": false,
      "start": 153,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 171
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 182,
                "end": 188
              },
              "start": 170,
              "end": 188
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 190
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 194,
              "end": 196
            }
          ],
          "start": 193,
          "end": 197
        },
        "start": 168,
        "end": 197
      },
      "directive": null,
      "start": 168,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 207,
                "end": 213
              },
              "start": 205,
              "end": 213
            },
            "start": 204,
            "end": 213
          },
          "init": null,
          "definite": false,
          "start": 204,
          "end": 213
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 216
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 219,
            "end": 220
          },
          "definite": false,
          "start": 215,
          "end": 220
        }
      ],
      "declare": false,
      "start": 200,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
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
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 226
              },
              "value": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 230
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 241,
                  "end": 247
                },
                "start": 229,
                "end": 247
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 225,
              "end": 248
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 250
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
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "value": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 258,
                "end": 260
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 255,
              "end": 260
            }
          ],
          "start": 253,
          "end": 262
        },
        "start": 223,
        "end": 262
      },
      "directive": null,
      "start": 222,
      "end": 264
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 271
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 274,
            "end": 275
          },
          "definite": false,
          "start": 270,
          "end": 275
        }
      ],
      "declare": false,
      "start": 266,
      "end": 275
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "TSSatisfiesExpression",
        "expression": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 283
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 294,
          "end": 300
        },
        "start": 282,
        "end": 300
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 306,
            "end": 308
          }
        ],
        "start": 305,
        "end": 309
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 322
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 326
                },
                "optional": false,
                "computed": false,
                "start": 315,
                "end": 326
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 328
                }
              ],
              "optional": false,
              "start": 315,
              "end": 329
            },
            "directive": null,
            "start": 315,
            "end": 329
          }
        ],
        "start": 311,
        "end": 331
      },
      "start": 276,
      "end": 331
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 340,
                "end": 346
              },
              "start": 338,
              "end": 346
            },
            "start": 337,
            "end": 346
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 349,
            "end": 356
          },
          "definite": false,
          "start": 337,
          "end": 356
        }
      ],
      "declare": false,
      "start": 333,
      "end": 356
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "TSSatisfiesExpression",
        "expression": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 363,
          "end": 364
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 375,
          "end": 381
        },
        "start": 363,
        "end": 381
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
              "start": 388,
              "end": 389
            },
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 391,
              "end": 393
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 388,
            "end": 393
          }
        ],
        "start": 386,
        "end": 395
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 408
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 412
                },
                "optional": false,
                "computed": false,
                "start": 401,
                "end": 412
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                }
              ],
              "optional": false,
              "start": 401,
              "end": 415
            },
            "directive": null,
            "start": 401,
            "end": 415
          }
        ],
        "start": 397,
        "end": 417
      },
      "start": 357,
      "end": 417
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 417
}
```
