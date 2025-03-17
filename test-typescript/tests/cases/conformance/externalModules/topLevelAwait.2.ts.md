__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 40,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 40,
                  "name": "await",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 37,
                      "end": 40
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "const",
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
        "name": "await",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 115,
        "end": 124,
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 119,
          "end": 124,
          "name": "await",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
