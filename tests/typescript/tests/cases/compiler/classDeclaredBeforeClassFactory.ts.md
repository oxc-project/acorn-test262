__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 45
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeBaseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 67
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 54,
        "end": 69
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 70,
        "end": 72
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 72
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 96
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 122
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 123,
                "end": 125
              },
              "abstract": false,
              "declare": false,
              "start": 112,
              "end": 125
            },
            "start": 105,
            "end": 126
          }
        ],
        "start": 99,
        "end": 128
      },
      "expression": false,
      "start": 74,
      "end": 128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 32,
  "end": 128
}
```
