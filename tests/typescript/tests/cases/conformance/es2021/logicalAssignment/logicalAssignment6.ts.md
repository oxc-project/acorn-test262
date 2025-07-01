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
                      "start": 97,
                      "end": 105
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 110,
                      "end": 112
                    },
                    "start": 97,
                    "end": 112
                  },
                  "start": 84,
                  "end": 113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 119
                },
                "optional": false,
                "computed": false,
                "start": 83,
                "end": 119
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 120,
                  "end": 123
                }
              ],
              "optional": false,
              "start": 83,
              "end": 124
            },
            "directive": null,
            "start": 83,
            "end": 125
          }
        ],
        "start": 77,
        "end": 127
      },
      "expression": false,
      "start": 0,
      "end": 127
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 142
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
                    "start": 152,
                    "end": 158
                  },
                  "start": 152,
                  "end": 160
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 163,
                  "end": 172
                }
              ],
              "start": 152,
              "end": 172
            },
            "start": 150,
            "end": 172
          },
          "start": 143,
          "end": 172
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
                    "start": 184,
                    "end": 190
                  },
                  "start": 184,
                  "end": 192
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 195,
                  "end": 204
                }
              ],
              "start": 184,
              "end": 204
            },
            "start": 182,
            "end": 204
          },
          "start": 174,
          "end": 204
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
                    "start": 213,
                    "end": 220
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
                      "start": 226,
                      "end": 234
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 239,
                      "end": 241
                    },
                    "start": 226,
                    "end": 241
                  },
                  "start": 213,
                  "end": 242
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 248
                },
                "optional": false,
                "computed": false,
                "start": 212,
                "end": 248
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 249,
                  "end": 252
                }
              ],
              "optional": false,
              "start": 212,
              "end": 253
            },
            "directive": null,
            "start": 212,
            "end": 254
          }
        ],
        "start": 206,
        "end": 256
      },
      "expression": false,
      "start": 129,
      "end": 256
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 271
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
                    "start": 281,
                    "end": 287
                  },
                  "start": 281,
                  "end": 289
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 292,
                  "end": 301
                }
              ],
              "start": 281,
              "end": 301
            },
            "start": 279,
            "end": 301
          },
          "start": 272,
          "end": 301
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
                    "start": 313,
                    "end": 319
                  },
                  "start": 313,
                  "end": 321
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 324,
                  "end": 333
                }
              ],
              "start": 313,
              "end": 333
            },
            "start": 311,
            "end": 333
          },
          "start": 303,
          "end": 333
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
                    "start": 342,
                    "end": 349
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
                      "start": 355,
                      "end": 363
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 368,
                      "end": 370
                    },
                    "start": 355,
                    "end": 370
                  },
                  "start": 342,
                  "end": 371
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 377
                },
                "optional": false,
                "computed": false,
                "start": 341,
                "end": 377
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 378,
                  "end": 381
                }
              ],
              "optional": false,
              "start": 341,
              "end": 382
            },
            "directive": null,
            "start": 341,
            "end": 383
          }
        ],
        "start": 335,
        "end": 385
      },
      "expression": false,
      "start": 258,
      "end": 385
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 385
}
```
