__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 43,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 42,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "kSymbol",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 23,
              "end": 42,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 30,
                  "end": 41,
                  "raw": "\"my-symbol\"",
                  "value": "my-symbol"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "Symbol",
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 138,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 138,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 99,
        "end": 138,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 117,
          "end": 138,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 123,
              "end": 136,
              "argument": {
                "type": "Identifier",
                "start": 130,
                "end": 135,
                "decorators": [],
                "name": "value",
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
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 110,
            "end": 115,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
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
