__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "package",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 32
          },
          "start": 20,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./1",
        "raw": "\"./1\"",
        "start": 38,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 13,
      "end": 43
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 55
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 66
          },
          "importKind": "value",
          "start": 52,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./1",
        "raw": "\"./1\"",
        "start": 73,
        "end": 78
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 78
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 92
          },
          "start": 86,
          "end": 92
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./1",
        "raw": "\"./1\"",
        "start": 98,
        "end": 103
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 79,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12,
    "range": [
      0,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 13,
    "end": 19,
    "range": [
      13,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 22,
    "end": 24,
    "range": [
      22,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 25,
    "end": 32,
    "range": [
      25,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 33,
    "end": 37,
    "range": [
      33,
      37
    ]
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 38,
    "end": 43,
    "range": [
      38,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 52,
    "end": 55,
    "range": [
      52,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 56,
    "end": 58,
    "range": [
      56,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 73,
    "end": 78,
    "range": [
      73,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 86,
    "end": 92,
    "range": [
      86,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 93,
    "end": 97,
    "range": [
      93,
      97
    ]
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 98,
    "end": 103,
    "range": [
      98,
      103
    ]
  }
]
```
