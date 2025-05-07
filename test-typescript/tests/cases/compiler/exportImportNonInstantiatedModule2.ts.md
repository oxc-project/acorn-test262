__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
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
      "type": "TSInterfaceDeclaration",
      "start": 17,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 50,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "decorators": [],
        "name": "Widget1",
        "optional": false,
        "typeAnnotation": null
      },
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
  "end": 108,
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
      "end": 108,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 42,
        "end": 108,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 60,
          "end": 108,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 82,
              "end": 106,
              "argument": {
                "type": "ObjectExpression",
                "start": 89,
                "end": 105,
                "properties": [
                  {
                    "type": "Property",
                    "start": 90,
                    "end": 103,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 94,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 96,
                      "end": 103,
                      "raw": "'value'",
                      "value": "value",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
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
