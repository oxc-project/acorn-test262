__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sources",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 123
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "typeArguments": null,
            "arguments": [],
            "start": 126,
            "end": 135
          },
          "definite": false,
          "start": 116,
          "end": 135
        }
      ],
      "declare": false,
      "start": 110,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "source",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 251
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 256
          },
          "right": {
            "type": "Literal",
            "value": "javascript",
            "raw": "\"javascript\"",
            "start": 259,
            "end": 271
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 322
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sources",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 344
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 348
                  },
                  "optional": false,
                  "computed": false,
                  "start": 337,
                  "end": 348
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 353
                  }
                ],
                "optional": false,
                "start": 337,
                "end": 354
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sources",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 376
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 380
                  },
                  "optional": false,
                  "computed": false,
                  "start": 369,
                  "end": 380
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "some other thing",
                    "raw": "\"some other thing\"",
                    "start": 381,
                    "end": 399
                  }
                ],
                "optional": false,
                "start": 369,
                "end": 400
              },
              "start": 318,
              "end": 400
            },
            "start": 279,
            "end": 407
          }
        ],
        "start": 273,
        "end": 409
      },
      "expression": false,
      "start": 236,
      "end": 409
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 409
}
```
