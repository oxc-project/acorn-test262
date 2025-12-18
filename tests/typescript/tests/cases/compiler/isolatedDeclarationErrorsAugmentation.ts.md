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
            "name": "ParentThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParentThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./parent",
        "raw": "'./parent'",
        "start": 28,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./parent",
        "raw": "'./parent'",
        "start": 56,
        "end": 66
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 94
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
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 108
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 114,
                              "end": 120
                            },
                            "start": 112,
                            "end": 120
                          },
                          "start": 111,
                          "end": 120
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 125,
                              "end": 131
                            },
                            "start": 123,
                            "end": 131
                          },
                          "start": 122,
                          "end": 131
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 136,
                          "end": 142
                        },
                        "start": 133,
                        "end": 142
                      },
                      "start": 110,
                      "end": 142
                    },
                    "start": 108,
                    "end": 142
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 105,
                  "end": 143
                }
              ],
              "start": 95,
              "end": 149
            },
            "declare": false,
            "start": 73,
            "end": 149
          }
        ],
        "start": 67,
        "end": 151
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 41,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "child1",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 175
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParentThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 198
                },
                "typeArguments": null,
                "start": 187,
                "end": 198
              },
              "start": 185,
              "end": 198
            },
            "start": 176,
            "end": 198
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prototype",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 215
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 219
                  },
                  "optional": false,
                  "computed": false,
                  "start": 206,
                  "end": 219
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 226,
                          "end": 232
                        },
                        "start": 224,
                        "end": 232
                      },
                      "start": 223,
                      "end": 232
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 237,
                          "end": 243
                        },
                        "start": 235,
                        "end": 243
                      },
                      "start": 234,
                      "end": 243
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "start": 248,
                    "end": 253
                  },
                  "id": null,
                  "generator": false,
                  "start": 222,
                  "end": 253
                },
                "start": 206,
                "end": 253
              },
              "directive": null,
              "start": 206,
              "end": 254
            }
          ],
          "start": 200,
          "end": 256
        },
        "expression": false,
        "start": 160,
        "end": 256
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 153,
      "end": 256
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 257
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
    "value": "ParentThing",
    "start": 9,
    "end": 20,
    "range": [
      9,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27,
    "range": [
      23,
      27
    ]
  },
  {
    "type": "String",
    "value": "'./parent'",
    "start": 28,
    "end": 38,
    "range": [
      28,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 41,
    "end": 48,
    "range": [
      41,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "String",
    "value": "'./parent'",
    "start": 56,
    "end": 66,
    "range": [
      56,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 73,
    "end": 82,
    "range": [
      73,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "ParentThing",
    "start": 83,
    "end": 94,
    "range": [
      83,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 114,
    "end": 120,
    "range": [
      114,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135,
    "range": [
      133,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
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
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 160,
    "end": 168,
    "range": [
      160,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "child1",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 176,
    "end": 185,
    "range": [
      176,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "ParentThing",
    "start": 187,
    "end": 198,
    "range": [
      187,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 206,
    "end": 215,
    "range": [
      206,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 216,
    "end": 219,
    "range": [
      216,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 237,
    "end": 243,
    "range": [
      237,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247,
    "range": [
      245,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
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
            "name": "child1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "child1",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./child1",
        "raw": "'./child1'",
        "start": 23,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ParentThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 152
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 175
            },
            "typeArguments": null,
            "start": 164,
            "end": 175
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 176,
          "end": 178
        },
        "abstract": false,
        "declare": false,
        "start": 135,
        "end": 178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 128,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "child1",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParentThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 198
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 208
            },
            "optional": false,
            "computed": false,
            "start": 187,
            "end": 208
          }
        ],
        "optional": false,
        "start": 180,
        "end": 209
      },
      "directive": null,
      "start": 180,
      "end": 210
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 210
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
    "value": "child1",
    "start": 9,
    "end": 15,
    "range": [
      9,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22,
    "range": [
      18,
      22
    ]
  },
  {
    "type": "String",
    "value": "'./child1'",
    "start": 23,
    "end": 33,
    "range": [
      23,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 128,
    "end": 134,
    "range": [
      128,
      134
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 135,
    "end": 140,
    "range": [
      135,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "ParentThing",
    "start": 141,
    "end": 152,
    "range": [
      141,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 153,
    "end": 163,
    "range": [
      153,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "ParentThing",
    "start": 164,
    "end": 175,
    "range": [
      164,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "child1",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "ParentThing",
    "start": 187,
    "end": 198,
    "range": [
      187,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 199,
    "end": 208,
    "range": [
      199,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  }
]
```
