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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 49,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 49,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 27,
              "end": 47,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 34,
                "end": 47,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 38,
                    "end": 46,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 42,
                      "end": 46
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
