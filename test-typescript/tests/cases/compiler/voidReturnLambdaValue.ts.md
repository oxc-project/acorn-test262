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
          "start": 13,
          "end": 17,
          "name": "arg1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 19,
          "end": 23,
          "name": "arg2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 25,
          "end": 52,
          "name": "callback",
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
                  "name": "v1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 40,
                  "name": "v2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 43,
                  "name": "v3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "callback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
                  "name": "arg1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "name": "arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 105,
                  "end": 109,
                  "name": "arg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 53,
        "end": 58,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 54,
          "end": 58
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
