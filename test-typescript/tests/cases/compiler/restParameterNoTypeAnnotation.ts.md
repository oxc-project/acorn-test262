__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 76,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 56,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 55,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 45,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 39,
                      "end": 45
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 55,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 52,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 53,
                    "end": 54,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 71,
            "argument": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 20,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
