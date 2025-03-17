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
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 77,
        "end": 112,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 86,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "s",
                  "raw": "\"s\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 87,
            "end": 110,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 89,
              "name": "cb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 110,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 91,
                "end": 110,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 92,
                    "end": 101,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 101,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 95,
                        "end": 101
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 114,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 123,
        "end": 158,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 132,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "n",
                  "raw": "\"n\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 156,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 135,
              "name": "cb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 156,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 137,
                "end": 156,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 138,
                    "end": 147,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 141,
                        "end": 147
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
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
      "type": "TSDeclareFunction",
      "start": 161,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 181,
        "name": "foo",
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
          "start": 182,
          "end": 192,
          "name": "foo",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 188,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 191,
                  "end": 192,
                  "typeName": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 193,
        "end": 199,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 195,
          "end": 199
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 263,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 262,
        "callee": {
          "type": "Identifier",
          "start": 202,
          "end": 205,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TemplateLiteral",
                  "start": 213,
                  "end": 221,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 216,
                      "end": 219,
                      "value": "s",
                      "raw": "\"s\""
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 213,
                      "end": 216,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 219,
                      "end": 221,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 225,
                "end": 258,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 227,
                  "name": "cb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 229,
                  "end": 258,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 236,
                    "end": 258,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 242,
                        "end": 244,
                        "expression": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
