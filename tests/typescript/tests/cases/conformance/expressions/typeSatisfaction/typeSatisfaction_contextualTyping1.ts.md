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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "Predicates",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 18,
        "end": 57,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 20,
            "end": 55,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 55,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 33,
                "end": 55,
                "typeParameters": null,
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
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 153,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 152,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 82,
                    "decorators": [],
                    "name": "isEven",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 84,
                    "end": 100,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "BinaryExpression",
                      "start": 89,
                      "end": 100,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 89,
                        "end": 94,
                        "left": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 90,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "start": 93,
                          "end": 94,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 99,
                        "end": 100,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 106,
                  "end": 129,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 111,
                    "decorators": [],
                    "name": "isOdd",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 113,
                    "end": 129,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "BinaryExpression",
                      "start": 118,
                      "end": 129,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 118,
                        "end": 123,
                        "left": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "start": 122,
                          "end": 123,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 128,
                        "end": 129,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 142,
              "end": 152,
              "typeName": {
                "type": "Identifier",
                "start": 142,
                "end": 152,
                "decorators": [],
                "name": "Predicates",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
