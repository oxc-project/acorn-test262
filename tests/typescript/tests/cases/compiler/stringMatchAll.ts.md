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
            "name": "matches",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "matchAll",
                "raw": "\"matchAll\"",
                "start": 16,
                "end": 26
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "matchAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 35
              },
              "optional": false,
              "computed": false,
              "start": 16,
              "end": 35
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\w/g",
                "regex": {
                  "pattern": "\\w",
                  "flags": "g"
                },
                "start": 36,
                "end": 41
              }
            ],
            "optional": false,
            "start": 16,
            "end": 42
          },
          "definite": false,
          "start": 6,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 55
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "matches",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 69
                },
                "start": 59,
                "end": 69
              }
            ],
            "start": 58,
            "end": 70
          },
          "definite": false,
          "start": 50,
          "end": 70
        }
      ],
      "declare": false,
      "start": 44,
      "end": 71
    },
    {
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
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 85
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 85
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 80,
                "end": 85
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 92
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 92
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 87,
                "end": 92
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 94
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 102
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 103,
              "end": 104
            },
            "optional": false,
            "computed": true,
            "start": 97,
            "end": 105
          },
          "definite": false,
          "start": 78,
          "end": 105
        }
      ],
      "declare": false,
      "start": 72,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
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
    "value": "matches",
    "start": 6,
    "end": 13,
    "range": [
      6,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "String",
    "value": "\"matchAll\"",
    "start": 16,
    "end": 26,
    "range": [
      16,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "matchAll",
    "start": 27,
    "end": 35,
    "range": [
      27,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/\\w/g",
    "regex": {
      "flags": "g",
      "pattern": "\\w"
    },
    "start": 36,
    "end": 41,
    "range": [
      36,
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
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 50,
    "end": 55,
    "range": [
      50,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 59,
    "end": 62,
    "range": [
      59,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 62,
    "end": 69,
    "range": [
      62,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77,
    "range": [
      72,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 80,
    "end": 85,
    "range": [
      80,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 87,
    "end": 92,
    "range": [
      87,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 97,
    "end": 102,
    "range": [
      97,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  }
]
```
