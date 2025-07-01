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
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 85,
                      "end": 88
                    },
                    "start": 83,
                    "end": 88
                  },
                  "start": 80,
                  "end": 88
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 96
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 98,
                        "end": 99
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 93,
                      "end": 99
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 104
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 106,
                        "end": 107
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 101,
                      "end": 107
                    }
                  ],
                  "start": 91,
                  "end": 109
                },
                "definite": false,
                "start": 80,
                "end": 109
              }
            ],
            "declare": false,
            "start": 76,
            "end": 110
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 125
                  },
                  "init": null,
                  "definite": false,
                  "start": 122,
                  "end": 125
                }
              ],
              "declare": false,
              "start": 118,
              "end": 125
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 132
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 151
                    },
                    "start": 142,
                    "end": 151
                  },
                  "directive": null,
                  "start": 142,
                  "end": 152
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "delete",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 169
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 173
                      },
                      "optional": false,
                      "computed": false,
                      "start": 166,
                      "end": 173
                    },
                    "prefix": true,
                    "start": 159,
                    "end": 173
                  },
                  "directive": null,
                  "start": 159,
                  "end": 174
                }
              ],
              "start": 134,
              "end": 178
            },
            "start": 113,
            "end": 178
          }
        ],
        "start": 72,
        "end": 180
      },
      "expression": false,
      "start": 56,
      "end": 180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 180
}
```
