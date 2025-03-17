__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 308,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "name": "Something",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 20,
        "end": 105,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 20,
            "end": 36,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 22,
                "end": 34,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 26,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSConditionalType",
            "start": 41,
            "end": 104,
            "checkType": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 42,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 51,
              "end": 57
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "start": 60,
              "end": 74,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 66,
                  "end": 72,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 71,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "start": 77,
              "end": 104,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 83,
                  "end": 98,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 89,
                      "end": 98
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 126,
        "name": "testFunc2",
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
          "start": 145,
          "end": 149,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 149,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 149,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "name": "A",
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
        {
          "type": "Identifier",
          "start": 151,
          "end": 167,
          "name": "sa",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 153,
            "end": 167,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 155,
              "end": 167,
              "typeName": {
                "type": "Identifier",
                "start": 155,
                "end": 164,
                "name": "Something",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 164,
                "end": 167,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 165,
                    "end": 166,
                    "typeName": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 307,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 175,
            "end": 203,
            "expression": {
              "type": "AssignmentExpression",
              "start": 175,
              "end": 202,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 175,
                "end": 177,
                "name": "sa",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 180,
                "end": 202,
                "properties": [
                  {
                    "type": "Property",
                    "start": 182,
                    "end": 192,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 186,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 188,
                      "end": 192,
                      "value": "hi",
                      "raw": "'hi'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 194,
                    "end": 200,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 197,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 259,
            "end": 295,
            "expression": {
              "type": "AssignmentExpression",
              "start": 259,
              "end": 295,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 259,
                "end": 261,
                "name": "sa",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 264,
                "end": 295,
                "properties": [
                  {
                    "type": "Property",
                    "start": 266,
                    "end": 277,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 270,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 272,
                      "end": 277,
                      "value": "bye",
                      "raw": "'bye'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 279,
                    "end": 285,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 282,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 287,
                    "end": 293,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 290,
                      "name": "arr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 126,
        "end": 144,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 143,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 137,
              "end": 143
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
