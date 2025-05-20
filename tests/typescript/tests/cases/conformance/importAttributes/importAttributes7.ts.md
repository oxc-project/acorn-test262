__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 54,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 54,
        "properties": [
          {
            "type": "Property",
            "start": 21,
            "end": 27,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 27,
              "raw": "\"a\"",
              "value": "a"
            }
          },
          {
            "type": "Property",
            "start": 33,
            "end": 39,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          {
            "type": "Property",
            "start": 45,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 45,
              "end": 46,
              "raw": "1",
              "value": 1
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 48,
              "end": 51,
              "raw": "\"1\"",
              "value": "1"
            }
          }
        ]
      },
      "exportKind": "value"
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
  "end": 158,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 27,
          "end": 33,
          "key": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 30,
            "end": 33,
            "raw": "\"a\"",
            "value": "a"
          }
        },
        {
          "type": "ImportAttribute",
          "start": 35,
          "end": 43,
          "key": {
            "type": "Literal",
            "start": 35,
            "end": 38,
            "raw": "\"b\"",
            "value": "b"
          },
          "value": {
            "type": "Literal",
            "start": 40,
            "end": 43,
            "raw": "\"b\"",
            "value": "b"
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 158,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 55,
        "end": 158,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 74,
          "end": 158,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 80,
              "end": 149,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 86,
                  "end": 148,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ImportExpression",
                    "start": 90,
                    "end": 148,
                    "options": {
                      "type": "ObjectExpression",
                      "start": 104,
                      "end": 147,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 114,
                          "end": 140,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 118,
                            "decorators": [],
                            "name": "with",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 120,
                            "end": 140,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 122,
                                "end": 128,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 122,
                                  "end": 123,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 125,
                                  "end": 128,
                                  "raw": "\"a\"",
                                  "value": "a"
                                }
                              },
                              {
                                "type": "Property",
                                "start": 130,
                                "end": 138,
                                "computed": false,
                                "key": {
                                  "type": "Literal",
                                  "start": 130,
                                  "end": 133,
                                  "raw": "\"b\"",
                                  "value": "b"
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 135,
                                  "end": 138,
                                  "raw": "\"b\"",
                                  "value": "b"
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "source": {
                      "type": "Literal",
                      "start": 97,
                      "end": 102,
                      "raw": "\"./a\"",
                      "value": "./a"
                    },
                    "phase": null
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 154,
              "end": 156,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
