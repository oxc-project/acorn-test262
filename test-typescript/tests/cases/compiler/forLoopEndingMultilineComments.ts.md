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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
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
          "name": "consoleTestResultHandler",
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
            "start": 62,
            "end": 77,
            "name": "testResult",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 77,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 74,
                "end": 77
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 184,
                    "end": 185,
                    "id": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "name": "q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "right": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 78,
          "end": 87,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 80,
            "end": 87
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
