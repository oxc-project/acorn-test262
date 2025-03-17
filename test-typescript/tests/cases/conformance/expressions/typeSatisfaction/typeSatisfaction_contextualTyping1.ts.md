__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "Predicates",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 24,
                    "end": 30
                  }
                },
                "decorators": [],
                "optional": false
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
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      }
                    },
                    "decorators": [],
                    "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 82,
                    "name": "isEven",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 84,
                    "end": 100,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 106,
                  "end": 129,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 111,
                    "name": "isOdd",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 113,
                    "end": 129,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 113,
                        "end": 114,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
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
                "name": "Predicates",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
