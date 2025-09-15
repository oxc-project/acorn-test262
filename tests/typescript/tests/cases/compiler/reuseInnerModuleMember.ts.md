__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 19,
          "end": 22
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 23
}
```
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
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "alpha",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 94
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 95,
              "end": 98
            },
            "declare": false,
            "start": 79,
            "end": 98
          }
        ],
        "start": 73,
        "end": 100
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 100
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 110
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./reuseInnerModuleMember_0",
          "raw": "'./reuseInnerModuleMember_0'",
          "start": 121,
          "end": 149
        },
        "start": 113,
        "end": 150
      },
      "importKind": "value",
      "start": 102,
      "end": 151
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 165
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alpha",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 184
                      },
                      "typeArguments": null,
                      "start": 179,
                      "end": 184
                    },
                    "start": 177,
                    "end": 184
                  },
                  "start": 176,
                  "end": 184
                },
                "init": null,
                "definite": false,
                "start": 176,
                "end": 184
              }
            ],
            "declare": false,
            "start": 172,
            "end": 185
          }
        ],
        "start": 166,
        "end": 187
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 152,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 51,
  "end": 187
}
```
