__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 10,
            "end": 40,
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 18,
                "end": 39,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 19,
                    "end": 29,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 20,
                        "end": 22,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 24,
                        "end": 28,
                        "value": true,
                        "raw": "true"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 31,
                    "end": 38,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 32,
                        "end": 34,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 36,
                        "end": 37,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 42,
      "end": 83,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 57,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 57,
            "id": {
              "type": "ArrayPattern",
              "start": 51,
              "end": 57,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 83,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 74,
            "expression": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 79,
            "end": 81,
            "expression": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
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
