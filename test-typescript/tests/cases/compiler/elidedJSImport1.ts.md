__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 24,
        "raw": "'fs'",
        "value": "fs"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 74,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 73,
        "raw": "'@truffle/contract'",
        "value": "@truffle/contract"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 33,
          "end": 48,
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 48,
            "decorators": [],
            "name": "TruffleContract",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 142,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 141,
        "arguments": [
          {
            "type": "Identifier",
            "start": 138,
            "end": 140,
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 137,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 126,
            "end": 133,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 137,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 219,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 143,
        "end": 218,
        "arguments": [
          {
            "type": "Literal",
            "start": 155,
            "end": 176,
            "raw": "'TruffleContract is '",
            "value": "TruffleContract is "
          },
          {
            "type": "UnaryExpression",
            "start": 178,
            "end": 200,
            "argument": {
              "type": "Identifier",
              "start": 185,
              "end": 200,
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 202,
            "end": 217,
            "decorators": [],
            "name": "TruffleContract",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 143,
          "end": 154,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 143,
            "end": 150,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 151,
            "end": 154,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 172,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 172,
                        "decorators": [],
                        "name": "ContractObject",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 109,
              "end": 124,
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
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
