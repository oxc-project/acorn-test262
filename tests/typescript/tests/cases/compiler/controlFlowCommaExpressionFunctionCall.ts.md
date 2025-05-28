__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "decorators": [],
            "name": "otherValue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 19,
            "end": 29,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 25,
              "end": 29,
              "value": true,
              "raw": "true"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 75,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 60,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 60,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 45,
                "end": 60,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 63,
            "end": 74,
            "expression": {
              "type": "Literal",
              "start": 63,
              "end": 67,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 94,
        "decorators": [],
        "name": "isNumber",
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
          "start": 95,
          "end": 103,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 103,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 100,
              "end": 103
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 104,
        "end": 119,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 106,
          "end": 119,
          "parameterName": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 119,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 113,
              "end": 119
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 176,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 126,
            "end": 138,
            "argument": {
              "type": "Literal",
              "start": 133,
              "end": 137,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "IfStatement",
      "start": 198,
      "end": 301,
      "test": {
        "type": "CallExpression",
        "start": 202,
        "end": 233,
        "callee": {
          "type": "Identifier",
          "start": 202,
          "end": 210,
          "decorators": [],
          "name": "isNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SequenceExpression",
            "start": 212,
            "end": 231,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 212,
                "end": 224,
                "callee": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 222,
                  "decorators": [],
                  "name": "otherValue",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 226,
                "end": 231,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 235,
        "end": 301,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 241,
            "end": 257,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 247,
                "end": 256,
                "id": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 256,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
