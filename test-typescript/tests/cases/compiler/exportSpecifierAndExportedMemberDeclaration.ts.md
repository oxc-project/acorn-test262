__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 139,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "m2",
        "raw": "\"m2\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 139,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 73,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 33,
              "end": 73,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 42,
                "end": 73,
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 52,
                    "end": 67,
                    "id": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "name": "I",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 64,
                      "end": 67,
                      "body": []
                    },
                    "declare": false
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
            "type": "TSDeclareFunction",
            "start": 78,
            "end": 91,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 96,
            "end": 114,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 105,
                "end": 111,
                "local": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "name": "X",
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
            "type": "TSDeclareFunction",
            "start": 119,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "Z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 136,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 133,
                  "end": 136,
                  "left": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 141,
      "end": 188,
      "id": {
        "type": "Literal",
        "start": 156,
        "end": 160,
        "value": "m2",
        "raw": "\"m2\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 161,
        "end": 188,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 167,
            "end": 186,
            "id": {
              "type": "Identifier",
              "start": 176,
              "end": 178,
              "name": "Z2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 185,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 182,
                  "end": 185,
                  "left": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 185,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            }
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
