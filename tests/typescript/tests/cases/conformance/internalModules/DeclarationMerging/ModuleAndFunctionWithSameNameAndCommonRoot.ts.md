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
        "name": "A",
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
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 40
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 62,
                            "end": 68
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 73,
                                  "end": 74
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 76,
                                  "end": 77
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 73,
                                "end": 77
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 79,
                                  "end": 80
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 82,
                                  "end": 83
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 79,
                                "end": 83
                              }
                            ],
                            "start": 71,
                            "end": 85
                          },
                          "definite": false,
                          "start": 62,
                          "end": 85
                        }
                      ],
                      "declare": false,
                      "start": 58,
                      "end": 86
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 51,
                    "end": 86
                  }
                ],
                "start": 41,
                "end": 92
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 25,
              "end": 92
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 92
          }
        ],
        "start": 12,
        "end": 94
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
}
```
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
        "name": "A",
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
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 73
              },
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 96
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 98,
                            "end": 99
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 95,
                          "end": 99
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 101,
                            "end": 102
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 104,
                            "end": 105
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 101,
                          "end": 105
                        }
                      ],
                      "start": 93,
                      "end": 107
                    },
                    "start": 86,
                    "end": 108
                  }
                ],
                "start": 76,
                "end": 114
              },
              "expression": false,
              "start": 59,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 52,
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
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 117
}
```
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
        "name": "B",
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
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 41
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 69
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 74,
                                  "end": 75
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 77,
                                  "end": 78
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 74,
                                "end": 78
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 80,
                                  "end": 81
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 83,
                                  "end": 84
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 80,
                                "end": 84
                              }
                            ],
                            "start": 72,
                            "end": 86
                          },
                          "definite": false,
                          "start": 63,
                          "end": 86
                        }
                      ],
                      "declare": false,
                      "start": 59,
                      "end": 87
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 52,
                    "end": 87
                  }
                ],
                "start": 42,
                "end": 93
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 26,
              "end": 93
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 93
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 154
              },
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 176,
                            "end": 177
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 179,
                            "end": 180
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 176,
                          "end": 180
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 183
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 185,
                            "end": 186
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 182,
                          "end": 186
                        }
                      ],
                      "start": 174,
                      "end": 188
                    },
                    "start": 167,
                    "end": 189
                  }
                ],
                "start": 157,
                "end": 195
              },
              "expression": false,
              "start": 140,
              "end": 195
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 133,
            "end": 195
          }
        ],
        "start": 12,
        "end": 197
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 197
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 197
}
```
