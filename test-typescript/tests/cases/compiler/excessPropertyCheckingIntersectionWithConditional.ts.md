excessPropertyCheckingIntersectionWithConditional.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 57,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 14,
        "end": 57,
        "checkType": {
          "type": "TSTypeReference",
          "start": 14,
          "end": 15,
          "typeName": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "K",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 24,
          "end": 31
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 50,
          "end": 57
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 34,
          "end": 47,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 36,
              "end": 45,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 39,
                  "end": 45
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 84,
            "decorators": [],
            "name": "createDefaultExample",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 87,
            "end": 188,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 121,
              "end": 188,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 125,
                  "end": 147,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 132,
                    "end": 146,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 134,
                        "end": 138,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 135,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 137,
                          "end": 138,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "Property",
                        "start": 140,
                        "end": 144,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 96,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 96,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 117,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 99,
                "end": 117,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 105,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 102,
                      "end": 105,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 104,
                          "typeName": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 108,
                    "end": 117,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 110,
                        "end": 115,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 114,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 113,
                            "end": 114,
                            "typeName": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 114,
                              "decorators": [],
                              "name": "K",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 87,
              "end": 91,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 88,
                  "end": 89,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
