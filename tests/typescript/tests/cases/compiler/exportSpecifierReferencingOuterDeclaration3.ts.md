__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 43,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 43,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 43,
                "body": []
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
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 205,
      "id": {
        "type": "Literal",
        "start": 61,
        "end": 64,
        "value": "m",
        "raw": "\"m\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 65,
        "end": 205,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 71,
            "end": 108,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 80,
              "end": 108,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 82,
                  "end": 106,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 89,
                    "end": 106,
                    "id": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 103,
                      "end": 106,
                      "body": []
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
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 113,
            "end": 126,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 122,
                "end": 123,
                "local": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exported": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 131,
            "end": 160,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 138,
              "end": 160,
              "id": {
                "type": "Identifier",
                "start": 147,
                "end": 150,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 152,
                "end": 159,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 159,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 154,
                    "end": 159,
                    "left": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 159,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              },
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 165,
            "end": 194,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 172,
              "end": 194,
              "id": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 186,
                "end": 193,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 188,
                  "end": 193,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 188,
                    "end": 193,
                    "left": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 193,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              },
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
