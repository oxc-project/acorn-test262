__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23,
    "range": [
      15,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 24,
    "end": 28,
    "range": [
      24,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 49,
    "end": 51,
    "range": [
      49,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "NotificationRequest",
    "start": 12,
    "end": 31,
    "range": [
      12,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44,
    "range": [
      38,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 45,
    "end": 49,
    "range": [
      45,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "NotificationResponse",
    "start": 50,
    "end": 70,
    "range": [
      50,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83,
    "range": [
      77,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92,
    "range": [
      84,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "getNotification",
    "start": 93,
    "end": 108,
    "range": [
      93,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "NotificationResponse",
    "start": 112,
    "end": 132,
    "range": [
      112,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 137,
    "end": 143,
    "range": [
      137,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 9,
    "end": 13,
    "range": [
      9,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "String",
    "value": "\"search/lib/index\"",
    "start": 21,
    "end": 39,
    "range": [
      21,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "getNotification",
    "start": 50,
    "end": 65,
    "range": [
      50,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "String",
    "value": "\"../API/NotificationAPIUtils\"",
    "start": 73,
    "end": 102,
    "range": [
      73,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "NotificationScenario",
    "start": 118,
    "end": 138,
    "range": [
      118,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 141,
    "end": 145,
    "range": [
      141,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "getNotification",
    "start": 149,
    "end": 164,
    "range": [
      149,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  }
]
```
