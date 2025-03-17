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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 15,
                "end": 16,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 17,
                "end": 18,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "sum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 35,
      "end": 133,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "name": "num",
              "typeAnnotation": null,
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
      "right": {
        "type": "Identifier",
        "start": 51,
        "end": 56,
        "name": "array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 133,
        "body": [
          {
            "type": "IfStatement",
            "start": 64,
            "end": 110,
            "test": {
              "type": "BinaryExpression",
              "start": 68,
              "end": 77,
              "left": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "name": "sum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 76,
                "end": 77,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 79,
              "end": 110,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 89,
                  "end": 104,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 89,
                    "end": 104,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 94,
                      "name": "array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "value": 4,
                          "raw": "4"
                        },
                        {
                          "type": "Literal",
                          "start": 100,
                          "end": 101,
                          "value": 5,
                          "raw": "5"
                        },
                        {
                          "type": "Literal",
                          "start": 102,
                          "end": 103,
                          "value": 6,
                          "raw": "6"
                        }
                      ]
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 131,
            "expression": {
              "type": "AssignmentExpression",
              "start": 120,
              "end": 130,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 123,
                "name": "sum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
