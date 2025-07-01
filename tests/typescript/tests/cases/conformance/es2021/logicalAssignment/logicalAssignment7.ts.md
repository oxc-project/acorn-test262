__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  },
                  "start": 23,
                  "end": 31
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 34,
                  "end": 43
                }
              ],
              "start": 23,
              "end": 43
            },
            "start": 21,
            "end": 43
          },
          "start": 14,
          "end": 43
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 55,
                    "end": 61
                  },
                  "start": 55,
                  "end": 63
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 66,
                  "end": 75
                }
              ],
              "start": 55,
              "end": 75
            },
            "start": 53,
            "end": 75
          },
          "start": 45,
          "end": 75
        }
      ],
      "returnType": null,
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
                  "type": "AssignmentExpression",
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 91
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "||=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 104
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 109,
                      "end": 111
                    },
                    "start": 96,
                    "end": 111
                  },
                  "start": 84,
                  "end": 111
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 117
                },
                "optional": false,
                "computed": false,
                "start": 83,
                "end": 117
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 118,
                  "end": 121
                }
              ],
              "optional": false,
              "start": 83,
              "end": 122
            },
            "directive": null,
            "start": 83,
            "end": 123
          }
        ],
        "start": 77,
        "end": 125
      },
      "expression": false,
      "start": 0,
      "end": 125
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 140
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "start": 150,
                  "end": 158
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 161,
                  "end": 170
                }
              ],
              "start": 150,
              "end": 170
            },
            "start": 148,
            "end": 170
          },
          "start": 141,
          "end": 170
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 182,
                    "end": 188
                  },
                  "start": 182,
                  "end": 190
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 193,
                  "end": 202
                }
              ],
              "start": 182,
              "end": 202
            },
            "start": 180,
            "end": 202
          },
          "start": 172,
          "end": 202
        }
      ],
      "returnType": null,
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
                  "type": "AssignmentExpression",
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 218
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "??=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 231
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 236,
                      "end": 238
                    },
                    "start": 223,
                    "end": 238
                  },
                  "start": 211,
                  "end": 238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 244
                },
                "optional": false,
                "computed": false,
                "start": 210,
                "end": 244
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 245,
                  "end": 248
                }
              ],
              "optional": false,
              "start": 210,
              "end": 249
            },
            "directive": null,
            "start": 210,
            "end": 250
          }
        ],
        "start": 204,
        "end": 252
      },
      "expression": false,
      "start": 127,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 267
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 277,
                    "end": 283
                  },
                  "start": 277,
                  "end": 285
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 288,
                  "end": 297
                }
              ],
              "start": 277,
              "end": 297
            },
            "start": 275,
            "end": 297
          },
          "start": 268,
          "end": 297
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 309,
                    "end": 315
                  },
                  "start": 309,
                  "end": 317
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 320,
                  "end": 329
                }
              ],
              "start": 309,
              "end": 329
            },
            "start": 307,
            "end": 329
          },
          "start": 299,
          "end": 329
        }
      ],
      "returnType": null,
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
                  "type": "AssignmentExpression",
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 345
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "&&=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "results1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 358
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 363,
                      "end": 365
                    },
                    "start": 350,
                    "end": 365
                  },
                  "start": 338,
                  "end": 365
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 371
                },
                "optional": false,
                "computed": false,
                "start": 337,
                "end": 371
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 372,
                  "end": 375
                }
              ],
              "optional": false,
              "start": 337,
              "end": 376
            },
            "directive": null,
            "start": 337,
            "end": 377
          }
        ],
        "start": 331,
        "end": 379
      },
      "expression": false,
      "start": 254,
      "end": 379
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 379
}
```
