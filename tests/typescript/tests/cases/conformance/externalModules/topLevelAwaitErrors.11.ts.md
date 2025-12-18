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
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              },
              "start": 50,
              "end": 55
            },
            "start": 43,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 43,
          "end": 55
        }
      ],
      "declare": true,
      "start": 31,
      "end": 56
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "await",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 69
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./other",
          "raw": "\"./other\"",
          "start": 80,
          "end": 89
        },
        "start": 72,
        "end": 90
      },
      "importKind": "value",
      "start": 57,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 31,
  "end": 92
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 31,
    "end": 38,
    "range": [
      31,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 39,
    "end": 42,
    "range": [
      39,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 43,
    "end": 50,
    "range": [
      43,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 52,
    "end": 55,
    "range": [
      52,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 64,
    "end": 69,
    "range": [
      64,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 72,
    "end": 79,
    "range": [
      72,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "String",
    "value": "\"./other\"",
    "start": 80,
    "end": 89,
    "range": [
      80,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
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
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              },
              "start": 20,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 42
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 51
          },
          "exportKind": "value",
          "start": 36,
          "end": 51
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 27,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "_await",
    "start": 14,
    "end": 20,
    "range": [
      14,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 22,
    "end": 25,
    "range": [
      22,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "_await",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 43,
    "end": 45,
    "range": [
      43,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 46,
    "end": 51,
    "range": [
      46,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  }
]
```
