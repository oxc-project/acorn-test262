helloInterface.ts
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
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "decorators": [],
              "name": "world",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "HelloInterface",
        "optional": false
      }
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
helloNamespace.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 57,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 31,
            "end": 55,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 38,
              "end": 55,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 48,
                "decorators": [],
                "name": "world",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "HelloNamespace",
        "optional": false
      },
      "kind": "namespace"
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
world.ts
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 24,
        "end": 49,
        "expression": {
          "type": "Literal",
          "start": 32,
          "end": 48,
          "raw": "\"helloInterface\"",
          "value": "helloInterface"
        }
      }
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 75,
        "end": 100,
        "expression": {
          "type": "Literal",
          "start": 83,
          "end": 99,
          "raw": "\"helloNamespace\"",
          "value": "helloNamespace"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 124,
      "expression": {
        "type": "MemberExpression",
        "start": 103,
        "end": 123,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 103,
          "end": 117,
          "decorators": [],
          "name": "HelloInterface",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 118,
          "end": 123,
          "decorators": [],
          "name": "world",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 146,
      "expression": {
        "type": "MemberExpression",
        "start": 125,
        "end": 145,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 125,
          "end": 139,
          "decorators": [],
          "name": "HelloNamespace",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 140,
          "end": 145,
          "decorators": [],
          "name": "world",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
