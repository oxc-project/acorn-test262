__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
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
                  "start": 41,
                  "end": 44
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
                  "start": 47,
                  "end": 50
                },
                "expression": false,
                "start": 32,
                "end": 50
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 50
            }
          ],
          "start": 19,
          "end": 52
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importAliasAnExternalModuleInsideAnInternalModule_file0",
          "raw": "'./importAliasAnExternalModuleInsideAnInternalModule_file0'",
          "start": 19,
          "end": 78
        },
        "start": 11,
        "end": 79
      },
      "importKind": "value",
      "start": 0,
      "end": 80
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 100
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "importKind": "value",
              "start": 164,
              "end": 177
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 157,
            "end": 177
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 195
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 197
                  },
                  "optional": false,
                  "computed": false,
                  "start": 194,
                  "end": 197
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 201
                },
                "optional": false,
                "computed": false,
                "start": 194,
                "end": 201
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 194,
              "end": 203
            },
            "directive": null,
            "start": 194,
            "end": 204
          }
        ],
        "start": 101,
        "end": 206
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 81,
      "end": 206
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 206
}
```
