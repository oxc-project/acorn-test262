__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 22,
              "end": 25
            },
            "start": 20,
            "end": 25
          },
          "start": 19,
          "end": 25
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 42
                },
                "init": null,
                "definite": false,
                "start": 37,
                "end": 42
              }
            ],
            "declare": false,
            "start": 33,
            "end": 43
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "async",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 64
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 71,
              "end": 73
            },
            "start": 48,
            "end": 73
          }
        ],
        "start": 27,
        "end": 75
      },
      "expression": false,
      "start": 0,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
