__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 129,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 45,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 54,
        "end": 69,
        "callee": {
          "type": "Identifier",
          "start": 54,
          "end": 67,
          "name": "makeBaseClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 72,
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
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 96,
        "name": "makeBaseClass",
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
        "start": 99,
        "end": 128,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 105,
            "end": 126,
            "argument": {
              "type": "ClassExpression",
              "start": 112,
              "end": 125,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 123,
                "end": 125,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
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
