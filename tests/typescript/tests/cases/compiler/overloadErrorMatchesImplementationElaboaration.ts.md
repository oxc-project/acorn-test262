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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "decorators": [],
        "name": "EventAggregator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 69,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "decorators": [],
              "name": "publish",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 35,
              "end": 69,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 36,
                  "end": 49,
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 61,
                  "decorators": [],
                  "name": "data",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 58,
                      "end": 61
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 64,
                  "end": 68
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "decorators": [],
              "name": "publish",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 103,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 93,
                  "decorators": [],
                  "name": "event",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 96,
                  "end": 100
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 103,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 131,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 130,
            "decorators": [],
            "name": "ea",
            "optional": false,
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
                  "decorators": [],
                  "name": "EventAggregator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "decorators": [],
            "name": "ea",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 142,
            "decorators": [],
            "name": "publish",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
