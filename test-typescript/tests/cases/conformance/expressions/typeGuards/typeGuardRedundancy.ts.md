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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 20,
            "name": "x",
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
      "start": 23,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "name": "substr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "alternate": {
              "type": "MemberExpression",
              "start": 92,
              "end": 101,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 101,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "prefix": true,
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
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 165,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 167,
                "end": 174,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "alternate": {
              "type": "MemberExpression",
              "start": 177,
              "end": 185,
              "object": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 179,
                "end": 185,
                "name": "substr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 194,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 248,
                "end": 254,
                "name": "substr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "alternate": {
              "type": "MemberExpression",
              "start": 257,
              "end": 266,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 259,
                "end": 266,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "prefix": true,
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
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 313,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
              }
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 330,
              "end": 339,
              "object": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "alternate": {
              "type": "MemberExpression",
              "start": 342,
              "end": 350,
              "object": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 344,
                "end": 350,
                "name": "substr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
