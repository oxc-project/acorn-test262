__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SpecialError",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 26
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 40
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 41,
        "end": 43
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "SpecialError",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 65
      },
      "start": 44,
      "end": 66
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 67
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SpecialError",
        "optional": false,
        "typeAnnotation": null,
        "start": 12,
        "end": 24
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "cjs-dep",
          "raw": "\"cjs-dep\"",
          "start": 35,
          "end": 44
        },
        "start": 27,
        "end": 45
      },
      "importKind": "type",
      "start": 0,
      "end": 46
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handleError",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "err",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SpecialError",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 85
              },
              "typeArguments": null,
              "start": 73,
              "end": 85
            },
            "start": 71,
            "end": 85
          },
          "start": 68,
          "end": 85
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 87,
        "end": 89
      },
      "expression": false,
      "start": 47,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
