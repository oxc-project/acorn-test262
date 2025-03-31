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
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "name": "gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 88,
                  "name": "obj",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 85,
                      "end": 88
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 96,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 98,
                        "end": 99,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 101,
                      "end": 107,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 104,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 106,
                        "end": 107,
                        "value": 2,
                        "raw": "2"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ForInStatement",
            "start": 113,
            "end": 178,
            "left": {
              "type": "VariableDeclaration",
              "start": 118,
              "end": 125,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 122,
                  "end": 125,
                  "id": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 125,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 134,
              "end": 178,
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
                      "type": "Identifier",
                      "start": 148,
                      "end": 151,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 159,
                  "end": 174,
                  "expression": {
                    "type": "UnaryExpression",
                    "start": 159,
                    "end": 173,
                    "operator": "delete",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 166,
                      "end": 173,
                      "object": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 169,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 173,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
