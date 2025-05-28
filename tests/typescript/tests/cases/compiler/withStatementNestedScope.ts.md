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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "WithStatement",
      "start": 11,
      "end": 114,
      "object": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 114,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 26,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "f",
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
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 112,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 111,
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
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 109,
                      "end": 110,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
