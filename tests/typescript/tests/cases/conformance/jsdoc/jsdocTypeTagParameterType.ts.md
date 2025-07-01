__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 54
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 70
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 73,
                      "end": 74
                    },
                    "start": 65,
                    "end": 74
                  },
                  "directive": null,
                  "start": 65,
                  "end": 74
                }
              ],
              "start": 59,
              "end": 92
            },
            "id": null,
            "generator": false,
            "start": 48,
            "end": 92
          },
          "definite": false,
          "start": 44,
          "end": 92
        }
      ],
      "declare": false,
      "start": 38,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 139
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 153,
                "end": 154
              },
              "start": 149,
              "end": 154
            },
            "directive": null,
            "start": 149,
            "end": 154
          }
        ],
        "start": 143,
        "end": 172
      },
      "expression": false,
      "start": 129,
      "end": 172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 172
}
```
