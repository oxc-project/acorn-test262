__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 153,
  "end": 494,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 167,
            "decorators": [],
            "name": "𐊧",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 167,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 161,
                "end": 167
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
      "start": 169,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 190,
            "decorators": [],
            "name": "𐊧",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
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
      "type": "IfStatement",
      "start": 193,
      "end": 267,
      "alternate": {
        "type": "BlockStatement",
        "start": 239,
        "end": 267,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 245,
            "end": 265,
            "expression": {
              "type": "AssignmentExpression",
              "start": 245,
              "end": 264,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 245,
                "end": 254,
                "decorators": [],
                "name": "𐊧",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 257,
                "end": 264,
                "raw": "\"hallo\"",
                "value": "hallo"
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 212,
        "end": 233,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 218,
            "end": 231,
            "expression": {
              "type": "AssignmentExpression",
              "start": 218,
              "end": 230,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 218,
                "end": 220,
                "decorators": [],
                "name": "𐊧",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 223,
                "end": 230,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 197,
        "end": 210,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 197,
          "end": 208,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 197,
            "end": 201,
            "decorators": [],
            "name": "Math",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 202,
            "end": 208,
            "decorators": [],
            "name": "random",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 269,
      "end": 412,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 279,
        "end": 412,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 285,
            "end": 303,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 294,
              "decorators": [],
              "name": "𐊧",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 302,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 296,
                "end": 302
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 308,
            "end": 364,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 319,
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
              "start": 319,
              "end": 364,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 322,
                "end": 364,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 332,
                    "end": 358,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 332,
                      "end": 357,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 332,
                        "end": 346,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 332,
                          "end": 336
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 337,
                          "end": 346,
                          "decorators": [],
                          "name": "𐊧",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 349,
                        "end": 357,
                        "raw": "\" world\"",
                        "value": " world"
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
            "start": 369,
            "end": 410,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 369,
              "end": 376,
              "decorators": [],
              "name": "methodA",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 376,
              "end": 410,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 379,
                "end": 410,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 389,
                    "end": 404,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 396,
                      "end": 403,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 396,
                        "end": 400
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 403,
                        "decorators": [],
                        "name": "𐊧",
                        "optional": false
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
        "start": 275,
        "end": 278,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 414,
      "end": 473,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 421,
        "end": 473,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 425,
            "end": 472,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 425,
              "end": 428,
              "decorators": [],
              "name": "_𐊧",
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 431,
              "end": 472,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 431,
                "end": 450,
                "computed": false,
                "object": {
                  "type": "NewExpression",
                  "start": 431,
                  "end": 440,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 438,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 450,
                  "decorators": [],
                  "name": "𐊧",
                  "optional": false
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 453,
                "end": 472,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 453,
                  "end": 470,
                  "computed": false,
                  "object": {
                    "type": "NewExpression",
                    "start": 453,
                    "end": 462,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 457,
                      "end": 460,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 470,
                    "decorators": [],
                    "name": "methodA",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 475,
      "end": 493,
      "expression": {
        "type": "AssignmentExpression",
        "start": 475,
        "end": 492,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 475,
          "end": 485,
          "decorators": [],
          "name": "_𐊧",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 489,
          "end": 492,
          "raw": "\"!\"",
          "value": "!"
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Invalid character.
```
