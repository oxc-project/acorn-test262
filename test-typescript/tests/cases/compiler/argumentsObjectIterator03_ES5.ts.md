__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 147,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 92,
            "end": 118,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 96,
                "end": 117,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 96,
                  "end": 105,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 117,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 128,
            "end": 145,
            "argument": {
              "type": "ArrayExpression",
              "start": 135,
              "end": 144,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 24,
        "decorators": [],
        "name": "asReversedTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 34,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 34,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 28,
              "end": 34
            }
          }
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 45,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 45,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            }
          }
        },
        {
          "type": "Identifier",
          "start": 47,
          "end": 57,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 57,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 50,
              "end": 57
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 60,
          "end": 85,
          "elementTypes": [
            {
              "type": "TSBooleanKeyword",
              "start": 61,
              "end": 68
            },
            {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            }
          ]
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
