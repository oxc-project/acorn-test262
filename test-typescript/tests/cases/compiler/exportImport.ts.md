__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 16,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "Widget1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 30,
        "name": "Widget1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 48,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 40,
              "end": 45,
              "value": "one",
              "raw": "'one'"
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
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 34,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "w",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 18,
          "end": 33,
          "expression": {
            "type": "Literal",
            "start": 26,
            "end": 32,
            "value": "./w1",
            "raw": "'./w1'"
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 101,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 31,
          "value": "./exporter",
          "raw": "'./exporter'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 101,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 42,
        "end": 101,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "name": "w",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 60,
          "end": 101,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 82,
              "end": 99,
              "argument": {
                "type": "NewExpression",
                "start": 89,
                "end": 98,
                "callee": {
                  "type": "MemberExpression",
                  "start": 93,
                  "end": 96,
                  "object": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "name": "w",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 54,
          "end": 59,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 56,
            "end": 59,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 56,
              "end": 59,
              "left": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
