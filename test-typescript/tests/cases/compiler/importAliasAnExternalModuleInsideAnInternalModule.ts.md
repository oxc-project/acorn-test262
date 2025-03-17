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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 49,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 49,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 47,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 29,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
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
                  "start": 44,
                  "end": 47,
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
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
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
        "name": "r",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 78,
          "value": "./importAliasAnExternalModuleInsideAnInternalModule_file0",
          "raw": "'./importAliasAnExternalModuleInsideAnInternalModule_file0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 81,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 97,
        "name": "m_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 98,
        "end": 203,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 154,
            "end": 174,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 161,
              "end": 174,
              "id": {
                "type": "Identifier",
                "start": 168,
                "end": 169,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExpressionStatement",
            "start": 191,
            "end": 201,
            "expression": {
              "type": "CallExpression",
              "start": 191,
              "end": 200,
              "callee": {
                "type": "MemberExpression",
                "start": 191,
                "end": 198,
                "object": {
                  "type": "MemberExpression",
                  "start": 191,
                  "end": 194,
                  "object": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 198,
                  "name": "foo",
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
