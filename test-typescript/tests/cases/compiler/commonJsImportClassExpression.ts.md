__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 32,
      "expression": {
        "type": "ClassExpression",
        "start": 9,
        "end": 32,
        "id": null,
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 32,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 30,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "name": "chunk",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
  "end": 64,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Chunk",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 31,
          "value": "./mod1",
          "raw": "'./mod1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 53,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 53,
                  "name": "Chunk",
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 63,
      "expression": {
        "type": "MemberExpression",
        "start": 55,
        "end": 62,
        "object": {
          "type": "Identifier",
          "start": 55,
          "end": 56,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 57,
          "end": 62,
          "name": "chunk",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
