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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 7,
                "end": 20
              },
              "start": 5,
              "end": 20
            },
            "start": 4,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 40
                  },
                  "prefix": true,
                  "start": 32,
                  "end": 40
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 45,
                  "end": 53
                },
                "start": 32,
                "end": 53
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "prefix": true,
                  "start": 57,
                  "end": 65
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 70,
                  "end": 78
                },
                "start": 57,
                "end": 78
              },
              "start": 32,
              "end": 78
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 81,
              "end": 89
            },
            "alternate": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 101
              },
              "optional": false,
              "computed": false,
              "start": 92,
              "end": 101
            },
            "start": 32,
            "end": 101
          },
          "definite": false,
          "start": 27,
          "end": 101
        }
      ],
      "declare": false,
      "start": 23,
      "end": 102
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 110
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "prefix": true,
                    "start": 115,
                    "end": 123
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 128,
                    "end": 136
                  },
                  "start": 115,
                  "end": 136
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 148
                    },
                    "prefix": true,
                    "start": 140,
                    "end": 148
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 153,
                    "end": 161
                  },
                  "start": 140,
                  "end": 161
                },
                "start": 115,
                "end": 161
              },
              "prefix": true,
              "start": 113,
              "end": 162
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 174
              },
              "optional": false,
              "computed": false,
              "start": 165,
              "end": 174
            },
            "alternate": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 185
              },
              "optional": false,
              "computed": false,
              "start": 177,
              "end": 185
            },
            "start": 113,
            "end": 185
          },
          "definite": false,
          "start": 108,
          "end": 185
        }
      ],
      "declare": false,
      "start": 104,
      "end": 186
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 194
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "prefix": true,
                  "start": 197,
                  "end": 205
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 210,
                  "end": 218
                },
                "start": 197,
                "end": 218
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "prefix": true,
                  "start": 222,
                  "end": 230
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 235,
                  "end": 243
                },
                "start": 222,
                "end": 243
              },
              "start": 197,
              "end": 243
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 254
              },
              "optional": false,
              "computed": false,
              "start": 246,
              "end": 254
            },
            "alternate": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 266
              },
              "optional": false,
              "computed": false,
              "start": 257,
              "end": 266
            },
            "start": 197,
            "end": 266
          },
          "definite": false,
          "start": 192,
          "end": 266
        }
      ],
      "declare": false,
      "start": 188,
      "end": 267
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 275
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "prefix": true,
                    "start": 280,
                    "end": 288
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 293,
                    "end": 301
                  },
                  "start": 280,
                  "end": 301
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 313
                    },
                    "prefix": true,
                    "start": 305,
                    "end": 313
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 318,
                    "end": 326
                  },
                  "start": 305,
                  "end": 326
                },
                "start": 280,
                "end": 326
              },
              "prefix": true,
              "start": 278,
              "end": 327
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 339
              },
              "optional": false,
              "computed": false,
              "start": 330,
              "end": 339
            },
            "alternate": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 343
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 350
              },
              "optional": false,
              "computed": false,
              "start": 342,
              "end": 350
            },
            "start": 278,
            "end": 350
          },
          "definite": false,
          "start": 273,
          "end": 350
        }
      ],
      "declare": false,
      "start": 269,
      "end": 351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 351
}
```
