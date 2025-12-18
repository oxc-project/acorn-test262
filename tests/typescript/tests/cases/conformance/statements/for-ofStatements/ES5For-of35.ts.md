__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12,
                    "end": 13
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15,
                      "end": 16
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 19,
                      "end": 20
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15,
                    "end": 20
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 12,
                  "end": 20
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 22,
                    "end": 23
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 26
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 29,
                      "end": 30
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 30
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 22,
                  "end": 30
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 31
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 31
          }
        ],
        "declare": false,
        "start": 5,
        "end": 31
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 36,
            "end": 37
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 39,
            "end": 40
          }
        ],
        "start": 35,
        "end": 41
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "directive": null,
            "start": 49,
            "end": 51
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "directive": null,
            "start": 56,
            "end": 58
          }
        ],
        "start": 43,
        "end": 60
      },
      "start": 0,
      "end": 60
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 60
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5,
    "end": 10,
    "range": [
      5,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 32,
    "end": 34,
    "range": [
      32,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  }
]
```
