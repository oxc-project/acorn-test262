__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 78,
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
      "end": 78,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 54,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 58,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "v",
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
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "name": "map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 78,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 76,
            "expression": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
