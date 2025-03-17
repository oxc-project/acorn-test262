__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 79,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 32,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 32,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 31,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "value": 3,
                    "raw": "3"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 37,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 45,
              "end": 77,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 55,
                  "end": 71,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 57,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 57,
                    "end": 71,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 61,
                        "end": 66,
                        "left": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 68,
                      "end": 71,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 81,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 181,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 96,
            "end": 179,
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 104,
              "end": 179,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 114,
                  "end": 173,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 117,
                    "name": "fn2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 117,
                    "end": 173,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 173,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 134,
                          "end": 140,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 138,
                              "end": 139,
                              "id": {
                                "type": "Identifier",
                                "start": 138,
                                "end": 139,
                                "name": "M",
                                "typeAnnotation": null,
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
                          "start": 153,
                          "end": 163,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 157,
                              "end": 162,
                              "id": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
                                "name": "p",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 183,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 191,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 192,
        "end": 309,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 198,
            "end": 307,
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 206,
              "end": 307,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 301,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 219,
                    "name": "fn3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 219,
                    "end": 301,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 222,
                      "end": 301,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 236,
                          "end": 291,
                          "id": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 246,
                            "name": "M",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 249,
                            "end": 291,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 267,
                                "end": 277,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 271,
                                    "end": 276,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 271,
                                      "end": 272,
                                      "name": "p",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 275,
                                      "end": 276,
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 311,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 319,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 320,
        "end": 385,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 344,
            "end": 383,
            "id": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 352,
              "end": 383,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 362,
                  "end": 377,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 363,
                    "end": 377,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 366,
                      "end": 377,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
