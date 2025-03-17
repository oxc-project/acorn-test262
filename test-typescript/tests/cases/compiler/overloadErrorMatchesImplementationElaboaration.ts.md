__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "name": "EventAggregator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "name": "publish",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 35,
              "end": 69,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 36,
                  "end": 49,
                  "name": "event",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 61,
                  "name": "data",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 58,
                      "end": 61
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 64,
                  "end": 68
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 103,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "name": "publish",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 103,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 93,
                  "name": "event",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 92,
                      "end": 93,
                      "typeName": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 103,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 81,
                "end": 84,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 82,
                    "end": 83,
                    "name": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 96,
                  "end": 100
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 130,
            "name": "ea",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 130,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 130,
                  "name": "EventAggregator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 152,
      "expression": {
        "type": "CallExpression",
        "start": 132,
        "end": 151,
        "callee": {
          "type": "MemberExpression",
          "start": 132,
          "end": 142,
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "name": "ea",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 142,
            "name": "publish",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 143,
            "end": 150,
            "elements": [
              {
                "type": "Literal",
                "start": 144,
                "end": 145,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 146,
                "end": 147,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 148,
                "end": 149,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
