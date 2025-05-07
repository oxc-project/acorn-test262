__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
          "definite": false,
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
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      {
                        "type": "Literal",
                        "start": 24,
                        "end": 28,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 33,
      "end": 87,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 87,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 78,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 85,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 61,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 42,
              "end": 61,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 47,
                    "end": 49,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 51,
                  "end": 60,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 55,
                    "end": 60,
                    "raw": "false",
                    "value": false,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
