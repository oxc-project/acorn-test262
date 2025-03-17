__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 98,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 69,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 69,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 69,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 63,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 48,
                      "end": 63,
                      "id": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "Z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 60,
                        "end": 63,
                        "body": []
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 74,
            "end": 96,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 81,
              "end": 96,
              "id": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 93,
                "end": 96,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 112,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 112,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 107,
                  "end": 112,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 107,
                    "end": 110,
                    "left": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "name": "Z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
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
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 125,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 125,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 122,
                  "end": 125,
                  "left": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "name": "Y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
