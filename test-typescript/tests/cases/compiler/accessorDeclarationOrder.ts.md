__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 411,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 160,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 160,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 29,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 20,
              "name": "name"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 87,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 87,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 87,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 63,
                    "end": 81,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 70,
                      "end": 80,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 70,
                        "end": 74
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 75,
                        "end": 80,
                        "name": "name"
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
            "start": 93,
            "end": 158,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 158,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 134,
                    "end": 152,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 134,
                      "end": 151,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 134,
                        "end": 144,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 139,
                          "end": 144,
                          "name": "name"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 151,
                        "decorators": [],
                        "name": "name",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 122,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 116,
                      "end": 122
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 162,
      "end": 322,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 171,
        "end": 322,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 177,
            "end": 191,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 177,
              "end": 182,
              "name": "name"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 262,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 213,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 213,
              "end": 262,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 228,
                "end": 262,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 238,
                    "end": 256,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 238,
                      "end": 255,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 238,
                        "end": 248,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 238,
                          "end": 242
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 243,
                          "end": 248,
                          "name": "name"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 255,
                        "decorators": [],
                        "name": "name",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 214,
                  "end": 226,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 218,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 220,
                      "end": 226
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 320,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 283,
              "end": 320,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 320,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 296,
                    "end": 314,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 303,
                      "end": 313,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 303,
                        "end": 307
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 308,
                        "end": 313,
                        "name": "name"
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
        "start": 168,
        "end": 170,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 343,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 332,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 335,
            "end": 343,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 339,
              "end": 341,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 364,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 353,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 356,
            "end": 364,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 360,
              "end": 362,
              "decorators": [],
              "name": "C2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 388,
      "expression": {
        "type": "MemberExpression",
        "start": 380,
        "end": 387,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 380,
          "end": 382,
          "decorators": [],
          "name": "c1",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 383,
          "end": 387,
          "decorators": [],
          "name": "name",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 410,
      "expression": {
        "type": "MemberExpression",
        "start": 402,
        "end": 409,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 402,
          "end": 404,
          "decorators": [],
          "name": "c2",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 405,
          "end": 409,
          "decorators": [],
          "name": "name",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
