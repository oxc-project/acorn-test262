__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 33,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 32,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 15,
              "end": 32,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 21,
                "end": 32,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 21,
                  "end": 25
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 32,
                  "decorators": [],
                  "name": "window",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
