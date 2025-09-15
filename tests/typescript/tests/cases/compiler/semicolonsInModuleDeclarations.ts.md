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
        "start": 18,
        "end": 28
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
                "start": 51,
                "end": 53
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 54,
                "end": 57
              },
              "declare": false,
              "start": 41,
              "end": 57
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 34,
            "end": 57
          },
          {
            "type": "EmptyStatement",
            "start": 57,
            "end": 58
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
                "start": 79,
                "end": 81
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 82,
                "end": 85
              },
              "declare": false,
              "start": 69,
              "end": 85
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 62,
            "end": 85
          }
        ],
        "start": 29,
        "end": 87
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 87
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
                    "start": 97,
                    "end": 107
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 110
                  },
                  "start": 97,
                  "end": 110
                },
                "typeArguments": null,
                "start": 97,
                "end": 110
              },
              "start": 95,
              "end": 110
            },
            "start": 93,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 93,
          "end": 110
        }
      ],
      "declare": false,
      "start": 89,
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
                    "start": 120,
                    "end": 130
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 133
                  },
                  "start": 120,
                  "end": 133
                },
                "typeArguments": null,
                "start": 120,
                "end": 133
              },
              "start": 118,
              "end": 133
            },
            "start": 116,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 133
        }
      ],
      "declare": false,
      "start": 112,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
