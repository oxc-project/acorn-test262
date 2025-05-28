__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 25,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 25,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "EmptyStatement",
      "start": 25,
      "end": 26
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
  "end": 109,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 96,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 96,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 19,
          "decorators": [],
          "name": "file1",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 22,
          "end": 95,
          "expression": {
            "type": "Literal",
            "start": 30,
            "end": 94,
            "value": "externalModuleReferenceOfImportDeclarationWithExportModifier_0",
            "raw": "'externalModuleReferenceOfImportDeclarationWithExportModifier_0'"
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 97,
        "end": 108,
        "callee": {
          "type": "MemberExpression",
          "start": 97,
          "end": 106,
          "object": {
            "type": "Identifier",
            "start": 97,
            "end": 102,
            "decorators": [],
            "name": "file1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 106,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
