__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 161,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 91,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 91,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 77,
              "end": 91,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 79,
                  "end": 89,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 93,
        "end": 160,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 117,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 116,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 107,
                  "end": 116,
                  "left": {
                    "type": "MemberExpression",
                    "start": 107,
                    "end": 110,
                    "object": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "??",
                  "right": {
                    "type": "Literal",
                    "start": 114,
                    "end": 116,
                    "value": 10,
                    "raw": "10"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 122,
            "end": 158,
            "test": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 132,
              "end": 158,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 142,
                  "end": 152,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 142,
                    "end": 151,
                    "delegate": false,
                    "argument": {
                      "type": "UpdateExpression",
                      "start": 148,
                      "end": 151,
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
