__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
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
      "end": 74,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 48,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 48,
            "id": {
              "type": "ArrayPattern",
              "start": 42,
              "end": 48,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
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
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 74,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 63,
            "end": 65,
            "expression": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 70,
            "end": 72,
            "expression": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
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
