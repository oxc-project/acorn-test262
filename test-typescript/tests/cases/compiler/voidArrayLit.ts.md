__ESTREE_TEST__:PASS:
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
            "optional": false,
            "typeAnnotation": null
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                },
                "optional": false,
                "typeArguments": null
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
      "directive": null,
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
          "params": [],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
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
        "optional": false,
        "typeAnnotation": null
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
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 93,
      "directive": null,
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
