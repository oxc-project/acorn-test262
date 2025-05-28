__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 190,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 89,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "decorators": [],
            "name": "seq",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 77,
            "end": 88,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 82,
              "end": 88,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
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
      "type": "VariableDeclaration",
      "start": 91,
      "end": 113,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 102,
            "decorators": [],
            "name": "text1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 105,
            "end": 112,
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 136,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 125,
            "decorators": [],
            "name": "text2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 128,
            "end": 135,
            "value": "world",
            "raw": "\"world\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 190,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 169,
            "decorators": [],
            "name": "text3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 172,
            "end": 189,
            "callee": {
              "type": "CallExpression",
              "start": 172,
              "end": 182,
              "callee": {
                "type": "Identifier",
                "start": 172,
                "end": 175,
                "decorators": [],
                "name": "seq",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 181,
                  "decorators": [],
                  "name": "text1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 183,
                "end": 188,
                "decorators": [],
                "name": "text2",
                "optional": false,
                "typeAnnotation": null
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
