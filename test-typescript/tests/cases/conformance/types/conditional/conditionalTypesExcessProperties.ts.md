conditionalTypesExcessProperties.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "Something",
        "optional": false
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
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 26,
                  "decorators": [],
                  "name": "test",
                  "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "T",
                "optional": false
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "decorators": [],
                    "name": "arg",
                    "optional": false
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "decorators": [],
                    "name": "arg",
                    "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 186,
                      "decorators": [],
                      "name": "test",
                      "optional": false
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
                      "optional": false
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
                      "optional": false
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 270,
                      "decorators": [],
                      "name": "test",
                      "optional": false
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
                      "optional": false
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
                      "optional": false
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
                      "optional": false
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
                      "optional": false
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
        "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "A",
                "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "A",
                      "optional": false
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
                "optional": false
              }
            }
          }
        }
      ],
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
