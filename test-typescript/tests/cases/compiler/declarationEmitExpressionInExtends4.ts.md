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
        "name": "getSomething",
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
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 45,
                "end": 48,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 68,
        "end": 82,
        "callee": {
          "type": "Identifier",
          "start": 68,
          "end": 80,
          "name": "getSomething",
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
        "start": 99,
        "end": 103,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 122,
        "end": 145,
        "callee": {
          "type": "Identifier",
          "start": 122,
          "end": 143,
          "name": "SomeUndefinedFunction",
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
        "start": 162,
        "end": 166,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 169,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 177,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 186,
        "end": 207,
        "name": "SomeUndefinedFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 208,
        "end": 212,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
