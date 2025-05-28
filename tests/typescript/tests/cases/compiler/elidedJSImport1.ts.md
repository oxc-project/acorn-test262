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
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 24,
        "value": "fs",
        "raw": "'fs'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 74,
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
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 73,
        "value": "@truffle/contract",
        "raw": "'@truffle/contract'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 142,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 141,
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 137,
          "object": {
            "type": "Identifier",
            "start": 126,
            "end": 133,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 137,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 219,
      "expression": {
        "type": "CallExpression",
        "start": 143,
        "end": 218,
        "callee": {
          "type": "MemberExpression",
          "start": 143,
          "end": 154,
          "object": {
            "type": "Identifier",
            "start": 143,
            "end": 150,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 151,
            "end": 154,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 155,
            "end": 176,
            "value": "TruffleContract is ",
            "raw": "'TruffleContract is '"
          },
          {
            "type": "UnaryExpression",
            "start": 178,
            "end": 200,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 185,
              "end": 200,
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "typeAnnotation": null
            },
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
        "optional": false
      },
      "directive": null
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
              "decorators": [],
              "name": "ContractObject",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Contract",
                      "optional": false,
                      "typeAnnotation": null
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
                        "decorators": [],
                        "name": "ContractObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": []
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
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "typeAnnotation": null
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
