__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
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
        "value": "./b",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 94,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 93,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 42,
              "end": 93,
              "properties": [
                {
                  "type": "Property",
                  "start": 48,
                  "end": 91,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 51,
                    "end": 91,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 63,
                      "end": 91,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 73,
                          "end": 85,
                          "directive": null,
                          "expression": {
                            "type": "AwaitExpression",
                            "start": 73,
                            "end": 84,
                            "argument": {
                              "type": "CallExpression",
                              "start": 79,
                              "end": 84,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 79,
                                "end": 82,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 79,
                                  "end": 80,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 81,
                                  "end": 82,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
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
  "end": 94,
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
        "value": "./a",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 94,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 93,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 42,
              "end": 93,
              "properties": [
                {
                  "type": "Property",
                  "start": 48,
                  "end": 91,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 51,
                    "end": 91,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 63,
                      "end": 91,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 73,
                          "end": 85,
                          "directive": null,
                          "expression": {
                            "type": "AwaitExpression",
                            "start": 73,
                            "end": 84,
                            "argument": {
                              "type": "CallExpression",
                              "start": 79,
                              "end": 84,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 79,
                                "end": 82,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 79,
                                  "end": 80,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 81,
                                  "end": 82,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
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
