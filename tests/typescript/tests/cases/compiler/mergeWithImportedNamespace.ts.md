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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 19,
          "end": 40,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 21,
              "end": 38,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 28,
                "end": 38,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 32,
                    "end": 37,
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
                      "value": 1,
                      "raw": "1"
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
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "value": "./f1",
        "raw": "\"./f1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 78,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 31,
        "end": 78,
        "id": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 43,
          "end": 78,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 49,
              "end": 76,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 56,
                "end": 76,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 68,
                  "end": 76,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 69,
                      "end": 75,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 70,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 72,
                          "end": 75
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
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
