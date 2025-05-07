__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 40,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "print",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 32,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 26,
              "end": 32
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 39,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 35,
          "end": 39
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 123,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 123,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 65,
            "end": 108,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 79,
                "end": 94,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 87,
                    "end": 94,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 84,
                  "end": 85,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 97,
                "end": 105,
                "consequent": [],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 121,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 110,
              "end": 120,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 116,
                  "end": 119,
                  "raw": "'1'",
                  "value": "1",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 110,
                "end": 115,
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 60,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 60,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 57,
              "end": 60
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
