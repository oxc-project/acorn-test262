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
        "name": "callee",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 28,
                  "end": 37
                }
              ],
              "start": 19,
              "end": 37
            },
            "start": 17,
            "end": 37
          },
          "start": 16,
          "end": 37
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 39,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 50,
        "end": 53
      },
      "expression": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "caller",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 70
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "start": 77,
                  "end": 87
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 92,
                  "end": 96
                },
                "start": 89,
                "end": 96
              },
              "start": 76,
              "end": 96
            },
            "start": 74,
            "end": 96
          },
          "start": 71,
          "end": 96
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 98,
        "end": 101
      },
      "expression": false,
      "start": 55,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "caller",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "callee",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 116
          }
        ],
        "optional": false,
        "start": 103,
        "end": 117
      },
      "directive": null,
      "start": 103,
      "end": 118
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 118
}
```
