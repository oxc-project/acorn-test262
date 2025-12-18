__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 39
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "CompletelyMissing",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 59
        },
        "importKind": "value",
        "start": 23,
        "end": 60
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 16,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 60
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
    "value": "import",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 30,
    "end": 39,
    "range": [
      30,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "CompletelyMissing",
    "start": 42,
    "end": 59,
    "range": [
      42,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Second",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./second",
        "raw": "'./second'",
        "start": 24,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Second",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 51
      },
      "start": 36,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
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
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "Second",
    "start": 12,
    "end": 18,
    "range": [
      12,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23,
    "range": [
      19,
      23
    ]
  },
  {
    "type": "String",
    "value": "'./second'",
    "start": 24,
    "end": 34,
    "range": [
      24,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "Second",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./first",
        "raw": "'./first'",
        "start": 26,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 36
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 44
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 62
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 63,
        "end": 66
      },
      "abstract": false,
      "declare": false,
      "start": 37,
      "end": 66
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 66
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 9,
    "end": 18,
    "range": [
      9,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "String",
    "value": "'./first'",
    "start": 26,
    "end": 35,
    "range": [
      26,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 37,
    "end": 42,
    "range": [
      37,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 45,
    "end": 52,
    "range": [
      45,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 53,
    "end": 62,
    "range": [
      53,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  }
]
```
