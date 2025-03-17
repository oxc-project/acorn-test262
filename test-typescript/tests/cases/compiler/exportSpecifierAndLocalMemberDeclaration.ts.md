__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 132,
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
        "end": 132,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 26,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 35,
              "end": 66,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 45,
                  "end": 60,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 57,
                    "end": 60,
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
          {
            "type": "TSDeclareFunction",
            "start": 71,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
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
            "start": 89,
            "end": 107,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 98,
                "end": 104,
                "local": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
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
            "start": 112,
            "end": 130,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
              "start": 124,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 129,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 126,
                  "end": 129,
                  "left": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
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
      "start": 134,
      "end": 181,
      "id": {
        "type": "Literal",
        "start": 149,
        "end": 153,
        "value": "m2",
        "raw": "\"m2\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 154,
        "end": 181,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 160,
            "end": 179,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 171,
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
              "start": 173,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 178,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 175,
                  "end": 178,
                  "left": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
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
