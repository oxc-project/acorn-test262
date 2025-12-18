__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": null,
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 40,
                "end": 44
              },
              "start": 33,
              "end": 45
            }
          ],
          "start": 27,
          "end": 47
        },
        "expression": false,
        "start": 15,
        "end": 47
      },
      "exportKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 61
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 78
          },
          "typeArguments": null,
          "start": 64,
          "end": 78
        },
        "declare": false,
        "start": 55,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 48,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23,
    "range": [
      15,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 40,
    "end": 44,
    "range": [
      40,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 55,
    "end": 59,
    "range": [
      55,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 71,
    "end": 78,
    "range": [
      71,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 20,
              "end": 24
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 17,
            "end": 24
          }
        ],
        "start": 15,
        "end": 26
      },
      "exportKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 40
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 57
          },
          "typeArguments": null,
          "start": 43,
          "end": 57
        },
        "declare": false,
        "start": 34,
        "end": 58
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 27,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 20,
    "end": 24,
    "range": [
      20,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 34,
    "end": 38,
    "range": [
      34,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 50,
    "end": 57,
    "range": [
      50,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  }
]
```
