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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "f",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 25,
            "end": 34,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
