__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 360,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7,
                "end": 10,
                "literal": {
                  "type": "Literal",
                  "start": 7,
                  "end": 10,
                  "raw": "\"p\"",
                  "value": "p"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 16,
            "raw": "\"p\"",
            "value": "p"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 197,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 197,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 41,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 35,
              "end": 41,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 35,
                "end": 39
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 47,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 61,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 89,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 67,
              "end": 77,
              "raw": "\"computed\"",
              "value": "computed"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 81,
              "end": 83,
              "raw": "13",
              "value": 13
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 89,
            "end": 97,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 95,
              "end": 97,
              "raw": "14",
              "value": 14
            }
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 109,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 109,
                "body": []
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
            "start": 114,
            "end": 156,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
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
              "start": 125,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 156,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 126,
                  "end": 151,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 151,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 145,
                        "end": 151
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 161,
            "end": 171,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 165,
              "end": 171,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 165,
                "end": 169
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 195,
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 194,
              "decorators": [],
              "name": "notEmitted",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 223,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 223,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 221,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 224,
      "end": 359,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 242,
        "end": 359,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 248,
            "end": 265,
            "accessibility": "public",
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 270,
            "end": 281,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 274,
              "end": 281,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 274,
                "end": 278
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 279,
                "end": 281,
                "decorators": [],
                "name": "ka",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 286,
            "end": 340,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 286,
              "end": 297,
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
              "start": 297,
              "end": 340,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 317,
                "end": 340,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 327,
                    "end": 334,
                    "expression": {
                      "type": "CallExpression",
                      "start": 327,
                      "end": 334,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 327,
                        "end": 332
                      },
                      "optional": false
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
                  "type": "TSParameterProperty",
                  "start": 298,
                  "end": 315,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 315,
                    "decorators": [],
                    "name": "ka",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 307,
                      "end": 315,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 309,
                        "end": 315
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
            "type": "PropertyDefinition",
            "start": 345,
            "end": 357,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 347,
              "decorators": [],
              "name": "ki",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 350,
              "end": 357,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 350,
                "end": 354
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 355,
                "end": 357,
                "decorators": [],
                "name": "ka",
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
        "start": 230,
        "end": 231,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
