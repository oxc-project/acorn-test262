__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 26,
            "end": 47,
            "callee": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 34,
                "end": 46,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 35,
                    "end": 45,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 36,
                        "end": 38,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 40,
                        "end": 44,
                        "value": true,
                        "raw": "true"
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
      "start": 49,
      "end": 90,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 54,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 58,
            "end": 64,
            "id": {
              "type": "ArrayPattern",
              "start": 58,
              "end": 64,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
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
        "start": 68,
        "end": 71,
        "name": "map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 90,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 79,
            "end": 81,
            "expression": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 88,
            "expression": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
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
