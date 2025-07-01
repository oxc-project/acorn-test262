__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 24,
              "end": 27
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 21,
            "end": 27
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "value": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 36,
              "end": 39
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 33,
            "end": 39
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 45,
              "end": 46
            },
            "value": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 48,
              "end": 51
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 45,
            "end": 51
          }
        ],
        "start": 15,
        "end": 54
      },
      "exportKind": "value",
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 14,
        "end": 19
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "value": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 30,
            "end": 33
          },
          "start": 27,
          "end": 33
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 35,
            "end": 38
          },
          "value": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 40,
            "end": 43
          },
          "start": 35,
          "end": 43
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 71
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 87
                  },
                  "init": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "Literal",
                      "value": "./a",
                      "raw": "\"./a\"",
                      "start": 97,
                      "end": 102
                    },
                    "options": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "with",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 114,
                            "end": 118
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 122,
                                  "end": 123
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 125,
                                  "end": 128
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 122,
                                "end": 128
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 130,
                                  "end": 133
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 135,
                                  "end": 138
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 130,
                                "end": 138
                              }
                            ],
                            "start": 120,
                            "end": 140
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 114,
                          "end": 140
                        }
                      ],
                      "start": 104,
                      "end": 147
                    },
                    "phase": null,
                    "start": 90,
                    "end": 148
                  },
                  "definite": false,
                  "start": 86,
                  "end": 148
                }
              ],
              "declare": false,
              "start": 80,
              "end": 149
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "directive": null,
              "start": 154,
              "end": 156
            }
          ],
          "start": 74,
          "end": 158
        },
        "expression": false,
        "start": 55,
        "end": 158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 48,
      "end": 158
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
