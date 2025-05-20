__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 237,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 237,
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
                "definite": false,
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
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[A-Za-z]+$"
                  },
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
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
                "definite": false,
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
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[0-9]+$"
                  },
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 235,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 113,
              "end": 235,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 140,
                "end": 235,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 150,
                    "end": 229,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 162,
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 162,
                      "end": 229,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 175,
                        "end": 229,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 189,
                            "end": 219,
                            "argument": {
                              "type": "CallExpression",
                              "start": 196,
                              "end": 218,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 215,
                                  "end": 217,
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 196,
                                "end": 214,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 196,
                                  "end": 209,
                                  "decorators": [],
                                  "name": "lettersRegexp",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 210,
                                  "end": 214,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 163,
                          "end": 173,
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 165,
                            "end": 173,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 167,
                              "end": 173
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 119,
                "end": 139,
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
