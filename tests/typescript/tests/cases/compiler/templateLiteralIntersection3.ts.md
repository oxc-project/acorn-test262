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
        "name": "Path",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
          },
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
                  "name": "_pathBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 33
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 35,
                    "end": 38
                  },
                  "start": 33,
                  "end": 38
                },
                "accessibility": null,
                "static": false,
                "start": 23,
                "end": 38
              }
            ],
            "start": 21,
            "end": 40
          }
        ],
        "start": 12,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 66
                },
                "typeArguments": null,
                "start": 62,
                "end": 66
              },
              "start": 60,
              "end": 66
            },
            "start": 56,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 66
        }
      ],
      "declare": true,
      "start": 42,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 99
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 101,
                            "end": 107
                          },
                          "start": 99,
                          "end": 107
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 95,
                        "end": 108
                      }
                    ],
                    "start": 93,
                    "end": 110
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 119,
                                "end": 125
                              },
                              "start": 117,
                              "end": 125
                            },
                            "start": 116,
                            "end": 125
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 128,
                            "end": 135
                          },
                          "start": 126,
                          "end": 135
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 115,
                        "end": 136
                      }
                    ],
                    "start": 113,
                    "end": 138
                  }
                ],
                "start": 93,
                "end": 138
              },
              "start": 91,
              "end": 138
            },
            "start": 83,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 138
        }
      ],
      "declare": true,
      "start": 69,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 149
          },
          "property": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "foo",
                  "cooked": "foo"
                },
                "tail": true,
                "start": 150,
                "end": 155
              }
            ],
            "expressions": [],
            "start": 150,
            "end": 155
          },
          "optional": false,
          "computed": true,
          "start": 141,
          "end": 156
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 159,
          "end": 164
        },
        "start": 141,
        "end": 164
      },
      "directive": null,
      "start": 141,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 175
          },
          "property": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "foo/",
                  "cooked": "foo/"
                },
                "tail": false,
                "start": 176,
                "end": 183
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 187,
                "end": 189
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 187
              }
            ],
            "start": 176,
            "end": 189
          },
          "optional": false,
          "computed": true,
          "start": 167,
          "end": 190
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 193,
          "end": 198
        },
        "start": 167,
        "end": 198
      },
      "directive": null,
      "start": 167,
      "end": 199
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "lowercasePath",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 296
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "foo/",
                            "cooked": "foo/"
                          },
                          "tail": false,
                          "start": 297,
                          "end": 304
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 308,
                          "end": 310
                        }
                      ],
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Path",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 304,
                            "end": 308
                          },
                          "typeArguments": null,
                          "start": 304,
                          "end": 308
                        }
                      ],
                      "start": 297,
                      "end": 310
                    }
                  ],
                  "start": 296,
                  "end": 311
                },
                "start": 287,
                "end": 311
              },
              "start": 285,
              "end": 311
            },
            "start": 272,
            "end": 311
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 311
        }
      ],
      "declare": true,
      "start": 258,
      "end": 312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "options1",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 322
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "lowercasePath",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 336
          },
          "optional": false,
          "computed": true,
          "start": 314,
          "end": 337
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 340,
          "end": 345
        },
        "start": 314,
        "end": 345
      },
      "directive": null,
      "start": 314,
      "end": 346
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 346
}
```
