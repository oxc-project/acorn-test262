__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 25
        },
        "expression": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    },
    {
      "type": "EmptyStatement",
      "start": 25,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
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
        "type": "Literal",
        "value": "externalModuleRefernceResolutionOrderInImportDeclaration_file1",
        "raw": "\"externalModuleRefernceResolutionOrderInImportDeclaration_file1\"",
        "start": 15,
        "end": 79
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 105
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 93,
              "end": 108
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 86,
            "end": 108
          }
        ],
        "start": 80,
        "end": 110
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 110
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 112
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
        "name": "file1",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 101
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./externalModuleRefernceResolutionOrderInImportDeclaration_file1",
          "raw": "'./externalModuleRefernceResolutionOrderInImportDeclaration_file1'",
          "start": 112,
          "end": 178
        },
        "start": 104,
        "end": 179
      },
      "importKind": "value",
      "start": 89,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "file1",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 190
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 190
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 181,
        "end": 192
      },
      "directive": null,
      "start": 181,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "file1",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 199
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 194,
          "end": 203
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 194,
        "end": 205
      },
      "directive": null,
      "start": 194,
      "end": 206
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 89,
  "end": 207
}
```
