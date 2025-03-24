__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 24,
          "name": "item1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 24,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 24,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 26,
          "end": 34,
          "name": "item2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 34,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 33,
              "end": 34,
              "typeName": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 39,
        "body": []
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 40,
        "end": 50,
        "callee": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 47,
            "end": 49,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
