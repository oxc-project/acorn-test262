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
        "name": "_modes",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
                "name": "IMode",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 42
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 43,
                "end": 50
              },
              "declare": false,
              "start": 27,
              "end": 50
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 50
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mode",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 64
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 65,
              "end": 72
            },
            "abstract": false,
            "declare": false,
            "start": 54,
            "end": 72
          }
        ],
        "start": 17,
        "end": 74
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 169
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 185
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 194
            },
            "importKind": "value",
            "start": 173,
            "end": 195
          }
        ],
        "start": 170,
        "end": 198
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 153,
      "end": 198
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_modes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 214
                },
                "typeArguments": null,
                "start": 208,
                "end": 214
              },
              "start": 206,
              "end": 214
            },
            "start": 204,
            "end": 214
          },
          "init": null,
          "definite": false,
          "start": 204,
          "end": 214
        }
      ],
      "declare": false,
      "start": 200,
      "end": 215
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 217
}
```
