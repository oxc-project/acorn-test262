__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 90
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 104
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 114
        },
        "optional": false,
        "computed": false,
        "start": 99,
        "end": 114
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dataSource",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 126
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 128,
                      "end": 134
                    },
                    "start": 128,
                    "end": 136
                  },
                  "start": 126,
                  "end": 136
                },
                "accessibility": null,
                "static": false,
                "start": 116,
                "end": 137
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 145
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 148,
                    "end": 151
                  },
                  "start": 146,
                  "end": 151
                },
                "accessibility": null,
                "static": false,
                "start": 138,
                "end": 151
              }
            ],
            "start": 115,
            "end": 152
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 154,
            "end": 156
          }
        ],
        "start": 114,
        "end": 157
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 170
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 192,
                          "end": 195
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 200,
                                "end": 204
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 205,
                                "end": 210
                              },
                              "optional": false,
                              "computed": false,
                              "start": 200,
                              "end": 210
                            },
                            "start": 196,
                            "end": 211
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "className",
                              "start": 212,
                              "end": 221
                            },
                            "value": {
                              "type": "Literal",
                              "value": "ok",
                              "raw": "\"ok\"",
                              "start": 222,
                              "end": 226
                            },
                            "start": 212,
                            "end": 226
                          }
                        ],
                        "selfClosing": false,
                        "start": 191,
                        "end": 227
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 229,
                          "end": 232
                        },
                        "start": 227,
                        "end": 233
                      },
                      "start": 191,
                      "end": 233
                    },
                    "start": 183,
                    "end": 235
                  }
                ],
                "start": 173,
                "end": 241
              },
              "expression": false,
              "start": 170,
              "end": 241
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 164,
            "end": 241
          }
        ],
        "start": 158,
        "end": 243
      },
      "abstract": false,
      "declare": false,
      "start": 73,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 243
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57,
    "range": [
      52,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62,
    "range": [
      58,
      62
    ]
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 63,
    "end": 70,
    "range": [
      63,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 73,
    "end": 78,
    "range": [
      73,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 79,
    "end": 90,
    "range": [
      79,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 99,
    "end": 104,
    "range": [
      99,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 105,
    "end": 114,
    "range": [
      105,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "dataSource",
    "start": 116,
    "end": 126,
    "range": [
      116,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 128,
    "end": 134,
    "range": [
      128,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 138,
    "end": 145,
    "range": [
      138,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 164,
    "end": 170,
    "range": [
      164,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189,
    "range": [
      183,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 192,
    "end": 195,
    "range": [
      192,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 200,
    "end": 204,
    "range": [
      200,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 205,
    "end": 210,
    "range": [
      205,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 212,
    "end": 221,
    "range": [
      212,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 222,
    "end": 226,
    "range": [
      222,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 229,
    "end": 232,
    "range": [
      229,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  }
]
```
