__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 313,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 96,
          "end": 105,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 105,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 99,
              "end": 105
            }
          }
        },
        {
          "type": "Identifier",
          "start": 107,
          "end": 116,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 116,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 110,
              "end": 116
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 138,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 124,
            "end": 136,
            "argument": {
              "type": "SequenceExpression",
              "start": 131,
              "end": 135,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 182,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 165,
            "decorators": [],
            "name": "resultIsString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 159,
                "end": 165
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 168,
            "end": 181,
            "callee": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 172,
                "end": 173,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 175,
                "end": 180,
                "value": "123",
                "raw": "\"123\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 227,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 227,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 228,
            "end": 230,
            "name": {
              "type": "Identifier",
              "start": 228,
              "end": 230,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 232,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 232,
              "end": 234,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 313,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 244,
            "end": 254,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 248,
                "end": 253,
                "id": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 253,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 253,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 251,
                      "end": 253,
                      "typeName": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 253,
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 259,
            "end": 269,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 263,
                "end": 268,
                "id": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 268,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 264,
                    "end": 268,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 266,
                      "end": 268,
                      "typeName": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 268,
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 274,
            "end": 298,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 278,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 288,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 288,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 288,
                      "typeName": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 288,
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "SequenceExpression",
                  "start": 292,
                  "end": 296,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 295,
                      "end": 296,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
