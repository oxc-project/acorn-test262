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
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 54,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "name": "test",
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
            "start": 33,
            "end": 43,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 43,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 36,
                "end": 43,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 28,
          "end": 31,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 30,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 44,
          "end": 53,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 46,
            "end": 53,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 37,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 31,
          "name": "NotificationRequest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 34,
          "end": 36,
          "members": []
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
      "start": 38,
      "end": 76,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 45,
        "end": 76,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 70,
          "name": "NotificationResponse",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 73,
          "end": 75,
          "members": []
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
      "start": 77,
      "end": 149,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 84,
        "end": 149,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 108,
          "name": "getNotification",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 110,
          "end": 132,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 112,
            "end": 132,
            "typeName": {
              "type": "Identifier",
              "start": 112,
              "end": 132,
              "name": "NotificationResponse",
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 39,
        "value": "search/lib/index",
        "raw": "\"search/lib/index\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 103,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 50,
          "end": 65,
          "imported": {
            "type": "Identifier",
            "start": 50,
            "end": 65,
            "name": "getNotification",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 65,
            "name": "getNotification",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 102,
        "value": "../API/NotificationAPIUtils",
        "raw": "\"../API/NotificationAPIUtils\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 167,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 112,
        "end": 167,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 118,
            "end": 166,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 138,
              "name": "NotificationScenario",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 141,
              "end": 166,
              "callee": {
                "type": "Identifier",
                "start": 141,
                "end": 145,
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 164,
                  "name": "getNotification",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
