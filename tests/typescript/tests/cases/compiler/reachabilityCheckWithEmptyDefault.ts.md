__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "print",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 26,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "start": 23,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 35,
          "end": 39
        },
        "start": 33,
        "end": 39
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 57,
              "end": 60
            },
            "start": 55,
            "end": 60
          },
          "start": 54,
          "end": 60
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 84,
                  "end": 85
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 87,
                    "end": 94
                  }
                ],
                "start": 79,
                "end": 94
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [],
                "start": 97,
                "end": 105
              }
            ],
            "start": 65,
            "end": 108
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 115
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 116,
                  "end": 119
                }
              ],
              "optional": false,
              "start": 110,
              "end": 120
            },
            "directive": null,
            "start": 110,
            "end": 121
          }
        ],
        "start": 62,
        "end": 123
      },
      "expression": false,
      "start": 41,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
