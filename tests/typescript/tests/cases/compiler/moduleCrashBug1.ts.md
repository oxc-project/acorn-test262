__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "_modes",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 71,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 47,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 39,
                "decorators": [],
                "name": "IMode",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 47,
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
            "type": "ClassDeclaration",
            "start": 51,
            "end": 69,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "decorators": [],
              "name": "Mode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 62,
              "end": 69,
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
      "type": "TSModuleDeclaration",
      "start": 150,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "decorators": [],
        "name": "editor",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 164,
        "end": 192,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 167,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 179,
              "decorators": [],
              "name": "modes",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "decorators": [],
              "name": "_modes",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 209,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 208,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 208,
                  "decorators": [],
                  "name": "_modes",
                  "optional": false,
                  "typeAnnotation": null
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
