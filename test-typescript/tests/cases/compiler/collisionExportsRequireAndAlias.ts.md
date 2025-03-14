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
          "name": "bar",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 26,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 23,
          "end": 26,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "bar2",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
        "decorators": [],
        "name": "require",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 64,
          "raw": "'collisionExportsRequireAndAlias_file1'",
          "value": "collisionExportsRequireAndAlias_file1"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 76,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 90,
        "decorators": [],
        "name": "exports",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 93,
        "end": 144,
        "expression": {
          "type": "Literal",
          "start": 101,
          "end": 143,
          "raw": "'collisionExportsRequireAndAlias_file3333'",
          "value": "collisionExportsRequireAndAlias_file3333"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 155,
      "end": 199,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 162,
        "end": 199,
        "async": false,
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
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 183,
                  "end": 194,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 190,
                    "decorators": [],
                    "name": "require",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 194,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 171,
          "end": 174,
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
      "type": "ExportNamedDeclaration",
      "start": 200,
      "end": 246,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 207,
        "end": 246,
        "async": false,
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
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 229,
                  "end": 241,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 236,
                    "decorators": [],
                    "name": "exports",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 241,
                    "decorators": [],
                    "name": "bar2",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 216,
          "end": 220,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
