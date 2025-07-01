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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 18,
        "end": 21
      },
      "expression": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 25
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [],
          "start": 25,
          "end": 27
        },
        "arguments": [],
        "optional": false,
        "start": 22,
        "end": 29
      },
      "directive": null,
      "start": 22,
      "end": 30
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 105
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 108,
        "end": 110
      },
      "expression": false,
      "start": 88,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 119
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [],
          "start": 119,
          "end": 121
        },
        "arguments": [],
        "optional": false,
        "start": 111,
        "end": 123
      },
      "directive": null,
      "start": 111,
      "end": 124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 124
}
```
