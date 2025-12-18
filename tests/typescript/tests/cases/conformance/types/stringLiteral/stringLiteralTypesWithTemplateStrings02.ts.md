__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "AB\r\nC",
                  "raw": "\"AB\\r\\nC\"",
                  "start": 9,
                  "end": 18
                },
                "start": 9,
                "end": 18
              },
              "start": 7,
              "end": 18
            },
            "start": 4,
            "end": 18
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "AB\nC",
                  "cooked": "AB\nC"
                },
                "tail": true,
                "start": 21,
                "end": 27
              }
            ],
            "expressions": [],
            "start": 21,
            "end": 27
          },
          "definite": false,
          "start": 4,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "de_NEWLINE_f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "DE\nF",
                  "raw": "\"DE\\nF\"",
                  "start": 47,
                  "end": 54
                },
                "start": 47,
                "end": 54
              },
              "start": 45,
              "end": 54
            },
            "start": 33,
            "end": 54
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "DE",
                  "cooked": "DE"
                },
                "tail": false,
                "start": 57,
                "end": 62
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "F",
                  "cooked": "F"
                },
                "tail": true,
                "start": 66,
                "end": 69
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": "\n",
                "raw": "\"\\n\"",
                "start": 62,
                "end": 66
              }
            ],
            "start": 57,
            "end": 69
          },
          "definite": false,
          "start": 33,
          "end": 69
        }
      ],
      "declare": false,
      "start": 29,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 70
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 4,
    "end": 7,
    "range": [
      4,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "String",
    "value": "\"AB\\r\\nC\"",
    "start": 9,
    "end": 18,
    "range": [
      9,
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
    "type": "Template",
    "value": "`AB\nC`",
    "start": 21,
    "end": 27,
    "range": [
      21,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "de_NEWLINE_f",
    "start": 33,
    "end": 45,
    "range": [
      33,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "String",
    "value": "\"DE\\nF\"",
    "start": 47,
    "end": 54,
    "range": [
      47,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Template",
    "value": "`DE${",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "String",
    "value": "\"\\n\"",
    "start": 62,
    "end": 66,
    "range": [
      62,
      66
    ]
  },
  {
    "type": "Template",
    "value": "}F`",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  }
]
```
