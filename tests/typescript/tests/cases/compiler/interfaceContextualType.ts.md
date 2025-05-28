__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 358,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 71,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 71,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 25,
          "decorators": [],
          "name": "IOptions",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 26,
          "end": 71,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 32,
              "end": 49,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 38,
                "decorators": [],
                "name": "italic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 41,
                  "end": 48
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 69,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "decorators": [],
                "name": "bold",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 61,
                  "end": 68
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 124,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 79,
        "end": 124,
        "id": {
          "type": "Identifier",
          "start": 89,
          "end": 93,
          "decorators": [],
          "name": "IMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 94,
          "end": 124,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 100,
              "end": 122,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 110,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 104,
                      "end": 110
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 111,
                "end": 121,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 113,
                  "end": 121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 121,
                    "decorators": [],
                    "name": "IOptions",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "readonly": false,
              "static": false,
              "accessibility": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 358,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "Bug",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 358,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 142,
            "end": 162,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 155,
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 161,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 161,
                  "decorators": [],
                  "name": "IMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 257,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 257,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 172,
                "end": 257,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 182,
                    "end": 199,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 182,
                      "end": 198,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 193,
                        "object": {
                          "type": "ThisExpression",
                          "start": 182,
                          "end": 186
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 193,
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 196,
                        "end": 198,
                        "properties": []
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 208,
                    "end": 251,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 208,
                      "end": 250,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 208,
                        "end": 231,
                        "object": {
                          "type": "MemberExpression",
                          "start": 208,
                          "end": 219,
                          "object": {
                            "type": "ThisExpression",
                            "start": 208,
                            "end": 212
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 219,
                            "decorators": [],
                            "name": "values",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 220,
                          "end": 230,
                          "value": "comments",
                          "raw": "'comments'"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 234,
                        "end": 250,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 236,
                            "end": 248,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 242,
                              "decorators": [],
                              "name": "italic",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 244,
                              "end": 248,
                              "value": true,
                              "raw": "true"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 356,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 272,
              "decorators": [],
              "name": "shouldBeOK",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 272,
              "end": 356,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 275,
                "end": 356,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 285,
                    "end": 350,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 285,
                      "end": 349,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 285,
                        "end": 296,
                        "object": {
                          "type": "ThisExpression",
                          "start": 285,
                          "end": 289
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 296,
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 299,
                        "end": 349,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 313,
                            "end": 339,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 313,
                              "end": 321,
                              "decorators": [],
                              "name": "comments",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 323,
                              "end": 339,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 325,
                                  "end": 337,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 325,
                                    "end": 331,
                                    "decorators": [],
                                    "name": "italic",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 333,
                                    "end": 337,
                                    "value": true,
                                    "raw": "true"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
