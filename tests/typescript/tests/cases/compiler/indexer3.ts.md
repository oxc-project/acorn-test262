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
            "name": "dateMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 19,
                            "end": 25
                          },
                          "start": 17,
                          "end": 25
                        },
                        "start": 16,
                        "end": 25
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 28,
                          "end": 32
                        },
                        "typeArguments": null,
                        "start": 28,
                        "end": 32
                      },
                      "start": 26,
                      "end": 32
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 15,
                    "end": 33
                  }
                ],
                "start": 13,
                "end": 35
              },
              "start": 11,
              "end": 35
            },
            "start": 4,
            "end": 35
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 38,
            "end": 40
          },
          "definite": false,
          "start": 4,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 52
                },
                "typeArguments": null,
                "start": 48,
                "end": 52
              },
              "start": 46,
              "end": 52
            },
            "start": 45,
            "end": 52
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dateMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 62
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 63,
              "end": 70
            },
            "optional": false,
            "computed": true,
            "start": 55,
            "end": 71
          },
          "definite": false,
          "start": 45,
          "end": 71
        }
      ],
      "declare": false,
      "start": 41,
      "end": 71
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
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
    "value": "dateMap",
    "start": 4,
    "end": 11,
    "range": [
      4,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 28,
    "end": 32,
    "range": [
      28,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44,
    "range": [
      41,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 48,
    "end": 52,
    "range": [
      48,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "dateMap",
    "start": 55,
    "end": 62,
    "range": [
      55,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 63,
    "end": 70,
    "range": [
      63,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  }
]
```
