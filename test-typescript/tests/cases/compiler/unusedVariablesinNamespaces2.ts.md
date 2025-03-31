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
            "start": 106,
            "end": 235,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 113,
              "end": 235,
              "id": {
                "type": "Identifier",
                "start": 119,
                "end": 139,
                "name": "LettersOnlyValidator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 140,
                "end": 235,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 150,
                    "end": 229,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 162,
                      "name": "isAcceptable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 162,
                      "end": 229,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 163,
                          "end": 173,
                          "name": "s2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 165,
                            "end": 173,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 167,
                              "end": 173
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 196,
                                "end": 214,
                                "object": {
                                  "type": "Identifier",
                                  "start": 196,
                                  "end": 209,
                                  "name": "lettersRegexp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 210,
                                  "end": 214,
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
                                  "start": 215,
                                  "end": 217,
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
