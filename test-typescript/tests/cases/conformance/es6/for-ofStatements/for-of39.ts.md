__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 24,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 27,
            "end": 57,
            "callee": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 35,
                "end": 56,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 36,
                    "end": 46,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 37,
                        "end": 39,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 41,
                        "end": 45,
                        "value": true,
                        "raw": "true"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 48,
                    "end": 55,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 49,
                        "end": 51,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 53,
                        "end": 54,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 59,
      "end": 100,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 74,
            "id": {
              "type": "ArrayPattern",
              "start": 68,
              "end": 74,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "name": "map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 100,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 91,
            "expression": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 98,
            "expression": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
