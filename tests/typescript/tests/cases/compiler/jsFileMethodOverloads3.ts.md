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
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 165,
        "decorators": [],
        "name": "id",
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
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 188,
      "end": 211,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 195,
        "end": 211,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 199,
            "end": 210,
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
              "callee": {
                "type": "Identifier",
                "start": 203,
                "end": 205,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 206,
                  "end": 209,
                  "value": 123,
                  "raw": "123"
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 212,
      "end": 239,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 219,
        "end": 239,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 223,
            "end": 238,
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
              "callee": {
                "type": "Identifier",
                "start": 227,
                "end": 229,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 230,
                  "end": 237,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
