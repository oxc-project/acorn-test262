__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 44
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 48,
                        "end": 54
                      },
                      "start": 46,
                      "end": 54
                    },
                    "start": 45,
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 74
                      },
                      "start": 66,
                      "end": 75
                    }
                  ],
                  "start": 56,
                  "end": 81
                },
                "expression": false,
                "start": 32,
                "end": 81
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 81
            }
          ],
          "start": 19,
          "end": 83
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 83
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 93
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 97
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 101
        },
        "start": 96,
        "end": 101
      },
      "importKind": "value",
      "start": 85,
      "end": 102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 118
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 123,
                  "end": 125
                }
              ],
              "optional": false,
              "start": 121,
              "end": 126
            },
            "definite": false,
            "start": 114,
            "end": 126
          }
        ],
        "declare": false,
        "start": 110,
        "end": 127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 127
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bVal2",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 144
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "definite": false,
            "start": 139,
            "end": 148
          }
        ],
        "declare": false,
        "start": 135,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 128,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
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
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 32,
    "end": 40,
    "range": [
      32,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 41,
    "end": 44,
    "range": [
      41,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "start": 66,
    "end": 72,
    "range": [
      66,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81,
    "range": [
      80,
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
    "type": "Keyword",
    "value": "import",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 110,
    "end": 113,
    "range": [
      110,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "bVal",
    "start": 114,
    "end": 118,
    "range": [
      114,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 123,
    "end": 125,
    "range": [
      123,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
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
    "value": "var",
    "start": 135,
    "end": 138,
    "range": [
      135,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "bVal2",
    "start": 139,
    "end": 144,
    "range": [
      139,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  }
]
```
