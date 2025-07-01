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
        "start": 7,
        "end": 8
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
                "start": 25,
                "end": 26
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
                      "start": 39,
                      "end": 40
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 43,
                      "end": 45
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 32,
                    "end": 46
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
                      "start": 57,
                      "end": 60
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
                                      "start": 66,
                                      "end": 67
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2",
                                      "start": 68,
                                      "end": 69
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3",
                                      "start": 70,
                                      "end": 71
                                    }
                                  ],
                                  "start": 65,
                                  "end": 72
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "map",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 73,
                                  "end": 76
                                },
                                "optional": false,
                                "computed": false,
                                "start": 65,
                                "end": 76
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
                                      "start": 78,
                                      "end": 79
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
                                              "start": 93,
                                              "end": 97
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "n",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 98,
                                              "end": 99
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 93,
                                            "end": 99
                                          },
                                          "operator": "*",
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 102,
                                            "end": 103
                                          },
                                          "start": 93,
                                          "end": 103
                                        },
                                        "start": 86,
                                        "end": 104
                                      }
                                    ],
                                    "start": 84,
                                    "end": 106
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 77,
                                  "end": 106
                                }
                              ],
                              "optional": false,
                              "start": 65,
                              "end": 107
                            },
                            "directive": null,
                            "start": 65,
                            "end": 107
                          }
                        ],
                        "start": 63,
                        "end": 108
                      },
                      "expression": false,
                      "start": 60,
                      "end": 108
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 50,
                    "end": 108
                  }
                ],
                "start": 27,
                "end": 111
              },
              "abstract": false,
              "declare": false,
              "start": 19,
              "end": 111
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12,
            "end": 111
          }
        ],
        "start": 9,
        "end": 113
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
