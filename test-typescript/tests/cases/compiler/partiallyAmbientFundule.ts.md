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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 52,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 50,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 32,
              "end": 50,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
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
        "start": 69,
        "end": 72,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
