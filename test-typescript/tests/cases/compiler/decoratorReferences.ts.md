__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 40,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 19,
          "end": 33,
          "argument": {
            "type": "Identifier",
            "start": 22,
            "end": 26,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 33,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 28,
              "end": 33,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 34,
        "end": 39,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 36,
          "end": 39
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 41,
      "end": 57,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 50,
        "end": 56
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 454,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 454,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 369,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 209,
                "end": 222,
                "expression": {
                  "type": "CallExpression",
                  "start": 210,
                  "end": 222,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "start": 212,
                      "end": 221,
                      "expression": {
                        "type": "Literal",
                        "start": 212,
                        "end": 216,
                        "raw": "null",
                        "value": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 220,
                        "end": 221,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 221,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 357,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 357,
              "end": 369,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 369,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 358,
                      "end": 360,
                      "expression": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 58,
          "end": 77,
          "expression": {
            "type": "CallExpression",
            "start": 59,
            "end": 77,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 61,
                "end": 67,
                "expression": {
                  "type": "Literal",
                  "start": 61,
                  "end": 62,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 66,
                  "end": 67,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 69,
                "end": 76,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
