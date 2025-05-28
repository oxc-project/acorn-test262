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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 31,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 37,
            "end": 77,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 45,
              "end": 77,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 55,
                  "end": 71,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 57,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 57,
                    "end": 71,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 61,
                        "end": 66,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 68,
                      "end": 71,
                      "body": []
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 104,
              "end": 179,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 114,
                  "end": 173,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 117,
                    "decorators": [],
                    "name": "fn2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 117,
                    "end": 173,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 173,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 134,
                          "end": 140,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 138,
                              "end": 139,
                              "id": {
                                "type": "Identifier",
                                "start": 138,
                                "end": 139,
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 153,
                          "end": 163,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 157,
                              "end": 162,
                              "id": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
                                "decorators": [],
                                "name": "p",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 206,
              "end": 307,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 301,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 219,
                    "decorators": [],
                    "name": "fn3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 219,
                    "end": 301,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "decorators": [],
                            "name": "M",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 249,
                            "end": 291,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 267,
                                "end": 277,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 271,
                                    "end": 276,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 271,
                                      "end": 272,
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 275,
                                      "end": 276,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              }
                            ]
                          },
                          "expression": false
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 352,
              "end": 383,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 362,
                  "end": 377,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 363,
                    "end": 377,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 366,
                      "end": 377,
                      "body": []
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
