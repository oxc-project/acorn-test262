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
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 15,
                  "end": 21
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 26,
                  "end": 31
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 22,
                  "end": 25
                }
              ],
              "start": 15,
              "end": 31
            },
            "prefix": true,
            "start": 8,
            "end": 31
          },
          "definite": false,
          "start": 4,
          "end": 31
        }
      ],
      "declare": false,
      "start": 0,
      "end": 32
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 32
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
    "type": "Keyword",
    "value": "typeof",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 22,
    "end": 25,
    "range": [
      22,
      25
    ]
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 26,
    "end": 31,
    "range": [
      26,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  }
]
```
