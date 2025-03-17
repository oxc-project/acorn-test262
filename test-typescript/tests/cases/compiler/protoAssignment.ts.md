__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "Number",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 25,
          "end": 43,
          "expression": {
            "type": "Identifier",
            "start": 25,
            "end": 35,
            "name": "Comparable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 35,
            "end": 43,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 79,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 51,
            "end": 76,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 60,
              "name": "compareTo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 74,
                "name": "other",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 175,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 81,
          "end": 107,
          "object": {
            "type": "MemberExpression",
            "start": 81,
            "end": 97,
            "object": {
              "type": "Identifier",
              "start": 81,
              "end": 87,
              "name": "Number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 88,
              "end": 97,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 98,
            "end": 107,
            "name": "compareTo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 110,
          "end": 175,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 120,
              "end": 133,
              "name": "other",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 125,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 127,
                  "end": 133
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 135,
            "end": 175,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 141,
                "end": 172,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 148,
                  "end": 171,
                  "left": {
                    "type": "CallExpression",
                    "start": 148,
                    "end": 162,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 148,
                      "end": 160,
                      "object": {
                        "type": "ThisExpression",
                        "start": 148,
                        "end": 152
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 160,
                        "name": "valueOf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 171,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
