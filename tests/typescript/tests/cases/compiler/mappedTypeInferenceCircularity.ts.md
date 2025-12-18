__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HTML",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 38
        },
        "constraint": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "div",
            "raw": "'div'",
            "start": 42,
            "end": 47
          },
          "start": 42,
          "end": 47
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Block",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 55
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 60
                },
                "typeArguments": null,
                "start": 56,
                "end": 60
              }
            ],
            "start": 55,
            "end": 61
          },
          "start": 50,
          "end": 61
        },
        "optional": false,
        "readonly": null,
        "start": 34,
        "end": 63
      },
      "declare": false,
      "start": 22,
      "end": 64
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Block",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 82,
                "end": 83
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 82,
              "end": 83
            }
          ],
          "start": 81,
          "end": 84
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 95
                },
                "typeArguments": null,
                "start": 91,
                "end": 95
              },
              "start": 89,
              "end": 95
            },
            "start": 85,
            "end": 95
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 100,
            "end": 102
          },
          "start": 97,
          "end": 102
        },
        "start": 81,
        "end": 102
      },
      "declare": false,
      "start": 65,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTML",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 124
                },
                "typeArguments": null,
                "start": 120,
                "end": 124
              },
              "start": 118,
              "end": 124
            },
            "start": 117,
            "end": 124
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 124
        }
      ],
      "declare": true,
      "start": 105,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "div",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          }
        ],
        "optional": false,
        "start": 126,
        "end": 134
      },
      "directive": null,
      "start": 126,
      "end": 135
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 135
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "HTML",
    "start": 27,
    "end": 31,
    "range": [
      27,
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
    "value": "[",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "String",
    "value": "'div'",
    "start": 42,
    "end": 47,
    "range": [
      42,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 50,
    "end": 55,
    "range": [
      50,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "HTML",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 70,
    "end": 75,
    "range": [
      70,
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
    "value": "P",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "HTML",
    "start": 91,
    "end": 95,
    "range": [
      91,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102,
    "range": [
      101,
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
    "type": "Identifier",
    "value": "declare",
    "start": 105,
    "end": 112,
    "range": [
      105,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "HTML",
    "start": 120,
    "end": 124,
    "range": [
      120,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  }
]
```
