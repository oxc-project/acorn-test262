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
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 63,
            "decorators": [],
            "name": "x",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 86,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 73,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 76,
            "end": 85,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 115,
                "end": 120,
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 156,
                  "end": 166,
                  "id": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "start": 160,
                    "end": 166,
                    "left": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 161,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "definite": false
                }
              ],
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 185,
                  "end": 190,
                  "id": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 196,
              "end": 206,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 200,
                  "end": 205,
                  "id": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 211,
              "end": 251,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 215,
                  "end": 250,
                  "id": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 241,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
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
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "start": 244,
                    "end": 250,
                    "left": {
                      "type": "Identifier",
                      "start": 244,
                      "end": 245,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "definite": false
                }
              ],
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 259,
          "end": 260,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 266,
          "end": 267,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
