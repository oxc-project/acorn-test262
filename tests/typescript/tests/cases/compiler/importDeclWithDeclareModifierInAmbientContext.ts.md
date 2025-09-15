__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m",
        "raw": "\"m\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 58
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 59,
                    "end": 70
                  },
                  "declare": false,
                  "start": 47,
                  "end": 70
                }
              ],
              "start": 37,
              "end": 76
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 25,
            "end": 76
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "start": 107,
              "end": 110
            },
            "importKind": "value",
            "start": 81,
            "end": 111
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 124
                      },
                      "typeArguments": null,
                      "start": 123,
                      "end": 124
                    },
                    "start": 121,
                    "end": 124
                  },
                  "start": 120,
                  "end": 124
                },
                "init": null,
                "definite": false,
                "start": 120,
                "end": 124
              }
            ],
            "declare": false,
            "start": 116,
            "end": 125
          }
        ],
        "start": 19,
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
