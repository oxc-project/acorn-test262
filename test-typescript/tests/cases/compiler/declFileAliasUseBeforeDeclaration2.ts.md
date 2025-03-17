__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 124,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "value": "test",
        "raw": "\"test\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 124,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 28,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 37,
              "end": 72,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 47,
                  "end": 66,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 55,
                    "end": 66,
                    "body": []
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ClassDeclaration",
            "start": 77,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 95,
              "end": 102,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 107,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 118,
              "end": 121,
              "left": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
