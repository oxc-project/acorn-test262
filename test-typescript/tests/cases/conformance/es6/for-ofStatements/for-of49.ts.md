__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 118,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 41,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 41,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 53,
            "end": 74,
            "callee": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 61,
                "end": 73,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 62,
                    "end": 72,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 63,
                        "end": 65,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 67,
                        "end": 71,
                        "value": true,
                        "raw": "true"
                      }
                    ]
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 76,
      "end": 118,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 81,
        "end": 92,
        "elements": [
          {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 85,
            "end": 91,
            "argument": {
              "type": "ArrayPattern",
              "start": 88,
              "end": 91,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null,
            "value": null
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "name": "map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 118,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 107,
            "end": 109,
            "expression": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 116,
            "expression": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
