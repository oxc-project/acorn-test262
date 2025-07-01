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
            "name": "seq",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 74
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 83
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "id": null,
              "generator": false,
              "start": 82,
              "end": 88
            },
            "id": null,
            "generator": false,
            "start": 77,
            "end": 88
          },
          "definite": false,
          "start": 71,
          "end": 88
        }
      ],
      "declare": false,
      "start": 65,
      "end": 89
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
            "name": "text1",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 102
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 105,
            "end": 112
          },
          "definite": false,
          "start": 97,
          "end": 112
        }
      ],
      "declare": false,
      "start": 91,
      "end": 113
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
            "name": "text2",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 125
          },
          "init": {
            "type": "Literal",
            "value": "world",
            "raw": "\"world\"",
            "start": 128,
            "end": 135
          },
          "definite": false,
          "start": 120,
          "end": 135
        }
      ],
      "declare": false,
      "start": 114,
      "end": 136
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "text3",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 169
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "seq",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 181
                }
              ],
              "optional": false,
              "start": 172,
              "end": 182
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "text2",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 188
              }
            ],
            "optional": false,
            "start": 172,
            "end": 189
          },
          "definite": false,
          "start": 164,
          "end": 189
        }
      ],
      "declare": false,
      "start": 160,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 65,
  "end": 190
}
```
