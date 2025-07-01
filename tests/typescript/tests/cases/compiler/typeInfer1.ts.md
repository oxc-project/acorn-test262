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
        "name": "ITextWriter2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Write",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 34
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 37,
                    "end": 43
                  },
                  "start": 36,
                  "end": 43
                },
                "start": 35,
                "end": 43
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 45,
                "end": 49
              },
              "start": 44,
              "end": 49
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 29,
            "end": 50
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "WriteLine",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 64
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  },
                  "start": 66,
                  "end": 73
                },
                "start": 65,
                "end": 73
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 75,
                "end": 79
              },
              "start": 74,
              "end": 79
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 55,
            "end": 80
          }
        ],
        "start": 23,
        "end": 82
      },
      "declare": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ITextWriter2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 103
                },
                "typeArguments": null,
                "start": 91,
                "end": 103
              },
              "start": 89,
              "end": 103
            },
            "start": 88,
            "end": 103
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Write",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 117
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 131,
                          "end": 137
                        },
                        "start": 130,
                        "end": 137
                      },
                      "start": 129,
                      "end": 137
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 139,
                      "end": 143
                    },
                    "start": 138,
                    "end": 143
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 144,
                    "end": 146
                  },
                  "expression": false,
                  "start": 119,
                  "end": 146
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 112,
                "end": 146
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WriteLine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 161
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 174,
                          "end": 180
                        },
                        "start": 173,
                        "end": 180
                      },
                      "start": 172,
                      "end": 180
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 182,
                      "end": 186
                    },
                    "start": 181,
                    "end": 186
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 187,
                    "end": 189
                  },
                  "expression": false,
                  "start": 163,
                  "end": 189
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 152,
                "end": 189
              }
            ],
            "start": 106,
            "end": 191
          },
          "definite": false,
          "start": 88,
          "end": 191
        }
      ],
      "declare": false,
      "start": 84,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "yyyyyyyy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ITextWriter2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 219
                },
                "typeArguments": null,
                "start": 207,
                "end": 219
              },
              "start": 205,
              "end": 219
            },
            "start": 197,
            "end": 219
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Moo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 231
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "cow",
                          "raw": "\"cow\"",
                          "start": 253,
                          "end": 258
                        },
                        "start": 246,
                        "end": 259
                      }
                    ],
                    "start": 244,
                    "end": 261
                  },
                  "expression": false,
                  "start": 233,
                  "end": 261
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 228,
                "end": 261
              }
            ],
            "start": 222,
            "end": 263
          },
          "definite": false,
          "start": 197,
          "end": 263
        }
      ],
      "declare": false,
      "start": 193,
      "end": 263
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 263
}
```
