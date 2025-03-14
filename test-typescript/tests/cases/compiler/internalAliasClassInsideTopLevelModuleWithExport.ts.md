__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 103,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 103,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 101,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 101,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 101,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 47,
                      "end": 95,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 50,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 50,
                        "end": 95,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 62,
                          "end": 95,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 76,
                              "end": 85,
                              "argument": {
                                "type": "Identifier",
                                "start": 83,
                                "end": 84,
                                "decorators": [],
                                "name": "a",
                                "optional": false
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
                            "start": 51,
                            "end": 60,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 52,
                              "end": 60,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 54,
                                "end": 60
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "implements": [],
                "superClass": null
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
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 128,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 112,
        "end": 128,
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 121,
          "decorators": [],
          "name": "xc",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 124,
          "end": 127,
          "left": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 129,
      "end": 157,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 136,
        "end": 157,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 140,
            "end": 156,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 145,
              "decorators": [],
              "name": "cProp",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 148,
              "end": 156,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "decorators": [],
                "name": "xc",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 172,
            "decorators": [],
            "name": "cReturnVal",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 175,
            "end": 188,
            "arguments": [
              {
                "type": "Literal",
                "start": 185,
                "end": 187,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 175,
              "end": 184,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 175,
                "end": 180,
                "decorators": [],
                "name": "cProp",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
