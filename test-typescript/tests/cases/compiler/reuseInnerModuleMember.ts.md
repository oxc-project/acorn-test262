__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 19,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 19,
          "body": []
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 51,
  "end": 182,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 70,
        "end": 97,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 76,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "name": "alpha",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 92,
              "end": 95,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 99,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 110,
        "end": 147,
        "expression": {
          "type": "Literal",
          "start": 118,
          "end": 146,
          "value": "./reuseInnerModuleMember_0",
          "raw": "'./reuseInnerModuleMember_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 149,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 159,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 160,
        "end": 181,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 166,
            "end": 179,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 170,
                "end": 178,
                "id": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 178,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 173,
                      "end": 178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 178,
                        "name": "alpha",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
