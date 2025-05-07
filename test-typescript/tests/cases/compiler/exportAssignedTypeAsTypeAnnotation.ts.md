__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 46,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 27,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 26,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 26,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 47,
      "end": 58,
      "expression": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
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
  "start": 63,
  "end": 184,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 63,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 77,
        "end": 124,
        "expression": {
          "type": "Literal",
          "start": 85,
          "end": 123,
          "raw": "'exportAssignedTypeAsTypeAnnotation_0'",
          "value": "exportAssignedTypeAsTypeAnnotation_0",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 138,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 138,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 138,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
