__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 61,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 61,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 45,
                    "end": 55,
                    "argument": {
                      "type": "Literal",
                      "start": 52,
                      "end": 54,
                      "raw": "\"\"",
                      "value": ""
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
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 93,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 82,
                    "end": 91,
                    "argument": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "raw": "1",
                      "value": 1
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
                "start": 71,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 73,
                  "end": 79
                }
              },
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 161,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 161,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 159,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 131,
              "end": 159,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 159,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 144,
                    "end": 153,
                    "argument": {
                      "type": "Literal",
                      "start": 151,
                      "end": 152,
                      "raw": "1",
                      "value": 1
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 115,
          "end": 116,
          "expression": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 184,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 171,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 180,
        "end": 181,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 194,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 196,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 206,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 206,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 206,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 208,
      "end": 215,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 208,
        "end": 214,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 212,
          "end": 214,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 216,
          "end": 218,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 232,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 231,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 224,
          "end": 229,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "decorators": [],
            "name": "bar",
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
      "start": 242,
      "end": 251,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 250,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 242,
          "end": 248,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 242,
            "end": 244,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 248,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
