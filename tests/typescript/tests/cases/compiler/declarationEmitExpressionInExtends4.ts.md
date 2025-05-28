__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 21,
        "decorators": [],
        "name": "getSomething",
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
        "start": 24,
        "end": 50,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 30,
            "end": 48,
            "argument": {
              "type": "ClassExpression",
              "start": 37,
              "end": 48,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 45,
                "end": 48,
                "body": []
              },
              "abstract": false,
              "declare": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 103,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 68,
        "end": 82,
        "callee": {
          "type": "Identifier",
          "start": 68,
          "end": 80,
          "decorators": [],
          "name": "getSomething",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 82,
        "end": 98,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 83,
            "end": 89
          },
          {
            "type": "TSStringKeyword",
            "start": 91,
            "end": 97
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 103,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 166,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 122,
        "end": 145,
        "callee": {
          "type": "Identifier",
          "start": 122,
          "end": 143,
          "decorators": [],
          "name": "SomeUndefinedFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 145,
        "end": 161,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 146,
            "end": 152
          },
          {
            "type": "TSStringKeyword",
            "start": 154,
            "end": 160
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 166,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 169,
      "end": 212,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 177,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 186,
        "end": 207,
        "decorators": [],
        "name": "SomeUndefinedFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 208,
        "end": 212,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
