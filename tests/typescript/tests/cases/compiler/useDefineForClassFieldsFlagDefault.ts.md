__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 276
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 279,
              "end": 280
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 268,
            "end": 281
          }
        ],
        "start": 10,
        "end": 284
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 284
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9,
    "range": [
      6,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 268,
    "end": 274,
    "range": [
      268,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  }
]
```
