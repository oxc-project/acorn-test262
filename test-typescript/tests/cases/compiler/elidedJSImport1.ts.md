__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 217,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 34,
        "value": "@truffle/contract",
        "raw": "\"@truffle/contract\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 217,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 41,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 65,
              "name": "ContractObject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 66,
              "end": 94,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 76,
                  "end": 88,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 99,
            "end": 179,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 124,
              "name": "TruffleContract",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 125,
              "end": 179,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 135,
                  "end": 173,
                  "declaration": {
                    "type": "TSTypeAliasDeclaration",
                    "start": 142,
                    "end": 173,
                    "id": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 155,
                      "name": "Contract",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 172,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 172,
                        "name": "ContractObject",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 184,
            "end": 215,
            "declaration": {
              "type": "Identifier",
              "start": 199,
              "end": 214,
              "name": "TruffleContract",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
