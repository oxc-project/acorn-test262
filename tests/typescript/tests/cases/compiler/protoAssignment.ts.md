__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 79,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 79,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 51,
            "end": 76,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 60,
              "decorators": [],
              "name": "compareTo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 74,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 25,
          "end": 43,
          "expression": {
            "type": "Identifier",
            "start": 25,
            "end": 35,
            "decorators": [],
            "name": "Comparable",
            "optional": false,
            "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 175,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 81,
          "end": 107,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 81,
            "end": 97,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 81,
              "end": 87,
              "decorators": [],
              "name": "Number",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 88,
              "end": 97,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 98,
            "end": 107,
            "decorators": [],
            "name": "compareTo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 110,
          "end": 175,
          "async": false,
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
                  "operator": "==",
                  "left": {
                    "type": "CallExpression",
                    "start": 148,
                    "end": 162,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 148,
                      "end": 160,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 148,
                        "end": 152
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 160,
                        "decorators": [],
                        "name": "valueOf",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 171,
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 120,
              "end": 133,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 125,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 127,
                  "end": 133
                }
              }
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
