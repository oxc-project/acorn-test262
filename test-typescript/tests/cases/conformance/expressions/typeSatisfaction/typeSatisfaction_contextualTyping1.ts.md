__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 58,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "Predicates",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 18,
        "end": 57,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 20,
            "end": 55,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 30,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 24,
                    "end": 30
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 55,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 33,
                "end": 55,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 43,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 48,
                    "end": 55
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 70,
            "end": 152,
            "expression": {
              "type": "ObjectExpression",
              "start": 70,
              "end": 131,
              "properties": [
                {
                  "type": "Property",
                  "start": 76,
                  "end": 100,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 82,
                    "decorators": [],
                    "name": "isEven",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 84,
                    "end": 100,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 89,
                      "end": 100,
                      "operator": "===",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 89,
                        "end": 94,
                        "operator": "%",
                        "left": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 90,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 93,
                          "end": 94,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 99,
                        "end": 100,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 106,
                  "end": 129,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 111,
                    "decorators": [],
                    "name": "isOdd",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 113,
                    "end": 129,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 118,
                      "end": 129,
                      "operator": "===",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 118,
                        "end": 123,
                        "operator": "%",
                        "left": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 122,
                          "end": 123,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 128,
                        "end": 129,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 113,
                        "end": 114,
                        "decorators": [],
                        "name": "n",
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
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 142,
              "end": 152,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 142,
                "end": 152,
                "decorators": [],
                "name": "Predicates",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
