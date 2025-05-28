__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 43,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 41,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 40,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 40,
                  "decorators": [],
                  "name": "await",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 37,
                      "end": 40
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 100,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 112,
        "decorators": [],
        "name": "await",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 115,
        "end": 124,
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 119,
          "end": 124,
          "decorators": [],
          "name": "await",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
