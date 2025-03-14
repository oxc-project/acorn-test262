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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "T",
        "optional": false
      },
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
              "raw": "\"foo\"",
              "value": "foo"
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
              "raw": "\"bar\"",
              "value": "bar"
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
              "raw": "\"baz\"",
              "value": "baz"
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 61,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                      "raw": "\"foo\"",
                      "value": "foo"
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
                      "raw": "\"bar\"",
                      "value": "bar"
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
                      "raw": "\"baz\"",
                      "value": "baz"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 83,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 86,
            "end": 95,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 98,
      "end": 263,
      "alternate": {
        "type": "IfStatement",
        "start": 139,
        "end": 263,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 251,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
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
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeQuery",
                            "start": 242,
                            "end": 250,
                            "exprName": {
                              "type": "Identifier",
                              "start": 249,
                              "end": 250,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "start": 254,
                    "end": 260,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "d",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            }
          ]
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "start": 170,
                    "end": 176,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 171,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 143,
          "end": 154,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 149,
            "end": 154,
            "raw": "\"bar\"",
            "value": "bar"
          }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 102,
        "end": 113,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 108,
          "end": 113,
          "raw": "\"foo\"",
          "value": "foo"
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 269,
          "end": 270,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
