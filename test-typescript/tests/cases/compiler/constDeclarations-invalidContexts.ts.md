__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 467,
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 71,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
        "declare": false
      },
      "alternate": {
        "type": "VariableDeclaration",
        "start": 87,
        "end": 100,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 93,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "name": "c2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 126,
            "end": 132,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 128,
              "name": "c3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 149,
            "end": 155,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 151,
              "name": "c4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 179,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 197,
        "end": 210,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 203,
            "end": 209,
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 205,
              "name": "c5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 293,
            "end": 298,
            "id": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "var",
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 317,
        "end": 330,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 323,
            "end": 329,
            "id": {
              "type": "Identifier",
              "start": 323,
              "end": 325,
              "name": "c6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 341,
            "end": 343,
            "id": {
              "type": "Identifier",
              "start": 341,
              "end": 343,
              "name": "i2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 362,
            "end": 368,
            "id": {
              "type": "Identifier",
              "start": 362,
              "end": 364,
              "name": "c7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
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
        "body": {
          "type": "VariableDeclaration",
          "start": 393,
          "end": 406,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 399,
              "end": 405,
              "id": {
                "type": "Identifier",
                "start": 399,
                "end": 401,
                "name": "c8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "kind": "const",
          "declare": false
        },
        "label": {
          "type": "Identifier",
          "start": 386,
          "end": 391,
          "name": "label",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "body": {
          "type": "LabeledStatement",
          "start": 434,
          "end": 463,
          "body": {
            "type": "LabeledStatement",
            "start": 442,
            "end": 463,
            "body": {
              "type": "VariableDeclaration",
              "start": 450,
              "end": 463,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 456,
                  "end": 462,
                  "id": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 458,
                    "name": "c9",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            "label": {
              "type": "Identifier",
              "start": 442,
              "end": 448,
              "name": "label4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "label": {
            "type": "Identifier",
            "start": 434,
            "end": 440,
            "name": "label3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "label": {
          "type": "Identifier",
          "start": 426,
          "end": 432,
          "name": "label2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
