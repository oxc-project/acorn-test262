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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 21,
      "end": 359,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 28,
        "end": 359,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 61,
          "decorators": [],
          "name": "consoleTestResultHandler",
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
        "body": {
          "type": "BlockStatement",
          "start": 88,
          "end": 359,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 160,
              "end": 167,
              "expression": {
                "type": "UnaryExpression",
                "start": 160,
                "end": 166,
                "operator": "void",
                "argument": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "directive": null
            },
            {
              "type": "ForOfStatement",
              "start": 173,
              "end": 339,
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "start": 178,
                "end": 185,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 184,
                    "end": 185,
                    "id": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "right": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 192,
                "end": 339,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 202,
                    "end": 209,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 202,
                      "end": 208,
                      "operator": "void",
                      "argument": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 259,
                    "end": 294,
                    "test": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 264,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 266,
                      "end": 277,
                      "body": []
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 283,
                      "end": 294,
                      "body": []
                    }
                  }
                ]
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
                "value": true,
                "raw": "true"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
