__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
          "start": 13,
          "end": 17,
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 19,
          "end": 23,
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 25,
          "end": 52,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 52,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 34,
              "end": 52,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 37,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 40,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 43,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 45,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 48,
                  "end": 52
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 53,
        "end": 58,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 54,
          "end": 58
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 113,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 77,
            "end": 111,
            "argument": {
              "type": "CallExpression",
              "start": 84,
              "end": 110,
              "callee": {
                "type": "Identifier",
                "start": 84,
                "end": 92,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "decorators": [],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 105,
                  "end": 109,
                  "decorators": [],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
