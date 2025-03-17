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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 21,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 29,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 25,
          "end": 27,
          "params": []
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 110,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 110,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 105,
        "decorators": [],
        "name": "noParams",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 124,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 123,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 111,
          "end": 119,
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 119,
          "end": 121,
          "params": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
