__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "name": "_modes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "IMode",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "name": "Mode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 62,
              "end": 69,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
        "name": "editor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "modes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "name": "_modes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 208,
            "name": "m",
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
                  "name": "_modes",
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
