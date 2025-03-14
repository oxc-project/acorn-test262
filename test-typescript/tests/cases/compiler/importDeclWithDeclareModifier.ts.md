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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 36,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 34,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 34,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 37,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 63,
        "end": 66,
        "left": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "a",
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
  "sourceType": "script",
  "hashbang": null
}
```
