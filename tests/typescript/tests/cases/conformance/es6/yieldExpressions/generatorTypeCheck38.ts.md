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
            "name": "yield",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 22
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 37,
                "end": 38
              },
              "start": 31,
              "end": 38
            },
            "directive": null,
            "start": 31,
            "end": 39
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "yield",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 63
                      },
                      "typeArguments": null,
                      "start": 51,
                      "end": 63
                    },
                    "start": 49,
                    "end": 63
                  },
                  "start": 48,
                  "end": 63
                },
                "init": null,
                "definite": false,
                "start": 48,
                "end": 63
              }
            ],
            "declare": false,
            "start": 44,
            "end": 64
          }
        ],
        "start": 25,
        "end": 66
      },
      "expression": false,
      "start": 11,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
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
    "value": "yield",
    "start": 4,
    "end": 9,
    "range": [
      4,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 11,
    "end": 19,
    "range": [
      11,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 21,
    "end": 22,
    "range": [
      21,
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
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 31,
    "end": 36,
    "range": [
      31,
      36
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 44,
    "end": 47,
    "range": [
      44,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 51,
    "end": 57,
    "range": [
      51,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "yield",
    "start": 58,
    "end": 63,
    "range": [
      58,
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
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  }
]
```
