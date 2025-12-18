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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "importKind": "value",
          "start": 8,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./db",
        "raw": "'./db'",
        "start": 17,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 47
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
          "start": 48,
          "end": 54
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
              "start": 69,
              "end": 75
            },
            "start": 62,
            "end": 76
          }
        ],
        "start": 56,
        "end": 78
      },
      "expression": false,
      "start": 25,
      "end": 78
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
            "start": 80,
            "end": 93
          },
          "start": 79,
          "end": 93
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 107
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
              "start": 114,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 120
                },
                "typeArguments": null,
                "start": 118,
                "end": 120
              },
              "start": 116,
              "end": 120
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
            "start": 114,
            "end": 121
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
              "start": 127,
              "end": 138
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 143,
                      "end": 145
                    },
                    "start": 141,
                    "end": 145
                  },
                  "start": 139,
                  "end": 145
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
                          "start": 157,
                          "end": 161
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 164
                        },
                        "optional": false,
                        "computed": false,
                        "start": 157,
                        "end": 164
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 169
                      },
                      "start": 157,
                      "end": 169
                    },
                    "directive": null,
                    "start": 157,
                    "end": 170
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
                            "start": 179,
                            "end": 183
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 184,
                            "end": 186
                          },
                          "optional": false,
                          "computed": false,
                          "start": 179,
                          "end": 186
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 198
                        },
                        "optional": false,
                        "computed": false,
                        "start": 179,
                        "end": 198
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 179,
                      "end": 200
                    },
                    "directive": null,
                    "start": 179,
                    "end": 201
                  }
                ],
                "start": 147,
                "end": 207
              },
              "expression": false,
              "start": 138,
              "end": 207
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 127,
            "end": 207
          }
        ],
        "start": 108,
        "end": 209
      },
      "abstract": false,
      "declare": false,
      "start": 79,
      "end": 209
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
            "start": 218,
            "end": 225
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 225
          },
          "exportKind": "value",
          "start": 218,
          "end": 225
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 210,
      "end": 227
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 227
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
    "value": "db",
    "start": 8,
    "end": 10,
    "range": [
      8,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 12,
    "end": 16,
    "range": [
      12,
      16
    ]
  },
  {
    "type": "String",
    "value": "'./db'",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 25,
    "end": 33,
    "range": [
      25,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 34,
    "end": 47,
    "range": [
      34,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 69,
    "end": 75,
    "range": [
      69,
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
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 80,
    "end": 93,
    "range": [
      80,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 100,
    "end": 107,
    "range": [
      100,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 114,
    "end": 116,
    "range": [
      114,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
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
    "value": ";",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 127,
    "end": 138,
    "range": [
      127,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 139,
    "end": 141,
    "range": [
      139,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 143,
    "end": 145,
    "range": [
      143,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 157,
    "end": 161,
    "range": [
      157,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 162,
    "end": 164,
    "range": [
      162,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 167,
    "end": 169,
    "range": [
      167,
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
    "type": "Keyword",
    "value": "this",
    "start": 179,
    "end": 183,
    "range": [
      179,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 184,
    "end": 186,
    "range": [
      184,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 187,
    "end": 198,
    "range": [
      187,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 210,
    "end": 216,
    "range": [
      210,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 218,
    "end": 225,
    "range": [
      218,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  }
]
```
