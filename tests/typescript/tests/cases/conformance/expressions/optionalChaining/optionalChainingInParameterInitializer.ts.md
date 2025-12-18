__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 73
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          },
                          "start": 73,
                          "end": 81
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 72,
                        "end": 81
                      }
                    ],
                    "start": 70,
                    "end": 83
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 86,
                    "end": 95
                  }
                ],
                "start": 70,
                "end": 95
              },
              "start": 68,
              "end": 95
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 108
            },
            "id": null,
            "generator": false,
            "start": 66,
            "end": 108
          },
          "definite": false,
          "start": 62,
          "end": 108
        }
      ],
      "declare": false,
      "start": 56,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 113
              },
              "right": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 117
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 116,
                    "end": 119
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 122
                  },
                  "optional": true,
                  "computed": false,
                  "start": 116,
                  "end": 122
                },
                "start": 116,
                "end": 122
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 122
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 127,
            "end": 129
          },
          "id": null,
          "generator": false,
          "start": 111,
          "end": 129
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 110,
        "end": 132
      },
      "directive": null,
      "start": 110,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 133
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61,
    "range": [
      56,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 99,
    "end": 108,
    "range": [
      99,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "b",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 119,
    "end": 121,
    "range": [
      119,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 124,
    "end": 126,
    "range": [
      124,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131,
    "range": [
      130,
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
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  }
]
```
