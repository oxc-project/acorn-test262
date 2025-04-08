__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 268,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 31,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 9,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "start": 18,
            "end": 23,
            "literal": {
              "type": "Literal",
              "start": 18,
              "end": 23,
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 26,
            "end": 31,
            "literal": {
              "type": "Literal",
              "start": 26,
              "end": 31,
              "value": "bar",
              "raw": "\"bar\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 63,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 63,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 41,
                "end": 63,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 41,
                    "end": 46,
                    "literal": {
                      "type": "Literal",
                      "start": 41,
                      "end": 46,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 49,
                    "end": 54,
                    "literal": {
                      "type": "Literal",
                      "start": 49,
                      "end": 54,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 57,
                    "end": 63
                  }
                ]
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 73,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 76,
            "end": 85,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 88,
      "end": 253,
      "test": {
        "type": "BinaryExpression",
        "start": 92,
        "end": 103,
        "left": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 98,
          "end": 103,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 105,
        "end": 123,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 111,
            "end": 121,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 115,
                "end": 120,
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "IfStatement",
        "start": 129,
        "end": 253,
        "test": {
          "type": "BinaryExpression",
          "start": 133,
          "end": 144,
          "left": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 139,
            "end": 144,
            "value": "bar",
            "raw": "\"bar\""
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 146,
          "end": 169,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 152,
              "end": 167,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 156,
                  "end": 166,
                  "id": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "start": 160,
                    "end": 166,
                    "left": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 161,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            }
          ]
        },
        "alternate": {
          "type": "BlockStatement",
          "start": 175,
          "end": 253,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 181,
              "end": 191,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 185,
                  "end": 190,
                  "id": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 196,
              "end": 206,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 200,
                  "end": 205,
                  "id": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 211,
              "end": 251,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 215,
                  "end": 250,
                  "id": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 241,
                    "name": "e",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 216,
                      "end": 241,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 218,
                        "end": 241,
                        "types": [
                          {
                            "type": "TSTypeQuery",
                            "start": 219,
                            "end": 227,
                            "exprName": {
                              "type": "Identifier",
                              "start": 226,
                              "end": 227,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeQuery",
                            "start": 232,
                            "end": 240,
                            "exprName": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "start": 244,
                    "end": 250,
                    "left": {
                      "type": "Identifier",
                      "start": 244,
                      "end": 245,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 261,
      "expression": {
        "type": "AssignmentExpression",
        "start": 255,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 255,
          "end": 256,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 259,
          "end": 260,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 268,
      "expression": {
        "type": "AssignmentExpression",
        "start": 262,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 262,
          "end": 263,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 266,
          "end": 267,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
