__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 368,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 9,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 9,
                "members": []
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
      "start": 11,
      "end": 39,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 38,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 18,
                "end": 38,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 19,
                    "end": 37,
                    "key": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 27,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 31,
                        "end": 37
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "type": "IfStatement",
      "start": 40,
      "end": 93,
      "test": {
        "type": "BinaryExpression",
        "start": 44,
        "end": 65,
        "left": {
          "type": "UnaryExpression",
          "start": 44,
          "end": 52,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 57,
          "end": 65,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 67,
        "end": 93,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 73,
            "end": 91,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 77,
                "end": 90,
                "id": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 86,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "a",
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
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 94,
      "end": 147,
      "test": {
        "type": "BinaryExpression",
        "start": 98,
        "end": 119,
        "left": {
          "type": "UnaryExpression",
          "start": 98,
          "end": 106,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 119,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 121,
        "end": 147,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 127,
            "end": 145,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 131,
                "end": 144,
                "id": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 140,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 134,
                      "end": 140
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "a",
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
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 148,
      "end": 203,
      "test": {
        "type": "BinaryExpression",
        "start": 152,
        "end": 174,
        "left": {
          "type": "UnaryExpression",
          "start": 152,
          "end": 160,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 165,
          "end": 174,
          "value": "boolean",
          "raw": "\"boolean\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 176,
        "end": 203,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 182,
            "end": 201,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 186,
                "end": 200,
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 196,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 196,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 189,
                      "end": 196
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "a",
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
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 205,
      "end": 258,
      "test": {
        "type": "BinaryExpression",
        "start": 209,
        "end": 230,
        "left": {
          "type": "UnaryExpression",
          "start": 209,
          "end": 217,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 222,
          "end": 230,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 232,
        "end": 258,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 238,
            "end": 256,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 242,
                "end": 255,
                "id": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 251,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 245,
                      "end": 251
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "decorators": [],
                  "name": "b",
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
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 259,
      "end": 312,
      "test": {
        "type": "BinaryExpression",
        "start": 263,
        "end": 284,
        "left": {
          "type": "UnaryExpression",
          "start": 263,
          "end": 271,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 276,
          "end": 284,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 286,
        "end": 312,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 292,
            "end": 310,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 296,
                "end": 309,
                "id": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 305,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 297,
                    "end": 305,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 299,
                      "end": 305
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 309,
                  "decorators": [],
                  "name": "b",
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
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 313,
      "end": 368,
      "test": {
        "type": "BinaryExpression",
        "start": 317,
        "end": 339,
        "left": {
          "type": "UnaryExpression",
          "start": 317,
          "end": 325,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 330,
          "end": 339,
          "value": "boolean",
          "raw": "\"boolean\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 341,
        "end": 368,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 366,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 365,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 361,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 352,
                    "end": 361,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 354,
                      "end": 361
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "b",
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
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
