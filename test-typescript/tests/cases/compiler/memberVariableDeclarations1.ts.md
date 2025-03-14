memberVariableDeclarations1.ts
```json
{
  "type": "Program",
  "start": 14,
  "end": 520,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 187,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 187,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 55,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 83,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 74,
              "decorators": [],
              "name": "address",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 111,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 102,
              "decorators": [],
              "name": "retired",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 105,
              "end": 110,
              "raw": "false",
              "value": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 148,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 130,
              "decorators": [],
              "name": "manager",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 140,
                  "decorators": [],
                  "name": "Employee",
                  "optional": false
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 143,
              "end": 147,
              "raw": "null",
              "value": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 153,
            "end": 185,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 167,
              "decorators": [],
              "name": "reports",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 179,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 169,
                "end": 179,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 177,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 177,
                    "decorators": [],
                    "name": "Employee",
                    "optional": false
                  }
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 182,
              "end": 184,
              "elements": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 28,
        "decorators": [],
        "name": "Employee",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 464,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 464,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 211,
            "end": 231,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 222,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 236,
            "end": 259,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 250,
              "decorators": [],
              "name": "address",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 258,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 252,
                "end": 258
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 264,
            "end": 288,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 278,
              "decorators": [],
              "name": "retired",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 287,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 280,
                "end": 287
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 293,
            "end": 318,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 307,
              "decorators": [],
              "name": "manager",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 317,
                  "decorators": [],
                  "name": "Employee",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 323,
            "end": 350,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 337,
              "decorators": [],
              "name": "reports",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 349,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 339,
                "end": 349,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 339,
                  "end": 347,
                  "typeName": {
                    "type": "Identifier",
                    "start": 339,
                    "end": 347,
                    "decorators": [],
                    "name": "Employee",
                    "optional": false
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 355,
            "end": 462,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 366,
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
              "start": 366,
              "end": 462,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 369,
                "end": 462,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 379,
                    "end": 400,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 379,
                      "end": 399,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 379,
                        "end": 391,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 379,
                          "end": 383
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 391,
                          "decorators": [],
                          "name": "retired",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 394,
                        "end": 399,
                        "raw": "false",
                        "value": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 409,
                    "end": 429,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 409,
                      "end": 428,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 409,
                        "end": 421,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 409,
                          "end": 413
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 414,
                          "end": 421,
                          "decorators": [],
                          "name": "manager",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 424,
                        "end": 428,
                        "raw": "null",
                        "value": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 438,
                    "end": 456,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 438,
                      "end": 455,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 438,
                        "end": 450,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 438,
                          "end": 442
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 450,
                          "decorators": [],
                          "name": "reports",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 453,
                        "end": 455,
                        "elements": []
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
        "start": 195,
        "end": 204,
        "decorators": [],
        "name": "Employee2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 482,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 482,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 482,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 474,
                "end": 482,
                "typeName": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 482,
                  "decorators": [],
                  "name": "Employee",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 484,
      "end": 502,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 501,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 501,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 492,
                "end": 501,
                "typeName": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 501,
                  "decorators": [],
                  "name": "Employee2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 503,
      "end": 511,
      "expression": {
        "type": "AssignmentExpression",
        "start": 503,
        "end": 510,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 503,
          "end": 505,
          "decorators": [],
          "name": "e1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 508,
          "end": 510,
          "decorators": [],
          "name": "e2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 520,
      "expression": {
        "type": "AssignmentExpression",
        "start": 512,
        "end": 519,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 512,
          "end": 514,
          "decorators": [],
          "name": "e2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 517,
          "end": 519,
          "decorators": [],
          "name": "e1",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
