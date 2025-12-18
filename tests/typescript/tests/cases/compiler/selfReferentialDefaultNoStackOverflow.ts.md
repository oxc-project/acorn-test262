__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "DefaultSpinner",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 21
          },
          "start": 7,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./QSpinner",
        "raw": "'./QSpinner'",
        "start": 27,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixins",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DefaultSpinner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 83
                }
              ],
              "start": 68,
              "end": 84
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 60,
            "end": 84
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 92
            },
            "value": {
              "type": "Literal",
              "value": "QSpinner",
              "raw": "'QSpinner'",
              "start": 94,
              "end": 104
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 88,
            "end": 104
          }
        ],
        "start": 56,
        "end": 106
      },
      "exportKind": "value",
      "start": 41,
      "end": 106
    }
  ],
  "sourceType": "module",
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
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultSpinner",
    "start": 7,
    "end": 21,
    "range": [
      7,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "String",
    "value": "'./QSpinner'",
    "start": 27,
    "end": 39,
    "range": [
      27,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 48,
    "end": 55,
    "range": [
      48,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "mixins",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "DefaultSpinner",
    "start": 69,
    "end": 83,
    "range": [
      69,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 88,
    "end": 92,
    "range": [
      88,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "String",
    "value": "'QSpinner'",
    "start": 94,
    "end": 104,
    "range": [
      94,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  }
]
```
