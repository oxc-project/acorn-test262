__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 21
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 45,
                "end": 48
              },
              "abstract": false,
              "declare": false,
              "start": 37,
              "end": 48
            },
            "start": 30,
            "end": 48
          }
        ],
        "start": 24,
        "end": 50
      },
      "expression": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 59
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 80
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 68,
        "end": 82
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
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
        ],
        "start": 82,
        "end": 98
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 99,
        "end": 103
      },
      "abstract": false,
      "declare": false,
      "start": 52,
      "end": 103
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeUndefinedFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 143
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 122,
        "end": 145
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
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
        ],
        "start": 145,
        "end": 161
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 162,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 177
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeUndefinedFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 207
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 208,
        "end": 212
      },
      "abstract": false,
      "declare": false,
      "start": 169,
      "end": 212
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 212
}
```
