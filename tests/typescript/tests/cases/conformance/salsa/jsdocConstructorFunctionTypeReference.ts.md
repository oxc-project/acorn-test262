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
            "name": "Validator",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "VFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 39,
                        "end": 43
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "flags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 44,
                        "end": 49
                      },
                      "optional": false,
                      "computed": false,
                      "start": 39,
                      "end": 49
                    },
                    "right": {
                      "type": "Literal",
                      "value": "gim",
                      "raw": "\"gim\"",
                      "start": 52,
                      "end": 57
                    },
                    "start": 39,
                    "end": 57
                  },
                  "directive": null,
                  "start": 39,
                  "end": 57
                }
              ],
              "start": 33,
              "end": 59
            },
            "expression": false,
            "start": 16,
            "end": 59
          },
          "definite": false,
          "start": 4,
          "end": 59
        }
      ],
      "declare": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 71
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 81
            },
            "optional": false,
            "computed": false,
            "start": 62,
            "end": 81
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 85
          },
          "optional": false,
          "computed": false,
          "start": 62,
          "end": 85
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 88,
          "end": 90
        },
        "start": 62,
        "end": 90
      },
      "directive": null,
      "start": 62,
      "end": 90
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "validateRegExpFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 151
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "state",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 168
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 188
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "flags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 189,
                      "end": 194
                    },
                    "optional": false,
                    "computed": false,
                    "start": 183,
                    "end": 194
                  },
                  "start": 176,
                  "end": 194
                }
              ],
              "start": 170,
              "end": 196
            },
            "expression": false,
            "start": 154,
            "end": 196
          },
          "definite": false,
          "start": 132,
          "end": 196
        }
      ],
      "declare": false,
      "start": 128,
      "end": 197
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 198
}
```
