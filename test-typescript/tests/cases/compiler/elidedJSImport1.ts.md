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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 217,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 41,
            "end": 94,
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
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 65,
              "decorators": [],
              "name": "ContractObject",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 99,
            "end": 179,
            "body": {
              "type": "TSModuleBlock",
              "start": 125,
              "end": 179,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 135,
                  "end": 173,
                  "attributes": [],
                  "declaration": {
                    "type": "TSTypeAliasDeclaration",
                    "start": 142,
                    "end": 173,
                    "declare": false,
                    "id": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 155,
                      "decorators": [],
                      "name": "Contract",
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 172,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 172,
                        "decorators": [],
                        "name": "ContractObject",
                        "optional": false
                      }
                    }
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
              "start": 109,
              "end": 124,
              "decorators": [],
              "name": "TruffleContract",
              "optional": false
            },
            "kind": "namespace"
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 184,
            "end": 215,
            "declaration": {
              "type": "Identifier",
              "start": 199,
              "end": 214,
              "decorators": [],
              "name": "TruffleContract",
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 34,
        "raw": "\"@truffle/contract\"",
        "value": "@truffle/contract"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
