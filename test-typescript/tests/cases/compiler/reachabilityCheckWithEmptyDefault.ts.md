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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "name": "print",
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
          "start": 23,
          "end": 32,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 26,
              "end": 32
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 39,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 35,
          "end": 39
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "foo",
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
          "start": 54,
          "end": 60,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 60,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 57,
              "end": 60
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 123,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 65,
            "end": 108,
            "discriminant": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 97,
                "end": 105,
                "consequent": [],
                "test": null
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 121,
            "expression": {
              "type": "CallExpression",
              "start": 110,
              "end": 120,
              "callee": {
                "type": "Identifier",
                "start": 110,
                "end": 115,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 116,
                  "end": 119,
                  "value": "1",
                  "raw": "'1'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
