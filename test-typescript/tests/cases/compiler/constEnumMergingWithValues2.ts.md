__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
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
      "type": "TSModuleDeclaration",
      "start": 13,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 23,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 50,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 30,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 45,
                "end": 46,
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": true,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 43,
              "end": 48,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 45,
                  "end": 46,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 52,
      "end": 64,
      "expression": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
