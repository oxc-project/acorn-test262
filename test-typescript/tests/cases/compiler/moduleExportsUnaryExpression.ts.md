__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 239,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 12,
      "end": 223,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 19,
        "end": 223,
        "id": {
          "type": "Identifier",
          "start": 28,
          "end": 31,
          "name": "foo",
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
            "start": 32,
            "end": 41,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 43,
          "end": 223,
          "body": [
            {
              "type": "IfStatement",
              "start": 49,
              "end": 79,
              "test": {
                "type": "BinaryExpression",
                "start": 53,
                "end": 61,
                "left": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<=",
                "right": {
                  "type": "UpdateExpression",
                  "start": 58,
                  "end": 61,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "start": 63,
                "end": 79,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 70,
                  "end": 78,
                  "left": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "UpdateExpression",
                    "start": 75,
                    "end": 78,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 76,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "start": 84,
              "end": 114,
              "test": {
                "type": "BinaryExpression",
                "start": 88,
                "end": 96,
                "left": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<=",
                "right": {
                  "type": "UpdateExpression",
                  "start": 93,
                  "end": 96,
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "start": 98,
                "end": 114,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 105,
                  "end": 113,
                  "left": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "UpdateExpression",
                    "start": 110,
                    "end": 113,
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "start": 119,
              "end": 149,
              "test": {
                "type": "BinaryExpression",
                "start": 123,
                "end": 131,
                "left": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<=",
                "right": {
                  "type": "UpdateExpression",
                  "start": 128,
                  "end": 131,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "start": 133,
                "end": 149,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 140,
                  "end": 148,
                  "left": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "UpdateExpression",
                    "start": 145,
                    "end": 148,
                    "operator": "++",
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
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "start": 154,
              "end": 184,
              "test": {
                "type": "BinaryExpression",
                "start": 158,
                "end": 166,
                "left": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<=",
                "right": {
                  "type": "UpdateExpression",
                  "start": 163,
                  "end": 166,
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "start": 168,
                "end": 184,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 175,
                  "end": 183,
                  "left": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "UpdateExpression",
                    "start": 180,
                    "end": 183,
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "ExpressionStatement",
              "start": 190,
              "end": 194,
              "expression": {
                "type": "UpdateExpression",
                "start": 190,
                "end": 193,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 199,
              "end": 203,
              "expression": {
                "type": "UpdateExpression",
                "start": 199,
                "end": 202,
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 208,
              "end": 212,
              "expression": {
                "type": "UpdateExpression",
                "start": 208,
                "end": 211,
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 217,
              "end": 221,
              "expression": {
                "type": "UpdateExpression",
                "start": 217,
                "end": 220,
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 225,
      "end": 238,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 234,
          "end": 235,
          "local": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
