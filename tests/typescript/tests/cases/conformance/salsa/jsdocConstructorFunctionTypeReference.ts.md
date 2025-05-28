__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 60,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "Validator",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 16,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "decorators": [],
              "name": "VFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 33,
              "end": 59,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 39,
                  "end": 57,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 39,
                    "end": 57,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 39,
                      "end": 49,
                      "object": {
                        "type": "ThisExpression",
                        "start": 39,
                        "end": 43
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 49,
                        "decorators": [],
                        "name": "flags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 52,
                      "end": 57,
                      "value": "gim",
                      "raw": "\"gim\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 90,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 90,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 62,
          "end": 85,
          "object": {
            "type": "MemberExpression",
            "start": 62,
            "end": 81,
            "object": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 81,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 85,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 88,
          "end": 90,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 197,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 151,
            "decorators": [],
            "name": "validateRegExpFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 154,
            "end": 196,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 163,
                "end": 168,
                "decorators": [],
                "name": "state",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 170,
              "end": 196,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 176,
                  "end": 194,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 183,
                    "end": 194,
                    "object": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 188,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 194,
                      "decorators": [],
                      "name": "flags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
