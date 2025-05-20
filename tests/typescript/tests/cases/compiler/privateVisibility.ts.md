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
      "end": 117,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 117,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 48,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "pubMeth",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 48,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 31,
                    "end": 47,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 31,
                      "end": 46,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 31,
                        "end": 44,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 31,
                          "end": 35
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 44,
                          "decorators": [],
                          "name": "privMeth",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 71,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 66,
              "decorators": [],
              "name": "privMeth",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 71,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 92,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 87,
              "decorators": [],
              "name": "pubProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 90,
              "end": 91,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 115,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 110,
              "decorators": [],
              "name": "privProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 113,
              "end": 114,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 127,
            "end": 136,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 138,
        "end": 150,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 138,
          "end": 148,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 140,
            "end": 148,
            "decorators": [],
            "name": "privMeth",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 182,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 171,
        "end": 181,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 173,
          "end": 181,
          "decorators": [],
          "name": "privProp",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 215,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 203,
        "end": 214,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 203,
          "end": 212,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 212,
            "decorators": [],
            "name": "pubMeth",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 241,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 231,
        "end": 240,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 233,
          "end": 240,
          "decorators": [],
          "name": "pubProp",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 258,
      "end": 349,
      "body": {
        "type": "TSModuleBlock",
        "start": 267,
        "end": 349,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 273,
            "end": 325,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 280,
              "end": 325,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 288,
                "end": 325,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 290,
                    "end": 305,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 300,
                      "decorators": [],
                      "name": "pub",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 303,
                      "end": 304,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 306,
                    "end": 323,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 318,
                      "decorators": [],
                      "name": "priv",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 321,
                      "end": 322,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 330,
            "end": 347,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 337,
              "end": 347,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 341,
                  "end": 346,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 345,
                    "end": 346,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 265,
        "end": 266,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 369,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 360,
            "end": 369,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 364,
              "end": 367,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 364,
                "end": 365,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 366,
                "end": 367,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 378,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 372,
        "end": 377,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 372,
          "end": 373,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 374,
          "end": 377,
          "decorators": [],
          "name": "pub",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 401,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 394,
        "end": 400,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 394,
          "end": 395,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 396,
          "end": 400,
          "decorators": [],
          "name": "priv",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
