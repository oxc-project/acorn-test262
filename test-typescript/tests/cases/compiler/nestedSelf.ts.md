nestedSelf.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
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
            "start": 12,
            "end": 111,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 19,
              "end": 111,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 27,
                "end": 111,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 32,
                    "end": 46,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "start": 43,
                      "end": 45,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 50,
                    "end": 108,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 60,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 60,
                      "end": 108,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 63,
                        "end": 108,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 65,
                            "end": 107,
                            "expression": {
                              "type": "CallExpression",
                              "start": 65,
                              "end": 107,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 77,
                                  "end": 106,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 84,
                                    "end": 106,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 86,
                                        "end": 104,
                                        "argument": {
                                          "type": "BinaryExpression",
                                          "start": 93,
                                          "end": 103,
                                          "operator": "*",
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 93,
                                            "end": 99,
                                            "computed": false,
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 93,
                                              "end": 97
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 98,
                                              "end": 99,
                                              "decorators": [],
                                              "name": "n",
                                              "optional": false
                                            }
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 102,
                                            "end": 103,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 78,
                                      "end": 79,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 65,
                                "end": 76,
                                "computed": false,
                                "object": {
                                  "type": "ArrayExpression",
                                  "start": 65,
                                  "end": 72,
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "start": 66,
                                      "end": 67,
                                      "raw": "1",
                                      "value": 1
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 68,
                                      "end": 69,
                                      "raw": "2",
                                      "value": 2
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 70,
                                      "end": 71,
                                      "raw": "3",
                                      "value": 3
                                    }
                                  ]
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 76,
                                  "decorators": [],
                                  "name": "map",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
