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
        "name": "panic",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              },
              "start": 20,
              "end": 28
            },
            "start": 18,
            "end": 28
          },
          "start": 15,
          "end": 28
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "opt",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 36
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 38,
              "end": 46
            },
            "start": 36,
            "end": 46
          },
          "value": null,
          "start": 30,
          "end": 46
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 48,
        "end": 51
      },
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "panic",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 58
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 59,
            "end": 61
          },
          {
            "type": "Literal",
            "value": "one",
            "raw": "'one'",
            "start": 63,
            "end": 68
          },
          {
            "type": "Literal",
            "value": "two",
            "raw": "'two'",
            "start": 70,
            "end": 75
          }
        ],
        "optional": false,
        "start": 53,
        "end": 76
      },
      "directive": null,
      "start": 53,
      "end": 77
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
