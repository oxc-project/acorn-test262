__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keyboard",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 38
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UP",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 43
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 41,
                    "end": 43
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DOWN",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 49
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 45,
                    "end": 49
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LEFT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 55
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 51,
                    "end": 55
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RIGHT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 62
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 57,
                    "end": 62
                  }
                ],
                "start": 39,
                "end": 64
              },
              "const": false,
              "declare": false,
              "start": 30,
              "end": 64
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 23,
            "end": 64
          }
        ],
        "start": 19,
        "end": 66
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 81
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 96
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keyboard",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 107
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 111
              },
              "start": 99,
              "end": 111
            },
            "importKind": "value",
            "start": 86,
            "end": 112
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 135
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 144
                      },
                      "typeArguments": null,
                      "start": 141,
                      "end": 144
                    },
                    "start": 139,
                    "end": 144
                  },
                  "start": 136,
                  "end": 144
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 147,
                  "end": 151
                },
                "start": 145,
                "end": 151
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 152,
                "end": 154
              },
              "expression": false,
              "start": 123,
              "end": 154
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 116,
            "end": 154
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 161
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 165
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 168
                  },
                  "optional": false,
                  "computed": false,
                  "start": 162,
                  "end": 168
                }
              ],
              "optional": false,
              "start": 158,
              "end": 169
            },
            "directive": null,
            "start": 158,
            "end": 170
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 176
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 180
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DOWN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 185
                  },
                  "optional": false,
                  "computed": false,
                  "start": 177,
                  "end": 185
                }
              ],
              "optional": false,
              "start": 173,
              "end": 186
            },
            "directive": null,
            "start": 173,
            "end": 187
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 193
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 197
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "LEFT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 202
                  },
                  "optional": false,
                  "computed": false,
                  "start": 194,
                  "end": 202
                }
              ],
              "optional": false,
              "start": 190,
              "end": 203
            },
            "directive": null,
            "start": 190,
            "end": 204
          }
        ],
        "start": 82,
        "end": 206
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 206
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 206
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Keyboard",
    "start": 10,
    "end": 18,
    "range": [
      10,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 30,
    "end": 34,
    "range": [
      30,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "UP",
    "start": 41,
    "end": 43,
    "range": [
      41,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "DOWN",
    "start": 45,
    "end": 49,
    "range": [
      45,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "LEFT",
    "start": 51,
    "end": 55,
    "range": [
      51,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "RIGHT",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 68,
    "end": 77,
    "range": [
      68,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 78,
    "end": 81,
    "range": [
      78,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 86,
    "end": 92,
    "range": [
      86,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 93,
    "end": 96,
    "range": [
      93,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "Keyboard",
    "start": 99,
    "end": 107,
    "range": [
      99,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 108,
    "end": 111,
    "range": [
      108,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 116,
    "end": 122,
    "range": [
      116,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 123,
    "end": 131,
    "range": [
      123,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 132,
    "end": 135,
    "range": [
      132,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 136,
    "end": 139,
    "range": [
      136,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 141,
    "end": 144,
    "range": [
      141,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 147,
    "end": 151,
    "range": [
      147,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 158,
    "end": 161,
    "range": [
      158,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 162,
    "end": 165,
    "range": [
      162,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "UP",
    "start": 166,
    "end": 168,
    "range": [
      166,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 173,
    "end": 176,
    "range": [
      173,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 177,
    "end": 180,
    "range": [
      177,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "DOWN",
    "start": 181,
    "end": 185,
    "range": [
      181,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 190,
    "end": 193,
    "range": [
      190,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 194,
    "end": 197,
    "range": [
      194,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "LEFT",
    "start": 198,
    "end": 202,
    "range": [
      198,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  }
]
```
