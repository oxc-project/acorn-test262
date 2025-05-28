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
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
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
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 93,
        "end": 160,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 117,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 116,
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
                  "left": {
                    "type": "MemberExpression",
                    "start": 107,
                    "end": 110,
                    "object": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
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
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
