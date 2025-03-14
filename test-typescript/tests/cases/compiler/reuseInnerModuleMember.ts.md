reuseInnerModuleMember_0.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 19,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 19,
          "body": []
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
reuseInnerModuleMember_1.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 70,
        "end": 97,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 76,
            "end": 95,
            "body": {
              "type": "TSInterfaceBody",
              "start": 92,
              "end": 95,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "alpha",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 99,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 110,
        "end": 147,
        "expression": {
          "type": "Literal",
          "start": 118,
          "end": 146,
          "raw": "'./reuseInnerModuleMember_0'",
          "value": "./reuseInnerModuleMember_0"
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 149,
      "end": 181,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 178,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "alpha",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 159,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
