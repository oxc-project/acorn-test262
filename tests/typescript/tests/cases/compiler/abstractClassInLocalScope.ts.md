__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
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
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 7,
            "end": 86,
            "body": [
              {
                "type": "ClassDeclaration",
                "start": 13,
                "end": 32,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 30,
                  "end": 32,
                  "body": []
                },
                "abstract": true,
                "declare": false
              },
              {
                "type": "ClassDeclaration",
                "start": 37,
                "end": 57,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 55,
                  "end": 57,
                  "body": []
                },
                "abstract": false,
                "declare": false
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
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
