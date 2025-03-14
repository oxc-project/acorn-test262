__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 214,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 213,
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 74,
            "end": 211,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 81,
              "end": 211,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 92,
                "end": 211,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 102,
                    "end": 132,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 117,
                      "decorators": [],
                      "name": "funcData",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "CallExpression",
                      "start": 120,
                      "end": 131,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 120,
                        "end": 129,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 120,
                          "end": 124,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 121,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 124,
                            "decorators": [],
                            "name": "AA",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 129,
                          "decorators": [],
                          "name": "func",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 141,
                    "end": 169,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 157,
                      "decorators": [],
                      "name": "someConst",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "MemberExpression",
                      "start": 160,
                      "end": 168,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 160,
                        "end": 164,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 161,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 164,
                          "decorators": [],
                          "name": "AA",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 168,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 179,
                    "end": 205,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 190,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 190,
                      "end": 205,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 203,
                        "end": 205,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 191,
                          "end": 201,
                          "decorators": [],
                          "name": "parameters",
                          "optional": false
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
                "start": 87,
                "end": 91,
                "decorators": [],
                "name": "Name",
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
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 105,
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 105,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 26,
            "end": 103,
            "body": {
              "type": "TSModuleBlock",
              "start": 39,
              "end": 103,
              "body": [
                {
                  "type": "TSDeclareFunction",
                  "start": 49,
                  "end": 73,
                  "async": false,
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 62,
                    "decorators": [],
                    "name": "func",
                    "optional": false
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 66,
                      "end": 72
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 97,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 96,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 94,
                        "end": 96,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "decorators": [],
              "name": "AA",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
