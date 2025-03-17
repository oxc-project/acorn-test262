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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 20,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 45,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 39,
                      "end": 45
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 55,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 52,
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 53,
                    "end": 54,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 71,
            "argument": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
