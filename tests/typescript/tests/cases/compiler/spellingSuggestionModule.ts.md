__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foobar",
        "raw": "\"foobar\"",
        "start": 15,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 42,
                        "end": 48
                      },
                      "start": 40,
                      "end": 48
                    },
                    "start": 39,
                    "end": 48
                  },
                  "init": null,
                  "definite": false,
                  "start": 39,
                  "end": 48
                }
              ],
              "declare": false,
              "start": 33,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 49
          }
        ],
        "start": 24,
        "end": 51
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 58
      },
      "directive": null,
      "start": 52,
      "end": 59
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "barfoo",
        "raw": "'barfoo'",
        "start": 76,
        "end": 84
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 103,
                        "end": 109
                      },
                      "start": 101,
                      "end": 109
                    },
                    "start": 100,
                    "end": 109
                  },
                  "init": null,
                  "definite": false,
                  "start": 100,
                  "end": 109
                }
              ],
              "declare": false,
              "start": 94,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 87,
            "end": 110
          }
        ],
        "start": 85,
        "end": 112
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 61,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "barfoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 119
      },
      "directive": null,
      "start": 113,
      "end": 120
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "farboo",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 146
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 165,
                        "end": 171
                      },
                      "start": 163,
                      "end": 171
                    },
                    "start": 162,
                    "end": 171
                  },
                  "init": null,
                  "definite": false,
                  "start": 162,
                  "end": 171
                }
              ],
              "declare": false,
              "start": 156,
              "end": 172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 149,
            "end": 172
          }
        ],
        "start": 147,
        "end": 174
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 122,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "faroo",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 180
      },
      "directive": null,
      "start": 175,
      "end": 181
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 181
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "String",
    "value": "\"foobar\"",
    "start": 15,
    "end": 23,
    "range": [
      15,
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
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "foobar",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 61,
    "end": 68,
    "range": [
      61,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "String",
    "value": "'barfoo'",
    "start": 76,
    "end": 84,
    "range": [
      76,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "barfoo",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 122,
    "end": 129,
    "range": [
      122,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 130,
    "end": 139,
    "range": [
      130,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "farboo",
    "start": 140,
    "end": 146,
    "range": [
      140,
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
    "value": "export",
    "start": 149,
    "end": 155,
    "range": [
      149,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 156,
    "end": 161,
    "range": [
      156,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 165,
    "end": 171,
    "range": [
      165,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "faroo",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  }
]
```
