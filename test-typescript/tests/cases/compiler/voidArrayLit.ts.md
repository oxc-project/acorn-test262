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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "name": "va",
            "typeAnnotation": null,
            "decorators": [],
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
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 11,
                  "end": 19,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 17,
                    "end": 19,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 44,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 43,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 32,
          "end": 40,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 38,
            "end": 40,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 72,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 72,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 66,
              "end": 72
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 76,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 93,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 92,
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 81,
            "end": 91,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 82,
              "end": 88,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 88,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
