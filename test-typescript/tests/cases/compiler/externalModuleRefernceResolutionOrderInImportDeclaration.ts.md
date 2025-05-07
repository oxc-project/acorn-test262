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
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 110,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 110,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 108,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 93,
              "end": 108,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 102,
                "end": 105,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 79,
        "raw": "\"externalModuleRefernceResolutionOrderInImportDeclaration_file1\"",
        "value": "externalModuleRefernceResolutionOrderInImportDeclaration_file1",
        "regex": null,
        "bigint": null
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
  "start": 89,
  "end": 207,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 89,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 101,
        "decorators": [],
        "name": "file1",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 104,
        "end": 179,
        "expression": {
          "type": "Literal",
          "start": 112,
          "end": 178,
          "raw": "'./externalModuleRefernceResolutionOrderInImportDeclaration_file1'",
          "value": "./externalModuleRefernceResolutionOrderInImportDeclaration_file1",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 193,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 192,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 181,
          "end": 190,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 186,
            "decorators": [],
            "name": "file1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 187,
            "end": 190,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 206,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 205,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 194,
          "end": 203,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 199,
            "decorators": [],
            "name": "file1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 200,
            "end": 203,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
