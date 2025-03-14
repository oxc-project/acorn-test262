__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 20,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 20,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 17,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 85,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 85,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 28,
            "end": 83,
            "body": {
              "type": "TSModuleBlock",
              "start": 48,
              "end": 83,
              "body": [
                {
                  "type": "TSDeclareFunction",
                  "start": 58,
                  "end": 77,
                  "async": false,
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 76,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 72,
                      "end": 76
                    }
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
