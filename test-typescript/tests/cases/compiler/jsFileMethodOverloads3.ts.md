__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 154,
  "end": 239,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 154,
      "end": 186,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 186,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 175,
            "end": 184,
            "argument": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 165,
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 188,
      "end": 211,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 195,
        "end": 211,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 199,
            "end": 210,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 203,
              "end": 210,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 206,
                  "end": 209,
                  "raw": "123",
                  "value": 123,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 203,
                "end": 205,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 212,
      "end": 239,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 219,
        "end": 239,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 223,
            "end": 238,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 227,
              "end": 238,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 230,
                  "end": 237,
                  "raw": "\"hello\"",
                  "value": "hello",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 227,
                "end": 229,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
