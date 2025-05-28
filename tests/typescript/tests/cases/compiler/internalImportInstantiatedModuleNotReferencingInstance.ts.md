__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 47,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 47,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 36,
                    "end": 45,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 39,
                        "end": 45
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 70,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 59,
              "end": 70,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 63,
                  "end": 69,
                  "id": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 67,
                    "end": 69,
                    "value": 10,
                    "raw": "10"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 74,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 83,
        "end": 119,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 99,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 93,
                "end": 98,
                "id": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 97,
                  "end": 98,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 104,
            "end": 117,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
