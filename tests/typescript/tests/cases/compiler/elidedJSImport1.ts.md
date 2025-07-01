__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "'fs'",
        "start": 20,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "TruffleContract",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 48
          },
          "start": 33,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@truffle/contract",
        "raw": "'@truffle/contract'",
        "start": 54,
        "end": 73
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 26,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 133
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 137
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 140
          }
        ],
        "optional": false,
        "start": 126,
        "end": 141
      },
      "directive": null,
      "start": 126,
      "end": 142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 150
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 154
          },
          "optional": false,
          "computed": false,
          "start": 143,
          "end": 154
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "TruffleContract is ",
            "raw": "'TruffleContract is '",
            "start": 155,
            "end": 176
          },
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 200
            },
            "prefix": true,
            "start": 178,
            "end": 200
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "TruffleContract",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 217
          }
        ],
        "optional": false,
        "start": 143,
        "end": 218
      },
      "directive": null,
      "start": 143,
      "end": 219
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 265
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
        "type": "Literal",
        "value": "@truffle/contract",
        "raw": "\"@truffle/contract\"",
        "start": 15,
        "end": 34
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ContractObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 65
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 79
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 76,
                  "end": 88
                }
              ],
              "start": 66,
              "end": 94
            },
            "declare": false,
            "start": 41,
            "end": 94
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 124
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Contract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 155
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ContractObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 172
                      },
                      "typeArguments": null,
                      "start": 158,
                      "end": 172
                    },
                    "declare": false,
                    "start": 142,
                    "end": 173
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 135,
                  "end": 173
                }
              ],
              "start": 125,
              "end": 179
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 99,
            "end": 179
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 214
            },
            "exportKind": "value",
            "start": 184,
            "end": 215
          }
        ],
        "start": 35,
        "end": 217
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 217
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 217
}
```
