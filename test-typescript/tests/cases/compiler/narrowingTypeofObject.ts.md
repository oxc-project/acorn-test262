__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 26,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 14,
            "end": 24,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 126,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 126,
        "body": [
          {
            "type": "IfStatement",
            "start": 78,
            "end": 124,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 105,
              "end": 124,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 115,
                  "end": 117,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 82,
              "end": 103,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 82,
                "end": 90,
                "argument": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 95,
                "end": 103,
                "raw": "'object'",
                "value": "object"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 70,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 70,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 45,
              "end": 70,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 45,
                  "end": 51
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 54,
                  "end": 70,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 56,
                      "end": 68,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 60,
                        "decorators": [],
                        "name": "_foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 60,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 62,
                          "end": 68
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 128,
      "end": 217,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 217,
        "body": [
          {
            "type": "IfStatement",
            "start": 170,
            "end": 215,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 197,
              "end": 215,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 207,
                  "end": 209,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 208,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 174,
              "end": 195,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 174,
                "end": 182,
                "argument": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 187,
                "end": 195,
                "raw": "\"object\"",
                "value": "object"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 139,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 140,
          "end": 162,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 141,
            "end": 162,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 143,
              "end": 162,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 143,
                  "end": 144,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 147,
                  "end": 162,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 149,
                      "end": 160,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 152,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 152,
                        "end": 160,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 154,
                          "end": 160
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
