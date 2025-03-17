__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 21,
      "end": 359,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 28,
        "end": 359,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 88,
          "end": 359,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 160,
              "end": 167,
              "directive": null,
              "expression": {
                "type": "UnaryExpression",
                "start": 160,
                "end": 166,
                "argument": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "void",
                "prefix": true
              }
            },
            {
              "type": "ForOfStatement",
              "start": 173,
              "end": 339,
              "await": false,
              "body": {
                "type": "BlockStatement",
                "start": 192,
                "end": 339,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 202,
                    "end": 209,
                    "directive": null,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 202,
                      "end": 208,
                      "argument": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "void",
                      "prefix": true
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 259,
                    "end": 294,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 283,
                      "end": 294,
                      "body": []
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 266,
                      "end": 277,
                      "body": []
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 264,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "left": {
                "type": "VariableDeclaration",
                "start": 178,
                "end": 185,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 184,
                    "end": 185,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "right": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "ReturnStatement",
              "start": 345,
              "end": 357,
              "argument": {
                "type": "Literal",
                "start": 352,
                "end": 356,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 61,
          "decorators": [],
          "name": "consoleTestResultHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 62,
            "end": 77,
            "decorators": [],
            "name": "testResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 77,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 74,
                "end": 77
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 78,
          "end": 87,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 80,
            "end": 87
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
