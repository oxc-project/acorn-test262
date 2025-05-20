__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 106,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 26,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  }
                }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "extendsType": {
              "type": "TSObjectKeyword",
              "start": 51,
              "end": 57
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 89,
                      "end": 98
                    }
                  }
                }
              ]
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 71,
                      "end": 72,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 307,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 307,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 175,
            "end": 203,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 175,
              "end": 202,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 175,
                "end": 177,
                "decorators": [],
                "name": "sa",
                "optional": false,
                "typeAnnotation": null
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 186,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 188,
                      "end": 192,
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 194,
                    "end": 200,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 197,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 259,
            "end": 295,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 259,
              "end": 295,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 259,
                "end": 261,
                "decorators": [],
                "name": "sa",
                "optional": false,
                "typeAnnotation": null
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 270,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 272,
                      "end": 277,
                      "raw": "'bye'",
                      "value": "bye"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 279,
                    "end": 285,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 282,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 287,
                    "end": 293,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 290,
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
        "start": 117,
        "end": 126,
        "decorators": [],
        "name": "testFunc2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 149,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 149,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 149,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 151,
          "end": 167,
          "decorators": [],
          "name": "sa",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 153,
            "end": 167,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 155,
              "end": 167,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 164,
                "end": 167,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 165,
                    "end": 166,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 155,
                "end": 164,
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 126,
        "end": 144,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 143,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 137,
              "end": 143
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
