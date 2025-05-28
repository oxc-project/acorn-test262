__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 25,
        "decorators": [],
        "name": "ambiModule",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 84,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 31,
            "end": 54,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 38,
              "end": 54,
              "id": {
                "type": "Identifier",
                "start": 48,
                "end": 50,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 51,
                "end": 54,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "EmptyStatement",
            "start": 54,
            "end": 55
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 82,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 66,
              "end": 82,
              "id": {
                "type": "Identifier",
                "start": 76,
                "end": 78,
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 79,
                "end": 82,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 108,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 107,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 107,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 94,
                  "end": 107,
                  "left": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 104,
                    "decorators": [],
                    "name": "ambiModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 107,
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 131,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 130,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 130,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 117,
                  "end": 130,
                  "left": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 127,
                    "decorators": [],
                    "name": "ambiModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 130,
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
