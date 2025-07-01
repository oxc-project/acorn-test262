__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 44,
                        "end": 50
                      },
                      "start": 42,
                      "end": 50
                    },
                    "start": 39,
                    "end": 50
                  },
                  "init": null,
                  "definite": false,
                  "start": 39,
                  "end": 50
                }
              ],
              "declare": false,
              "start": 35,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 28,
            "end": 51
          }
        ],
        "start": 22,
        "end": 53
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS2",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      },
                      "start": 97,
                      "end": 105
                    },
                    "start": 94,
                    "end": 105
                  },
                  "init": null,
                  "definite": false,
                  "start": 94,
                  "end": 105
                }
              ],
              "declare": false,
              "start": 90,
              "end": 106
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 83,
            "end": 106
          }
        ],
        "start": 77,
        "end": 108
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 55,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 109
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "exportKind": "value",
          "start": 8,
          "end": 11
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 16
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NNS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 24
          },
          "exportKind": "value",
          "start": 13,
          "end": 24
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "exportKind": "value",
          "start": 35,
          "end": 38
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 43
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NNS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 51
          },
          "exportKind": "value",
          "start": 40,
          "end": 51
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 27,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 65
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NNNS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 74
          },
          "exportKind": "value",
          "start": 62,
          "end": 74
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 88
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NNNS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 97
          },
          "exportKind": "value",
          "start": 85,
          "end": 97
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 99
}
```
