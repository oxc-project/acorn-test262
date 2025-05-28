__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 25,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 25,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 22,
              "end": 25
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 33,
            "end": 43,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 42,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 42,
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 48,
            "end": 73,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "decorators": [],
              "name": "async",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 73,
              "body": []
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
