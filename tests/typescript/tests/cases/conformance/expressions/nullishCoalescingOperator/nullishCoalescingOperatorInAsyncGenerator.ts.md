__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    },
                    "start": 81,
                    "end": 89
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 79,
                  "end": 89
                }
              ],
              "start": 77,
              "end": 91
            },
            "start": 75,
            "end": 91
          },
          "start": 74,
          "end": 91
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 104
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 108
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 110
                    },
                    "optional": false,
                    "computed": false,
                    "start": 107,
                    "end": 110
                  },
                  "operator": "??",
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 114,
                    "end": 116
                  },
                  "start": 107,
                  "end": 116
                },
                "definite": false,
                "start": 103,
                "end": 116
              }
            ],
            "declare": false,
            "start": 99,
            "end": 117
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "UpdateExpression",
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "start": 148,
                      "end": 151
                    },
                    "start": 142,
                    "end": 151
                  },
                  "directive": null,
                  "start": 142,
                  "end": 152
                }
              ],
              "start": 132,
              "end": 158
            },
            "start": 122,
            "end": 158
          }
        ],
        "start": 93,
        "end": 160
      },
      "expression": false,
      "start": 56,
      "end": 160
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 160
}
```
