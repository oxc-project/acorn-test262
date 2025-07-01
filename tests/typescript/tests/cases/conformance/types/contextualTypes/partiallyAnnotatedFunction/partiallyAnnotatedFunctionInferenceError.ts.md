__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 16
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 12,
            "end": 24
          }
        ],
        "start": 8,
        "end": 26
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test2",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 55
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              },
              "start": 55,
              "end": 63
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 63
          }
        ],
        "start": 46,
        "end": 65
      },
      "abstract": false,
      "declare": false,
      "start": 28,
      "end": 65
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testError",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 93
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "typeArguments": null,
              "start": 104,
              "end": 105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 105
          }
        ],
        "start": 93,
        "end": 106
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 114,
                        "end": 115
                      },
                      "typeArguments": null,
                      "start": 114,
                      "end": 115
                    },
                    "start": 112,
                    "end": 115
                  },
                  "start": 111,
                  "end": 115
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 122
                      },
                      "typeArguments": null,
                      "start": 121,
                      "end": 122
                    },
                    "start": 119,
                    "end": 122
                  },
                  "start": 117,
                  "end": 122
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 127,
                  "end": 131
                },
                "start": 124,
                "end": 131
              },
              "start": 110,
              "end": 131
            },
            "start": 108,
            "end": 131
          },
          "start": 107,
          "end": 131
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "typeArguments": null,
          "start": 134,
          "end": 135
        },
        "start": 132,
        "end": 135
      },
      "body": null,
      "expression": false,
      "start": 67,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testError",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 159
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "typeArguments": null,
                    "start": 165,
                    "end": 166
                  },
                  "start": 163,
                  "end": 166
                },
                "start": 161,
                "end": 166
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 170
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 174
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 179,
              "end": 181
            },
            "id": null,
            "generator": false,
            "start": 160,
            "end": 181
          }
        ],
        "optional": false,
        "start": 150,
        "end": 182
      },
      "directive": null,
      "start": 150,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testError",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 192
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 196
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 203
                    },
                    "typeArguments": null,
                    "start": 202,
                    "end": 203
                  },
                  "start": 200,
                  "end": 203
                },
                "start": 198,
                "end": 203
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 207
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 212,
              "end": 214
            },
            "id": null,
            "generator": false,
            "start": 193,
            "end": 214
          }
        ],
        "optional": false,
        "start": 183,
        "end": 215
      },
      "directive": null,
      "start": 183,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testError",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 225
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 233
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 240
                    },
                    "typeArguments": null,
                    "start": 239,
                    "end": 240
                  },
                  "start": 237,
                  "end": 240
                },
                "start": 235,
                "end": 240
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 245,
              "end": 247
            },
            "id": null,
            "generator": false,
            "start": 226,
            "end": 247
          }
        ],
        "optional": false,
        "start": 216,
        "end": 248
      },
      "directive": null,
      "start": 216,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 248
}
```
