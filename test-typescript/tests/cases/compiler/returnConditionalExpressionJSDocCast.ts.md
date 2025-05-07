__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 110,
  "end": 409,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 123,
            "decorators": [],
            "name": "sources",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 126,
            "end": 135,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 409,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 273,
        "end": 409,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 279,
            "end": 407,
            "argument": {
              "type": "ConditionalExpression",
              "start": 318,
              "end": 400,
              "alternate": {
                "type": "CallExpression",
                "start": 369,
                "end": 400,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 381,
                    "end": 399,
                    "raw": "\"some other thing\"",
                    "value": "some other thing",
                    "regex": null,
                    "bigint": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 369,
                  "end": 380,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 376,
                    "decorators": [],
                    "name": "sources",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 380,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 337,
                "end": 354,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 349,
                    "end": 353,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 337,
                  "end": 348,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 344,
                    "decorators": [],
                    "name": "sources",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 348,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "test": {
                "type": "Identifier",
                "start": 318,
                "end": 322,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 251,
        "decorators": [],
        "name": "source",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 252,
          "end": 271,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 252,
            "end": 256,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 259,
            "end": 271,
            "raw": "\"javascript\"",
            "value": "javascript",
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": null
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
