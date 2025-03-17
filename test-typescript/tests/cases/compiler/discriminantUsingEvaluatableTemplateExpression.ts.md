__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 264,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 113,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 77,
        "end": 112,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 85,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 82,
                "end": 85,
                "literal": {
                  "type": "Literal",
                  "start": 82,
                  "end": 85,
                  "raw": "\"s\"",
                  "value": "s"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 87,
            "end": 110,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 89,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 110,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 91,
                "end": 110,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 92,
                    "end": 101,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 101,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 95,
                        "end": 101
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 103,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 106,
                    "end": 110
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 114,
      "end": 159,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 123,
        "end": 158,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 132,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 131,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 128,
                "end": 131,
                "literal": {
                  "type": "Literal",
                  "start": 128,
                  "end": 131,
                  "raw": "\"n\"",
                  "value": "n"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 156,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 135,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 156,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 137,
                "end": 156,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 138,
                    "end": 147,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 141,
                        "end": 147
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 149,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 152,
                    "end": 156
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 161,
      "end": 200,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 181,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 182,
          "end": 192,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 192,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 187,
              "end": 192,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 187,
                  "end": 188,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 188,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 191,
                  "end": 192,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 193,
        "end": 199,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 195,
          "end": 199
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 263,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 262,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 206,
            "end": 261,
            "properties": [
              {
                "type": "Property",
                "start": 210,
                "end": 221,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TemplateLiteral",
                  "start": 213,
                  "end": 221,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 216,
                      "end": 219,
                      "raw": "\"s\"",
                      "value": "s"
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 213,
                      "end": 216,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 219,
                      "end": 221,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 225,
                "end": 258,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 227,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 229,
                  "end": 258,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 236,
                    "end": 258,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 242,
                        "end": 244,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 230,
                      "end": 231,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 202,
          "end": 205,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
