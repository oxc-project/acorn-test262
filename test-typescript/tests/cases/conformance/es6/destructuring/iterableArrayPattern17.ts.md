iterableArrayPattern17.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 276,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 41,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 218,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 68,
            "end": 162,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 72,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 162,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 85,
                    "end": 156,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 92,
                      "end": 155,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 106,
                          "end": 120,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 111,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "NewExpression",
                            "start": 113,
                            "end": 120,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 117,
                              "end": 120,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 134,
                          "end": 145,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "done",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 140,
                            "end": 145,
                            "raw": "false",
                            "value": false
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
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 216,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 169,
              "end": 184,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 175,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 176,
                "end": 184,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 216,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 216,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 198,
                    "end": 210,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 205,
                      "end": 209
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
        "start": 50,
        "end": 61,
        "decorators": [],
        "name": "FooIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 220,
      "end": 254,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 251,
        "end": 254,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 232,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 233,
          "end": 249,
          "argument": {
            "type": "ArrayPattern",
            "start": 236,
            "end": 242,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 237,
                "end": 238,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 249,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 244,
              "end": 249,
              "elementType": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 247,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 247,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 276,
      "expression": {
        "type": "CallExpression",
        "start": 255,
        "end": 275,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 259,
            "end": 274,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 263,
              "end": 274,
              "decorators": [],
              "name": "FooIterator",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 255,
          "end": 258,
          "decorators": [],
          "name": "fun",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
