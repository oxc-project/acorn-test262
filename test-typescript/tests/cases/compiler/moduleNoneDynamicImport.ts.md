__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 12,
            "end": 25,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 19,
              "end": 24,
              "raw": "\"./b\"",
              "value": "./b"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 17,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 16,
        "raw": "1",
        "value": 1
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
