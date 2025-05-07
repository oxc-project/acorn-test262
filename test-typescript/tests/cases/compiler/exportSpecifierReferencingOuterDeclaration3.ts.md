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
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 43,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 43,
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 43,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "bar",
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 205,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 65,
        "end": 205,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 71,
            "end": 108,
            "body": {
              "type": "TSModuleBlock",
              "start": 80,
              "end": 108,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 82,
                  "end": 106,
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 89,
                    "end": 106,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 103,
                      "end": 106,
                      "body": []
                    },
                    "declare": false,
                    "extends": [],
                    "id": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "decorators": [],
                      "name": "foo",
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
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "module"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 113,
            "end": 126,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 122,
                "end": 123,
                "exported": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 131,
            "end": 160,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 138,
              "end": 160,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 147,
                "end": 150,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 152,
                "end": 159,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 159,
                  "typeArguments": null,
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
                  }
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 165,
            "end": 194,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 172,
              "end": 194,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 186,
                "end": 193,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 188,
                  "end": 193,
                  "typeArguments": null,
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
                  }
                }
              },
              "typeParameters": null
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
        "type": "Literal",
        "start": 61,
        "end": 64,
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
