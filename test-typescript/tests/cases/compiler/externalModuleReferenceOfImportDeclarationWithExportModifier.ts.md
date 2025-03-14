externalModuleReferenceOfImportDeclarationWithExportModifier_0.ts
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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 25,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 25,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "EmptyStatement",
      "start": 25,
      "end": 26
    }
  ],
  "sourceType": "module"
}
```
externalModuleReferenceOfImportDeclarationWithExportModifier_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 96,
      "attributes": [],
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
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 22,
          "end": 95,
          "expression": {
            "type": "Literal",
            "start": 30,
            "end": 94,
            "raw": "'externalModuleReferenceOfImportDeclarationWithExportModifier_0'",
            "value": "externalModuleReferenceOfImportDeclarationWithExportModifier_0"
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 97,
        "end": 108,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 97,
          "end": 106,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 97,
            "end": 102,
            "decorators": [],
            "name": "file1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 106,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
