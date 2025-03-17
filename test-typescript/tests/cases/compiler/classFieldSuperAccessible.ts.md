__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "ClassExpression",
        "start": 16,
        "end": 29,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 26,
          "name": "Expr",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 27,
          "end": 29,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
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
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 64,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
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
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              }
            ]
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
      "start": 86,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 108,
        "name": "Number",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 143,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
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
                        "name": "EPSILON",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              }
            ]
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
      "start": 168,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 189,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 246,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 244,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 199,
              "end": 244,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 223,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
      "start": 248,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 255,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 256,
        "end": 285,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 262,
            "end": 283,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 275,
              "end": 283,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 281,
                "end": 283,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
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
      "start": 286,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 293,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 302,
        "end": 303,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 343,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 341,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 313,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 313,
              "end": 341,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "b",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
