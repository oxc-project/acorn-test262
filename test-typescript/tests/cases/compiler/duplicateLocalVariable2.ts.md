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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "name": "TestCase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 22,
          "end": 132,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 28,
              "end": 130,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 39,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 130,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "name",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 52,
                        "end": 60,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 54,
                          "end": 60
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                      "name": "test",
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
                      },
                      "decorators": [],
                      "optional": false
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
                      "name": "errorMessageRegEx",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 113,
                        "end": 121,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 115,
                          "end": 121
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 123,
                  "end": 130,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 294,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 140,
        "end": 294,
        "id": {
          "type": "Identifier",
          "start": 146,
          "end": 156,
          "name": "TestRunner",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 157,
          "end": 294,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 164,
              "end": 248,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 183,
                "name": "arrayCompare",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 183,
                "end": 248,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 184,
                    "end": 195,
                    "name": "arg1",
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
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 197,
                    "end": 208,
                    "name": "arg2",
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 209,
                  "end": 218,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 211,
                    "end": 218
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 254,
              "end": 292,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 261,
                "end": 268,
                "name": "addTest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 268,
                "end": 292,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 269,
                    "end": 283,
                    "name": "test",
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
                          "name": "TestCase",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 285,
                  "end": 292,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
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
      "type": "ExportNamedDeclaration",
      "start": 296,
      "end": 943,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 303,
        "end": 943,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 307,
            "end": 942,
            "id": {
              "type": "Identifier",
              "start": 307,
              "end": 324,
              "name": "tests",
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
                    "name": "TestRunner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
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
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 340,
                  "end": 939,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 346,
                      "end": 380,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 350,
                          "end": 379,
                          "id": {
                            "type": "Identifier",
                            "start": 350,
                            "end": 360,
                            "name": "testRunner",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 363,
                            "end": 379,
                            "callee": {
                              "type": "Identifier",
                              "start": 367,
                              "end": 377,
                              "name": "TestRunner",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
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
                            "name": "testRunner",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 397,
                            "end": 404,
                            "name": "addTest",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 405,
                            "end": 911,
                            "callee": {
                              "type": "Identifier",
                              "start": 409,
                              "end": 417,
                              "name": "TestCase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 461,
                                  "end": 910,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 475,
                                      "end": 487,
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 479,
                                          "end": 486,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 479,
                                            "end": 486,
                                            "name": "fb",
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 481,
                                              "end": 486,
                                              "typeAnnotation": {
                                                "type": "TSAnyKeyword",
                                                "start": 483,
                                                "end": 486
                                              }
                                            },
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "init": null,
                                          "definite": false
                                        }
                                      ],
                                      "kind": "var",
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
                                            "name": "fb",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 503,
                                            "end": 515,
                                            "name": "writeUtf8Bom",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 531,
                                      "end": 552,
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 535,
                                          "end": 551,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 535,
                                            "end": 540,
                                            "name": "chars",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
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
                                      "kind": "var",
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
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 574,
                                            "end": 575,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 574,
                                              "end": 575,
                                              "name": "i",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "init": null,
                                            "definite": false
                                          }
                                        ],
                                        "kind": "var",
                                        "declare": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 579,
                                        "end": 584,
                                        "name": "chars",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                                  "name": "fb",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 607,
                                                  "end": 625,
                                                  "name": "writeUtf8CodePoint",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              },
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "start": 626,
                                                  "end": 634,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 626,
                                                    "end": 631,
                                                    "name": "chars",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 632,
                                                    "end": 633,
                                                    "name": "i",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "computed": true,
                                                  "optional": false
                                                }
                                              ],
                                              "optional": false,
                                              "typeArguments": null
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
                                            "name": "fb",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 666,
                                            "end": 671,
                                            "name": "index",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
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
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 693,
                                          "end": 703,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 693,
                                            "end": 698,
                                            "name": "bytes",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
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
                                      "kind": "var",
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
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 726,
                                            "end": 731,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 726,
                                              "end": 727,
                                              "name": "i",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
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
                                        "kind": "var",
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
                                          "name": "i",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
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
                                          "name": "i",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
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
                                                  "name": "bytes",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 770,
                                                  "end": 774,
                                                  "name": "push",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              },
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
                                                      "name": "fb",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 778,
                                                      "end": 786,
                                                      "name": "readByte",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "computed": false,
                                                    "optional": false
                                                  },
                                                  "arguments": [],
                                                  "optional": false,
                                                  "typeArguments": null
                                                }
                                              ],
                                              "optional": false,
                                              "typeArguments": null
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
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 821,
                                          "end": 838,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 821,
                                            "end": 829,
                                            "name": "expected",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
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
                                      "kind": "var",
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
                                            "name": "TestRunner",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 870,
                                            "end": 882,
                                            "name": "arrayCompare",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 883,
                                            "end": 888,
                                            "name": "bytes",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          {
                                            "type": "Identifier",
                                            "start": 890,
                                            "end": 898,
                                            "name": "expected",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        ],
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
                              }
                            ],
                            "typeArguments": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
                        "name": "testRunner",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
