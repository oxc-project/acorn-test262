__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 160,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 160,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 107,
                  "end": 116,
                  "operator": "??",
                  "left": {
                    "type": "MemberExpression",
                    "start": 107,
                    "end": 110,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 114,
                    "end": 116,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 122,
            "end": 158,
            "body": {
              "type": "BlockStatement",
              "start": 132,
              "end": 158,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 142,
                  "end": 152,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 142,
                    "end": 151,
                    "argument": {
                      "type": "UpdateExpression",
                      "start": 148,
                      "end": 151,
                      "argument": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "--",
                      "prefix": false
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 91,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
