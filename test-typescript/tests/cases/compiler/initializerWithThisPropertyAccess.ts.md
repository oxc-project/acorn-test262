__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 421,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 141,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 40,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 33,
              "end": 39,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 33,
                "end": 37
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 72,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 59,
              "end": 71,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 65,
                "end": 71,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 65,
                  "end": 69
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 77,
            "end": 93,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 81,
              "end": 92,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 82,
                "end": 89,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 139,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 109,
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
              "start": 109,
              "end": 139,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 139,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 122,
                    "end": 133,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 122,
                      "end": 132,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 122,
                        "end": 128,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 122,
                          "end": 126
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 131,
                        "end": 132,
                        "raw": "1",
                        "value": 1
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 178,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 171,
              "end": 177,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 171,
                "end": 175
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 150,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 225,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 196,
            "end": 207,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 200,
                "end": 206
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 223,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 216,
              "end": 222,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 216,
                "end": 220
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 189,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 249,
      "end": 378,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 378,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 265,
            "end": 282,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 276,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 281,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 287,
            "end": 320,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 303,
              "decorators": [],
              "name": "barProp",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 306,
              "end": 319,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 306,
                "end": 314,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 306,
                  "end": 310
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 314,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 315,
                "end": 319,
                "decorators": [],
                "name": "prop",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 325,
            "end": 376,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 336,
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
              "start": 336,
              "end": 376,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 339,
                "end": 376,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 349,
                    "end": 370,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 349,
                      "end": 369,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 349,
                        "end": 357,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 349,
                          "end": 353
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 357,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 360,
                        "end": 369,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 367,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false
                        }
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
        "start": 255,
        "end": 258,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 380,
      "end": 420,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 390,
        "end": 420,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 396,
            "end": 418,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 409,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 412,
              "end": 417,
              "raw": "false",
              "value": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 389,
        "decorators": [],
        "name": "Bar",
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
