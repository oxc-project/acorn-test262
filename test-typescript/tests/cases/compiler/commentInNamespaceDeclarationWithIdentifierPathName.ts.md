__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 70,
      "id": {
        "type": "TSQualifiedName",
        "start": 11,
        "end": 25,
        "left": {
          "type": "TSQualifiedName",
          "start": 11,
          "end": 19,
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 16,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "name": "hi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 20,
          "end": 25,
          "name": "world",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 70,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 32,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
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
              "start": 47,
              "end": 49,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
