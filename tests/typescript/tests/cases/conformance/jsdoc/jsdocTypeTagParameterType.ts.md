__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 172,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 93,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 48,
            "end": 92,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 49,
                "end": 54,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 59,
              "end": 92,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 65,
                  "end": 74,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 65,
                    "end": 74,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 70,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 73,
                      "end": 74,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 139,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 172,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 154,
            "expression": {
              "type": "AssignmentExpression",
              "start": 149,
              "end": 154,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 153,
                "end": 154,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
