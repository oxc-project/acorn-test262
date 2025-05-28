__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 21,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 30,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 29,
        "callee": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 25,
          "end": 27,
          "params": []
        },
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 105,
        "decorators": [],
        "name": "noParams",
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
        "start": 108,
        "end": 110,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 124,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 123,
        "callee": {
          "type": "Identifier",
          "start": 111,
          "end": 119,
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 119,
          "end": 121,
          "params": []
        },
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
