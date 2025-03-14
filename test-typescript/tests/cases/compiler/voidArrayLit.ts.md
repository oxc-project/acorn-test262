voidArrayLit.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "va",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 9,
            "end": 23,
            "elements": [
              {
                "type": "CallExpression",
                "start": 10,
                "end": 22,
                "arguments": [],
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 11,
                  "end": 19,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 17,
                    "end": 19,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                },
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 44,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 43,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 32,
          "end": 40,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 38,
            "end": 40,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 76,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 72,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 72,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 66,
              "end": 72
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 93,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 92,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 81,
            "end": 91,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 82,
              "end": 88,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 88,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
