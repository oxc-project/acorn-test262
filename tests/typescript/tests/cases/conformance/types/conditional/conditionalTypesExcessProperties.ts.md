__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 26
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  },
                  "start": 26,
                  "end": 34
                },
                "accessibility": null,
                "static": false,
                "start": 22,
                "end": 34
              }
            ],
            "start": 20,
            "end": 36
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "typeArguments": null,
              "start": 41,
              "end": 42
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 51,
              "end": 57
            },
            "trueType": {
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
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 69
                  },
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
                        "start": 71,
                        "end": 72
                      },
                      "typeArguments": null,
                      "start": 71,
                      "end": 72
                    },
                    "start": 69,
                    "end": 72
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 66,
                  "end": 72
                }
              ],
              "start": 60,
              "end": 74
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 86
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 89,
                      "end": 98
                    },
                    "start": 87,
                    "end": 98
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 83,
                  "end": 98
                }
              ],
              "start": 77,
              "end": 104
            },
            "start": 41,
            "end": 104
          }
        ],
        "start": 20,
        "end": 105
      },
      "declare": false,
      "start": 0,
      "end": 106
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunc2",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 126
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 137,
              "end": 143
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 143
          }
        ],
        "start": 126,
        "end": 144
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
              },
              "typeArguments": null,
              "start": 148,
              "end": 149
            },
            "start": 146,
            "end": 149
          },
          "start": 145,
          "end": 149
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sa",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 164
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "typeArguments": null,
                    "start": 165,
                    "end": 166
                  }
                ],
                "start": 164,
                "end": 167
              },
              "start": 155,
              "end": 167
            },
            "start": 153,
            "end": 167
          },
          "start": 151,
          "end": 167
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 177
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 186
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 188,
                      "end": 192
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 182,
                    "end": 192
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 197
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 200
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 194,
                    "end": 200
                  }
                ],
                "start": 180,
                "end": 202
              },
              "start": 175,
              "end": 202
            },
            "directive": null,
            "start": 175,
            "end": 203
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 261
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 270
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bye",
                      "raw": "'bye'",
                      "start": 272,
                      "end": 277
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 266,
                    "end": 277
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 282
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 285
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 279,
                    "end": 285
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 290
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 287,
                    "end": 293
                  }
                ],
                "start": 264,
                "end": 295
              },
              "start": 259,
              "end": 295
            },
            "directive": null,
            "start": 259,
            "end": 295
          }
        ],
        "start": 169,
        "end": 307
      },
      "expression": false,
      "start": 108,
      "end": 307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 307
}
```
