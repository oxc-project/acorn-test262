__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myHigherOrderComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 110
          }
        ],
        "start": 108,
        "end": 111
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Inner",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 124
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 139
                },
                "start": 119,
                "end": 139
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 141
                        },
                        "typeArguments": null,
                        "start": 140,
                        "end": 141
                      },
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 149
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 151,
                                "end": 157
                              },
                              "start": 149,
                              "end": 157
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 145,
                            "end": 157
                          }
                        ],
                        "start": 144,
                        "end": 158
                      }
                    ],
                    "start": 140,
                    "end": 158
                  }
                ],
                "start": 139,
                "end": 159
              },
              "start": 119,
              "end": 159
            },
            "start": 117,
            "end": 159
          },
          "start": 112,
          "end": 159
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 167
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 182
            },
            "start": 162,
            "end": 182
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "typeArguments": null,
                "start": 183,
                "end": 184
              }
            ],
            "start": 182,
            "end": 185
          },
          "start": 162,
          "end": 185
        },
        "start": 160,
        "end": 185
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "OuterComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 219
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
                  "start": 228,
                  "end": 233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 243
                },
                "optional": false,
                "computed": false,
                "start": 228,
                "end": 243
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 245
                    },
                    "typeArguments": null,
                    "start": 244,
                    "end": 245
                  }
                ],
                "start": 243,
                "end": 246
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
                      "start": 257,
                      "end": 263
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
                                  "name": "Inner",
                                  "start": 288,
                                  "end": 293
                                },
                                "typeArguments": null,
                                "attributes": [
                                  {
                                    "type": "JSXSpreadAttribute",
                                    "argument": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 298,
                                        "end": 302
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "props",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 303,
                                        "end": 308
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 298,
                                      "end": 308
                                    },
                                    "start": 294,
                                    "end": 309
                                  },
                                  {
                                    "type": "JSXAttribute",
                                    "name": {
                                      "type": "JSXIdentifier",
                                      "name": "name",
                                      "start": 310,
                                      "end": 314
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "Matt",
                                      "raw": "\"Matt\"",
                                      "start": 315,
                                      "end": 321
                                    },
                                    "start": 310,
                                    "end": 321
                                  }
                                ],
                                "selfClosing": true,
                                "start": 287,
                                "end": 323
                              },
                              "children": [],
                              "closingElement": null,
                              "start": 287,
                              "end": 323
                            },
                            "start": 280,
                            "end": 324
                          }
                        ],
                        "start": 266,
                        "end": 334
                      },
                      "expression": false,
                      "start": 263,
                      "end": 334
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 257,
                    "end": 334
                  }
                ],
                "start": 247,
                "end": 340
              },
              "abstract": false,
              "declare": false,
              "start": 199,
              "end": 340
            },
            "start": 192,
            "end": 341
          }
        ],
        "start": 186,
        "end": 343
      },
      "expression": false,
      "start": 77,
      "end": 343
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 343
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 53,
    "end": 55,
    "range": [
      53,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 56,
    "end": 61,
    "range": [
      56,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 62,
    "end": 66,
    "range": [
      62,
      66
    ]
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 67,
    "end": 74,
    "range": [
      67,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85,
    "range": [
      77,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "myHigherOrderComponent",
    "start": 86,
    "end": 108,
    "range": [
      86,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 119,
    "end": 124,
    "range": [
      119,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 125,
    "end": 139,
    "range": [
      125,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 142,
    "end": 143,
    "range": [
      142,
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
    "type": "Identifier",
    "value": "name",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157,
    "range": [
      151,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160,
    "range": [
      159,
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
    "value": "React",
    "start": 162,
    "end": 167,
    "range": [
      162,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 168,
    "end": 182,
    "range": [
      168,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 192,
    "end": 198,
    "range": [
      192,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 199,
    "end": 204,
    "range": [
      199,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "OuterComponent",
    "start": 205,
    "end": 219,
    "range": [
      205,
      219
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 220,
    "end": 227,
    "range": [
      220,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 228,
    "end": 233,
    "range": [
      228,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 234,
    "end": 243,
    "range": [
      234,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 257,
    "end": 263,
    "range": [
      257,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 280,
    "end": 286,
    "range": [
      280,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Inner",
    "start": 288,
    "end": 293,
    "range": [
      288,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 295,
    "end": 298,
    "range": [
      295,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 298,
    "end": 302,
    "range": [
      298,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 303,
    "end": 308,
    "range": [
      303,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "name",
    "start": 310,
    "end": 314,
    "range": [
      310,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "JSXText",
    "value": "\"Matt\"",
    "start": 315,
    "end": 321,
    "range": [
      315,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  }
]
```
