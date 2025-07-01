__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Comparable",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 35
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              }
            ],
            "start": 35,
            "end": 43
          },
          "start": 25,
          "end": 43
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "compareTo",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 60
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  },
                  "start": 66,
                  "end": 74
                },
                "start": 61,
                "end": 74
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 51,
            "end": 76
          }
        ],
        "start": 44,
        "end": 79
      },
      "declare": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Number",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 87
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 97
            },
            "optional": false,
            "computed": false,
            "start": 81,
            "end": 97
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "compareTo",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 107
          },
          "optional": false,
          "computed": false,
          "start": 81,
          "end": 107
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 127,
                  "end": 133
                },
                "start": 125,
                "end": 133
              },
              "start": 120,
              "end": 133
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 148,
                        "end": 152
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "valueOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 160
                      },
                      "optional": false,
                      "computed": false,
                      "start": 148,
                      "end": 160
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 148,
                    "end": 162
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 171
                  },
                  "start": 148,
                  "end": 171
                },
                "start": 141,
                "end": 172
              }
            ],
            "start": 135,
            "end": 175
          },
          "expression": false,
          "start": 110,
          "end": 175
        },
        "start": 81,
        "end": 175
      },
      "directive": null,
      "start": 81,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
