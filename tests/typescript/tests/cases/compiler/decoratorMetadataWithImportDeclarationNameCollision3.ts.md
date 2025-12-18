__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "db",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 15
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
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
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 40
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
                  "body": [],
                  "start": 43,
                  "end": 50
                },
                "expression": false,
                "start": 40,
                "end": 50
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 22,
              "end": 50
            }
          ],
          "start": 16,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 13,
    "end": 15,
    "range": [
      13,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 22,
    "end": 28,
    "range": [
      22,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 29,
    "end": 40,
    "range": [
      29,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "db",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./db",
          "raw": "'./db'",
          "start": 20,
          "end": 26
        },
        "start": 12,
        "end": 27
      },
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 51
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 58
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 79
            },
            "start": 66,
            "end": 80
          }
        ],
        "start": 60,
        "end": 82
      },
      "expression": false,
      "start": 29,
      "end": 82
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 97
          },
          "start": 83,
          "end": 97
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 111
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "db",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 120
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 124
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 127
                  },
                  "start": 122,
                  "end": 127
                },
                "typeArguments": null,
                "start": 122,
                "end": 127
              },
              "start": 120,
              "end": 127
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 118,
            "end": 128
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 145
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "db",
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
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 152
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 153,
                          "end": 155
                        },
                        "start": 150,
                        "end": 155
                      },
                      "typeArguments": null,
                      "start": 150,
                      "end": 155
                    },
                    "start": 148,
                    "end": 155
                  },
                  "start": 146,
                  "end": 155
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 217,
                          "end": 221
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 224
                        },
                        "optional": false,
                        "computed": false,
                        "start": 217,
                        "end": 224
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 227,
                        "end": 229
                      },
                      "start": 217,
                      "end": 229
                    },
                    "directive": null,
                    "start": 217,
                    "end": 230
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 239,
                            "end": 243
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 246
                          },
                          "optional": false,
                          "computed": false,
                          "start": 239,
                          "end": 246
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 258
                        },
                        "optional": false,
                        "computed": false,
                        "start": 239,
                        "end": 258
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 239,
                      "end": 260
                    },
                    "directive": null,
                    "start": 239,
                    "end": 261
                  }
                ],
                "start": 157,
                "end": 267
              },
              "expression": false,
              "start": 145,
              "end": 267
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 134,
            "end": 267
          }
        ],
        "start": 112,
        "end": 269
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 269
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 285
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 285
          },
          "exportKind": "value",
          "start": 278,
          "end": 285
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 270,
      "end": 287
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 287
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
    "type": "Identifier",
    "value": "db",
    "start": 7,
    "end": 9,
    "range": [
      7,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12,
    "end": 19,
    "range": [
      12,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "String",
    "value": "'./db'",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 29,
    "end": 37,
    "range": [
      29,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 38,
    "end": 51,
    "range": [
      38,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 66,
    "end": 72,
    "range": [
      66,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 73,
    "end": 79,
    "range": [
      73,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 84,
    "end": 97,
    "range": [
      84,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 98,
    "end": 103,
    "range": [
      98,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 104,
    "end": 111,
    "range": [
      104,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 118,
    "end": 120,
    "range": [
      118,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 122,
    "end": 124,
    "range": [
      122,
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
    "value": "db",
    "start": 125,
    "end": 127,
    "range": [
      125,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 134,
    "end": 145,
    "range": [
      134,
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
    "value": "db",
    "start": 146,
    "end": 148,
    "range": [
      146,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 150,
    "end": 152,
    "range": [
      150,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 153,
    "end": 155,
    "range": [
      153,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 217,
    "end": 221,
    "range": [
      217,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 222,
    "end": 224,
    "range": [
      222,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 227,
    "end": 229,
    "range": [
      227,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 239,
    "end": 243,
    "range": [
      239,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 244,
    "end": 246,
    "range": [
      244,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 247,
    "end": 258,
    "range": [
      247,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 270,
    "end": 276,
    "range": [
      270,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 278,
    "end": 285,
    "range": [
      278,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  }
]
```
