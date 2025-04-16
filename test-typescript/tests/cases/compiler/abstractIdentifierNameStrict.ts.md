__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "name": "abstract",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 15,
            "end": 19,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 83,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 43,
            "end": 56,
            "expression": {
              "type": "Literal",
              "start": 43,
              "end": 55,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          },
          {
            "type": "VariableDeclaration",
            "start": 61,
            "end": 81,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 65,
                "end": 80,
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 73,
                  "name": "abstract",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 76,
                  "end": 80,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
