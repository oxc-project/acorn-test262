__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "pairs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 14,
            "end": 41,
            "expression": {
              "type": "ArrayExpression",
              "start": 14,
              "end": 32,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 15,
                  "end": 22,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 16,
                      "end": 18,
                      "properties": []
                    },
                    {
                      "type": "Literal",
                      "start": 20,
                      "end": 21,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 24,
                  "end": 31,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 25,
                      "end": 27,
                      "properties": []
                    },
                    {
                      "type": "Literal",
                      "start": 29,
                      "end": 30,
                      "value": 2,
                      "raw": "2"
                    }
                  ]
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 36,
              "end": 41,
              "typeName": {
                "type": "Identifier",
                "start": 36,
                "end": 41,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 58,
      "expression": {
        "type": "NewExpression",
        "start": 43,
        "end": 57,
        "callee": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "decorators": [],
            "name": "pairs",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 78,
      "expression": {
        "type": "NewExpression",
        "start": 59,
        "end": 77,
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 70,
          "decorators": [],
          "name": "WeakMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 71,
            "end": 76,
            "decorators": [],
            "name": "pairs",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
