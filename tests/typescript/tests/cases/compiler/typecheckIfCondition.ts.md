__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 71
      },
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
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 91
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 99
                },
                "optional": false,
                "computed": false,
                "start": 85,
                "end": 99
              },
              "prefix": true,
              "start": 84,
              "end": 99
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "module",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 107
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exports",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 115
                  },
                  "optional": false,
                  "computed": false,
                  "start": 101,
                  "end": 115
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 118,
                  "end": 120
                },
                "start": 101,
                "end": 120
              },
              "directive": null,
              "start": 101,
              "end": 121
            },
            "alternate": null,
            "start": 80,
            "end": 121
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 134,
                  "end": 138
                },
                "definite": false,
                "start": 130,
                "end": 138
              }
            ],
            "declare": false,
            "start": 126,
            "end": 139
          }
        ],
        "start": 74,
        "end": 174
      },
      "expression": false,
      "start": 53,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 53,
  "end": 174
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61,
    "range": [
      53,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "myWrapper",
    "start": 62,
    "end": 71,
    "range": [
      62,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 80,
    "end": 82,
    "range": [
      80,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 92,
    "end": 99,
    "range": [
      92,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 108,
    "end": 115,
    "range": [
      108,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 118,
    "end": 120,
    "range": [
      118,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 126,
    "end": 129,
    "range": [
      126,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
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
  }
]
```
