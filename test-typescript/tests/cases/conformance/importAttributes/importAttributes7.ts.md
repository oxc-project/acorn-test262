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
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 27,
              "value": "a",
              "raw": "\"a\""
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 33,
            "end": 39,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "value": "b",
              "raw": "\"b\""
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 45,
            "end": 51,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 45,
              "end": 46,
              "value": 1,
              "raw": "1"
            },
            "value": {
              "type": "Literal",
              "start": 48,
              "end": 51,
              "value": "1",
              "raw": "\"1\""
            },
            "kind": "init",
            "optional": false
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
  "end": 159,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 27,
          "end": 33,
          "key": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 30,
            "end": 33,
            "value": "a",
            "raw": "\"a\""
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
            "value": "b",
            "raw": "\"b\""
          },
          "value": {
            "type": "Literal",
            "start": 40,
            "end": 43,
            "value": "b",
            "raw": "\"b\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 158,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 55,
        "end": 158,
        "id": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
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
                  "id": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ImportExpression",
                    "start": 90,
                    "end": 148,
                    "source": {
                      "type": "Literal",
                      "start": 97,
                      "end": 102,
                      "value": "./a",
                      "raw": "\"./a\""
                    },
                    "options": {
                      "type": "ObjectExpression",
                      "start": 104,
                      "end": 147,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 114,
                          "end": 140,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 118,
                            "name": "with",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 120,
                            "end": 140,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 122,
                                "end": 128,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 122,
                                  "end": 123,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 125,
                                  "end": 128,
                                  "value": "a",
                                  "raw": "\"a\""
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 130,
                                "end": 138,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Literal",
                                  "start": 130,
                                  "end": 133,
                                  "value": "b",
                                  "raw": "\"b\""
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 135,
                                  "end": 138,
                                  "value": "b",
                                  "raw": "\"b\""
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 154,
              "end": 156,
              "expression": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
