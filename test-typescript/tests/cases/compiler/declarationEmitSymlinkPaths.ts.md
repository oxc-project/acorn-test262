__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 54,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 33,
            "end": 43,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 43,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 36,
                "end": 43,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 44,
          "end": 53,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 46,
            "end": 53,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 28,
          "end": 31,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 30,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 149,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 37,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 31,
          "decorators": [],
          "name": "NotificationRequest",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 34,
          "end": 36,
          "members": []
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 45,
        "end": 76,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 70,
          "decorators": [],
          "name": "NotificationResponse",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 73,
          "end": 75,
          "members": []
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 149,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 84,
        "end": 149,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 133,
          "end": 149,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 137,
              "end": 147,
              "argument": {
                "type": "ObjectExpression",
                "start": 144,
                "end": 146,
                "properties": []
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 108,
          "decorators": [],
          "name": "getNotification",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 110,
          "end": 132,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 112,
            "end": 132,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 112,
              "end": 132,
              "decorators": [],
              "name": "NotificationResponse",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 167,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 39,
        "raw": "\"search/lib/index\"",
        "value": "search/lib/index",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 103,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 102,
        "raw": "\"../API/NotificationAPIUtils\"",
        "value": "../API/NotificationAPIUtils",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 50,
          "end": 65,
          "imported": {
            "type": "Identifier",
            "start": 50,
            "end": 65,
            "decorators": [],
            "name": "getNotification",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 65,
            "decorators": [],
            "name": "getNotification",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 167,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 112,
        "end": 167,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 118,
            "end": 166,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 138,
              "decorators": [],
              "name": "NotificationScenario",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 141,
              "end": 166,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 164,
                  "decorators": [],
                  "name": "getNotification",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 141,
                "end": 145,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
