__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 22,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 15,
                "end": 22
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
      "type": "VariableDeclaration",
      "start": 24,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 55,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 46,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 46,
                  "end": 55,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 47,
                      "end": 54
                    }
                  ]
                }
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
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 141,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 100,
            "end": 113,
            "expression": {
              "type": "Literal",
              "start": 100,
              "end": 112,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          },
          {
            "type": "VariableDeclaration",
            "start": 118,
            "end": 139,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 122,
                "end": 138,
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 126,
                  "end": 138,
                  "left": {
                    "type": "AwaitExpression",
                    "start": 126,
                    "end": 133,
                    "argument": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 78,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 80,
          "end": 93,
          "typeName": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 87,
            "end": 93,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 88,
                "end": 92
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
