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
        "name": "qux",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 31
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 44
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    },
                    "start": 44,
                    "end": 52
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 39,
                  "end": 52
                }
              ],
              "start": 37,
              "end": 54
            },
            "start": 35,
            "end": 54
          },
          "start": 32,
          "end": 54
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 71,
                      "end": 77
                    },
                    "start": 69,
                    "end": 77
                  },
                  "start": 66,
                  "end": 77
                },
                "init": null,
                "definite": false,
                "start": 66,
                "end": 77
              }
            ],
            "declare": false,
            "start": 62,
            "end": 78
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 91
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 96
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 86,
                    "end": 96
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 98
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 104
              },
              "start": 84,
              "end": 104
            },
            "directive": null,
            "start": 83,
            "end": 106
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 116
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 128
                  },
                  "id": null,
                  "generator": false,
                  "start": 119,
                  "end": 128
                },
                "definite": false,
                "start": 115,
                "end": 128
              }
            ],
            "declare": false,
            "start": 111,
            "end": 129
          }
        ],
        "start": 56,
        "end": 131
      },
      "expression": false,
      "start": 19,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 132
}
```
