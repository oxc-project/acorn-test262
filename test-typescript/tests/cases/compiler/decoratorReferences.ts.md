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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 19,
          "end": 33,
          "argument": {
            "type": "Identifier",
            "start": 22,
            "end": 26,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 34,
        "end": 39,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 36,
          "end": 39
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 41,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 50,
        "end": 56
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 454,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 369,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 357,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 357,
              "end": 369,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 358,
                      "end": 360,
                      "expression": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 369,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 209,
                "end": 222,
                "expression": {
                  "type": "CallExpression",
                  "start": 210,
                  "end": 222,
                  "callee": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "start": 212,
                      "end": 221,
                      "expression": {
                        "type": "Literal",
                        "start": 212,
                        "end": 216,
                        "value": null,
                        "raw": "null"
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 220,
                        "end": 221,
                        "typeName": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 221,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 58,
          "end": 77,
          "expression": {
            "type": "CallExpression",
            "start": 59,
            "end": 77,
            "callee": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 61,
                "end": 67,
                "expression": {
                  "type": "Literal",
                  "start": 61,
                  "end": 62,
                  "value": 1,
                  "raw": "1"
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 66,
                  "end": 67,
                  "typeName": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 69,
                "end": 76,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
