__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 40,
        "body": {
          "type": "TSModuleBlock",
          "start": 19,
          "end": 40,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 21,
              "end": 38,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 28,
                "end": 38,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 32,
                    "end": 37,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 36,
                      "end": 37,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
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
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
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
  "end": 78,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "raw": "\"./f1\"",
        "value": "./f1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 78,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 31,
        "end": 78,
        "body": {
          "type": "TSModuleBlock",
          "start": 43,
          "end": 78,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 49,
              "end": 76,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 56,
                "end": 76,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 68,
                  "end": 76,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 69,
                      "end": 75,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 70,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 72,
                          "end": 75
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
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
