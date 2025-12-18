__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 29
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 49
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
                "start": 52,
                "end": 55
              },
              "expression": false,
              "start": 49,
              "end": 55
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 36,
            "end": 55
          }
        ],
        "start": 30,
        "end": 57
      },
      "abstract": false,
      "declare": false,
      "start": 13,
      "end": 57
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 75
      },
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
              "start": 76,
              "end": 77
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constraint",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 96
              },
              "typeArguments": null,
              "start": 86,
              "end": 96
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 96
          }
        ],
        "start": 75,
        "end": 97
      },
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
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 118,
                "end": 121
              },
              "start": 116,
              "end": 121
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 104,
            "end": 122
          }
        ],
        "start": 98,
        "end": 124
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 138
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 158
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeArg",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 166
            },
            "typeArguments": null,
            "start": 159,
            "end": 166
          }
        ],
        "start": 158,
        "end": 167
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 168,
        "end": 172
      },
      "abstract": false,
      "declare": false,
      "start": 125,
      "end": 172
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeArg",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 186
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 206
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 228
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "People",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 235
                        },
                        "optional": false,
                        "computed": false,
                        "start": 219,
                        "end": 235
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "items",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 241
                      },
                      "optional": false,
                      "computed": false,
                      "start": 219,
                      "end": 241
                    },
                    "directive": null,
                    "start": 219,
                    "end": 242
                  }
                ],
                "start": 209,
                "end": 248
              },
              "expression": false,
              "start": 206,
              "end": 248
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 193,
            "end": 248
          }
        ],
        "start": 187,
        "end": 250
      },
      "abstract": false,
      "declare": false,
      "start": 173,
      "end": 250
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 267
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
              "name": "People",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 294
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 303
                },
                "typeArguments": null,
                "start": 296,
                "end": 303
              },
              "start": 294,
              "end": 303
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 274,
            "end": 303
          }
        ],
        "start": 268,
        "end": 305
      },
      "abstract": false,
      "declare": false,
      "start": 252,
      "end": 305
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 305
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 13,
    "end": 18,
    "range": [
      13,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "Constraint",
    "start": 19,
    "end": 29,
    "range": [
      19,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 58,
    "end": 63,
    "range": [
      58,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericBase",
    "start": 64,
    "end": 75,
    "range": [
      64,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 78,
    "end": 85,
    "range": [
      78,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "Constraint",
    "start": 86,
    "end": 96,
    "range": [
      86,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 111,
    "end": 116,
    "range": [
      111,
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
    "value": "any",
    "start": 118,
    "end": 121,
    "range": [
      118,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 125,
    "end": 130,
    "range": [
      125,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 131,
    "end": 138,
    "range": [
      131,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146,
    "range": [
      139,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericBase",
    "start": 147,
    "end": 158,
    "range": [
      147,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeArg",
    "start": 159,
    "end": 166,
    "range": [
      159,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 173,
    "end": 178,
    "range": [
      173,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeArg",
    "start": 179,
    "end": 186,
    "range": [
      179,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 193,
    "end": 199,
    "range": [
      193,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 219,
    "end": 228,
    "range": [
      219,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "People",
    "start": 229,
    "end": 235,
    "range": [
      229,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 236,
    "end": 241,
    "range": [
      236,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 252,
    "end": 257,
    "range": [
      252,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 258,
    "end": 267,
    "range": [
      258,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 281,
    "end": 287,
    "range": [
      281,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "People",
    "start": 288,
    "end": 294,
    "range": [
      288,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 296,
    "end": 303,
    "range": [
      296,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  }
]
```
