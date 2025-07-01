__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "start": 21,
            "end": 26
          },
          "definite": false,
          "start": 17,
          "end": 26
        }
      ],
      "declare": false,
      "start": 13,
      "end": 27
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 35
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 36
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 41
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 44,
              "end": 45
            },
            "start": 39,
            "end": 45
          },
          "definite": false,
          "start": 32,
          "end": 45
        }
      ],
      "declare": false,
      "start": 28,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 61,
              "end": 62
            },
            "start": 57,
            "end": 62
          },
          "definite": false,
          "start": 53,
          "end": 62
        }
      ],
      "declare": false,
      "start": 47,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y1",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 73
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 74
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 79
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 82,
              "end": 83
            },
            "start": 77,
            "end": 83
          },
          "definite": false,
          "start": 70,
          "end": 83
        }
      ],
      "declare": false,
      "start": 64,
      "end": 84
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "definite": false,
            "start": 94,
            "end": 99
          }
        ],
        "declare": false,
        "start": 90,
        "end": 99
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 105,
        "end": 108
      },
      "start": 85,
      "end": 108
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 121
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            },
            "definite": false,
            "start": 118,
            "end": 125
          }
        ],
        "declare": false,
        "start": 114,
        "end": 125
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 130,
        "end": 133
      },
      "start": 109,
      "end": 133
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 144
            },
            "init": null,
            "definite": false,
            "start": 143,
            "end": 144
          }
        ],
        "declare": false,
        "start": 139,
        "end": 144
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 149
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 151,
        "end": 154
      },
      "start": 134,
      "end": 154
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "init": null,
            "definite": false,
            "start": 164,
            "end": 165
          }
        ],
        "declare": false,
        "start": 160,
        "end": 165
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 170
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 172,
        "end": 175
      },
      "start": 155,
      "end": 175
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 187
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 188
            },
            "init": null,
            "definite": false,
            "start": 185,
            "end": 188
          }
        ],
        "declare": false,
        "start": 181,
        "end": 188
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 193
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 195,
        "end": 198
      },
      "start": 176,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 206
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 211
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 211
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 212
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 215,
            "end": 217
          },
          "definite": false,
          "start": 203,
          "end": 217
        }
      ],
      "declare": false,
      "start": 199,
      "end": 217
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
            "name": "z0",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 224
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "z0",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 235
            },
            "id": null,
            "generator": false,
            "start": 227,
            "end": 235
          },
          "definite": false,
          "start": 222,
          "end": 235
        }
      ],
      "declare": false,
      "start": 218,
      "end": 236
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 243
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 269
                  },
                  "start": 260,
                  "end": 270
                }
              ],
              "start": 258,
              "end": 272
            },
            "expression": false,
            "start": 246,
            "end": 272
          },
          "definite": false,
          "start": 241,
          "end": 272
        }
      ],
      "declare": false,
      "start": 237,
      "end": 272
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 297,
                          "end": 299
                        },
                        "start": 290,
                        "end": 300
                      }
                    ],
                    "start": 288,
                    "end": 301
                  },
                  "expression": false,
                  "start": 285,
                  "end": 301
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 284,
                "end": 301
              }
            ],
            "start": 282,
            "end": 302
          },
          "definite": false,
          "start": 277,
          "end": 302
        }
      ],
      "declare": false,
      "start": 273,
      "end": 302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 302
}
```
