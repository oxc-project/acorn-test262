__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "Validation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 293,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 62,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 46,
                  "name": "lettersRegexp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 49,
                  "end": 62,
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[A-Za-z]+$"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 68,
            "end": 100,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 74,
                "end": 99,
                "id": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 86,
                  "name": "numberRegexp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 89,
                  "end": 99,
                  "value": null,
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[0-9]+$"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 105,
            "end": 156,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 112,
              "end": 156,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 155,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 139,
                    "name": "anotherUnusedVariable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 142,
                    "end": 155,
                    "value": "Dummy value",
                    "raw": "\"Dummy value\""
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 291,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 169,
              "end": 291,
              "id": {
                "type": "Identifier",
                "start": 175,
                "end": 195,
                "name": "LettersOnlyValidator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 196,
                "end": 291,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 206,
                    "end": 285,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 218,
                      "name": "isAcceptable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 218,
                      "end": 285,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 219,
                          "end": 229,
                          "name": "s2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 221,
                            "end": 229,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 223,
                              "end": 229
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 231,
                        "end": 285,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 245,
                            "end": 275,
                            "argument": {
                              "type": "CallExpression",
                              "start": 252,
                              "end": 274,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 252,
                                "end": 270,
                                "object": {
                                  "type": "Identifier",
                                  "start": 252,
                                  "end": 265,
                                  "name": "lettersRegexp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 270,
                                  "name": "test",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 273,
                                  "name": "s2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
