__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 21,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 7,
                "end": 21,
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 14,
                  "end": 21,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 17,
                    "end": 21
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 40,
      "expression": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 39,
        "left": {
          "type": "MemberExpression",
          "start": 23,
          "end": 34,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 25,
            "end": 34,
            "name": "arguments",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 38,
          "end": 39,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
