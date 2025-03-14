__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 49,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 49,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 47,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 29,
                "end": 47,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 44,
                  "end": 47,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "params": []
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "m",
          "optional": false
        },
        "kind": "module"
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
  "end": 204,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "r",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 78,
          "raw": "'./importAliasAnExternalModuleInsideAnInternalModule_file0'",
          "value": "./importAliasAnExternalModuleInsideAnInternalModule_file0"
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 81,
      "end": 203,
      "body": {
        "type": "TSModuleBlock",
        "start": 98,
        "end": 203,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 154,
            "end": 174,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 161,
              "end": 174,
              "id": {
                "type": "Identifier",
                "start": 168,
                "end": 169,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "r",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 191,
            "end": 201,
            "expression": {
              "type": "CallExpression",
              "start": 191,
              "end": 200,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 191,
                "end": 198,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 191,
                  "end": 194,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 198,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 97,
        "decorators": [],
        "name": "m_private",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
