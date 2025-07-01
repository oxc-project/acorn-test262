__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "chunk",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 26
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 29,
                "end": 30
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 30
            }
          ],
          "start": 15,
          "end": 32
        },
        "abstract": false,
        "declare": false,
        "start": 9,
        "end": 32
      },
      "start": 0,
      "end": 32
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 33
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
        "name": "Chunk",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./mod1",
          "raw": "'./mod1'",
          "start": 23,
          "end": 31
        },
        "start": 15,
        "end": 32
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Chunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 53
                },
                "typeArguments": null,
                "start": 48,
                "end": 53
              },
              "start": 46,
              "end": 53
            },
            "start": 45,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 53
        }
      ],
      "declare": true,
      "start": 33,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 56
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "chunk",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 62
        },
        "optional": false,
        "computed": false,
        "start": 55,
        "end": 62
      },
      "directive": null,
      "start": 55,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
