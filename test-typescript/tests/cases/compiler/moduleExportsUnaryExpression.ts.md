__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 238,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 12,
      "end": 223,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 19,
        "end": 223,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 43,
          "end": 223,
          "body": [
            {
              "type": "IfStatement",
              "start": 49,
              "end": 79,
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "start": 63,
                "end": 79,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 70,
                  "end": 78,
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UpdateExpression",
                    "start": 75,
                    "end": 78,
                    "argument": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 76,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 53,
                "end": 61,
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "UpdateExpression",
                  "start": 58,
                  "end": 61,
                  "argument": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": false
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 84,
              "end": 114,
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "start": 98,
                "end": 114,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 105,
                  "end": 113,
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UpdateExpression",
                    "start": 110,
                    "end": 113,
                    "argument": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "--",
                    "prefix": false
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 88,
                "end": 96,
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "UpdateExpression",
                  "start": 93,
                  "end": 96,
                  "argument": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "--",
                  "prefix": false
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 119,
              "end": 149,
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "start": 133,
                "end": 149,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 140,
                  "end": 148,
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UpdateExpression",
                    "start": 145,
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
                    "operator": "++",
                    "prefix": true
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 123,
                "end": 131,
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "UpdateExpression",
                  "start": 128,
                  "end": 131,
                  "argument": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "++",
                  "prefix": true
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 154,
              "end": 184,
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "start": 168,
                "end": 184,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 175,
                  "end": 183,
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UpdateExpression",
                    "start": 180,
                    "end": 183,
                    "argument": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "--",
                    "prefix": true
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 158,
                "end": 166,
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "UpdateExpression",
                  "start": 163,
                  "end": 166,
                  "argument": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "--",
                  "prefix": true
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 190,
              "end": 194,
              "directive": null,
              "expression": {
                "type": "UpdateExpression",
                "start": 190,
                "end": 193,
                "argument": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "++",
                "prefix": false
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 199,
              "end": 203,
              "directive": null,
              "expression": {
                "type": "UpdateExpression",
                "start": 199,
                "end": 202,
                "argument": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "--",
                "prefix": false
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 208,
              "end": 212,
              "directive": null,
              "expression": {
                "type": "UpdateExpression",
                "start": 208,
                "end": 211,
                "argument": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "++",
                "prefix": true
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 217,
              "end": 221,
              "directive": null,
              "expression": {
                "type": "UpdateExpression",
                "start": 217,
                "end": 220,
                "argument": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "--",
                "prefix": true
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
          "end": 31,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 32,
            "end": 41,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 225,
      "end": 238,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 234,
          "end": 235,
          "exported": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
