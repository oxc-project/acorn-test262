__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 20,
          "end": 35,
          "expression": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 27,
            "end": 35,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 38,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 92,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 90,
            "expression": {
              "type": "AwaitExpression",
              "start": 82,
              "end": 89,
              "argument": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
