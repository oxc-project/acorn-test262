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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 609,
            "end": 610
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 613,
            "end": 615
          },
          "definite": false,
          "start": 609,
          "end": 615
        }
      ],
      "declare": false,
      "start": 603,
      "end": 616
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 603,
  "end": 616
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 603,
    "end": 608,
    "range": [
      603,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  }
]
```
