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
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "start": 14,
            "end": 24
          }
        ],
        "start": 12,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 45,
                  "end": 51
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 56,
                        "end": 60
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 62,
                          "end": 68
                        },
                        "start": 60,
                        "end": 68
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 56,
                      "end": 68
                    }
                  ],
                  "start": 54,
                  "end": 70
                }
              ],
              "start": 45,
              "end": 70
            },
            "start": 43,
            "end": 70
          },
          "start": 42,
          "end": 70
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "prefix": true,
                "start": 82,
                "end": 90
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 95,
                "end": 103
              },
              "start": 82,
              "end": 103
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "directive": null,
                  "start": 115,
                  "end": 117
                }
              ],
              "start": 105,
              "end": 124
            },
            "alternate": null,
            "start": 78,
            "end": 124
          }
        ],
        "start": 72,
        "end": 126
      },
      "expression": false,
      "start": 28,
      "end": 126
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 139
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 144
                  },
                  "typeArguments": null,
                  "start": 143,
                  "end": 144
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 152
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 154,
                          "end": 160
                        },
                        "start": 152,
                        "end": 160
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 149,
                      "end": 160
                    }
                  ],
                  "start": 147,
                  "end": 162
                }
              ],
              "start": 143,
              "end": 162
            },
            "start": 141,
            "end": 162
          },
          "start": 140,
          "end": 162
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "prefix": true,
                "start": 174,
                "end": 182
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 187,
                "end": 195
              },
              "start": 174,
              "end": 195
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 208
                  },
                  "directive": null,
                  "start": 207,
                  "end": 209
                }
              ],
              "start": 197,
              "end": 215
            },
            "alternate": null,
            "start": 170,
            "end": 215
          }
        ],
        "start": 164,
        "end": 217
      },
      "expression": false,
      "start": 128,
      "end": 217
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 217
}
```
