__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 128,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 72,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 45,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 54,
        "end": 69,
        "callee": {
          "type": "Identifier",
          "start": 54,
          "end": 67,
          "decorators": [],
          "name": "makeBaseClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 72,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 96,
        "decorators": [],
        "name": "makeBaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 123,
                "end": 125,
                "body": []
              },
              "abstract": false,
              "declare": false
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
