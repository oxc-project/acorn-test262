__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "consoleTestResultHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 61
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "testResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 74,
                "end": 77
              },
              "start": 72,
              "end": 77
            },
            "start": 62,
            "end": 77
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 80,
            "end": 87
          },
          "start": 78,
          "end": 87
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "prefix": true,
                "start": 160,
                "end": 166
              },
              "directive": null,
              "start": 160,
              "end": 167
            },
            {
              "type": "ForOfStatement",
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 185
                    },
                    "init": null,
                    "definite": false,
                    "start": 184,
                    "end": 185
                  }
                ],
                "declare": false,
                "start": 178,
                "end": 185
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "operator": "void",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 208
                      },
                      "prefix": true,
                      "start": 202,
                      "end": 208
                    },
                    "directive": null,
                    "start": 202,
                    "end": 209
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 264
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 266,
                      "end": 277
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 283,
                      "end": 294
                    },
                    "start": 259,
                    "end": 294
                  }
                ],
                "start": 192,
                "end": 339
              },
              "start": 173,
              "end": 339
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 352,
                "end": 356
              },
              "start": 345,
              "end": 357
            }
          ],
          "start": 88,
          "end": 359
        },
        "expression": false,
        "start": 28,
        "end": 359
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 21,
      "end": 359
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 359
}
```
