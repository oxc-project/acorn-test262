__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 43,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Params",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 43,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 41,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 26,
                "end": 41,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 35,
                    "end": 41
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 154,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 154,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 86,
            "end": 122,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 92,
                "end": 122,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 92,
                  "end": 109,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 94,
                      "end": 107,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 99,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 94,
                        "end": 107,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 99,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 102,
                          "end": 107,
                          "raw": "'123'",
                          "value": "123",
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 122,
                  "decorators": [],
                  "name": "parameters",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 125,
            "end": 152,
            "argument": {
              "type": "BinaryExpression",
              "start": 132,
              "end": 152,
              "operator": "===",
              "left": {
                "type": "TemplateLiteral",
                "start": 132,
                "end": 142,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 135,
                    "end": 140,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 132,
                    "end": 135,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 140,
                    "end": 142,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "right": {
                "type": "Literal",
                "start": 147,
                "end": 152,
                "raw": "'345'",
                "value": "345",
                "regex": null,
                "bigint": null
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
        "start": 54,
        "end": 61,
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 80,
          "decorators": [],
          "name": "parameters",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 80,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 80,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 80,
                "decorators": [],
                "name": "Params",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 272,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 272,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 198,
            "end": 234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 204,
                "end": 234,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 204,
                  "end": 221,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 206,
                      "end": 219,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 211,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 206,
                        "end": 219,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 211,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 214,
                          "end": 219,
                          "raw": "'123'",
                          "value": "123",
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 234,
                  "decorators": [],
                  "name": "parameters",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 237,
            "end": 258,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 243,
                "end": 257,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 247,
                  "end": 257,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 250,
                      "end": 255,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 247,
                      "end": 250,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 255,
                      "end": 257,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 261,
            "end": 270,
            "argument": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 173,
        "decorators": [],
        "name": "example2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 174,
          "end": 192,
          "decorators": [],
          "name": "parameters",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 192,
                "decorators": [],
                "name": "Params",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
