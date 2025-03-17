__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "panic",
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
          "start": 15,
          "end": 28,
          "name": "val",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 30,
          "end": 46,
          "argument": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "name": "opt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
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
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 51,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "panic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
