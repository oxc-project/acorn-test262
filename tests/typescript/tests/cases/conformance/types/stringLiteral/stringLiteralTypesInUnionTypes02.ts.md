__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
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
        "end": 39,
        "types": [
          {
            "type": "TSStringKeyword",
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
          },
          {
            "type": "TSLiteralType",
            "start": 34,
            "end": 39,
            "literal": {
              "type": "Literal",
              "start": 34,
              "end": 39,
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
      "start": 42,
      "end": 92,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 79,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 79,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 49,
                "end": 79,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 49,
                    "end": 54,
                    "literal": {
                      "type": "Literal",
                      "start": 49,
                      "end": 54,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 57,
                    "end": 62,
                    "literal": {
                      "type": "Literal",
                      "start": 57,
                      "end": 62,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 65,
                    "end": 70,
                    "literal": {
                      "type": "Literal",
                      "start": 65,
                      "end": 70,
                      "value": "baz",
                      "raw": "\"baz\""
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 73,
                    "end": 79
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
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
      "type": "VariableDeclaration",
      "start": 93,
      "end": 114,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
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
            "start": 104,
            "end": 113,
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
      "start": 116,
      "end": 281,
      "test": {
        "type": "BinaryExpression",
        "start": 120,
        "end": 131,
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 126,
          "end": 131,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 133,
        "end": 151,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 139,
            "end": 149,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 143,
                "end": 148,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
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
        "start": 157,
        "end": 281,
        "test": {
          "type": "BinaryExpression",
          "start": 161,
          "end": 172,
          "left": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 167,
            "end": 172,
            "value": "bar",
            "raw": "\"bar\""
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 174,
          "end": 197,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 180,
              "end": 195,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 184,
                  "end": 194,
                  "id": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 185,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "start": 188,
                    "end": 194,
                    "left": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
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
          "start": 203,
          "end": 281,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 209,
              "end": 219,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 213,
                  "end": 218,
                  "id": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
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
              "start": 224,
              "end": 234,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 228,
                  "end": 233,
                  "id": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
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
              "start": 239,
              "end": 279,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 243,
                  "end": 278,
                  "id": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 269,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 244,
                      "end": 269,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 246,
                        "end": 269,
                        "types": [
                          {
                            "type": "TSTypeQuery",
                            "start": 247,
                            "end": 255,
                            "exprName": {
                              "type": "Identifier",
                              "start": 254,
                              "end": 255,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeQuery",
                            "start": 260,
                            "end": 268,
                            "exprName": {
                              "type": "Identifier",
                              "start": 267,
                              "end": 268,
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
                    "start": 272,
                    "end": 278,
                    "left": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 273,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
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
      "start": 283,
      "end": 289,
      "expression": {
        "type": "AssignmentExpression",
        "start": 283,
        "end": 288,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 283,
          "end": 284,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 287,
          "end": 288,
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
      "start": 290,
      "end": 296,
      "expression": {
        "type": "AssignmentExpression",
        "start": 290,
        "end": 295,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 294,
          "end": 295,
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
