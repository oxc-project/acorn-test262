__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "name": "regex",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 14,
            "end": 102,
            "value": null,
            "raw": "/\\p{ascii}\\p{Sc=Unknown}\\p{sc=unknownX}\\p{Script_Declensions=Inherited}\\p{scx=inherit}/u",
            "regex": {
              "flags": "u",
              "pattern": "\\p{ascii}\\p{Sc=Unknown}\\p{sc=unknownX}\\p{Script_Declensions=Inherited}\\p{scx=inherit}"
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
