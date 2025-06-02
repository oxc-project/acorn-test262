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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Params",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 43,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 41,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 61,
        "decorators": [],
        "name": "example",
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
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 80,
                "decorators": [],
                "name": "Params",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 154,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 86,
            "end": 122,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 92,
                "end": 122,
                "id": {
                  "type": "ObjectPattern",
                  "start": 92,
                  "end": 109,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 94,
                      "end": 107,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 99,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                        "right": {
                          "type": "Literal",
                          "start": 102,
                          "end": 107,
                          "value": "123",
                          "raw": "'123'"
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 125,
            "end": 152,
            "argument": {
              "type": "BinaryExpression",
              "start": 132,
              "end": 152,
              "left": {
                "type": "TemplateLiteral",
                "start": 132,
                "end": 142,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 132,
                    "end": 135,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 140,
                    "end": 142,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
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
                ]
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 147,
                "end": 152,
                "value": "345",
                "raw": "'345'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 173,
        "decorators": [],
        "name": "example2",
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
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 192,
                "decorators": [],
                "name": "Params",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 272,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 198,
            "end": 234,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 204,
                "end": 234,
                "id": {
                  "type": "ObjectPattern",
                  "start": 204,
                  "end": 221,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 206,
                      "end": 219,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 211,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                        "right": {
                          "type": "Literal",
                          "start": 214,
                          "end": 219,
                          "value": "123",
                          "raw": "'123'"
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 237,
            "end": 258,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 243,
                "end": 257,
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
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 247,
                      "end": 250,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 255,
                      "end": 257,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
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
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
