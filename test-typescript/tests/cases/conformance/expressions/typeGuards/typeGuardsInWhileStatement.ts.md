__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 495,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 48,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 48,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 33,
              "end": 48,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 42,
                  "end": 48
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 156,
        "body": [
          {
            "type": "WhileStatement",
            "start": 56,
            "end": 137,
            "test": {
              "type": "BinaryExpression",
              "start": 63,
              "end": 84,
              "left": {
                "type": "UnaryExpression",
                "start": 63,
                "end": 71,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 76,
                "end": 84,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 86,
              "end": 137,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 96,
                  "end": 98,
                  "expression": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 117,
                  "end": 131,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 117,
                    "end": 130,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 130,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 142,
            "end": 144,
            "expression": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 168,
          "end": 186,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 186,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 171,
              "end": 186,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 171,
                  "end": 177
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 180,
                  "end": 186
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 322,
        "body": [
          {
            "type": "WhileStatement",
            "start": 194,
            "end": 303,
            "test": {
              "type": "BinaryExpression",
              "start": 201,
              "end": 222,
              "left": {
                "type": "UnaryExpression",
                "start": 201,
                "end": 209,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 214,
                "end": 222,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 224,
              "end": 303,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 234,
                  "end": 253,
                  "test": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 242,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 244,
                    "end": 253,
                    "label": null
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 262,
                  "end": 264,
                  "expression": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 283,
                  "end": 297,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 283,
                    "end": 296,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 284,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 296,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 310,
            "expression": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 323,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 333,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 334,
          "end": 352,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 335,
            "end": 352,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 337,
              "end": 352,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 337,
                  "end": 343
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 346,
                  "end": 352
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 494,
        "body": [
          {
            "type": "WhileStatement",
            "start": 360,
            "end": 466,
            "test": {
              "type": "BinaryExpression",
              "start": 367,
              "end": 388,
              "left": {
                "type": "UnaryExpression",
                "start": 367,
                "end": 375,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 375,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 380,
                "end": 388,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 390,
              "end": 466,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 400,
                  "end": 416,
                  "test": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 408,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 410,
                    "end": 416,
                    "label": null
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 425,
                  "end": 427,
                  "expression": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 446,
                  "end": 460,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 446,
                    "end": 459,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 447,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 459,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 471,
            "end": 473,
            "expression": {
              "type": "Identifier",
              "start": 471,
              "end": 472,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
