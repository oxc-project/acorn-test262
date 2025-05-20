__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 19,
            "elements": [
              {
                "type": "Literal",
                "start": 13,
                "end": 14,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 15,
                "end": 16,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 17,
                "end": 18,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "sum",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 35,
      "end": 133,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 133,
        "body": [
          {
            "type": "IfStatement",
            "start": 64,
            "end": 110,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 79,
              "end": 110,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 89,
                  "end": 104,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 89,
                    "end": 104,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 94,
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 97,
                      "end": 104,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 98,
                          "end": 99,
                          "raw": "4",
                          "value": 4
                        },
                        {
                          "type": "Literal",
                          "start": 100,
                          "end": 101,
                          "raw": "5",
                          "value": 5
                        },
                        {
                          "type": "Literal",
                          "start": 102,
                          "end": 103,
                          "raw": "6",
                          "value": 6
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 68,
              "end": 77,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "decorators": [],
                "name": "sum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 76,
                "end": 77,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 131,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 120,
              "end": 130,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 123,
                "decorators": [],
                "name": "sum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 47,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 51,
        "end": 56,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
