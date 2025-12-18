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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 8,
                  "end": 14
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 19,
                  "end": 24
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": " ",
                  "raw": "\" \"",
                  "start": 15,
                  "end": 18
                }
              ],
              "start": 8,
              "end": 24
            },
            "consequent": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 27,
                  "end": 33
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 38,
                  "end": 43
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": " ",
                  "raw": "\" \"",
                  "start": 34,
                  "end": 37
                }
              ],
              "start": 27,
              "end": 43
            },
            "alternate": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 46,
                  "end": 52
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 57,
                  "end": 62
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": " ",
                  "raw": "\" \"",
                  "start": 53,
                  "end": 56
                }
              ],
              "start": 46,
              "end": 62
            },
            "start": 8,
            "end": 62
          },
          "definite": false,
          "start": 4,
          "end": 62
        }
      ],
      "declare": false,
      "start": 0,
      "end": 63
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 63
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
    "value": "x",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 15,
    "end": 18,
    "range": [
      15,
      18
    ]
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 19,
    "end": 24,
    "range": [
      19,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 34,
    "end": 37,
    "range": [
      34,
      37
    ]
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 38,
    "end": 43,
    "range": [
      38,
      43
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
    "type": "Template",
    "value": "`abc${",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 53,
    "end": 56,
    "range": [
      53,
      56
    ]
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  }
]
```
