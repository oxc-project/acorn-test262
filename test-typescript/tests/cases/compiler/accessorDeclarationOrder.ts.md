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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 160,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 29,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 20,
              "name": "name"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 87,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 87,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 70,
                        "end": 74
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 75,
                        "end": 80,
                        "name": "name"
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 158,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 158,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 122,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 116,
                      "end": 122
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 139,
                          "end": 144,
                          "name": "name"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 151,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
            "accessibility": "private"
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
      "start": 162,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 170,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 171,
        "end": 322,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 177,
            "end": 191,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 177,
              "end": 182,
              "name": "name"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 262,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 213,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 213,
              "end": 262,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 214,
                  "end": 226,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 218,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 220,
                      "end": 226
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 238,
                          "end": 242
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 243,
                          "end": 248,
                          "name": "name"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 255,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 320,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 283,
              "end": 320,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 303,
                        "end": 307
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 308,
                        "end": 313,
                        "name": "name"
                      },
                      "computed": false,
                      "optional": false
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
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 343,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 332,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 335,
            "end": 343,
            "callee": {
              "type": "Identifier",
              "start": 339,
              "end": 341,
              "name": "C1",
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 353,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 356,
            "end": 364,
            "callee": {
              "type": "Identifier",
              "start": 360,
              "end": 362,
              "name": "C2",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 388,
      "expression": {
        "type": "MemberExpression",
        "start": 380,
        "end": 387,
        "object": {
          "type": "Identifier",
          "start": 380,
          "end": 382,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 383,
          "end": 387,
          "name": "name",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 410,
      "expression": {
        "type": "MemberExpression",
        "start": 402,
        "end": 409,
        "object": {
          "type": "Identifier",
          "start": 402,
          "end": 404,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 405,
          "end": 409,
          "name": "name",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
