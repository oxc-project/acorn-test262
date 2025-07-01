__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Widget1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "start": 0,
      "end": 16
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Widget1",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 30
      },
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 37
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "one",
              "raw": "'one'",
              "start": 40,
              "end": 45
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 33,
            "end": 46
          }
        ],
        "start": 31,
        "end": 48
      },
      "abstract": false,
      "declare": false,
      "start": 17,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "./w1",
            "raw": "'./w1'",
            "start": 26,
            "end": 32
          },
          "start": 18,
          "end": 33
        },
        "importKind": "value",
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
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
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./exporter",
          "raw": "'./exporter'",
          "start": 19,
          "end": 31
        },
        "start": 11,
        "end": 32
      },
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 52
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 57
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "w",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "start": 56,
              "end": 59
            },
            "typeArguments": null,
            "start": 56,
            "end": 59
          },
          "start": 54,
          "end": 59
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "optional": false,
                  "computed": false,
                  "start": 93,
                  "end": 96
                },
                "typeArguments": null,
                "arguments": [],
                "start": 89,
                "end": 98
              },
              "start": 82,
              "end": 99
            }
          ],
          "start": 60,
          "end": 101
        },
        "expression": false,
        "start": 42,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
