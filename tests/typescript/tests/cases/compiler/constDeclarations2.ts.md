__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 45
                  },
                  "init": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 48,
                    "end": 53
                  },
                  "definite": false,
                  "start": 43,
                  "end": 53
                }
              ],
              "declare": false,
              "start": 37,
              "end": 54
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 30,
            "end": 54
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 76,
                        "end": 82
                      },
                      "start": 74,
                      "end": 82
                    },
                    "start": 72,
                    "end": 82
                  },
                  "init": {
                    "type": "Literal",
                    "value": 23,
                    "raw": "23",
                    "start": 85,
                    "end": 87
                  },
                  "definite": false,
                  "start": 72,
                  "end": 87
                }
              ],
              "declare": false,
              "start": 66,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 59,
            "end": 88
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 108
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 111,
                    "end": 112
                  },
                  "definite": false,
                  "start": 106,
                  "end": 112
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c4",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 118,
                        "end": 124
                      },
                      "start": 117,
                      "end": 124
                    },
                    "start": 114,
                    "end": 124
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 127,
                    "end": 129
                  },
                  "definite": false,
                  "start": 114,
                  "end": 129
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 133
                  },
                  "init": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 136,
                    "end": 140
                  },
                  "definite": false,
                  "start": 131,
                  "end": 140
                }
              ],
              "declare": false,
              "start": 100,
              "end": 141
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 93,
            "end": 141
          }
        ],
        "start": 24,
        "end": 143
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 12,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 143
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12,
    "end": 21,
    "range": [
      12,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 37,
    "end": 42,
    "range": [
      37,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 43,
    "end": 45,
    "range": [
      43,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 48,
    "end": 53,
    "range": [
      48,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 66,
    "end": 71,
    "range": [
      66,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 76,
    "end": 82,
    "range": [
      76,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Numeric",
    "value": "23",
    "start": 85,
    "end": 87,
    "range": [
      85,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 100,
    "end": 105,
    "range": [
      100,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 106,
    "end": 108,
    "range": [
      106,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
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
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 127,
    "end": 129,
    "range": [
      127,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 131,
    "end": 133,
    "range": [
      131,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 136,
    "end": 140,
    "range": [
      136,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  }
]
```
