__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 7,
                "end": 9
              },
              "start": 5,
              "end": 9
            },
            "start": 4,
            "end": 9
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 19,
                      "end": 27
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 31,
                        "end": 37
                      },
                      "start": 29,
                      "end": 37
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 19,
                    "end": 37
                  }
                ],
                "start": 18,
                "end": 38
              },
              "start": 16,
              "end": 38
            },
            "start": 15,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 38
        }
      ],
      "declare": false,
      "start": 11,
      "end": 39
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 52
          },
          "prefix": true,
          "start": 44,
          "end": 52
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 57,
          "end": 65
        },
        "start": 44,
        "end": 65
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    },
                    "start": 78,
                    "end": 86
                  },
                  "start": 77,
                  "end": 86
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "definite": false,
                "start": 77,
                "end": 90
              }
            ],
            "declare": false,
            "start": 73,
            "end": 91
          }
        ],
        "start": 67,
        "end": 93
      },
      "alternate": null,
      "start": 40,
      "end": 93
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "prefix": true,
          "start": 98,
          "end": 106
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 111,
          "end": 119
        },
        "start": 98,
        "end": 119
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 134,
                      "end": 140
                    },
                    "start": 132,
                    "end": 140
                  },
                  "start": 131,
                  "end": 140
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "definite": false,
                "start": 131,
                "end": 144
              }
            ],
            "declare": false,
            "start": 127,
            "end": 145
          }
        ],
        "start": 121,
        "end": 147
      },
      "alternate": null,
      "start": 94,
      "end": 147
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "prefix": true,
          "start": 152,
          "end": 160
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 165,
          "end": 174
        },
        "start": 152,
        "end": 174
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 189,
                      "end": 196
                    },
                    "start": 187,
                    "end": 196
                  },
                  "start": 186,
                  "end": 196
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 200
                },
                "definite": false,
                "start": 186,
                "end": 200
              }
            ],
            "declare": false,
            "start": 182,
            "end": 201
          }
        ],
        "start": 176,
        "end": 203
      },
      "alternate": null,
      "start": 148,
      "end": 203
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "prefix": true,
          "start": 209,
          "end": 217
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 222,
          "end": 230
        },
        "start": 209,
        "end": 230
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 245,
                      "end": 251
                    },
                    "start": 243,
                    "end": 251
                  },
                  "start": 242,
                  "end": 251
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 255
                },
                "definite": false,
                "start": 242,
                "end": 255
              }
            ],
            "declare": false,
            "start": 238,
            "end": 256
          }
        ],
        "start": 232,
        "end": 258
      },
      "alternate": null,
      "start": 205,
      "end": 258
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 271
          },
          "prefix": true,
          "start": 263,
          "end": 271
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 276,
          "end": 284
        },
        "start": 263,
        "end": 284
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 299,
                      "end": 305
                    },
                    "start": 297,
                    "end": 305
                  },
                  "start": 296,
                  "end": 305
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 309
                },
                "definite": false,
                "start": 296,
                "end": 309
              }
            ],
            "declare": false,
            "start": 292,
            "end": 310
          }
        ],
        "start": 286,
        "end": 312
      },
      "alternate": null,
      "start": 259,
      "end": 312
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "prefix": true,
          "start": 317,
          "end": 325
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 330,
          "end": 339
        },
        "start": 317,
        "end": 339
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 354,
                      "end": 361
                    },
                    "start": 352,
                    "end": 361
                  },
                  "start": 351,
                  "end": 361
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "definite": false,
                "start": 351,
                "end": 365
              }
            ],
            "declare": false,
            "start": 347,
            "end": 366
          }
        ],
        "start": 341,
        "end": 368
      },
      "alternate": null,
      "start": 313,
      "end": 368
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 368
}
```
