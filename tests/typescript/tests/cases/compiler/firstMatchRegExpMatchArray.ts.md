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
            "name": "match",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 14,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 22
              },
              "optional": false,
              "computed": false,
              "start": 14,
              "end": 22
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/ /",
                "regex": {
                  "pattern": " ",
                  "flags": ""
                },
                "start": 23,
                "end": 26
              }
            ],
            "optional": false,
            "start": 14,
            "end": 27
          },
          "definite": false,
          "start": 6,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "match",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 38
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 43,
          "end": 47
        },
        "start": 33,
        "end": 47
      },
      "consequent": {
        "type": "BlockStatement",
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 66,
                      "end": 72
                    },
                    "start": 64,
                    "end": 72
                  },
                  "start": 61,
                  "end": 72
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 80
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 81,
                    "end": 82
                  },
                  "optional": false,
                  "computed": true,
                  "start": 75,
                  "end": 83
                },
                "definite": false,
                "start": 61,
                "end": 83
              }
            ],
            "declare": false,
            "start": 55,
            "end": 83
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    },
                    "start": 97,
                    "end": 105
                  },
                  "start": 94,
                  "end": 105
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 113
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 114,
                    "end": 115
                  },
                  "optional": false,
                  "computed": true,
                  "start": 108,
                  "end": 116
                },
                "definite": false,
                "start": 94,
                "end": 116
              }
            ],
            "declare": false,
            "start": 88,
            "end": 116
          }
        ],
        "start": 49,
        "end": 118
      },
      "alternate": null,
      "start": 29,
      "end": 118
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 118
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 6,
    "end": 11,
    "range": [
      6,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 14,
    "end": 16,
    "range": [
      14,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 17,
    "end": 22,
    "range": [
      17,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/ /",
    "regex": {
      "flags": "",
      "pattern": " "
    },
    "start": 23,
    "end": 26,
    "range": [
      23,
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
    "type": "Keyword",
    "value": "if",
    "start": 29,
    "end": 31,
    "range": [
      29,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 39,
    "end": 42,
    "range": [
      39,
      42
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 43,
    "end": 47,
    "range": [
      43,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 55,
    "end": 60,
    "range": [
      55,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 66,
    "end": 72,
    "range": [
      66,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 75,
    "end": 80,
    "range": [
      75,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93,
    "range": [
      88,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 99,
    "end": 105,
    "range": [
      99,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 108,
    "end": 113,
    "range": [
      108,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  }
]
```
