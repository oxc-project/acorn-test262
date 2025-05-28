__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 343,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 85,
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
      "typeParameters": null,
      "superClass": {
        "type": "ClassExpression",
        "start": 16,
        "end": 29,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 26,
          "decorators": [],
          "name": "Expr",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 27,
          "end": 29,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 85,
        "body": [
          {
            "type": "StaticBlock",
            "start": 36,
            "end": 83,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 53,
                "end": 77,
                "expression": {
                  "type": "CallExpression",
                  "start": 53,
                  "end": 76,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 53,
                    "end": 64,
                    "object": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 60,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 64,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 65,
                      "end": 75,
                      "object": {
                        "type": "Super",
                        "start": 65,
                        "end": 70
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 75,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 167,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 108,
        "decorators": [],
        "name": "Number",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 167,
        "body": [
          {
            "type": "StaticBlock",
            "start": 115,
            "end": 165,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 132,
                "end": 159,
                "expression": {
                  "type": "CallExpression",
                  "start": 132,
                  "end": 158,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 132,
                    "end": 143,
                    "object": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 139,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 143,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 144,
                      "end": 157,
                      "object": {
                        "type": "Super",
                        "start": 144,
                        "end": 149
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 157,
                        "decorators": [],
                        "name": "EPSILON",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 168,
      "end": 246,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 189,
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 246,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 244,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 199,
              "end": 244,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 202,
                "end": 244,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 212,
                    "end": 238,
                    "expression": {
                      "type": "CallExpression",
                      "start": 212,
                      "end": 237,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 212,
                        "end": 223,
                        "object": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 219,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 223,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 224,
                          "end": 236,
                          "object": {
                            "type": "Super",
                            "start": 224,
                            "end": 229
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 236,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 248,
      "end": 285,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 255,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 256,
        "end": 285,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 262,
            "end": 283,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 275,
              "end": 283,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 281,
                "end": 283,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 286,
      "end": 343,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 293,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 302,
        "end": 303,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 343,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 341,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 313,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 313,
              "end": 341,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 316,
                "end": 341,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 326,
                    "end": 335,
                    "expression": {
                      "type": "CallExpression",
                      "start": 326,
                      "end": 335,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 326,
                        "end": 333,
                        "object": {
                          "type": "Super",
                          "start": 326,
                          "end": 331
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 333,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
