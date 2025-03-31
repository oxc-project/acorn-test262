__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "NS1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 28,
            "end": 51,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 35,
              "end": 51,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 39,
                  "end": 50,
                  "id": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 50,
                    "name": "foo",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 44,
                        "end": 50
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 55,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "name": "NS2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 108,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 106,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 90,
              "end": 106,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 94,
                  "end": 105,
                  "id": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 105,
                    "name": "foo",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 97,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
  "end": 99,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "NS1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "NS1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 24,
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 16,
            "name": "NS1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 20,
            "end": 24,
            "name": "NNS1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 53,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 35,
          "end": 38,
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "name": "NS2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "name": "NS2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 40,
          "end": 51,
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "name": "NS2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 47,
            "end": 51,
            "name": "NNS2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 76,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 62,
          "end": 74,
          "local": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "name": "NS1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 69,
            "end": 74,
            "name": "NNNS1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 99,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 85,
          "end": 97,
          "local": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "name": "NS2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 92,
            "end": 97,
            "name": "NNNS2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
