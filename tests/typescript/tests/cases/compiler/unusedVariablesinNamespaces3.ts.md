__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lettersRegexp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 46
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "pattern": "^[A-Za-z]+$",
                    "flags": ""
                  },
                  "start": 49,
                  "end": 62
                },
                "definite": false,
                "start": 33,
                "end": 62
              }
            ],
            "declare": false,
            "start": 27,
            "end": 63
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberRegexp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 86
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "pattern": "^[0-9]+$",
                    "flags": ""
                  },
                  "start": 89,
                  "end": 99
                },
                "definite": false,
                "start": 74,
                "end": 99
              }
            ],
            "declare": false,
            "start": 68,
            "end": 100
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anotherUnusedVariable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 139
                  },
                  "init": {
                    "type": "Literal",
                    "value": "Dummy value",
                    "raw": "\"Dummy value\"",
                    "start": 142,
                    "end": 155
                  },
                  "definite": false,
                  "start": 118,
                  "end": 155
                }
              ],
              "declare": false,
              "start": 112,
              "end": 156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 105,
            "end": 156
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 195
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 218
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 223,
                              "end": 229
                            },
                            "start": 221,
                            "end": 229
                          },
                          "start": 219,
                          "end": 229
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "lettersRegexp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 252,
                                  "end": 265
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 266,
                                  "end": 270
                                },
                                "optional": false,
                                "computed": false,
                                "start": 252,
                                "end": 270
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 271,
                                  "end": 273
                                }
                              ],
                              "optional": false,
                              "start": 252,
                              "end": 274
                            },
                            "start": 245,
                            "end": 275
                          }
                        ],
                        "start": 231,
                        "end": 285
                      },
                      "expression": false,
                      "start": 218,
                      "end": 285
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 206,
                    "end": 285
                  }
                ],
                "start": 196,
                "end": 291
              },
              "abstract": false,
              "declare": false,
              "start": 169,
              "end": 291
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 162,
            "end": 291
          }
        ],
        "start": 21,
        "end": 293
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 293
}
```
