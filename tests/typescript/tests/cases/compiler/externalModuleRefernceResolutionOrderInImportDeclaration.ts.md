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
  "end": 112,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 110,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 79,
        "value": "externalModuleRefernceResolutionOrderInImportDeclaration_file1",
        "raw": "\"externalModuleRefernceResolutionOrderInImportDeclaration_file1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 110,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 108,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 93,
              "end": 108,
              "id": {
                "type": "Identifier",
                "start": 102,
                "end": 105,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 104,
        "end": 179,
        "expression": {
          "type": "Literal",
          "start": 112,
          "end": 178,
          "value": "./externalModuleRefernceResolutionOrderInImportDeclaration_file1",
          "raw": "'./externalModuleRefernceResolutionOrderInImportDeclaration_file1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 193,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 192,
        "callee": {
          "type": "MemberExpression",
          "start": 181,
          "end": 190,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 186,
            "decorators": [],
            "name": "file1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 187,
            "end": 190,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 206,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 205,
        "callee": {
          "type": "MemberExpression",
          "start": 194,
          "end": 203,
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 199,
            "decorators": [],
            "name": "file1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 200,
            "end": 203,
            "decorators": [],
            "name": "bar",
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
