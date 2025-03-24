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
        "name": "Widget1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 17,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "name": "Widget1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 35,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
      "end": 108,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 42,
        "end": 108,
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 94,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 96,
                      "end": 103,
                      "value": "value",
                      "raw": "'value'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
