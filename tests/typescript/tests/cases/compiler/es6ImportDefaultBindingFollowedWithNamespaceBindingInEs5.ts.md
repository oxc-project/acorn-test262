__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
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
    "value": "var",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 15,
    "end": 17,
    "range": [
      15,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 21
          },
          "start": 7,
          "end": 21
        },
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 44
          },
          "start": 23,
          "end": 44
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamespaceBindingInEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamespaceBindingInEs5_0\"",
        "start": 51,
        "end": 113
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 114
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
              },
              "start": 120,
              "end": 128
            },
            "start": 119,
            "end": 128
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameSpaceBinding",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 147
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 149
            },
            "optional": false,
            "computed": false,
            "start": 131,
            "end": 149
          },
          "definite": false,
          "start": 119,
          "end": 149
        }
      ],
      "declare": false,
      "start": 115,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 150
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
    "value": "defaultBinding",
    "start": 7,
    "end": 21,
    "range": [
      7,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 25,
    "end": 27,
    "range": [
      25,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 28,
    "end": 44,
    "range": [
      28,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 46,
    "end": 50,
    "range": [
      46,
      50
    ]
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamespaceBindingInEs5_0\"",
    "start": 51,
    "end": 113,
    "range": [
      51,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 115,
    "end": 118,
    "range": [
      115,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 131,
    "end": 147,
    "range": [
      131,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  }
]
```
