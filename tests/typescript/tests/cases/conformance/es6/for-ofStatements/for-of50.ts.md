__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
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
            "end": 31,
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
                "end": 30,
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
      "start": 33,
      "end": 76,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 50,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 50,
            "id": {
              "type": "ArrayPattern",
              "start": 44,
              "end": 50,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
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
        "start": 54,
        "end": 57,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 76,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 67,
            "expression": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 74,
            "expression": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
