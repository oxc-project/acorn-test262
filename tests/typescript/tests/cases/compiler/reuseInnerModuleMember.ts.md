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
          "start": 14,
          "end": 15
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 16,
          "end": 19
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 20
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
        "start": 66,
        "end": 69
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
              "start": 86,
              "end": 91
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 92,
              "end": 95
            },
            "declare": false,
            "start": 76,
            "end": 95
          }
        ],
        "start": 70,
        "end": 97
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 97
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 107
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./reuseInnerModuleMember_0",
          "raw": "'./reuseInnerModuleMember_0'",
          "start": 118,
          "end": 146
        },
        "start": 110,
        "end": 147
      },
      "importKind": "value",
      "start": 99,
      "end": 148
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 159
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
                        "start": 173,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 173,
                      "end": 178
                    },
                    "start": 171,
                    "end": 178
                  },
                  "start": 170,
                  "end": 178
                },
                "init": null,
                "definite": false,
                "start": 170,
                "end": 178
              }
            ],
            "declare": false,
            "start": 166,
            "end": 179
          }
        ],
        "start": 160,
        "end": 181
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 149,
      "end": 181
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 51,
  "end": 181
}
```
