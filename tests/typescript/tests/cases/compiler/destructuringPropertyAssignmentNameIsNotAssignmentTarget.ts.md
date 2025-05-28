__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 132,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "qux",
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
          "start": 32,
          "end": 54,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 54,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 37,
              "end": 54,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 39,
                  "end": 52,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 44,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
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
        "start": 56,
        "end": 131,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 62,
            "end": 78,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 77,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 77,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 106,
            "expression": {
              "type": "AssignmentExpression",
              "start": 84,
              "end": 104,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 84,
                "end": 98,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 86,
                    "end": 96,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 91,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 96,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 101,
                "end": 104,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 111,
            "end": 129,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 115,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 119,
                  "end": 128,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 128,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
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
