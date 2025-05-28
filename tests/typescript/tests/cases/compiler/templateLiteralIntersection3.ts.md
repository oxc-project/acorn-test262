__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 346,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Path",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 12,
        "end": 40,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
          },
          {
            "type": "TSTypeLiteral",
            "start": 21,
            "end": 40,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 23,
                "end": 38,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 33,
                  "decorators": [],
                  "name": "_pathBrand",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 35,
                    "end": 38
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 67,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 66,
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 66,
                  "decorators": [],
                  "name": "Path",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 139,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 138,
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 138,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 93,
                "end": 138,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 93,
                    "end": 110,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 95,
                        "end": 108,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 99,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 99,
                          "end": 107,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 101,
                            "end": 107
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 113,
                    "end": 138,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 115,
                        "end": 136,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 116,
                            "end": 125,
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 117,
                              "end": 125,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 119,
                                "end": 125
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 126,
                          "end": 135,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 128,
                            "end": 135
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 165,
      "expression": {
        "type": "AssignmentExpression",
        "start": 141,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 141,
          "end": 156,
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 149,
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "TemplateLiteral",
            "start": 150,
            "end": 155,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 150,
                "end": 155,
                "value": {
                  "cooked": "foo",
                  "raw": "foo"
                },
                "tail": true
              }
            ],
            "expressions": []
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 159,
          "end": 164,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 199,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 198,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 167,
          "end": 190,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 175,
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "TemplateLiteral",
            "start": 176,
            "end": 189,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 176,
                "end": 183,
                "value": {
                  "cooked": "foo/",
                  "raw": "foo/"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 187,
                "end": 189,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "start": 183,
                "end": 187,
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 193,
          "end": 198,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 312,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 311,
            "decorators": [],
            "name": "lowercasePath",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 287,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 296,
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 296,
                  "end": 311,
                  "params": [
                    {
                      "type": "TSTemplateLiteralType",
                      "start": 297,
                      "end": 310,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 297,
                          "end": 304,
                          "value": {
                            "cooked": "foo/",
                            "raw": "foo/"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 308,
                          "end": 310,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 304,
                          "end": 308,
                          "typeName": {
                            "type": "Identifier",
                            "start": 304,
                            "end": 308,
                            "decorators": [],
                            "name": "Path",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 314,
      "end": 346,
      "expression": {
        "type": "AssignmentExpression",
        "start": 314,
        "end": 345,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 314,
          "end": 337,
          "object": {
            "type": "Identifier",
            "start": 314,
            "end": 322,
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 323,
            "end": 336,
            "decorators": [],
            "name": "lowercasePath",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 340,
          "end": 345,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
