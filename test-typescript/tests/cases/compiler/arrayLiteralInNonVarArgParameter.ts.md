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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 51,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "panic",
        "optional": false,
        "typeAnnotation": null
      },
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
          "argument": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "opt",
            "optional": false,
            "typeAnnotation": null
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
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 53,
        "end": 76,
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
            "raw": "'one'",
            "value": "one"
          },
          {
            "type": "Literal",
            "start": 70,
            "end": 75,
            "raw": "'two'",
            "value": "two"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 53,
          "end": 58,
          "decorators": [],
          "name": "panic",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
