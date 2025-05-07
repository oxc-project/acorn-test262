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
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 32,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 30,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "decorators": [],
                "name": "chunk",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 63,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Chunk",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 31,
          "raw": "'./mod1'",
          "value": "./mod1",
          "regex": null,
          "bigint": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 53,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 53,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 53,
                  "decorators": [],
                  "name": "Chunk",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 55,
        "end": 62,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 55,
          "end": 56,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 57,
          "end": 62,
          "decorators": [],
          "name": "chunk",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
