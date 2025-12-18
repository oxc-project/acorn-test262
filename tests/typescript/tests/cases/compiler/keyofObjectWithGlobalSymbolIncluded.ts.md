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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 25
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "species",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 33
                  },
                  "optional": false,
                  "computed": false,
                  "start": 19,
                  "end": 33
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 41
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 18,
                "end": 41
              }
            ],
            "start": 12,
            "end": 43
          },
          "definite": false,
          "start": 6,
          "end": 43
        }
      ],
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 71
          },
          "typeArguments": null,
          "start": 61,
          "end": 71
        },
        "start": 55,
        "end": 71
      },
      "declare": false,
      "start": 46,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
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
    "value": "obj",
    "start": 6,
    "end": 9,
    "range": [
      6,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "species",
    "start": 26,
    "end": 33,
    "range": [
      26,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 36,
    "end": 41,
    "range": [
      36,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 46,
    "end": 50,
    "range": [
      46,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 51,
    "end": 52,
    "range": [
      51,
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
    "value": "keyof",
    "start": 55,
    "end": 60,
    "range": [
      55,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  }
]
```
