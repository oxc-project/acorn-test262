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
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 180,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 76,
            "end": 110,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 80,
                "end": 109,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 96,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 98,
                        "end": 99,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 101,
                      "end": 107,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 104,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 106,
                        "end": 107,
                        "value": 2,
                        "raw": "2"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 122,
                  "end": 125,
                  "id": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 125,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
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
                    "argument": {
                      "type": "MemberExpression",
                      "start": 166,
                      "end": 173,
                      "object": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 169,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 173,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "prefix": true
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
