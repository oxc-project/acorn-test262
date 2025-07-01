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
        "name": "asReversedTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 28,
              "end": 34
            },
            "start": 26,
            "end": 34
          },
          "start": 25,
          "end": 34
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            },
            "start": 37,
            "end": 45
          },
          "start": 36,
          "end": 45
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 50,
              "end": 57
            },
            "start": 48,
            "end": 57
          },
          "start": 47,
          "end": 57
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
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
          ],
          "start": 60,
          "end": 85
        },
        "start": 58,
        "end": 85
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 98
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 101
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 104
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 105
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 117
                },
                "definite": false,
                "start": 96,
                "end": 117
              }
            ],
            "declare": false,
            "start": 92,
            "end": 118
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                }
              ],
              "start": 135,
              "end": 144
            },
            "start": 128,
            "end": 145
          }
        ],
        "start": 86,
        "end": 147
      },
      "expression": false,
      "start": 0,
      "end": 147
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 148
}
```
