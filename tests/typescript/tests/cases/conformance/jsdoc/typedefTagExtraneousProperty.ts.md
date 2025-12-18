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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bye",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 132
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "\"no\"",
                  "start": 134,
                  "end": 138
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 129,
                "end": 138
              }
            ],
            "start": 127,
            "end": 140
          },
          "definite": false,
          "start": 123,
          "end": 140
        }
      ],
      "declare": false,
      "start": 119,
      "end": 141
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 143
      },
      "directive": null,
      "start": 142,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ignoreMe",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 154
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 154
        },
        "right": {
          "type": "Literal",
          "value": "ok but just because of the index signature",
          "raw": "\"ok but just because of the index signature\"",
          "start": 157,
          "end": 201
        },
        "start": 144,
        "end": 201
      },
      "directive": null,
      "start": 144,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 203
          },
          "property": {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'",
            "start": 204,
            "end": 208
          },
          "optional": false,
          "computed": true,
          "start": 202,
          "end": 209
        },
        "right": {
          "type": "Literal",
          "value": "yes",
          "raw": "\"yes\"",
          "start": 212,
          "end": 217
        },
        "start": 202,
        "end": 217
      },
      "directive": null,
      "start": 202,
      "end": 217
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 119,
  "end": 217
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 119,
    "end": 122,
    "range": [
      119,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "bye",
    "start": 129,
    "end": 132,
    "range": [
      129,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "ignoreMe",
    "start": 146,
    "end": 154,
    "range": [
      146,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "String",
    "value": "\"ok but just because of the index signature\"",
    "start": 157,
    "end": 201,
    "range": [
      157,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 204,
    "end": 208,
    "range": [
      204,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "String",
    "value": "\"yes\"",
    "start": 212,
    "end": 217,
    "range": [
      212,
      217
    ]
  }
]
```
