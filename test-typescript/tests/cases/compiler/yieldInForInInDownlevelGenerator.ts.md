__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 180,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 180,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 180,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 76,
            "end": 110,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 80,
                "end": 109,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 88,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 85,
                      "end": 88
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 91,
                  "end": 109,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 93,
                      "end": 99,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 96,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 98,
                        "end": 99,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 101,
                      "end": 107,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 104,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 106,
                        "end": 107,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ForInStatement",
            "start": 113,
            "end": 178,
            "body": {
              "type": "BlockStatement",
              "start": 134,
              "end": 178,
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
                      "type": "Identifier",
                      "start": 148,
                      "end": 151,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 159,
                  "end": 174,
                  "directive": null,
                  "expression": {
                    "type": "UnaryExpression",
                    "start": 159,
                    "end": 173,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 166,
                      "end": 173,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 169,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 173,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "delete",
                    "prefix": true
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 118,
              "end": 125,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 122,
                  "end": 125,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 125,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "obj",
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
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
