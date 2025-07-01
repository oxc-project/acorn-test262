__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 123
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 156,
              "end": 160
            },
            "start": 129,
            "end": 162
          }
        ],
        "start": 125,
        "end": 164
      },
      "expression": false,
      "start": 98,
      "end": 164
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 173
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 182
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 231
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 236,
                  "end": 240
                },
                "id": null,
                "generator": false,
                "start": 226,
                "end": 240
              }
            ],
            "optional": false,
            "start": 176,
            "end": 242
          },
          "definite": false,
          "start": 172,
          "end": 242
        }
      ],
      "declare": false,
      "start": 166,
      "end": 243
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 252
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 261
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 331,
                    "end": 335
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 338
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 343,
                  "end": 347
                },
                "id": null,
                "generator": false,
                "start": 330,
                "end": 347
              }
            ],
            "optional": false,
            "start": 255,
            "end": 349
          },
          "definite": false,
          "start": 251,
          "end": 349
        }
      ],
      "declare": false,
      "start": 245,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 98,
  "end": 350
}
```
