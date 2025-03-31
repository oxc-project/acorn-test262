__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
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
        "end": 30,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 9,
            "end": 14,
            "literal": {
              "type": "Literal",
              "start": 9,
              "end": 14,
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 17,
            "end": 22,
            "literal": {
              "type": "Literal",
              "start": 17,
              "end": 22,
              "value": "bar",
              "raw": "\"bar\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 25,
            "end": 30,
            "literal": {
              "type": "Literal",
              "start": 25,
              "end": 30,
              "value": "baz",
              "raw": "\"baz\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 61,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 61,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 40,
                "end": 61,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 40,
                    "end": 45,
                    "literal": {
                      "type": "Literal",
                      "start": 40,
                      "end": 45,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 48,
                    "end": 53,
                    "literal": {
                      "type": "Literal",
                      "start": 48,
                      "end": 53,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 56,
                    "end": 61,
                    "literal": {
                      "type": "Literal",
                      "start": 56,
                      "end": 61,
                      "value": "baz",
                      "raw": "\"baz\""
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
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
      "type": "VariableDeclaration",
      "start": 75,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 83,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 83,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
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
            "start": 86,
            "end": 95,
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
      "start": 98,
      "end": 263,
      "test": {
        "type": "BinaryExpression",
        "start": 102,
        "end": 113,
        "left": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 108,
          "end": 113,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 115,
        "end": 133,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 131,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 130,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
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
        "start": 139,
        "end": 263,
        "test": {
          "type": "BinaryExpression",
          "start": 143,
          "end": 154,
          "left": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 149,
            "end": 154,
            "value": "bar",
            "raw": "\"bar\""
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 156,
          "end": 179,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 162,
              "end": 177,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 166,
                  "end": 176,
                  "id": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "start": 170,
                    "end": 176,
                    "left": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 171,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
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
          "start": 185,
          "end": 263,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 191,
              "end": 201,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 195,
                  "end": 200,
                  "id": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
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
              "start": 206,
              "end": 216,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 210,
                  "end": 215,
                  "id": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
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
              "start": 221,
              "end": 261,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 260,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 251,
                    "name": "e",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 251,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 228,
                        "end": 251,
                        "types": [
                          {
                            "type": "TSTypeQuery",
                            "start": 229,
                            "end": 237,
                            "exprName": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeQuery",
                            "start": 242,
                            "end": 250,
                            "exprName": {
                              "type": "Identifier",
                              "start": 249,
                              "end": 250,
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
                    "start": 254,
                    "end": 260,
                    "left": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
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
      "start": 265,
      "end": 271,
      "expression": {
        "type": "AssignmentExpression",
        "start": 265,
        "end": 270,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 265,
          "end": 266,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 269,
          "end": 270,
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
      "start": 272,
      "end": 278,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 277,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 272,
          "end": 273,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
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
