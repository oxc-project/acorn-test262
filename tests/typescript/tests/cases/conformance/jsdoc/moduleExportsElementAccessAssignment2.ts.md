__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "GlobalThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 54
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 60
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 62,
                  "end": 64
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 59,
                "end": 64
              }
            ],
            "start": 57,
            "end": 66
          },
          "definite": false,
          "start": 43,
          "end": 66
        }
      ],
      "declare": false,
      "start": 39,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 148
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 153
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 159
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 168
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 194
                },
                "prefix": true,
                "start": 180,
                "end": 194
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 199,
                "end": 210
              },
              "start": 180,
              "end": 210
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "exports",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 229
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "AST_",
                          "raw": "\"AST_\"",
                          "start": 230,
                          "end": 236
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 243
                        },
                        "start": 230,
                        "end": 243
                      },
                      "optional": false,
                      "computed": true,
                      "start": 222,
                      "end": 244
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ctor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 251
                    },
                    "start": 222,
                    "end": 251
                  },
                  "directive": null,
                  "start": 222,
                  "end": 252
                }
              ],
              "start": 212,
              "end": 258
            },
            "alternate": null,
            "start": 176,
            "end": 258
          }
        ],
        "start": 170,
        "end": 260
      },
      "expression": false,
      "start": 138,
      "end": 260
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 261
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "GlobalThing",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 11
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "optional": false,
        "computed": false,
        "start": 0,
        "end": 13
      },
      "directive": null,
      "start": 0,
      "end": 13
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 13
}
```
