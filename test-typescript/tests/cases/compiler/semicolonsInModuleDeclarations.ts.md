__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 25,
        "name": "ambiModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
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
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 107,
            "name": "n1",
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
                    "name": "ambiModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 107,
                    "name": "i1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 130,
            "name": "n2",
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
                    "name": "ambiModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 130,
                    "name": "i2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
