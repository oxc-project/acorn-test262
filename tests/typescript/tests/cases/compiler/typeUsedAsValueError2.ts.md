__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "world",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              },
              "start": 36,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 31,
            "end": 42
          }
        ],
        "start": 25,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 69
      },
      "start": 46,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 71
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloNamespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 48
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              },
              "declare": false,
              "start": 38,
              "end": 55
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 31,
            "end": 55
          }
        ],
        "start": 25,
        "end": 57
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloNamespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 82
      },
      "start": 59,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 84
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
        "name": "HelloInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 21
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./helloInterface",
          "raw": "\"./helloInterface\"",
          "start": 32,
          "end": 50
        },
        "start": 24,
        "end": 51
      },
      "importKind": "value",
      "start": 0,
      "end": 52
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloNamespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 74
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./helloNamespace",
          "raw": "\"./helloNamespace\"",
          "start": 85,
          "end": 103
        },
        "start": 77,
        "end": 104
      },
      "importKind": "value",
      "start": 53,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "HelloInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 121
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "world",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 127
        },
        "optional": false,
        "computed": false,
        "start": 107,
        "end": 127
      },
      "directive": null,
      "start": 107,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "HelloNamespace",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 143
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "world",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 149
        },
        "optional": false,
        "computed": false,
        "start": 129,
        "end": 149
      },
      "directive": null,
      "start": 129,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
