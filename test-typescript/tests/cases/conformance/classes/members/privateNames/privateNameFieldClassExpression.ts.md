privateNameFieldClassExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 196,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 130,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "start": 21,
              "end": 129,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 27,
                "end": 129,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 37,
                    "end": 96,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 48,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 48,
                      "end": 96,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 51,
                        "end": 96,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 65,
                            "end": 86,
                            "expression": {
                              "type": "CallExpression",
                              "start": 65,
                              "end": 85,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 77,
                                  "end": 84,
                                  "raw": "\"hello\"",
                                  "value": "hello"
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 65,
                                "end": 76,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 65,
                                  "end": 72,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 76,
                                  "decorators": [],
                                  "name": "log",
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
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 105,
                    "end": 123,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 116,
                      "decorators": [],
                      "name": "test",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "start": 119,
                      "end": 122,
                      "raw": "123",
                      "value": 123
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 194,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 135,
              "end": 140,
              "name": "foo2"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "start": 143,
              "end": 193,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 153,
                "end": 193,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 163,
                    "end": 187,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 180,
                      "decorators": [],
                      "name": "otherClass",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "start": 183,
                      "end": 186,
                      "raw": "123",
                      "value": 123
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 149,
                "end": 152,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
