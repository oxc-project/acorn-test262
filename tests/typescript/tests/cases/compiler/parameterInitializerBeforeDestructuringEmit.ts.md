__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 311,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 29,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 26,
                "end": 29
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 49,
      "end": 165,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 165,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 104,
            "end": 117,
            "directive": "use strict",
            "expression": {
              "type": "Literal",
              "start": 104,
              "end": 116,
              "raw": "\"use strict\"",
              "value": "use strict"
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 144,
            "directive": "Some other prologue",
            "expression": {
              "type": "Literal",
              "start": 122,
              "end": 143,
              "raw": "\"Some other prologue\"",
              "value": "Some other prologue"
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 163,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 149,
              "end": 162,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 161,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 149,
                "end": 157,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 153,
                  "decorators": [],
                  "name": "opts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 64,
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 65,
          "end": 96,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 65,
            "end": 91,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 67,
                "end": 75,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 67,
                  "end": 75,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 70,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 73,
                    "end": 75,
                    "properties": []
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 77,
                "end": 84,
                "argument": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 84,
                  "decorators": [],
                  "name": "opts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 91,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 91,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 94,
            "end": 96,
            "properties": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 311,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 175,
        "end": 311,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 309,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 192,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 309,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 309,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 249,
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "start": 236,
                      "end": 248,
                      "raw": "\"use strict\"",
                      "value": "use strict"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 258,
                    "end": 280,
                    "directive": "Some other prologue",
                    "expression": {
                      "type": "Literal",
                      "start": 258,
                      "end": 279,
                      "raw": "\"Some other prologue\"",
                      "value": "Some other prologue"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 289,
                    "end": 303,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 289,
                      "end": 302,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 298,
                          "end": 301,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 289,
                        "end": 297,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 293,
                          "decorators": [],
                          "name": "opts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 297,
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 193,
                  "end": 224,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 193,
                    "end": 219,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 195,
                        "end": 203,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 198,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 195,
                          "end": 203,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 198,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "right": {
                            "type": "ObjectExpression",
                            "start": 201,
                            "end": 203,
                            "properties": []
                          },
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 205,
                        "end": 212,
                        "argument": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 212,
                          "decorators": [],
                          "name": "opts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 214,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 216,
                        "end": 219,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 219,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 222,
                    "end": 224,
                    "properties": []
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
