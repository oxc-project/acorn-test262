__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "test",
        "raw": "\"test\"",
        "start": 15,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 58,
                    "end": 69
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 50,
                  "end": 69
                }
              ],
              "start": 40,
              "end": 75
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 28,
            "end": 75
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 98,
              "end": 105
            },
            "abstract": false,
            "declare": false,
            "start": 80,
            "end": 105
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              },
              "start": 121,
              "end": 124
            },
            "importKind": "value",
            "start": 110,
            "end": 125
          }
        ],
        "start": 22,
        "end": 127
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 127
}
```
