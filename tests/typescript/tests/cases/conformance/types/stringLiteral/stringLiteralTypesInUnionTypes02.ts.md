__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 9,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 18,
              "end": 23
            },
            "start": 18,
            "end": 23
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 26,
              "end": 31
            },
            "start": 26,
            "end": 31
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 34,
              "end": 39
            },
            "start": 34,
            "end": 39
          }
        ],
        "start": 9,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 40
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 49,
                      "end": 54
                    },
                    "start": 49,
                    "end": 54
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 57,
                      "end": 62
                    },
                    "start": 57,
                    "end": 62
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "\"baz\"",
                      "start": 65,
                      "end": 70
                    },
                    "start": 65,
                    "end": 70
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 73,
                    "end": 79
                  }
                ],
                "start": 49,
                "end": 79
              },
              "start": 47,
              "end": 79
            },
            "start": 46,
            "end": 79
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 91
          },
          "definite": false,
          "start": 46,
          "end": 91
        }
      ],
      "declare": false,
      "start": 42,
      "end": 92
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "typeArguments": null,
                "start": 100,
                "end": 101
              },
              "start": 98,
              "end": 101
            },
            "start": 97,
            "end": 101
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 113
          },
          "definite": false,
          "start": 97,
          "end": 113
        }
      ],
      "declare": false,
      "start": 93,
      "end": 114
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 126,
          "end": 131
        },
        "start": 120,
        "end": 131
      },
      "consequent": {
        "type": "BlockStatement",
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
                  "start": 143,
                  "end": 144
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "definite": false,
                "start": 143,
                "end": 148
              }
            ],
            "declare": false,
            "start": 139,
            "end": 149
          }
        ],
        "start": 133,
        "end": 151
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 162
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 167,
            "end": 172
          },
          "start": 161,
          "end": 172
        },
        "consequent": {
          "type": "BlockStatement",
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 184,
                    "end": 185
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 189
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 194
                    },
                    "start": 188,
                    "end": 194
                  },
                  "definite": false,
                  "start": 184,
                  "end": 194
                }
              ],
              "declare": false,
              "start": 180,
              "end": 195
            }
          ],
          "start": 174,
          "end": 197
        },
        "alternate": {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 213,
                    "end": 214
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 218
                  },
                  "definite": false,
                  "start": 213,
                  "end": 218
                }
              ],
              "declare": false,
              "start": 209,
              "end": 219
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
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 233
                  },
                  "definite": false,
                  "start": 228,
                  "end": 233
                }
              ],
              "declare": false,
              "start": 224,
              "end": 234
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
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 254,
                              "end": 255
                            },
                            "typeArguments": null,
                            "start": 247,
                            "end": 255
                          },
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 267,
                              "end": 268
                            },
                            "typeArguments": null,
                            "start": 260,
                            "end": 268
                          }
                        ],
                        "start": 246,
                        "end": 269
                      },
                      "start": 244,
                      "end": 269
                    },
                    "start": 243,
                    "end": 269
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 278
                    },
                    "start": 272,
                    "end": 278
                  },
                  "definite": false,
                  "start": 243,
                  "end": 278
                }
              ],
              "declare": false,
              "start": 239,
              "end": 279
            }
          ],
          "start": 203,
          "end": 281
        },
        "start": 157,
        "end": 281
      },
      "start": 116,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 284
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 288
        },
        "start": 283,
        "end": 288
      },
      "directive": null,
      "start": 283,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 295
        },
        "start": 290,
        "end": 295
      },
      "directive": null,
      "start": 290,
      "end": 296
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 296
}
```
