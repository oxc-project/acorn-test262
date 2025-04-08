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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 61,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 61,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
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
            "start": 66,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 71,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 73,
                  "end": 79
                }
              }
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
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 161,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 159,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 131,
              "end": 159,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 115,
          "end": 116,
          "expression": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 171,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 180,
        "end": 181,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 184,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 194,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 206,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 206,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 206,
                  "name": "C2",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 215,
      "expression": {
        "type": "AssignmentExpression",
        "start": 208,
        "end": 214,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 212,
          "end": 214,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 223,
      "expression": {
        "type": "AssignmentExpression",
        "start": 216,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 216,
          "end": 218,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 232,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 231,
        "callee": {
          "type": "MemberExpression",
          "start": 224,
          "end": 229,
          "object": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "name": "bar",
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
      "type": "ExpressionStatement",
      "start": 242,
      "end": 251,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 250,
        "callee": {
          "type": "MemberExpression",
          "start": 242,
          "end": 248,
          "object": {
            "type": "Identifier",
            "start": 242,
            "end": 244,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 248,
            "name": "bar",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
