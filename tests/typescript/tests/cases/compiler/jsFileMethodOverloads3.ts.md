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
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 165
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 167
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "start": 175,
            "end": 184
          }
        ],
        "start": 169,
        "end": 186
      },
      "expression": false,
      "start": 154,
      "end": 186
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 205
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 206,
                  "end": 209
                }
              ],
              "optional": false,
              "start": 203,
              "end": 210
            },
            "definite": false,
            "start": 199,
            "end": 210
          }
        ],
        "declare": false,
        "start": 195,
        "end": 211
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 188,
      "end": 211
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 229
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 230,
                  "end": 237
                }
              ],
              "optional": false,
              "start": 227,
              "end": 238
            },
            "definite": false,
            "start": 223,
            "end": 238
          }
        ],
        "declare": false,
        "start": 219,
        "end": 239
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 212,
      "end": 239
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 154,
  "end": 239
}
```
