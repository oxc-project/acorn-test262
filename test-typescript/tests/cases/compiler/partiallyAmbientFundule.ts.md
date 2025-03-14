__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 52,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 50,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 32,
              "end": 50,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 49,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 46,
                  "end": 49
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 72,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
