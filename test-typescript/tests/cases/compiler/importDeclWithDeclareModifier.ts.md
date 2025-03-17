__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 36,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 34,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 34,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 37,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 63,
        "end": 66,
        "left": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
