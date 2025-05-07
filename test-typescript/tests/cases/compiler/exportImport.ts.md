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
        "decorators": [],
        "name": "Widget1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 48,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 48,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 46,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "name",
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
              "start": 40,
              "end": 45,
              "raw": "'one'",
              "value": "one",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 30,
        "decorators": [],
        "name": "Widget1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 34,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 18,
          "end": 33,
          "expression": {
            "type": "Literal",
            "start": 26,
            "end": 32,
            "raw": "'./w1'",
            "value": "./w1",
            "regex": null,
            "bigint": null
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 31,
          "raw": "'./exporter'",
          "value": "./exporter",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 101,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 42,
        "end": 101,
        "async": false,
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
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 93,
                  "end": 96,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 54,
          "end": 59,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 56,
            "end": 59,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 56,
              "end": 59,
              "left": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "decorators": [],
                "name": "w",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
