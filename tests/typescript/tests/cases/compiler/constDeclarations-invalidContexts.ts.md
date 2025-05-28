__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 466,
  "body": [
    {
      "type": "IfStatement",
      "start": 48,
      "end": 100,
      "test": {
        "type": "Literal",
        "start": 52,
        "end": 56,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 76,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 71,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 74,
              "end": 75,
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
        "start": 87,
        "end": 100,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 93,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 98,
              "end": 99,
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
      "start": 102,
      "end": 133,
      "test": {
        "type": "Literal",
        "start": 109,
        "end": 113,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 120,
        "end": 133,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 126,
            "end": 132,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 128,
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 131,
              "end": 132,
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
      "start": 135,
      "end": 170,
      "body": {
        "type": "VariableDeclaration",
        "start": 143,
        "end": 156,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 149,
            "end": 155,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 151,
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 154,
              "end": 155,
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
        "start": 164,
        "end": 168,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 179,
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
      "start": 181,
      "end": 210,
      "object": {
        "type": "Identifier",
        "start": 187,
        "end": 190,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 197,
        "end": 210,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 203,
            "end": 209,
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 205,
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 208,
              "end": 209,
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
      "start": 284,
      "end": 330,
      "init": {
        "type": "VariableDeclaration",
        "start": 289,
        "end": 298,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 293,
            "end": 298,
            "id": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 297,
              "end": 298,
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
        "start": 300,
        "end": 306,
        "left": {
          "type": "Identifier",
          "start": 300,
          "end": 301,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 304,
          "end": 306,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 308,
        "end": 311,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 308,
          "end": 309,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 317,
        "end": 330,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 323,
            "end": 329,
            "id": {
              "type": "Identifier",
              "start": 323,
              "end": 325,
              "decorators": [],
              "name": "c6",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 328,
              "end": 329,
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
      "start": 332,
      "end": 369,
      "left": {
        "type": "VariableDeclaration",
        "start": 337,
        "end": 343,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 341,
            "end": 343,
            "id": {
              "type": "Identifier",
              "start": 341,
              "end": 343,
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
        "start": 347,
        "end": 349,
        "properties": []
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 356,
        "end": 369,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 362,
            "end": 368,
            "id": {
              "type": "Identifier",
              "start": 362,
              "end": 364,
              "decorators": [],
              "name": "c7",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 367,
              "end": 368,
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
      "start": 371,
      "end": 406,
      "test": {
        "type": "Literal",
        "start": 375,
        "end": 379,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "LabeledStatement",
        "start": 386,
        "end": 406,
        "label": {
          "type": "Identifier",
          "start": 386,
          "end": 391,
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "VariableDeclaration",
          "start": 393,
          "end": 406,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 399,
              "end": 405,
              "id": {
                "type": "Identifier",
                "start": 399,
                "end": 401,
                "decorators": [],
                "name": "c8",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 404,
                "end": 405,
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
      "start": 408,
      "end": 463,
      "test": {
        "type": "Literal",
        "start": 415,
        "end": 420,
        "value": false,
        "raw": "false"
      },
      "body": {
        "type": "LabeledStatement",
        "start": 426,
        "end": 463,
        "label": {
          "type": "Identifier",
          "start": 426,
          "end": 432,
          "decorators": [],
          "name": "label2",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "LabeledStatement",
          "start": 434,
          "end": 463,
          "label": {
            "type": "Identifier",
            "start": 434,
            "end": 440,
            "decorators": [],
            "name": "label3",
            "optional": false,
            "typeAnnotation": null
          },
          "body": {
            "type": "LabeledStatement",
            "start": 442,
            "end": 463,
            "label": {
              "type": "Identifier",
              "start": 442,
              "end": 448,
              "decorators": [],
              "name": "label4",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 450,
              "end": 463,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 456,
                  "end": 462,
                  "id": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 458,
                    "decorators": [],
                    "name": "c9",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 461,
                    "end": 462,
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
