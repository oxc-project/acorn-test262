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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 26,
        "name": "SpecialError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "name": "Error",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 43,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 44,
      "end": 66,
      "expression": {
        "type": "Identifier",
        "start": 53,
        "end": 65,
        "name": "SpecialError",
        "typeAnnotation": null,
        "decorators": [],
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
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 24,
        "name": "SpecialError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "handleError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 85,
          "name": "err",
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
                "name": "SpecialError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 89,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
