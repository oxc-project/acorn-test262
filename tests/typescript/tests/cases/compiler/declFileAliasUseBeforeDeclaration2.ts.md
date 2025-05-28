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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 55,
                    "end": 66,
                    "body": []
                  },
                  "abstract": false,
                  "declare": false
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 95,
              "end": 102,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 107,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 118,
              "end": 121,
              "left": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
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
