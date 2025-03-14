exportSpecifierAndLocalMemberDeclaration.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 132,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 26,
            "end": 66,
            "body": {
              "type": "TSModuleBlock",
              "start": 35,
              "end": 66,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 45,
                  "end": 60,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 57,
                    "end": 60,
                    "body": []
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSDeclareFunction",
            "start": 71,
            "end": 84,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "Y",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 89,
            "end": 107,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 98,
                "end": 104,
                "exported": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSDeclareFunction",
            "start": 112,
            "end": 130,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "Z",
              "optional": false
            },
            "params": [],
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
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "raw": "\"m2\"",
        "value": "m2"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 134,
      "end": 181,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 154,
        "end": 181,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 160,
            "end": 179,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 171,
              "decorators": [],
              "name": "Z2",
              "optional": false
            },
            "params": [],
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
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 149,
        "end": 153,
        "raw": "\"m2\"",
        "value": "m2"
      }
    }
  ],
  "sourceType": "script"
}
```
