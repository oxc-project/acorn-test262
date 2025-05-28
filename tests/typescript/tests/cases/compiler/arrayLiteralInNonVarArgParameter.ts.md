__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "panic",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 28,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 28,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 20,
              "end": 28,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 30,
          "end": 46,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "opt",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 46,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 38,
              "end": 46,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 51,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 53,
        "end": 76,
        "callee": {
          "type": "Identifier",
          "start": 53,
          "end": 58,
          "decorators": [],
          "name": "panic",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 59,
            "end": 61,
            "elements": []
          },
          {
            "type": "Literal",
            "start": 63,
            "end": 68,
            "value": "one",
            "raw": "'one'"
          },
          {
            "type": "Literal",
            "start": 70,
            "end": 75,
            "value": "two",
            "raw": "'two'"
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
