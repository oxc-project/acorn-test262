ClassAndModuleThatMergeWithStaticFunctionAndNonExportedFunctionThatShareAName.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 489,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 69,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 69,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 30,
                  "end": 46,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 46,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 48,
                  "end": 64,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 64,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 58,
                        "end": 64
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 124,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 88,
              "decorators": [],
              "name": "Origin",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 124,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 100,
                    "end": 122,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 107,
                      "end": 121,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 109,
                          "end": 113,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 110,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 112,
                            "end": 113,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 115,
                          "end": 119,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 116,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 118,
                            "end": 119,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 90,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 92,
                  "end": 97,
                  "typeName": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 97,
                    "decorators": [],
                    "name": "Point",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 128,
      "end": 216,
      "body": {
        "type": "TSModuleBlock",
        "start": 141,
        "end": 216,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 147,
            "end": 179,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 179,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 167,
                  "end": 177,
                  "argument": {
                    "type": "Literal",
                    "start": 174,
                    "end": 176,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 162,
              "decorators": [],
              "name": "Origin",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 140,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 219,
      "end": 489,
      "body": {
        "type": "TSModuleBlock",
        "start": 228,
        "end": 489,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 234,
            "end": 379,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 241,
              "end": 379,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 253,
                "end": 379,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 263,
                    "end": 314,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 274,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 274,
                      "end": 314,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 311,
                        "end": 314,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 275,
                          "end": 291,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 291,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 283,
                              "end": 291,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 285,
                                "end": 291
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 293,
                          "end": 309,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 300,
                            "end": 309,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 301,
                              "end": 309,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 303,
                                "end": 309
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 324,
                    "end": 373,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 337,
                      "decorators": [],
                      "name": "Origin",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 337,
                      "end": 373,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 347,
                        "end": 373,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 349,
                            "end": 371,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 356,
                              "end": 370,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 358,
                                  "end": 362,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 358,
                                    "end": 359,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 361,
                                    "end": 362,
                                    "raw": "0",
                                    "value": 0
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 364,
                                  "end": 368,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 364,
                                    "end": 365,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 367,
                                    "end": 368,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 339,
                        "end": 346,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 341,
                          "end": 346,
                          "typeName": {
                            "type": "Identifier",
                            "start": 341,
                            "end": 346,
                            "decorators": [],
                            "name": "Point",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 247,
                "end": 252,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 385,
            "end": 487,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 392,
              "end": 487,
              "body": {
                "type": "TSModuleBlock",
                "start": 405,
                "end": 487,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 415,
                    "end": 447,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 433,
                      "end": 447,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 435,
                          "end": 445,
                          "argument": {
                            "type": "Literal",
                            "start": 442,
                            "end": 444,
                            "raw": "\"\"",
                            "value": ""
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 430,
                      "decorators": [],
                      "name": "Origin",
                      "optional": false
                    },
                    "params": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 399,
                "end": 404,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 227,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
