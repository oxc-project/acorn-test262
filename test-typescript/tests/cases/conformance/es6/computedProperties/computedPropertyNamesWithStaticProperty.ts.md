__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 377,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 186,
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
        "end": 186,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 38,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 32,
              "name": "staticProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 35,
              "end": 37,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 96,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 48,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 48,
                "end": 50,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 51,
                "end": 61,
                "name": "staticProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 96,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 96,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 90,
                    "argument": {
                      "type": "Literal",
                      "start": 82,
                      "end": 89,
                      "value": "hello",
                      "raw": "\"hello\""
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
          },
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 158,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 106,
              "end": 119,
              "object": {
                "type": "Identifier",
                "start": 106,
                "end": 108,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 119,
                "name": "staticProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 158,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 121,
                  "end": 130,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 122,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 124,
                      "end": 130
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 158,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 142,
                    "end": 152,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 146,
                        "end": 151,
                        "id": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 184,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 164,
              "end": 177,
              "object": {
                "type": "Identifier",
                "start": 164,
                "end": 166,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 167,
                "end": 177,
                "name": "staticProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 184,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 184,
                "body": []
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
      "type": "ExpressionStatement",
      "start": 188,
      "end": 376,
      "expression": {
        "type": "ClassExpression",
        "start": 189,
        "end": 375,
        "id": {
          "type": "Identifier",
          "start": 195,
          "end": 197,
          "name": "C2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 198,
          "end": 375,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 204,
              "end": 227,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 211,
                "end": 221,
                "name": "staticProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 224,
                "end": 226,
                "value": 10,
                "raw": "10"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 232,
              "end": 285,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 237,
                "end": 250,
                "object": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 239,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 250,
                  "name": "staticProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 251,
                "end": 285,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 254,
                  "end": 285,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 264,
                      "end": 279,
                      "argument": {
                        "type": "Literal",
                        "start": 271,
                        "end": 278,
                        "value": "hello",
                        "raw": "\"hello\""
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
            },
            {
              "type": "MethodDefinition",
              "start": 290,
              "end": 347,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 295,
                "end": 308,
                "object": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 297,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 308,
                  "name": "staticProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 309,
                "end": 347,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 310,
                    "end": 319,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 311,
                      "end": 319,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 313,
                        "end": 319
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 321,
                  "end": 347,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 331,
                      "end": 341,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 335,
                          "end": 340,
                          "id": {
                            "type": "Identifier",
                            "start": 335,
                            "end": 336,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 340,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
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
            },
            {
              "type": "MethodDefinition",
              "start": 352,
              "end": 373,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 353,
                "end": 366,
                "object": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 355,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 366,
                  "name": "staticProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 367,
                "end": 373,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 370,
                  "end": 373,
                  "body": []
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
