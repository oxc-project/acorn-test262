ambientModuleWithClassDeclarationWithExtends.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 64,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 64,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 36,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 33,
              "end": 36,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 41,
            "end": 62,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 59,
              "end": 62,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "A",
              "optional": false
            }
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
    }
  ],
  "sourceType": "script"
}
```
