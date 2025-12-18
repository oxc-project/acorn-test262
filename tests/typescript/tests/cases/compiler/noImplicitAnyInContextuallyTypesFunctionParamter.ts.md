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
            "name": "regexMatchList",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 18
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 22,
                "end": 24
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 26,
                "end": 28
              }
            ],
            "start": 21,
            "end": 29
          },
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
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
            "name": "regexMatchList",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 53
          },
          "optional": false,
          "computed": false,
          "start": 31,
          "end": 53
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 59
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 63,
                  "end": 65
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "replace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 73
                },
                "optional": false,
                "computed": false,
                "start": 63,
                "end": 73
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 79
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 81,
                  "end": 83
                }
              ],
              "optional": false,
              "start": 63,
              "end": 84
            },
            "id": null,
            "generator": false,
            "start": 54,
            "end": 84
          }
        ],
        "optional": false,
        "start": 31,
        "end": 85
      },
      "directive": null,
      "start": 31,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 86
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
    "value": "regexMatchList",
    "start": 4,
    "end": 18,
    "range": [
      4,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 22,
    "end": 24,
    "range": [
      22,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 26,
    "end": 28,
    "range": [
      26,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "regexMatchList",
    "start": 31,
    "end": 45,
    "range": [
      31,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 46,
    "end": 53,
    "range": [
      46,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 54,
    "end": 59,
    "range": [
      54,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 60,
    "end": 62,
    "range": [
      60,
      62
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 63,
    "end": 65,
    "range": [
      63,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 66,
    "end": 73,
    "range": [
      66,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 74,
    "end": 79,
    "range": [
      74,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 81,
    "end": 83,
    "range": [
      81,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  }
]
```
