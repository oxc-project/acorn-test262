__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 20,
                    "end": 27
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 40,
                        "end": 46
                      },
                      "start": 40,
                      "end": 48
                    },
                    "start": 37,
                    "end": 48
                  }
                ],
                "start": 19,
                "end": 49
              },
              "start": 17,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 60
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 63
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 75
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 68,
                "end": 75
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 76
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 84
          },
          "definite": false,
          "start": 58,
          "end": 84
        }
      ],
      "declare": false,
      "start": 52,
      "end": 85
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 121
                },
                "typeArguments": null,
                "start": 109,
                "end": 121
              },
              "start": 107,
              "end": 121
            },
            "start": 99,
            "end": 121
          },
          "init": null,
          "definite": false,
          "start": 99,
          "end": 121
        }
      ],
      "declare": true,
      "start": 87,
      "end": 122
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
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "receiver",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 136
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 125,
              "end": 136
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 137
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "tuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 145
        },
        "start": 124,
        "end": 145
      },
      "directive": null,
      "start": 124,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "oops1",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 183
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 184
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 188,
                    "end": 189
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 191,
                    "end": 192
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 194,
                    "end": 195
                  }
                ],
                "start": 187,
                "end": 196
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 203
              },
              "optional": false,
              "computed": false,
              "start": 187,
              "end": 203
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "accu",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 209
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "el",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 213
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "accu",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 222
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 229
                    },
                    "optional": false,
                    "computed": false,
                    "start": 218,
                    "end": 229
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "el",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 232
                    }
                  ],
                  "optional": false,
                  "start": 218,
                  "end": 233
                },
                "id": null,
                "generator": false,
                "start": 204,
                "end": 233
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 235,
                "end": 237
              }
            ],
            "optional": false,
            "start": 187,
            "end": 238
          },
          "definite": false,
          "start": 177,
          "end": 238
        }
      ],
      "declare": false,
      "start": 171,
      "end": 239
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "oops2",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 253
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 254
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 258,
                    "end": 259
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 261,
                    "end": 262
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 264,
                    "end": 265
                  }
                ],
                "start": 257,
                "end": 266
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 257,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "acc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 280,
                          "end": 286
                        },
                        "start": 280,
                        "end": 288
                      },
                      "start": 278,
                      "end": 288
                    },
                    "start": 275,
                    "end": 288
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "acc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 299
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 306
                    },
                    "optional": false,
                    "computed": false,
                    "start": 296,
                    "end": 306
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 308
                    }
                  ],
                  "optional": false,
                  "start": 296,
                  "end": 309
                },
                "id": null,
                "generator": false,
                "start": 274,
                "end": 309
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 311,
                "end": 313
              }
            ],
            "optional": false,
            "start": 257,
            "end": 314
          },
          "definite": false,
          "start": 247,
          "end": 314
        }
      ],
      "declare": false,
      "start": 241,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 315
}
```
