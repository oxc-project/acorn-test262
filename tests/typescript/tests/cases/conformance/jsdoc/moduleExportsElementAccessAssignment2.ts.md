__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 261,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 67,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 54,
            "decorators": [],
            "name": "GlobalThing",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 57,
            "end": 66,
            "properties": [
              {
                "type": "Property",
                "start": 59,
                "end": 64,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 62,
                  "end": 64,
                  "value": 12,
                  "raw": "12"
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
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 148,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 149,
          "end": 153,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 155,
          "end": 159,
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 161,
          "end": 168,
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 170,
        "end": 260,
        "body": [
          {
            "type": "IfStatement",
            "start": 176,
            "end": 258,
            "test": {
              "type": "BinaryExpression",
              "start": 180,
              "end": 210,
              "left": {
                "type": "UnaryExpression",
                "start": 180,
                "end": 194,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 194,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 199,
                "end": 210,
                "value": "undefined",
                "raw": "\"undefined\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 212,
              "end": 258,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 222,
                  "end": 252,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 222,
                    "end": 251,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 222,
                      "end": 244,
                      "object": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 229,
                        "decorators": [],
                        "name": "exports",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "start": 230,
                        "end": 243,
                        "left": {
                          "type": "Literal",
                          "start": 230,
                          "end": 236,
                          "value": "AST_",
                          "raw": "\"AST_\""
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 243,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "computed": true
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 251,
                      "decorators": [],
                      "name": "ctor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 13,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "MemberExpression",
        "start": 0,
        "end": 13,
        "object": {
          "type": "Identifier",
          "start": 0,
          "end": 11,
          "decorators": [],
          "name": "GlobalThing",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
