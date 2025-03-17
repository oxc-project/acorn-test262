__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 133,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "name": "qux",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 54,
          "name": "bar",
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
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 131,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 62,
            "end": 78,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 77,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 77,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
                "properties": [
                  {
                    "type": "Property",
                    "start": 86,
                    "end": 96,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 91,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 96,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 101,
                "end": 104,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 111,
            "end": 129,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 115,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 119,
                  "end": 128,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 128,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
