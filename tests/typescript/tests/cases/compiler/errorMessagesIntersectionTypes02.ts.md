__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "fooProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 29,
                      "end": 36
                    },
                    "start": 29,
                    "end": 36
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 39,
                      "end": 46
                    },
                    "start": 39,
                    "end": 46
                  }
                ],
                "start": 29,
                "end": 46
              },
              "start": 27,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 47
          }
        ],
        "start": 14,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 64
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
              "name": "barProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 78
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              },
              "start": 78,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 71,
            "end": 87
          }
        ],
        "start": 65,
        "end": 89
      },
      "declare": false,
      "start": 51,
      "end": 89
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 107
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 119
          },
          "typeArguments": null,
          "start": 116,
          "end": 119
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 124
          },
          "typeArguments": null,
          "start": 121,
          "end": 124
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 125,
        "end": 128
      },
      "declare": false,
      "start": 91,
      "end": 128
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 153
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
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          }
        ],
        "start": 153,
        "end": 156
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "typeArguments": null,
              "start": 162,
              "end": 163
            },
            "start": 160,
            "end": 163
          },
          "start": 157,
          "end": 163
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "typeArguments": null,
              "start": 166,
              "end": 167
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 173
              },
              "typeArguments": null,
              "start": 170,
              "end": 173
            }
          ],
          "start": 166,
          "end": 173
        },
        "start": 164,
        "end": 173
      },
      "body": null,
      "expression": false,
      "start": 130,
      "end": 174
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooBar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 194
                },
                "typeArguments": null,
                "start": 188,
                "end": 194
              },
              "start": 186,
              "end": 194
            },
            "start": 180,
            "end": 194
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 203
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fooProp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 217
                    },
                    "value": {
                      "type": "Literal",
                      "value": "frizzlebizzle",
                      "raw": "\"frizzlebizzle\"",
                      "start": 219,
                      "end": 234
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 210,
                    "end": 234
                  }
                ],
                "start": 204,
                "end": 236
              }
            ],
            "optional": false,
            "start": 197,
            "end": 237
          },
          "definite": false,
          "start": 180,
          "end": 237
        }
      ],
      "declare": false,
      "start": 176,
      "end": 238
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 238
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 10,
    "end": 13,
    "range": [
      10,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "fooProp",
    "start": 20,
    "end": 27,
    "range": [
      20,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 29,
    "end": 36,
    "range": [
      29,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 39,
    "end": 46,
    "range": [
      39,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 51,
    "end": 60,
    "range": [
      51,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "barProp",
    "start": 71,
    "end": 78,
    "range": [
      71,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 91,
    "end": 100,
    "range": [
      91,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 108,
    "end": 115,
    "range": [
      108,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 121,
    "end": 124,
    "range": [
      121,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137,
    "range": [
      130,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146,
    "range": [
      138,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "mixBar",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 176,
    "end": 179,
    "range": [
      176,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBar",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "mixBar",
    "start": 197,
    "end": 203,
    "range": [
      197,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "fooProp",
    "start": 210,
    "end": 217,
    "range": [
      210,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "String",
    "value": "\"frizzlebizzle\"",
    "start": 219,
    "end": 234,
    "range": [
      219,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  }
]
```
