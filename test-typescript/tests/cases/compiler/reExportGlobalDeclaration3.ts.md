file1.d.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 28,
            "end": 51,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 35,
              "end": 51,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 39,
                  "end": 50,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 50,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 44,
                        "end": 50
                      }
                    }
                  },
                  "init": null
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "NS1",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 55,
      "end": 108,
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 108,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 106,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 90,
              "end": 106,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 94,
                  "end": 105,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 105,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 97,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      }
                    }
                  },
                  "init": null
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "NS2",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
file2.ts
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 11,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "NS1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "NS1",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 24,
          "exported": {
            "type": "Identifier",
            "start": 20,
            "end": 24,
            "decorators": [],
            "name": "NNS1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 16,
            "decorators": [],
            "name": "NS1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 53,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 35,
          "end": 38,
          "exported": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "NS2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "NS2",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 40,
          "end": 51,
          "exported": {
            "type": "Identifier",
            "start": 47,
            "end": 51,
            "decorators": [],
            "name": "NNS2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "NS2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 76,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 62,
          "end": 74,
          "exported": {
            "type": "Identifier",
            "start": 69,
            "end": 74,
            "decorators": [],
            "name": "NNNS1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "decorators": [],
            "name": "NS1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 99,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 85,
          "end": 97,
          "exported": {
            "type": "Identifier",
            "start": 92,
            "end": 97,
            "decorators": [],
            "name": "NNNS2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "decorators": [],
            "name": "NS2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
