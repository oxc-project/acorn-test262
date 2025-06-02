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
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 62,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 46,
                  "decorators": [],
                  "name": "lettersRegexp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 49,
                  "end": 62,
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "pattern": "^[A-Za-z]+$",
                    "flags": ""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 68,
            "end": 100,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 74,
                "end": 99,
                "id": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 86,
                  "decorators": [],
                  "name": "numberRegexp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 89,
                  "end": 99,
                  "value": null,
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "pattern": "^[0-9]+$",
                    "flags": ""
                  }
                },
                "definite": false
              }
            ],
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 155,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 139,
                    "decorators": [],
                    "name": "anotherUnusedVariable",
                    "optional": false,
                    "typeAnnotation": null
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 291,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 169,
              "end": 291,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 175,
                "end": 195,
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 196,
                "end": 291,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 206,
                    "end": 285,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 218,
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 218,
                      "end": 285,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 219,
                          "end": 229,
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 221,
                            "end": 229,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 223,
                              "end": 229
                            }
                          }
                        }
                      ],
                      "returnType": null,
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
                                  "decorators": [],
                                  "name": "lettersRegexp",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 270,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 273,
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            }
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
