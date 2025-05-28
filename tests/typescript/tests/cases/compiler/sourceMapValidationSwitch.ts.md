__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 348,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
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
            "end": 10,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 12,
      "end": 167,
      "discriminant": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 29,
          "end": 64,
          "test": {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "value": 5,
            "raw": "5"
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 45,
              "end": 49,
              "expression": {
                "type": "UpdateExpression",
                "start": 45,
                "end": 48,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 58,
              "end": 64,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 69,
          "end": 133,
          "test": {
            "type": "Literal",
            "start": 74,
            "end": 76,
            "value": 10,
            "raw": "10"
          },
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 86,
              "end": 133,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 100,
                  "end": 104,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 100,
                    "end": 103,
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "BreakStatement",
                  "start": 117,
                  "end": 123,
                  "label": null
                }
              ]
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 138,
          "end": 165,
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 155,
              "end": 165,
              "expression": {
                "type": "AssignmentExpression",
                "start": 155,
                "end": 164,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 159,
                  "end": 164,
                  "left": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "start": 162,
                    "end": 164,
                    "value": 10,
                    "raw": "10"
                  }
                }
              },
              "directive": null
            }
          ]
        }
      ]
    },
    {
      "type": "SwitchStatement",
      "start": 168,
      "end": 348,
      "discriminant": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 185,
          "end": 220,
          "test": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "value": 5,
            "raw": "5"
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 201,
              "end": 205,
              "expression": {
                "type": "UpdateExpression",
                "start": 201,
                "end": 204,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 214,
              "end": 220,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 225,
          "end": 289,
          "test": {
            "type": "Literal",
            "start": 230,
            "end": 232,
            "value": 10,
            "raw": "10"
          },
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 242,
              "end": 289,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 256,
                  "end": 260,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 256,
                    "end": 259,
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 257,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "BreakStatement",
                  "start": 273,
                  "end": 279,
                  "label": null
                }
              ]
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 294,
          "end": 346,
          "test": null,
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 311,
              "end": 346,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 325,
                  "end": 336,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 325,
                    "end": 335,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 326,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 329,
                      "end": 335,
                      "left": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 330,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "start": 333,
                        "end": 335,
                        "value": 10,
                        "raw": "10"
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
