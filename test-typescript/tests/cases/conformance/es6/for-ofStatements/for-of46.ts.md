__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 126,
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
      "end": 126,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 81,
        "end": 100,
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 82,
            "end": 91,
            "left": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 86,
              "end": 91,
              "value": false,
              "raw": "false"
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 93,
            "end": 99,
            "left": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 97,
              "end": 99,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 104,
        "end": 107,
        "name": "map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 126,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 117,
            "expression": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 124,
            "expression": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
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
