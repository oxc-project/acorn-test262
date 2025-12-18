__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Album",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 22
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
                "type": "Literal",
                "value": "artist",
                "raw": "\"artist\"",
                "start": 29,
                "end": 37
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                },
                "start": 37,
                "end": 45
              },
              "accessibility": null,
              "static": false,
              "start": 29,
              "end": 46
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "artist",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 57
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 59,
                  "end": 65
                },
                "start": 57,
                "end": 65
              },
              "accessibility": null,
              "static": false,
              "start": 51,
              "end": 66
            }
          ],
          "start": 23,
          "end": 68
        },
        "declare": false,
        "start": 7,
        "end": 68
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 68
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
    "value": "interface",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Album",
    "start": 17,
    "end": 22,
    "range": [
      17,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "String",
    "value": "\"artist\"",
    "start": 29,
    "end": 37,
    "range": [
      29,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "artist",
    "start": 51,
    "end": 57,
    "range": [
      51,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  }
]
```
