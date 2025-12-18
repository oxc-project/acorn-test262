__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "salt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9,
                "end": 12
              },
              "start": 8,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "salt",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 23
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "pepper",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 30
              },
              "optional": false,
              "computed": false,
              "start": 19,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [],
            "start": 15,
            "end": 32
          },
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    },
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
            "name": "salt",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pepper",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 48
          },
          "optional": false,
          "computed": false,
          "start": 37,
          "end": 48
        },
        "right": {
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
            "start": 62,
            "end": 64
          },
          "expression": false,
          "start": 51,
          "end": 64
        },
        "start": 37,
        "end": 64
      },
      "directive": null,
      "start": 37,
      "end": 64
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
            "name": "cobalt",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 76
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "cobalt",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 89
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "pitch",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 95
              },
              "optional": false,
              "computed": false,
              "start": 83,
              "end": 95
            },
            "typeArguments": null,
            "arguments": [],
            "start": 79,
            "end": 97
          },
          "definite": false,
          "start": 70,
          "end": 97
        }
      ],
      "declare": false,
      "start": 66,
      "end": 98
    },
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
            "name": "cobalt",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pitch",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 114
          },
          "optional": false,
          "computed": false,
          "start": 102,
          "end": 114
        },
        "right": {
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
            "start": 128,
            "end": 130
          },
          "expression": false,
          "start": 117,
          "end": 130
        },
        "start": 102,
        "end": 130
      },
      "directive": null,
      "start": 102,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 132
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "salt",
    "start": 4,
    "end": 8,
    "range": [
      4,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 15,
    "end": 18,
    "range": [
      15,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "salt",
    "start": 19,
    "end": 23,
    "range": [
      19,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "pepper",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "salt",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "pepper",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 51,
    "end": 59,
    "range": [
      51,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61,
    "range": [
      60,
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
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "cobalt",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "cobalt",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "pitch",
    "start": 90,
    "end": 95,
    "range": [
      90,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "cobalt",
    "start": 102,
    "end": 108,
    "range": [
      102,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "pitch",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 117,
    "end": 125,
    "range": [
      117,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  }
]
```
