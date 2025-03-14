moduleCrashBug1.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 71,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 47,
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 47,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 39,
                "decorators": [],
                "name": "IMode",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 69,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 62,
              "end": 69,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "decorators": [],
              "name": "Mode",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "_modes",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 150,
      "end": 192,
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
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "decorators": [],
              "name": "_modes",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "decorators": [],
        "name": "editor",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
