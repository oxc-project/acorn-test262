__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 20,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 20,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 17,
              "end": 20
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 38,
      "expression": {
        "type": "CallExpression",
        "start": 26,
        "end": 38,
        "callee": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 27,
          "end": 32,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 33,
            "end": 37,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
