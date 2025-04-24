__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 98,
  "end": 350,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 164,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 164,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 129,
            "end": 162,
            "argument": {
              "type": "Literal",
              "start": 156,
              "end": 160,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 113,
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 123,
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 176,
            "end": 242,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 226,
                "end": 240,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 236,
                  "end": 240,
                  "raw": "true",
                  "value": true
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 227,
                    "end": 231,
                    "decorators": [],
                    "name": "pose",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 176,
              "end": 182,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 252,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 255,
            "end": 349,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 330,
                "end": 347,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 343,
                  "end": 347,
                  "raw": "true",
                  "value": true
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 331,
                    "end": 335,
                    "decorators": [],
                    "name": "pose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 255,
              "end": 261,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
