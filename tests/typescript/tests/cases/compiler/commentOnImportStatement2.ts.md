__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 30
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo",
          "raw": "'./foo'",
          "start": 41,
          "end": 48
        },
        "start": 33,
        "end": 49
      },
      "importKind": "value",
      "start": 20,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 50
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 27,
    "end": 30,
    "range": [
      27,
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
    "type": "Identifier",
    "value": "require",
    "start": 33,
    "end": 40,
    "range": [
      33,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "String",
    "value": "'./foo'",
    "start": 41,
    "end": 48,
    "range": [
      41,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  }
]
```
