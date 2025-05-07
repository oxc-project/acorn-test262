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
          "definite": false,
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
                },
                "typeParameters": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 40,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 39,
        "operator": "==",
        "left": {
          "type": "MemberExpression",
          "start": 23,
          "end": 34,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 25,
            "end": 34,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 38,
          "end": 39,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
