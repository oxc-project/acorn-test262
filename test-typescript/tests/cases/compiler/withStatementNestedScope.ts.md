__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "WithStatement",
      "start": 11,
      "end": 114,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 114,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 26,
            "end": 73,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 48,
              "end": 73,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 58,
                  "end": 67,
                  "argument": {
                    "type": "Literal",
                    "start": 65,
                    "end": 66,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 46,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 40,
                    "end": 46
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 112,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 111,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 107,
                  "end": 111,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 109,
                      "end": 110,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "object": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
