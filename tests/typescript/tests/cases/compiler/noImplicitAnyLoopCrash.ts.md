__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 16,
              "end": 18
            },
            "id": null,
            "generator": false,
            "start": 10,
            "end": 18
          },
          "definite": false,
          "start": 4,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 27
        }
      ],
      "declare": false,
      "start": 20,
      "end": 28
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 36,
        "end": 37
      },
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 48
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "~",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 55
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 59,
                        "end": 62
                      },
                      "start": 56,
                      "end": 62
                    }
                  ],
                  "optional": false,
                  "start": 52,
                  "end": 63
                },
                "prefix": true,
                "start": 51,
                "end": 63
              },
              "start": 45,
              "end": 63
            },
            "directive": null,
            "start": 45,
            "end": 64
          }
        ],
        "start": 39,
        "end": 66
      },
      "start": 29,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
