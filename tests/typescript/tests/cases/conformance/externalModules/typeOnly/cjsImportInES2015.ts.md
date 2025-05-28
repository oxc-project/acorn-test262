__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 26,
        "decorators": [],
        "name": "SpecialError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 43,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 44,
      "end": 66,
      "expression": {
        "type": "Identifier",
        "start": 53,
        "end": 65,
        "decorators": [],
        "name": "SpecialError",
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
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 24,
        "decorators": [],
        "name": "SpecialError",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 27,
        "end": 45,
        "expression": {
          "type": "Literal",
          "start": 35,
          "end": 44,
          "value": "cjs-dep",
          "raw": "\"cjs-dep\""
        }
      },
      "importKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 67,
        "decorators": [],
        "name": "handleError",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 85,
          "decorators": [],
          "name": "err",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 85,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 85,
                "decorators": [],
                "name": "SpecialError",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 89,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
