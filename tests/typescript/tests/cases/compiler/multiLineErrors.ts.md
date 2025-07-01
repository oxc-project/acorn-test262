__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 32,
            "raw": "32",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noReturn",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 30
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                "start": 41,
                "end": 49
              },
              "accessibility": null,
              "static": false,
              "start": 40,
              "end": 50
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                },
                "start": 56,
                "end": 64
              },
              "accessibility": null,
              "static": false,
              "start": 55,
              "end": 65
            }
          ],
          "start": 34,
          "end": 67
        },
        "start": 32,
        "end": 67
      },
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                },
                "init": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 82,
                  "end": 83
                },
                "definite": false,
                "start": 78,
                "end": 83
              }
            ],
            "declare": false,
            "start": 74,
            "end": 84
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 97,
                  "end": 99
                },
                "definite": false,
                "start": 93,
                "end": 99
              }
            ],
            "declare": false,
            "start": 89,
            "end": 100
          }
        ],
        "start": 68,
        "end": 102
      },
      "expression": false,
      "start": 13,
      "end": 102
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 116
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      },
                      "start": 129,
                      "end": 137
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 128,
                    "end": 138
                  }
                ],
                "start": 126,
                "end": 140
              },
              "start": 124,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 141
          }
        ],
        "start": 117,
        "end": 143
      },
      "declare": false,
      "start": 104,
      "end": 143
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 156
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 169
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 171,
                        "end": 177
                      },
                      "start": 169,
                      "end": 177
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 168,
                    "end": 178
                  }
                ],
                "start": 166,
                "end": 180
              },
              "start": 164,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 163,
            "end": 181
          }
        ],
        "start": 157,
        "end": 183
      },
      "declare": false,
      "start": 144,
      "end": 183
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 195
                },
                "typeArguments": null,
                "start": 193,
                "end": 195
              },
              "start": 191,
              "end": 195
            },
            "start": 189,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 189,
          "end": 195
        }
      ],
      "declare": false,
      "start": 185,
      "end": 196
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 207
                },
                "typeArguments": null,
                "start": 205,
                "end": 207
              },
              "start": 203,
              "end": 207
            },
            "start": 201,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 207
        }
      ],
      "declare": false,
      "start": 197,
      "end": 208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 211
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 216
        },
        "start": 209,
        "end": 216
      },
      "directive": null,
      "start": 209,
      "end": 217
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 217
}
```
