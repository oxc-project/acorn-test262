__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 88,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 86,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 86,
              "body": {
                "type": "TSModuleBlock",
                "start": 35,
                "end": 86,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 45,
                    "end": 80,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 52,
                      "end": 80,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 56,
                          "end": 79,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 62,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 65,
                            "end": 79,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 67,
                                "end": 71,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 67,
                                  "end": 68,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 70,
                                  "end": 71,
                                  "raw": "0",
                                  "value": 0
                                }
                              },
                              {
                                "type": "Property",
                                "start": 73,
                                "end": 77,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 74,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 76,
                                  "end": 77,
                                  "raw": "0",
                                  "value": 0
                                }
                              }
                            ]
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
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
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "kind": "module"
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
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
  "end": 114,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 113,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 113,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 111,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 56,
              "end": 111,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 111,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 105,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 90,
                      "end": 104,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 92,
                          "end": 96,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 93,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 95,
                            "end": 96,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 98,
                          "end": 102,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 101,
                            "end": 102,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 70,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "params": []
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
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
  "end": 192,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 191,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 191,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 87,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 87,
              "body": {
                "type": "TSModuleBlock",
                "start": 36,
                "end": 87,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 46,
                    "end": 81,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 53,
                      "end": 81,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 57,
                          "end": 80,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 57,
                            "end": 63,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 66,
                            "end": 80,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 68,
                                "end": 72,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 68,
                                  "end": 69,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 71,
                                  "end": 72,
                                  "raw": "0",
                                  "value": 0
                                }
                              },
                              {
                                "type": "Property",
                                "start": 74,
                                "end": 78,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 75,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 77,
                                  "end": 78,
                                  "raw": "0",
                                  "value": 0
                                }
                              }
                            ]
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
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
                "start": 30,
                "end": 35,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 127,
            "end": 189,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 134,
              "end": 189,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 189,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 161,
                    "end": 183,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 168,
                      "end": 182,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 170,
                          "end": 174,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 171,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 173,
                            "end": 174,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 176,
                          "end": 180,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 177,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 179,
                            "end": 180,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 143,
                "end": 148,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "params": []
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
