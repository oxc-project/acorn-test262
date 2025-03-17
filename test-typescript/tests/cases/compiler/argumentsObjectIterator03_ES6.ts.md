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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 24,
        "name": "asReversedTuple",
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
          "start": 25,
          "end": 34,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 34,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 28,
              "end": 34
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 45,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 45,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 47,
          "end": 57,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 57,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 50,
              "end": 57
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "ArrayPattern",
                  "start": 96,
                  "end": 105,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 117,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
