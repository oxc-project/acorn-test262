__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "HelloInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 44,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 31,
            "end": 42,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "decorators": [],
              "name": "world",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 46,
      "end": 70,
      "expression": {
        "type": "Identifier",
        "start": 55,
        "end": 69,
        "decorators": [],
        "name": "HelloInterface",
        "optional": false,
        "typeAnnotation": null
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
  "end": 84,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "HelloNamespace",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 57,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 31,
            "end": 55,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 38,
              "end": 55,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 48,
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 59,
      "end": 83,
      "expression": {
        "type": "Identifier",
        "start": 68,
        "end": 82,
        "decorators": [],
        "name": "HelloNamespace",
        "optional": false,
        "typeAnnotation": null
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
  "end": 146,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 21,
        "decorators": [],
        "name": "HelloInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 24,
        "end": 49,
        "expression": {
          "type": "Literal",
          "start": 32,
          "end": 48,
          "value": "helloInterface",
          "raw": "\"helloInterface\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 51,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 72,
        "decorators": [],
        "name": "HelloNamespace",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 75,
        "end": 100,
        "expression": {
          "type": "Literal",
          "start": 83,
          "end": 99,
          "value": "helloNamespace",
          "raw": "\"helloNamespace\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 124,
      "expression": {
        "type": "MemberExpression",
        "start": 103,
        "end": 123,
        "object": {
          "type": "Identifier",
          "start": 103,
          "end": 117,
          "decorators": [],
          "name": "HelloInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 118,
          "end": 123,
          "decorators": [],
          "name": "world",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 146,
      "expression": {
        "type": "MemberExpression",
        "start": 125,
        "end": 145,
        "object": {
          "type": "Identifier",
          "start": 125,
          "end": 139,
          "decorators": [],
          "name": "HelloNamespace",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 140,
          "end": 145,
          "decorators": [],
          "name": "world",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
