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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 19
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 21,
                  "end": 23
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 23
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 33
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 35,
                  "end": 39
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 25,
                "end": 39
              }
            ],
            "start": 12,
            "end": 41
          },
          "definite": false,
          "start": 6,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 64
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 64
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          {
            "type": "Literal",
            "value": "thing",
            "raw": "\"thing\"",
            "start": 74,
            "end": 81
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          }
        ],
        "optional": false,
        "start": 43,
        "end": 87
      },
      "directive": null,
      "start": 43,
      "end": 88
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 123
          },
          "init": {
            "type": "Literal",
            "value": "other",
            "raw": "\"other\"",
            "start": 148,
            "end": 155
          },
          "definite": false,
          "start": 120,
          "end": 156
        }
      ],
      "declare": false,
      "start": 116,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 164
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 179
          },
          "optional": false,
          "computed": false,
          "start": 158,
          "end": 179
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 187
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 192
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 201
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 203,
                  "end": 205
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 196,
                "end": 205
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 215
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 217,
                  "end": 221
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 207,
                "end": 221
              }
            ],
            "start": 194,
            "end": 223
          }
        ],
        "optional": false,
        "start": 158,
        "end": 224
      },
      "directive": null,
      "start": 158,
      "end": 225
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
            "name": "propName",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 241
          },
          "init": {
            "type": "Literal",
            "value": "prop",
            "raw": "\"prop\"",
            "start": 244,
            "end": 250
          },
          "definite": false,
          "start": 233,
          "end": 250
        }
      ],
      "declare": false,
      "start": 227,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 257
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 272
          },
          "optional": false,
          "computed": false,
          "start": 251,
          "end": 272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 280
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "propName",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 290
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 299
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 301,
                  "end": 303
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 294,
                "end": 303
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 313
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 315,
                  "end": 319
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 305,
                "end": 319
              }
            ],
            "start": 292,
            "end": 321
          }
        ],
        "optional": false,
        "start": 251,
        "end": 322
      },
      "directive": null,
      "start": 251,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 332
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 347
          },
          "optional": false,
          "computed": false,
          "start": 326,
          "end": 347
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 355
          },
          {
            "type": "Literal",
            "value": "bad1",
            "raw": "\"bad1\"",
            "start": 357,
            "end": 363
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 365,
            "end": 368
          }
        ],
        "optional": false,
        "start": 326,
        "end": 369
      },
      "directive": null,
      "start": 326,
      "end": 370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 377
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 392
          },
          "optional": false,
          "computed": false,
          "start": 371,
          "end": 392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 400
          },
          {
            "type": "Literal",
            "value": "bad2",
            "raw": "\"bad2\"",
            "start": 402,
            "end": 408
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 415
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 427,
                          "end": 429
                        },
                        "start": 420,
                        "end": 429
                      }
                    ],
                    "start": 418,
                    "end": 431
                  },
                  "expression": false,
                  "start": 415,
                  "end": 431
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 412,
                "end": 431
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 438
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "\"no\"",
                  "start": 440,
                  "end": 444
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 433,
                "end": 444
              }
            ],
            "start": 410,
            "end": 446
          }
        ],
        "optional": false,
        "start": 371,
        "end": 447
      },
      "directive": null,
      "start": 371,
      "end": 448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 455
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 470
          },
          "optional": false,
          "computed": false,
          "start": 449,
          "end": 470
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 478
          },
          {
            "type": "Literal",
            "value": "bad3",
            "raw": "\"bad3\"",
            "start": 480,
            "end": 486
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 498
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 500,
                  "end": 504
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 490,
                "end": 504
              }
            ],
            "start": 488,
            "end": 506
          }
        ],
        "optional": false,
        "start": 449,
        "end": 507
      },
      "directive": null,
      "start": 449,
      "end": 508
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 509
}
```
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./mod1",
                "raw": "\"./mod1\"",
                "start": 20,
                "end": 28
              }
            ],
            "optional": false,
            "start": 12,
            "end": 29
          },
          "definite": false,
          "start": 6,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 34
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 40
        },
        "optional": false,
        "computed": false,
        "start": 31,
        "end": 40
      },
      "directive": null,
      "start": 31,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 45
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 51
        },
        "optional": false,
        "computed": false,
        "start": 42,
        "end": 51
      },
      "directive": null,
      "start": 42,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 56
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 61
        },
        "optional": false,
        "computed": false,
        "start": 53,
        "end": 61
      },
      "directive": null,
      "start": 53,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 66
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad1",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 71
        },
        "optional": false,
        "computed": false,
        "start": 63,
        "end": 71
      },
      "directive": null,
      "start": 63,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad2",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 81
        },
        "optional": false,
        "computed": false,
        "start": 73,
        "end": 81
      },
      "directive": null,
      "start": 73,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 86
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad3",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 91
        },
        "optional": false,
        "computed": false,
        "start": 83,
        "end": 91
      },
      "directive": null,
      "start": 83,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 104
          },
          "optional": false,
          "computed": false,
          "start": 95,
          "end": 104
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 107,
          "end": 108
        },
        "start": 95,
        "end": 108
      },
      "directive": null,
      "start": 95,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 119
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 119
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 122,
          "end": 123
        },
        "start": 110,
        "end": 123
      },
      "directive": null,
      "start": 110,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 128
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 133
          },
          "optional": false,
          "computed": false,
          "start": 125,
          "end": 133
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 136,
          "end": 137
        },
        "start": 125,
        "end": 137
      },
      "directive": null,
      "start": 125,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bad1",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 139,
          "end": 147
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 150,
          "end": 151
        },
        "start": 139,
        "end": 151
      },
      "directive": null,
      "start": 139,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 156
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bad2",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 161
          },
          "optional": false,
          "computed": false,
          "start": 153,
          "end": 161
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 164,
          "end": 165
        },
        "start": 153,
        "end": 165
      },
      "directive": null,
      "start": 153,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 170
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bad3",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 175
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 175
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 178,
          "end": 179
        },
        "start": 167,
        "end": 179
      },
      "directive": null,
      "start": 167,
      "end": 180
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 180
}
```
