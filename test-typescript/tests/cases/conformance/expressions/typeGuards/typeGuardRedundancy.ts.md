__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 351,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 20,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 20,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 20,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 14,
                    "end": 20
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 32,
            "end": 101,
            "alternate": {
              "type": "MemberExpression",
              "start": 92,
              "end": 101,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 101,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 81,
              "end": 89,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "LogicalExpression",
              "start": 32,
              "end": 78,
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 32,
                "end": 53,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 32,
                  "end": 40,
                  "argument": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 45,
                  "end": 53,
                  "raw": "\"string\"",
                  "value": "string",
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 57,
                "end": 78,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 57,
                  "end": 65,
                  "argument": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 70,
                  "end": 78,
                  "raw": "\"string\"",
                  "value": "string",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 113,
            "end": 185,
            "alternate": {
              "type": "MemberExpression",
              "start": 177,
              "end": 185,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 179,
                "end": 185,
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 165,
              "end": 174,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 167,
                "end": 174,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 113,
              "end": 162,
              "argument": {
                "type": "LogicalExpression",
                "start": 115,
                "end": 161,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 115,
                  "end": 136,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 115,
                    "end": 123,
                    "argument": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 128,
                    "end": 136,
                    "raw": "\"string\"",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 140,
                  "end": 161,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 140,
                    "end": 148,
                    "argument": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 153,
                    "end": 161,
                    "raw": "\"string\"",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "operator": "!",
              "prefix": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 194,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 197,
            "end": 266,
            "alternate": {
              "type": "MemberExpression",
              "start": 257,
              "end": 266,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 259,
                "end": 266,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 246,
              "end": 254,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 248,
                "end": 254,
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "LogicalExpression",
              "start": 197,
              "end": 243,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 197,
                "end": 218,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 197,
                  "end": 205,
                  "argument": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 210,
                  "end": 218,
                  "raw": "\"string\"",
                  "value": "string",
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 222,
                "end": 243,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 222,
                  "end": 230,
                  "argument": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 235,
                  "end": 243,
                  "raw": "\"string\"",
                  "value": "string",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 269,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 278,
            "end": 350,
            "alternate": {
              "type": "MemberExpression",
              "start": 342,
              "end": 350,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 344,
                "end": 350,
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 330,
              "end": 339,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 278,
              "end": 327,
              "argument": {
                "type": "LogicalExpression",
                "start": 280,
                "end": 326,
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "start": 280,
                  "end": 301,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 280,
                    "end": 288,
                    "argument": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 293,
                    "end": 301,
                    "raw": "\"string\"",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 305,
                  "end": 326,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 305,
                    "end": 313,
                    "argument": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 318,
                    "end": 326,
                    "raw": "\"string\"",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "operator": "!",
              "prefix": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
