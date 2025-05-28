__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 374,
  "body": [
    {
      "type": "IfStatement",
      "start": 46,
      "end": 94,
      "test": {
        "type": "Literal",
        "start": 50,
        "end": 54,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 72,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 67,
              "decorators": [],
              "name": "l1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "alternate": {
        "type": "VariableDeclaration",
        "start": 83,
        "end": 94,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 93,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 89,
              "decorators": [],
              "name": "l2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 96,
      "end": 125,
      "test": {
        "type": "Literal",
        "start": 103,
        "end": 107,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 125,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 118,
            "end": 124,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 120,
              "decorators": [],
              "name": "l3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 127,
      "end": 160,
      "body": {
        "type": "VariableDeclaration",
        "start": 135,
        "end": 146,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 139,
            "end": 145,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 141,
              "decorators": [],
              "name": "l4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 144,
              "end": 145,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "Literal",
        "start": 154,
        "end": 158,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 170,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "WithStatement",
      "start": 171,
      "end": 198,
      "object": {
        "type": "Identifier",
        "start": 177,
        "end": 180,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 187,
        "end": 198,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 191,
            "end": 197,
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "decorators": [],
              "name": "l5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 196,
              "end": 197,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    },
    {
      "type": "ForStatement",
      "start": 200,
      "end": 244,
      "init": {
        "type": "VariableDeclaration",
        "start": 205,
        "end": 214,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 209,
            "end": 214,
            "id": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 213,
              "end": 214,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 216,
        "end": 222,
        "left": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 220,
          "end": 222,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 224,
        "end": 227,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 224,
          "end": 225,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 233,
        "end": 244,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 237,
            "end": 243,
            "id": {
              "type": "Identifier",
              "start": 237,
              "end": 239,
              "decorators": [],
              "name": "l6",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 242,
              "end": 243,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 246,
      "end": 281,
      "left": {
        "type": "VariableDeclaration",
        "start": 251,
        "end": 257,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 255,
            "end": 257,
            "id": {
              "type": "Identifier",
              "start": 255,
              "end": 257,
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ObjectExpression",
        "start": 261,
        "end": 263,
        "properties": []
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 270,
        "end": 281,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 274,
            "end": 280,
            "id": {
              "type": "Identifier",
              "start": 274,
              "end": 276,
              "decorators": [],
              "name": "l7",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 279,
              "end": 280,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    },
    {
      "type": "IfStatement",
      "start": 283,
      "end": 316,
      "test": {
        "type": "Literal",
        "start": 287,
        "end": 291,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "LabeledStatement",
        "start": 298,
        "end": 316,
        "label": {
          "type": "Identifier",
          "start": 298,
          "end": 303,
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "VariableDeclaration",
          "start": 305,
          "end": 316,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 309,
              "end": 315,
              "id": {
                "type": "Identifier",
                "start": 309,
                "end": 311,
                "decorators": [],
                "name": "l8",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 314,
                "end": 315,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        }
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 318,
      "end": 371,
      "test": {
        "type": "Literal",
        "start": 325,
        "end": 330,
        "value": false,
        "raw": "false"
      },
      "body": {
        "type": "LabeledStatement",
        "start": 336,
        "end": 371,
        "label": {
          "type": "Identifier",
          "start": 336,
          "end": 342,
          "decorators": [],
          "name": "label2",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "LabeledStatement",
          "start": 344,
          "end": 371,
          "label": {
            "type": "Identifier",
            "start": 344,
            "end": 350,
            "decorators": [],
            "name": "label3",
            "optional": false,
            "typeAnnotation": null
          },
          "body": {
            "type": "LabeledStatement",
            "start": 352,
            "end": 371,
            "label": {
              "type": "Identifier",
              "start": 352,
              "end": 358,
              "decorators": [],
              "name": "label4",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 360,
              "end": 371,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 364,
                  "end": 370,
                  "id": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 366,
                    "decorators": [],
                    "name": "l9",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 369,
                    "end": 370,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
