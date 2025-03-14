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
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 26,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "foo",
              "optional": false
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
        "optional": false
      }
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
        "optional": false
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
  "end": 185,
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
        "optional": false
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
          "value": "exportAssignedTypeAsTypeAnnotation_0"
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
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 138,
                  "decorators": [],
                  "name": "test",
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
  "sourceType": "module",
  "hashbang": null
}
```
