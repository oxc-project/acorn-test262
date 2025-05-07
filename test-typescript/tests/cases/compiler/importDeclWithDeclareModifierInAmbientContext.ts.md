__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 124,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 124,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "module"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 78,
            "end": 108,
            "id": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 104,
              "end": 107,
              "left": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 113,
            "end": 122,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 117,
                "end": 121,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 121,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 121,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
        "value": "m",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
