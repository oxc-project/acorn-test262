__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ambiModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 50
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 51,
                "end": 54
              },
              "declare": false,
              "start": 38,
              "end": 54
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 31,
            "end": 54
          },
          {
            "type": "EmptyStatement",
            "start": 54,
            "end": 55
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 78
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 79,
                "end": 82
              },
              "declare": false,
              "start": 66,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 59,
            "end": 82
          }
        ],
        "start": 26,
        "end": 84
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 84
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ambiModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 104
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 107
                  },
                  "start": 94,
                  "end": 107
                },
                "typeArguments": null,
                "start": 94,
                "end": 107
              },
              "start": 92,
              "end": 107
            },
            "start": 90,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 107
        }
      ],
      "declare": false,
      "start": 86,
      "end": 108
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ambiModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 127
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 130
                  },
                  "start": 117,
                  "end": 130
                },
                "typeArguments": null,
                "start": 117,
                "end": 130
              },
              "start": 115,
              "end": 130
            },
            "start": 113,
            "end": 130
          },
          "init": null,
          "definite": false,
          "start": 113,
          "end": 130
        }
      ],
      "declare": false,
      "start": 109,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 131
}
```
