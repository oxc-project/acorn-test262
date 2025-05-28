__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 943,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 132,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 132,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "decorators": [],
          "name": "TestCase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 22,
          "end": 132,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 28,
              "end": 130,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 39,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 130,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 41,
                    "end": 60,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 60,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 52,
                        "end": 60,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 54,
                          "end": 60
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 62,
                    "end": 86,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 86,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 73,
                        "end": 86,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 75,
                          "end": 86,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 77,
                            "end": 86,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 79,
                              "end": 86
                            }
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 88,
                    "end": 121,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 121,
                      "decorators": [],
                      "name": "errorMessageRegEx",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 113,
                        "end": 121,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 115,
                          "end": 121
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 123,
                  "end": 130,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 294,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 140,
        "end": 294,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 146,
          "end": 156,
          "decorators": [],
          "name": "TestRunner",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 157,
          "end": 294,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 164,
              "end": 248,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 183,
                "decorators": [],
                "name": "arrayCompare",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 183,
                "end": 248,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 184,
                    "end": 195,
                    "decorators": [],
                    "name": "arg1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 195,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 190,
                        "end": 195,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 190,
                          "end": 193
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 197,
                    "end": 208,
                    "decorators": [],
                    "name": "arg2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 201,
                      "end": 208,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 203,
                        "end": 208,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 203,
                          "end": 206
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 209,
                  "end": 218,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 211,
                    "end": 218
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 219,
                  "end": 248,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 229,
                      "end": 242,
                      "argument": {
                        "type": "Literal",
                        "start": 236,
                        "end": 241,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 254,
              "end": 292,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 268,
                "decorators": [],
                "name": "addTest",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 268,
                "end": 292,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 269,
                    "end": 283,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 273,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 275,
                        "end": 283,
                        "typeName": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 283,
                          "decorators": [],
                          "name": "TestCase",
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
                  "start": 285,
                  "end": 292,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 296,
      "end": 943,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 303,
        "end": 943,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 307,
            "end": 942,
            "id": {
              "type": "Identifier",
              "start": 307,
              "end": 324,
              "decorators": [],
              "name": "tests",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 312,
                "end": 324,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 314,
                  "end": 324,
                  "typeName": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 324,
                    "decorators": [],
                    "name": "TestRunner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "start": 327,
              "end": 942,
              "callee": {
                "type": "FunctionExpression",
                "start": 328,
                "end": 939,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 340,
                  "end": 939,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 346,
                      "end": 380,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 350,
                          "end": 379,
                          "id": {
                            "type": "Identifier",
                            "start": 350,
                            "end": 360,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 363,
                            "end": 379,
                            "callee": {
                              "type": "Identifier",
                              "start": 367,
                              "end": 377,
                              "decorators": [],
                              "name": "TestRunner",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 386,
                      "end": 913,
                      "expression": {
                        "type": "CallExpression",
                        "start": 386,
                        "end": 912,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 386,
                          "end": 404,
                          "object": {
                            "type": "Identifier",
                            "start": 386,
                            "end": 396,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 397,
                            "end": 404,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 405,
                            "end": 911,
                            "callee": {
                              "type": "Identifier",
                              "start": 409,
                              "end": 417,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 418,
                                "end": 439,
                                "value": "Check UTF8 encoding",
                                "raw": "\"Check UTF8 encoding\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 449,
                                "end": 910,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 461,
                                  "end": 910,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 475,
                                      "end": 487,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 479,
                                          "end": 486,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 479,
                                            "end": 486,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 481,
                                              "end": 486,
                                              "typeAnnotation": {
                                                "type": "TSAnyKeyword",
                                                "start": 483,
                                                "end": 486
                                              }
                                            }
                                          },
                                          "init": null,
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 500,
                                      "end": 518,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 500,
                                        "end": 517,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 500,
                                          "end": 515,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 500,
                                            "end": 502,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 503,
                                            "end": 515,
                                            "decorators": [],
                                            "name": "writeUtf8Bom",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 531,
                                      "end": 552,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 535,
                                          "end": 551,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 535,
                                            "end": 540,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 543,
                                            "end": 551,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 544,
                                                "end": 550,
                                                "value": 84,
                                                "raw": "0x0054"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ForInStatement",
                                      "start": 565,
                                      "end": 650,
                                      "left": {
                                        "type": "VariableDeclaration",
                                        "start": 570,
                                        "end": 575,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 574,
                                            "end": 575,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 574,
                                              "end": 575,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": null,
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 579,
                                        "end": 584,
                                        "decorators": [],
                                        "name": "chars",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 586,
                                        "end": 650,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 604,
                                            "end": 636,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 604,
                                              "end": 635,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 604,
                                                "end": 625,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 604,
                                                  "end": 606,
                                                  "decorators": [],
                                                  "name": "fb",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 607,
                                                  "end": 625,
                                                  "decorators": [],
                                                  "name": "writeUtf8CodePoint",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "start": 626,
                                                  "end": 634,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 626,
                                                    "end": 631,
                                                    "decorators": [],
                                                    "name": "chars",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 632,
                                                    "end": 633,
                                                    "decorators": [],
                                                    "name": "i",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": true
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 663,
                                      "end": 676,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 663,
                                        "end": 675,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 663,
                                          "end": 671,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 663,
                                            "end": 665,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 666,
                                            "end": 671,
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 674,
                                          "end": 675,
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 689,
                                      "end": 704,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 693,
                                          "end": 703,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 693,
                                            "end": 698,
                                            "decorators": [],
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 701,
                                            "end": 703,
                                            "elements": []
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ForStatement",
                                      "start": 717,
                                      "end": 804,
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "start": 722,
                                        "end": 731,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 726,
                                            "end": 731,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 726,
                                              "end": 727,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 730,
                                              "end": 731,
                                              "value": 0,
                                              "raw": "0"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 733,
                                        "end": 739,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 733,
                                          "end": 734,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "start": 737,
                                          "end": 739,
                                          "value": 14,
                                          "raw": "14"
                                        }
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "start": 741,
                                        "end": 744,
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 741,
                                          "end": 742,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 746,
                                        "end": 804,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 764,
                                            "end": 790,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 764,
                                              "end": 789,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 764,
                                                "end": 774,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 764,
                                                  "end": 769,
                                                  "decorators": [],
                                                  "name": "bytes",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 770,
                                                  "end": 774,
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "start": 775,
                                                  "end": 788,
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "start": 775,
                                                    "end": 786,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 775,
                                                      "end": 777,
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 778,
                                                      "end": 786,
                                                      "decorators": [],
                                                      "name": "readByte",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 817,
                                      "end": 839,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 821,
                                          "end": 838,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 821,
                                            "end": 829,
                                            "decorators": [],
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 832,
                                            "end": 838,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 833,
                                                "end": 837,
                                                "value": 239,
                                                "raw": "0xEF"
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
                                      "start": 852,
                                      "end": 900,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 859,
                                        "end": 899,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 859,
                                          "end": 882,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 859,
                                            "end": 869,
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 870,
                                            "end": 882,
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 883,
                                            "end": 888,
                                            "decorators": [],
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "Identifier",
                                            "start": 890,
                                            "end": 898,
                                            "decorators": [],
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              }
                            ]
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 919,
                      "end": 937,
                      "argument": {
                        "type": "Identifier",
                        "start": 926,
                        "end": 936,
                        "decorators": [],
                        "name": "testRunner",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
