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
          "name": "SomeBaseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 26
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 27,
          "end": 30
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 30
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 61
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 62,
          "end": 65
        },
        "declare": false,
        "start": 38,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 31,
      "end": 65
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MergedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 94
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 116
            },
            "typeArguments": null,
            "start": 103,
            "end": 116
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 117,
          "end": 120
        },
        "declare": false,
        "start": 73,
        "end": 120
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 66,
      "end": 120
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MergedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 145
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeBaseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 167
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 168,
              "end": 171
            }
          ],
          "start": 167,
          "end": 172
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 194
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "Super",
                          "start": 201,
                          "end": 206
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 201,
                        "end": 208
                      },
                      "directive": null,
                      "start": 201,
                      "end": 209
                    }
                  ],
                  "start": 197,
                  "end": 212
                },
                "expression": false,
                "start": 194,
                "end": 212
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 176,
              "end": 212
            }
          ],
          "start": 173,
          "end": 214
        },
        "abstract": false,
        "declare": false,
        "start": 128,
        "end": 214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 121,
      "end": 214
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 214
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
    "value": "SomeBaseClass",
    "start": 13,
    "end": 26,
    "range": [
      13,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37,
    "range": [
      31,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 38,
    "end": 47,
    "range": [
      38,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeInterface",
    "start": 48,
    "end": 61,
    "range": [
      48,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 66,
    "end": 72,
    "range": [
      66,
      72
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
    "value": "MergedClass",
    "start": 83,
    "end": 94,
    "range": [
      83,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 95,
    "end": 102,
    "range": [
      95,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeInterface",
    "start": 103,
    "end": 116,
    "range": [
      103,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "MergedClass",
    "start": 134,
    "end": 145,
    "range": [
      134,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 146,
    "end": 153,
    "range": [
      146,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeBaseClass",
    "start": 154,
    "end": 167,
    "range": [
      154,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 168,
    "end": 171,
    "range": [
      168,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "public",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 183,
    "end": 194,
    "range": [
      183,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 201,
    "end": 206,
    "range": [
      201,
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
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  }
]
```
