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
      "end": 87,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 61,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 61,
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
                  "right": {
                    "type": "Literal",
                    "start": 47,
                    "end": 49,
                    "value": "",
                    "raw": "\"\""
                  },
                  "optional": false,
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
                  "right": {
                    "type": "Literal",
                    "start": 55,
                    "end": 60,
                    "value": false,
                    "raw": "false"
                  },
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
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 87,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 78,
            "expression": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 85,
            "expression": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
