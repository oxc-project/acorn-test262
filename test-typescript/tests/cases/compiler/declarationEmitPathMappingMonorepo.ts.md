__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 130,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 26,
        "value": "@ts-bug/a",
        "raw": "\"@ts-bug/a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 130,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 82,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 40,
              "end": 82,
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 50,
                "name": "AText",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 53,
                "end": 81,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 61,
                    "end": 75,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 66,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 68,
                        "end": 74
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 87,
            "end": 126,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 94,
              "end": 126,
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 105,
                  "end": 117,
                  "name": "text",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 111,
                      "end": 117
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 118,
                "end": 125,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 120,
                  "end": 125,
                  "typeName": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 125,
                    "name": "AText",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 29,
        "value": "@ts-bug/a",
        "raw": "\"@ts-bug/a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 85,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 39,
        "end": 85,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 50,
            "end": 62,
            "name": "text",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 64,
          "end": 85,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 68,
              "end": 83,
              "argument": {
                "type": "CallExpression",
                "start": 75,
                "end": 82,
                "callee": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 77,
                    "end": 81,
                    "name": "text",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
