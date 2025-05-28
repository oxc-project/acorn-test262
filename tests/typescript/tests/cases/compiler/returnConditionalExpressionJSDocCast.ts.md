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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 135,
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
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 251,
        "decorators": [],
        "name": "source",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
          "right": {
            "type": "Literal",
            "start": 259,
            "end": 271,
            "value": "javascript",
            "raw": "\"javascript\""
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
              "test": {
                "type": "Identifier",
                "start": 318,
                "end": 322,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 337,
                "end": 354,
                "callee": {
                  "type": "MemberExpression",
                  "start": 337,
                  "end": 348,
                  "object": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 344,
                    "decorators": [],
                    "name": "sources",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 348,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
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
                "optional": false
              },
              "alternate": {
                "type": "CallExpression",
                "start": 369,
                "end": 400,
                "callee": {
                  "type": "MemberExpression",
                  "start": 369,
                  "end": 380,
                  "object": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 376,
                    "decorators": [],
                    "name": "sources",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 380,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 381,
                    "end": 399,
                    "value": "some other thing",
                    "raw": "\"some other thing\""
                  }
                ],
                "optional": false
              }
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
