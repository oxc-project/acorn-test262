__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 57,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "myModule",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 37,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 36,
          "value": "myModule",
          "raw": "\"myModule\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 56,
      "expression": {
        "type": "NewExpression",
        "start": 39,
        "end": 55,
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 53,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 51,
            "decorators": [],
            "name": "myModule",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
