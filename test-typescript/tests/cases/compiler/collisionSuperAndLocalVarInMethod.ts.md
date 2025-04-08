__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 320,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "_super",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 93,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 59,
                    "end": 75,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 63,
                        "end": 74,
                        "id": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 69,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 72,
                          "end": 74,
                          "value": 10,
                          "raw": "10"
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
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 189,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 187,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 187,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 187,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 145,
                    "end": 161,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 160,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 155,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 158,
                          "end": 160,
                          "value": 10,
                          "raw": "10"
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
      "type": "ClassDeclaration",
      "start": 190,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 197,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 206,
        "end": 209,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 320,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 318,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 318,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 229,
                "end": 318,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 239,
                    "end": 312,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 243,
                        "end": 312,
                        "id": {
                          "type": "Identifier",
                          "start": 243,
                          "end": 244,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 247,
                          "end": 312,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 253,
                            "end": 312,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 267,
                                "end": 283,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 271,
                                    "end": 282,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 271,
                                      "end": 277,
                                      "name": "_super",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 280,
                                      "end": 282,
                                      "value": 10,
                                      "raw": "10"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
