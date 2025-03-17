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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "M2C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 47,
        "end": 97,
        "expression": {
          "type": "Literal",
          "start": 55,
          "end": 96,
          "value": "moduleImportedForTypeArgumentPosition_0",
          "raw": "\"moduleImportedForTypeArgumentPosition_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 107,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 113,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 109,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 125,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 148,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
                "name": "M2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 140,
                "end": 143,
                "name": "M2C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
