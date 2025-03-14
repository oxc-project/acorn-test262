__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "'./b'",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 132,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 132,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 131,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 42,
              "end": 131,
              "properties": [
                {
                  "type": "Property",
                  "start": 48,
                  "end": 129,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 51,
                    "end": 129,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 129,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 67,
                          "end": 78,
                          "abstract": false,
                          "body": {
                            "type": "ClassBody",
                            "start": 75,
                            "end": 78,
                            "body": []
                          },
                          "declare": false,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "implements": [],
                          "superClass": null
                        },
                        {
                          "type": "ClassDeclaration",
                          "start": 87,
                          "end": 108,
                          "abstract": false,
                          "body": {
                            "type": "ClassBody",
                            "start": 105,
                            "end": 108,
                            "body": []
                          },
                          "declare": false,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          },
                          "implements": [],
                          "superClass": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 117,
                          "end": 123,
                          "expression": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 122,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 117,
                              "end": 120,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 117,
                                "end": 118,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "f",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 132,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 132,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 132,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 131,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 42,
              "end": 131,
              "properties": [
                {
                  "type": "Property",
                  "start": 48,
                  "end": 129,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 51,
                    "end": 129,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 129,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 67,
                          "end": 78,
                          "abstract": false,
                          "body": {
                            "type": "ClassBody",
                            "start": 75,
                            "end": 78,
                            "body": []
                          },
                          "declare": false,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "implements": [],
                          "superClass": null
                        },
                        {
                          "type": "ClassDeclaration",
                          "start": 87,
                          "end": 108,
                          "abstract": false,
                          "body": {
                            "type": "ClassBody",
                            "start": 105,
                            "end": 108,
                            "body": []
                          },
                          "declare": false,
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          },
                          "implements": [],
                          "superClass": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 117,
                          "end": 123,
                          "expression": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 122,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 117,
                              "end": 120,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 117,
                                "end": 118,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "f",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
