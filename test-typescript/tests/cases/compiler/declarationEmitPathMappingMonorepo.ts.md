packages/a/index.d.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 130,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 82,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 40,
              "end": 82,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 50,
                "decorators": [],
                "name": "AText",
                "optional": false
              },
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
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 66,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 68,
                        "end": 74
                      }
                    }
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 87,
            "end": 126,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 94,
              "end": 126,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 105,
                  "end": 117,
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 111,
                      "end": 117
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "AText",
                    "optional": false
                  }
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 26,
        "raw": "\"@ts-bug/a\"",
        "value": "@ts-bug/a"
      }
    }
  ],
  "sourceType": "module"
}
```
packages/b/src/index.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 29,
        "raw": "\"@ts-bug/a\"",
        "value": "@ts-bug/a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 39,
        "end": 85,
        "async": false,
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
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 77,
                    "end": 81,
                    "decorators": [],
                    "name": "text",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 50,
            "end": 62,
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
