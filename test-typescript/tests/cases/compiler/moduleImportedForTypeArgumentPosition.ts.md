__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "M2C",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 149,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 47,
        "end": 97,
        "expression": {
          "type": "Literal",
          "start": 55,
          "end": 96,
          "raw": "\"moduleImportedForTypeArgumentPosition_0\"",
          "value": "moduleImportedForTypeArgumentPosition_0"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 113,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 113,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 107,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 109,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 148,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 125,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 136,
        "end": 144,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 137,
            "end": 143,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 137,
              "end": 143,
              "left": {
                "type": "Identifier",
                "start": 137,
                "end": 139,
                "decorators": [],
                "name": "M2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 140,
                "end": 143,
                "decorators": [],
                "name": "M2C",
                "optional": false
              }
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
