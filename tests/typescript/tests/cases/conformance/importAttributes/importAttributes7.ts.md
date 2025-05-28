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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 27,
              "value": "a",
              "raw": "\"a\""
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 33,
            "end": 39,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "value": "b",
              "raw": "\"b\""
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 45,
            "end": 51,
            "kind": "init",
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
            "method": false,
            "shorthand": false,
            "computed": false,
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
  "end": 158,
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 74,
          "end": 158,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 80,
              "end": 149,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 86,
                  "end": 148,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 118,
                            "decorators": [],
                            "name": "with",
                            "optional": false,
                            "typeAnnotation": null
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 122,
                                  "end": 123,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 125,
                                  "end": 128,
                                  "value": "a",
                                  "raw": "\"a\""
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 130,
                                "end": 138,
                                "kind": "init",
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
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "phase": null
                  },
                  "definite": false
                }
              ],
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
