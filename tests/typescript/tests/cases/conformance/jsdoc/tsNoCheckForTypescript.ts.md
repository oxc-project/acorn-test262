__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 33,
                "end": 34
              },
              "operator": "+",
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 37,
                "end": 39
              },
              "start": 33,
              "end": 39
            },
            "definite": false,
            "start": 29,
            "end": 39
          }
        ],
        "declare": false,
        "start": 23,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 16,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Aleph",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 196
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 206,
                  "end": 212
                },
                "start": 204,
                "end": 212
              },
              "accessibility": null,
              "static": false,
              "start": 203,
              "end": 213
            }
          ],
          "start": 197,
          "end": 215
        },
        "declare": false,
        "start": 181,
        "end": 215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 174,
      "end": 215
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bet",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 233
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Aleph",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 250
            },
            "typeArguments": null,
            "start": 245,
            "end": 250
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 260,
                  "end": 266
                },
                "start": 258,
                "end": 266
              },
              "value": {
                "type": "Literal",
                "value": "lol",
                "raw": "\"lol\"",
                "start": 269,
                "end": 274
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 257,
              "end": 274
            }
          ],
          "start": 251,
          "end": 313
        },
        "abstract": false,
        "declare": false,
        "start": 224,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 217,
      "end": 313
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 313
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 16,
    "end": 22,
    "range": [
      16,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28,
    "range": [
      23,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 174,
    "end": 180,
    "range": [
      174,
      180
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 181,
    "end": 190,
    "range": [
      181,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "Aleph",
    "start": 191,
    "end": 196,
    "range": [
      191,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 206,
    "end": 212,
    "range": [
      206,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223,
    "range": [
      217,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 224,
    "end": 229,
    "range": [
      224,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "Bet",
    "start": 230,
    "end": 233,
    "range": [
      230,
      233
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 234,
    "end": 244,
    "range": [
      234,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "Aleph",
    "start": 245,
    "end": 250,
    "range": [
      245,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266,
    "range": [
      260,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "String",
    "value": "\"lol\"",
    "start": 269,
    "end": 274,
    "range": [
      269,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  }
]
```
