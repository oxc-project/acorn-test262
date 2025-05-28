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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 102,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 101,
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
            "test": {
              "type": "LogicalExpression",
              "start": 32,
              "end": 78,
              "left": {
                "type": "BinaryExpression",
                "start": 32,
                "end": 53,
                "left": {
                  "type": "UnaryExpression",
                  "start": 32,
                  "end": 40,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 45,
                  "end": 53,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 57,
                "end": 78,
                "left": {
                  "type": "UnaryExpression",
                  "start": 57,
                  "end": 65,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 70,
                  "end": 78,
                  "value": "string",
                  "raw": "\"string\""
                }
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 81,
              "end": 89,
              "object": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "alternate": {
              "type": "MemberExpression",
              "start": 92,
              "end": 101,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 101,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 186,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 185,
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
            "test": {
              "type": "UnaryExpression",
              "start": 113,
              "end": 162,
              "operator": "!",
              "argument": {
                "type": "LogicalExpression",
                "start": 115,
                "end": 161,
                "left": {
                  "type": "BinaryExpression",
                  "start": 115,
                  "end": 136,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 115,
                    "end": 123,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 128,
                    "end": 136,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 140,
                  "end": 161,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 140,
                    "end": 148,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 153,
                    "end": 161,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              },
              "prefix": true
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 165,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 167,
                "end": 174,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "alternate": {
              "type": "MemberExpression",
              "start": 177,
              "end": 185,
              "object": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 179,
                "end": 185,
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 267,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 266,
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
            "test": {
              "type": "LogicalExpression",
              "start": 197,
              "end": 243,
              "left": {
                "type": "BinaryExpression",
                "start": 197,
                "end": 218,
                "left": {
                  "type": "UnaryExpression",
                  "start": 197,
                  "end": 205,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 210,
                  "end": 218,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 222,
                "end": 243,
                "left": {
                  "type": "UnaryExpression",
                  "start": 222,
                  "end": 230,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 235,
                  "end": 243,
                  "value": "string",
                  "raw": "\"string\""
                }
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 246,
              "end": 254,
              "object": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 248,
                "end": 254,
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "alternate": {
              "type": "MemberExpression",
              "start": 257,
              "end": 266,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 259,
                "end": 266,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 269,
      "end": 351,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 350,
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
            "test": {
              "type": "UnaryExpression",
              "start": 278,
              "end": 327,
              "operator": "!",
              "argument": {
                "type": "LogicalExpression",
                "start": 280,
                "end": 326,
                "left": {
                  "type": "BinaryExpression",
                  "start": 280,
                  "end": 301,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 280,
                    "end": 288,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 293,
                    "end": 301,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "start": 305,
                  "end": 326,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 305,
                    "end": 313,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 318,
                    "end": 326,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              },
              "prefix": true
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 330,
              "end": 339,
              "object": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "alternate": {
              "type": "MemberExpression",
              "start": 342,
              "end": 350,
              "object": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 344,
                "end": 350,
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
