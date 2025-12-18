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
            "name": "io",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              },
              "start": 44,
              "end": 49
            },
            "start": 42,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 42,
          "end": 49
        }
      ],
      "declare": true,
      "start": 30,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "module",
        "raw": "'module'",
        "start": 67,
        "end": 75
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "io",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 99
            },
            "exportKind": "value",
            "start": 82,
            "end": 100
          }
        ],
        "start": 76,
        "end": 102
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 52,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 102
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 30,
    "end": 37,
    "range": [
      30,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 38,
    "end": 41,
    "range": [
      38,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "io",
    "start": 42,
    "end": 44,
    "range": [
      42,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 46,
    "end": 49,
    "range": [
      46,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "String",
    "value": "'module'",
    "start": 67,
    "end": 75,
    "range": [
      67,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 89,
    "end": 96,
    "range": [
      89,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "io",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  }
]
```
