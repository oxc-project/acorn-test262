typeGuardsInWhileStatement.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 156,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 156,
        "body": [
          {
            "type": "WhileStatement",
            "start": 56,
            "end": 137,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 130,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 63,
              "end": 84,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 63,
                "end": 71,
                "argument": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 76,
                "end": 84,
                "raw": "\"string\"",
                "value": "string"
              }
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
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 48,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 322,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 322,
        "body": [
          {
            "type": "WhileStatement",
            "start": 194,
            "end": 303,
            "body": {
              "type": "BlockStatement",
              "start": 224,
              "end": 303,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 234,
                  "end": 253,
                  "alternate": null,
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 244,
                    "end": 253,
                    "label": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 242,
                    "decorators": [],
                    "name": "cond",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 262,
                  "end": 264,
                  "expression": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 296,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 201,
              "end": 222,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 201,
                "end": 209,
                "argument": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 214,
                "end": 222,
                "raw": "\"string\"",
                "value": "string"
              }
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
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 168,
          "end": 186,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 323,
      "end": 494,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 494,
        "body": [
          {
            "type": "WhileStatement",
            "start": 360,
            "end": 466,
            "body": {
              "type": "BlockStatement",
              "start": 390,
              "end": 466,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 400,
                  "end": 416,
                  "alternate": null,
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 410,
                    "end": 416,
                    "label": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 408,
                    "decorators": [],
                    "name": "cond",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 425,
                  "end": 427,
                  "expression": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 459,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 367,
              "end": 388,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 367,
                "end": 375,
                "argument": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 375,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 380,
                "end": 388,
                "raw": "\"string\"",
                "value": "string"
              }
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
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 333,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 334,
          "end": 352,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
