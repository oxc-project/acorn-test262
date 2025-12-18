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
              "name": "mapped",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "constraint": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a-b-c",
                      "raw": "'a-b-c'",
                      "start": 37,
                      "end": 44
                    },
                    "start": 37,
                    "end": 44
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 29,
                  "end": 55
                },
                "start": 27,
                "end": 55
              },
              "start": 21,
              "end": 55
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 55
          }
        ],
        "declare": true,
        "start": 7,
        "end": 55
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 55
    },
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
              "name": "example",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 76
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 85
            },
            "definite": false,
            "start": 69,
            "end": 85
          }
        ],
        "declare": false,
        "start": 63,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
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
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20,
    "range": [
      15,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 21,
    "end": 27,
    "range": [
      21,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 34,
    "end": 36,
    "range": [
      34,
      36
    ]
  },
  {
    "type": "String",
    "value": "'a-b-c'",
    "start": 37,
    "end": 44,
    "range": [
      37,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62,
    "range": [
      56,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 63,
    "end": 68,
    "range": [
      63,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 69,
    "end": 76,
    "range": [
      69,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  }
]
```
