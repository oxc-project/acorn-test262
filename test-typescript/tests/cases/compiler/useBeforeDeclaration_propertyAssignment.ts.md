__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 370,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 131,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 131,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 131,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 80,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 33,
                "end": 79,
                "properties": [
                  {
                    "type": "Property",
                    "start": 35,
                    "end": 44,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 38,
                      "end": 44,
                      "object": {
                        "type": "ThisExpression",
                        "start": 38,
                        "end": 42
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "SpreadElement",
                    "start": 46,
                    "end": 55,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 49,
                      "end": 55,
                      "object": {
                        "type": "ThisExpression",
                        "start": 49,
                        "end": 53
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 57,
                    "end": 78,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 58,
                      "end": 64,
                      "object": {
                        "type": "ThisExpression",
                        "start": 58,
                        "end": 62
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "value": {
                      "type": "TemplateLiteral",
                      "start": 67,
                      "end": 78,
                      "expressions": [
                        {
                          "type": "MemberExpression",
                          "start": 70,
                          "end": 76,
                          "object": {
                            "type": "ThisExpression",
                            "start": 70,
                            "end": 74
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 75,
                            "end": 76,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 67,
                          "end": 70,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 76,
                          "end": 78,
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
                  }
                ]
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 85,
              "end": 99,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 97,
                "end": 98,
                "value": 0,
                "raw": "0"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 104,
              "end": 129,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 115,
                "end": 128,
                "properties": [
                  {
                    "type": "Property",
                    "start": 117,
                    "end": 126,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 120,
                      "end": 126,
                      "object": {
                        "type": "ThisExpression",
                        "start": 120,
                        "end": 124
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 370,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 224,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ClassExpression",
              "start": 158,
              "end": 224,
              "id": null,
              "superClass": {
                "type": "MemberExpression",
                "start": 172,
                "end": 175,
                "object": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 176,
                "end": 224,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 186,
                    "end": 196,
                    "static": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 190,
                      "object": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 191,
                      "end": 196,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 194,
                        "end": 196,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 248,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ClassExpression",
              "start": 240,
              "end": 248,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 246,
                "end": 248,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 253,
            "end": 349,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 264,
              "end": 348,
              "properties": [
                {
                  "type": "Property",
                  "start": 274,
                  "end": 282,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 275,
                    "end": 278,
                    "object": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 276,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 281,
                    "end": 282,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "SpreadElement",
                  "start": 292,
                  "end": 320,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 295,
                    "end": 320,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 296,
                        "end": 319,
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "key": {
                          "type": "MemberExpression",
                          "start": 301,
                          "end": 304,
                          "object": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 302,
                            "name": "D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 304,
                            "name": "D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 305,
                          "end": 319,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 308,
                            "end": 319,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 309,
                                "end": 318,
                                "argument": {
                                  "type": "Literal",
                                  "start": 316,
                                  "end": 317,
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "get",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 354,
            "end": 368,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 365,
              "end": 367,
              "value": "",
              "raw": "''"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
