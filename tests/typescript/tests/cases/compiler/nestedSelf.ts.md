__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 46,
                      "end": 48
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 35,
                    "end": 49
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 63
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 69,
                                      "end": 70
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2",
                                      "start": 71,
                                      "end": 72
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3",
                                      "start": 73,
                                      "end": 74
                                    }
                                  ],
                                  "start": 68,
                                  "end": 75
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "map",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 76,
                                  "end": 79
                                },
                                "optional": false,
                                "computed": false,
                                "start": 68,
                                "end": 79
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 81,
                                      "end": 82
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 96,
                                              "end": 100
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "n",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 101,
                                              "end": 102
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 96,
                                            "end": 102
                                          },
                                          "operator": "*",
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 105,
                                            "end": 106
                                          },
                                          "start": 96,
                                          "end": 106
                                        },
                                        "start": 89,
                                        "end": 107
                                      }
                                    ],
                                    "start": 87,
                                    "end": 109
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 80,
                                  "end": 109
                                }
                              ],
                              "optional": false,
                              "start": 68,
                              "end": 110
                            },
                            "directive": null,
                            "start": 68,
                            "end": 110
                          }
                        ],
                        "start": 66,
                        "end": 111
                      },
                      "expression": false,
                      "start": 63,
                      "end": 111
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 53,
                    "end": 111
                  }
                ],
                "start": 30,
                "end": 114
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 114
          }
        ],
        "start": 12,
        "end": 116
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 117
}
```
