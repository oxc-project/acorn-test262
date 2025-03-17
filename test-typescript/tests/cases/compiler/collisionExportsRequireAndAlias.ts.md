__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
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
          "name": "bar",
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
          "start": 22,
          "end": 25,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "name": "bar2",
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
          "start": 23,
          "end": 26,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
  "end": 246,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "name": "require",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 64,
          "value": "collisionExportsRequireAndAlias_file1",
          "raw": "'collisionExportsRequireAndAlias_file1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 76,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 90,
        "name": "exports",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 93,
        "end": 144,
        "expression": {
          "type": "Literal",
          "start": 101,
          "end": 143,
          "value": "collisionExportsRequireAndAlias_file3333",
          "raw": "'collisionExportsRequireAndAlias_file3333'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 155,
      "end": 199,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 162,
        "end": 199,
        "id": {
          "type": "Identifier",
          "start": 171,
          "end": 174,
          "name": "foo",
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
          "start": 177,
          "end": 199,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 183,
              "end": 197,
              "expression": {
                "type": "CallExpression",
                "start": 183,
                "end": 196,
                "callee": {
                  "type": "MemberExpression",
                  "start": 183,
                  "end": 194,
                  "object": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 190,
                    "name": "require",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 194,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 200,
      "end": 246,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 207,
        "end": 246,
        "id": {
          "type": "Identifier",
          "start": 216,
          "end": 220,
          "name": "foo2",
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
          "start": 223,
          "end": 246,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 229,
              "end": 244,
              "expression": {
                "type": "CallExpression",
                "start": 229,
                "end": 243,
                "callee": {
                  "type": "MemberExpression",
                  "start": 229,
                  "end": 241,
                  "object": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 236,
                    "name": "exports",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 241,
                    "name": "bar2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
