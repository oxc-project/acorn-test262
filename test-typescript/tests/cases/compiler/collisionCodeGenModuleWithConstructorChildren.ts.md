__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 96,
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
        "end": 96,
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
            "end": 94,
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
              "end": 94,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 55,
                  "end": 88,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 66,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 66,
                    "end": 88,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 70,
                        "end": 75,
                        "left": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 75,
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
                      "start": 77,
                      "end": 88,
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
      "start": 98,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 107,
        "end": 180,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 113,
            "end": 178,
            "id": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 121,
              "end": 178,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 131,
                  "end": 172,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 142,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 142,
                    "end": 172,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 143,
                        "end": 152,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "name": "M",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 154,
                        "end": 159,
                        "left": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 155,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 159,
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
                      "start": 161,
                      "end": 172,
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
      "start": 182,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 190,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 191,
        "end": 296,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 197,
            "end": 294,
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 205,
              "name": "d2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 206,
              "end": 294,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 288,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 227,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 227,
                    "end": 288,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 230,
                      "end": 288,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 244,
                          "end": 255,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 248,
                              "end": 254,
                              "id": {
                                "type": "Identifier",
                                "start": 248,
                                "end": 249,
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 252,
                                "end": 254,
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
                          "type": "VariableDeclaration",
                          "start": 268,
                          "end": 278,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 272,
                              "end": 277,
                              "id": {
                                "type": "Identifier",
                                "start": 272,
                                "end": 273,
                                "name": "p",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Identifier",
                                "start": 276,
                                "end": 277,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
