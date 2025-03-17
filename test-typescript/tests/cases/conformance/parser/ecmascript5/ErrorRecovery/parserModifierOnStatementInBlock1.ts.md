__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 49,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 49,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 27,
              "end": 47,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 34,
                "end": 47,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 38,
                    "end": 46,
                    "id": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 42,
                      "end": 46
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
