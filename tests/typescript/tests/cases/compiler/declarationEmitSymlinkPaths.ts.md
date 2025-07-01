__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 28
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 29,
              "end": 30
            }
          ],
          "start": 28,
          "end": 31
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "typeArguments": null,
                    "start": 42,
                    "end": 43
                  },
                  "start": 39,
                  "end": 43
                },
                "start": 36,
                "end": 43
              },
              "start": 34,
              "end": 43
            },
            "start": 33,
            "end": 43
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "typeArguments": null,
                "start": 52,
                "end": 53
              },
              "start": 49,
              "end": 53
            },
            "start": 46,
            "end": 53
          },
          "start": 44,
          "end": 53
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NotificationRequest",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 31
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 34,
          "end": 36
        },
        "declare": false,
        "start": 7,
        "end": 37
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NotificationResponse",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 70
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 73,
          "end": 75
        },
        "declare": false,
        "start": 45,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 38,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getNotification",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 108
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NotificationResponse",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 132
            },
            "typeArguments": null,
            "start": 112,
            "end": 132
          },
          "start": 110,
          "end": 132
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 144,
                "end": 146
              },
              "start": 137,
              "end": 147
            }
          ],
          "start": 133,
          "end": 149
        },
        "expression": false,
        "start": 84,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "search/lib/index",
        "raw": "\"search/lib/index\"",
        "start": 21,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "getNotification",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 65
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "getNotification",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 65
          },
          "importKind": "value",
          "start": 50,
          "end": 65
        }
      ],
      "source": {
        "type": "Literal",
        "value": "../API/NotificationAPIUtils",
        "raw": "\"../API/NotificationAPIUtils\"",
        "start": 73,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 103
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NotificationScenario",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 138
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 145
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getNotification",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 164
                }
              ],
              "optional": false,
              "start": 141,
              "end": 166
            },
            "definite": false,
            "start": 118,
            "end": 166
          }
        ],
        "declare": false,
        "start": 112,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 105,
      "end": 167
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
