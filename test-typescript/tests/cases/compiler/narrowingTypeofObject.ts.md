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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 26,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 14,
            "end": 24,
            "typeParameters": null,
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 70,
          "name": "x",
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 60,
                        "name": "_foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 60,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 62,
                          "end": 68
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 126,
        "body": [
          {
            "type": "IfStatement",
            "start": 78,
            "end": 124,
            "test": {
              "type": "BinaryExpression",
              "start": 82,
              "end": 103,
              "left": {
                "type": "UnaryExpression",
                "start": 82,
                "end": 90,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 95,
                "end": 103,
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 105,
              "end": 124,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 115,
                  "end": 117,
                  "expression": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 128,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 139,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 140,
          "end": 162,
          "name": "x",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 152,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 152,
                        "end": 160,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 154,
                          "end": 160
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 217,
        "body": [
          {
            "type": "IfStatement",
            "start": 170,
            "end": 215,
            "test": {
              "type": "BinaryExpression",
              "start": 174,
              "end": 195,
              "left": {
                "type": "UnaryExpression",
                "start": 174,
                "end": 182,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 187,
                "end": 195,
                "value": "object",
                "raw": "\"object\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 197,
              "end": 215,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 207,
                  "end": 209,
                  "expression": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 208,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
