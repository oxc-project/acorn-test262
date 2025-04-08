__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 263,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "name": "ITextWriter2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 82,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 29,
            "end": 50,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 34,
              "name": "Write",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 43,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
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
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 45,
                "end": 49
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 55,
            "end": 80,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 64,
              "name": "WriteLine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 73,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 79,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 75,
                "end": 79
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 103,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 103,
                  "name": "ITextWriter2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 106,
            "end": 191,
            "properties": [
              {
                "type": "Property",
                "start": 112,
                "end": 146,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 117,
                  "name": "Write",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 119,
                  "end": 146,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 129,
                      "end": 137,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 130,
                        "end": 137,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 131,
                          "end": 137
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 144,
                    "end": 146,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 138,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 139,
                      "end": 143
                    }
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 152,
                "end": 189,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 161,
                  "name": "WriteLine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 163,
                  "end": 189,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 172,
                      "end": 180,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 173,
                        "end": 180,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 174,
                          "end": 180
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 187,
                    "end": 189,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 182,
                      "end": 186
                    }
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 219,
            "name": "yyyyyyyy",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 219,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 219,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 219,
                  "name": "ITextWriter2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 222,
            "end": 263,
            "properties": [
              {
                "type": "Property",
                "start": 228,
                "end": 261,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
                  "name": "Moo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 233,
                  "end": 261,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 244,
                    "end": 261,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 246,
                        "end": 259,
                        "argument": {
                          "type": "Literal",
                          "start": 253,
                          "end": 258,
                          "value": "cow",
                          "raw": "\"cow\""
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
