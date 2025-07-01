__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 21,
          "end": 23
        },
        "start": 16,
        "end": 23
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "start": 31,
              "end": 34
            },
            "directive": null,
            "start": 31,
            "end": 35
          }
        ],
        "start": 25,
        "end": 37
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [],
        "start": 43,
        "end": 46
      },
      "start": 12,
      "end": 46
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 52
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 56,
          "end": 58
        },
        "start": 51,
        "end": 58
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "start": 66,
              "end": 69
            },
            "directive": null,
            "start": 66,
            "end": 70
          }
        ],
        "start": 60,
        "end": 72
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 87,
            "end": 89
          },
          "start": 82,
          "end": 89
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 98
                },
                "start": 97,
                "end": 100
              },
              "directive": null,
              "start": 97,
              "end": 101
            }
          ],
          "start": 91,
          "end": 103
        },
        "alternate": {
          "type": "IfStatement",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "operator": "==",
            "right": {
              "type": "Literal",
              "value": 30,
              "raw": "30",
              "start": 118,
              "end": 120
            },
            "start": 113,
            "end": 120
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "right": {
                    "type": "Literal",
                    "value": 70,
                    "raw": "70",
                    "start": 133,
                    "end": 135
                  },
                  "start": 128,
                  "end": 135
                },
                "directive": null,
                "start": 128,
                "end": 136
              }
            ],
            "start": 122,
            "end": 138
          },
          "alternate": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 151
                  },
                  "start": 150,
                  "end": 153
                },
                "directive": null,
                "start": 150,
                "end": 154
              }
            ],
            "start": 144,
            "end": 156
          },
          "start": 109,
          "end": 156
        },
        "start": 78,
        "end": 156
      },
      "start": 47,
      "end": 156
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
}
```
