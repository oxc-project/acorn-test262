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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 43,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 42,
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
              "callee": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 30,
                  "end": 41,
                  "value": "my-symbol",
                  "raw": "\"my-symbol\""
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 99,
        "end": 138,
        "id": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "b",
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
            "start": 110,
            "end": 115,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
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
        "expression": false
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
