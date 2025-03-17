__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 90,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 89,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1,
          "end": 86,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 7,
            "end": 86,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 13,
                "end": 32,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 30,
                  "end": 32,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": true,
                "declare": false,
                "superTypeArguments": null
              },
              {
                "type": "ClassDeclaration",
                "start": 37,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 55,
                  "end": 57,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              {
                "type": "ExpressionStatement",
                "start": 62,
                "end": 70,
                "expression": {
                  "type": "NewExpression",
                  "start": 62,
                  "end": 69,
                  "callee": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "directive": null
              },
              {
                "type": "ReturnStatement",
                "start": 75,
                "end": 84,
                "argument": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
