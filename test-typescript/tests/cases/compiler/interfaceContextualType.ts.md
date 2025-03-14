__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 71,
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
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 38,
                "decorators": [],
                "name": "italic",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 41,
                  "end": 48
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 69,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "decorators": [],
                "name": "bold",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 61,
                  "end": 68
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 25,
          "decorators": [],
          "name": "IOptions",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 124,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 79,
        "end": 124,
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
              "readonly": false,
              "static": false,
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
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 89,
          "end": 93,
          "decorators": [],
          "name": "IMap",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 358,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 358,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 142,
            "end": 162,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 155,
              "decorators": [],
              "name": "values",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 257,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "decorators": [],
              "name": "ok",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 257,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 182,
                          "end": 186
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 193,
                          "decorators": [],
                          "name": "values",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 196,
                        "end": 198,
                        "properties": []
                      }
                    }
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
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 208,
                          "end": 219,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 208,
                            "end": 212
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 219,
                            "decorators": [],
                            "name": "values",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 220,
                          "end": 230,
                          "raw": "'comments'",
                          "value": "comments"
                        }
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 242,
                              "decorators": [],
                              "name": "italic",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 244,
                              "end": 248,
                              "raw": "true",
                              "value": true
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 356,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 272,
              "decorators": [],
              "name": "shouldBeOK",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 272,
              "end": 356,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 285,
                          "end": 289
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 296,
                          "decorators": [],
                          "name": "values",
                          "optional": false
                        }
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 313,
                              "end": 321,
                              "decorators": [],
                              "name": "comments",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 323,
                              "end": 339,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 325,
                                  "end": 337,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 325,
                                    "end": 331,
                                    "decorators": [],
                                    "name": "italic",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 333,
                                    "end": 337,
                                    "raw": "true",
                                    "value": true
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "Bug",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
