__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "regex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 14,
            "end": 102,
            "raw": "/\\p{ascii}\\p{Sc=Unknown}\\p{sc=unknownX}\\p{Script_Declensions=Inherited}\\p{scx=inherit}/u",
            "regex": {
              "flags": "u",
              "pattern": "\\p{ascii}\\p{Sc=Unknown}\\p{sc=unknownX}\\p{Script_Declensions=Inherited}\\p{scx=inherit}"
            },
            "value": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
