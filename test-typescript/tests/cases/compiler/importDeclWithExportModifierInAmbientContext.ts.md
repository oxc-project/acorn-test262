__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 116,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 116,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 25,
            "end": 73,
            "body": {
              "type": "TSModuleBlock",
              "start": 34,
              "end": 73,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 44,
                  "end": 67,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 56,
                    "end": 67,
                    "body": []
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 78,
            "end": 100,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 85,
              "end": 100,
              "id": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 96,
                "end": 99,
                "left": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 105,
            "end": 114,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 109,
                "end": 113,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 113,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 112,
                      "end": 113,
                      "typeName": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 113,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"m\"",
        "value": "m"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
