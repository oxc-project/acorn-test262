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
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 113,
        "decorators": [],
        "name": "filter",
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
          "start": 114,
          "end": 123,
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 243,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 242,
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
            "callee": {
              "type": "Identifier",
              "start": 176,
              "end": 182,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 226,
                "end": 240,
                "expression": true,
                "async": false,
                "typeParameters": null,
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
                "body": {
                  "type": "Literal",
                  "start": 236,
                  "end": 240,
                  "value": true,
                  "raw": "true"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 350,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 349,
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
            "callee": {
              "type": "Identifier",
              "start": 255,
              "end": 261,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 330,
                "end": 347,
                "expression": true,
                "async": false,
                "typeParameters": null,
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
                "body": {
                  "type": "Literal",
                  "start": 343,
                  "end": 347,
                  "value": true,
                  "raw": "true"
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
