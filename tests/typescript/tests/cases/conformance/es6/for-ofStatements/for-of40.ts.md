__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 20,
                        "end": 22
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 24,
                        "end": 28
                      }
                    ],
                    "start": 19,
                    "end": 29
                  }
                ],
                "start": 18,
                "end": 30
              }
            ],
            "start": 10,
            "end": 31
          },
          "definite": false,
          "start": 4,
          "end": 31
        }
      ],
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 47,
                    "end": 49
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "right": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 55,
                    "end": 60
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 60
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 61
            },
            "init": null,
            "definite": false,
            "start": 42,
            "end": 61
          }
        ],
        "declare": false,
        "start": 38,
        "end": 61
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 68
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "directive": null,
            "start": 76,
            "end": 78
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "directive": null,
            "start": 83,
            "end": 85
          }
        ],
        "start": 70,
        "end": 87
      },
      "start": 33,
      "end": 87
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 87
}
```
